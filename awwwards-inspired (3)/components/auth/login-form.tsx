"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function LoginForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
  
    try {
      const res = await fetch("http://localhost:8000/auth/jwt/create/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      })
  
      const data = await res.json()
  
      if (data.access) {
        localStorage.setItem("accessToken", data.access)
        localStorage.setItem("refreshToken", data.refresh)
  
        // Finalize quote if any
        await fetch("http://localhost:8000/quote/finalize/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT  ${data.access}`,
          },
        })
  
        router.push("/dashboard")
      } else {
        alert("Invalid credentials")
      }
    } catch (error) {
      console.error("Login error:", error)
      alert("Something went wrong")
    }
  
    setIsLoading(false)
  }
  

  return (
    <div className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Welcome Back</h1>
        <p className="text-gray-600 mt-2">Sign in to access your dashboard</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
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
          <div className="flex justify-between items-center">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Link href="/auth/forgot-password" className="text-sm text-gray-600 hover:text-black">
              Forgot password?
            </Link>
          </div>
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

        <Button
          type="submit"
          className="w-full rounded-full bg-black text-white hover:bg-black/90"
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <Link href="/auth/signup" className="font-medium hover:text-black">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
