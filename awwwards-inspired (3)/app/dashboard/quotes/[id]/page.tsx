// "use client"

// import type React from "react"
// import { use } from "react"

// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import {
//   ArrowLeft,
//   Calendar,
//   Clock,
//   Download,
//   FileText,
//   Lock,
//   MessageSquare,
//   Package,
//   Send,
//   Ship,
//   Unlock,
//   User,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Textarea } from "@/components/ui/textarea"
// import { Badge } from "@/components/ui/badge"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { UnlockSupplierModal } from "@/components/unlock-supplier-modal"
// import { SampleRequestModal } from "@/components/sample-request-modal"
// import { ShippingDetailsModal } from "@/components/shipping-details-modal"
// import { ScheduleFollowupModal } from "@/components/schedule-followup-modal"

// export default function QuoteDetailPage(props: { params: Promise<{ id: string }> }) {
//   const router = useRouter()
//   const { id } = use(props.params)
//   const [newMessage, setNewMessage] = useState("")
//   const [showUnlockModal, setShowUnlockModal] = useState(false)
//   const [showSampleRequestModal, setShowSampleRequestModal] = useState(false)
//   const [showShippingDetailsModal, setShowShippingDetailsModal] = useState(false)
//   const [showFollowupModal, setShowFollowupModal] = useState(false)
//   const [quote, setQuote] = useState<any>(null)

//   useEffect(() => {
//     const fetchQuote = async () => {
//       const token = localStorage.getItem("accessToken")
//       const res = await fetch(`http://localhost:8000/quotes/${params.id}/`, {
//         headers: {
//           Authorization: `JWT ${token}`,
//         },
//       })

//       if (res.ok) {
//         const data = await res.json()
//         setQuote(data)
//       } else {
//         console.error("Failed to fetch quote details")
//       }
//     }

//     fetchQuote()
//   }, [params.id])

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "pending":
//         return "bg-yellow-100 text-yellow-800"
//       case "approved":
//         return "bg-green-100 text-green-800"
//       case "rejected":
//         return "bg-red-100 text-red-800"
//       case "expired":
//         return "bg-gray-100 text-gray-800"
//       default:
//         return "bg-gray-100 text-gray-800"
//     }
//   }

//   const handleSendMessage = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Sending message:", newMessage)
//     setNewMessage("")
//   }

//   const handleUnlockSupplier = () => setShowUnlockModal(true)
//   const confirmUnlock = () => {
//     if (!quote?.supplier) return
//     setQuote((prev: any) => ({
//       ...prev,
//       supplier: {
//         ...prev.supplier,
//         unlocked: true,
//       },
//     }))
//     setShowUnlockModal(false)
//   }

//   const handleRequestSamples = () => setShowSampleRequestModal(true)
//   const handleUpdateShipping = () => setShowShippingDetailsModal(true)
//   const handleScheduleFollowup = () => setShowFollowupModal(true)

//   if (!quote) return <div>Loading quote...</div>

//     return (
//   <div className="space-y-8">
//     <div className="flex items-center justify-between">
//       <div className="flex items-center gap-4">
//         <Button variant="outline" size="icon" onClick={() => router.back()}>
//           <ArrowLeft className="h-4 w-4" />
//         </Button>
//         <div>
//           <h1 className="text-2xl font-bold">Quote Details</h1>
//           <p className="text-gray-500">{quote.quote_number}</p>
//         </div>
//       </div>
//       <div className="flex items-center gap-4">
//         <Button variant="outline">
//           <Download className="h-4 w-4 mr-2" />
//           Export PDF
//         </Button>
//       </div>
//     </div>

//     <div className="grid grid-cols-3 gap-6">
//       <div className="col-span-3 lg:col-span-2 space-y-6">
//         <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
//           <div className="p-6 border-b border-gray-200">
//             <div className="flex items-center justify-between">
//               <h2 className="text-lg font-semibold">Quote Summary</h2>
//               <Badge className={`${getStatusColor(quote.status)}`}>
//                 {quote.status.charAt(0).toUpperCase() + quote.status.slice(1)}
//               </Badge>
//             </div>
//           </div>
//           <div className="p-6">
//             <div className="grid grid-cols-2 gap-6">
//               <div>
//                 <p className="text-sm text-gray-500">Product</p>
//                 <p className="font-medium">{quote.product}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Quantity</p>
//                 <p className="font-medium">{quote.quantity}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Date Submitted</p>
//                 <p className="font-medium">{quote.date}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Target Price</p>
//                 <p className="font-medium">{quote.product_details.target_price}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Your Name</p>
//                 <p className="font-medium">{quote.customer.name}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Company</p>
//                 <p className="font-medium">{quote.customer.company}</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <Tabs defaultValue="details" className="w-full">
//           <TabsList className="grid w-full grid-cols-5">
//             <TabsTrigger value="details">Details</TabsTrigger>
//             <TabsTrigger value="shipping">Shipping</TabsTrigger>
//             <TabsTrigger value="supplier">Supplier</TabsTrigger>
//             <TabsTrigger value="messages">Messages</TabsTrigger>
//             <TabsTrigger value="timeline">Timeline</TabsTrigger>
//           </TabsList>

//           <TabsContent value="details" className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4">
//             <h3 className="text-lg font-semibold mb-4">Product Details</h3>
//             <div className="grid grid-cols-2 gap-6">
//               <div>
//                 <p className="text-sm text-gray-500">Region of Origin</p>
//                 <p className="font-medium">{quote.product_details.region}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Product Name</p>
//                 <p className="font-medium">{quote.product_details.product_name}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Product Type</p>
//                 <p className="font-medium">{quote.product_details.product_type}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Quantity</p>
//                 <p className="font-medium">{quote.product_details.quantity.toLocaleString()}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Color</p>
//                 <p className="font-medium">{quote.product_details.color}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Quality</p>
//                 <p className="font-medium">{quote.product_details.quality}</p>
//               </div>
//             </div>
//             <div className="mt-6">
//               <p className="text-sm text-gray-500">Specifications</p>
//               <p className="mt-1">{quote.product_details.specifications}</p>
//             </div>

//             {quote.quote_response?.provided && (
//               <div className="mt-8 border-t border-gray-200 pt-6">
//                 <h3 className="text-lg font-semibold mb-4">Quote Response</h3>
//                 <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
//                   <div className="flex justify-between items-center mb-4">
//                     <div>
//                       <p className="text-sm text-gray-500">Quote Provided On</p>
//                       <p className="font-medium">{quote.quote_response?.date}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Valid Until</p>
//                       <p className="font-medium">{quote.quote_response?.expiration_date}</p>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4 mb-4">
//                     <div>
//                       <p className="text-sm text-gray-500">Unit Price</p>
//                       <p className="font-medium">{quote.quote_response?.unit_price}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Total Price</p>
//                       <p className="font-medium">{quote.quote_response?.total_price}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Shipping Cost</p>
//                       <p className="font-medium">{quote.quote_response?.shipping_cost}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Grand Total</p>
//                       <p className="font-bold">{quote.quote_response?.grand_total}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Lead Time</p>
//                       <p className="font-medium">{quote.quote_response?.lead_time}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Minimum Order</p>
//                       <p className="font-medium">{quote.quote_response?.minimum_order}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Payment Terms</p>
//                       <p className="font-medium">{quote.quote_response?.payment_terms}</p>
//                     </div>
//                   </div>

//                   <div className="mb-4">
//                     <p className="text-sm text-gray-500">Notes</p>
//                     <p className="mt-1 text-sm">{quote.quote_response?.notes}</p>
//                   </div>

//                   {quote.quote_response?.alternatives && quote.quote_response?.alternatives.length > 0 && (
//                     <div>
//                       <p className="text-sm font-medium mb-2">Alternative Options</p>
//                       <div className="space-y-3">
//                         {/* {quote.quote_response?.alternatives.map((alt, index) => (
//                           <div key={index} className="bg-white p-3 rounded border border-gray-200">
//                             <p className="font-medium">{alt.description}</p>
//                             <p className="text-sm">
//                               Unit Price: <span className="font-medium">{alt.unit_price}</span>
//                             </p>
//                             <p className="text-sm text-gray-600 mt-1">Benefits: {alt.benefits}</p>
//                           </div>
//                         ))} */}
//                       </div>
//                     </div>
//                   )}

//                   <div className="flex justify-between mt-6">
//                     <Button variant="outline" onClick={handleRequestSamples}>
//                       <Package className="h-4 w-4 mr-2" />
//                       Request Samples
//                     </Button>
//                     {!quote.supplier.unlocked && (
//                       <Button onClick={handleUnlockSupplier}>
//                         <Unlock className="h-4 w-4 mr-2" />
//                         Unlock Supplier
//                       </Button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             )}

//             <div className="mt-6">
//               <h4 className="font-medium mb-2">Attachments</h4>
//               <div className="space-y-2">
//                 {/* {quote.attachments.map((attachment) => (
//                   <div key={attachment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
//                     <div className="flex items-center">
//                       <FileText className="h-5 w-5 text-gray-400 mr-2" />
//                       <div>
//                         <p className="text-sm font-medium">{attachment.name}</p>
//                         <p className="text-xs text-gray-500">
//                           {attachment.size} • {attachment.date}
//                         </p>
//                       </div>
//                     </div>
//                     <Button variant="ghost" size="sm">
//                       <Download className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 ))} */}
//               </div>
//             </div>
//           </TabsContent>

//           <TabsContent value="shipping" className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-lg font-semibold">Shipping Information</h3>
//               <Button variant="outline" onClick={handleUpdateShipping}>
//                 <Ship className="h-4 w-4 mr-2" />
//                 Update Shipping Details
//               </Button>
//             </div>
//             <div className="grid grid-cols-2 gap-6">
//               <div>
//                 <p className="text-sm text-gray-500">Port Name</p>
//                 <p className="font-medium">{quote.shipping_details?.portName}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Destination Country</p>
//                 <p className="font-medium">{quote.shipping_details?.destinationCountry}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Shipment Terms</p>
//                 <p className="font-medium">{quote.shipping_details?.shipmentTerms}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Payment Terms</p>
//                 <p className="font-medium">{quote.shipping_details?.paymentTerms}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Shipment Method</p>
//                 <p className="font-medium">{quote.shipping_details?.shipmentMethod}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Shipment Destination</p>
//                 <p className="font-medium">{quote.shipping_details?.shipmentDestination}</p>
//               </div>
//             </div>
//             {quote.shipping_details?.doorAddress && (
//               <div className="mt-6">
//                 <p className="text-sm text-gray-500">Door Address</p>
//                 <p className="mt-1">{quote.shipping_details?.doorAddress}</p>
//               </div>
//             )}
//             <div className="mt-6">
//               <p className="text-sm text-gray-500">Shipment Details</p>
//               <p className="mt-1">{quote.shipping_details?.shipmentDetails}</p>
//             </div>
//           </TabsContent>

//           <TabsContent value="supplier" className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4">
//             {quote.supplier.unlocked ? (
//               <>
//                 <div className="flex items-center justify-between mb-4">
//                   <h3 className="text-lg font-semibold">Supplier Information</h3>
//                   <Badge className="bg-green-100 text-green-800">
//                     <Unlock className="h-3 w-3 mr-1" />
//                     Unlocked
//                   </Badge>
//                 </div>
//                 <div className="space-y-6">
//                   <div className="grid grid-cols-2 gap-6">
//                     <div>
//                       <p className="text-sm text-gray-500">Supplier Name</p>
//                       <p className="font-medium">{quote.supplier.name}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Location</p>
//                       <p className="font-medium">{quote.supplier.location}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Established</p>
//                       <p className="font-medium">{quote.supplier.established}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Employees</p>
//                       <p className="font-medium">{quote.supplier.employees}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Minimum Order Value</p>
//                       <p className="font-medium">{quote.supplier.min_order_value}</p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Production Capacity</p>
//                       <p className="font-medium">{quote.supplier.production_capacity}</p>
//                     </div>
//                   </div>

//                   <div>
//                     <p className="text-sm text-gray-500 mb-2">Certifications</p>
//                     <div className="flex flex-wrap gap-2">
//                       {/* {quote.supplier.certifications.map((cert, index) => (
//                         <Badge key={index} className="bg-blue-100 text-blue-800">
//                           {cert}
//                         </Badge>
//                       ))} */}
//                     </div>
//                   </div>

//                   <div>
//                     <p className="text-sm text-gray-500 mb-2">Main Customers</p>
//                     <ul className="list-disc pl-5 text-sm">
//                       {/* {quote.supplier.main_customers.map((customer, index) => (
//                         <li key={index}>{customer}</li>
//                       ))} */}
//                     </ul>
//                   </div>

