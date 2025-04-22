// "use client"

// import { Label } from "@/components/ui/label"

// import type React from "react"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import {
//   Search,
//   Send,
//   Paperclip,
//   MoreHorizontal,
//   Phone,
//   Video,
//   Info,
//   Users,
//   FileText,
//   MessageSquare,
//   Inbox,
//   Archive,
//   Trash2,
//   Edit,
//   X,
//   Download,
//   Upload,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// // Mock data for messages
// const mockConversations = [
//   {
//     id: "conv-1",
//     type: "quote",
//     relatedId: "QUO-2023-5678",
//     name: "Quote: Organic Cotton T-Shirts",
//     avatar: "/placeholder.svg?height=40&width=40&text=Q",
//     lastMessage: "Your quote has been updated with new pricing options.",
//     timestamp: "10:32 AM",
//     date: "Today",
//     unread: true,
//     participants: [
//       {
//         id: "user-1",
//         name: "Sarah Johnson",
//         role: "Sourcing Specialist",
//         avatar: "/placeholder.svg?height=40&width=40&text=SJ",
//       },
//       { id: "user-2", name: "John Doe", role: "You", avatar: "/placeholder.svg?height=40&width=40&text=JD" },
//     ],
//     messages: [
//       {
//         id: "msg-1",
//         sender: {
//           id: "user-1",
//           name: "Sarah Johnson",
//           role: "Sourcing Specialist",
//           avatar: "/placeholder.svg?height=40&width=40&text=SJ",
//         },
//         content:
//           "Hello John, I'm Sarah and I'll be handling your quote request for Organic Cotton T-Shirts. I have a few questions about your specifications. Would you be open to alternative sustainable fabrics that might offer better pricing?",
//         timestamp: "Apr 13, 2023 • 14:22",
//         attachments: [],
//       },
//       {
//         id: "msg-2",
//         sender: { id: "user-2", name: "John Doe", role: "You", avatar: "/placeholder.svg?height=40&width=40&text=JD" },
//         content:
//           "Hi Sarah, thanks for reaching out. Yes, I'm definitely open to alternatives as long as they meet our sustainability standards and quality requirements.",
//         timestamp: "Apr 13, 2023 • 16:45",
//         attachments: [],
//       },
//       {
//         id: "msg-3",
//         sender: {
//           id: "user-1",
//           name: "Sarah Johnson",
//           role: "Sourcing Specialist",
//           avatar: "/placeholder.svg?height=40&width=40&text=SJ",
//         },
//         content:
//           "Great! I've identified a few suppliers who offer bamboo/cotton blends that might work well for your project. They're actually more sustainable and could bring the price down to around $4.20 per unit. Would you like me to include these options in the quote?",
//         timestamp: "Apr 14, 2023 • 09:30",
//         attachments: [],
//       },
//       {
//         id: "msg-4",
//         sender: { id: "user-2", name: "John Doe", role: "You", avatar: "/placeholder.svg?height=40&width=40&text=JD" },
//         content:
//           "That sounds promising! Yes, please include those options in the quote. I'd be interested in seeing the different possibilities.",
//         timestamp: "Apr 14, 2023 • 11:15",
//         attachments: [],
//       },
//       {
//         id: "msg-5",
//         sender: {
//           id: "user-1",
//           name: "Sarah Johnson",
//           role: "Sourcing Specialist",
//           avatar: "/placeholder.svg?height=40&width=40&text=SJ",
//         },
//         content:
//           "I've just provided your quote with all the options we discussed. Please review it and let me know if you have any questions or if you'd like to proceed with any of the options.",
//         timestamp: "Apr 16, 2023 • 11:20",
//         attachments: [{ id: "att-1", name: "Quote_Details.pdf", size: "0.8 MB", type: "pdf" }],
//       },
//       {
//         id: "msg-6",
//         sender: {
//           id: "user-1",
//           name: "Sarah Johnson",
//           role: "Sourcing Specialist",
//           avatar: "/placeholder.svg?height=40&width=40&text=SJ",
//         },
//         content:
//           "Just following up on the quote I sent. Have you had a chance to review the options? I'm available to discuss any questions you might have.",
//         timestamp: "Today • 10:32 AM",
//         attachments: [],
//       },
//     ],
//   },
//   {
//     id: "conv-2",
//     type: "supplier",
//     relatedId: "SUP-001",
//     name: "TextilePro Manufacturing",
//     avatar: "/placeholder.svg?height=40&width=40&text=TP",
//     lastMessage: "We can offer a 5% discount for orders over 2,000 units.",
//     timestamp: "Yesterday",
//     date: "Yesterday",
//     unread: false,
//     participants: [
//       {
//         id: "user-3",
//         name: "Michael Chen",
//         role: "Supplier Representative",
//         avatar: "/placeholder.svg?height=40&width=40&text=MC",
//       },
//       { id: "user-2", name: "John Doe", role: "You", avatar: "/placeholder.svg?height=40&width=40&text=JD" },
//     ],
//     messages: [
//       {
//         id: "msg-7",
//         sender: { id: "user-2", name: "John Doe", role: "You", avatar: "/placeholder.svg?height=40&width=40&text=JD" },
//         content:
//           "Hello, I'm interested in your organic cotton t-shirts. I saw your profile and wanted to ask if you offer any volume discounts?",
//         timestamp: "Apr 20, 2023 • 15:10",
//         attachments: [],
//       },
//       {
//         id: "msg-8",
//         sender: {
//           id: "user-3",
//           name: "Michael Chen",
//           role: "Supplier Representative",
//           avatar: "/placeholder.svg?height=40&width=40&text=MC",
//         },
//         content:
//           "Hello John, thank you for your interest in TextilePro Manufacturing. Yes, we do offer volume discounts. For our organic cotton t-shirts, we can offer a 5% discount for orders over 2,000 units and a 10% discount for orders over 5,000 units.",
//         timestamp: "Apr 20, 2023 • 16:45",
//         attachments: [],
//       },
//       {
//         id: "msg-9",
//         sender: { id: "user-2", name: "John Doe", role: "You", avatar: "/placeholder.svg?height=40&width=40&text=JD" },
//         content: "That sounds good. Do you have any minimum order quantities?",
//         timestamp: "Apr 21, 2023 • 09:20",
//         attachments: [],
//       },
//       {
//         id: "msg-10",
//         sender: {
//           id: "user-3",
//           name: "Michael Chen",
//           role: "Supplier Representative",
//           avatar: "/placeholder.svg?height=40&width=40&text=MC",
//         },
//         content:
//           "Our minimum order quantity for organic cotton t-shirts is 1,000 units. Would you like me to send you our product catalog with detailed specifications and pricing?",
//         timestamp: "Apr 21, 2023 • 10:15",
//         attachments: [],
//       },
//       {
//         id: "msg-11",
//         sender: { id: "user-2", name: "John Doe", role: "You", avatar: "/placeholder.svg?height=40&width=40&text=JD" },
//         content: "Yes, please send the catalog. Also, what's your typical lead time for an order of 2,000 units?",
//         timestamp: "Apr 21, 2023 • 11:30",
//         attachments: [],
//       },
//       {
//         id: "msg-12",
//         sender: {
//           id: "user-3",
//           name: "Michael Chen",
//           role: "Supplier Representative",
//           avatar: "/placeholder.svg?height=40&width=40&text=MC",
//         },
//         content:
//           "Here's our latest product catalog. For an order of 2,000 units, the typical lead time is 30-35 days from order confirmation. We can offer a 5% discount for orders over 2,000 units.",
//         timestamp: "Yesterday • 14:25",
//         attachments: [
//           { id: "att-2", name: "TextilePro_Catalog_2023.pdf", size: "4.2 MB", type: "pdf" },
//           { id: "att-3", name: "Price_List_2023.xlsx", size: "0.5 MB", type: "excel" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "conv-3",
//     type: "order",
//     relatedId: "ORD-2023-1234",
//     name: "Order: Cotton T-Shirts (500 units)",
//     avatar: "/placeholder.svg?height=40&width=40&text=O",
//     lastMessage: "Your order has been shipped. Tracking number: MSK12345678",
//     timestamp: "Apr 15, 2023",
//     date: "Apr 15, 2023",
//     unread: false,
//     participants: [
//       {
//         id: "user-4",
//         name: "Emma Rodriguez",
//         role: "Account Manager",
//         avatar: "/placeholder.svg?height=40&width=40&text=ER",
//       },
//       { id: "user-2", name: "John Doe", role: "You", avatar: "/placeholder.svg?height=40&width=40&text=JD" },
//     ],
//     messages: [
//       {
//         id: "msg-13",
//         sender: {
//           id: "user-4",
//           name: "Emma Rodriguez",
//           role: "Account Manager",
//           avatar: "/placeholder.svg?height=40&width=40&text=ER",
//         },
//         content:
//           "Hello John, I'm Emma, your account manager for this order. I wanted to confirm that we've received your order and payment. Production is scheduled to begin on April 15th. Please let me know if you have any questions.",
//         timestamp: "Apr 11, 2023 • 14:22",
//         attachments: [],
//       },
//       {
//         id: "msg-14",
//         sender: { id: "user-2", name: "John Doe", role: "You", avatar: "/placeholder.svg?height=40&width=40&text=JD" },
//         content:
//           "Hi Emma, thanks for the update. Could you please send me the production schedule? Also, I'm wondering if it's possible to get a sample of the final product before full production begins?",
//         timestamp: "Apr 11, 2023 • 16:45",
//         attachments: [],
//       },
//       {
//         id: "msg-15",
//         sender: {
//           id: "user-4",
//           name: "Emma Rodriguez",
//           role: "Account Manager",
//           avatar: "/placeholder.svg?height=40&width=40&text=ER",
//         },
//         content:
//           "Of course, I've attached the production schedule to this order. Regarding the sample, we can definitely arrange that. We'll send you a pre-production sample by express courier next week. Would that work for you?",
//         timestamp: "Apr 12, 2023 • 09:30",
//         attachments: [{ id: "att-4", name: "Production_Schedule.pdf", size: "0.7 MB", type: "pdf" }],
//       },
//       {
//         id: "msg-16",
//         sender: { id: "user-2", name: "John Doe", role: "You", avatar: "/placeholder.svg?height=40&width=40&text=JD" },
//         content: "That works perfectly. Thank you for arranging the sample.",
//         timestamp: "Apr 12, 2023 • 10:15",
//         attachments: [],
//       },
//       {
//         id: "msg-17",
//         sender: {
//           id: "user-4",
//           name: "Emma Rodriguez",
//           role: "Account Manager",
//           avatar: "/placeholder.svg?height=40&width=40&text=ER",
//         },
//         content:
//           "Great! I'll arrange for the sample to be sent out early next week. You should receive it by Wednesday or Thursday.",
//         timestamp: "Apr 12, 2023 • 11:00",
//         attachments: [],
//       },
//       {
//         id: "msg-18",
//         sender: {
//           id: "user-4",
//           name: "Emma Rodriguez",
//           role: "Account Manager",
//           avatar: "/placeholder.svg?height=40&width=40&text=ER",
//         },
//         content:
//           "Your order has been shipped. Tracking number: MSK12345678. You can track your shipment using the carrier's website. Estimated delivery date is June 15, 2023.",
//         timestamp: "Apr 15, 2023 • 15:45",
//         attachments: [
//           { id: "att-5", name: "Shipping_Documents.pdf", size: "1.2 MB", type: "pdf" },
//           { id: "att-6", name: "Invoice.pdf", size: "0.5 MB", type: "pdf" },
//         ],
//       },
//     ],
//   },
//   {
//     id: "conv-4",
//     type: "supplier",
//     relatedId: "SUP-002",
//     name: "ElectroTech Industries",
//     avatar: "/placeholder.svg?height=40&width=40&text=ET",
//     lastMessage: "We've sent the samples via DHL. Tracking: DHL9876543210",
//     timestamp: "Apr 10, 2023",
//     date: "Apr 10, 2023",
//     unread: false,
//     participants: [
//       { id: "user-5", name: "Lisa Wang", role: "Sales Manager", avatar: "/placeholder.svg?height=40&width=40&text=LW" },
//       { id: "user-2", name: "John Doe", role: "You", avatar: "/placeholder.svg?height=40&width=40&text=JD" },
//     ],
//     messages: [
//       {
//         id: "msg-19",
//         sender: { id: "user-2", name: "John Doe", role: "You", avatar: "/placeholder.svg?height=40&width=40&text=JD" },
//         content:
//           "Hello, I'm interested in your electronic components. Do you provide samples before placing a bulk order?",
//         timestamp: "Apr 5, 2023 • 11:20",
//         attachments: [],
//       },
//       {
//         id: "msg-20",
//         sender: {
//           id: "user-5",
//           name: "Lisa Wang",
//           role: "Sales Manager",
//           avatar: "/placeholder.svg?height=40&width=40&text=LW",
//         },
//         content:
//           "Hello John, thank you for your interest in ElectroTech Industries. Yes, we do provide samples for evaluation before bulk orders. There is a nominal fee for samples, which is refundable on placing a bulk order. Which specific components are you interested in?",
//         timestamp: "Apr 5, 2023 • 14:35",
//         attachments: [],
//       },
//       {
//         id: "msg-21",
//         sender: { id: "user-2", name: "John Doe", role: "You", avatar: "/placeholder.svg?height=40&width=40&text=JD" },
//         content:
//           "I'm interested in your microcontrollers, specifically the ET-328P model. How much would the sample cost, and what's the typical delivery time?",
//         timestamp: "Apr 6, 2023 • 09:45",
//         attachments: [],
//       },
//       {
//         id: "msg-22",
//         sender: {
//           id: "user-5",
//           name: "Lisa Wang",
//           role: "Sales Manager",
//           avatar: "/placeholder.svg?height=40&width=40&text=LW",
//         },
//         content:
//           "The sample for ET-328P costs $25 for 5 pieces, including shipping. Typical delivery time is 5-7 business days via express courier. Would you like to proceed with ordering the samples?",
//         timestamp: "Apr 6, 2023 • 11:10",
//         attachments: [],
//       },
//       {
//         id: "msg-23",
//         sender: { id: "user-2", name: "John Doe", role: "You", avatar: "/placeholder.svg?height=40&width=40&text=JD" },
//         content: "Yes, I'd like to order the samples. How do I proceed with payment?",
//         timestamp: "Apr 7, 2023 • 10:30",
//         attachments: [],
//       },
//       {
//         id: "msg-24",
//         sender: {
//           id: "user-5",
//           name: "Lisa Wang",
//           role: "Sales Manager",
//           avatar: "/placeholder.svg?height=40&width=40&text=LW",
//         },
//         content:
//           "Great! I've sent you an invoice via email. You can pay via credit card or PayPal. Once payment is confirmed, we'll ship the samples immediately.",
//         timestamp: "Apr 7, 2023 • 13:45",
//         attachments: [{ id: "att-7", name: "Sample_Invoice.pdf", size: "0.3 MB", type: "pdf" }],
//       },
//       {
//         id: "msg-25",
//         sender: { id: "user-2", name: "John Doe", role: "You", avatar: "/placeholder.svg?height=40&width=40&text=JD" },
//         content: "Payment sent. Please confirm receipt.",
//         timestamp: "Apr 8, 2023 • 09:15",
//         attachments: [],
//       },
//       {
//         id: "msg-26",
//         sender: {
//           id: "user-5",
//           name: "Lisa Wang",
//           role: "Sales Manager",
//           avatar: "/placeholder.svg?height=40&width=40&text=LW",
//         },
//         content: "Payment received, thank you! We'll process your sample order right away.",
//         timestamp: "Apr 8, 2023 • 10:20",
//         attachments: [],
//       },
//       {
//         id: "msg-27",
//         sender: {
//           id: "user-5",
//           name: "Lisa Wang",
//           role: "Sales Manager",
//           avatar: "/placeholder.svg?height=40&width=40&text=LW",
//         },
//         content:
//           "We've sent the samples via DHL. Tracking number: DHL9876543210. You should receive them within 5-7 business days.",
//         timestamp: "Apr 10, 2023 • 14:30",
//         attachments: [],
//       },
//     ],
//   },
//   {
//     id: "conv-5",
//     type: "quote",
//     relatedId: "QUO-2023-5677",
//     name: "Quote: Recycled Polyester Jackets",
//     avatar: "/placeholder.svg?height=40&width=40&text=Q",
//     lastMessage: "Your quote has been approved. Please proceed with the order.",
//     timestamp: "Apr 8, 2023",
//     date: "Apr 8, 2023",
//     unread: false,
//     participants: [
//       {
//         id: "user-6",
//         name: "David Kim",
//         role: "Sourcing Specialist",
//         avatar: "/placeholder.svg?height=40&width=40&text=DK",
//       },
//       { id: "user-2", name: "John Doe", role: "You", avatar: "/placeholder.svg?height=40&width=40&text=JD" },
//     ],
//     messages: [
//       {
//         id: "msg-28",
//         sender: {
//           id: "user-6",
//           name: "David Kim",
//           role: "Sourcing Specialist",
//           avatar: "/placeholder.svg?height=40&width=40&text=DK",
//         },
//         content:
//           "Hello John, I'm David and I'll be handling your quote request for Recycled Polyester Jackets. I've reviewed your specifications and have a few questions to ensure we provide the most accurate quote.",
//         timestamp: "Apr 3, 2023 • 10:15",
//         attachments: [],
//       },
//       {
//         id: "msg-29",
//         sender: { id: "user-2", name: "John Doe", role: "You", avatar: "/placeholder.svg?height=40&width=40&text=JD" },
//         content: "Hi David, thanks for reaching out. I'm happy to answer any questions you have.",
//         timestamp: "Apr 3, 2023 • 11:30",
//         attachments: [],
//       },
//       {
//         id: "msg-30",
//         sender: {
//           id: "user-6",
//           name: "David Kim",
//           role: "Sourcing Specialist",
//           avatar: "/placeholder.svg?height=40&width=40&text=DK",
//         },
//         content:
//           "Great! First, could you clarify the type of lining you prefer for the jackets? Also, do you have any specific requirements for the zippers and hardware?",
//         timestamp: "Apr 3, 2023 • 13:45",
//         attachments: [],
//       },
//       {
//         id: "msg-31",
//         sender: { id: "user-2", name: "John Doe", role: "You", avatar: "/placeholder.svg?height=40&width=40&text=JD" },
//         content:
//           "We'd prefer a recycled polyester lining to maintain the eco-friendly aspect of the jackets. For zippers, we'd like YKK zippers in matching colors, and any metal hardware should be nickel-free.",
//         timestamp: "Apr 3, 2023 • 15:20",
//         attachments: [],
//       },
//       {
//         id: "msg-32",
//         sender: {
//           id: "user-6",
//           name: "David Kim",
//           role: "Sourcing Specialist",
//           avatar: "/placeholder.svg?height=40&width=40&text=DK",
//         },
//         content:
//           "Thank you for the clarification. I've prepared a quote based on your requirements. Please review it and let me know if you'd like to proceed or if you have any questions.",
//         timestamp: "Apr 5, 2023 • 11:10",
//         attachments: [{ id: "att-8", name: "Jacket_Quote.pdf", size: "0.9 MB", type: "pdf" }],
//       },
//       {
//         id: "msg-33",
//         sender: { id: "user-2", name: "John Doe", role: "You", avatar: "/placeholder.svg?height=40&width=40&text=JD" },
//         content: "The quote looks good. I'd like to proceed with this order. What are the next steps?",
//         timestamp: "Apr 6, 2023 • 14:30",
//         attachments: [],
//       },
//       {
//         id: "msg-34",
//         sender: {
//           id: "user-6",
//           name: "David Kim",
//           role: "Sourcing Specialist",
//           avatar: "/placeholder.svg?height=40&width=40&text=DK",
//         },
//         content:
//           "Great! The next step is to approve the quote formally. Once approved, we'll send you an order confirmation and invoice for the initial deposit. Production will begin after we receive the deposit.",
//         timestamp: "Apr 7, 2023 • 09:45",
//         attachments: [],
//       },
//       {
//         id: "msg-35",
//         sender: { id: "user-2", name: "John Doe", role: "You", avatar: "/placeholder.svg?height=40&width=40&text=JD" },
//         content: "I approve the quote. Please proceed with the order confirmation and invoice.",
//         timestamp: "Apr 7, 2023 • 11:20",
//         attachments: [],
//       },
//       {
//         id: "msg-36",
//         sender: {
//           id: "user-6",
//           name: "David Kim",
//           role: "Sourcing Specialist",
//           avatar: "/placeholder.svg?height=40&width=40&text=DK",
//         },
//         content:
//           "Your quote has been approved. I've attached the order confirmation and invoice for the 30% deposit. Once payment is received, we'll begin production immediately.",
//         timestamp: "Apr 8, 2023 • 10:30",
//         attachments: [
//           { id: "att-9", name: "Order_Confirmation.pdf", size: "0.7 MB", type: "pdf" },
//           { id: "att-10", name: "Invoice_Deposit.pdf", size: "0.5 MB", type: "pdf" },
//         ],
//       },
//     ],
//   },
// ]

