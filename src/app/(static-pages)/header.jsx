"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Socials", href: "/socials" },
  { name: "Team", href: "/team" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#0E2604]">
      <header className="flex container mx-auto p-4 justify-between items-center text-white">
        <div className="logo-wrapper grow">
          <Image
            src="/images/logo-light.png"
            alt="logo"
            width={570}
            height={94}
            className="w-32"
          />
        </div>
        <nav className="grow hidden md:flex justify-between">
          <ul className="flex items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.name + link.href}>
                <Link className="hover:underline" href={link.href}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="buttons flex gap-2">
            <Button variant="ghost">
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button className="rounded-full bg-white text-black hover:bg-white hover:scale-105 transition-all">
              <Link href="/auth/register">Register</Link>
            </Button>
          </div>
        </nav>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px]"
              aria-describedby={undefined}
            >
              <VisuallyHidden>
                <SheetTitle>Menu</SheetTitle>
              </VisuallyHidden>

              <nav className="flex flex-col gap-4">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base text-center font-medium hover:bg-muted"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button variant="ghost">
                  <Link href="/auth/login">Login</Link>
                </Button>
                <Button className="rounded-full hover:scale-105 transition-all">
                  <Link href="/auth/register">Register</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
};

export default Header;