//                   <div className="border-t border-gray-200 pt-4">
//                     <h4 className="font-medium mb-3">Contact Information</h4>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <p className="text-sm text-gray-500">Contact Name</p>
//                         <p className="font-medium">{quote.supplier.contact.name}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Position</p>
//                         <p className="font-medium">{quote.supplier.contact.position}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Email</p>
//                         <p className="font-medium">{quote.supplier.contact.email}</p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Phone</p>
//                         <p className="font-medium">{quote.supplier.contact.phone}</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex justify-end">
//                     <Button>
//                       <MessageSquare className="h-4 w-4 mr-2" />
//                       Contact Supplier
//                     </Button>
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <div className="text-center py-10">
//                 <div className="bg-gray-50 rounded-lg p-8 max-w-md mx-auto">
//                   <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <Lock className="h-8 w-8 text-gray-400" />
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2">Supplier Information Locked</h3>
//                   <p className="text-gray-600 mb-6">
//                     Unlock this supplier's information to view their details and contact them directly.
//                   </p>
//                   <div className="bg-gray-100 rounded-lg p-4 mb-6">
//                     <p className="text-sm text-gray-600 mb-2">Unlocking this supplier will give you access to:</p>
//                     <ul className="text-sm text-left space-y-2">
//                       <li className="flex items-start">
//                         <span className="text-green-500 mr-2">✓</span> Supplier name and location
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-green-500 mr-2">✓</span> Direct contact information
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-green-500 mr-2">✓</span> Company details and certifications
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-green-500 mr-2">✓</span> Production capabilities
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-green-500 mr-2">✓</span> Ability to message them directly
//                       </li>
//                     </ul>
//                   </div>
//                   <Button onClick={handleUnlockSupplier} className="w-full">
//                     <Unlock className="h-4 w-4 mr-2" />
//                     Unlock Supplier for $100
//                   </Button>
//                 </div>
//               </div>
//             )}
//           </TabsContent>

//           <TabsContent value="messages" className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4">
//             <h3 className="text-lg font-semibold mb-4">Messages</h3>
//             <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">
//               {/* {quote.messages.map((message) => (
//                 <div key={message.id} className="p-4 rounded-lg bg-gray-50">
//                   <div className="flex items-center justify-between mb-2">
//                     <div className="flex items-center">
//                       <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
//                         {message.sender.charAt(0)}
//                       </div>
//                       <div>
//                         <p className="font-medium">{message.sender}</p>
//                         <p className="text-xs text-gray-500">{message.role}</p>
//                       </div>
//                     </div>
//                     <p className="text-xs text-gray-500">
//                       {message.date} at {message.time}
//                     </p>
//                   </div>
//                   <p className="text-sm">{message.content}</p>
//                 </div>
//               ))} */}
//             </div>
//             <form onSubmit={handleSendMessage} className="mt-4">
//               <Textarea
//                 placeholder="Type your message here..."
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 className="min-h-[100px] mb-2"
//               />
//               <div className="flex justify-end">
//                 <Button type="submit">
//                   <Send className="h-4 w-4 mr-2" />
//                   Send Message
//                 </Button>
//               </div>
//             </form>
//           </TabsContent>

//           <TabsContent value="timeline" className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4">
//             <h3 className="text-lg font-semibold mb-4">Quote Timeline</h3>
//             <div className="space-y-4">
//               {/* {quote.timeline.map((event, index) => (
//                 <div key={index} className="flex">
//                   <div className="mr-4 relative">
//                     <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
//                       {index === 0 ? (
//                         <FileText className="h-4 w-4" />
//                       ) : index === quote.timeline.length - 1 ? (
//                         <MessageSquare className="h-4 w-4" />
//                       ) : (
//                         <Clock className="h-4 w-4" />
//                       )}
//                     </div>
//                     {index < quote.timeline.length - 1 && (
//                       <div className="absolute top-8 bottom-0 left-1/2 w-0.5 -ml-px h-full bg-gray-200"></div>
//                     )}
//                   </div>
//                   <div className="pb-8">
//                     <div className="flex items-center">
//                       <p className="font-medium">{event.event}</p>
//                       <Badge className="ml-2 bg-gray-100 text-gray-800">{event.date}</Badge>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500 mt-1">
//                       <Clock className="h-3 w-3 mr-1" />
//                       <span>{event.time}</span>
//                       <span className="mx-2">•</span>
//                       <User className="h-3 w-3 mr-1" />
//                       <span>{event.user}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))} */}
//             </div>
//           </TabsContent>
//         </Tabs>
//       </div>

//       <div className="col-span-3 lg:col-span-1 space-y-6">
//         <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
//           <div className="p-6 border-b border-gray-200">
//             <h2 className="text-lg font-semibold">Your Information</h2>
//           </div>
//           <div className="p-6">
//             <div className="flex items-center mb-4">
//               <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
// {quote.customer.name.charAt(0)}
//               </div>
//               <div>
//                 <p className="font-medium">{quote.customer.name}</p>
//                 <p className="text-sm text-gray-500">{quote.customer.company}</p>
//               </div>
//             </div>
//             <div className="space-y-3">
//               <div className="flex items-center">
//                 <Mail className="h-4 w-4 text-gray-400 mr-2" />
//                 <p className="text-sm">{quote.customer.email}</p>
//               </div>
//               <div className="flex items-center">
//                 <Briefcase className="h-4 w-4 text-gray-400 mr-2" />
//                 <p className="text-sm">{quote.customer.industry}</p>
//               </div>
//             </div>
//             <div className="mt-6">
//               <Button variant="outline" className="w-full">
//                 <User className="h-4 w-4 mr-2" />
//                 Update Your Profile
//               </Button>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
//           <div className="p-6 border-b border-gray-200">
//             <h2 className="text-lg font-semibold">Quote Actions</h2>
//           </div>
//           <div className="p-6">
//             <div className="space-y-3">
//               {quote.quote_response?.provided ? (
//                 <>
//                   {!quote.supplier.unlocked ? (
//                     <Button className="w-full" onClick={handleUnlockSupplier}>
//                       <Unlock className="h-4 w-4 mr-2" />
//                       Unlock Supplier for $100
//                     </Button>
//                   ) : (
//                     <Button className="w-full">
//                       <MessageSquare className="h-4 w-4 mr-2" />
//                       Contact Supplier
//                     </Button>
//                   )}
//                   <Button variant="outline" className="w-full" onClick={handleRequestSamples}>
//                     <Package className="h-4 w-4 mr-2" />
//                     Request Samples
//                   </Button>
//                 </>
//               ) : (
//                 <>
//                   <div className="bg-yellow-50 text-yellow-800 p-3 rounded-md text-sm mb-2">
//                     Your quote is currently being processed. We'll notify you when it's ready.
//                   </div>
//                   <Button variant="outline" className="w-full">
//                     <MessageSquare className="h-4 w-4 mr-2" />
//                     Contact Sourcing Team
//                   </Button>
//                 </>
//               )}
//               <Button variant="outline" className="w-full" onClick={handleUpdateShipping}>
//                 <Ship className="h-4 w-4 mr-2" />
//                 Update Shipping Details
//               </Button>
//               <Button variant="outline" className="w-full" onClick={handleScheduleFollowup}>
//                 <Calendar className="h-4 w-4 mr-2" />
//                 Schedule Follow-up
//               </Button>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
//           <div className="p-6 border-b border-gray-200">
//             <h2 className="text-lg font-semibold">Need Help?</h2>
//           </div>
//           <div className="p-6">
//             <p className="text-sm text-gray-600 mb-4">
//               Have questions about your quote or need assistance? Our sourcing team is here to help.
//             </p>
//             <div className="space-y-3">
//               <Button className="w-full">
//                 <MessageSquare className="h-4 w-4 mr-2" />
//                 Contact Support
//               </Button>
//               <Button variant="outline" className="w-full">
//                 <FileText className="h-4 w-4 mr-2" />
//                 View FAQ
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     <UnlockSupplierModal
//       isOpen={showUnlockModal}
//       onClose={() => setShowUnlockModal(false)}
//       onConfirm={confirmUnlock}
//       quoteId={quote.id}
//       productName={quote.product}
//     />

//     <SampleRequestModal
//       isOpen={showSampleRequestModal}
//       onClose={() => setShowSampleRequestModal(false)}
//       quoteId={quote.id}
//       productName={quote.product}
//     />

//     <ShippingDetailsModal
//       isOpen={showShippingDetailsModal}
//       onClose={() => setShowShippingDetailsModal(false)}
//       quoteId={quote.id}
//       currentShippingDetails={quote.shipping_details?}
//     />

//     <ScheduleFollowupModal
//       isOpen={showFollowupModal}
//       onClose={() => setShowFollowupModal(false)}
//       quoteId={quote.id}
//     />
//   </div>
// )
//     {/* Full JSX returned in previous response can be reused here */}

// }

// function Mail(props: any) {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//       <rect width="20" height="16" x="2" y="4" rx="2" />
//       <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//     </svg>
//   )
// }

// function Briefcase(props: any) {
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
//       <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
//       <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
//     </svg>
//   )
// }

// "use client"

// import type React from "react"
// import { use } from "react"

// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import {
//   ArrowLeft,
//   Calendar,
//   Clock,
//   Download,
//   FileText,
//   Lock,
//   MessageSquare,
//   Package,
//   Send,
//   Ship,
//   Unlock,
//   User,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Textarea } from "@/components/ui/textarea"
// import { Badge } from "@/components/ui/badge"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { UnlockSupplierModal } from "@/components/unlock-supplier-modal"
// import { SampleRequestModal } from "@/components/sample-request-modal"
// import { ShippingDetailsModal } from "@/components/shipping-details-modal"
// import { ScheduleFollowupModal } from "@/components/schedule-followup-modal"

// export default function QuoteDetailPage(props: { params: Promise<{ id: string }> }) {
//   const router = useRouter()
//   const { id } = use(props.params)
//   const [newMessage, setNewMessage] = useState("")
//   const [showUnlockModal, setShowUnlockModal] = useState(false)
//   const [showSampleRequestModal, setShowSampleRequestModal] = useState(false)
//   const [showShippingDetailsModal, setShowShippingDetailsModal] = useState(false)
//   const [showFollowupModal, setShowFollowupModal] = useState(false)
//   const [quote, setQuote] = useState<any>(null)

//   useEffect(() => {
//     const fetchQuote = async () => {
//       const token = localStorage.getItem("accessToken")
//       const res = await fetch(`http://localhost:8000/quotes/${id}/`, {
//         headers: {
//           Authorization: `JWT ${token}`,
//         },
//       })

//       if (res.ok) {
//         const data = await res.json()
//         setQuote(data)
//       } else {
//         console.error("Failed to fetch quote details")
//       }
//     }

//     fetchQuote()
//   }, [id])

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "pending":
//         return "bg-yellow-100 text-yellow-800"
//       case "approved":
//         return "bg-green-100 text-green-800"
//       case "rejected":
//         return "bg-red-100 text-red-800"
//       case "expired":
//         return "bg-gray-100 text-gray-800"
//       default:
//         return "bg-gray-100 text-gray-800"
//     }
//   }

//   const handleSendMessage = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log("Sending message:", newMessage)
//     setNewMessage("")
//   }

//   const handleUnlockSupplier = () => setShowUnlockModal(true)
//   const confirmUnlock = () => {
//     if (!quote?.supplier) return
//     setQuote((prev: any) => ({
//       ...prev,
//       supplier: {
//         ...prev.supplier,
//         unlocked: true,
//       },
//     }))
//     setShowUnlockModal(false)
//   }

//   const handleRequestSamples = () => setShowSampleRequestModal(true)
//   const handleUpdateShipping = () => setShowShippingDetailsModal(true)
//   const handleScheduleFollowup = () => setShowFollowupModal(true)

//   if (!quote) return <div>Loading quote...</div>

//   return (
//     <div className="space-y-8">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <Button variant="outline" size="icon" onClick={() => router.back()}>
//             <ArrowLeft className="h-4 w-4" />
//           </Button>
//           <div>
//             <h1 className="text-2xl font-bold">Quote Details</h1>
//             <p className="text-gray-500">{quote.quote_number}</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-4">
//           <Button variant="outline">
//             <Download className="h-4 w-4 mr-2" />
//             Export PDF
//           </Button>
//         </div>
//       </div>

//       <div className="grid grid-cols-3 gap-6">
//         <div className="col-span-3 lg:col-span-2 space-y-6">
//           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
//             <div className="p-6 border-b border-gray-200">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-lg font-semibold">Quote Summary</h2>
//                 <Badge className={`${getStatusColor(quote.status)}`}>
//                   {quote.status.charAt(0).toUpperCase() + quote.status.slice(1)}
//                 </Badge>
//               </div>
//             </div>
//             <div className="p-6">
//               <div className="grid grid-cols-2 gap-6">
//                 <div>
//                   <p className="text-sm text-gray-500">Product</p>
//                   <p className="font-medium">{quote.product}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Quantity</p>
//                   <p className="font-medium">{quote.quantity}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Date Submitted</p>
//                   <p className="font-medium">{quote.date}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Target Price</p>
//                   {/* <p className="font-medium">{quote.product_details.target_price}</p> */}
//                   <p className="font-medium">{quote.product_details?.target_price}</p>

//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Your Name</p>
//                   <p className="font-medium">{quote.customer?.name}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Company</p>
//                   <p className="font-medium">{quote.customer?.company}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <Tabs defaultValue="details" className="w-full">
//             <TabsList className="grid w-full grid-cols-5">
//               <TabsTrigger value="details">Details</TabsTrigger>
//               <TabsTrigger value="shipping">Shipping</TabsTrigger>
//               <TabsTrigger value="supplier">Supplier</TabsTrigger>
//               <TabsTrigger value="messages">Messages</TabsTrigger>
//               <TabsTrigger value="timeline">Timeline</TabsTrigger>
//             </TabsList>