// export default function MessagesPage() {
//   const [activeConversation, setActiveConversation] = useState<any>(null)
//   const [conversations, setConversations] = useState(mockConversations)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [newMessage, setNewMessage] = useState("")
//   const [filter, setFilter] = useState("all")
//   const [showNewMessage, setShowNewMessage] = useState(false)
//   const [newMessageData, setNewMessageData] = useState({
//     recipient: "",
//     subject: "",
//     message: "",
//   })

//   useEffect(() => {
//     // Set the first conversation as active by default
//     if (conversations.length > 0 && !activeConversation) {
//       setActiveConversation(conversations[0])
//     }
//   }, [conversations, activeConversation])

//   const handleSendMessage = (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!newMessage.trim()) return

//     // In a real app, you would send this to your API
//     console.log("Sending message:", newMessage)

//     // Simulate adding the new message to the conversation
//     if (activeConversation) {
//       const updatedConversations = conversations.map((conv) => {
//         if (conv.id === activeConversation.id) {
//           const newMsg = {
//             id: `msg-new-${Date.now()}`,
//             sender: {
//               id: "user-2",
//               name: "John Doe",
//               role: "You",
//               avatar: "/placeholder.svg?height=40&width=40&text=JD",
//             },
//             content: newMessage,
//             timestamp: `Today • ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`,
//             attachments: [],
//           }
//           return {
//             ...conv,
//             messages: [...conv.messages, newMsg],
//             lastMessage: newMessage,
//             timestamp: "Just now",
//             date: "Today",
//           }
//         }
//         return conv
//       })

