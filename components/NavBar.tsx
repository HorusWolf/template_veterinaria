"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Logo from "./Logo"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = ["Home", "Services", "About", "Testimonials", "Contact"]

  return (
    <motion.header
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-full mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-blue-600 transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} whileTap={{ scale: 0.95 }}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          className="md:hidden mt-4"
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
        >
          <div className="space-y-2 pb-4">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-600 hover:text-blue-600 transition-colors py-2"
                whileHover={{ x: 10 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  )
}