//             <TabsContent value="details" className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4">
//               <h3 className="text-lg font-semibold mb-4">Product Details</h3>
//               <div className="grid grid-cols-2 gap-6">
//                 <div>
//                   <p className="text-sm text-gray-500">Region of Origin</p>
//                   <p className="font-medium">{quote.product_details?.region}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Product Name</p>
//                   <p className="font-medium">{quote.product_details?.product_name}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Product Type</p>
//                   <p className="font-medium">{quote.product_details?.product_type}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Quantity</p>
//                   <p className="font-medium">{quote.product_details?.quantity.toLocaleString()}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Color</p>
//                   <p className="font-medium">{quote.product_details?.color}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Quality</p>
//                   <p className="font-medium">{quote.product_details?.quality}</p>
//                 </div>
//               </div>
//               <div className="mt-6">
//                 <p className="text-sm text-gray-500">Specifications</p>
//                 <p className="mt-1">{quote.product_details?.specifications}</p>
//               </div>

// {/* attachment is for now skipped  */}
//   <div className="mt-6">
//     <h4 className="font-medium mb-2">Attachments</h4>
//     <div className="space-y-2">

//       {/* {quote.attachments.map((attachment) => (
//         <div key={attachment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
//           <div className="flex items-center">
//             <FileText className="h-5 w-5 text-gray-400 mr-2" />
//             <div>
//               <p className="text-sm font-medium">{attachment.name}</p>
//               <p className="text-xs text-gray-500">
//                 {attachment.size} • {attachment.date}
//               </p>
//             </div>
//           </div>
//           <Button variant="ghost" size="sm">
//             <Download className="h-4 w-4" />
//           </Button>
//         </div>
//       ))} */}
//     </div>
//   </div>
// </TabsContent>

//             <TabsContent value="shipping" className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-lg font-semibold">Shipping Information</h3>
//                 <Button variant="outline" onClick={handleUpdateShipping}>
//                   <Ship className="h-4 w-4 mr-2" />
//                   Update Shipping Details
//                 </Button>
//               </div>
//               <div className="grid grid-cols-2 gap-6">
//                 <div>
//                   <p className="text-sm text-gray-500">Port Name</p>
//                   <p className="font-medium">{quote.shipping_details?.portName}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Destination Country</p>
//                   <p className="font-medium">{quote.shipping_details?.destinationCountry}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Shipment Terms</p>
//                   <p className="font-medium">{quote.shipping_details?.shipmentTerms}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Payment Terms</p>
//                   <p className="font-medium">{quote.shipping_details?.paymentTerms}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Shipment Method</p>
//                   <p className="font-medium">{quote.shipping_details?.shipmentMethod}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Shipment Destination</p>
//                   <p className="font-medium">{quote.shipping_details?.shipmentDestination}</p>
//                 </div>
//               </div>
//               {quote.shipping_details?.doorAddress && (
//                 <div className="mt-6">
//                   <p className="text-sm text-gray-500">Door Address</p>
//                   <p className="mt-1">{quote.shipping_details?.doorAddress}</p>
//                 </div>
//               )}
//               <div className="mt-6">
//                 <p className="text-sm text-gray-500">Shipment Details</p>
//                 <p className="mt-1">{quote.shipping_details?.shipmentDetails}</p>
//               </div>
//             </TabsContent>

//             <TabsContent value="messages" className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4">
//               <h3 className="text-lg font-semibold mb-4">Messages</h3>
// //               {/* empty for now */}
// //             </TabsContent>

// //             <TabsContent value="timeline" className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4">
// //               <h3 className="text-lg font-semibold mb-4">Quote Timeline</h3>
// //               <div className="space-y-4">
// //                 {/* {quote.timeline.map((event, index) => (
// //                   <div key={index} className="flex">
// //                     <div className="mr-4 relative">
// //                       <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
// //                         {index === 0 ? (
// //                           <FileText className="h-4 w-4" />
// //                         ) : index === quote.timeline.length - 1 ? (
// //                           <MessageSquare className="h-4 w-4" />
// //                         ) : (
// //                           <Clock className="h-4 w-4" />
// //                         )}
// //                       </div>
// //                       {index < quote.timeline.length - 1 && (
// //                         <div className="absolute top-8 bottom-0 left-1/2 w-0.5 -ml-px h-full bg-gray-200"></div>
// //                       )}
// //                     </div>
// //                     <div className="pb-8">
// //                       <div className="flex items-center">
// //                         <p className="font-medium">{event.event}</p>
// //                         <Badge className="ml-2 bg-gray-100 text-gray-800">{event.date}</Badge>
// //                       </div>
// //                       <div className="flex items-center text-sm text-gray-500 mt-1">
// //                         <Clock className="h-3 w-3 mr-1" />
// //                         <span>{event.time}</span>
// //                         <span className="mx-2">•</span>
// //                         <User className="h-3 w-3 mr-1" />
// //                         <span>{event.user}</span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))} */}
// //               </div>
// //             </TabsContent>
// //           </Tabs>
// //         </div>

// //         {/* for now skip the update profile as comment it  */}
// //         {/* <div className="col-span-3 lg:col-span-1 space-y-6">
// //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// //             <div className="p-6 border-b border-gray-200">
// //               <h2 className="text-lg font-semibold">Your Information</h2>
// //             </div>
// //             <div className="p-6">
// //               <div className="flex items-center mb-4">
// //                 <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
// //                   {quote.customer?.name.charAt(0)}
// //                 </div>
// //                 <div>
// //                   <p className="font-medium">{quote.customer?.name}</p>
// //                   <p className="text-sm text-gray-500">{quote.customer?.company}</p>
// //                 </div>
// //               </div>
// //               <div className="space-y-3">
// //                 <div className="flex items-center">
// //                   <Mail className="h-4 w-4 text-gray-400 mr-2" />
// //                   <p className="text-sm">{quote.customer?.email}</p>
// //                 </div>
// //                 <div className="flex items-center">
// //                   <Briefcase className="h-4 w-4 text-gray-400 mr-2" />
// //                   <p className="text-sm">{quote.customer?.industry}</p>
// //                 </div>
// //               </div>
// //               <div className="mt-6">
// //                 <Button variant="outline" className="w-full">
// //                   <User className="h-4 w-4 mr-2" />
// //                   Update Your Profile
// //                 </Button>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// //             <div className="p-6 border-b border-gray-200">
// //               <h2 className="text-lg font-semibold">Quote Actions</h2>
// //             </div>
// //             <div className="p-6">
// //               <div className="space-y-3">
// //                 {quote.quote_response?.provided ? (
// //                   <>
// //                     {!quote.supplier.unlocked ? (
// //                       <Button className="w-full" onClick={handleUnlockSupplier}>
// //                         <Unlock className="h-4 w-4 mr-2" />
// //                         Unlock Supplier for $100
// //                       </Button>
// //                     ) : (
// //                       <Button className="w-full">
// //                         <MessageSquare className="h-4 w-4 mr-2" />
// //                         Contact Supplier
// //                       </Button>
// //                     )}
// //                     <Button variant="outline" className="w-full" onClick={handleRequestSamples}>
// //                       <Package className="h-4 w-4 mr-2" />
// //                       Request Samples
// //                     </Button>
// //                   </>
// //                 ) : (
// //                   <>
// //                     <div className="bg-yellow-50 text-yellow-800 p-3 rounded-md text-sm mb-2">
// //                       Your quote is currently being processed. We'll notify you when it's ready.
// //                     </div>
// //                     <Button variant="outline" className="w-full">
// //                       <MessageSquare className="h-4 w-4 mr-2" />
// //                       Contact Sourcing Team
// //                     </Button>
// //                   </>
// //                 )}
// //                 <Button variant="outline" className="w-full" onClick={handleUpdateShipping}>
// //                   <Ship className="h-4 w-4 mr-2" />
// //                   Update Shipping Details
// //                 </Button>
// //                 <Button variant="outline" className="w-full" onClick={handleScheduleFollowup}>
// //                   <Calendar className="h-4 w-4 mr-2" />
// //                   Schedule Follow-up
// //                 </Button>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// //             <div className="p-6 border-b border-gray-200">
// //               <h2 className="text-lg font-semibold">Need Help?</h2>
// //             </div>
// //             <div className="p-6">
// //               <p className="text-sm text-gray-600 mb-4">
// //                 Have questions about your quote or need assistance? Our sourcing team is here to help.
// //               </p>
// //               <div className="space-y-3">
// //                 <Button className="w-full">
// //                   <MessageSquare className="h-4 w-4 mr-2" />
// //                   Contact Support
// //                 </Button>
// //                 <Button variant="outline" className="w-full">
// //                   <FileText className="h-4 w-4 mr-2" />
// //                   View FAQ
// //                 </Button>
// //               </div>
// //             </div>
// //           </div>
// //         </div> */}
// //       </div>

// //       <UnlockSupplierModal
// //         isOpen={showUnlockModal}
// //         onClose={() => setShowUnlockModal(false)}
// //         onConfirm={confirmUnlock}
// //         quoteId={quote.id}
// //         productName={quote.product}
// //       />

// //       <SampleRequestModal
// //         isOpen={showSampleRequestModal}
// //         onClose={() => setShowSampleRequestModal(false)}
// //         quoteId={quote.id}
// //         productName={quote.product}
// //       />

// //       <ShippingDetailsModal
// //         isOpen={showShippingDetailsModal}
// //         onClose={() => setShowShippingDetailsModal(false)}
// //         quoteId={quote.id}
// //         currentShippingDetails={quote.shipping_details}
// //       />

// //       <ScheduleFollowupModal
// //         isOpen={showFollowupModal}
// //         onClose={() => setShowFollowupModal(false)}
// //         quoteId={quote.id}
// //       />
// //     </div>
// //   )

// // }

// // function Mail(props: any) {
// //   return (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
// //       <rect width="20" height="16" x="2" y="4" rx="2" />
// //       <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
// //     </svg>
// //   )
// // }

// // function Briefcase(props: any) {
// //   return (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
// //       <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
// //       <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
// //     </svg>
// //   )
// // }

// // "use client"

// // import type React from "react"
// // import { use } from "react"

// // import { useState, useEffect } from "react"
// // import { useRouter } from "next/navigation"
// // import {
// //   ArrowLeft,
// //   Calendar,
// //   Clock,
// //   Download,
// //   FileText,
// //   Lock,
// //   MessageSquare,
// //   Package,
// //   Send,
// //   Ship,
// //   Unlock,
// //   User,
// // } from "lucide-react"
// // import { Button } from "@/components/ui/button"
// // import { Badge } from "@/components/ui/badge"
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// // export default function QuoteDetailPage(props: { params: Promise<{ id: string }> }) {
// //   const router = useRouter()
// //   const { id } = use(props.params)
// //   const [quote, setQuote] = useState<any>(null)

// //   useEffect(() => {
// //     const fetchQuote = async () => {
// //       const token = localStorage.getItem("accessToken")
// //       const res = await fetch(`http://localhost:8000/quotes/${id}/`, {
// //         headers: {
// //           Authorization: `JWT ${token}`,
// //         },
// //       })

// //       if (res.ok) {
// //         const data = await res.json()
// //         setQuote(data)
// //       } else {
// //         console.error("Failed to fetch quote details")
// //       }
// //     }

// //     fetchQuote()
// //   }, [id])

// //   if (!quote) return <div>Loading quote...</div>

// //   return (
// //     <div className="space-y-8">
// //       <div className="flex items-center justify-between">
// //         <div className="flex items-center gap-4">
// //           <Button variant="outline" size="icon" onClick={() => router.back()}>
// //             <ArrowLeft className="h-4 w-4" />
// //           </Button>
// //           <div>
// //             <h1 className="text-2xl font-bold">Quote Details</h1>
// //             <p className="text-gray-500">{quote.quote_number}</p>
// //           </div>
// //         </div>
// //         <div className="flex items-center gap-4">
// //           <Button variant="outline">
// //             <Download className="h-4 w-4 mr-2" />
// //             Export PDF
// //           </Button>
// //         </div>
// //       </div>

// //       <div className="grid grid-cols-3 gap-6">
// //         <div className="col-span-3 lg:col-span-2 space-y-6">
// //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// //             <div className="p-6 border-b border-gray-200">
// //               <div className="flex items-center justify-between">
// //                 <h2 className="text-lg font-semibold">Quote Summary</h2>
// //                 <Badge className="bg-yellow-100 text-yellow-800">
// //                   {quote.status?.charAt(0).toUpperCase() + quote.status?.slice(1)}
// //                 </Badge>
// //               </div>
// //             </div>
// //             <div className="p-6">
// //               <div className="grid grid-cols-2 gap-6">
// //                 <div>
// //                   <p className="text-sm text-gray-500">Product</p>
// //                   <p className="font-medium">{quote.product_name}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Quantity</p>
// //                   <p className="font-medium">{quote.quantity}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Date Submitted</p>
// //                   <p className="font-medium">{quote.created_at}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Target Price</p>
// //                   <p className="font-medium">{quote.target_price}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Your Name</p>
// //                   <p className="font-medium">{quote.customer_name}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Company</p>
// //                   <p className="font-medium">{quote.customer_company}</p>
// //                 </div>
// //               </div>
// //             </div>

// //           </div>