//       setConversations(updatedConversations)
//       setActiveConversation(updatedConversations.find((c) => c.id === activeConversation.id))
//       setNewMessage("")
//     }
//   }

//   const handleCreateNewMessage = (e: React.FormEvent) => {
//     e.preventDefault()
//     // In a real app, you would send this to your API
//     console.log("Creating new message:", newMessageData)

//     // Simulate creating a new conversation
//     const newConv = {
//       id: `conv-new-${Date.now()}`,
//       type: "direct",
//       relatedId: "",
//       name: newMessageData.subject || "New Conversation",
//       avatar: "/placeholder.svg?height=40&width=40&text=N",
//       lastMessage: newMessageData.message,
//       timestamp: "Just now",
//       date: "Today",
//       unread: false,
//       participants: [
//         {
//           id: "user-new",
//           name: newMessageData.recipient,
//           role: "Recipient",
//           avatar: "/placeholder.svg?height=40&width=40&text=R",
//         },
//         { id: "user-2", name: "John Doe", role: "You", avatar: "/placeholder.svg?height=40&width=40&text=JD" },
//       ],
//       messages: [
//         {
//           id: `msg-new-${Date.now()}`,
//           sender: {
//             id: "user-2",
//             name: "John Doe",
//             role: "You",
//             avatar: "/placeholder.svg?height=40&width=40&text=JD",
//           },
//           content: newMessageData.message,
//           timestamp: `Today • ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`,
//           attachments: [],
//         },
//       ],
//     }

