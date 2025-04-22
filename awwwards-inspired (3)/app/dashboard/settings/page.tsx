// // "use client"

// // import type React from "react"

// // import { useState, useRef } from "react"
// // import Image from "next/image"
// // import {
// //   User,
// //   Mail,
// //   Phone,
// //   Building,
// //   Globe,
// //   MapPin,
// //   Shield,
// //   CreditCard,
// //   Plus,
// //   Trash2,
// //   Camera,
// //   Check,
// //   X,
// //   LogOut,
// //   Download,
// // } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import { Label } from "@/components/ui/label"
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// // import { Switch } from "@/components/ui/switch"
// // import { Badge } from "@/components/ui/badge"
// // import { Textarea } from "@/components/ui/textarea"

// // // Mock user data
// // const userData = {
// //   name: "John Doe",
// //   email: "john.doe@example.com",
// //   phone: "+1 (555) 123-4567",
// //   company: "Fashion Brand Inc.",
// //   website: "www.fashionbrandinc.com",
// //   address: "123 Commerce St, Suite 400, Los Angeles, CA 90012, USA",
// //   profileImage: "/placeholder.svg?height=200&width=200&text=JD",
// //   role: "Account Owner",
// //   plan: "Business",
// //   joinDate: "April 2023",
// //   teamMembers: [
// //     {
// //       id: "member-1",
// //       name: "Sarah Johnson",
// //       email: "sarah.johnson@example.com",
// //       role: "Admin",
// //       avatar: "/placeholder.svg?height=40&width=40&text=SJ",
// //       joinDate: "April 2023",
// //     },
// //     {
// //       id: "member-2",
// //       name: "Michael Chen",
// //       email: "michael.chen@example.com",
// //       role: "Member",
// //       avatar: "/placeholder.svg?height=40&width=40&text=MC",
// //       joinDate: "May 2023",
// //     },
// //     {
// //       id: "member-3",
// //       name: "Emma Rodriguez",
// //       email: "emma.rodriguez@example.com",
// //       role: "Member",
// //       avatar: "/placeholder.svg?height=40&width=40&text=ER",
// //       joinDate: "June 2023",
// //     },
// //   ],
// // }

// // export default function SettingsPage() {
// //   const [user, setUser] = useState(userData)
// //   const [profileImage, setProfileImage] = useState(user.profileImage)
// //   const [isEditing, setIsEditing] = useState(false)
// //   const [formData, setFormData] = useState({
// //     name: user.name,
// //     email: user.email,
// //     phone: user.phone,
// //     company: user.company,
// //     website: user.website,
// //     address: user.address,
// //   })
// //   const [showAddMember, setShowAddMember] = useState(false)
// //   const [newMember, setNewMember] = useState({
// //     name: "",
// //     email: "",
// //     role: "Member",
// //   })
// //   const [notifications, setNotifications] = useState({
// //     email: true,
// //     push: true,
// //     sms: false,
// //     quotes: true,
// //     orders: true,
// //     messages: true,
// //     updates: false,
// //   })
// //   const fileInputRef = useRef<HTMLInputElement>(null)

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //     const { name, value } = e.target
// //     setFormData((prev) => ({ ...prev, [name]: value }))
// //   }

// //   const handleSave = () => {
// //     setUser((prev) => ({ ...prev, ...formData }))
// //     setIsEditing(false)
// //   }

// //   const handleCancel = () => {
// //     setFormData({
// //       name: user.name,
// //       email: user.email,
// //       phone: user.phone,
// //       company: user.company,
// //       website: user.website,
// //       address: user.address,
// //     })
// //     setIsEditing(false)
// //   }

// //   const handleProfileImageClick = () => {
// //     fileInputRef.current?.click()
// //   }

// //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const file = e.target.files?.[0]
// //     if (file) {
// //       // In a real app, you would upload the file to your server
// //       // For this demo, we'll just create a local URL
// //       const imageUrl = URL.createObjectURL(file)
// //       setProfileImage(imageUrl)
// //       setUser((prev) => ({ ...prev, profileImage: imageUrl }))
// //     }
// //   }

// //   const handleAddMember = (e: React.FormEvent) => {
// //     e.preventDefault()

// //     // In a real app, you would send this to your API
// //     const newMemberId = `member-${Date.now()}`
// //     const memberToAdd = {
// //       id: newMemberId,
// //       name: newMember.name,
// //       email: newMember.email,
// //       role: newMember.role,
// //       avatar: `/placeholder.svg?height=40&width=40&text=${newMember.name.charAt(0)}${newMember.name.split(" ")[1]?.charAt(0) || ""}`,
// //       joinDate: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
// //     }

// //     setUser((prev) => ({
// //       ...prev,
// //       teamMembers: [...prev.teamMembers, memberToAdd],
// //     }))

// //     setNewMember({
// //       name: "",
// //       email: "",
// //       role: "Member",
// //     })

// //     setShowAddMember(false)
// //   }

// //   const handleRemoveMember = (id: string) => {
// //     // In a real app, you would send this to your API
// //     setUser((prev) => ({
// //       ...prev,
// //       teamMembers: prev.teamMembers.filter((member) => member.id !== id),
// //     }))
// //   }

// //   const handleNotificationChange = (key: string, value: boolean) => {
// //     setNotifications((prev) => ({ ...prev, [key]: value }))
// //   }

// //   return (
// //     <div className="space-y-8">
// //       <div>
// //         <h1 className="text-2xl font-bold">Settings</h1>
// //         <p className="text-gray-500 mt-1">Manage your account settings and preferences</p>
// //       </div>

// //       <Tabs defaultValue="profile" className="w-full">
// //         <TabsList className="grid w-full grid-cols-5 mb-8">
// //           <TabsTrigger value="profile">Profile</TabsTrigger>
// //           <TabsTrigger value="team">Team Members</TabsTrigger>
// //           <TabsTrigger value="notifications">Notifications</TabsTrigger>
// //           <TabsTrigger value="security">Security</TabsTrigger>
// //           <TabsTrigger value="billing">Billing</TabsTrigger>
// //         </TabsList>