// //           <Tabs defaultValue="details" className="w-full">
// //             <TabsList className="grid w-full grid-cols-5">
// //               <TabsTrigger value="details">Details</TabsTrigger>
// //               <TabsTrigger value="shipping">Shipping</TabsTrigger>
// //               <TabsTrigger value="supplier">Supplier</TabsTrigger>
// //               <TabsTrigger value="messages">Messages</TabsTrigger>
// //               <TabsTrigger value="timeline">Timeline</TabsTrigger>
// //             </TabsList>

// //             <TabsContent value="details" className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4">
// //               <h3 className="text-lg font-semibold mb-4">Product Details</h3>
// //               <div className="grid grid-cols-2 gap-6">
// //                 <div>
// //                   <p className="text-sm text-gray-500">Region of Origin</p>
// //                   <p className="font-medium">{quote.region}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Product Name</p>
// //                   <p className="font-medium">{quote.product_name}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Product Type</p>
// //                   <p className="font-medium">{quote.product_type}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Quantity</p>
// //                   <p className="font-medium">{quote.quantity}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Color</p>
// //                   <p className="font-medium">{quote.color}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Quality</p>
// //                   <p className="font-medium">{quote.quality}</p>
// //                 </div>
// //               </div>
// //               <div className="mt-6">
// //                 <p className="text-sm text-gray-500">Specifications</p>
// //                 <p className="mt-1">{quote.specifications}</p>
// //               </div>
// //               {/* HERE CAN U ADD THE QUOTE RESPONSE FROM THE API  */}
// //             </TabsContent>

// //             <TabsContent value="shipping" className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4">
// //               <h3 className="text-lg font-semibold mb-4">Shipping Details</h3>
// //               <div className="grid grid-cols-2 gap-6">
// //                 <div>
// //                   <p className="text-sm text-gray-500">Port Name</p>
// //                   <p className="font-medium">{quote.shipping_details?.port_name}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Destination Country</p>
// //                   <p className="font-medium">{quote.shipping_details?.destination_country}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Shipment Terms</p>
// //                   <p className="font-medium">{quote.shipping_details?.shipment_terms}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Payment Terms</p>
// //                   <p className="font-medium">{quote.shipping_details?.payment_terms}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Shipment Method</p>
// //                   <p className="font-medium">{quote.shipping_details?.shipment_method}</p>
// //                 </div>
// //                 <div>
// //                   <p className="text-sm text-gray-500">Shipment Destination</p>
// //                   <p className="font-medium">{quote.shipping_details?.shipment_destination}</p>
// //                 </div>
// //               </div>
// //               {quote.shipping_details?.door_address && (
// //                 <div className="mt-6">
// //                   <p className="text-sm text-gray-500">Door Address</p>
// //                   <p className="mt-1">{quote.shipping_details.door_address}</p>
// //                 </div>
// //               )}
// //               <div className="mt-6">
// //                 <p className="text-sm text-gray-500">Shipment Details</p>
// //                 <p className="mt-1">{quote.shipping_details?.shipment_details}</p>
// //               </div>
// //             </TabsContent>

// //             <TabsContent value="supplier" className="bg-white border border-gray-200 shadow-sm p-6 mt-4 rounded-lg text-center text-gray-500">
// //               Supplier details are currently not available.
// //             </TabsContent>

// //             <TabsContent value="messages" className="bg-white border border-gray-200 shadow-sm p-6 mt-4 rounded-lg text-center text-gray-500">
// //               Messages are currently not available.
// //             </TabsContent>

// //             <TabsContent value="timeline" className="bg-white border border-gray-200 shadow-sm p-6 mt-4 rounded-lg text-center text-gray-500">
// //               Timeline events are currently not available.
// //             </TabsContent>
// //           </Tabs>

// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // done

// "use client";

// import type React from "react";
// import { use } from "react";
// import { useState, useEffect } from "react";
// import MessageSection from "../MessageSection";
// import useQuoteTimeline from "../useQuoteTimeline";
// import { useRouter } from "next/navigation";
// import {
//   ArrowLeft,
//   Download,
//   FileText,
//   Unlock,
//   Package,
//   MessageSquare,
//   Clock,
//   User,
//   Ship,
//   Lock,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// export default function QuoteDetailPage(props: {
//   params: Promise<{ id: string }>;
// }) {
//   const router = useRouter();
//   const { id } = use(props.params);
//   const [quote, setQuote] = useState<any>(null);
//   const [newMessage, setNewMessage] = useState("");
//   // const { timeline, loading } = useQuoteTimeline(quote?.id || "");

//   useEffect(() => {
//     const fetchQuote = async () => {
//       const token = localStorage.getItem("accessToken");
//       const res = await fetch(`http://localhost:8000/quotes/${id}/`, {
//         headers: {
//           Authorization: `JWT ${token}`,
//         },
//       });

//       if (res.ok) {
//         const data = await res.json();
//         setQuote(data);
//       } else {
//         console.error("Failed to fetch quote details");
//       }
//     };

//     fetchQuote();
//   }, [id]);

//   const handleSendMessage = (e: React.FormEvent) => {
//     e.preventDefault();
//     setNewMessage("");
//   };

//   const handleRequestSamples = () => {};
//   const handleUnlockSupplier = () => {};

//   if (!quote) return <div>Loading quote...</div>;

//   return (
//     <div className="space-y-8">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <Button variant="outline" size="icon" onClick={() => router.back()}>
//             <ArrowLeft className="h-4 w-4" />
//           </Button>
//           <div>
//             <h1 className="text-2xl font-bold">Quote Details</h1>
//             <p className="text-gray-500">{quote.quote_number}</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-4">
//           <Button variant="outline">
//             <Download className="h-4 w-4 mr-2" />
//             Export PDF
//           </Button>
//         </div>
//       </div>

//       <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
//         <h3 className="text-lg font-semibold mb-4">Quote Summary</h3>
//         <div className="grid grid-cols-2 gap-6">
//           <div>
//             <p className="text-sm text-gray-500">Product</p>
//             <p className="font-medium">{quote.product_name || "-"}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Quantity</p>
//             <p className="font-medium">
//               {quote.quantity?.toLocaleString() || "-"}
//             </p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Date Submitted</p>
//             <p className="font-medium">
//               {new Date(quote.created_at).toLocaleString()}
//             </p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Target Price</p>
//             <p className="font-medium">{quote.target_price || "-"}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Your Name</p>
//             <p className="font-medium">{quote.customer_name || "-"}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Company</p>
//             <p className="font-medium">{quote.customer_company || "-"}</p>
//           </div>
//         </div>
//       </div>

//       <Tabs defaultValue="details" className="w-full">
//         <TabsList className="grid w-full grid-cols-5">
//           <TabsTrigger value="details">Details</TabsTrigger>
//           <TabsTrigger value="shipping">Shipping</TabsTrigger>
//           <TabsTrigger value="supplier">Supplier</TabsTrigger>
//           <TabsTrigger value="messages">Messages</TabsTrigger>
//           <TabsTrigger value="timeline">Timeline</TabsTrigger>
//         </TabsList>

//         <TabsContent
//           value="details"
//           className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4"
//         >
//           <h3 className="text-lg font-semibold mb-4">Product Details</h3>
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <p className="text-sm text-gray-500">Region of Origin</p>
//               <p className="font-medium">{quote.region || "-"}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Product Name</p>
//               <p className="font-medium">{quote.product_name || "-"}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Product Type</p>
//               <p className="font-medium">{quote.product_type || "-"}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Quantity</p>
//               <p className="font-medium">
//                 {quote.quantity?.toLocaleString() || "-"}
//               </p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Color</p>
//               <p className="font-medium">{quote.color || "-"}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Quality</p>
//               <p className="font-medium">{quote.quality || "-"}</p>
//             </div>
//           </div>
//           <div className="mt-6">
//             <p className="text-sm text-gray-500">Specifications</p>
//             <p className="mt-1 text-sm">{quote.specifications || "-"}</p>
//           </div>

//           {quote.response && (
//             <div className="mt-8 border-t border-gray-200 pt-6">
//               <h3 className="text-lg font-semibold mb-4">Quote Response</h3>
//               <div className="grid grid-cols-2 gap-6">
//                 <div>
//                   <p className="text-sm text-gray-500">Quote Provided On</p>
//                   <p className="font-medium">
//                     {new Date(
//                       quote.response.provided_date
//                     ).toLocaleDateString()}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Valid Until</p>
//                   <p className="font-medium">
//                     {new Date(
//                       quote.response.expiration_date
//                     ).toLocaleDateString()}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Unit Price</p>
//                   <p className="font-medium">${quote.response.unit_price}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Total Price</p>
//                   <p className="font-medium">${quote.response.total_price}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Shipping Cost</p>
//                   <p className="font-medium">${quote.response.shipping_cost}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Grand Total</p>
//                   <p className="font-bold">${quote.response.grand_total}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Lead Time</p>
//                   <p className="font-medium">{quote.response.lead_time}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Minimum Order</p>
//                   <p className="font-medium">{quote.response.minimum_order}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Payment Terms</p>
//                   <p className="font-medium">{quote.response.payment_terms}</p>
//                 </div>
//               </div>

//               {quote.response.notes && (
//                 <div className="mt-4">
//                   <p className="text-sm text-gray-500">Notes</p>
//                   <p className="mt-1 text-sm">{quote.response.notes}</p>
//                 </div>
//               )}

//               {/* ✅ Alternative Options */}
//               {quote.response.alternatives?.length > 0 && (
//                 <div className="mt-8">
//                   <p className="text-sm font-medium mb-2">
//                     Alternative Options
//                   </p>
//                   <div className="space-y-3">
//                     {quote.response.alternatives.map((alt, index) => (
//                       <div
//                         key={index}
//                         className="bg-gray-50 p-4 rounded-md border border-gray-200"
//                       >
//                         <p className="font-medium">{alt.description}</p>
//                         <p className="text-sm">Unit Price: ${alt.unit_price}</p>
//                         <p className="text-xs text-gray-600 mt-1">
//                           Benefits: {alt.benefits}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* ✅ Quote Attachments */}
//               {quote.response.attachments?.length > 0 && (
//                 <div className="mt-8">
//                   <h4 className="font-medium mb-2">Attachments</h4>
//                   <div className="space-y-2">
//                     {quote.response.attachments.map((file, idx) => (
//                       <div
//                         key={idx}
//                         className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
//                       >
//                         <div>
//                           <p className="text-sm font-medium">{file.name}</p>
//                           <p className="text-xs text-gray-500">
//                             {(file.file_size / (1024 * 1024)).toFixed(1)} MB •{" "}
//                             {file.created_at}
//                           </p>
//                         </div>
//                         <a
//                           href={file.file}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           download
//                         >
//                           <Download className="h-4 w-4 text-gray-500" />
//                         </a>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </TabsContent>
//         <TabsContent
//           value="shipping"
//           className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4"
//         >
//           <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
//           {quote.shipping_details ? (
//             <div className="grid grid-cols-2 gap-6">
//               <div>
//                 <p className="text-sm text-gray-500">Port Name</p>
//                 <p className="font-medium">
//                   {quote.shipping_details.port_name || "-"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Destination Country</p>
//                 <p className="font-medium">
//                   {quote.shipping_details.destination_country || "-"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Shipment Terms</p>
//                 <p className="font-medium">
//                   {quote.shipping_details.shipment_terms || "-"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Payment Terms</p>
//                 <p className="font-medium">
//                   {quote.shipping_details.payment_terms || "-"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Shipment Method</p>
//                 <p className="font-medium">
//                   {quote.shipping_details.shipment_method || "-"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Shipment Destination</p>
//                 <p className="font-medium">
//                   {quote.shipping_details.shipment_destination || "-"}
//                 </p>
//               </div>
//               {quote.shipping_details.door_address && (
//                 <div className="col-span-2">
//                   <p className="text-sm text-gray-500">Door Address</p>
//                   <p className="font-medium">
//                     {quote.shipping_details.door_address}
//                   </p>
//                 </div>
//               )}
//               {quote.shipping_details.shipment_details && (
//                 <div className="col-span-2">
//                   <p className="text-sm text-gray-500">Shipment Details</p>
//                   <p className="font-medium">
//                     {quote.shipping_details.shipment_details}
//                   </p>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <p className="text-sm text-gray-500">
//               Shipping details are currently not available.
//             </p>
//           )}
//         </TabsContent>

//         <TabsContent
//           value="supplier"
//           className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4 text-center text-gray-500"
//         >
//           Supplier details are currently not available.
//         </TabsContent>
//         {/*
//         <TabsContent value="messages" className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4">
//   <h3 className="text-lg font-semibold mb-4">Messages</h3>
//   <MessageSection quoteId={quote.id} />
// </TabsContent> */}

//         <TabsContent
//           value="messages"
//           className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4"
//         >
//           <h3 className="text-lg font-semibold mb-4">Messages</h3>
//           <MessageSection quoteId={quote.id} />
//         </TabsContent>

//         <TabsContent
//           value="timeline"
//           className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4"
//         >
//           <h3 className="text-lg font-semibold mb-4">Quote Timeline</h3>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// }
// ye uper wala thk tha ========================================================

// "use client";

// import type React from "react";
// import { use } from "react";
// import { useState, useEffect } from "react";