//     setConversations([newConv, ...conversations])
//     setActiveConversation(newConv)
//     setShowNewMessage(false)
//     setNewMessageData({
//       recipient: "",
//       subject: "",
//       message: "",
//     })
//   }

//   const filteredConversations = conversations.filter((conv) => {
//     // Apply search filter
//     const matchesSearch =
//       searchTerm === "" ||
//       conv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())

//     // Apply type filter
//     const matchesFilter = filter === "all" || conv.type === filter

//     return matchesSearch && matchesFilter
//   })

//   const getTypeIcon = (type: string) => {
//     switch (type) {
//       case "quote":
//         return <FileText className="h-4 w-4" />
//       case "supplier":
//         return <Users className="h-4 w-4" />
//       case "order":
//         return <Package className="h-4 w-4" />
//       default:
//         return <MessageSquare className="h-4 w-4" />
//     }
//   }

//   const getAttachmentIcon = (type: string) => {
//     switch (type) {
//       case "pdf":
//         return <FileText className="h-4 w-4 text-red-500" />
//       case "excel":
//         return <FileText className="h-4 w-4 text-green-500" />
//       case "image":
//         return <Image className="h-4 w-4 text-blue-500" />
//       default:
//         return <FileText className="h-4 w-4 text-gray-500" />
//     }
//   }

//   return (
//     <div className="space-y-8">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-bold">Messages</h1>
//           <p className="text-gray-500 mt-1">View and manage all your communications</p>
//         </div>
//         <Button onClick={() => setShowNewMessage(true)} className="flex items-center">
//           <Edit className="h-4 w-4 mr-2" />
//           New Message
//         </Button>
//       </div>

//       <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden h-[calc(100vh-220px)]">
//         <div className="flex h-full">
//           {/* Sidebar */}
//           <div className="w-1/3 border-r border-gray-200 flex flex-col h-full">
//             <div className="p-4 border-b border-gray-200">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//                 <Input
//                   className="pl-10 pr-4 py-2 rounded-md border border-gray-300 w-full"
//                   placeholder="Search messages..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div className="p-2 border-b border-gray-200">
//               <Tabs defaultValue="all" className="w-full">
//                 <TabsList className="grid w-full grid-cols-4">
//                   <TabsTrigger value="all" onClick={() => setFilter("all")}>
//                     All
//                   </TabsTrigger>
//                   <TabsTrigger value="quote" onClick={() => setFilter("quote")}>
//                     Quotes
//                   </TabsTrigger>
//                   <TabsTrigger value="supplier" onClick={() => setFilter("supplier")}>
//                     Suppliers
//                   </TabsTrigger>
//                   <TabsTrigger value="order" onClick={() => setFilter("order")}>
//                     Orders
//                   </TabsTrigger>
//                 </TabsList>
//               </Tabs>
//             </div>

//             <div className="flex-1 overflow-y-auto">
//               {filteredConversations.length === 0 ? (
//                 <div className="flex flex-col items-center justify-center h-full p-6 text-center">
//                   <MessageSquare className="h-12 w-12 text-gray-300 mb-2" />
//                   <p className="text-gray-500">No messages found</p>
//                   <p className="text-sm text-gray-400 mt-1">Try adjusting your search or filters</p>
//                 </div>
//               ) : (
//                 <ul className="divide-y divide-gray-200">
//                   {filteredConversations.map((conv) => (
//                     <li
//                       key={conv.id}
//                       className={`hover:bg-gray-50 cursor-pointer ${activeConversation?.id === conv.id ? "bg-gray-50" : ""}`}
//                       onClick={() => setActiveConversation(conv)}
//                     >
//                       <div className="flex items-start p-4">
//                         <div className="relative mr-3 flex-shrink-0">
//                           <div className="w-10 h-10 rounded-full overflow-hidden">
//                             <Image
//                               src={conv.avatar || "/placeholder.svg"}
//                               alt={conv.name}
//                               width={40}
//                               height={40}
//                               className="object-cover"
//                             />
//                           </div>
//                           {conv.unread && (
//                             <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-blue-600 ring-2 ring-white"></span>
//                           )}
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <div className="flex items-center justify-between">
//                             <h3 className="text-sm font-medium truncate">{conv.name}</h3>
//                             <span className="text-xs text-gray-500">{conv.timestamp}</span>
//                           </div>
//                           <div className="flex items-center text-xs text-gray-500 mt-1">
//                             {getTypeIcon(conv.type)}
//                             <span className="ml-1 capitalize">{conv.type}</span>
//                             <span className="mx-1">•</span>
//                             <span>{conv.date}</span>
//                           </div>
//                           <p className="text-sm text-gray-600 truncate mt-1">{conv.lastMessage}</p>
//                         </div>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>

//             <div className="p-3 border-t border-gray-200">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center text-sm text-gray-500">
//                   <Inbox className="h-4 w-4 mr-1" />
//                   <span>Inbox</span>
//                 </div>
//                 <div className="flex space-x-2">
//                   <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
//                     <Archive className="h-4 w-4" />
//                   </Button>
//                   <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
//                     <Trash2 className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main content */}
//           {activeConversation ? (
//             <div className="w-2/3 flex flex-col h-full">
//               <div className="p-4 border-b border-gray-200 flex items-center justify-between">
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
//                     <Image
//                       src={activeConversation.avatar || "/placeholder.svg"}
//                       alt={activeConversation.name}
//                       width={40}
//                       height={40}
//                       className="object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h2 className="font-medium">{activeConversation.name}</h2>
//                     <div className="flex items-center text-xs text-gray-500">
//                       <span>{activeConversation.participants.length} participants</span>
//                       <span className="mx-1">•</span>
//                       <span>{activeConversation.type.charAt(0).toUpperCase() + activeConversation.type.slice(1)}</span>
//                       {activeConversation.relatedId && (
//                         <>
//                           <span className="mx-1">•</span>
//                           <span>{activeConversation.relatedId}</span>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
//                     <Phone className="h-4 w-4" />
//                   </Button>
//                   <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
//                     <Video className="h-4 w-4" />
//                   </Button>
//                   <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
//                     <Info className="h-4 w-4" />
//                   </Button>
//                   <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
//                     <MoreHorizontal className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>

//               <div className="flex-1 overflow-y-auto p-4 space-y-4">
//                 {activeConversation.messages.map((message: any) => (
//                   <div
//                     key={message.id}
//                     className={`flex ${message.sender.id === "user-2" ? "justify-end" : "justify-start"}`}
//                   >
//                     <div
//                       className={`max-w-[70%] ${
//                         message.sender.id === "user-2"
//                           ? "bg-black text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg"
//                           : "bg-gray-100 text-gray-800 rounded-tl-lg rounded-tr-lg rounded-br-lg"
//                       } p-4 shadow-sm`}
//                     >
//                       <div className="flex items-center mb-1">
//                         <span className="font-medium text-sm">{message.sender.name}</span>
//                         <span className="mx-1 text-xs opacity-70">•</span>
//                         <span className="text-xs opacity-70">{message.sender.role}</span>
//                       </div>
//                       <p className="text-sm whitespace-pre-wrap">{message.content}</p>

//                       {message.attachments && message.attachments.length > 0 && (
//                         <div className="mt-3 space-y-2">
//                           {message.attachments.map((attachment: any) => (
//                             <div key={attachment.id} className="flex items-center p-2 bg-white bg-opacity-10 rounded">
//                               {getAttachmentIcon(attachment.type)}
//                               <div className="ml-2 flex-1">
//                                 <p className="text-xs font-medium truncate">{attachment.name}</p>
//                                 <p className="text-xs opacity-70">{attachment.size}</p>
//                               </div>
//                               <Button variant="ghost" size="sm" className="h-6 w-6 p-0 opacity-70 hover:opacity-100">
//                                 <Download className="h-3 w-3" />
//                               </Button>
//                             </div>
//                           ))}
//                         </div>
//                       )}