// //         {/* Profile Tab */}
// //         <TabsContent value="profile" className="space-y-6">
// //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// //             <div className="p-6 border-b border-gray-200 flex justify-between items-center">
// //               <h2 className="text-lg font-semibold">Profile Information</h2>
// //               {!isEditing ? (
// //                 <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
// //               ) : (
// //                 <div className="flex space-x-2">
// //                   <Button variant="outline" onClick={handleCancel}>
// //                     Cancel
// //                   </Button>
// //                   <Button onClick={handleSave}>Save Changes</Button>
// //                 </div>
// //               )}
// //             </div>
// //             <div className="p-6">
// //               <div className="flex flex-col md:flex-row gap-8">
// //                 <div className="flex flex-col items-center space-y-4">
// //                   <div className="relative">
// //                     <div
// //                       className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 cursor-pointer"
// //                       onClick={handleProfileImageClick}
// //                     >
// //                       <Image
// //                         src={profileImage || "/placeholder.svg"}
// //                         alt={user.name}
// //                         width={128}
// //                         height={128}
// //                         className="object-cover"
// //                       />
// //                     </div>
// //                     <div
// //                       className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full cursor-pointer"
// //                       onClick={handleProfileImageClick}
// //                     >
// //                       <Camera className="h-4 w-4" />
// //                     </div>
// //                     <input
// //                       type="file"
// //                       ref={fileInputRef}
// //                       className="hidden"
// //                       accept="image/*"
// //                       onChange={handleFileChange}
// //                     />
// //                   </div>
// //                   <div className="text-center">
// //                     <Badge className="mb-1">{user.role}</Badge>
// //                     <p className="text-sm text-gray-500">Member since {user.joinDate}</p>
// //                     <p className="text-sm text-gray-500">Plan: {user.plan}</p>
// //                   </div>
// //                 </div>

// //                 <div className="flex-1 space-y-6">
// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                     <div className="space-y-2">
// //                       <Label htmlFor="name">Full Name</Label>
// //                       {isEditing ? (
// //                         <Input
// //                           id="name"
// //                           name="name"
// //                           value={formData.name}
// //                           onChange={handleChange}
// //                           placeholder="Enter your full name"
// //                         />
// //                       ) : (
// //                         <div className="flex items-center h-10 px-3 py-2 border border-gray-200 rounded-md bg-gray-50">
// //                           <User className="h-4 w-4 text-gray-400 mr-2" />
// //                           <span>{user.name}</span>
// //                         </div>
// //                       )}
// //                     </div>
// //                     <div className="space-y-2">
// //                       <Label htmlFor="email">Email Address</Label>
// //                       {isEditing ? (
// //                         <Input
// //                           id="email"
// //                           name="email"
// //                           type="email"
// //                           value={formData.email}
// //                           onChange={handleChange}
// //                           placeholder="Enter your email address"
// //                         />
// //                       ) : (
// //                         <div className="flex items-center h-10 px-3 py-2 border border-gray-200 rounded-md bg-gray-50">
// //                           <Mail className="h-4 w-4 text-gray-400 mr-2" />
// //                           <span>{user.email}</span>
// //                         </div>
// //                       )}
// //                     </div>
// //                     <div className="space-y-2">
// //                       <Label htmlFor="phone">Phone Number</Label>
// //                       {isEditing ? (
// //                         <Input
// //                           id="phone"
// //                           name="phone"
// //                           value={formData.phone}
// //                           onChange={handleChange}
// //                           placeholder="Enter your phone number"
// //                         />
// //                       ) : (
// //                         <div className="flex items-center h-10 px-3 py-2 border border-gray-200 rounded-md bg-gray-50">
// //                           <Phone className="h-4 w-4 text-gray-400 mr-2" />
// //                           <span>{user.phone}</span>
// //                         </div>
// //                       )}
// //                     </div>
// //                     <div className="space-y-2">
// //                       <Label htmlFor="company">Company Name</Label>
// //                       {isEditing ? (
// //                         <Input
// //                           id="company"
// //                           name="company"
// //                           value={formData.company}
// //                           onChange={handleChange}
// //                           placeholder="Enter your company name"
// //                         />
// //                       ) : (
// //                         <div className="flex items-center h-10 px-3 py-2 border border-gray-200 rounded-md bg-gray-50">
// //                           <Building className="h-4 w-4 text-gray-400 mr-2" />
// //                           <span>{user.company}</span>
// //                         </div>
// //                       )}
// //                     </div>
// //                     <div className="space-y-2">
// //                       <Label htmlFor="website">Website</Label>
// //                       {isEditing ? (
// //                         <Input
// //                           id="website"
// //                           name="website"
// //                           value={formData.website}
// //                           onChange={handleChange}
// //                           placeholder="Enter your website"
// //                         />
// //                       ) : (
// //                         <div className="flex items-center h-10 px-3 py-2 border border-gray-200 rounded-md bg-gray-50">
// //                           <Globe className="h-4 w-4 text-gray-400 mr-2" />
// //                           <span>{user.website}</span>
// //                         </div>
// //                       )}
// //                     </div>
// //                   </div>
// //                   <div className="space-y-2">
// //                     <Label htmlFor="address">Address</Label>
// //                     {isEditing ? (
// //                       <Textarea
// //                         id="address"
// //                         name="address"
// //                         value={formData.address}
// //                         onChange={handleChange}
// //                         placeholder="Enter your address"
// //                         className="min-h-[80px]"
// //                       />
// //                     ) : (
// //                       <div className="flex items-start px-3 py-2 border border-gray-200 rounded-md bg-gray-50">
// //                         <MapPin className="h-4 w-4 text-gray-400 mr-2 mt-0.5" />
// //                         <span>{user.address}</span>
// //                       </div>
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// //             <div className="p-6 border-b border-gray-200">
// //               <h2 className="text-lg font-semibold">Account Preferences</h2>
// //             </div>
// //             <div className="p-6">
// //               <div className="space-y-6">
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <h3 className="font-medium">Language</h3>
// //                     <p className="text-sm text-gray-500">Select your preferred language for the dashboard</p>
// //                   </div>
// //                   <select className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
// //                     <option value="en">English</option>
// //                     <option value="es">Español</option>
// //                     <option value="fr">Français</option>
// //                     <option value="de">Deutsch</option>
// //                     <option value="zh">中文</option>
// //                   </select>
// //                 </div>
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <h3 className="font-medium">Time Zone</h3>
// //                     <p className="text-sm text-gray-500">Set your local time zone for accurate scheduling</p>
// //                   </div>
// //                   <select className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
// //                     <option value="utc">UTC (Coordinated Universal Time)</option>
// //                     <option value="est">EST (Eastern Standard Time)</option>
// //                     <option value="cst">CST (Central Standard Time)</option>
// //                     <option value="mst">MST (Mountain Standard Time)</option>
// //                     <option value="pst">PST (Pacific Standard Time)</option>
// //                   </select>
// //                 </div>
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <h3 className="font-medium">Currency</h3>
// //                     <p className="text-sm text-gray-500">Set your preferred currency for quotes and orders</p>
// //                   </div>
// //                   <select className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
// //                     <option value="usd">USD ($)</option>
// //                     <option value="eur">EUR (€)</option>
// //                     <option value="gbp">GBP (£)</option>
// //                     <option value="jpy">JPY (¥)</option>
// //                     <option value="cny">CNY (¥)</option>
// //                   </select>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// //             <div className="p-6 border-b border-gray-200">
// //               <h2 className="text-lg font-semibold">Danger Zone</h2>
// //             </div>
// //             <div className="p-6">
// //               <div className="space-y-6">
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <h3 className="font-medium">Delete Account</h3>
// //                     <p className="text-sm text-gray-500">
// //                       Permanently delete your account and all associated data. This action cannot be undone.
// //                     </p>
// //                   </div>
// //                   <Button variant="destructive">Delete Account</Button>
// //                 </div>
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <h3 className="font-medium">Log Out of All Devices</h3>
// //                     <p className="text-sm text-gray-500">Sign out from all devices where you're currently logged in.</p>
// //                   </div>
// //                   <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
// //                     <LogOut className="h-4 w-4 mr-2" />
// //                     Log Out Everywhere
// //                   </Button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </TabsContent>

