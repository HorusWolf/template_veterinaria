"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Stethoscope, Scissors, Shield } from "lucide-react"

export default function Services() {
  const servicesRef = useRef(null)
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Stethoscope,
      title: "General Consultations",
      description: "Complete examinations and accurate diagnoses for your pet",
    },
    {
      icon: Scissors,
      title: "Surgeries",
      description: "Surgical procedures with cutting-edge technology",
    },
    {
      icon: Shield,
      title: "Vaccination",
      description: "Complete and personalized vaccination programs",
    },
    {
      icon: Heart,
      title: "24/7 Emergency",
      description: "Emergency care available 24 hours a day",
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
    <section id="services" className="py-12">
      <div className="max-w-full mx-auto px-6 sm:px-10">
        <motion.div
          ref={servicesRef}
          variants={containerVariants}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-5xl font-bold text-gray-800 mb-4">
            Our Services
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of veterinary services to keep your pet healthy and happy
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

