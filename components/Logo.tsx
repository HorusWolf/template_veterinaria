"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Logo() {
  return (
    <motion.div
      className="flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Heart className="h-8 w-8 text-blue-600" />
      <span className="text-2xl font-bold text-gray-800">PetCare</span>
    </motion.div>
  )
}