//                       <div className="mt-2 text-right">
//                         <span className="text-xs opacity-70">{message.timestamp}</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="p-4 border-t border-gray-200">
//                 <form onSubmit={handleSendMessage} className="flex items-end">
//                   <div className="flex-1 relative">
//                     <Textarea
//                       placeholder="Type your message..."
//                       value={newMessage}
//                       onChange={(e) => setNewMessage(e.target.value)}
//                       className="min-h-[80px] pr-10 resize-none"
//                     />
//                     <Button
//                       type="button"
//                       variant="ghost"
//                       size="sm"
//                       className="absolute bottom-2 right-2 h-8 w-8 p-0"
//                       onClick={() => document.getElementById("attachment-upload")?.click()}
//                     >
//                       <Paperclip className="h-4 w-4" />
//                     </Button>
//                     <input type="file" id="attachment-upload" className="hidden" multiple />
//                   </div>
//                   <Button type="submit" className="ml-2 h-10">
//                     <Send className="h-4 w-4 mr-2" />
//                     Send
//                   </Button>
//                 </form>
//               </div>
//             </div>
//           ) : (
//             <div className="w-2/3 flex flex-col items-center justify-center h-full p-6 text-center">
//               <MessageSquare className="h-16 w-16 text-gray-300 mb-4" />
//               <h3 className="text-lg font-medium text-gray-900">No conversation selected</h3>
//               <p className="text-gray-500 mt-1 max-w-md">
//                 Select a conversation from the list or start a new message to begin chatting.
//               </p>
//               <Button onClick={() => setShowNewMessage(true)} className="mt-4">
//                 <Edit className="h-4 w-4 mr-2" />
//                 New Message
//               </Button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* New Message Modal */}
//       {showNewMessage && (
//         <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
//             <div className="flex items-center justify-between p-4 border-b">
//               <h2 className="text-lg font-bold">New Message</h2>
//               <Button variant="ghost" size="sm" onClick={() => setShowNewMessage(false)}>
//                 <X className="h-4 w-4" />
//               </Button>
//             </div>
//             <form onSubmit={handleCreateNewMessage} className="p-6 space-y-4">
//               <div className="space-y-2">
//                 <Label htmlFor="recipient">Recipient</Label>
//                 <Input
//                   id="recipient"
//                   placeholder="Enter recipient name or select from contacts"
//                   value={newMessageData.recipient}
//                   onChange={(e) => setNewMessageData({ ...newMessageData, recipient: e.target.value })}
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="subject">Subject</Label>
//                 <Input
//                   id="subject"
//                   placeholder="Enter message subject"
//                   value={newMessageData.subject}
//                   onChange={(e) => setNewMessageData({ ...newMessageData, subject: e.target.value })}
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="message">Message</Label>
//                 <Textarea
//                   id="message"
//                   placeholder="Type your message here..."
//                   value={newMessageData.message}
//                   onChange={(e) => setNewMessageData({ ...newMessageData, message: e.target.value })}
//                   className="min-h-[150px]"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label>Attachments</Label>
//                 <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
//                   <Upload className="mx-auto h-8 w-8 text-gray-400" />
//                   <p className="mt-1 text-sm text-gray-500">Drag and drop files here, or click to select files</p>
//                   <Button
//                     type="button"
//                     variant="outline"
//                     size="sm"
//                     className="mt-2"
//                     onClick={() => document.getElementById("new-message-attachment")?.click()}
//                   >
//                     Select Files
//                   </Button>
//                   <input type="file" id="new-message-attachment" className="hidden" multiple />
//                 </div>
//               </div>
//               <div className="flex justify-end pt-4 space-x-2">
//                 <Button type="button" variant="outline" onClick={() => setShowNewMessage(false)}>
//                   Cancel
//                 </Button>
//                 <Button type="submit">
//                   <Send className="h-4 w-4 mr-2" />
//                   Send Message
//                 </Button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// function Package(props: any) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       {...props}
//     >
//       <path d="m7.5 4.27 9 5.15" />
//       <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
//       <path d="m3.3 7 8.7 5 8.7-5" />
//       <path d="M12 22V12" />
//     </svg>
//   )
// }

// // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // "use client";

// // import { useEffect, useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Textarea } from "@/components/ui/textarea";
// // import { MessageSquare, Send } from "lucide-react";

// // export default function MessagesPage() {
// //   const [userList, setUserList] = useState<any[]>([]);
// //   const [conversations, setConversations] = useState<any[]>([]);
// //   const [activeConversation, setActiveConversation] = useState<any | null>(
// //     null
// //   );
// //   const [newMessage, setNewMessage] = useState("");
// //   const [token, setToken] = useState<string | null>(null);

// //   useEffect(() => {
// //     const storedToken = localStorage.getItem("accessToken");
// //     if (storedToken) {
// //       setToken(storedToken);
// //       fetchUsers(storedToken);
// //       fetchConversations(storedToken);
// //     }
// //   }, []);

// //   const fetchUsers = async (token: string) => {
// //     try {
// //       const res = await fetch("http://localhost:8000/users/all/", {
// //         headers: {
// //           Authorization: `JWT ${token}`,
// //         },
// //       });
// //       if (!res.ok) throw new Error("Failed to fetch users");
// //       const data = await res.json();
// //       setUserList(data);
// //     } catch (error) {
// //       console.error("Error fetching users:", error);
// //     }
// //   };

// //   const fetchConversations = async (token: string) => {
// //     try {
// //       const res = await fetch("http://localhost:8000/conversations/", {
// //         headers: {
// //           Authorization: `JWT ${token}`,
// //         },
// //       });
// //       if (!res.ok) throw new Error("Failed to fetch conversations");
// //       const data = await res.json();
// //       setConversations(data);
// //     } catch (error) {
// //       console.error("Error fetching conversations:", error);
// //     }
// //   };

// //   const startConversation = async (userId: number) => {
// //     try {
// //       const res = await fetch(
// //         "http://localhost:8000/conversations/get-or-create/",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `JWT ${token}`,
// //           },
// //           body: JSON.stringify({ user_id: userId }),
// //         }
// //       );
// //       if (!res.ok) throw new Error("Failed to start conversation");
// //       const data = await res.json();
// //       setActiveConversation(data);
// //     } catch (error) {
// //       console.error("Error starting conversation:", error);
// //     }
// //   };

// //   const sendMessage = async () => {
// //     if (!activeConversation || !newMessage.trim()) return;
// //     try {
// //       const res = await fetch(
// //         `http://localhost:8000/conversations/${activeConversation.id}/send/`,
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `JWT ${token}`,
// //           },
// //           body: JSON.stringify({ content: newMessage }),
// //         }
// //       );
// //       if (!res.ok) throw new Error("Failed to send message");
// //       const msg = await res.json();
// //       setActiveConversation({
// //         ...activeConversation,
// //         messages: [...(activeConversation.messages || []), msg],
// //       });
// //       setNewMessage("");
// //     } catch (error) {
// //       console.error("Error sending message:", error);
// //     }
// //   };

// //   return (
// //     <div className="flex h-[90vh]">
// //       {/* Sidebar with users */}
// //       <div className="w-1/4 border-r p-4 overflow-y-auto">
// //         <h2 className="text-lg font-bold mb-2">Users</h2>
// //         <ul>
// //           {userList.map((user) => (
// //             <li
// //               key={user.id}
// //               onClick={() => startConversation(user.id)}
// //               className="cursor-pointer hover:bg-gray-100 p-2 rounded"
// //             >
// //               {user.name} ({user.email})
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       {/* Main chat area */}
// //       <div className="flex-1 flex flex-col">
// //         {activeConversation ? (
// //           <>
// //             <div className="p-4 border-b font-semibold text-lg">
// //               {activeConversation.name || "Conversation"}
// //             </div>
// //             <div className="flex-1 overflow-y-auto p-4 space-y-2">
// //               {activeConversation.messages?.map((msg: any) => (
// //                 <div key={msg.id} className="p-2 border rounded">
// //                   <div className="font-medium">{msg.sender_name}</div>
// //                   <div className="text-sm">{msg.content}</div>
// //                   <div className="text-xs text-gray-400">
// //                     {new Date(msg.sent_at).toLocaleString()}
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //             <div className="p-4 border-t flex gap-2">
// //               <Textarea
// //                 value={newMessage}
// //                 onChange={(e) => setNewMessage(e.target.value)}
// //                 placeholder="Type a message..."
// //               />
// //               <Button onClick={sendMessage}>
// //                 <Send className="h-4 w-4 mr-1" /> Send
// //               </Button>
// //             </div>
// //           </>
// //         ) : (
// //           <div className="flex items-center justify-center h-full">
// //             <div className="text-gray-400 text-sm">
// //               <MessageSquare className="h-8 w-8 mx-auto mb-2" />
// //               Select a user to start chatting
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }
// /////////////////////////////////////////////

