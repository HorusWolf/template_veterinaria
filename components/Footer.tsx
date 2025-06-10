"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-800 text-white py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <div className="max-w-full mx-auto px-6 sm:px-10">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">PetCare</span>
            </div>
            <p className="text-gray-400">Caring for your best friend with love and professionalism.</p>
          </motion.div>

          {[
            {
              title: "Services",
              items: ["Consultations", "Surgeries", "Vaccination", "Emergency"],
            },
            {
              title: "Hours",
              items: ["Mon-Fri: 8:00-20:00", "Saturday: 9:00-18:00", "Sunday: 10:00-16:00", "Emergency 24/7"],
            },
            {
              title: "Contact",
              items: ["(+505) 8123-4567", "info@petcare.com", "Villa Venezuela", "Managua"],
            },
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false }}
            >
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
        >
          <p>&copy; 2025 Freekcode. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

