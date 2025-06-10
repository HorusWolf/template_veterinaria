"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Award, Users, Clock } from "lucide-react"

export default function AboutUs() {
  const aboutRef = useRef(null)
  const aboutInView = useInView(aboutRef, { once: false, margin: "-100px" })

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
    <section id="about" className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-full mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={aboutRef}
            initial={{ opacity: 0, x: -100 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
                alt="Veterinary team"
                className="rounded-2xl shadow-xl object-cover h-[500px] w-full"
              />
              <motion.div
                className="absolute inset-0 bg-blue-600/20 rounded-2xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.h2 variants={itemVariants} className="flex text-5xl font-bold justify-center text-gray-800">
              About Us
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed">
              With over 15 years of experience, we are a veterinary clinic committed to the well-being of your pet. Our
              team of highly trained professionals uses cutting-edge technology to provide the best possible care.
            </motion.p>

            <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: Award, title: "Certified", desc: "Certified professionals" },
                { icon: Users, title: "Team", desc: "Specialized staff" },
                { icon: Clock, title: "Hours", desc: "24/7 Care" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  className="text-center p-4 bg-white rounded-lg shadow-md"
                >
                  <item.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center mt-8">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Meet Our Team
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
