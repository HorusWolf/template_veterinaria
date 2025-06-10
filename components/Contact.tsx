"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
      <div className="max-w-full mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-xl mb-8 text-blue-100">
              We're here to help. Schedule your appointment or contact us for any emergency.
            </p>

            <div className="space-y-4">
              {[
                { icon: Phone, text: "(+505) 8123-4567" },
                { icon: Mail, text: "info@petcare.com" },
                { icon: MapPin, text: "Villa Venezuela, Managua" },
              ].map((contact, index) => (
                <motion.div
                  key={contact.text}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: false }}
                  className="flex items-center space-x-4"
                >
                  <contact.icon className="h-6 w-6 text-blue-200" />
                  <span className="text-lg">{contact.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Schedule an Appointment</h3>
                <form className="space-y-4">
                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Input placeholder="Your name" className="w-full" />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Input placeholder="Email" type="email" className="w-full" />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Input placeholder="Phone" className="w-full" />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Textarea placeholder="Describe the reason for your visit" className="w-full h-32" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Submit Request</Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

