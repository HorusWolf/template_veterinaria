"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonialsRef = useRef(null)
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" })

  const testimonials = [
    {
      name: "Maria Johnson",
      text: "Excellent care, my dog Max recovered completely thanks to Dr. Rodriguez.",
      rating: 5,
    },
    {
      name: "Carlos Smith",
      text: "Very professional and caring staff. Highly recommended.",
      rating: 5,
    },
    {
      name: "Anna Martinez",
      text: "The best veterinary clinic in the city. They always take great care of my cat Luna.",
      rating: 5,
    },
  ]

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
    <section id="testimonials" className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-full mx-auto px-6 sm:px-10">
        <motion.div
          ref={testimonialsRef}
          variants={containerVariants}
          initial="hidden"
          animate={testimonialsInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600">
            The satisfaction of our clients is our greatest reward
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={testimonialsInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotateX: 5,
              }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50">
                <CardContent className="p-8">
                  <motion.div
                    className="flex mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                      >
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
