"use client";

import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Banknote, Package } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UploadDropzone } from "@/lib/uploadthing";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import Image from "next/image";
import { ProductSchema } from "@/schemas";
import { addProduct } from "@/actions/addProduct";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

const SellPage = ({ products }) => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [activeTab, setActiveTab] = useState("add");

  const form = useForm({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      quantity: "",
      unit: "",
      category: "",
      images: [],
    },
  });

  useEffect(() => {
    // Set the tab based on the URL hash on initial load
    const hash = window.location.hash.substring(1); // Remove the '#' character
    if (hash === "view" || hash === "add") {
      setActiveTab(hash);
    }

    // Update the tab if hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.substring(1);
      if (newHash === "view" || newHash === "add") {
        setActiveTab(newHash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleTabChange = (value) => {
    setActiveTab(value);
    window.location.hash = value; // Update the URL hash
  };

  async function onSubmit(values) {
    const response = await addProduct(values);

    if (response.error) {
      toast.error(response.error);
      return;
    }

    toast.success("Product Added", {
      description: "Your product has been successfully listed.",
    });
    form.reset();
    setUploadedImages([]); // Reset uploaded images after submission
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">View or Add Products</h1>

      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <TabsList>
          <TabsTrigger value="add">Add Products to sell</TabsTrigger>
          <TabsTrigger value="view">View your Listed Products</TabsTrigger>
        </TabsList>
        <TabsContent value="add">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Add New Product</CardTitle>
              <CardDescription>
                Fill out the form below to list a new product for sale.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Product Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g. Organic Tomatoes"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Price</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Banknote className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                              <Input
                                type="number"
                                step="0.01"
                                min="0"
                                placeholder="0.00"
                                className="pl-10"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="quantity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Quantity</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min="0"
                              placeholder="e.g. 100"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="unit"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Unit</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a unit" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="kg">Kilogram (kg)</SelectItem>
                              <SelectItem value="lb">Pound (lb)</SelectItem>
                              <SelectItem value="piece">Piece</SelectItem>
                              <SelectItem value="dozen">Dozen</SelectItem>
                              <SelectItem value="liter">Liter</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="fruits">Fruits</SelectItem>
                              <SelectItem value="vegetables">
                                Vegetables
                              </SelectItem>
                              <SelectItem value="dairy">
                                Dairy & Eggs
                              </SelectItem>
                              <SelectItem value="meat">
                                Meat & Poultry
                              </SelectItem>
                              <SelectItem value="grains">
                                Grains & Cereals
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your product..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Provide details about your product, including quality,
                          origin, etc.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Image Upload Section */}
                  <FormField
                    control={form.control}
                    name="images"
                    render={() => (
                      <FormItem>
                        <FormLabel>Upload Images</FormLabel>
                        <UploadDropzone
                          endpoint="imageUploader"
                          onClientUploadComplete={(res) => {
                            const newImages = res.map((file) => file.url);
                            setUploadedImages((prev) => [
                              ...prev,
                              ...newImages,
                            ]);
                            form.setValue("images", [
                              ...uploadedImages,
                              ...newImages,
                            ]); // Update form with image URLs
                          }}
                          onUploadError={(error) => {
                            alert(`Upload Error! ${error.message}`);
                          }}
                        />
                        {/* Preview the uploaded images */}
                        <div className="mt-4 flex flex-wrap gap-4">
                          {uploadedImages.map((url, index) => (
                            <Image
                              key={index}
                              src={url}
                              width={200}
                              height={200}
                              alt="Uploaded preview"
                              className="w-32 h-32 object-cover rounded-md shadow-sm"
                            />
                          ))}
                        </div>
                      </FormItem>
                    )}
                  />
                  <Button type="submit">
                    <Plus className="mr-2 h-4 w-4" /> Add Product
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="view">
          {products.length === 0 ? (
            <Card>
              <CardContent className="text-center py-6">
                <Package className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-600">
                  No products listed yet. Add your first product above!
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="flex flex-wrap justify-between gap-6">
              {products.map((product) => (
                <Card key={product.id}>
                  <Link href={`/products/${product.id}`}>
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>{product.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={product.images[0]}
                        width={200}
                        height={200}
                        alt="Uploaded preview"
                        className="w-32 h-32 object-cover rounded-md shadow-sm"
                      />
                      <p className="text-2xl font-bold">
                        &#8358;{product.price.toFixed(2)} / {product.unit}
                      </p>
                      <p className="text-sm text-gray-500">
                        Quantity: {product.quantity} {product.unit}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">
                        <Edit className="mr-2 h-4 w-4" /> Edit
                      </Button>
                      <Button variant="destructive">
                        <Trash2 className="mr-2 h-4 w-4" /> Delete
                      </Button>
                    </CardFooter>
                  </Link>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SellPage;
