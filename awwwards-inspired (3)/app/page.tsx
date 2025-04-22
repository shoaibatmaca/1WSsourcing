"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Globe, Shirt, Package, MessageSquare, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { QuoteModal } from "@/components/quote-modal"

export default function Home() {
  const [showQuoteModal, setShowQuoteModal] = useState(false)

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowQuoteModal(true)
  }

  const handleModalSubmit = (data: any) => {
    // Here you would handle the final form submission with all data
    console.log("Form submitted with data:", data)
    setShowQuoteModal(false)
    // Show success message or redirect
    alert("Your quote request has been submitted successfully!")
  }

  return (
    <div className="min-h-screen bg-[#f8f8f8]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#f8f8f8]/90 backdrop-blur-sm border-b border-gray-200">
        <div className="w-full max-w-[2000px] mx-auto flex items-center justify-between h-16 px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold">1WS.</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#services" className="text-sm font-medium hover:text-gray-600">
                Services
              </Link>
              <Link href="#industries" className="text-sm font-medium hover:text-gray-600">
                Industries
              </Link>
              <Link href="#about" className="text-sm font-medium hover:text-gray-600">
                About
              </Link>
              <Link href="#request" className="text-sm font-medium hover:text-gray-600">
                Request Quote
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                className="w-full pl-8 pr-4 py-2 rounded-full border border-gray-300 bg-white/80"
                placeholder="Search products or industries"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="outline" className="rounded-full border-black hover:bg-gray-100">
                Login / Sign Up
              </Button>
            </Link>
            <Button className="rounded-full bg-black text-white hover:bg-black/90">Contact Us</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 lg:py-32 border-b border-gray-200">
        <div className="w-full max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-black text-white rounded-sm px-2 py-1">GLOBAL SOURCING</Badge>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
                1WORLD
                <br />
                SOURCING
              </h1>
              <p className="text-xl text-gray-600 max-w-md">
                Your global sourcing partner. Pioneers in textiles and apparel with expertise across multiple
                industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="rounded-full bg-black text-white hover:bg-black/90 px-8">Get a Quote</Button>
                <Button variant="outline" className="rounded-full border-black hover:bg-gray-100 px-8">
                  Explore Services
                </Button>
              </div>
            </div>
            <div className="relative aspect-square bg-white rounded-lg overflow-hidden border border-gray-200">
              <Image
                src="/placeholder.svg?height=800&width=800&text=Next+Generation+Sourcing"
                alt="The Next Generation of Sourcing"
                width={800}
                height={800}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 border-b border-gray-200">
        <div className="w-full max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">20+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">50+</p>
              <p className="text-sm text-gray-600">Countries Served</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">1000+</p>
              <p className="text-sm text-gray-600">Clients Worldwide</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">24h</p>
              <p className="text-sm text-gray-600">Quote Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 lg:py-32 border-b border-gray-200">
        <div className="w-full max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <Badge className="bg-black text-white rounded-sm px-2 py-1 mb-4">SERVICES</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Global Sourcing Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              We connect you with the best manufacturers and suppliers worldwide, providing end-to-end sourcing
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Global Sourcing</h3>
              <p className="text-gray-600 mb-6">
                Access our worldwide network of vetted manufacturers and suppliers across multiple industries.
              </p>
              <Link href="#" className="inline-flex items-center text-sm font-medium">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                <Shirt className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Textile & Apparel</h3>
              <p className="text-gray-600 mb-6">
                Industry pioneers with deep expertise in textiles, fabrics, and finished apparel products.
              </p>
              <Link href="#" className="inline-flex items-center text-sm font-medium">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                <Package className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Custom Quotes</h3>
              <p className="text-gray-600 mb-6">
                Tailored quotes for your specific needs with competitive pricing and quality assurance.
              </p>
              <Link href="#" className="inline-flex items-center text-sm font-medium">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-16 md:py-24 lg:py-32 border-b border-gray-200">
        <div className="w-full max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-black text-white rounded-sm px-2 py-1">INDUSTRIES</Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Expertise Across <br />
                Multiple Industries
              </h2>
              <p className="text-xl text-gray-600">
                While we're pioneers in textiles and apparel, our sourcing expertise extends to many industries.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-black"></div>
                  <span>Textiles & Apparel</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-black"></div>
                  <span>Electronics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-black"></div>
                  <span>Furniture</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-black"></div>
                  <span>Home Goods</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-black"></div>
                  <span>Automotive</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-black"></div>
                  <span>Industrial Equipment</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400&text=Textiles"
                  alt="Textiles"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400&text=Electronics"
                  alt="Electronics"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400&text=Furniture"
                  alt="Furniture"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400&text=Automotive"
                  alt="Automotive"
                  width={400}
                  height={400}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Section */}
      <section id="request" className="py-16 md:py-24 lg:py-32">
        <div className="w-full max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-black text-white rounded-sm px-2 py-1">REQUEST A QUOTE</Badge>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Get Your <br />
                Custom Quote
              </h2>
              <p className="text-xl text-gray-600 max-w-md">
                Tell us what you need, and our sourcing experts will provide you with a detailed quote within 24 hours.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-black" />
                  <span className="text-sm">Quick Response</span>
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-black" />
                  <span className="text-sm">Global Network</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg">
              <form className="space-y-6" onSubmit={handleQuoteSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input id="name" placeholder="Enter your full name" className="rounded-md" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" className="rounded-md" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company Name
                  </label>
                  <Input id="company" placeholder="Enter your company name" className="rounded-md" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="industry" className="text-sm font-medium">
                    Industry
                  </label>
                  <select
                    id="industry"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select your industry</option>
                    <option value="textiles">Textiles & Apparel</option>
                    <option value="electronics">Electronics</option>
                    <option value="furniture">Furniture</option>
                    <option value="homegoods">Home Goods</option>
                    <option value="automotive">Automotive</option>
                    <option value="industrial">Industrial Equipment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Quote Details
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Describe what you're looking for in detail"
                    className="rounded-md min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full rounded-full bg-black text-white hover:bg-black/90">
                  Request Quote
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our terms and privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white border-t border-gray-200">
        <div className="w-full max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-16">
            <Badge className="bg-black text-white rounded-sm px-2 py-1 mb-4">TESTIMONIALS</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              We've helped businesses of all sizes source products from around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#f8f8f8] p-8 rounded-lg">
              <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-black"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "1WorldSourcing helped us find the perfect textile supplier for our clothing line. Their expertise in
                the industry is unmatched."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Fashion Brand CEO</p>
                </div>
              </div>
            </div>
            <div className="bg-[#f8f8f8] p-8 rounded-lg">
              <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-black"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "The quote process was incredibly fast and efficient. We received multiple options within 24 hours and
                found exactly what we needed."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div>
                  <p className="font-medium">Michael Chen</p>
                  <p className="text-sm text-gray-500">Procurement Manager</p>
                </div>
              </div>
            </div>
            <div className="bg-[#f8f8f8] p-8 rounded-lg">
              <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-black"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6">
                "Working with 1WorldSourcing has transformed our supply chain. Their global network and industry
                knowledge saved us both time and money."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div>
                  <p className="font-medium">Emma Rodriguez</p>
                  <p className="text-sm text-gray-500">Operations Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-4 px-6 py-3 bg-black text-white rounded-full">
          <Link href="#" className="text-sm font-medium">
            Services
          </Link>
          <div className="w-px h-4 bg-gray-600"></div>
          <Link href="#" className="text-sm font-medium">
            Industries
          </Link>
          <div className="w-px h-4 bg-gray-600"></div>
          <Link href="#" className="text-sm font-medium">
            About
          </Link>
          <div className="w-px h-4 bg-gray-600"></div>
          <Link href="#" className="text-sm font-medium">
            Contact
          </Link>
          <div className="w-px h-4 bg-gray-600"></div>
          <Link href="/auth/login">
            <Button variant="ghost" className="text-sm font-medium hover:bg-white/10 px-4">
              Login
            </Button>
          </Link>
          <div className="w-px h-4 bg-gray-600"></div>
          <Button variant="ghost" className="text-sm font-medium hover:bg-white/10 px-4">
            Request Quote
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 md:py-20 border-t border-gray-200">
        <div className="w-full max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">1WS.</h3>
              <p className="text-sm text-gray-600 mb-4">
                Your global sourcing partner with expertise in textiles, apparel, and multiple industries worldwide.
              </p>
              <div className="flex items-center gap-4">
                <Link href="#" className="text-gray-600 hover:text-black">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-black">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-black">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-black">
                    Global Sourcing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-black">
                    Textile & Apparel
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-black">
                    Custom Quotes
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-black">
                    Quality Assurance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase mb-4">Industries</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-black">
                    Textiles & Apparel
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-black">
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-black">
                    Furniture
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-black">
                    Automotive
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-black">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-black">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-black">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-black">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} 1WorldSourcing. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-gray-600 hover:text-black">
                Terms
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-black">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-black">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Quote Modal */}
      <QuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} onSubmit={handleModalSubmit} />
    </div>
  )
}