// import QuoteChatSection from "../MessageSection";
// import useQuoteTimeline from "../useQuoteTimeline";
// import { useRouter } from "next/navigation";
// import {
//   ArrowLeft,
//   Download,
//   Lock,
//   Calendar,
//   MessageSquare,
//   Package,
//   FileText,
//   Ship,
//   Clock,
//   User,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// export default function QuoteDetailPage(props: {
//   params: Promise<{ id: string }>;
// }) {
//   const router = useRouter();
//   const { id } = use(props.params);

//   const [quote, setQuote] = useState<any>(null);
//   // const quoteId = quote?.id;
//   // const { timeline, loading: timelineLoading } = useQuoteTimeline(quoteId);

//   const timeline = quote?.timeline || [];
//   const timelineLoading = false;

//   useEffect(() => {
//     const fetchQuote = async () => {
//       const token = localStorage.getItem("accessToken");
//       const res = await fetch(`http://localhost:8000/quotes/${id}/`, {
//         headers: { Authorization: `JWT ${token}` },
//       });
//       if (res.ok) {
//         const data = await res.json();
//         setQuote(data);
//       }
//     };
//     fetchQuote();
//   }, [id]);

//   if (!quote) return <div className="p-6">Loading quote...</div>;

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
//       {/* LEFT COLUMN */}
//       <div className="lg:col-span-2 space-y-6">
//         {/* Header */}
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-4">
//             <Button variant="outline" size="icon" onClick={() => router.back()}>
//               <ArrowLeft className="h-4 w-4" />
//             </Button>
//             <div>
//               <h1 className="text-2xl font-bold">Quote Details</h1>
//               <p className="text-gray-500">{quote.quote_number}</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <Button variant="outline">
//               <Download className="h-4 w-4 mr-2" /> Export PDF
//             </Button>
//           </div>
//         </div>

//         {/* Quote Summary */}
//         <div className="bg-white rounded-lg border p-6">
//           <h2 className="text-lg font-semibold mb-4">Quote Summary</h2>
//           <div className="grid grid-cols-2 gap-4 text-sm">
//             <div>
//               <p className="text-gray-500">Product</p>
//               <p>{quote.product_name}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">Quantity</p>
//               <p>{quote.quantity}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">Date Submitted</p>
//               <p>{new Date(quote.created_at).toLocaleString()}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">Target Price</p>
//               <p>{quote.target_price || "-"}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">Your Name</p>
//               <p>{quote.customer_name}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">Company</p>
//               <p>{quote.customer_company}</p>
//             </div>
//           </div>
//         </div>

//         {/* Tabs */}
//         <Tabs defaultValue="details" className="w-full">
//           <TabsList className="grid grid-cols-5 w-full">
//             <TabsTrigger value="details">Details</TabsTrigger>
//             <TabsTrigger value="shipping">Shipping</TabsTrigger>
//             <TabsTrigger value="supplier">Supplier</TabsTrigger>
//             <TabsTrigger value="messages">Messages</TabsTrigger>
//             <TabsTrigger value="timeline">Timeline</TabsTrigger>
//           </TabsList>

//           <TabsContent
//             value="details"
//             className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4"
//           >
//             <h3 className="text-lg font-semibold mb-4">Product Details</h3>
//             <div className="grid grid-cols-2 gap-6">
//               <div>
//                 <p className="text-sm text-gray-500">Region of Origin</p>
//                 <p className="font-medium">{quote.region || "-"}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Product Name</p>
//                 <p className="font-medium">{quote.product_name || "-"}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Product Type</p>
//                 <p className="font-medium">{quote.product_type || "-"}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Quantity</p>
//                 <p className="font-medium">
//                   {quote.quantity?.toLocaleString() || "-"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Color</p>
//                 <p className="font-medium">{quote.color || "-"}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Quality</p>
//                 <p className="font-medium">{quote.quality || "-"}</p>
//               </div>
//             </div>
//             <div className="mt-6">
//               <p className="text-sm text-gray-500">Specifications</p>
//               <p className="mt-1 text-sm">{quote.specifications || "-"}</p>
//             </div>

//             {quote.response && (
//               <div className="mt-8 border-t border-gray-200 pt-6">
//                 <h3 className="text-lg font-semibold mb-4">Quote Response</h3>
//                 <div className="grid grid-cols-2 gap-6">
//                   <div>
//                     <p className="text-sm text-gray-500">Quote Provided On</p>
//                     <p className="font-medium">
//                       {new Date(
//                         quote.response.provided_date
//                       ).toLocaleDateString()}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Valid Until</p>
//                     <p className="font-medium">
//                       {new Date(
//                         quote.response.expiration_date
//                       ).toLocaleDateString()}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Unit Price</p>
//                     <p className="font-medium">${quote.response.unit_price}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Total Price</p>
//                     <p className="font-medium">${quote.response.total_price}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Shipping Cost</p>
//                     <p className="font-medium">
//                       ${quote.response.shipping_cost}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Grand Total</p>
//                     <p className="font-bold">${quote.response.grand_total}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Lead Time</p>
//                     <p className="font-medium">{quote.response.lead_time}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Minimum Order</p>
//                     <p className="font-medium">
//                       {quote.response.minimum_order}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Payment Terms</p>
//                     <p className="font-medium">
//                       {quote.response.payment_terms}
//                     </p>
//                   </div>
//                 </div>

//                 {quote.response.notes && (
//                   <div className="mt-4">
//                     <p className="text-sm text-gray-500">Notes</p>
//                     <p className="mt-1 text-sm">{quote.response.notes}</p>
//                   </div>
//                 )}

//                 {quote.response.alternatives?.length > 0 && (
//                   <div className="mt-8">
//                     <p className="text-sm font-medium mb-2">
//                       Alternative Options
//                     </p>
//                     <div className="space-y-3">
//                       {quote.response.alternatives.map((alt, index) => (
//                         <div
//                           key={index}
//                           className="bg-gray-50 p-4 rounded-md border border-gray-200"
//                         >
//                           <p className="font-medium">{alt.description}</p>
//                           <p className="text-sm">
//                             Unit Price: ${alt.unit_price}
//                           </p>
//                           <p className="text-xs text-gray-600 mt-1">
//                             Benefits: {alt.benefits}
//                           </p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {quote.response.attachments?.length > 0 && (
//                   <div className="mt-8">
//                     <h4 className="font-medium mb-2">Attachments</h4>
//                     <div className="space-y-2">
//                       {quote.response.attachments.map((file, idx) => (
//                         <div
//                           key={idx}
//                           className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
//                         >
//                           <div>
//                             <p className="text-sm font-medium">{file.name}</p>
//                             <p className="text-xs text-gray-500">
//                               {(file.file_size / (1024 * 1024)).toFixed(1)} MB •{" "}
//                               {file.created_at}
//                             </p>
//                           </div>
//                           <a
//                             href={file.file}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             download
//                           >
//                             <Download className="h-4 w-4 text-gray-500" />
//                           </a>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}
//           </TabsContent>
//           <TabsContent
//             value="shipping"
//             className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4"
//           >
//             <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
//             <div className="grid grid-cols-2 gap-6">
//               <div>
//                 <p className="text-sm text-gray-500">Port Name</p>
//                 <p className="font-medium">
//                   {quote.shipping_details?.port_name || "-"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Destination Country</p>
//                 <p className="font-medium">
//                   {quote.shipping_details?.destination_country || "-"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Shipment Terms</p>
//                 <p className="font-medium">
//                   {quote.shipping_details?.shipment_terms || "-"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Payment Terms</p>
//                 <p className="font-medium">
//                   {quote.shipping_details?.payment_terms || "-"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Shipment Method</p>
//                 <p className="font-medium">
//                   {quote.shipping_details?.shipment_method || "-"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Shipment Destination</p>
//                 <p className="font-medium">
//                   {quote.shipping_details?.shipment_destination || "-"}
//                 </p>
//               </div>
//               {quote.shipping_details?.door_address && (
//                 <div className="col-span-2">
//                   <p className="text-sm text-gray-500">Door Address</p>
//                   <p className="font-medium">
//                     {quote.shipping_details.door_address}
//                   </p>
//                 </div>
//               )}
//               {quote.shipping_details?.shipment_details && (
//                 <div className="col-span-2">
//                   <p className="text-sm text-gray-500">Additional Details</p>
//                   <p className="font-medium">
//                     {quote.shipping_details.shipment_details}
//                   </p>
//                 </div>
//               )}
//             </div>
//           </TabsContent>

// <TabsContent
//   value="supplier"
//   className="bg-white border rounded-md p-6 mt-4"
// >
//   <p className="text-gray-500">Supplier details coming soon...</p>
// </TabsContent>

// <TabsContent
//   value="messages"
//   className="p-4 border rounded-md bg-white"
// >
//   <h3 className="text-lg font-semibold mb-4">Messages</h3>
//   <QuoteChatSection quoteId={quote.id} />
// </TabsContent>

// <TabsContent
//   value="timeline"
//   className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4"
// >
//   <h3 className="text-lg font-semibold mb-6">Quote Timeline</h3>

//   {timelineLoading ? (
//     <p>Loading timeline...</p>
//   ) : timeline.length === 0 ? (
//     <p>No timeline available.</p>
//   ) : (
//     <div className="space-y-8 relative">
//       {timeline.map((event, index) => (
//         <div key={index} className="flex items-start relative">
//           {index < timeline.length - 1 && (
//             <div className="absolute top-0 left-4 h-full w-px bg-gray-300 z-0"></div>
//           )}
//           <div className="z-10 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center mr-4">
//             {event.event.toLowerCase().includes("submit") ? (
//               <FileText className="h-4 w-4" />
//             ) : (
//               <Clock className="h-4 w-4" />
//             )}
//           </div>
//           <div className="flex flex-col">
//             <p className="font-medium">{event.event}</p>
//             <Badge className="w-fit mt-1 bg-gray-100 text-gray-800">
//               {event.date}
//             </Badge>
//             <div className="flex items-center text-sm text-gray-500 mt-1">
//               <Clock className="h-3 w-3 mr-1" />
//               <span>{event.time}</span>
//               <span className="mx-2">•</span>
//               <User className="h-3 w-3 mr-1" />
//               <span>{event.user}</span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )}
// </TabsContent>

//         </Tabs>
//       </div>

//       {/* RIGHT COLUMN */}
//       <div className="space-y-6">
//         {/* Your Info */}
//         <div className="bg-white rounded-md border p-6">
//           <h2 className="text-lg font-semibold mb-4">Your Information</h2>
//           <p>
//             <strong>Name:</strong> {quote.customer_name}
//           </p>
//           <p>
//             <strong>Email:</strong> {quote.customer_email}
//           </p>
//           <p>
//             <strong>Company:</strong> {quote.customer_company}
//           </p>
//         </div>

//         {/* Actions */}
//         <div className="bg-white rounded-md border p-6 space-y-3">
//           <h2 className="text-lg font-semibold mb-2">Quote Actions</h2>
//           <Button variant="secondary" className="w-full">
//             <Lock className="h-4 w-4 mr-2" /> Unlock Supplier
//           </Button>
//           <Button variant="outline" className="w-full">
//             <Package className="h-4 w-4 mr-2" /> Request Samples
//           </Button>
//           <Button variant="outline" className="w-full">
//             <Ship className="h-4 w-4 mr-2" /> Update Shipping
//           </Button>
//           <Button variant="outline" className="w-full">
//             <Calendar className="h-4 w-4 mr-2" /> Schedule Follow-up
//           </Button>
//         </div>

//         {/* Support */}
//         <div className="bg-white rounded-md border p-6">
//           <h2 className="text-lg font-semibold mb-2">Need Help?</h2>
//           <p className="text-sm text-gray-600 mb-2">
//             Need assistance with your quote?
//           </p>
//           <Button variant="default" className="w-full">
//             <MessageSquare className="h-4 w-4 mr-2" /> Contact Support
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

////////////////////////////////////////////////////////////////////final abi tak jo h with new request
// "use client";

// import type React from "react";
// import { use } from "react";
// import { useState, useEffect } from "react";

// import { useRouter } from "next/navigation";

// import UpdateShippingModal from "@/components/UpdateShippingModal";

// import {
//   ArrowLeft,
//   Download,
//   Lock,
//   Calendar,
//   MessageSquare,
//   Package,
//   FileText,
//   Send,
//   Ship,
//   Clock,
//   User,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// export default function QuoteDetailPage({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = use(params);
//   const router = useRouter();
//   // const { id } = use(props.params);
//   const [quote, setQuote] = useState<any>(null);
// const [timelineLoading, setTimelineLoading] = useState(true);
// const timeline = quote?.timeline || [];
//   const [messages, setMessages] = useState<any[]>([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [currentUser, setCurrentUser] = useState<any>(null);

// const handleUnlockSupplier = async () => {
//   try {
//     const token = localStorage.getItem("accessToken");

//     const res = await fetch(
//       `http://localhost:8000/quotes/${quote.id}/unlock-supplier/`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `JWT ${token}`,
//         },
//       }
//     );

//     if (!res.ok) {
//       const err = await res.text();
//       console.error("Unlock failed:", err);
//     } else {
//       console.log("Unlock request sent");
//       alert("Unlock request sent to admin!");
//     }
//   } catch (err) {
//     console.error("Unlock error:", err);
//   }
// };