// // "use client";

// // import { useEffect, useState } from "react";
// // import { Send } from "lucide-react";
// // import { Textarea } from "@/components/ui/textarea";
// // import { Button } from "@/components/ui/button";

// // export default function MessagesPage() {
// //   const [userList, setUserList] = useState<any[]>([]);
// //   const [currentUser, setCurrentUser] = useState<any>(null);
// //   const [activeConversation, setActiveConversation] = useState<any | null>(
// //     null
// //   );
// //   const [newMessage, setNewMessage] = useState("");
// //   const [token, setToken] = useState<string | null>(null); // Avoid accessing during SSR

// //   useEffect(() => {
// //     const t = localStorage.getItem("accessToken");
// //     if (t) {
// //       setToken(t);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     if (token) {
// //       fetchUsers();
// //       fetchCurrentUser();
// //     }
// //   }, [token]);

// //   const fetchUsers = async () => {
// //     try {
// //       const res = await fetch("http://localhost:8000/auth/users/", {
// //         headers: { Authorization: `JWT ${token}` },
// //       });
// //       const data = await res.json();
// //       setUserList(data);
// //     } catch (err) {
// //       console.error("Error fetching users", err);
// //     }
// //   };

// //   const fetchCurrentUser = async () => {
// //     try {
// //       const res = await fetch("http://localhost:8000/auth/users/me/", {
// //         headers: { Authorization: `JWT ${token}` },
// //       });
// //       const data = await res.json();
// //       setCurrentUser(data);
// //     } catch (err) {
// //       console.error("Error fetching user", err);
// //     }
// //   };

// //   const startConversation = async (userId: number) => {
// //     const res = await fetch(
// //       "http://localhost:8000/conversations/get-or-create/",
// //       {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `JWT ${token}`,
// //         },
// //         body: JSON.stringify({ user_id: userId }),
// //       }
// //     );
// //     const data = await res.json();
// //     setActiveConversation(data);
// //   };

// //   const sendMessage = async () => {
// //     if (!activeConversation || !newMessage.trim()) return;

// //     const res = await fetch(
// //       `http://localhost:8000/conversations/${activeConversation.id}/send/`,
// //       {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `JWT ${token}`,
// //         },
// //         body: JSON.stringify({ content: newMessage }),
// //       }
// //     );
// //     const msg = await res.json();
// //     setActiveConversation({
// //       ...activeConversation,
// //       messages: [...activeConversation.messages, msg],
// //     });
// //     setNewMessage("");
// //   };

// //   return (
// //     <div className="flex h-[90vh]">
// //       <div className="w-1/4 border-r p-4 overflow-y-auto">
// //         <h2 className="text-lg font-bold mb-4">Users</h2>
// //         <ul className="space-y-1">
// //           {Array.isArray(userList) &&
// //             userList
// //               .filter((u) => u.id !== currentUser?.id)
// //               .map((user) => (
// //                 <li
// //                   key={user.id}
// //                   onClick={() => startConversation(user.id)}
// //                   className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
// //                 >
// //                   {user.name || user.username} ({user.email})
// //                 </li>
// //               ))}
// //         </ul>
// //       </div>

// //       <div className="flex-1 flex flex-col">
// //         {activeConversation ? (
// //           <>
// //             <div className="p-4 border-b font-semibold text-lg">
// //               Chat with {activeConversation.name?.replace("Chat with ", "")}
// //             </div>

// //             <div className="flex-1 overflow-y-auto p-6 space-y-3 bg-gray-50">
// //               {activeConversation.messages?.map((msg: any) => {
// //                 const isMine = msg.sender_name === currentUser?.name;
// //                 return (
// //                   <div
// //                     key={msg.id}
// //                     className={`flex ${
// //                       isMine ? "justify-end" : "justify-start"
// //                     }`}
// //                   >
// //                     <div
// //                       className={`p-3 max-w-[75%] rounded-lg ${
// //                         isMine
// //                           ? "bg-black text-white rounded-br-none"
// //                           : "bg-white text-gray-800 rounded-bl-none border"
// //                       }`}
// //                     >
// //                       <div className="text-sm font-medium">
// //                         {msg.sender_name}
// //                       </div>
// //                       <div className="text-sm">{msg.content}</div>
// //                       <div className="text-xs text-gray-400 mt-1">
// //                         {new Date(msg.sent_at).toLocaleString("en-US")}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>

// //             <div className="p-4 border-t flex gap-2 items-end">
// //               <Textarea
// //                 value={newMessage}
// //                 onChange={(e) => setNewMessage(e.target.value)}
// //                 placeholder="Type a message..."
// //                 className="flex-1 resize-none min-h-[60px]"
// //               />
// //               <Button onClick={sendMessage} className="h-10">
// //                 <Send className="h-4 w-4 mr-1" /> Send
// //               </Button>
// //             </div>
// //           </>
// //         ) : (
// //           <div className="flex items-center justify-center h-full text-gray-400">
// //             Select a user to start chatting
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // ye sb se last final code abi tak
// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { MessageSquare, Send } from "lucide-react";

// const API_BASE = "http://localhost:8000";

// export default function MessagesPage() {
//   const [userList, setUserList] = useState<any[]>([]);
//   const [conversations, setConversations] = useState<any[]>([]);
//   const [activeConversation, setActiveConversation] = useState<any | null>(
//     null
//   );
//   const [newMessage, setNewMessage] = useState("");
//   const [token, setToken] = useState<string | null>(null);
//   const [currentUser, setCurrentUser] = useState<any>(null);

//   useEffect(() => {
//     const storedToken = localStorage.getItem("accessToken");
//     if (storedToken) {
//       setToken(storedToken);
//       fetchUsers(storedToken);
//       fetchConversations(storedToken);
//       fetchCurrentUser(storedToken);
//     }
//   }, []);

//   const fetchUsers = async (token: string) => {
//     const res = await fetch(`${API_BASE}/users/all/`, {
//       headers: { Authorization: `JWT ${token}` },
//     });
//     const data = await res.json();
//     setUserList(data);
//   };

//   const fetchCurrentUser = async (token: string) => {
//     const res = await fetch(`${API_BASE}/profile/`, {
//       headers: { Authorization: `JWT ${token}` },
//     });
//     const data = await res.json();
//     setCurrentUser(data);
//   };

//   const fetchConversations = async (token: string) => {
//     const res = await fetch(`${API_BASE}/conversations/`, {
//       headers: { Authorization: `JWT ${token}` },
//     });
//     const data = await res.json();
//     setConversations(data);
//   };

//   const startConversation = async (userId: number) => {
//     const res = await fetch(`${API_BASE}/conversations/get-or-create/`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `JWT ${token}`,
//       },
//       body: JSON.stringify({ user_id: userId }),
//     });
//     const data = await res.json();
//     setActiveConversation(data);
//   };

//   const sendMessage = async () => {
//     if (!activeConversation || !newMessage.trim()) return;

//     const res = await fetch(
//       `${API_BASE}/conversations/${activeConversation.id}/send/`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `JWT ${token}`,
//         },
//         body: JSON.stringify({ content: newMessage }),
//       }
//     );

//     const msg = await res.json();
//     setActiveConversation({
//       ...activeConversation,
//       messages: [...(activeConversation.messages || []), msg],
//     });
//     setNewMessage("");
//   };

