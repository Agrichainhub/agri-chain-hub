use ic_cdk::api::call;
use ic_cdk::export::Principal;
use ic_cdk_macros::{query, update};
use serde::{Deserialize, Serialize};
use std::cell::RefCell;

#[derive(Serialize, Deserialize, Clone)]
pub struct Product {
    id: String,
    name: String,
    description: String,
    price: u64,
    seller: Principal,
}

#[derive(Serialize, Deserialize, Clone)]
pub struct User {
    id: Principal,
    username: String,
    balance: u64,
}

thread_local! {
    static PRODUCTS: RefCell<Vec<Product>> = RefCell::new(Vec::new());
    static USERS: RefCell<Vec<User>> = RefCell::new(Vec::new());
    static BALANCES: RefCell<std::collections::HashMap<Principal, u64>> = RefCell::new(std::collections::HashMap::new());
}

#[update]
pub fn add_user(username: String) -> String {
    let caller = ic_cdk::caller();
    let user = User {
        id: caller,
        username,
        balance: 0,
    };
    USERS.with(|users| {
        users.borrow_mut().push(user);
    });
    BALANCES.with(|balances| {
        balances.borrow_mut().insert(caller, 0);
    });
    "User added successfully".to_string()
}

#[update]
pub fn add_product(id: String, name: String, description: String, price: u64) -> String {
    let seller = ic_cdk::caller();
    let product = Product {
        id,
        name,
        description,
        price,
        seller,
    };
    PRODUCTS.with(|products| {
        products.borrow_mut().push(product);
    });
    "Product added successfully".to_string()
}

#[query]
pub fn get_all_products() -> Vec<Product> {
    PRODUCTS.with(|products| products.borrow().clone())
}

#[update]
pub fn purchase_product(product_id: String) -> String {
    let buyer = ic_cdk::caller();
    let mut buyer_balance = BALANCES.with(|balances| balances.borrow_mut().get_mut(&buyer).unwrap_or(&mut 0));

    let product_opt = PRODUCTS.with(|products| {
        products.borrow().iter().find(|&prod| prod.id == product_id)
    });

    match product_opt {
        Some(product) => {
            if *buyer_balance >= product.price {
                // Reduce buyer's balance
                *buyer_balance -= product.price;

                // Find seller and increase their balance
                let seller_balance = BALANCES.with(|balances| balances.borrow_mut().get_mut(&product.seller).unwrap_or(&mut 0));
                *seller_balance += product.price;

                "Purchase successful".to_string()
            } else {
                "Insufficient balance".to_string()
            }
        }
        None => "Product not found".to_string(),
    }
}

#[update]
pub fn add_balance(user_id: Principal, amount: u64) -> String {
    let balance = BALANCES.with(|balances| balances.borrow_mut().get_mut(&user_id));
    
    match balance {
        Some(user_balance) => {
            *user_balance += amount;
            "Balance added successfully".to_string()
        }
        None => "User not found".to_string(),
    }
}
