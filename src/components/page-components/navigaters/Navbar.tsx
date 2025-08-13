// components/page-components/navigaters/Navbar.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menu = [
        {title: "Catalog", link: "#catalog"},
        {title: "Structure", link: "#structure"},
        {title: "Review", link: "#review"},
        {title: "ผลงานการติดตั้ง", link: "#install"},
        {title: "สาขา", link: "#branches"},
        {title: "Contact", link: "#contact"},
    ]

    return (
        <>
        <nav className="bg-white md:fixed md:top-0 md:left-0 md:right-0 md:z-50 shadow-lg border-b">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Image src="/NEED.png" alt="logo" width={100} height={100} className="w-10 h-10" />
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {menu.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className="relative px-4 py-2 text-gray-700 font-medium prompt-r text-sm transition-all duration-300 hover:text-blue-600 group"
                            >
                                {item.title}
                                
                                {/* Hover Effect */}
                                <span className="absolute inset-x-1 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                                
                                {/* Hover Background */}
                                <span className="absolute inset-0 rounded-lg bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
                    >
                        <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="py-4 space-y-2 border-t">
                        {menu.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className="block px-4 py-3 text-gray-700 font-medium prompt-r hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-300 hover:pl-6"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}