// //         {/* Team Members Tab */}
// //         <TabsContent value="team" className="space-y-6">
// //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// //             <div className="p-6 border-b border-gray-200 flex justify-between items-center">
// //               <h2 className="text-lg font-semibold">Team Members</h2>
// //               <Button onClick={() => setShowAddMember(true)}>
// //                 <Plus className="h-4 w-4 mr-2" />
// //                 Add Member
// //               </Button>
// //             </div>
// //             <div className="p-6">
// //               <div className="space-y-6">
// //                 {user.teamMembers.map((member) => (
// //                   <div
// //                     key={member.id}
// //                     className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
// //                   >
// //                     <div className="flex items-center">
// //                       <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
// //                         <Image
// //                           src={member.avatar || "/placeholder.svg"}
// //                           alt={member.name}
// //                           width={40}
// //                           height={40}
// //                           className="object-cover"
// //                         />
// //                       </div>
// //                       <div>
// //                         <h3 className="font-medium">{member.name}</h3>
// //                         <p className="text-sm text-gray-500">{member.email}</p>
// //                       </div>
// //                     </div>
// //                     <div className="flex items-center space-x-4">
// //                       <Badge
// //                         className={member.role === "Admin" ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"}
// //                       >
// //                         {member.role}
// //                       </Badge>
// //                       <p className="text-sm text-gray-500">Joined {member.joinDate}</p>
// //                       {member.id !== "member-1" && (
// //                         <Button
// //                           variant="ghost"
// //                           size="sm"
// //                           className="text-red-500 hover:text-red-700 hover:bg-red-50"
// //                           onClick={() => handleRemoveMember(member.id)}
// //                         >
// //                           <Trash2 className="h-4 w-4" />
// //                         </Button>
// //                       )}
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// //             <div className="p-6 border-b border-gray-200">
// //               <h2 className="text-lg font-semibold">Team Permissions</h2>
// //             </div>
// //             <div className="p-6">
// //               <div className="space-y-6">
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <h3 className="font-medium">Admin</h3>
// //                     <p className="text-sm text-gray-500">Can manage team members, billing, and all account settings</p>
// //                   </div>
// //                   <div className="flex items-center space-x-2">
// //                     <Badge className="bg-blue-100 text-blue-800">1 Member</Badge>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <h3 className="font-medium">Member</h3>
// //                     <p className="text-sm text-gray-500">Can view and manage quotes, orders, and suppliers</p>
// //                   </div>
// //                   <div className="flex items-center space-x-2">
// //                     <Badge className="bg-gray-100 text-gray-800">{user.teamMembers.length - 1} Members</Badge>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <h3 className="font-medium">Viewer</h3>
// //                     <p className="text-sm text-gray-500">Can only view information without making changes</p>
// //                   </div>
// //                   <div className="flex items-center space-x-2">
// //                     <Badge className="bg-gray-100 text-gray-800">0 Members</Badge>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </TabsContent>

// //         {/* Notifications Tab */}
// //         <TabsContent value="notifications" className="space-y-6">
// //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// //             <div className="p-6 border-b border-gray-200">
// //               <h2 className="text-lg font-semibold">Notification Preferences</h2>
// //             </div>
// //             <div className="p-6">
// //               <div className="space-y-6">
// //                 <div>
// //                   <h3 className="font-medium mb-4">Notification Channels</h3>
// //                   <div className="space-y-4">
// //                     <div className="flex items-center justify-between">
// //                       <div>
// //                         <p className="font-medium">Email Notifications</p>
// //                         <p className="text-sm text-gray-500">Receive notifications via email</p>
// //                       </div>
// //                       <Switch
// //                         checked={notifications.email}
// //                         onCheckedChange={(checked) => handleNotificationChange("email", checked)}
// //                       />
// //                     </div>
// //                     <div className="flex items-center justify-between">
// //                       <div>
// //                         <p className="font-medium">Push Notifications</p>
// //                         <p className="text-sm text-gray-500">Receive notifications in your browser</p>
// //                       </div>
// //                       <Switch
// //                         checked={notifications.push}
// //                         onCheckedChange={(checked) => handleNotificationChange("push", checked)}
// //                       />
// //                     </div>
// //                     <div className="flex items-center justify-between">
// //                       <div>
// //                         <p className="font-medium">SMS Notifications</p>
// //                         <p className="text-sm text-gray-500">Receive notifications via text message</p>
// //                       </div>
// //                       <Switch
// //                         checked={notifications.sms}
// //                         onCheckedChange={(checked) => handleNotificationChange("sms", checked)}
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>

