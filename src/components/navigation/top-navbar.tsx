"use client";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import {
    NavigationMenu,
    // NavigationMenuContent,
    // NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    // NavigationMenuTrigger,
    // NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { usePathname } from "next/navigation";
// import Image from "next/image";


const menu = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Chat",
        url: "/chat",
    },
    {
        title: "About Us",
        url: "/about",
    },
    {
        title: "Login/Register",
        url: "/auth",
    },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        // <nav className="flex justify-between items-center h-16 bg-background fixed top-0 z-50 w-full">
        <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[94%] max-w-screen z-50 ${isOpen ? 'bg-background' : 'bg-transparent shadow-none sm:bg-white/10 sm:shadow-md'} backdrop-blur-md rounded-lg py-3 flex items-center justify-between`}>

            <div className="flex px-4">
                {/* Hamburger Menu Icon */}
                <div className="sm:hidden items-center flex justify-center">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <XIcon className="text-primary w-6 h-6 cursor-pointer" /> : <MenuIcon className="text-primary w-6 h-6 cursor-pointer" />}
                    </button>
                </div>

                {/* Logo */}
                <Link href={menu[0].url}>
                    <span className="text-lg sm:text-xl font-medium text-primary px-3">RECO</span>
                </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden sm:flex px-4">
                <NavigationMenu>
                    <NavigationMenuList className="flex">
                        {menu.map((item, index) => (
                            <NavigationMenuItem key={index}>
                                <NavigationMenuLink href={item.url} className={`px-3 text-primary/70 ${pathname === item.url ? "text-primary" : ""}`}>
                                    {item.title}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </ul>

            {/* Mobile Menu */}
            {/* {isOpen && (
                <ul className="flex flex-col absolute bg-background top-10 w-full sm:hidden py-4 z-40 rounded-b-lg">
                    {menu.map((item, index) => (
                        <Link key={index} href={item.url}>
                            <li className="px-5 py-2 hover:bg-accent hover:text-accent-foreground transition duration-200">
                                <span className="text-primary">{item.title}</span>
                            </li>
                        </Link>
                    ))}
                </ul>
            )} */}
            <ul className={`flex flex-col absolute bg-background top-10 w-full sm:hidden py-4 z-40 rounded-b-lg transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}>
                {menu.map((item, index) => (
                    <Link key={index} href={item.url}>
                        <li className="px-5 py-2 hover:bg-accent hover:text-accent-foreground transition duration-200">
                            <span className="text-primary">{item.title}</span>
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
}