//   return (
//     <div className="flex h-[90vh]">
//       <div className="w-1/4 border-r p-4 overflow-y-auto">
//         <h2 className="text-lg font-bold mb-4">Users</h2>
//         <ul className="space-y-2">
//           {userList.map((user) => (
//             <li
//               key={user.id}
//               onClick={() => startConversation(user.id)}
//               className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded"
//             >
//               <img
//                 src={user.profile_image || "/placeholder.svg"}
//                 className="w-8 h-8 rounded-full"
//                 alt="profile"
//               />
//               <span className="text-sm">{user.email}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="flex-1 flex flex-col">
//         {activeConversation ? (
//           <>
//             <div className="p-4 border-b font-semibold text-lg">
//               Chat with {activeConversation.name.replace("Chat with ", "")}
//             </div>
//             <div className="flex-1 overflow-y-auto p-4 space-y-4">
//               {activeConversation.messages?.map((msg: any) => {
//                 const isCurrentUser =
//                   msg.sender_name ===
//                   `${currentUser?.first_name || ""} ${
//                     currentUser?.last_name || ""
//                   }`;
//                 return (
//                   <div
//                     key={msg.id}
//                     className={`flex items-end gap-2 ${
//                       isCurrentUser ? "justify-end" : "justify-start"
//                     }`}
//                   >
//                     {!isCurrentUser && (
//                       <img
//                         src={msg.sender_image || "/placeholder.svg"}
//                         className="w-8 h-8 rounded-full"
//                         alt="sender"
//                       />
//                     )}

//                     {/* {!isCurrentUser && (
//                       <img
//                         src={msg.sender_image || "/placeholder.svg"}
//                         className="w-8 h-8 rounded-full"
//                         alt="sender"
//                       />
//                     )} */}

//                     <div
//                       className={`max-w-xs px-4 py-2 rounded-lg shadow text-sm ${
//                         isCurrentUser
//                           ? "bg-black text-white rounded-br-none"
//                           : "bg-white text-black border rounded-bl-none"
//                       }`}
//                     >
//                       <div className="font-semibold mb-1 text-xs">
//                         {msg.sender_name}
//                       </div>
//                       <div>{msg.content}</div>
//                       <div className="text-xs text-gray-400 text-right mt-1">
//                         {new Date(msg.sent_at).toLocaleTimeString([], {
//                           hour: "2-digit",
//                           minute: "2-digit",
//                         })}
//                       </div>
//                     </div>

//                     {isCurrentUser && (
//                       <img
//                         src={currentUser?.profile_image || "/placeholder.svg"}
//                         className="w-8 h-8 rounded-full"
//                         alt="you"
//                       />
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//             <div className="p-4 border-t flex gap-2">
//               <Textarea
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 placeholder="Type a message..."
//               />
//               <Button onClick={sendMessage}>
//                 <Send className="h-4 w-4 mr-1" /> Send
//               </Button>
//             </div>
//           </>
//         ) : (
//           <div className="flex items-center justify-center h-full">
//             <div className="text-gray-400 text-sm">
//               <MessageSquare className="h-8 w-8 mx-auto mb-2" />
//               Select a user to start chatting
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// "use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { MessageSquare, Send } from "lucide-react";

// const API_BASE = "http://localhost:8000";

// export default function MessagesPage() {
//   const [userList, setUserList] = useState<any[]>([]);
//   const [conversations, setConversations] = useState<any[]>([]);
//   const [activeConversation, setActiveConversation] = useState<any | null>(
//     null
//   );
//   const [newMessage, setNewMessage] = useState("");
//   const [token, setToken] = useState<string | null>(null);
//   const [currentUser, setCurrentUser] = useState<any>(null);

//   useEffect(() => {
//     const storedToken = localStorage.getItem("accessToken");
//     if (storedToken) {
//       setToken(storedToken);
//       fetchUsers(storedToken);
//       fetchConversations(storedToken);
//       fetchCurrentUser(storedToken);
//     }
//   }, []);

//   const fetchUsers = async (token: string) => {
//     const res = await fetch(`${API_BASE}/users/all/`, {
//       headers: { Authorization: `JWT ${token}` },
//     });
//     const data = await res.json();
//     setUserList(data);
//   };

//   const fetchCurrentUser = async (token: string) => {
//     const res = await fetch(`${API_BASE}/profile/`, {
//       headers: { Authorization: `JWT ${token}` },
//     });
//     const data = await res.json();
//     setCurrentUser(data);
//   };

//   const fetchConversations = async (token: string) => {
//     const res = await fetch(`${API_BASE}/conversations/`, {
//       headers: { Authorization: `JWT ${token}` },
//     });
//     const data = await res.json();
//     setConversations(data);
//   };

//   const startConversation = async (userId: number) => {
//     const res = await fetch(`${API_BASE}/conversations/get-or-create/`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `JWT ${token}`,
//       },
//       body: JSON.stringify({ user_id: userId }),
//     });
//     const data = await res.json();
//     setActiveConversation(data);
//   };

//   const sendMessage = async () => {
//     if (!activeConversation || !newMessage.trim()) return;

//     const res = await fetch(
//       `${API_BASE}/conversations/${activeConversation.id}/send/`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `JWT ${token}`,
//         },
//         body: JSON.stringify({ content: newMessage }),
//       }
//     );

//     const msg = await res.json();
//     setActiveConversation({
//       ...activeConversation,
//       messages: [...(activeConversation.messages || []), msg],
//     });
//     setNewMessage("");
//   };

//   return (
//     <div className="flex h-[90vh]">
//       <div className="w-1/4 border-r p-4 overflow-y-auto">
//         <h2 className="text-lg font-bold mb-4">Users</h2>
//         <ul className="space-y-2">
//           {userList.map((user) => (
//             <li
//               key={user.id}
//               onClick={() => startConversation(user.id)}
//               className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded"
//             >
//               <img
//                 src={user.profile_image || "/placeholder.svg"}
//                 className="w-8 h-8 rounded-full"
//                 alt="profile"
//               />
//               <span className="text-sm">{user.email}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="flex-1 flex flex-col">
//         {activeConversation ? (
//           <>
//             <div className="p-4 border-b font-semibold text-lg">
//               Chat with {activeConversation.name.replace("Chat with ", "")}
//             </div>
//             <div className="flex-1 overflow-y-auto p-4 space-y-4">
//               {activeConversation.messages?.map((msg: any) => {
//                 const isCurrentUser =
//                   msg.sender_name ===
//                   `${currentUser?.first_name || ""} ${
//                     currentUser?.last_name || ""
//                   }`;
//                 return (
//                   <div
//                     key={msg.id}
//                     className={`flex items-end gap-2 ${
//                       isCurrentUser ? "justify-end" : "justify-start"
//                     }`}
//                   >
//                     {!isCurrentUser && (
//                       <img
//                         src={msg.sender_image || "/placeholder.svg"}
//                         className="w-8 h-8 rounded-full"
//                         alt="sender"
//                       />
//                     )}

//                     {/* {!isCurrentUser && (
//                       <img
//                         src={msg.sender_image || "/placeholder.svg"}
//                         className="w-8 h-8 rounded-full"
//                         alt="sender"
//                       />
//                     )} */}

//                     <div
//                       className={`max-w-xs px-4 py-2 rounded-lg shadow text-sm ${
//                         isCurrentUser
//                           ? "bg-black text-white rounded-br-none"
//                           : "bg-white text-black border rounded-bl-none"
//                       }`}
//                     >
//                       <div className="font-semibold mb-1 text-xs">
//                         {msg.sender_name}
//                       </div>
//                       <div>{msg.content}</div>
//                       <div className="text-xs text-gray-400 text-right mt-1">
//                         {new Date(msg.sent_at).toLocaleTimeString([], {
//                           hour: "2-digit",
//                           minute: "2-digit",
//                         })}
//                       </div>
//                     </div>