// //                 <div className="pt-4 border-t border-gray-200">
// //                   <h3 className="font-medium mb-4">Notification Types</h3>
// //                   <div className="space-y-4">
// //                     <div className="flex items-center justify-between">
// //                       <div>
// //                         <p className="font-medium">Quote Updates</p>
// //                         <p className="text-sm text-gray-500">Notifications about quote requests and responses</p>
// //                       </div>
// //                       <Switch
// //                         checked={notifications.quotes}
// //                         onCheckedChange={(checked) => handleNotificationChange("quotes", checked)}
// //                       />
// //                     </div>
// //                     <div className="flex items-center justify-between">
// //                       <div>
// //                         <p className="font-medium">Order Updates</p>
// //                         <p className="text-sm text-gray-500">Notifications about order status changes</p>
// //                       </div>
// //                       <Switch
// //                         checked={notifications.orders}
// //                         onCheckedChange={(checked) => handleNotificationChange("orders", checked)}
// //                       />
// //                     </div>
// //                     <div className="flex items-center justify-between">
// //                       <div>
// //                         <p className="font-medium">Messages</p>
// //                         <p className="text-sm text-gray-500">Notifications about new messages</p>
// //                       </div>
// //                       <Switch
// //                         checked={notifications.messages}
// //                         onCheckedChange={(checked) => handleNotificationChange("messages", checked)}
// //                       />
// //                     </div>
// //                     <div className="flex items-center justify-between">
// //                       <div>
// //                         <p className="font-medium">Platform Updates</p>
// //                         <p className="text-sm text-gray-500">Notifications about new features and updates</p>
// //                       </div>
// //                       <Switch
// //                         checked={notifications.updates}
// //                         onCheckedChange={(checked) => handleNotificationChange("updates", checked)}
// //                       />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// //             <div className="p-6 border-b border-gray-200">
// //               <h2 className="text-lg font-semibold">Email Digest</h2>
// //             </div>
// //             <div className="p-6">
// //               <div className="space-y-6">
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <h3 className="font-medium">Weekly Summary</h3>
// //                     <p className="text-sm text-gray-500">Receive a weekly summary of all activity in your account</p>
// //                   </div>
// //                   <Switch defaultChecked />
// //                 </div>
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <h3 className="font-medium">Monthly Report</h3>
// //                     <p className="text-sm text-gray-500">Receive a monthly report with analytics and insights</p>
// //                   </div>
// //                   <Switch defaultChecked />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </TabsContent>

// //         {/* Security Tab */}
// //         <TabsContent value="security" className="space-y-6">
// //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// //             <div className="p-6 border-b border-gray-200">
// //               <h2 className="text-lg font-semibold">Password</h2>
// //             </div>
// //             <div className="p-6">
// //               <form className="space-y-4">
// //                 <div className="space-y-2">
// //                   <Label htmlFor="current-password">Current Password</Label>
// //                   <Input id="current-password" type="password" placeholder="Enter your current password" />
// //                 </div>
// //                 <div className="space-y-2">
// //                   <Label htmlFor="new-password">New Password</Label>
// //                   <Input id="new-password" type="password" placeholder="Enter your new password" />
// //                 </div>
// //                 <div className="space-y-2">
// //                   <Label htmlFor="confirm-password">Confirm New Password</Label>
// //                   <Input id="confirm-password" type="password" placeholder="Confirm your new password" />
// //                 </div>
// //                 <Button>Update Password</Button>
// //               </form>
// //             </div>
// //           </div>

// //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// //             <div className="p-6 border-b border-gray-200">
// //               <h2 className="text-lg font-semibold">Two-Factor Authentication</h2>
// //             </div>
// //             <div className="p-6">
// //               <div className="space-y-6">
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <h3 className="font-medium">Two-Factor Authentication</h3>
// //                     <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
// //                   </div>
// //                   <Button variant="outline">Enable 2FA</Button>
// //                 </div>
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <h3 className="font-medium">Recovery Codes</h3>
// //                     <p className="text-sm text-gray-500">
// //                       Generate backup codes to access your account if you lose your 2FA device
// //                     </p>
// //                   </div>
// //                   <Button variant="outline" disabled>
// //                     Generate Codes
// //                   </Button>
// //                 </div>
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <h3 className="font-medium">Trusted Devices</h3>
// //                     <p className="text-sm text-gray-500">Manage devices that are trusted and don't require 2FA</p>
// //                   </div>
// //                   <Button variant="outline">Manage Devices</Button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// //             <div className="p-6 border-b border-gray-200">
// //               <h2 className="text-lg font-semibold">Login Sessions</h2>
// //             </div>
// //             <div className="p-6">
// //               <div className="space-y-4">
// //                 <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-gray-50">
// //                   <div className="flex items-center">
// //                     <Shield className="h-5 w-5 text-green-500 mr-3" />
// //                     <div>
// //                       <h3 className="font-medium">Current Session</h3>
// //                       <p className="text-sm text-gray-500">Los Angeles, CA, USA • Chrome on Windows</p>
// //                     </div>
// //                   </div>
// //                   <Badge className="bg-green-100 text-green-800">Active Now</Badge>
// //                 </div>
// //                 <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
// //                   <div className="flex items-center">
// //                     <Shield className="h-5 w-5 text-gray-400 mr-3" />
// //                     <div>
// //                       <h3 className="font-medium">Previous Session</h3>
// //                       <p className="text-sm text-gray-500">Los Angeles, CA, USA • Safari on iPhone</p>
// //                     </div>
// //                   </div>
// //                   <p className="text-sm text-gray-500">2 days ago</p>
// //                 </div>
// //                 <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
// //                   <div className="flex items-center">
// //                     <Shield className="h-5 w-5 text-gray-400 mr-3" />
// //                     <div>
// //                       <h3 className="font-medium">Previous Session</h3>
// //                       <p className="text-sm text-gray-500">New York, NY, USA • Chrome on macOS</p>
// //                     </div>
// //                   </div>
// //                   <p className="text-sm text-gray-500">5 days ago</p>
// //                 </div>
// //               </div>
// //               <div className="mt-4 flex justify-end">
// //                 <Button variant="outline" className="text-red-600 hover:bg-red-50">
// //                   <LogOut className="h-4 w-4 mr-2" />
// //                   Log Out All Sessions
// //                 </Button>
// //               </div>
// //             </div>
// //           </div>
// //         </TabsContent>

