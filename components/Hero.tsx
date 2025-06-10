"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, Stethoscope } from "lucide-react"

export default function Hero() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const heroInView = useInView(heroRef, { once: false })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="home" className="pt-20 pb-16 overflow-hidden">
      <motion.div ref={heroRef} className="max-w-full mx-auto px-6 sm:px-10 py-6 sm:py-10" style={{ y: heroY }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h1 variants={itemVariants} className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              We care for your
              <motion.span
                className="text-blue-600 block"
                animate={{
                  color: ["#2563eb", "#059669", "#dc2626", "#2563eb"],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                best friend
              </motion.span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-gray-600 leading-relaxed">
              Quality veterinary care with over 15 years of experience. Your pet deserves the best professional care.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Book Appointment
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="px-8 py-3 text-black">
                  24/7 Emergency
                </Button>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-blue-600"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  500+
                </motion.div>
                <div className="text-gray-600">Happy Pets</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-green-600"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                >
                  15+
                </motion.div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-purple-600"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                >
                  24/7
                </motion.div>
                <div className="text-gray-600">Availability</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2064&auto=format&fit=crop"
                alt="Veterinarian with pet"
                className="rounded-2xl shadow-2xl object-cover h-[600px] w-full"
              />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Heart className="h-6 w-6" />
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-green-500 text-white p-4 rounded-full shadow-lg"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Stethoscope className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
