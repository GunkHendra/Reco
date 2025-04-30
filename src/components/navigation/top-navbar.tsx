"use client";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Image from "next/image";


const menu = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Chat",
        url: "/chat/1",
    },
    {
        title: "About Us",
        url: "/about",
    },
    {
        title: "Login",
        url: "/login",
    },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // <nav className="flex justify-between items-center h-16 bg-background fixed top-0 z-50 w-full">
        <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[94%] max-w-screen z-50 ${isOpen ? 'bg-background' : 'bg-white/10'} backdrop-blur-md shadow-md rounded-lg py-3 flex items-center justify-between`}>

            <div className="flex px-4">
                {/* Hamburger Menu Icon */}
                <div className="sm:hidden items-center flex justify-center">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <XIcon className="text-primary w-6 h-6 cursor-pointer" /> : <MenuIcon className="text-primary w-6 h-6 cursor-pointer" />}
                    </button>
                </div>

                {/* Logo */}
                <Link href={menu[0].url}>
                    <span className="text-lg sm:text-xl font-medium text-primary px-3">Recommetra</span>
                </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden sm:flex px-4">
                <NavigationMenu>
                    <NavigationMenuList className="flex">
                        {menu.map((item, index) => (
                            <NavigationMenuItem key={index}>
                                <NavigationMenuLink href={item.url} className="px-3 text-primary">
                                    {item.title}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </ul>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="flex flex-col absolute bg-background top-10 w-full sm:hidden py-4 z-40 rounded-b-lg">
                    {menu.map((item, index) => (
                        <Link key={index} href={item.url}>
                            <li className="px-5 py-2 hover:bg-accent hover:text-accent-foreground transition duration-200">
                                <span className="text-primary">{item.title}</span>
                            </li>
                        </Link>
                    ))}
                </ul>
            )}
        </nav>
    );
}