//   const handleSendMessage = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const token = localStorage.getItem("accessToken");

//     await fetch("http://localhost:8000/api/messages/send/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `JWT ${token}`,
//       },
//       body: JSON.stringify({
//         conversation: quote?.conversations?.[0]?.id, // make sure it's available
//         content: newMessage,
//       }),
//     });

//     setNewMessage("");

//     // Refresh messages
//     const res = await fetch(
//       `http://localhost:8000/api/messages/${quote?.conversations?.[0]?.id}/`,
//       {
//         headers: { Authorization: `JWT ${token}` },
//       }
//     );
//     const updated = await res.json();
//     setMessages(updated);
//   };

//   useEffect(() => {
//     const fetchQuote = async () => {
//       const token = localStorage.getItem("accessToken");

//       try {
//         const res = await fetch(`http://localhost:8000/quotes/${id}/`, {
//           headers: { Authorization: `JWT ${token}` },
//         });

//         if (!res.ok) {
//           const errorText = await res.text(); // fallback if .json() is empty
//           console.error("Quote fetch failed:", errorText || res.status);
//         } else {
//           const data = await res.json();
//           setQuote(data);
//           // Fetch messages for this quote
//           const msgRes = await fetch(
//             `http://localhost:8000/api/messages/quote/${data.id}/`,
//             {
//               headers: { Authorization: `JWT ${token}` },
//             }
//           );
//           if (msgRes.ok) {
//             const msgData = await msgRes.json();
//             setMessages(msgData);
//           }

//           // Fetch logged-in user
//           const userRes = await fetch(`http://localhost:8000/auth/users/me/`, {
//             headers: { Authorization: `JWT ${token}` },
//           });
//           if (userRes.ok) {
//             const user = await userRes.json();
//             setCurrentUser(user);
//           }
//         }
//       } catch (err) {
//         console.error("Quote fetch error:", err);
//       } finally {
//         setTimelineLoading(false);
//       }
//     };

//     fetchQuote();
//   }, [id]);

//   if (!quote) return <div className="p-6">Loading quote...</div>;

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
//       <div className="lg:col-span-2 space-y-6">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-4">
//             <Button variant="outline" size="icon" onClick={() => router.back()}>
//               <ArrowLeft className="h-4 w-4" />
//             </Button>
//             <div>
//               <h1 className="text-2xl font-bold">Quote Details</h1>
//               <p className="text-gray-500">{quote.quote_number}</p>
//             </div>
//           </div>
//           <Button variant="outline">
//             <Download className="h-4 w-4 mr-2" /> Export PDF
//           </Button>
//         </div>

//         <div className="bg-white rounded-lg border p-6">
//           <h2 className="text-lg font-semibold mb-4">Quote Summary</h2>
//           <div className="grid grid-cols-2 gap-4 text-sm">
//             <div>
//               <p className="text-gray-500">Product</p>
//               <p>{quote.product_name || "-"}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">Quantity</p>
//               <p>{quote.quantity || "-"}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">Date Submitted</p>
//               <p>{new Date(quote.created_at).toLocaleString()}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">Target Price</p>
//               <p>{quote.target_price || "-"}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">Your Name</p>
//               <p>{quote.customer_name || "-"}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">Company</p>
//               <p>{quote.customer_company || "-"}</p>
//             </div>
//           </div>
//         </div>

//         <Tabs defaultValue="details" className="w-full">
//           <TabsList className="grid grid-cols-5 w-full mt-4">
//             <TabsTrigger value="details">Details</TabsTrigger>
//             <TabsTrigger value="shipping">Shipping</TabsTrigger>
//             <TabsTrigger value="supplier">Supplier</TabsTrigger>
//             <TabsTrigger value="messages">Messages</TabsTrigger>
//             <TabsTrigger value="timeline">Timeline</TabsTrigger>
//           </TabsList>

//           <TabsContent
//             value="details"
//             className="bg-white rounded-lg border p-6 mt-4"
//           >
//             <h3 className="text-lg font-semibold mb-4">Product Details</h3>
//             <div className="grid grid-cols-2 gap-6">
//               <div>
//                 <p className="text-sm text-gray-500">Region of Origin</p>
//                 <p className="font-medium">{quote.region || "-"}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Product Name</p>
//                 <p className="font-medium">{quote.product_name || "-"}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Product Type</p>
//                 <p className="font-medium">{quote.product_type || "-"}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Quantity</p>
//                 <p className="font-medium">
//                   {quote.quantity?.toLocaleString() || "-"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Color</p>
//                 <p className="font-medium">{quote.color || "-"}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Quality</p>
//                 <p className="font-medium">{quote.quality || "-"}</p>
//               </div>
//             </div>
//             <div className="mt-6">
//               <p className="text-sm text-gray-500">Specifications</p>
//               <p className="mt-1 text-sm">{quote.specifications || "-"}</p>
//             </div>

//             {quote.response && (
//               <div className="mt-8 border-t pt-6">
//                 <h3 className="text-lg font-semibold mb-4">Quote Response</h3>
//                 <div className="grid grid-cols-2 gap-6 text-sm">
//                   <div>
//                     <p className="text-gray-500">Quote Provided On</p>
//                     <p>
//                       {new Date(
//                         quote.response.provided_date
//                       ).toLocaleDateString()}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-gray-500">Valid Until</p>
//                     <p>
//                       {new Date(
//                         quote.response.expiration_date
//                       ).toLocaleDateString()}
//                     </p>
//                   </div>
//                   <div>
//                     <p className="text-gray-500">Unit Price</p>
//                     <p>${quote.response.unit_price}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-500">Total Price</p>
//                     <p>${quote.response.total_price}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-500">Shipping Cost</p>
//                     <p>${quote.response.shipping_cost}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-500">Grand Total</p>
//                     <p className="font-bold">${quote.response.grand_total}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-500">Lead Time</p>
//                     <p>{quote.response.lead_time}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-500">Minimum Order</p>
//                     <p>{quote.response.minimum_order}</p>
//                   </div>
//                   <div>
//                     <p className="text-gray-500">Payment Terms</p>
//                     <p>{quote.response.payment_terms}</p>
//                   </div>
//                 </div>

//                 {quote.response.notes && (
//                   <div className="mt-4">
//                     <p className="text-sm text-gray-500">Notes</p>
//                     <p className="text-sm">{quote.response.notes}</p>
//                   </div>
//                 )}

//                 {quote.response.alternatives?.length > 0 && (
//                   <div className="mt-6">
//                     <p className="text-sm font-medium mb-2">
//                       Alternative Options
//                     </p>
//                     <div className="space-y-3">
//                       {quote.response.alternatives.map((alt, index) => (
//                         <div
//                           key={index}
//                           className="bg-gray-50 p-4 rounded-md border border-gray-200"
//                         >
//                           <p className="font-medium">{alt.description}</p>
//                           <p className="text-sm">
//                             Unit Price: ${alt.unit_price}
//                           </p>
//                           <p className="text-xs text-gray-600 mt-1">
//                             Benefits: {alt.benefits}
//                           </p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}

// {quote.attachments?.length > 0 && (
//   <div className="mt-6">
//     <h3 className="text-sm font-semibold mb-2">Attachments</h3>
//     <div className="space-y-2">
//       {quote.attachments.map((file, idx) => (
//         <div
//           key={idx}
//           className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
//         >
//           <div>
//             <p className="text-sm font-medium">{file.name}</p>
//             <p className="text-xs text-gray-500">
//               {(file.file_size / (1024 * 1024)).toFixed(1)} MB •{" "}
//               {file.created_at}
//             </p>
//           </div>
//           <a
//             href={file.file}
//             target="_blank"
//             rel="noopener noreferrer"
//             download
//           >
//             <Download className="h-4 w-4 text-gray-500" />
//           </a>
//         </div>
//       ))}
//     </div>
//   </div>
// )}
//           </TabsContent>

//           <TabsContent
//             value="shipping"
//             className="bg-white rounded-lg border p-6 mt-4"
//           >
//             <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
//             <div className="grid grid-cols-2 gap-6">
//               <div>
//                 <p className="text-sm text-gray-500">Port Name</p>
//                 <p className="font-medium">
//                   {quote.shipping_details?.port_name || "-"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Destination Country</p>
//                 <p className="font-medium">
//                   {quote.shipping_details?.destination_country || "-"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Shipment Terms</p>
//                 <p className="font-medium">
//                   {quote.shipping_details?.shipment_terms || "-"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Payment Terms</p>
//                 <p className="font-medium">
//                   {quote.shipping_details?.payment_terms || "-"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Shipment Method</p>
//                 <p className="font-medium">
//                   {quote.shipping_details?.shipment_method || "-"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Shipment Destination</p>
//                 <p className="font-medium">
//                   {quote.shipping_details?.shipment_destination || "-"}
//                 </p>
//               </div>
//               {quote.shipping_details?.door_address && (
//                 <div className="col-span-2">
//                   <p className="text-sm text-gray-500">Door Address</p>
//                   <p className="font-medium">
//                     {quote.shipping_details.door_address}
//                   </p>
//                 </div>
//               )}
//               {quote.shipping_details?.shipment_details && (
//                 <div className="col-span-2">
//                   <p className="text-sm text-gray-500">Additional Details</p>
//                   <p className="font-medium">
//                     {quote.shipping_details.shipment_details}
//                   </p>
//                 </div>
//               )}
//             </div>
//           </TabsContent>

//           <TabsContent
//             value="supplier"
//             className="bg-white border rounded-md p-6 mt-4"
//           >
//             <p className="text-gray-500">Supplier details coming soon...</p>
//           </TabsContent>

//           <TabsContent
//             value="messages"
//             className="p-4 border rounded-md bg-white"
//           >
//             <h3 className="text-lg font-semibold mb-4">Messages</h3>

//             {!currentUser ? (
//               <p>Loading user...</p>
//             ) : (
//               <>
//                 <div className="max-h-[400px] overflow-y-auto space-y-4 mb-4">
//                   {messages.map((msg) => {
//                     const isMe = msg.sender.id === currentUser.id;
//                     return (
//                       <div
//                         key={msg.id}
//                         className={`flex ${
//                           isMe ? "justify-end" : "justify-start"
//                         }`}
//                       >
//                         <div
//                           className={`max-w-[70%] p-4 shadow rounded-lg ${
//                             isMe
//                               ? "bg-black text-white"
//                               : "bg-gray-100 text-gray-800"
//                           }`}
//                         >
//                           <div className="text-sm font-medium">
//                             {msg.sender.full_name || msg.sender.email}
//                           </div>
//                           <div className="text-sm mt-1 whitespace-pre-line">
//                             {msg.content}
//                           </div>
//                           <div className="text-xs text-right mt-2 opacity-70">
//                             {new Date(msg.sent_at).toLocaleString()}
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>

//                 <form
//                   onSubmit={handleSendMessage}
//                   className="flex items-end gap-2"
//                 >
//                   <textarea
//                     placeholder="Type your message..."
//                     value={newMessage}
//                     onChange={(e) => setNewMessage(e.target.value)}
//                     className="flex-1 p-2 border rounded-md min-h-[60px]"
//                     required
//                   />
//                   <Button type="submit">
//                     <Send className="h-4 w-4 mr-1" />
//                     Send
//                   </Button>
//                 </form>
//               </>
//             )}
//           </TabsContent>

//           <TabsContent
//             value="timeline"
//             className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4"
//           >
//             <h3 className="text-lg font-semibold mb-6">Quote Timeline</h3>

//             {timelineLoading ? (
//               <p>Loading timeline...</p>
//             ) : timeline.length === 0 ? (
//               <p>No timeline available.</p>
//             ) : (
//               <div className="space-y-8 relative">
//                 {timeline.map((event, index) => (
//                   <div key={index} className="flex items-start relative">
//                     {index < timeline.length - 1 && (
//                       <div className="absolute top-0 left-4 h-full w-px bg-gray-300 z-0"></div>
//                     )}
//                     <div className="z-10 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center mr-4">
//                       {event.event.toLowerCase().includes("submit") ? (
//                         <FileText className="h-4 w-4" />
//                       ) : (
//                         <Clock className="h-4 w-4" />
//                       )}
//                     </div>
//                     <div className="flex flex-col">
//                       <p className="font-medium">{event.event}</p>
//                       <Badge className="w-fit mt-1 bg-gray-100 text-gray-800">
//                         {event.date}
//                       </Badge>
//                       <div className="flex items-center text-sm text-gray-500 mt-1">
//                         <Clock className="h-3 w-3 mr-1" />
//                         <span>{event.time}</span>
//                         <span className="mx-2">•</span>
//                         <User className="h-3 w-3 mr-1" />
//                         <span>{event.user}</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </TabsContent>
//         </Tabs>
//       </div>

//       <div className="space-y-6">
//         <div className="bg-white rounded-md border p-6">
//           <h2 className="text-lg font-semibold mb-4">Your Information</h2>
//           <p>
//             <strong>Name:</strong> {quote.customer_name}
//           </p>
//           <p>
//             <strong>Email:</strong> {quote.customer_email}
//           </p>
//           <p>
//             <strong>Company:</strong> {quote.customer_company}
//           </p>
//         </div>