// //         {/* Billing Tab */}
// //         <TabsContent value="billing" className="space-y-6">
// //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// //             <div className="p-6 border-b border-gray-200">
// //               <h2 className="text-lg font-semibold">Current Plan</h2>
// //             </div>
// //             <div className="p-6">
// //               <div className="flex items-center justify-between mb-6">
// //                 <div>
// //                   <h3 className="text-xl font-bold">Business Plan</h3>
// //                   <p className="text-sm text-gray-500 mt-1">$49.99/month • Billed monthly</p>
// //                 </div>
// //                 <Badge className="bg-blue-100 text-blue-800">Current Plan</Badge>
// //               </div>
// //               <div className="space-y-2 mb-6">
// //                 <div className="flex items-center">
// //                   <Check className="h-5 w-5 text-green-500 mr-2" />
// //                   <p>Unlimited quote requests</p>
// //                 </div>
// //                 <div className="flex items-center">
// //                   <Check className="h-5 w-5 text-green-500 mr-2" />
// //                   <p>Access to all verified suppliers</p>
// //                 </div>
// //                 <div className="flex items-center">
// //                   <Check className="h-5 w-5 text-green-500 mr-2" />
// //                   <p>Priority support</p>
// //                 </div>
// //                 <div className="flex items-center">
// //                   <Check className="h-5 w-5 text-green-500 mr-2" />
// //                   <p>Up to 5 team members</p>
// //                 </div>
// //               </div>
// //               <div className="flex space-x-2">
// //                 <Button variant="outline">Change Plan</Button>
// //                 <Button variant="outline" className="text-red-600 hover:bg-red-50">
// //                   Cancel Subscription
// //                 </Button>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// //             <div className="p-6 border-b border-gray-200">
// //               <h2 className="text-lg font-semibold">Payment Method</h2>
// //             </div>
// //             <div className="p-6">
// //               <div className="space-y-4">
// //                 <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-gray-50">
// //                   <div className="flex items-center">
// //                     <CreditCard className="h-5 w-5 text-blue-500 mr-3" />
// //                     <div>
// //                       <h3 className="font-medium">Visa ending in 4242</h3>
// //                       <p className="text-sm text-gray-500">Expires 12/2025</p>
// //                     </div>
// //                   </div>
// //                   <Badge className="bg-blue-100 text-blue-800">Default</Badge>
// //                 </div>
// //                 <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
// //                   <div className="flex items-center">
// //                     <CreditCard className="h-5 w-5 text-gray-400 mr-3" />
// //                     <div>
// //                       <h3 className="font-medium">Mastercard ending in 5678</h3>
// //                       <p className="text-sm text-gray-500">Expires 08/2024</p>
// //                     </div>
// //                   </div>
// //                   <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
// //                     <Trash2 className="h-4 w-4" />
// //                   </Button>
// //                 </div>
// //               </div>
// //               <div className="mt-4">
// //                 <Button variant="outline">
// //                   <Plus className="h-4 w-4 mr-2" />
// //                   Add Payment Method
// //                 </Button>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// //             <div className="p-6 border-b border-gray-200">
// //               <h2 className="text-lg font-semibold">Billing History</h2>
// //             </div>
// //             <div className="p-6">
// //               <div className="overflow-x-auto">
// //                 <table className="w-full">
// //                   <thead>
// //                     <tr className="bg-gray-50">
// //                       <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                         Date
// //                       </th>
// //                       <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                         Description
// //                       </th>
// //                       <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                         Amount
// //                       </th>
// //                       <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                         Status
// //                       </th>
// //                       <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                         Invoice
// //                       </th>
// //                     </tr>
// //                   </thead>
// //                   <tbody className="divide-y divide-gray-200">
// //                     <tr className="hover:bg-gray-50">
// //                       <td className="px-4 py-4 whitespace-nowrap text-sm">Apr 1, 2023</td>
// //                       <td className="px-4 py-4 whitespace-nowrap text-sm">Business Plan - Monthly</td>
// //                       <td className="px-4 py-4 whitespace-nowrap text-sm">$49.99</td>
// //                       <td className="px-4 py-4 whitespace-nowrap">
// //                         <Badge className="bg-green-100 text-green-800">Paid</Badge>
// //                       </td>
// //                       <td className="px-4 py-4 whitespace-nowrap text-right text-sm">
// //                         <Button variant="ghost" size="sm">
// //                           <Download className="h-4 w-4" />
// //                         </Button>
// //                       </td>
// //                     </tr>
// //                     <tr className="hover:bg-gray-50">
// //                       <td className="px-4 py-4 whitespace-nowrap text-sm">Mar 1, 2023</td>
// //                       <td className="px-4 py-4 whitespace-nowrap text-sm">Business Plan - Monthly</td>
// //                       <td className="px-4 py-4 whitespace-nowrap text-sm">$49.99</td>
// //                       <td className="px-4 py-4 whitespace-nowrap">
// //                         <Badge className="bg-green-100 text-green-800">Paid</Badge>
// //                       </td>
// //                       <td className="px-4 py-4 whitespace-nowrap text-right text-sm">
// //                         <Button variant="ghost" size="sm">
// //                           <Download className="h-4 w-4" />
// //                         </Button>
// //                       </td>
// //                     </tr>
// //                     <tr className="hover:bg-gray-50">
// //                       <td className="px-4 py-4 whitespace-nowrap text-sm">Feb 1, 2023</td>
// //                       <td className="px-4 py-4 whitespace-nowrap text-sm">Business Plan - Monthly</td>
// //                       <td className="px-4 py-4 whitespace-nowrap text-sm">$49.99</td>
// //                       <td className="px-4 py-4 whitespace-nowrap">
// //                         <Badge className="bg-green-100 text-green-800">Paid</Badge>
// //                       </td>
// //                       <td className="px-4 py-4 whitespace-nowrap text-right text-sm">
// //                         <Button variant="ghost" size="sm">
// //                           <Download className="h-4 w-4" />
// //                         </Button>
// //                       </td>
// //                     </tr>
// //                   </tbody>
// //                 </table>
// //               </div>
// //             </div>
// //           </div>
// //         </TabsContent>
// //       </Tabs>

