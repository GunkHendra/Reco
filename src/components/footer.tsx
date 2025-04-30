// components/Footer.tsx
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SiX, SiInstagram, SiLinkedin, SiFacebook, SiGithub } from "react-icons/si"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-gradient-to-tr from-primary/10 to-background text-primary pt-10 pb-5 mt-18">
            <div className="w-full px-24 flex justify-between">
                {/* Logo & Description */}
                <div className="flex items-center space-x-4 ml-3">
                    <Image src="/logo.png" alt="Logo" width={28} height={28} />
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Recommetra</h2>
                        <p className="text-sm">
                            Recommetra helps you find the best products tailored to your needs using AI-powered recommendations.
                        </p>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/features" className="hover:underline">Features</a></li>
                        <li><a href="/about" className="hover:underline">About Us</a></li>
                        <li><a href="/blog" className="hover:underline">Blog</a></li>
                        <li><a href="/faq" className="hover:underline">FAQ</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/help" className="hover:underline">Help Center</a></li>
                        <li><a href="/guide" className="hover:underline">User Guide</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                        <li><a href="/report" className="hover:underline">Report an Issue</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
                    <p className="text-sm mb-3">Subscribe to receive the latest updates and tips.</p>
                    <div className="flex gap-2">
                        <Input placeholder="Your email" className="bg-white text-black" />
                        <Button>Subscribe</Button>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-primary mt-10 pt-6 px-6 flex flex-col md:flex-row justify-between items-center text-sm">
                <p>© 2025 Recommetra. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white"><SiX size={18} /></a>
                    <a href="#" className="hover:text-white"><SiInstagram size={18} /></a>
                    <a href="#" className="hover:text-white"><SiLinkedin size={18} /></a>
                    <a href="#" className="hover:text-white"><SiFacebook size={18} /></a>
                    <a href="#" className="hover:text-white"><SiGithub size={18} /></a>
                </div>
            </div>
        </footer>
    )
}
