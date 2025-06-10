"use client"

import NavBar from "@/components/NavBar"
import Hero from "@/components/Hero"
import Servicios from "@/components/Services"
import AboutUs from "@/components/AboutUs"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Page() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-blue-50 to-green-50">
      <NavBar />
      <Hero />
      <Servicios />
      <AboutUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