// //       {/* Add Member Modal */}
// //       {showAddMember && (
// //         <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
// //           <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
// //             <div className="flex items-center justify-between p-4 border-b">
// //               <h2 className="text-lg font-bold">Add Team Member</h2>
// //               <Button variant="ghost" size="sm" onClick={() => setShowAddMember(false)}>
// //                 <X className="h-4 w-4" />
// //               </Button>
// //             </div>
// //             <form onSubmit={handleAddMember} className="p-6 space-y-4">
// //               <div className="space-y-2">
// //                 <Label htmlFor="member-name">Full Name</Label>
// //                 <Input
// //                   id="member-name"
// //                   placeholder="Enter team member's full name"
// //                   value={newMember.name}
// //                   onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
// //                   required
// //                 />
// //               </div>
// //               <div className="space-y-2">
// //                 <Label htmlFor="member-email">Email Address</Label>
// //                 <Input
// //                   id="member-email"
// //                   type="email"
// //                   placeholder="Enter team member's email address"
// //                   value={newMember.email}
// //                   onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
// //                   required
// //                 />
// //               </div>
// //               <div className="space-y-2">
// //                 <Label htmlFor="member-role">Role</Label>
// //                 <select
// //                   id="member-role"
// //                   className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
// //                   value={newMember.role}
// //                   onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
// //                 >
// //                   <option value="Admin">Admin</option>
// //                   <option value="Member">Member</option>
// //                   <option value="Viewer">Viewer</option>
// //                 </select>
// //               </div>
// //               <div className="flex justify-end pt-4 space-x-2">
// //                 <Button type="button" variant="outline" onClick={() => setShowAddMember(false)}>
// //                   Cancel
// //                 </Button>
// //                 <Button type="submit">
// //                   <Plus className="h-4 w-4 mr-2" />
// //                   Add Member
// //                 </Button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   )
// // }

// // //////////////////////////////
// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import {
//   User,
//   Mail,
//   Phone,
//   Building,
//   Globe,
//   MapPin,
//   Camera,
//   Shield,
//   LogOut,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";
// import { Textarea } from "@/components/ui/textarea";

// const API_BASE = "http://localhost:8000";
// const getToken = () => localStorage.getItem("accessToken");

// export default function SettingsPage() {
//   const [user, setUser] = useState<any>(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [profileImage, setProfileImage] = useState("/placeholder.svg");
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     company: "",
//     phone: "",
//     industry: "",
//   });

//   const [passwords, setPasswords] = useState({
//     current: "",
//     new: "",
//     confirm: "",
//   });

//   // Fetch user profile from /profile/
//   useEffect(() => {
//     const fetchProfile = async () => {
//       const token = getToken();
//       if (!token) {
//         console.error("❌ Token not found");
//         return;
//       }

//       try {
//         const res = await fetch(`${API_BASE}/profile/`, {
//           headers: {
//             Authorization: `JWT ${token}`,
//           },
//         });

//         console.log("🔁 Status:", res.status);

//         if (!res.ok) {
//           const text = await res.text();
//           console.error("❌ Error response:", text);
//           return;
//         }

//         const data = await res.json();
//         console.log("✅ Profile data fetched:", data);

//         setUser(data);
//         setProfileImage(data.profile_image || "/placeholder.svg");
//         setFormData({
//           first_name: data.first_name || "",
//           last_name: data.last_name || "",
//           email: data.email || "",
//           company: data.company || "",
//           phone: data.phone || "",
//           industry: data.industry || "",
//         });
//       } catch (error) {
//         console.error("❌ Fetch Exception:", error);
//       }
//     };

//     fetchProfile();
//   }, []);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = async () => {
//     const token = getToken();
//     const res = await fetch(`${API_BASE}/profile/`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `JWT ${token}`,
//       },
//       body: JSON.stringify(formData),
//     });

//     const updated = await res.json();
//     setUser(updated.data || updated);
//     setIsEditing(false);
//   };

//   const handleCancel = () => {
//     if (!user) return;
//     setFormData({
//       first_name: user.first_name || "",
//       last_name: user.last_name || "",
//       email: user.email || "",
//       company: user.company || "",
//       phone: user.phone || "",
//       industry: user.industry || "",
//     });
//     setIsEditing(false);
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setProfileImage(imageUrl);
//     }
//   };

//   const handlePasswordChange = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (passwords.new !== passwords.confirm) {
//       alert("Passwords do not match");
//       return;
//     }

//     const res = await fetch(`${API_BASE}/change-password/`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `JWT ${getToken()}`,
//       },
//       body: JSON.stringify({
//         current_password: passwords.current,
//         new_password: passwords.new,
//       }),
//     });