//         <div className="bg-white rounded-md border p-6 space-y-3">
//           <h2 className="text-lg font-semibold mb-2">Quote Actions</h2>
//           <Button
//             variant="secondary"
//             className="w-full"
//             onClick={handleUnlockSupplier}
//           >
//             <Lock className="h-4 w-4 mr-2" /> Unlock Supplier
//           </Button>

//           <Button variant="outline" className="w-full">
//             <Package className="h-4 w-4 mr-2" /> Request Samples
//           </Button>
//           <UpdateShippingModal
//             quoteId={quote.id}
//             current={quote.shipping_details}
//             onSuccess={() => window.location.reload()}
//           />
//           <Button variant="outline" className="w-full">
//             <Calendar className="h-4 w-4 mr-2" /> Schedule Follow-up
//           </Button>
//         </div>

//         <div className="bg-white rounded-md border p-6">
//           <h2 className="text-lg font-semibold mb-2">Need Help?</h2>
//           <p className="text-sm text-gray-600 mb-2">
//             Need assistance with your quote?
//           </p>
//           <Button variant="default" className="w-full">
//             <MessageSquare className="h-4 w-4 mr-2" /> Contact Support
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useRef, useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import UpdateShippingModal from "@/components/UpdateShippingModal";
import {
  ArrowLeft,
  Download,
  Lock,
  Calendar,
  MessageSquare,
  Package,
  FileText,
  Send,
  Clock,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function QuoteDetailPage() {
  const params = useParams();
  const id = params?.id;
  const router = useRouter();
  const [quote, setQuote] = useState<any>(null);
  const [timelineLoading, setTimelineLoading] = useState(true);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [conversationId, setConversationId] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const fetchMessages = async (conversationId: number, token: string) => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/messages/${conversationId}/`,
        {
          headers: { Authorization: `JWT ${token}` },
        }
      );
      const contentType = res.headers.get("Content-Type");
      if (!res.ok) {
        const text = await res.text();
        console.error("Message fetch failed:", res.status, text);
      } else if (!contentType?.includes("application/json")) {
        const html = await res.text();
        console.error("Expected JSON in fetchMessages but got HTML:", html);
      } else {
        const updated = await res.json();
        setMessages(updated);
      }
    } catch (error) {
      console.error("Fetch messages error:", error);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");
    if (!newMessage.trim()) return;

    try {
      let convId = conversationId;
      if (!convId && quote?.id) {
        const convRes = await fetch(
          `http://localhost:8000/api/quotes/${quote.id}/conversation/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `JWT ${token}`,
            },
          }
        );
        const convData = await convRes.json();
        convId = convData.id;
        setConversationId(convId);
      }

      const res = await fetch(`http://localhost:8000/api/messages/${convId}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${token}`,
        },
        body: JSON.stringify({ content: newMessage }),
      });

      if (res.ok) {
        setNewMessage("");
        fetchMessages(convId, token);
      } else {
        const errText = await res.text();
        console.error("Send message failed:", errText);
      }
    } catch (err) {
      console.error("Send message error:", err);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const fetchQuote = async () => {
      const token = localStorage.getItem("accessToken");
      try {
        const res = await fetch(`http://localhost:8000/quotes/${id}/`, {
          headers: { Authorization: `JWT ${token}` },
        });

        const contentType = res.headers.get("Content-Type");
        if (!res.ok) {
          const text = await res.text();
          console.error("Fetch failed:", res.status, text);
        } else if (!contentType?.includes("application/json")) {
          const text = await res.text();
          console.error("Expected JSON but got HTML:", text);
        } else {
          const data = await res.json();
          setQuote(data);

          const convId = data?.conversations?.find(
            (c: any) => c.type === "quote"
          )?.id;
          if (convId) {
            setConversationId(convId); // ✅ Only set — fetching is handled separately
          }

          const userRes = await fetch(`http://localhost:8000/auth/users/me/`, {
            headers: { Authorization: `JWT ${token}` },
          });
          if (userRes.ok) {
            const user = await userRes.json();
            setCurrentUser(user);
          }
        }
      } catch (err) {
        console.error("Quote fetch error:", err);
      } finally {
        setTimelineLoading(false);
      }
    };

    if (id) fetchQuote();
  }, [id]);

  // ✅ Fetch messages when conversationId is set
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (conversationId && token) {
      fetchMessages(conversationId, token);
    }
  }, [conversationId]);

  // 🔄 Scroll to bottom when messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // "use client";
  // import { useRef } from "react";
  // import { useState, useEffect } from "react";
  // import { useParams, useRouter } from "next/navigation";
  // import UpdateShippingModal from "@/components/UpdateShippingModal";
  // import {
  //   ArrowLeft,
  //   Download,
  //   Lock,
  //   Calendar,
  //   MessageSquare,
  //   Package,
  //   FileText,
  //   Send,
  //   Clock,
  //   User,
  // } from "lucide-react";
  // import { Button } from "@/components/ui/button";
  // import { Badge } from "@/components/ui/badge";
  // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

  // export default function QuoteDetailPage() {
  //   const params = useParams();
  //   const id = params?.id;
  //   const router = useRouter();
  //   const [quote, setQuote] = useState<any>(null);
  // const [timelineLoading, setTimelineLoading] = useState(true);
  const timeline = quote?.timeline || [];
  //   const [messages, setMessages] = useState<any[]>([]);
  //   const [newMessage, setNewMessage] = useState("");
  //   const [currentUser, setCurrentUser] = useState<any>(null);
  //   const [conversationId, setConversationId] = useState<number | null>(null);

  //   const messagesEndRef = useRef<HTMLDivElement | null>(null);

  //   const fetchMessages = async (conversationId: number, token: string) => {
  //     try {
  //       const res = await fetch(
  //         `http://localhost:8000/api/messages/${conversationId}/`,
  //         {
  //           headers: { Authorization: `JWT ${token}` },
  //         }
  //       );
  //       const contentType = res.headers.get("Content-Type");
  //       if (!res.ok) {
  //         const text = await res.text();
  //         console.error("Message fetch failed:", res.status, text);
  //       } else if (!contentType?.includes("application/json")) {
  //         const html = await res.text();
  //         console.error("Expected JSON in fetchMessages but got HTML:", html);
  //       } else {
  //         const updated = await res.json();
  //         setMessages(updated);
  //       }
  //     } catch (error) {
  //       console.error("Fetch messages error:", error);
  //     }
  //   };

  //   const handleSendMessage = async (e: React.FormEvent) => {
  //     e.preventDefault();
  //     const token = localStorage.getItem("accessToken");
  //     if (!newMessage.trim()) return;

  //     try {
  //       let convId = conversationId;
  //       if (!convId && quote?.id) {
  //         const convRes = await fetch(
  //           `http://localhost:8000/api/quotes/${quote.id}/conversation/`,
  //           {
  //             method: "POST",
  //             headers: {
  //               "Content-Type": "application/json",
  //               Authorization: `JWT ${token}`,
  //             },
  //           }
  //         );
  //         const convData = await convRes.json();
  //         convId = convData.id;
  //         setConversationId(convId);
  //       }

  //       const res = await fetch(`http://localhost:8000/api/messages/${convId}/`, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `JWT ${token}`,
  //         },
  //         body: JSON.stringify({ content: newMessage }),
  //       });

  //       if (res.ok) {
  //         setNewMessage("");
  //         fetchMessages(convId, token);
  //       } else {
  //         const errText = await res.text();
  //         console.error("Send message failed:", errText);
  //       }
  //     } catch (err) {
  //       console.error("Send message error:", err);
  //     }
  //   };

  //   const scrollToBottom = () => {
  //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  //   };

  //   useEffect(() => {
  //     const fetchQuote = async () => {
  //       const token = localStorage.getItem("accessToken");
  //       try {
  //         const res = await fetch(`http://localhost:8000/quotes/${id}/`, {
  //           headers: { Authorization: `JWT ${token}` },
  //         });

  //         const contentType = res.headers.get("Content-Type");
  //         if (!res.ok) {
  //           const text = await res.text();
  //           console.error("Fetch failed:", res.status, text);
  //         } else if (!contentType?.includes("application/json")) {
  //           const text = await res.text();
  //           console.error("Expected JSON but got HTML:", text);
  //         } else {
  //           const data = await res.json();
  //           setQuote(data);

  //           const convId = data?.conversations?.find(
  //             (c: any) => c.type === "quote"
  //           )?.id;
  //           if (convId) {
  //             setConversationId(convId);
  //             fetchMessages(convId, token);
  //           }

  //           const userRes = await fetch(`http://localhost:8000/auth/users/me/`, {
  //             headers: { Authorization: `JWT ${token}` },
  //           });
  //           if (userRes.ok) {
  //             const user = await userRes.json();
  //             setCurrentUser(user);
  //           }
  //         }
  //       } catch (err) {
  //         console.error("Quote fetch error:", err);
  //       } finally {
  //         setTimelineLoading(false);
  //       }
  //     };

  //     if (id) fetchQuote();
  //   }, [id]);

  //   // 🔄 Scroll when messages update
  //   useEffect(() => {
  //     scrollToBottom();
  //   }, [messages]);

  //   useEffect(() => {
  //     const token = localStorage.getItem("accessToken");
  //     if (conversationId && token) {
  //       fetchMessages(conversationId, token);
  //     }
  //   }, [conversationId]);

  const handleUnlockSupplier = async () => {
    try {
      const token = localStorage.getItem("accessToken");

      const res = await fetch(
        `http://localhost:8000/quotes/${quote.id}/unlock-supplier/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${token}`,
          },
        }
      );

      if (!res.ok) {
        const err = await res.text();
        console.error("Unlock failed:", err);
      } else {
        console.log("Unlock request sent");
        alert("Unlock request sent to admin!");
      }
    } catch (err) {
      console.error("Unlock error:", err);
    }
  };

  if (!quote) return <div className="p-6">Loading quote...</div>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Quote Details</h1>
              <p className="text-gray-500">{quote.quote_number}</p>
            </div>
          </div>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" /> Export PDF
          </Button>
        </div>

        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-lg font-semibold mb-4">Quote Summary</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Product</p>
              <p>{quote.product_name || "-"}</p>
            </div>
            <div>
              <p className="text-gray-500">Quantity</p>
              <p>{quote.quantity || "-"}</p>
            </div>
            <div>
              <p className="text-gray-500">Date Submitted</p>
              <p>{new Date(quote.created_at).toLocaleString()}</p>
            </div>
            <div>
              <p className="text-gray-500">Target Price</p>
              <p>{quote.target_price?.trim() ? quote.target_price : "-"}</p>
            </div>
            <div>
              <p className="text-gray-500">Your Name</p>
              <p>{quote.customer_name || "-"}</p>
            </div>
            <div>
              <p className="text-gray-500">Company</p>
              <p>{quote.customer_company || "-"}</p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid grid-cols-5 w-full mt-4">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
            <TabsTrigger value="supplier">Supplier</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>

          <TabsContent
            value="details"
            className="bg-white rounded-lg border p-6 mt-4"
          >
            <h3 className="text-lg font-semibold mb-4">Product Details</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500">Region of Origin</p>
                <p className="font-medium">{quote.region || "-"}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Product Name</p>
                <p className="font-medium">{quote.product_name || "-"}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Product Type</p>
                <p className="font-medium">{quote.product_type || "-"}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Quantity</p>
                <p className="font-medium">
                  {quote.quantity?.toLocaleString() || "-"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Color</p>
                <p className="font-medium">{quote.color || "-"}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Quality</p>
                <p className="font-medium">{quote.quality || "-"}</p>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-500">Specifications</p>
              <p className="mt-1 text-sm">{quote.specifications || "-"}</p>
            </div>

            {quote.response && (
              <div className="mt-8 border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Quote Response</h3>
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="text-gray-500">Quote Provided On</p>
                    <p>
                      {new Date(
                        quote.response.provided_date
                      ).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Valid Until</p>
                    <p>
                      {new Date(
                        quote.response.expiration_date
                      ).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Unit Price</p>
                    <p>${quote.response.unit_price}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Total Price</p>
                    <p>${quote.response.total_price}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Shipping Cost</p>
                    <p>${quote.response.shipping_cost}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Grand Total</p>
                    <p className="font-bold">${quote.response.grand_total}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Lead Time</p>
                    <p>{quote.response.lead_time}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Minimum Order</p>
                    <p>{quote.response.minimum_order}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Payment Terms</p>
                    <p>{quote.response.payment_terms}</p>
                  </div>
                </div>

                {quote.response.notes && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Notes</p>
                    <p className="text-sm">{quote.response.notes}</p>
                  </div>
                )}

                {quote.response.alternatives?.length > 0 && (
                  <div className="mt-6">
                    <p className="text-sm font-medium mb-2">
                      Alternative Options
                    </p>
                    <div className="space-y-3">
                      {quote.response.alternatives.map((alt, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 p-4 rounded-md border border-gray-200"
                        >
                          <p className="font-medium">{alt.description}</p>
                          <p className="text-sm">
                            Unit Price: ${alt.unit_price}
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            Benefits: {alt.benefits}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {quote.response.attachments?.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold mb-2">
                      Supplier Attachments
                    </h3>
                    <div className="space-y-2">
                      {quote.response.attachments.map((file, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
                        >
                          <div>
                            <p className="text-sm font-medium">{file.name}</p>
                            <p className="text-xs text-gray-500">
                              {(file.file_size / (1024 * 1024)).toFixed(1)} MB •{" "}
                              {file.created_at}
                            </p>
                          </div>
                          <a
                            href={file.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                          >
                            <Download className="h-4 w-4 text-gray-500" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </TabsContent>

          <TabsContent
            value="shipping"
            className="bg-white rounded-lg border p-6 mt-4"
          >
            <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500">Port Name</p>
                <p className="font-medium">
                  {quote.shipping_details?.port_name || "-"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Destination Country</p>
                <p className="font-medium">
                  {quote.shipping_details?.destination_country || "-"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Shipment Terms</p>
                <p className="font-medium">
                  {quote.shipping_details?.shipment_terms || "-"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Payment Terms</p>
                <p className="font-medium">
                  {quote.shipping_details?.payment_terms || "-"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Shipment Method</p>
                <p className="font-medium">
                  {quote.shipping_details?.shipment_method || "-"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Shipment Destination</p>
                <p className="font-medium">
                  {quote.shipping_details?.shipment_destination || "-"}
                </p>
              </div>
              {quote.shipping_details?.door_address && (
                <div className="col-span-2">
                  <p className="text-sm text-gray-500">Door Address</p>
                  <p className="font-medium">
                    {quote.shipping_details.door_address}
                  </p>
                </div>
              )}
              {quote.shipping_details?.shipment_details && (
                <div className="col-span-2">
                  <p className="text-sm text-gray-500">Additional Details</p>
                  <p className="font-medium">
                    {quote.shipping_details.shipment_details}
                  </p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent
            value="supplier"
            className="bg-white border rounded-md p-6 mt-4"
          >
            <p className="text-gray-500">Supplier details coming soon...</p>
          </TabsContent>
          <TabsContent
            value="messages"
            className="p-4 border rounded-md bg-white"
          >
            <h3 className="text-lg font-semibold mb-4">Messages</h3>
            {!currentUser ? (
              <p>Loading user...</p>
            ) : (
              <>
                {messages.length === 0 ? (
                  <p className="text-sm text-gray-500 italic">
                    No messages yet.
                  </p>
                ) : (
                  <div className="max-h-[400px] overflow-y-auto space-y-4 mb-4">
                    {messages.map((msg) => {
                      const isMe = msg.sender.id === currentUser.id;
                      return (
                        <div
                          key={msg.id}
                          className={`flex ${
                            isMe ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[70%] p-4 shadow-sm rounded-lg ${
                              isMe
                                ? "bg-black text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg"
                                : "bg-gray-100 text-gray-800 rounded-tr-lg rounded-tl-lg rounded-br-lg"
                            }`}
                          >
                            <div className="text-sm font-medium">
                              {msg.sender.full_name || msg.sender.email}
                            </div>
                            <div className="text-sm mt-1 whitespace-pre-wrap">
                              {msg.content}
                            </div>
                            <div className="text-xs text-right mt-2 opacity-70">
                              {new Date(msg.sent_at).toLocaleString()}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div ref={messagesEndRef} />
                  </div>
                )}

                <form
                  onSubmit={handleSendMessage}
                  className="flex items-end gap-2"
                >
                  <textarea
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1 p-2 border rounded-md min-h-[60px]"
                    required
                  />
                  <Button type="submit">
                    <Send className="h-4 w-4 mr-1" /> Send
                  </Button>
                </form>
              </>
            )}
          </TabsContent>

          <TabsContent
            value="timeline"
            className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4"
          >
            <h3 className="text-lg font-semibold mb-6">Quote Timeline</h3>

            {timelineLoading ? (
              <p>Loading timeline...</p>
            ) : timeline.length === 0 ? (
              <p>No timeline available.</p>
            ) : (
              <div className="space-y-8 relative">
                {timeline.map((event, index) => (
                  <div key={index} className="flex items-start relative">
                    {index < timeline.length - 1 && (
                      <div className="absolute top-0 left-4 h-full w-px bg-gray-300 z-0"></div>
                    )}
                    <div className="z-10 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center mr-4">
                      {event.event.toLowerCase().includes("submit") ? (
                        <FileText className="h-4 w-4" />
                      ) : (
                        <Clock className="h-4 w-4" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <p className="font-medium">{event.event}</p>
                      <Badge className="w-fit mt-1 bg-gray-100 text-gray-800">
                        {event.date}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{event.time}</span>
                        <span className="mx-2">•</span>
                        <User className="h-3 w-3 mr-1" />
                        <span>{event.user}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-md border p-6">
          <h2 className="text-lg font-semibold mb-4">Your Information</h2>
          <p>
            <strong>Name:</strong> {quote.customer_name}
          </p>
          <p>
            <strong>Email:</strong> {quote.customer_email}
          </p>
          <p>
            <strong>Company:</strong> {quote.customer_company}
          </p>
        </div>

        <div className="bg-white rounded-md border p-6 space-y-3">
          <h2 className="text-lg font-semibold mb-2">Quote Actions</h2>
          <Button
            variant="secondary"
            className="w-full"
            onClick={handleUnlockSupplier}
          >
            <Lock className="h-4 w-4 mr-2" /> Unlock Supplier
          </Button>

          <Button variant="outline" className="w-full">
            <Package className="h-4 w-4 mr-2" /> Request Samples
          </Button>
          <UpdateShippingModal
            quoteId={quote.id}
            current={quote.shipping_details}
            onSuccess={() => window.location.reload()}
          />
          <Button variant="outline" className="w-full">
            <Calendar className="h-4 w-4 mr-2" /> Schedule Follow-up
          </Button>
        </div>

        <div className="bg-white rounded-md border p-6">
          <h2 className="text-lg font-semibold mb-2">Need Help?</h2>
          <p className="text-sm text-gray-600 mb-2">
            Need assistance with your quote?
          </p>
          <Button variant="default" className="w-full">
            <MessageSquare className="h-4 w-4 mr-2" /> Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
}

// // secind dtine

// "use client"

// import type React from "react"
// import { use } from "react"
// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import {
//   ArrowLeft,
//   Download,
//   FileText,
//   Unlock,
//   Package,
//   MessageSquare,
//   Clock,
//   User,
//   Ship,
//   Lock
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// export default function QuoteDetailPage(props: { params: Promise<{ id: string }> }) {
//   const router = useRouter()
//   const { id } = use(props.params)
//   const [quote, setQuote] = useState<any>(null)
//   const [newMessage, setNewMessage] = useState("")

//   useEffect(() => {
//     const fetchQuote = async () => {
//       const token = localStorage.getItem("accessToken")
//       const res = await fetch(`http://localhost:8000/quotes/${id}/`, {
//         headers: {
//           Authorization: `JWT ${token}`,
//         },
//       })

//       if (res.ok) {
//         const data = await res.json()
//         setQuote(data)
//       } else {
//         console.error("Failed to fetch quote details")
//       }
//     }

//     fetchQuote()
//   }, [id])

//   const handleSendMessage = (e: React.FormEvent) => {
//     e.preventDefault()
//     setNewMessage("")
//   }

//   const handleRequestSamples = () => {}
//   const handleUnlockSupplier = () => {}

//   if (!quote) return <div>Loading quote...</div>

//   return (
//     <div className="space-y-8">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <Button variant="outline" size="icon" onClick={() => router.back()}>
//             <ArrowLeft className="h-4 w-4" />
//           </Button>
//           <div>
//             <h1 className="text-2xl font-bold">Quote Details</h1>
//             <p className="text-gray-500">{quote.quote_number}</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-4">
//           <Button variant="outline">
//             <Download className="h-4 w-4 mr-2" />
//             Export PDF
//           </Button>
//         </div>
//       </div>

//       <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
//         <h3 className="text-lg font-semibold mb-4">Quote Summary</h3>
//         <div className="grid grid-cols-2 gap-6">
//           <div>
//             <p className="text-sm text-gray-500">Product</p>
//             <p className="font-medium">{quote.product_name || "-"}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Quantity</p>
//             <p className="font-medium">{quote.quantity?.toLocaleString() || "-"}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Date Submitted</p>
//             <p className="font-medium">{new Date(quote.created_at).toLocaleString()}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Target Price</p>
//             <p className="font-medium">{quote.target_price || "-"}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Your Name</p>
//             <p className="font-medium">{quote.customer_name || "-"}</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-500">Company</p>
//             <p className="font-medium">{quote.customer_company || "-"}</p>
//           </div>
//         </div>
//       </div>

//       <Tabs defaultValue="details" className="w-full">
//         <TabsList className="grid w-full grid-cols-5">
//           <TabsTrigger value="details">Details</TabsTrigger>
//           <TabsTrigger value="shipping">Shipping</TabsTrigger>
//           <TabsTrigger value="supplier">Supplier</TabsTrigger>
//           <TabsTrigger value="messages">Messages</TabsTrigger>
//           <TabsTrigger value="timeline">Timeline</TabsTrigger>
//         </TabsList>

//         <TabsContent value="details" className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4">
//           <h3 className="text-lg font-semibold mb-4">Product Details</h3>
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <p className="text-sm text-gray-500">Region of Origin</p>
//               <p className="font-medium">{quote.region || "-"}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Product Name</p>
//               <p className="font-medium">{quote.product_name || "-"}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Product Type</p>
//               <p className="font-medium">{quote.product_type || "-"}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Quantity</p>
//               <p className="font-medium">{quote.quantity?.toLocaleString() || "-"}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Color</p>
//               <p className="font-medium">{quote.color || "-"}</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Quality</p>
//               <p className="font-medium">{quote.quality || "-"}</p>
//             </div>
//           </div>
//           <div className="mt-6">
//             <p className="text-sm text-gray-500">Specifications</p>
//             <p className="mt-1 text-sm">{quote.specifications || "-"}</p>
//           </div>

//           {quote.response && (
//             <div className="mt-8 border-t border-gray-200 pt-6">
//               <h3 className="text-lg font-semibold mb-4">Quote Response</h3>
//               <div className="grid grid-cols-2 gap-6">
//                 <div>
//                   <p className="text-sm text-gray-500">Quote Provided On</p>
//                   <p className="font-medium">{new Date(quote.response.provided_date).toLocaleDateString()}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Valid Until</p>
//                   <p className="font-medium">{new Date(quote.response.expiration_date).toLocaleDateString()}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Unit Price</p>
//                   <p className="font-medium">${parseFloat(quote.response.unit_price).toFixed(2)}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Total Price</p>
//                   <p className="font-medium">${parseFloat(quote.response.total_price).toFixed(2)}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Shipping Cost</p>
//                   <p className="font-medium">${parseFloat(quote.response.shipping_cost).toFixed(2)}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Grand Total</p>
//                   <p className="font-bold">${parseFloat(quote.response.grand_total).toFixed(2)}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Lead Time</p>
//                   <p className="font-medium">{quote.response.lead_time}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Minimum Order</p>
//                   <p className="font-medium">{quote.response.minimum_order}</p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Payment Terms</p>
//                   <p className="font-medium">{quote.response.payment_terms}</p>
//                 </div>
//               </div>
//               {quote.response.notes && (
//                 <div className="mt-4">
//                   <p className="text-sm text-gray-500">Notes</p>
//                   <p className="mt-1 text-sm">{quote.response.notes}</p>
//                 </div>
//               )}
//             </div>
//           )}
//         </TabsContent>

//         <TabsContent value="shipping" className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4">
//           <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
//           {quote.shipping_details ? (
//             <div className="grid grid-cols-2 gap-6">
//               <div>
//                 <p className="text-sm text-gray-500">Port Name</p>
//                 <p className="font-medium">{quote.shipping_details.port_name}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Destination Country</p>
//                 <p className="font-medium">{quote.shipping_details.destination_country}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Shipment Terms</p>
//                 <p className="font-medium">{quote.shipping_details.shipment_terms}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Payment Terms</p>
//                 <p className="font-medium">{quote.shipping_details.payment_terms}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Shipment Method</p>
//                 <p className="font-medium">{quote.shipping_details.shipment_method}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Shipment Destination</p>
//                 <p className="font-medium">{quote.shipping_details.shipment_destination}</p>
//               </div>
//               {quote.shipping_details.door_address && (
//                 <div className="col-span-2">
//                   <p className="text-sm text-gray-500">Door Address</p>
//                   <p className="font-medium">{quote.shipping_details.door_address}</p>
//                 </div>
//               )}
//               {quote.shipping_details.shipment_details && (
//                 <div className="col-span-2">
//                   <p className="text-sm text-gray-500">Shipment Details</p>
//                   <p className="font-medium">{quote.shipping_details.shipment_details}</p>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <p className="text-sm text-gray-500">Shipping details are currently not available.</p>
//           )}
//         </TabsContent>

//         <TabsContent value="supplier" className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4 text-center text-gray-500">
//           Supplier details are currently not available.
//         </TabsContent>

//         <TabsContent value="messages" className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4">
//           <h3 className="text-lg font-semibold mb-4">Messages</h3>
//           <p className="text-sm text-gray-500">Messages are currently not available.</p>
//         </TabsContent>

//         <TabsContent value="timeline" className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4">
//           <h3 className="text-lg font-semibold mb-4">Quote Timeline</h3>
//           <p className="text-sm text-gray-500">Timeline events are currently not available.</p>
//         </TabsContent>
//       </Tabs>
//     </div>
//   )
// }