//                     {isCurrentUser && (
//                       <img
//                         src={currentUser?.profile_image || "/placeholder.svg"}
//                         className="w-8 h-8 rounded-full"
//                         alt="you"
//                       />
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//             <div className="p-4 border-t flex gap-2">
//               <Textarea
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 placeholder="Type a message..."
//               />
//               <Button onClick={sendMessage}>
//                 <Send className="h-4 w-4 mr-1" /> Send
//               </Button>
//             </div>
//           </>
//         ) : (
//           <div className="flex items-center justify-center h-full">
//             <div className="text-gray-400 text-sm">
//               <MessageSquare className="h-8 w-8 mx-auto mb-2" />
//               Select a user to start chatting
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// testing fnal code:
///////////////////////////////////////////////////////////////////////////

// pages/messages/page.tsx

"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import {
  Search,
  Send,
  Paperclip,
  MoreHorizontal,
  Phone,
  Video,
  Info,
  Users,
  FileText,
  MessageSquare,
  Inbox,
  Archive,
  Trash2,
  Edit,
  X,
  Download,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";

export default function MessagesPage() {
  const [activeConversation, setActiveConversation] = useState<any>(null);
  const [conversations, setConversations] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [filter, setFilter] = useState("all");
  const [attachments, setAttachments] = useState<File[]>([]);
  const [token, setToken] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      axios
        .get("http://127.0.0.1:8000/auth/users/me/", {
          headers: { Authorization: `JWT ${token}` },
        })
        .then((res) => {
          setCurrentUser(res.data);
        });
    }
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    setToken(storedToken);

    if (storedToken) {
      axios
        .get("http://127.0.0.1:8000/api/messages/inbox/", {
          headers: {
            Authorization: `JWT ${storedToken}`,
          },
        })
        .then((res) => {
          setConversations(res.data);
          if (res.data.length > 0) {
            setActiveConversation(res.data[0]);
            fetchMessages(res.data[0].id, storedToken);
          }
        })
        .catch((err) => console.error("Inbox fetch error:", err));
    }
  }, []);

  const fetchMessages = (conversationId: number, token: string | null) => {
    if (!token) return;
    axios
      .get(`http://127.0.0.1:8000/api/messages/${conversationId}/`, {
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
      .then((res) => {
        setActiveConversation((prev: any) => ({ ...prev, messages: res.data }));
      })
      .catch((err) => console.error("Message fetch error:", err));
  };

  // const handleSendMessage = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!newMessage.trim() || !activeConversation) return;

  //   const token = localStorage.getItem("accessToken");
  //   if (!token) {
  //     console.error("JWT token missing.");
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("conversation", activeConversation.id); // ✅ Correct key expected by backend
  //   formData.append("content", newMessage);

  //   attachments.forEach((file) => {
  //     formData.append("attachments", file); // optional: only if you're supporting files
  //   });

  //   try {
  //     const response = await fetch("http://127.0.0.1:8000/api/messages/send/", {
  //       method: "POST",
  //       headers: {
  //         Authorization: `JWT ${token}`,
  //         // Note: No need to set "Content-Type" for FormData manually, browser handles it.
  //       },
  //       body: formData,
  //     });

  //     if (!response.ok) {
  //       const errText = await response.text();
  //       throw new Error(`Failed to send message: ${errText}`);
  //     }

  //     // Clear inputs
  //     setNewMessage("");
  //     setAttachments([]);

  //     // Refresh message list
  //     fetchMessages(activeConversation.id, token);
  //   } catch (error) {
  //     console.error("Send message error:", error);
  //     alert("Failed to send message.");
  //   }
  // };
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newMessage.trim() || !activeConversation) return;

    const token = localStorage.getItem("accessToken");
    if (!token) {
      console.error("JWT token missing.");
      return;
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/messages/${activeConversation.id}/`, // ✅ Dynamic URL
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${token}`,
          },
          body: JSON.stringify({ content: newMessage }),
        }
      );

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Failed to send message: ${errText}`);
      }

      setNewMessage("");
      setAttachments([]); // if using attachments later
      fetchMessages(activeConversation.id, token); // 🔄 refresh after sending
    } catch (error) {
      console.error("Send message error:", error);
      alert("Failed to send message.");
    }
  };

  const filteredConversations = conversations.filter((conv) => {
    const matchesSearch =
      searchTerm === "" ||
      conv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conv.last_message?.content
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || conv.type === filter;
    return matchesSearch && matchesFilter;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "quote":
        return <FileText className="h-4 w-4" />;
      case "supplier":
        return <Users className="h-4 w-4" />;
      case "order":
        return <Package className="h-4 w-4" />;
      default:
        return <MessageSquare className="h-4 w-4" />;
    }
  };

  const getAttachmentIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FileText className="h-4 w-4 text-red-500" />;
      case "excel":
        return <FileText className="h-4 w-4 text-green-500" />;
      case "image":
        return <Image className="h-4 w-4 text-blue-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Messages</h1>
          <p className="text-gray-500 mt-1">
            View and manage all your communications
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden h-[calc(100vh-180px)]">
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-1/3 border-r border-gray-200 flex flex-col h-full">
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  className="pl-10 pr-4 py-2 rounded-md border border-gray-300 w-full"
                  placeholder="Search messages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="p-2 border-b border-gray-200">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="all" onClick={() => setFilter("all")}>
                    All
                  </TabsTrigger>
                  <TabsTrigger value="quote" onClick={() => setFilter("quote")}>
                    Quotes
                  </TabsTrigger>
                  <TabsTrigger
                    value="supplier"
                    onClick={() => setFilter("supplier")}
                  >
                    Suppliers
                  </TabsTrigger>
                  <TabsTrigger value="order" onClick={() => setFilter("order")}>
                    Orders
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="flex-1 overflow-y-auto">
              <ul className="divide-y divide-gray-200">
                {filteredConversations.map((conv) => (
                  <li
                    key={conv.id}
                    className={`hover:bg-gray-50 cursor-pointer ${
                      activeConversation?.id === conv.id ? "bg-gray-50" : ""
                    }`}
                    onClick={() => {
                      setActiveConversation(conv);
                      fetchMessages(conv.id, token);
                    }}
                  >
                    <div className="flex items-start p-4">
                      <div className="relative mr-3 flex-shrink-0">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <Image
                            src={"/placeholder.svg"}
                            alt={conv.name}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium truncate">
                            {conv.name}
                          </h3>
                          <span className="text-xs text-gray-500">
                            {new Date(conv.updated_at).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          {getTypeIcon(conv.type)}
                          <span className="ml-1 capitalize">{conv.type}</span>
                        </div>
                        <p className="text-sm text-gray-600 truncate mt-1">
                          {conv.last_message?.content || "(No messages yet)"}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Message content */}
          <div className="w-2/3 flex flex-col h-full">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-semibold text-lg">
                {activeConversation?.name}
              </h2>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {activeConversation?.messages?.map((msg: any) => {
                const isCurrentUser = msg.sender.id === currentUser?.id;

                return (
                  <div
                    key={msg.id}
                    className={`flex ${
                      isCurrentUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] p-4 shadow-sm ${
                        isCurrentUser
                          ? "bg-black text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg"
                          : "bg-gray-100 text-gray-800 rounded-tr-lg rounded-tl-lg rounded-br-lg"
                      }`}
                    >
                      <div className="flex items-center mb-1 text-sm font-medium">
                        {msg.sender.full_name || msg.sender.email}
                      </div>
                      <p className="text-sm whitespace-pre-wrap">
                        {msg.content}
                      </p>
                      <div className="mt-2 text-right text-xs opacity-70">
                        {new Date(msg.sent_at).toLocaleString()}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="p-4 border-t border-gray-200">
              <form onSubmit={handleSendMessage} className="flex items-end">
                <div className="flex-1 relative">
                  <Textarea
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="min-h-[80px] pr-10 resize-none"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute bottom-2 right-2 h-8 w-8 p-0"
                    onClick={() =>
                      document.getElementById("attachment-upload")?.click()
                    }
                  >
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <input
                    type="file"
                    id="attachment-upload"
                    className="hidden"
                    multiple
                    onChange={(e) =>
                      setAttachments(Array.from(e.target.files || []))
                    }
                  />
                </div>
                <Button type="submit" className="ml-2 h-10">
                  <Send className="h-4 w-4 mr-2" />
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Package(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}