//     const result = await res.json();
//     if (res.ok) {
//       alert("Password updated successfully!");
//       setPasswords({ current: "", new: "", confirm: "" });
//     } else {
//       alert(result.detail || "Password update failed.");
//     }
//   };

//   if (!user) return <div>Loading...</div>;

//   return (
//     <div className="space-y-8">
//       <h1 className="text-2xl font-bold">Settings</h1>
//       <p className="text-gray-500 mt-1">
//         Manage your account settings and preferences
//       </p>

//       <Tabs defaultValue="profile" className="w-full">
//         <TabsList className="grid w-full grid-cols-2 mb-8">
//           <TabsTrigger value="profile">Profile</TabsTrigger>
//           <TabsTrigger value="security">Security</TabsTrigger>
//         </TabsList>

// {/* PROFILE TAB */}
// <TabsContent value="profile" className="space-y-6">
//   <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
//     <div className="p-6 border-b border-gray-200 flex justify-between items-center">
//       <h2 className="text-lg font-semibold">Profile Information</h2>
//       {!isEditing ? (
//         <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
//       ) : (
//         <div className="flex space-x-2">
//           <Button variant="outline" onClick={handleCancel}>
//             Cancel
//           </Button>
//           <Button onClick={handleSave}>Save Changes</Button>
//         </div>
//       )}
//     </div>

//     <div className="p-6 flex flex-col md:flex-row gap-8">
//       <div className="flex flex-col items-center space-y-4">
//         <div className="relative">
//           <div
//             className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 cursor-pointer"
//             onClick={() => fileInputRef.current?.click()}
//           >
//             <Image
//               priority
//               src={profileImage}
//               alt="Profile"
//               width={128}
//               height={128}
//               className="object-cover"
//             />
//           </div>
//           <input
//             type="file"
//             ref={fileInputRef}
//             className="hidden"
//             accept="image/*"
//             onChange={handleFileChange}
//           />
//           <div className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full cursor-pointer">
//             <Camera className="h-4 w-4" />
//           </div>
//         </div>
//       </div>

//       <div className="flex-1 space-y-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {[
//             { label: "First Name", name: "first_name", icon: <User /> },
//             { label: "Last Name", name: "last_name", icon: <User /> },
//             {
//               label: "Email",
//               name: "email",
//               icon: <Mail />,
//               disabled: true,
//             },
//             { label: "Phone", name: "phone", icon: <Phone /> },
//             { label: "Company", name: "company", icon: <Building /> },
//             { label: "Industry", name: "industry", icon: <Globe /> },
//           ].map(({ label, name, icon, disabled }) => (
//             <div className="space-y-2" key={name}>
//               <Label>{label}</Label>
//               {isEditing && !disabled ? (
//                 <Input
//                   name={name}
//                   value={(formData as any)[name]}
//                   onChange={handleChange}
//                 />
//               ) : (
//                 <div className="flex items-center h-10 px-3 py-2 border border-gray-200 rounded-md bg-gray-50">
//                   {icon}
//                   <span className="ml-2">
//                     {(formData as any)[name] || "—"}
//                   </span>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// </TabsContent>

//         {/* SECURITY TAB */}
//         <TabsContent value="security" className="space-y-6">
//           <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
//             <div className="p-6 border-b border-gray-200">
//               <h2 className="text-lg font-semibold">Password</h2>
//             </div>
//             <div className="p-6">
//               <form className="space-y-4" onSubmit={handlePasswordChange}>
//                 {[
//                   { label: "Current Password", name: "current" },
//                   { label: "New Password", name: "new" },
//                   { label: "Confirm New Password", name: "confirm" },
//                 ].map(({ label, name }) => (
//                   <div className="space-y-2" key={name}>
//                     <Label>{label}</Label>
//                     <Input
//                       type="password"
//                       value={(passwords as any)[name]}
//                       onChange={(e) =>
//                         setPasswords({ ...passwords, [name]: e.target.value })
//                       }
//                     />
//                   </div>
//                 ))}
//                 <Button type="submit">Update Password</Button>
//               </form>
//             </div>
//           </div>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  User,
  Mail,
  Phone,
  LogOut,
  Building,
  Globe,
  MapPin,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

const API_BASE = "http://localhost:8000";
const getToken = () => localStorage.getItem("accessToken");

