"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SignupFormProps {
  quoteData?: any
}

export function SignupForm({ quoteData }: SignupFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: quoteData?.name || "",
    email: quoteData?.email || "",
    company: quoteData?.company || "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
  
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match")
      setIsLoading(false)
      return
    }
  
    try {
      const res = await fetch("http://localhost:8000/auth/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          username: formData.email, // or formData.name if preferred
          password: formData.password,
          first_name: formData.name.split(" ")[0] || "",
          last_name: formData.name.split(" ").slice(1).join(" ") || "",
          company: formData.company,
        }),
      })
  
      if (!res.ok) {
        const error = await res.json()
        console.error(error)
        alert("Signup failed")
        setIsLoading(false)
        return
      }
  
      // Auto-login after signup (optional)
      const loginRes = await fetch("http://localhost:8000/auth/jwt/create/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      })
  
      const loginData = await loginRes.json()
      if (loginData.access) {
        localStorage.setItem("accessToken", loginData.access)
        localStorage.setItem("refreshToken", loginData.refresh)
  
        // Finalize quote if any
        await fetch("http://localhost:8000/quote/finalize/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${loginData.access}`,
          },
          credentials: "include", // important!
        })
        
  
        router.push("/dashboard")
      } else {
        alert("Login failed after signup")
      }
    } catch (error) {
      console.error("Signup error:", error)
      alert("Something went wrong")
    }
  
    setIsLoading(false)
  }
  

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Create Your Account</h1>
        <p className="text-gray-600 mt-2">
          {quoteData ? "Complete your account setup to track your quote" : "Sign up to access our sourcing platform"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Full Name
          </label>
          <Input id="name" name="name" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="name@company.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium">
            Company Name
          </label>
          <Input
            id="company"
            name="company"
            placeholder="Your Company Ltd."
            required
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="text-sm font-medium">
            Confirm Password
          </label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <Button
          type="submit"
          className="w-full rounded-full bg-black text-white hover:bg-black/90"
          disabled={isLoading}
        >
          {isLoading ? "Creating Account..." : "Create Account"}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-medium hover:text-black">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