export default function SettingsPage() {
  const [user, setUser] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState("/placeholder.svg");
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const token = getToken();
      if (!token) return;

      const res = await fetch(`${API_BASE}/profile/`, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("❌", data);
        return;
      }

      setUser(data);
      setProfileImage(data.profile_image || "/placeholder.svg");
      setFormData({
        first_name: data.first_name || "",
        last_name: data.last_name || "",
        email: data.email || "",
        company: data.company || "",
        phone: data.phone || "",
        industry: data.industry || "",
      });
    };

    fetchProfile();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const imageUrl = URL.createObjectURL(selectedFile);
      setProfileImage(imageUrl);
    }
  };

  const handleSave = async () => {
    const token = getToken();
    const form = new FormData();

    form.append("first_name", formData.first_name);
    form.append("last_name", formData.last_name);
    form.append("company", formData.company);
    form.append("phone", formData.phone);
    form.append("industry", formData.industry);

    if (file) {
      form.append("profile_image", file);
    }

    const res = await fetch(`${API_BASE}/profile/`, {
      method: "PUT",
      headers: {
        Authorization: `JWT ${token}`,
      },
      body: form,
    });

    const result = await res.json();

    if (res.ok) {
      alert("✅ Profile updated!");
      setUser(result.data || result);
      setIsEditing(false);
    } else {
      alert("❌ Update failed: " + JSON.stringify(result));
    }
  };

  const handleCancel = () => {
    if (!user) return;
    setFormData({
      first_name: user.first_name || "",
      last_name: user.last_name || "",
      email: user.email || "",
      company: user.company || "",
      phone: user.phone || "",
      industry: user.industry || "",
    });
    setFile(null);
    setProfileImage(user.profile_image || "/placeholder.svg");
    setIsEditing(false);
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      alert("Passwords do not match");
      return;
    }

    const res = await fetch(`${API_BASE}/change-password/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${getToken()}`,
      },
      body: JSON.stringify({
        current_password: passwords.current,
        new_password: passwords.new,
      }),
    });

    const result = await res.json();
    const data = await res.json();
    if (res.ok) {
      alert("✅ Password changed!");
      setPasswords({ current: "", new: "", confirm: "" });
    } else {
      alert("❌ " + result.detail);
    }
    setProfileImage(
      data.profile_image ? `${API_BASE}${data.profile_image}` : ""
    );
  };

  if (!user) return <div className="p-6">Loading...</div>;

  return (
    <div className="space-y-8 p-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="flex justify-between w-full bg-white border border-gray-200 rounded-lg p-1 mb-6">
          <TabsTrigger value="profile" className="flex-1 text-center">
            Profile
          </TabsTrigger>
          <TabsTrigger value="team" className="flex-1 text-center">
            Team Members
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex-1 text-center">
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="flex-1 text-center">
            Security
          </TabsTrigger>
          <TabsTrigger value="billing" className="flex-1 text-center">
            Billing
          </TabsTrigger>
        </TabsList>

        {/* PROFILE */}
        <TabsContent value="profile">
          <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">Profile Information</h2>
              {!isEditing ? (
                <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
              ) : (
                <div className="flex gap-2">
                  <Button variant="outline" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button onClick={handleSave}>Save</Button>
                </div>
              )}
            </div>

            <div className="p-6 flex flex-col md:flex-row gap-8">
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 border-4 border-gray-200 rounded-full overflow-hidden cursor-pointer">
                  <Image
                    priority
                    src={profileImage}
                    alt="Profile"
                    width={128}
                    height={128}
                    className="object-cover"
                  />

                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <div className="absolute bottom-0 right-0 bg-black text-white p-2 rounded-full">
                    <Camera className="h-4 w-4" />
                  </div>
                </div>
                <div className="text-center mt-2">
                  <Badge>Account Owner</Badge>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: "First Name", name: "first_name", icon: <User /> },
                    { label: "Last Name", name: "last_name", icon: <User /> },
                    {
                      label: "Email",
                      name: "email",
                      icon: <Mail />,
                      disabled: true,
                    },
                    { label: "Phone", name: "phone", icon: <Phone /> },
                    { label: "Company", name: "company", icon: <Building /> },
                    { label: "Industry", name: "industry", icon: <Globe /> },
                  ].map(({ label, name, icon, disabled }) => (
                    <div key={name} className="space-y-1">
                      <Label>{label}</Label>
                      {isEditing && !disabled ? (
                        <Input
                          name={name}
                          value={(formData as any)[name]}
                          onChange={handleChange}
                        />
                      ) : (
                        <div className="flex items-center h-10 px-3 py-2 bg-gray-50 border rounded-md">
                          {icon}
                          <span className="ml-2">
                            {(formData as any)[name] || "—"}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Account Preferences</h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Language</h3>
                    <p className="text-sm text-gray-500">
                      Select your preferred language for the dashboard
                    </p>
                  </div>
                  <select className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                    <option value="zh">中文</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Time Zone</h3>
                    <p className="text-sm text-gray-500">
                      Set your local time zone for accurate scheduling
                    </p>
                  </div>
                  <select className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="utc">
                      UTC (Coordinated Universal Time)
                    </option>
                    <option value="est">EST (Eastern Standard Time)</option>
                    <option value="cst">CST (Central Standard Time)</option>
                    <option value="mst">MST (Mountain Standard Time)</option>
                    <option value="pst">PST (Pacific Standard Time)</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Currency</h3>
                    <p className="text-sm text-gray-500">
                      Set your preferred currency for quotes and orders
                    </p>
                  </div>
                  <select className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="usd">USD ($)</option>
                    <option value="eur">EUR (€)</option>
                    <option value="gbp">GBP (£)</option>
                    <option value="jpy">JPY (¥)</option>
                    <option value="cny">CNY (¥)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Danger Zone</h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Delete Account</h3>
                    <p className="text-sm text-gray-500">
                      Permanently delete your account and all associated data.
                      This action cannot be undone.
                    </p>
                  </div>
                  <Button variant="destructive">Delete Account</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Log Out of All Devices</h3>
                    <p className="text-sm text-gray-500">
                      Sign out from all devices where you're currently logged
                      in.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="border-red-300 text-red-600 hover:bg-red-50"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Log Out Everywhere
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* TEAM MEMBERS */}
        <TabsContent value="team">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-2">Team Members</h2>
            <p className="text-gray-500">
              This section will let you manage your team members.
            </p>
            <div className="mt-4 text-gray-400 italic">Coming soon...</div>
          </div>
        </TabsContent>
        {/* SECURITY */}
        <TabsContent value="security">
          <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold">Change Password</h2>
            </div>
            <div className="p-6">
              <form className="space-y-4" onSubmit={handlePasswordChange}>
                {[
                  { label: "Current Password", name: "current" },
                  { label: "New Password", name: "new" },
                  { label: "Confirm New Password", name: "confirm" },
                ].map(({ label, name }) => (
                  <div key={name}>
                    <Label>{label}</Label>
                    <Input
                      type="password"
                      value={(passwords as any)[name]}
                      onChange={(e) =>
                        setPasswords({ ...passwords, [name]: e.target.value })
                      }
                    />
                  </div>
                ))}
                <Button type="submit">Update Password</Button>
              </form>
            </div>
          </div>
        </TabsContent>

        {/* NOTIFICATIONS */}
        <TabsContent value="notifications">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-2">Notifications</h2>
            <p className="text-gray-500">
              Manage your notification preferences and alerts here.
            </p>
            <div className="mt-4 text-gray-400 italic">Coming soon...</div>
          </div>
        </TabsContent>

        {/* BILLING */}
        <TabsContent value="billing">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-2">Billing</h2>
            <p className="text-gray-500">
              View and manage your subscription & invoices.
            </p>
            <div className="mt-4 text-gray-400 italic">Coming soon...</div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
