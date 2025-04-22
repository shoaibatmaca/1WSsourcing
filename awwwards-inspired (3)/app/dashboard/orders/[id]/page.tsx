// // // "use client";

// // // import type React from "react";
// // // import { useState } from "react";
// // // import { use } from "react";
// // // import { useRouter } from "next/navigation";
// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import {
// // //   ArrowLeft,
// // //   Calendar,
// // //   Clock,
// // //   CreditCard,
// // //   Download,
// // //   FileText,
// // //   MapPin,
// // //   MessageSquare,
// // //   Package,
// // //   Printer,
// // //   Send,
// // //   Ship,
// // //   Truck,
// // //   User,
// // // } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
// // // import { Textarea } from "@/components/ui/textarea";
// // // import { Badge } from "@/components/ui/badge";
// // // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// // // const getOrderById = (id: string) => {
// // //   return {
// // //     id: id,
// // //     order_number: `ORD-2023-${id}`,
// // //     date: "Apr 10, 2023",
// // //     status: "processing",
// // //     total: "$4,500.00",
// // //     customer: {
// // //       name: "John Doe",
// // //       email: "john.doe@example.com",
// // //       company: "Fashion Brand Inc.",
// // //       phone: "+1 (555) 123-4567",
// // //     },
// // //     supplier: {
// // //       id: "SUP-001",
// // //       name: "TextilePro Manufacturing",
// // //       location: "Shanghai, China",
// // //       logo: "/placeholder.svg?height=100&width=100&text=TP",
// // //     },
// // //     products: [
// // //       {
// // //         id: 1,
// // //         name: "Organic Cotton T-Shirts",
// // //         image: "/placeholder.svg?height=100&width=100&text=Product",
// // //         quantity: 500,
// // //         price: "$8.00",
// // //         total: "$4,000.00",
// // //         color: "Multiple (Black, White, Navy)",
// // //         size: "S, M, L, XL",
// // //       },
// // //     ],
// // //     shipping: {
// // //       method: "Sea",
// // //       carrier: "Maersk",
// // //       tracking_number: "MSK12345678",
// // //       estimated_delivery: "Jun 15, 2023",
// // //       shipping_address:
// // //         "123 Commerce St, Suite 400, Los Angeles, CA 90012, USA",
// // //       shipping_cost: "$500.00",
// // //     },
// // //     payment: {
// // //       method: "Bank Transfer (T/T)",
// // //       status: "Paid",
// // //       date: "Apr 12, 2023",
// // //       amount: "$4,500.00",
// // //       invoice_number: "INV-2023-4567",
// // //     },
// // //     timeline: [
// // //       {
// // //         date: "Apr 10, 2023",
// // //         time: "09:30 AM",
// // //         event: "Order placed",
// // //         user: "John Doe",
// // //       },
// // //       {
// // //         date: "Apr 10, 2023",
// // //         time: "10:45 AM",
// // //         event: "Order confirmed",
// // //         user: "System",
// // //       },
// // //       {
// // //         date: "Apr 12, 2023",
// // //         time: "02:15 PM",
// // //         event: "Payment received",
// // //         user: "Finance Team",
// // //       },
// // //       {
// // //         date: "Apr 15, 2023",
// // //         time: "11:00 AM",
// // //         event: "Production started",
// // //         user: "TextilePro Manufacturing",
// // //       },
// // //     ],
// // //     documents: [
// // //       {
// // //         id: 1,
// // //         name: "Order Confirmation.pdf",
// // //         size: "0.8 MB",
// // //         date: "Apr 10, 2023",
// // //       },
// // //       { id: 2, name: "Invoice.pdf", size: "1.2 MB", date: "Apr 12, 2023" },
// // //       {
// // //         id: 3,
// // //         name: "Production Schedule.pdf",
// // //         size: "1.5 MB",
// // //         date: "Apr 15, 2023",
// // //       },
// // //     ],
// // //     messages: [
// // //       {
// // //         id: 1,
// // //         date: "Apr 11, 2023",
// // //         time: "14:22",
// // //         sender: "Sarah Johnson",
// // //         role: "Account Manager",
// // //         content:
// // //           "Hello John, I'm Sarah, your account manager for this order. I wanted to confirm that we've received your order and payment. Production is scheduled to begin on April 15th. Please let me know if you have any questions.",
// // //       },
// // //       {
// // //         id: 2,
// // //         date: "Apr 11, 2023",
// // //         time: "16:45",
// // //         sender: "John Doe",
// // //         role: "Customer",
// // //         content:
// // //           "Hi Sarah, thanks for the update. Could you please send me the production schedule? Also, I'm wondering if it's possible to get a sample of the final product before full production begins?",
// // //       },
// // //       {
// // //         id: 3,
// // //         date: "Apr 12, 2023",
// // //         time: "09:30",
// // //         sender: "Sarah Johnson",
// // //         role: "Account Manager",
// // //         content:
// // //           "Of course, I've attached the production schedule to this order. Regarding the sample, we can definitely arrange that. We'll send you a pre-production sample by express courier next week. Would that work for you?",
// // //       },
// // //     ],
// // //   };
// // // };

// // // export default function OrderDetailPage({
// // //   params,
// // // }: {
// // //   params: { id: string };
// // // })
// // // {
// // //   const router = useRouter();
// // //   const [newMessage, setNewMessage] = useState("");
// // //   const order = getOrderById(params.id);

// // //   const getStatusColor = (status: string) => {
// // //     switch (status.toLowerCase()) {
// // //       case "processing":
// // //         return "bg-blue-100 text-blue-800";
// // //       case "shipped":
// // //         return "bg-yellow-100 text-yellow-800";
// // //       case "delivered":
// // //         return "bg-green-100 text-green-800";
// // //       case "cancelled":
// // //         return "bg-red-100 text-red-800";
// // //       default:
// // //         return "bg-gray-100 text-gray-800";
// // //     }
// // //   };

// // //   const handleSendMessage = (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     // In a real app, you would send this to your API
// // //     console.log("Sending message:", newMessage);
// // //     setNewMessage("");
// // //     // You would then update the messages list with the new message
// // //   };

// // //   const handleCancelOrder = () => {
// // //     // In a real app, you would call your API to update the order status
// // //     if (
// // //       confirm(
// // //         "Are you sure you want to cancel this order? This action cannot be undone."
// // //       )
// // //     ) {
// // //       console.log("Cancelling order:", order.id);
// // //       alert(
// // //         "Order cancelled! In a real app, this would update the status and notify the supplier."
// // //       );
// // //     }
// // //   };

// // //   return (
// // //     <div className="space-y-8">
// // //       <div className="flex items-center justify-between">
// // //         <div className="flex items-center gap-4">
// // //           <Button variant="outline" size="icon" onClick={() => router.back()}>
// // //             <ArrowLeft className="h-4 w-4" />
// // //           </Button>
// // //           <div>
// // //             <h1 className="text-2xl font-bold">Order Details</h1>
// // //             <p className="text-gray-500">{order.order_number}</p>
// // //           </div>
// // //         </div>
// // //         <div className="flex items-center gap-4">
// // //           <Button variant="outline">
// // //             <Printer className="h-4 w-4 mr-2" />
// // //             Print Order
// // //           </Button>
// // //           <Button variant="outline">
// // //             <Download className="h-4 w-4 mr-2" />
// // //             Download Invoice
// // //           </Button>
// // //           {order.status.toLowerCase() === "processing" && (
// // //             <Button
// // //               variant="outline"
// // //               className="text-red-600 hover:text-red-700"
// // //               onClick={handleCancelOrder}
// // //             >
// // //               Cancel Order
// // //             </Button>
// // //           )}
// // //         </div>
// // //       </div>

// // //       <div className="grid grid-cols-3 gap-6">
// // //         <div className="col-span-3 lg:col-span-2 space-y-6">
// // //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// // //             <div className="p-6 border-b border-gray-200">
// // //               <div className="flex items-center justify-between">
// // //                 <h2 className="text-lg font-semibold">Order Summary</h2>
// // //                 <Badge className={`${getStatusColor(order.status)}`}>
// // //                   {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
// // //                 </Badge>
// // //               </div>
// // //             </div>
// // //             <div className="p-6">
// // //               <div className="grid grid-cols-2 gap-6">
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Order Date</p>
// // //                   <p className="font-medium">{order.date}</p>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Total Amount</p>
// // //                   <p className="font-medium">{order.total}</p>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Customer</p>
// // //                   <p className="font-medium">{order.customer.name}</p>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Supplier</p>
// // //                   <p className="font-medium">{order.supplier.name}</p>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// // //             <div className="p-6 border-b border-gray-200">
// // //               <h2 className="text-lg font-semibold">Products</h2>
// // //             </div>
// // //             <div className="overflow-x-auto">
// // //               <table className="w-full">
// // //                 <thead>
// // //                   <tr className="bg-gray-50">
// // //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                       Product
// // //                     </th>
// // //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                       Quantity
// // //                     </th>
// // //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                       Price
// // //                     </th>
// // //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                       Total
// // //                     </th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody className="divide-y divide-gray-200">
// // //                   {order.products.map((product) => (
// // //                     <tr key={product.id} className="hover:bg-gray-50">
// // //                       <td className="px-6 py-4 whitespace-nowrap">
// // //                         <div className="flex items-center">
// // //                           <div className="flex-shrink-0 h-10 w-10 rounded-md overflow-hidden">
// // //                             <Image
// // //                               src={product.image || "/placeholder.svg"}
// // //                               alt={product.name}
// // //                               width={40}
// // //                               height={40}
// // //                               className="object-cover"
// // //                             />
// // //                           </div>
// // //                           <div className="ml-4">
// // //                             <div className="text-sm font-medium">
// // //                               {product.name}
// // //                             </div>
// // //                             <div className="text-xs text-gray-500">
// // //                               Color: {product.color} | Size: {product.size}
// // //                             </div>
// // //                           </div>
// // //                         </div>
// // //                       </td>
// // //                       <td className="px-6 py-4 whitespace-nowrap text-sm">
// // //                         {product.quantity}
// // //                       </td>
// // //                       <td className="px-6 py-4 whitespace-nowrap text-sm">
// // //                         {product.price}
// // //                       </td>
// // //                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
// // //                         {product.total}
// // //                       </td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //                 <tfoot className="bg-gray-50">
// // //                   <tr>
// // //                     <td
// // //                       colSpan={2}
// // //                       className="px-6 py-4 whitespace-nowrap text-sm"
// // //                     ></td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
// // //                       Shipping
// // //                     </td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
// // //                       {order.shipping.shipping_cost}
// // //                     </td>
// // //                   </tr>
// // //                   <tr>
// // //                     <td
// // //                       colSpan={2}
// // //                       className="px-6 py-4 whitespace-nowrap text-sm"
// // //                     ></td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-bold">
// // //                       Total
// // //                     </td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-bold">
// // //                       {order.total}
// // //                     </td>
// // //                   </tr>
// // //                 </tfoot>
// // //               </table>
// // //             </div>
// // //           </div>

// // //           <Tabs defaultValue="shipping" className="w-full">
// // //             <TabsList className="grid w-full grid-cols-4">
// // //               <TabsTrigger value="shipping">Shipping</TabsTrigger>
// // //               <TabsTrigger value="payment">Payment</TabsTrigger>
// // //               <TabsTrigger value="messages">Messages</TabsTrigger>
// // //               <TabsTrigger value="timeline">Timeline</TabsTrigger>
// // //             </TabsList>

// // //             <TabsContent
// // //               value="shipping"
// // //               className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4"
// // //             >
// // //               <h3 className="text-lg font-semibold mb-4">
// // //                 Shipping Information
// // //               </h3>
// // //               <div className="grid grid-cols-2 gap-6">
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Shipping Method</p>
// // //                   <p className="font-medium">{order.shipping.method}</p>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Carrier</p>
// // //                   <p className="font-medium">{order.shipping.carrier}</p>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Tracking Number</p>
// // //                   <p className="font-medium">
// // //                     {order.shipping.tracking_number}
// // //                   </p>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Estimated Delivery</p>
// // //                   <p className="font-medium">
// // //                     {order.shipping.estimated_delivery}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //               <div className="mt-6">
// // //                 <p className="text-sm text-gray-500">Shipping Address</p>
// // //                 <div className="flex items-start mt-1">
// // //                   <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
// // //                   <p>{order.shipping.shipping_address}</p>
// // //                 </div>
// // //               </div>
// // //               <div className="mt-6 flex justify-between items-center">
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Current Status</p>
// // //                   <Badge className={`mt-1 ${getStatusColor(order.status)}`}>
// // //                     {order.status.charAt(0).toUpperCase() +
// // //                       order.status.slice(1)}
// // //                   </Badge>
// // //                 </div>
// // //                 <Button>
// // //                   <Truck className="h-4 w-4 mr-2" />
// // //                   Track Shipment
// // //                 </Button>
// // //               </div>
// // //             </TabsContent>

// // //             <TabsContent
// // //               value="payment"
// // //               className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4"
// // //             >
// // //               <h3 className="text-lg font-semibold mb-4">
// // //                 Payment Information
// // //               </h3>
// // //               <div className="grid grid-cols-2 gap-6">
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Payment Method</p>
// // //                   <p className="font-medium">{order.payment.method}</p>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Payment Status</p>
// // //                   <Badge className="bg-green-100 text-green-800">
// // //                     {order.payment.status}
// // //                   </Badge>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Payment Date</p>
// // //                   <p className="font-medium">{order.payment.date}</p>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Amount</p>
// // //                   <p className="font-medium">{order.payment.amount}</p>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Invoice Number</p>
// // //                   <p className="font-medium">{order.payment.invoice_number}</p>
// // //                 </div>
// // //               </div>
// // //               <div className="mt-6 flex justify-end">
// // //                 <Button variant="outline">
// // //                   <Download className="h-4 w-4 mr-2" />
// // //                   Download Invoice
// // //                 </Button>
// // //               </div>
// // //             </TabsContent>

// // //             <TabsContent
// // //               value="messages"
// // //               className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4"
// // //             >
// // //               <h3 className="text-lg font-semibold mb-4">Messages</h3>
// // //               <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">
// // //                 {order.messages.map((message) => (
// // //                   <div key={message.id} className="p-4 rounded-lg bg-gray-50">
// // //                     <div className="flex items-center justify-between mb-2">
// // //                       <div className="flex items-center">
// // //                         <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
// // //                           {message.sender.charAt(0)}
// // //                         </div>
// // //                         <div>
// // //                           <p className="font-medium">{message.sender}</p>
// // //                           <p className="text-xs text-gray-500">
// // //                             {message.role}
// // //                           </p>
// // //                         </div>
// // //                       </div>
// // //                       <p className="text-xs text-gray-500">
// // //                         {message.date} at {message.time}
// // //                       </p>
// // //                     </div>
// // //                     <p className="text-sm">{message.content}</p>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //               <form onSubmit={handleSendMessage} className="mt-4">
// // //                 <Textarea
// // //                   placeholder="Type your message here..."
// // //                   value={newMessage}
// // //                   onChange={(e) => setNewMessage(e.target.value)}
// // //                   className="min-h-[100px] mb-2"
// // //                 />
// // //                 <div className="flex justify-end">
// // //                   <Button type="submit">
// // //                     <Send className="h-4 w-4 mr-2" />
// // //                     Send Message
// // //                   </Button>
// // //                 </div>
// // //               </form>
// // //             </TabsContent>

// // //             <TabsContent
// // //               value="timeline"
// // //               className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4"
// // //             >
// // //               <h3 className="text-lg font-semibold mb-4">Order Timeline</h3>
// // //               <div className="space-y-4">
// // //                 {order.timeline.map((event, index) => (
// // //                   <div key={index} className="flex">
// // //                     <div className="mr-4 relative">
// // //                       <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
// // //                         {index === 0 ? (
// // //                           <Package className="h-4 w-4" />
// // //                         ) : index === order.timeline.length - 1 ? (
// // //                           <Truck className="h-4 w-4" />
// // //                         ) : (
// // //                           <Clock className="h-4 w-4" />
// // //                         )}
// // //                       </div>
// // //                       {index < order.timeline.length - 1 && (
// // //                         <div className="absolute top-8 bottom-0 left-1/2 w-0.5 -ml-px h-full bg-gray-200"></div>
// // //                       )}
// // //                     </div>
// // //                     <div className="pb-8">
// // //                       <div className="flex items-center">
// // //                         <p className="font-medium">{event.event}</p>
// // //                         <Badge className="ml-2 bg-gray-100 text-gray-800">
// // //                           {event.date}
// // //                         </Badge>
// // //                       </div>
// // //                       <div className="flex items-center text-sm text-gray-500 mt-1">
// // //                         <Clock className="h-3 w-3 mr-1" />
// // //                         <span>{event.time}</span>
// // //                         <span className="mx-2">•</span>
// // //                         <User className="h-3 w-3 mr-1" />
// // //                         <span>{event.user}</span>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </TabsContent>
// // //           </Tabs>
// // //         </div>

// // //         <div className="col-span-3 lg:col-span-1 space-y-6">
// // //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// // //             <div className="p-6 border-b border-gray-200">
// // //               <h2 className="text-lg font-semibold">Customer Information</h2>
// // //             </div>
// // //             <div className="p-6">
// // //               <div className="flex items-center mb-4">
// // //                 <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
// // //                   {order.customer.name.charAt(0)}
// // //                 </div>
// // //                 <div>
// // //                   <p className="font-medium">{order.customer.name}</p>
// // //                   <p className="text-sm text-gray-500">
// // //                     {order.customer.company}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //               <div className="space-y-3">
// // //                 <div className="flex items-center">
// // //                   <Mail className="h-4 w-4 text-gray-400 mr-2" />
// // //                   <p className="text-sm">{order.customer.email}</p>
// // //                 </div>
// // //                 <div className="flex items-center">
// // //                   <Phone className="h-4 w-4 text-gray-400 mr-2" />
// // //                   <p className="text-sm">{order.customer.phone}</p>
// // //                 </div>
// // //               </div>
// // //               <div className="mt-6">
// // //                 <Button variant="outline" className="w-full">
// // //                   <User className="h-4 w-4 mr-2" />
// // //                   View Customer Profile
// // //                 </Button>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// // //             <div className="p-6 border-b border-gray-200">
// // //               <h2 className="text-lg font-semibold">Supplier Information</h2>
// // //             </div>
// // //             <div className="p-6">
// // //               <div className="flex items-center mb-4">
// // //                 <div className="w-12 h-12 rounded-lg overflow-hidden mr-4">
// // //                   <Image
// // //                     src={order.supplier.logo || "/placeholder.svg"}
// // //                     alt={order.supplier.name}
// // //                     width={48}
// // //                     height={48}
// // //                     className="object-cover"
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <p className="font-medium">{order.supplier.name}</p>
// // //                   <p className="text-sm text-gray-500">
// // //                     {order.supplier.location}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //               <div className="mt-6">
// // //                 <Button variant="outline" className="w-full">
// // //                   <Link
// // //                     href={`/dashboard/suppliers/${order.supplier.id}`}
// // //                     className="flex items-center justify-center w-full"
// // //                   >
// // //                     <Building className="h-4 w-4 mr-2" />
// // //                     View Supplier Profile
// // //                   </Link>
// // //                 </Button>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// // //             <div className="p-6 border-b border-gray-200">
// // //               <h2 className="text-lg font-semibold">Documents</h2>
// // //             </div>
// // //             <div className="p-6">
// // //               <div className="space-y-3">
// // //                 {order.documents.map((doc) => (
// // //                   <div
// // //                     key={doc.id}
// // //                     className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
// // //                   >
// // //                     <div className="flex items-center">
// // //                       <FileText className="h-5 w-5 text-gray-400 mr-2" />
// // //                       <div>
// // //                         <p className="text-sm font-medium">{doc.name}</p>
// // //                         <p className="text-xs text-gray-500">
// // //                           {doc.size} • {doc.date}
// // //                         </p>
// // //                       </div>
// // //                     </div>
// // //                     <Button variant="ghost" size="sm">
// // //                       <Download className="h-4 w-4" />
// // //                     </Button>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// // //             <div className="p-6 border-b border-gray-200">
// // //               <h2 className="text-lg font-semibold">Order Actions</h2>
// // //             </div>
// // //             <div className="p-6">
// // //               <div className="space-y-3">
// // //                 <Button className="w-full">
// // //                   <MessageSquare className="h-4 w-4 mr-2" />
// // //                   Contact Supplier
// // //                 </Button>
// // //                 <Button variant="outline" className="w-full">
// // //                   <CreditCard className="h-4 w-4 mr-2" />
// // //                   View Payment Details
// // //                 </Button>
// // //                 <Button variant="outline" className="w-full">
// // //                   <Ship className="h-4 w-4 mr-2" />
// // //                   Track Shipment
// // //                 </Button>
// // //                 <Button variant="outline" className="w-full">
// // //                   <Calendar className="h-4 w-4 mr-2" />
// // //                   Schedule Follow-up
// // //                 </Button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // // Missing components for the page
// // // function Mail(props: any) {
// // //   return (
// // //     <svg
// // //       xmlns="http://www.w3.org/2000/svg"
// // //       width="24"
// // //       height="24"
// // //       viewBox="0 0 24 24"
// // //       fill="none"
// // //       stroke="currentColor"
// // //       strokeWidth="2"
// // //       strokeLinecap="round"
// // //       strokeLinejoin="round"
// // //       {...props}
// // //     >
// // //       <rect width="20" height="16" x="2" y="4" rx="2" />
// // //       <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
// // //     </svg>
// // //   );
// // // }

// // // function Phone(props: any) {
// // //   return (
// // //     <svg
// // //       xmlns="http://www.w3.org/2000/svg"
// // //       width="24"
// // //       height="24"
// // //       viewBox="0 0 24 24"
// // //       fill="none"
// // //       stroke="currentColor"
// // //       strokeWidth="2"
// // //       strokeLinecap="round"
// // //       strokeLinejoin="round"
// // //       {...props}
// // //     >
// // //       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
// // //     </svg>
// // //   );
// // // }

// // // function Building(props: any) {
// // //   return (
// // //     <svg
// // //       xmlns="http://www.w3.org/2000/svg"
// // //       width="24"
// // //       height="24"
// // //       viewBox="0 0 24 24"
// // //       fill="none"
// // //       stroke="currentColor"
// // //       strokeWidth="2"
// // //       strokeLinecap="round"
// // //       strokeLinejoin="round"
// // //       {...props}
// // //     >
// // //       <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
// // //       <path d="M9 22v-4h6v4" />
// // //       <path d="M8 6h.01" />
// // //       <path d="M16 6h.01" />
// // //       <path d="M12 6h.01" />
// // //       <path d="M12 10h.01" />
// // //       <path d="M12 14h.01" />
// // //       <path d="M16 10h.01" />
// // //       <path d="M16 14h.01" />
// // //       <path d="M8 10h.01" />
// // //       <path d="M8 14h.01" />
// // //     </svg>
// // //   );
// // // }

// // /////////////////////////////////////////
// // // "use client";

// // // import type React from "react";
// // // import { useState } from "react";
// // // import { use } from "react";
// // // import { useRouter } from "next/navigation";
// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import {
// // //   ArrowLeft,
// // //   Calendar,
// // //   Clock,
// // //   CreditCard,
// // //   Download,
// // //   FileText,
// // //   MapPin,
// // //   MessageSquare,
// // //   Package,
// // //   Printer,
// // //   Send,
// // //   Ship,
// // //   Truck,
// // //   User,
// // // } from "lucide-react";
// // // import { Button } from "@/components/ui/button";
// // // import { Textarea } from "@/components/ui/textarea";
// // // import { Badge } from "@/components/ui/badge";
// // // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// // // const getOrderById = (id: string) => {
// // //   return {
// // //     id: id,
// // //     order_number: `ORD-2023-${id}`,
// // //     date: "Apr 10, 2023",
// // //     status: "processing",
// // //     total: "$4,500.00",
// // //     customer: {
// // //       name: "John Doe",
// // //       email: "john.doe@example.com",
// // //       company: "Fashion Brand Inc.",
// // //       phone: "+1 (555) 123-4567",
// // //     },
// // //     supplier: {
// // //       id: "SUP-001",
// // //       name: "TextilePro Manufacturing",
// // //       location: "Shanghai, China",
// // //       logo: "/placeholder.svg?height=100&width=100&text=TP",
// // //     },
// // //     products: [
// // //       {
// // //         id: 1,
// // //         name: "Organic Cotton T-Shirts",
// // //         image: "/placeholder.svg?height=100&width=100&text=Product",
// // //         quantity: 500,
// // //         price: "$8.00",
// // //         total: "$4,000.00",
// // //         color: "Multiple (Black, White, Navy)",
// // //         size: "S, M, L, XL",
// // //       },
// // //     ],
// // //     shipping: {
// // //       method: "Sea",
// // //       carrier: "Maersk",
// // //       tracking_number: "MSK12345678",
// // //       estimated_delivery: "Jun 15, 2023",
// // //       shipping_address:
// // //         "123 Commerce St, Suite 400, Los Angeles, CA 90012, USA",
// // //       shipping_cost: "$500.00",
// // //     },
// // //     payment: {
// // //       method: "Bank Transfer (T/T)",
// // //       status: "Paid",
// // //       date: "Apr 12, 2023",
// // //       amount: "$4,500.00",
// // //       invoice_number: "INV-2023-4567",
// // //     },
// // //     timeline: [
// // //       {
// // //         date: "Apr 10, 2023",
// // //         time: "09:30 AM",
// // //         event: "Order placed",
// // //         user: "John Doe",
// // //       },
// // //       {
// // //         date: "Apr 10, 2023",
// // //         time: "10:45 AM",
// // //         event: "Order confirmed",
// // //         user: "System",
// // //       },
// // //       {
// // //         date: "Apr 12, 2023",
// // //         time: "02:15 PM",
// // //         event: "Payment received",
// // //         user: "Finance Team",
// // //       },
// // //       {
// // //         date: "Apr 15, 2023",
// // //         time: "11:00 AM",
// // //         event: "Production started",
// // //         user: "TextilePro Manufacturing",
// // //       },
// // //     ],
// // //     documents: [
// // //       {
// // //         id: 1,
// // //         name: "Order Confirmation.pdf",
// // //         size: "0.8 MB",
// // //         date: "Apr 10, 2023",
// // //       },
// // //       { id: 2, name: "Invoice.pdf", size: "1.2 MB", date: "Apr 12, 2023" },
// // //       {
// // //         id: 3,
// // //         name: "Production Schedule.pdf",
// // //         size: "1.5 MB",
// // //         date: "Apr 15, 2023",
// // //       },
// // //     ],
// // //     messages: [
// // //       {
// // //         id: 1,
// // //         date: "Apr 11, 2023",
// // //         time: "14:22",
// // //         sender: "Sarah Johnson",
// // //         role: "Account Manager",
// // //         content:
// // //           "Hello John, I'm Sarah, your account manager for this order. I wanted to confirm that we've received your order and payment. Production is scheduled to begin on April 15th. Please let me know if you have any questions.",
// // //       },
// // //       {
// // //         id: 2,
// // //         date: "Apr 11, 2023",
// // //         time: "16:45",
// // //         sender: "John Doe",
// // //         role: "Customer",
// // //         content:
// // //           "Hi Sarah, thanks for the update. Could you please send me the production schedule? Also, I'm wondering if it's possible to get a sample of the final product before full production begins?",
// // //       },
// // //       {
// // //         id: 3,
// // //         date: "Apr 12, 2023",
// // //         time: "09:30",
// // //         sender: "Sarah Johnson",
// // //         role: "Account Manager",
// // //         content:
// // //           "Of course, I've attached the production schedule to this order. Regarding the sample, we can definitely arrange that. We'll send you a pre-production sample by express courier next week. Would that work for you?",
// // //       },
// // //     ],
// // //   };
// // // };

// // // export default function OrderDetailPage({
// // //   params,
// // // }: {
// // //   params: Promise<{ id: string }>;
// // // }) {
// // //   const { id } = use(params); // 👈 Correct way to access param
// // //   const router = useRouter();
// // //   const [newMessage, setNewMessage] = useState("");

// // //   const order = getOrderById(id); // now safe to use id

// // //   const getStatusColor = (status: string) => {
// // //     switch (status.toLowerCase()) {
// // //       case "processing":
// // //         return "bg-blue-100 text-blue-800";
// // //       case "shipped":
// // //         return "bg-yellow-100 text-yellow-800";
// // //       case "delivered":
// // //         return "bg-green-100 text-green-800";
// // //       case "cancelled":
// // //         return "bg-red-100 text-red-800";
// // //       default:
// // //         return "bg-gray-100 text-gray-800";
// // //     }
// // //   };

// // //   const handleSendMessage = (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     // In a real app, you would send this to your API
// // //     console.log("Sending message:", newMessage);
// // //     setNewMessage("");
// // //     // You would then update the messages list with the new message
// // //   };

// // //   const handleCancelOrder = () => {
// // //     // In a real app, you would call your API to update the order status
// // //     if (
// // //       confirm(
// // //         "Are you sure you want to cancel this order? This action cannot be undone."
// // //       )
// // //     ) {
// // //       console.log("Cancelling order:", order.id);
// // //       alert(
// // //         "Order cancelled! In a real app, this would update the status and notify the supplier."
// // //       );
// // //     }
// // //   };

// // //   return (
// // //     <div className="space-y-8">
// // //       <div className="flex items-center justify-between">
// // //         <div className="flex items-center gap-4">
// // //           <Button variant="outline" size="icon" onClick={() => router.back()}>
// // //             <ArrowLeft className="h-4 w-4" />
// // //           </Button>
// // //           <div>
// // //             <h1 className="text-2xl font-bold">Order Details</h1>
// // //             <p className="text-gray-500">{order.order_number}</p>
// // //           </div>
// // //         </div>
// // //         <div className="flex items-center gap-4">
// // //           <Button variant="outline">
// // //             <Printer className="h-4 w-4 mr-2" />
// // //             Print Order
// // //           </Button>
// // //           <Button variant="outline">
// // //             <Download className="h-4 w-4 mr-2" />
// // //             Download Invoice
// // //           </Button>
// // //           {order.status.toLowerCase() === "processing" && (
// // //             <Button
// // //               variant="outline"
// // //               className="text-red-600 hover:text-red-700"
// // //               onClick={handleCancelOrder}
// // //             >
// // //               Cancel Order
// // //             </Button>
// // //           )}
// // //         </div>
// // //       </div>

// // //       <div className="grid grid-cols-3 gap-6">
// // //         <div className="col-span-3 lg:col-span-2 space-y-6">
// // //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// // //             <div className="p-6 border-b border-gray-200">
// // //               <div className="flex items-center justify-between">
// // //                 <h2 className="text-lg font-semibold">Order Summary</h2>
// // //                 <Badge className={`${getStatusColor(order.status)}`}>
// // //                   {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
// // //                 </Badge>
// // //               </div>
// // //             </div>
// // //             <div className="p-6">
// // //               <div className="grid grid-cols-2 gap-6">
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Order Date</p>
// // //                   <p className="font-medium">{order.date}</p>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Total Amount</p>
// // //                   <p className="font-medium">{order.total}</p>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Customer</p>
// // //                   <p className="font-medium">{order.customer.name}</p>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Supplier</p>
// // //                   <p className="font-medium">{order.supplier.name}</p>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// // //             <div className="p-6 border-b border-gray-200">
// // //               <h2 className="text-lg font-semibold">Products</h2>
// // //             </div>
// // //             <div className="overflow-x-auto">
// // //               <table className="w-full">
// // //                 <thead>
// // //                   <tr className="bg-gray-50">
// // //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                       Product
// // //                     </th>
// // //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                       Quantity
// // //                     </th>
// // //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                       Price
// // //                     </th>
// // //                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // //                       Total
// // //                     </th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody className="divide-y divide-gray-200">
// // //                   {order.products.map((product) => (
// // //                     <tr key={product.id} className="hover:bg-gray-50">
// // //                       <td className="px-6 py-4 whitespace-nowrap">
// // //                         <div className="flex items-center">
// // //                           <div className="flex-shrink-0 h-10 w-10 rounded-md overflow-hidden">
// // //                             <Image
// // //                               src={product.image || "/placeholder.svg"}
// // //                               alt={product.name}
// // //                               width={40}
// // //                               height={40}
// // //                               className="object-cover"
// // //                             />
// // //                           </div>
// // //                           <div className="ml-4">
// // //                             <div className="text-sm font-medium">
// // //                               {product.name}
// // //                             </div>
// // //                             <div className="text-xs text-gray-500">
// // //                               Color: {product.color} | Size: {product.size}
// // //                             </div>
// // //                           </div>
// // //                         </div>
// // //                       </td>
// // //                       <td className="px-6 py-4 whitespace-nowrap text-sm">
// // //                         {product.quantity}
// // //                       </td>
// // //                       <td className="px-6 py-4 whitespace-nowrap text-sm">
// // //                         {product.price}
// // //                       </td>
// // //                       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
// // //                         {product.total}
// // //                       </td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //                 <tfoot className="bg-gray-50">
// // //                   <tr>
// // //                     <td
// // //                       colSpan={2}
// // //                       className="px-6 py-4 whitespace-nowrap text-sm"
// // //                     ></td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
// // //                       Shipping
// // //                     </td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
// // //                       {order.shipping.shipping_cost}
// // //                     </td>
// // //                   </tr>
// // //                   <tr>
// // //                     <td
// // //                       colSpan={2}
// // //                       className="px-6 py-4 whitespace-nowrap text-sm"
// // //                     ></td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-bold">
// // //                       Total
// // //                     </td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-bold">
// // //                       {order.total}
// // //                     </td>
// // //                   </tr>
// // //                 </tfoot>
// // //               </table>
// // //             </div>
// // //           </div>

// // //           <Tabs defaultValue="shipping" className="w-full">
// // //             <TabsList className="grid w-full grid-cols-4">
// // //               <TabsTrigger value="shipping">Shipping</TabsTrigger>
// // //               <TabsTrigger value="payment">Payment</TabsTrigger>
// // //               <TabsTrigger value="messages">Messages</TabsTrigger>
// // //               <TabsTrigger value="timeline">Timeline</TabsTrigger>
// // //             </TabsList>

// // //             <TabsContent
// // //               value="shipping"
// // //               className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4"
// // //             >
// // //               <h3 className="text-lg font-semibold mb-4">
// // //                 Shipping Information
// // //               </h3>
// // //               <div className="grid grid-cols-2 gap-6">
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Shipping Method</p>
// // //                   <p className="font-medium">{order.shipping.method}</p>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Carrier</p>
// // //                   <p className="font-medium">{order.shipping.carrier}</p>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Tracking Number</p>
// // //                   <p className="font-medium">
// // //                     {order.shipping.tracking_number}
// // //                   </p>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Estimated Delivery</p>
// // //                   <p className="font-medium">
// // //                     {order.shipping.estimated_delivery}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //               <div className="mt-6">
// // //                 <p className="text-sm text-gray-500">Shipping Address</p>
// // //                 <div className="flex items-start mt-1">
// // //                   <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
// // //                   <p>{order.shipping.shipping_address}</p>
// // //                 </div>
// // //               </div>
// // //               <div className="mt-6 flex justify-between items-center">
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Current Status</p>
// // //                   <Badge className={`mt-1 ${getStatusColor(order.status)}`}>
// // //                     {order.status.charAt(0).toUpperCase() +
// // //                       order.status.slice(1)}
// // //                   </Badge>
// // //                 </div>
// // //                 <Button>
// // //                   <Truck className="h-4 w-4 mr-2" />
// // //                   Track Shipment
// // //                 </Button>
// // //               </div>
// // //             </TabsContent>

// // //             <TabsContent
// // //               value="payment"
// // //               className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4"
// // //             >
// // //               <h3 className="text-lg font-semibold mb-4">
// // //                 Payment Information
// // //               </h3>
// // //               <div className="grid grid-cols-2 gap-6">
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Payment Method</p>
// // //                   <p className="font-medium">{order.payment.method}</p>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Payment Status</p>
// // //                   <Badge className="bg-green-100 text-green-800">
// // //                     {order.payment.status}
// // //                   </Badge>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Payment Date</p>
// // //                   <p className="font-medium">{order.payment.date}</p>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Amount</p>
// // //                   <p className="font-medium">{order.payment.amount}</p>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Invoice Number</p>
// // //                   <p className="font-medium">{order.payment.invoice_number}</p>
// // //                 </div>
// // //               </div>
// // //               <div className="mt-6 flex justify-end">
// // //                 <Button variant="outline">
// // //                   <Download className="h-4 w-4 mr-2" />
// // //                   Download Invoice
// // //                 </Button>
// // //               </div>
// // //             </TabsContent>

// // //             <TabsContent
// // //               value="messages"
// // //               className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4"
// // //             >
// // //               <h3 className="text-lg font-semibold mb-4">Messages</h3>
// // //               <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">
// // //                 {order.messages.map((message) => (
// // //                   <div key={message.id} className="p-4 rounded-lg bg-gray-50">
// // //                     <div className="flex items-center justify-between mb-2">
// // //                       <div className="flex items-center">
// // //                         <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
// // //                           {message.sender.charAt(0)}
// // //                         </div>
// // //                         <div>
// // //                           <p className="font-medium">{message.sender}</p>
// // //                           <p className="text-xs text-gray-500">
// // //                             {message.role}
// // //                           </p>
// // //                         </div>
// // //                       </div>
// // //                       <p className="text-xs text-gray-500">
// // //                         {message.date} at {message.time}
// // //                       </p>
// // //                     </div>
// // //                     <p className="text-sm">{message.content}</p>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //               <form onSubmit={handleSendMessage} className="mt-4">
// // //                 <Textarea
// // //                   placeholder="Type your message here..."
// // //                   value={newMessage}
// // //                   onChange={(e) => setNewMessage(e.target.value)}
// // //                   className="min-h-[100px] mb-2"
// // //                 />
// // //                 <div className="flex justify-end">
// // //                   <Button type="submit">
// // //                     <Send className="h-4 w-4 mr-2" />
// // //                     Send Message
// // //                   </Button>
// // //                 </div>
// // //               </form>
// // //             </TabsContent>

// // //             <TabsContent
// // //               value="timeline"
// // //               className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4"
// // //             >
// // //               <h3 className="text-lg font-semibold mb-4">Order Timeline</h3>
// // //               <div className="space-y-4">
// // //                 {order.timeline.map((event, index) => (
// // //                   <div key={index} className="flex">
// // //                     <div className="mr-4 relative">
// // //                       <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
// // //                         {index === 0 ? (
// // //                           <Package className="h-4 w-4" />
// // //                         ) : index === order.timeline.length - 1 ? (
// // //                           <Truck className="h-4 w-4" />
// // //                         ) : (
// // //                           <Clock className="h-4 w-4" />
// // //                         )}
// // //                       </div>
// // //                       {index < order.timeline.length - 1 && (
// // //                         <div className="absolute top-8 bottom-0 left-1/2 w-0.5 -ml-px h-full bg-gray-200"></div>
// // //                       )}
// // //                     </div>
// // //                     <div className="pb-8">
// // //                       <div className="flex items-center">
// // //                         <p className="font-medium">{event.event}</p>
// // //                         <Badge className="ml-2 bg-gray-100 text-gray-800">
// // //                           {event.date}
// // //                         </Badge>
// // //                       </div>
// // //                       <div className="flex items-center text-sm text-gray-500 mt-1">
// // //                         <Clock className="h-3 w-3 mr-1" />
// // //                         <span>{event.time}</span>
// // //                         <span className="mx-2">•</span>
// // //                         <User className="h-3 w-3 mr-1" />
// // //                         <span>{event.user}</span>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </TabsContent>
// // //           </Tabs>
// // //         </div>

// // //         <div className="col-span-3 lg:col-span-1 space-y-6">
// // //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// // //             <div className="p-6 border-b border-gray-200">
// // //               <h2 className="text-lg font-semibold">Customer Information</h2>
// // //             </div>
// // //             <div className="p-6">
// // //               <div className="flex items-center mb-4">
// // //                 <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
// // //                   {order.customer.name.charAt(0)}
// // //                 </div>
// // //                 <div>
// // //                   <p className="font-medium">{order.customer.name}</p>
// // //                   <p className="text-sm text-gray-500">
// // //                     {order.customer.company}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //               <div className="space-y-3">
// // //                 <div className="flex items-center">
// // //                   <Mail className="h-4 w-4 text-gray-400 mr-2" />
// // //                   <p className="text-sm">{order.customer.email}</p>
// // //                 </div>
// // //                 <div className="flex items-center">
// // //                   <Phone className="h-4 w-4 text-gray-400 mr-2" />
// // //                   <p className="text-sm">{order.customer.phone}</p>
// // //                 </div>
// // //               </div>
// // //               <div className="mt-6">
// // //                 <Button variant="outline" className="w-full">
// // //                   <User className="h-4 w-4 mr-2" />
// // //                   View Customer Profile
// // //                 </Button>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// // //             <div className="p-6 border-b border-gray-200">
// // //               <h2 className="text-lg font-semibold">Supplier Information</h2>
// // //             </div>
// // //             <div className="p-6">
// // //               <div className="flex items-center mb-4">
// // //                 <div className="w-12 h-12 rounded-lg overflow-hidden mr-4">
// // //                   <Image
// // //                     src={order.supplier.logo || "/placeholder.svg"}
// // //                     alt={order.supplier.name}
// // //                     width={48}
// // //                     height={48}
// // //                     className="object-cover"
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <p className="font-medium">{order.supplier.name}</p>
// // //                   <p className="text-sm text-gray-500">
// // //                     {order.supplier.location}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //               <div className="mt-6">
// // //                 <Button variant="outline" className="w-full">
// // //                   <Link
// // //                     href={`/dashboard/suppliers/${order.supplier.id}`}
// // //                     className="flex items-center justify-center w-full"
// // //                   >
// // //                     <Building className="h-4 w-4 mr-2" />
// // //                     View Supplier Profile
// // //                   </Link>
// // //                 </Button>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// // //             <div className="p-6 border-b border-gray-200">
// // //               <h2 className="text-lg font-semibold">Documents</h2>
// // //             </div>
// // //             <div className="p-6">
// // //               <div className="space-y-3">
// // //                 {order.documents.map((doc) => (
// // //                   <div
// // //                     key={doc.id}
// // //                     className="flex items-center justify-between p-3 bg-gray-50 rounded-md"
// // //                   >
// // //                     <div className="flex items-center">
// // //                       <FileText className="h-5 w-5 text-gray-400 mr-2" />
// // //                       <div>
// // //                         <p className="text-sm font-medium">{doc.name}</p>
// // //                         <p className="text-xs text-gray-500">
// // //                           {doc.size} • {doc.date}
// // //                         </p>
// // //                       </div>
// // //                     </div>
// // //                     <Button variant="ghost" size="sm">
// // //                       <Download className="h-4 w-4" />
// // //                     </Button>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
// // //             <div className="p-6 border-b border-gray-200">
// // //               <h2 className="text-lg font-semibold">Order Actions</h2>
// // //             </div>
// // //             <div className="p-6">
// // //               <div className="space-y-3">
// // //                 <Button className="w-full">
// // //                   <MessageSquare className="h-4 w-4 mr-2" />
// // //                   Contact Supplier
// // //                 </Button>
// // //                 <Button variant="outline" className="w-full">
// // //                   <CreditCard className="h-4 w-4 mr-2" />
// // //                   View Payment Details
// // //                 </Button>
// // //                 <Button variant="outline" className="w-full">
// // //                   <Ship className="h-4 w-4 mr-2" />
// // //                   Track Shipment
// // //                 </Button>
// // //                 <Button variant="outline" className="w-full">
// // //                   <Calendar className="h-4 w-4 mr-2" />
// // //                   Schedule Follow-up
// // //                 </Button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // // Missing components for the page
// // // function Mail(props: any) {
// // //   return (
// // //     <svg
// // //       xmlns="http://www.w3.org/2000/svg"
// // //       width="24"
// // //       height="24"
// // //       viewBox="0 0 24 24"
// // //       fill="none"
// // //       stroke="currentColor"
// // //       strokeWidth="2"
// // //       strokeLinecap="round"
// // //       strokeLinejoin="round"
// // //       {...props}
// // //     >
// // //       <rect width="20" height="16" x="2" y="4" rx="2" />
// // //       <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
// // //     </svg>
// // //   );
// // // }

// // // function Phone(props: any) {
// // //   return (
// // //     <svg
// // //       xmlns="http://www.w3.org/2000/svg"
// // //       width="24"
// // //       height="24"
// // //       viewBox="0 0 24 24"
// // //       fill="none"
// // //       stroke="currentColor"
// // //       strokeWidth="2"
// // //       strokeLinecap="round"
// // //       strokeLinejoin="round"
// // //       {...props}
// // //     >
// // //       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
// // //     </svg>
// // //   );
// // // }

// // // function Building(props: any) {
// // //   return (
// // //     <svg
// // //       xmlns="http://www.w3.org/2000/svg"
// // //       width="24"
// // //       height="24"
// // //       viewBox="0 0 24 24"
// // //       fill="none"
// // //       stroke="currentColor"
// // //       strokeWidth="2"
// // //       strokeLinecap="round"
// // //       strokeLinejoin="round"
// // //       {...props}
// // //     >
// // //       <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
// // //       <path d="M9 22v-4h6v4" />
// // //       <path d="M8 6h.01" />
// // //       <path d="M16 6h.01" />
// // //       <path d="M12 6h.01" />
// // //       <path d="M12 10h.01" />
// // //       <path d="M12 14h.01" />
// // //       <path d="M16 10h.01" />
// // //       <path d="M16 14h.01" />
// // //       <path d="M8 10h.01" />
// // //       <path d="M8 14h.01" />
// // //     </svg>
// // //   );
// // // }

// // // 2//////////////////////
// // "use client";

// // import React, { useState, useEffect } from "react";
// // import { use } from "react";
// // import { useRouter } from "next/navigation";
// // import Image from "next/image";
// // import Link from "next/link";
// // import {
// //   ArrowLeft,
// //   Calendar,
// //   Clock,
// //   CreditCard,
// //   Download,
// //   FileText,
// //   MapPin,
// //   MessageSquare,
// //   Package,
// //   Printer,
// //   Send,
// //   Ship,
// //   Truck,
// //   User,
// // } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { Textarea } from "@/components/ui/textarea";
// // import { Badge } from "@/components/ui/badge";
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// // function Mail(props: any) {
// //   return (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" {...props}>
// //       <rect width="20" height="16" x="2" y="4" rx="2" />
// //       <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
// //     </svg>
// //   );
// // }

// // function Phone(props: any) {
// //   return (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" {...props}>
// //       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
// //     </svg>
// //   );
// // }

// // function Building(props: any) {
// //   return (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" {...props}>
// //       <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
// //       <path d="M9 22v-4h6v4" />
// //       <path d="M8 6h.01" />
// //       <path d="M16 6h.01" />
// //       <path d="M12 6h.01" />
// //       <path d="M12 10h.01" />
// //       <path d="M12 14h.01" />
// //       <path d="M16 10h.01" />
// //       <path d="M16 14h.01" />
// //       <path d="M8 10h.01" />
// //       <path d="M8 14h.01" />
// //     </svg>
// //   );
// // }

// // export default function OrderDetailPage({
// //   params,
// // }: {
// //   params: Promise<{ id: string }>;
// // }) {
// //   const { id } = use(params);
// //   const router = useRouter();
// //   const [order, setOrder] = useState<any>(null);
// //   const [newMessage, setNewMessage] = useState("");

// //   useEffect(() => {
// //     const fetchOrder = async () => {
// //       try {
// //         const res = await fetch(`https://localhost:8000/orders/${id}/`);
// //         const data = await res.json();
// //         setOrder(data);
// //       } catch (err) {
// //         console.error("Failed to fetch order:", err);
// //       }
// //     };

// //     fetchOrder();
// //   }, [id]);

// //   const getStatusColor = (status: string) => {
// //     switch (status.toLowerCase()) {
// //       case "processing":
// //         return "bg-blue-100 text-blue-800";
// //       case "shipped":
// //         return "bg-yellow-100 text-yellow-800";
// //       case "delivered":
// //         return "bg-green-100 text-green-800";
// //       case "cancelled":
// //         return "bg-red-100 text-red-800";
// //       default:
// //         return "bg-gray-100 text-gray-800";
// //     }
// //   };

// //   const handleSendMessage = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     console.log("Sending message:", newMessage);
// //     setNewMessage("");
// //   };

// //   if (!order) return <div className="p-6">Loading order...</div>;

// //   return (
// //     <div className="space-y-6">
// //       <div className="flex items-center justify-between">
// //         <div className="flex items-center gap-4">
// //           <Button variant="outline" size="icon" onClick={() => router.back()}>
// //             <ArrowLeft className="h-4 w-4" />
// //           </Button>
// //           <div>
// //             <h1 className="text-2xl font-bold">Order Details</h1>
// //             <p className="text-gray-500">{order.order_number}</p>
// //           </div>
// //         </div>
// //         <div className="flex items-center gap-2">
// //           <Button variant="outline">
// //             <Printer className="h-4 w-4 mr-2" />
// //             Print
// //           </Button>
// //           <Button variant="outline">
// //             <Download className="h-4 w-4 mr-2" />
// //             Invoice
// //           </Button>
// //         </div>
// //       </div>

// //       {/* 🧾 Summary */}
// //       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
// //         <div>
// //           <p className="text-sm text-gray-500">Order Date</p>
// //           <p className="font-medium">
// //             {new Date(order.created_at).toDateString()}
// //           </p>
// //         </div>
// //         <div>
// //           <p className="text-sm text-gray-500">Total</p>
// //           <p className="font-medium">${order.grand_total}</p>
// //         </div>
// //         <div>
// //           <p className="text-sm text-gray-500">Customer</p>
// //           <p className="font-medium">{order.customer.name}</p>
// //         </div>
// //         <div>
// //           <p className="text-sm text-gray-500">Supplier</p>
// //           <p className="font-medium">{order.supplier?.name}</p>
// //         </div>
// //       </div>

// //       {/* 📦 Product */}
// //       <div className="bg-white border rounded-md p-6">
// //         <h2 className="font-semibold text-lg mb-4">Products</h2>
// //         {order.details ? (
// //           <div className="flex justify-between items-center">
// //             <div>
// //               <p className="font-medium">{order.details.product_name}</p>
// //               <p className="text-sm text-gray-500">
// //                 {order.details.color} | Size: {order.details.size}
// //               </p>
// //             </div>
// //             <div className="text-right">
// //               <p>
// //                 Qty: <b>{order.quantity}</b>
// //               </p>
// //               <p>${order.unit_price} each</p>
// //               <p className="font-bold">${order.total_price}</p>
// //             </div>
// //           </div>
// //         ) : (
// //           <p>No product details found.</p>
// //         )}
// //       </div>

// //       {/* 🚚 Shipping */}
// //       <div className="bg-white border rounded-md p-6">
// //         <h2 className="font-semibold text-lg mb-4">Shipping Info</h2>
// //         {order.shipping ? (
// //           <div className="grid grid-cols-2 gap-4">
// //             <p>
// //               <b>Method:</b> {order.shipping.method}
// //             </p>
// //             <p>
// //               <b>Carrier:</b> {order.shipping.carrier}
// //             </p>
// //             <p>
// //               <b>Tracking:</b> {order.shipping.tracking_number}
// //             </p>
// //             <p>
// //               <b>ETA:</b>{" "}
// //               {order.shipping.estimated_delivery
// //                 ? new Date(order.shipping.estimated_delivery).toDateString()
// //                 : "N/A"}
// //             </p>
// //             <p className="col-span-2">
// //               <b>Address:</b> {order.shipping.shipping_address}
// //             </p>
// //           </div>
// //         ) : (
// //           <p>No shipping info.</p>
// //         )}
// //       </div>

// //       {/* 📜 Events */}
// //       <div className="bg-white border rounded-md p-6">
// //         <h2 className="font-semibold text-lg mb-4">Order Timeline</h2>
// //         {order.events.length > 0 ? (
// //           <ul className="space-y-2">
// //             {order.events.map((e: any, i: number) => (
// //               <li key={i} className="text-sm">
// //                 <Clock className="inline w-4 h-4 mr-1" />
// //                 {e.date} {e.time} — <b>{e.event}</b> by {e.user}
// //               </li>
// //             ))}
// //           </ul>
// //         ) : (
// //           <p>No events yet.</p>
// //         )}
// //       </div>

// //       {/* 📂 Documents */}
// //       <div className="bg-white border rounded-md p-6">
// //         <h2 className="font-semibold text-lg mb-4">Documents</h2>
// //         {order.documents.length > 0 ? (
// //           <ul className="space-y-2">
// //             {order.documents.map((doc: any) => (
// //               <li key={doc.id} className="flex justify-between">
// //                 <div>
// //                   <FileText className="inline w-4 h-4 mr-2" />
// //                   {doc.name} ({doc.size})
// //                 </div>
// //                 <Button variant="ghost" size="sm">
// //                   <Download className="h-4 w-4" />
// //                 </Button>
// //               </li>
// //             ))}
// //           </ul>
// //         ) : (
// //           <p>No documents uploaded.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // aalmot done code
// "use client";

// import { use } from "react";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   ArrowLeft,
//   Printer,
//   Download,
//   Truck,
//   User,
//   MapPin,
//   Send,
//   FileText,
//   CreditCard,
//   Ship,
//   Calendar,
//   MessageSquare,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// export default function OrderDetailPage({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = use(params);
//   const router = useRouter();
//   const [order, setOrder] = useState<any | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [newMessage, setNewMessage] = useState("");

//   useEffect(() => {
//     const fetchOrder = async () => {
//       const token = localStorage.getItem("accessToken");
//       try {
//         const res = await fetch(`http://localhost:8000/orders/${id}/`, {
//           headers: {
//             Authorization: `JWT ${token}`,
//             "Content-Type": "application/json",
//           },
//         });

//         if (!res.ok) throw new Error("Failed to fetch order");

//         const data = await res.json();
//         setOrder(data);
//       } catch (err) {
//         console.error("Error fetching order:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrder();
//   }, [id]);

//   const getStatusColor = (status: string) => {
//     switch (status.toLowerCase()) {
//       case "processing":
//         return "bg-blue-100 text-blue-800";
//       case "shipped":
//         return "bg-yellow-100 text-yellow-800";
//       case "delivered":
//         return "bg-green-100 text-green-800";
//       case "cancelled":
//         return "bg-red-100 text-red-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   if (loading) return <div className="p-6">Loading order...</div>;
//   if (!order) return <div className="p-6 text-red-600">Order not found.</div>;

//   return (
//     <div className="p-6 space-y-8">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <Button variant="outline" size="icon" onClick={() => router.back()}>
//             <ArrowLeft className="h-4 w-4" />
//           </Button>
//           <div>
//             <h1 className="text-2xl font-bold">Order Details</h1>
//             <p className="text-gray-500">{order.order_number}</p>
//           </div>
//         </div>
//         <div className="flex gap-4">
//           <Button variant="outline">
//             <Printer className="h-4 w-4 mr-2" /> Print
//           </Button>
//           <Button variant="outline">
//             <Download className="h-4 w-4 mr-2" /> Invoice
//           </Button>
//         </div>
//       </div>

//       <div className="grid grid-cols-3 gap-6">
//         <div className="col-span-3 lg:col-span-2 space-y-6">
//           <div className="bg-white p-6 rounded-lg border shadow-sm">
//             <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
//             <div className="grid grid-cols-2 gap-6">
//               <div>
//                 <p className="text-sm text-gray-500">Order Date</p>
//                 <p className="font-medium">
//                   {new Date(order.created_at).toDateString()}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Total</p>
//                 <p className="font-medium">${order.grand_total}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Customer</p>
//                 <p className="font-medium">{order.customer.name}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Supplier</p>
//                 <p className="font-medium">{order.supplier.name}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Status</p>
//                 <Badge className={`${getStatusColor(order.status)}`}>
//                   {order.status}
//                 </Badge>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-lg border shadow-sm">
//             <h2 className="text-lg font-semibold mb-4">Products</h2>
//             <p>
//               {order.product} ({order.quantity} units)
//             </p>
//           </div>

//           <Tabs defaultValue="shipping">
//             <TabsList className="grid grid-cols-2 w-full mb-4">
//               <TabsTrigger value="shipping">Shipping</TabsTrigger>
//               <TabsTrigger value="documents">Documents</TabsTrigger>
//             </TabsList>

//             <TabsContent value="shipping">
//               <div className="bg-white p-6 rounded-lg border shadow-sm">
//                 <h2 className="text-lg font-semibold mb-4">Shipping Info</h2>
//                 <p>
//                   <strong>Method:</strong> {order.shipping.method}
//                 </p>
//                 <p>
//                   <strong>Carrier:</strong> {order.shipping.carrier}
//                 </p>
//                 <p>
//                   <strong>Tracking:</strong> {order.shipping.tracking_number}
//                 </p>
//                 <p>
//                   <strong>ETA:</strong> {order.shipping.estimated_delivery}
//                 </p>
//                 <p className="mt-2 flex items-center">
//                   <MapPin className="h-4 w-4 mr-1" />{" "}
//                   {order.shipping.shipping_address}
//                 </p>
//               </div>
//             </TabsContent>

//             <TabsContent value="documents">
//               <div className="bg-white p-6 rounded-lg border shadow-sm space-y-3">
//                 <h2 className="text-lg font-semibold">Documents</h2>
//                 {order.documents.length ? (
//                   order.documents.map((doc: any) => (
//                     <div
//                       key={doc.id}
//                       className="flex justify-between items-center"
//                     >
//                       <div className="flex gap-2 items-center">
//                         <FileText className="w-4 h-4" />
//                         <span>{doc.name}</span>
//                       </div>
//                       <a
//                         href={doc.file}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <Download className="w-4 h-4" />
//                       </a>
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-sm text-gray-500">No documents.</p>
//                 )}
//               </div>
//             </TabsContent>
//           </Tabs>
//         </div>

//         <div className="col-span-3 lg:col-span-1 space-y-6">
//           <div className="bg-white p-6 rounded-lg border shadow-sm">
//             <h2 className="text-lg font-semibold mb-4">Customer</h2>
//             <p>
//               <strong>Name:</strong> {order.customer.name}
//             </p>
//             <p>
//               <strong>Email:</strong> {order.customer.email}
//             </p>
//             <p>
//               <strong>Phone:</strong> {order.customer.phone}
//             </p>
//             <p>
//               <strong>Company:</strong> {order.customer.company}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//

// app/dashboard/orders/[id]/page.tsx

// ////////////////////////////////////////////////////////////////Final Code
// "use client";

// import { use, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useRef } from "react";
// import { useReactToPrint } from "react-to-print";
// import {
//   ArrowLeft,
//   Calendar,
//   CreditCard,
//   Download,
//   FileText,
//   MapPin,
//   MessageSquare,
//   Printer,
//   Send,
//   Ship,
//   Truck,
//   User,
//   Building,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";
// import { Package, Clock } from "lucide-react";
// import OrderInvoice from "./OrderInvoice";

// export default function OrderDetailPage({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = use(params);
//   const router = useRouter();

//   const [order, setOrder] = useState<any>(null);

//   useEffect(() => {
//     const fetchOrder = async () => {
//       const token = localStorage.getItem("accessToken");
//       const res = await fetch(`http://localhost:8000/orders/${id}/`, {
//         headers: {
//           Authorization: `JWT ${token}`,
//         },
//       });
//       const data = await res.json();
//       setOrder(data);
//     };
//     fetchOrder();
//   }, [id]);

//   if (!order) return <div className="p-6">Loading...</div>;

//   const getStatusColor = (status: string) => {
//     switch (status.toLowerCase()) {
//       case "processing":
//         return "bg-blue-100 text-blue-800";
//       case "confirmed":
//         return "bg-indigo-100 text-indigo-800";
//       case "shipped":
//         return "bg-yellow-100 text-yellow-800";
//       case "delivered":
//         return "bg-green-100 text-green-800";
//       case "cancelled":
//         return "bg-red-100 text-red-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
//       {/* LEFT SIDE */}
//       <div className="lg:col-span-2 space-y-6">
//         {/* Header */}
//         <div className="flex justify-between items-center">
//           <div className="flex items-center gap-3">
//             <Button variant="outline" size="icon" onClick={() => router.back()}>
//               <ArrowLeft className="h-4 w-4" />
//             </Button>
//             <div>
//               <h1 className="text-2xl font-bold">Order Details</h1>
//               <p className="text-gray-500">{order.order_number}</p>
//             </div>
//           </div>
//           <div className="flex gap-2">
//             <Button
//               variant="outline"
//               onClick={() => {
//                 const invoiceDoc = order.documents.find((doc) =>
//                   doc.name.toLowerCase().includes("invoice")
//                 );
//                 if (invoiceDoc) {
//                   window.open(invoiceDoc.file, "_blank"); // 🔁 This assumes file is a direct URL
//                 } else {
//                   alert("Invoice not available.");
//                 }
//               }}
//             >
//               <Download className="h-4 w-4 mr-2" />
//               Download Invoice
//             </Button>

//             {/* <Button variant="outline">
//               <Printer className="h-4 w-4 mr-2" />
//               Print
//             </Button> */}

//             <Button variant="outline">
//               <Download className="h-4 w-4 mr-2" />
//               Invoice
//             </Button>
//           </div>
//         </div>

//         {/* Order Summary */}
//         <div className="bg-white rounded-md border p-6 space-y-4">
//           <h2 className="font-semibold text-lg">Order Summary</h2>
//           <div className="grid grid-cols-2 gap-4 text-sm">
//             <div>
//               <p className="text-gray-500">Order Date</p>
//               <p>{new Date(order.created_at).toDateString()}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">Total</p>
//               <p>${parseFloat(order.grand_total).toFixed(2)}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">Customer</p>
//               <p>{order.customer.name}</p>
//             </div>
//             <div>
//               <p className="text-gray-500">Supplier</p>
//               <p>{order.supplier?.name}</p>
//             </div>
//           </div>
//           <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
//         </div>

//         {/* Products */}
//         <div className="bg-white rounded-md border p-6">
//           <h2 className="font-semibold text-lg mb-4">Products</h2>
//           <table className="w-full text-sm">
//             <thead className="text-left bg-gray-50">
//               <tr>
//                 <th className="py-2">Product</th>
//                 <th>Quantity</th>
//                 <th>Price</th>
//                 <th>Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-t">
//                 <td className="py-4">
//                   {order.product}
//                   <div className="text-xs text-gray-500">
//                     Color: {order.details?.color} | Size: {order.details?.size}
//                   </div>
//                 </td>
//                 <td>{order.quantity}</td>
//                 <td>${parseFloat(order.unit_price).toFixed(2)}</td>
//                 <td>${parseFloat(order.total_price).toFixed(2)}</td>
//               </tr>
//               <tr className="border-t">
//                 <td colSpan={2}></td>
//                 <td className="py-2 font-medium">Shipping</td>
//                 <td>${parseFloat(order.shipping_cost).toFixed(2)}</td>
//               </tr>
//               <tr className="border-t">
//                 <td colSpan={2}></td>
//                 <td className="py-2 font-bold">Total</td>
//                 <td className="font-bold">
//                   ${parseFloat(order.grand_total).toFixed(2)}
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* Tabs Section */}
//         <Tabs defaultValue="shipping" className="w-full mt-4">
//           <TabsList className="grid grid-cols-4 w-full">
//             <TabsTrigger value="shipping">Shipping</TabsTrigger>
//             <TabsTrigger value="payment">Payment</TabsTrigger>
//             <TabsTrigger value="messages">Messages</TabsTrigger>
//             <TabsTrigger value="timeline">Timeline</TabsTrigger>
//           </TabsList>

//           <TabsContent
//             value="shipping"
//             className="bg-white border p-6 rounded-md mt-2"
//           >
//             <h3 className="font-semibold text-lg mb-4">Shipping Information</h3>
//             <div className="grid grid-cols-2 gap-4 text-sm">
//               <div>
//                 <p className="text-gray-500">Method</p>
//                 <p>{order.shipping?.method}</p>
//               </div>
//               <div>
//                 <p className="text-gray-500">Carrier</p>
//                 <p>{order.shipping?.carrier}</p>
//               </div>
//               <div>
//                 <p className="text-gray-500">Tracking Number</p>
//                 <p>{order.shipping?.tracking_number}</p>
//               </div>
//               <div>
//                 <p className="text-gray-500">Estimated Delivery</p>
//                 <p>{order.shipping?.estimated_delivery}</p>
//               </div>
//               <div className="col-span-2 mt-4 flex items-start">
//                 <MapPin className="h-4 w-4 text-gray-500 mt-1 mr-2" />
//                 <p>{order.shipping?.shipping_address}</p>
//               </div>
//             </div>
//           </TabsContent>

//           <TabsContent
//             value="payment"
//             className="bg-white border p-6 rounded-md mt-2"
//           >
//             <p className="text-gray-500 text-sm">
//               Payment section coming soon...
//             </p>
//           </TabsContent>
//           <TabsContent
//             value="messages"
//             className="bg-white border p-6 rounded-md mt-2"
//           >
//             <p className="text-gray-500 text-sm">
//               Messages section coming soon...
//             </p>
//           </TabsContent>
//           <TabsContent
//             value="timeline"
//             className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mt-4"
//           >
//             <h3 className="text-lg font-semibold mb-6">Order Timeline</h3>
//             <div className="space-y-8 relative">
//               {order.events?.map((event, index) => (
//                 <div key={index} className="flex items-start relative">
//                   {/* Vertical Line */}
//                   {index < order.events.length - 1 && (
//                     <div className="absolute top-0 left-4 h-full w-px bg-gray-300 z-0"></div>
//                   )}

//                   {/* Icon */}
//                   <div className="z-10 relative w-8 h-8 rounded-full bg-black text-white flex items-center justify-center mr-4">
//                     {index === 0 ? (
//                       <Package className="h-4 w-4" />
//                     ) : index === order.events.length - 1 ? (
//                       <Truck className="h-4 w-4" />
//                     ) : (
//                       <Clock className="h-4 w-4" />
//                     )}
//                   </div>

//                   {/* Content */}
//                   <div className="flex flex-col">
//                     <p className="font-medium">{event.event}</p>
//                     <Badge className="w-fit mt-1 bg-gray-100 text-gray-800">
//                       {new Date(event.date).toLocaleDateString("en-US", {
//                         month: "short",
//                         day: "numeric",
//                         year: "numeric",
//                       })}
//                     </Badge>

//                     <div className="flex items-center text-sm text-gray-500 mt-1">
//                       <Clock className="h-3 w-3 mr-1" />
//                       <span>{event.time}</span>
//                       <span className="mx-2">•</span>
//                       <User className="h-3 w-3 mr-1" />
//                       <span>{event.user}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </TabsContent>
//         </Tabs>
//       </div>

//       {/* RIGHT SIDE */}
//       <div className="space-y-6">
//         {/* Customer Info */}
//         <div className="bg-white rounded-md border p-6">
//           <h2 className="font-semibold text-lg mb-4">Customer</h2>
//           <p>
//             <strong>Name:</strong> {order.customer.name}
//           </p>
//           <p>
//             <strong>Email:</strong> {order.customer.email}
//           </p>
//           <p>
//             <strong>Phone:</strong> {order.customer.phone || "-"}
//           </p>
//           <p>
//             <strong>Company:</strong> {order.customer.company || "-"}
//           </p>
//         </div>

//         {/* Supplier Info */}
//         <div className="bg-white rounded-md border p-6">
//           <h2 className="font-semibold text-lg mb-4">Supplier</h2>
//           <div className="flex items-center gap-4">
//             <Image
//               src={order.supplier?.logo || "/placeholder.svg"}
//               alt={order.supplier?.name}
//               width={40}
//               height={40}
//               className="rounded-md object-cover"
//             />
//             <div>
//               <p>{order.supplier?.name}</p>
//               <p className="text-sm text-gray-500">
//                 {order.supplier?.location}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Documents */}
//         <div className="bg-white rounded-md border p-6">
//           <h2 className="font-semibold text-lg mb-4">Documents</h2>
//           {order.documents?.map((doc: any) => (
//             <div
//               key={doc.id}
//               className="flex justify-between items-center border rounded-md px-4 py-2 mb-2"
//             >
//               <div className="flex items-center gap-2">
//                 <FileText className="text-gray-500" />
//                 <div>
//                   <p className="text-sm">{doc.name}</p>
//                   <p className="text-xs text-gray-500">{doc.date_added}</p>
//                 </div>
//               </div>
//               <Button variant="ghost" size="icon">
//                 <Download className="w-4 h-4" />
//               </Button>
//             </div>
//           ))}
//         </div>

//         {/* Order Actions */}
//         <div className="bg-white rounded-md border p-6 space-y-3">
//           <h2 className="font-semibold text-lg mb-2">Order Actions</h2>
//           <Button className="w-full">
//             <MessageSquare className="h-4 w-4 mr-2" />
//             Contact Supplier
//           </Button>
//           <Button variant="outline" className="w-full">
//             <CreditCard className="h-4 w-4 mr-2" />
//             View Payment Details
//           </Button>
//           <Button variant="outline" className="w-full">
//             <Ship className="h-4 w-4 mr-2" />
//             Track Shipment
//           </Button>
//           <Button variant="outline" className="w-full">
//             <Calendar className="h-4 w-4 mr-2" />
//             Schedule Follow-up
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { use, useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useReactToPrint } from "react-to-print";
import {
  ArrowLeft,
  Calendar,
  CreditCard,
  Download,
  FileText,
  MapPin,
  MessageSquare,
  Printer,
  Send,
  Ship,
  Truck,
  User,
  Building,
  Package,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import OrderInvoice from "./OrderInvoice";

export default function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [order, setOrder] = useState<any>(null);
  const printRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const componentRef = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState("shipping");

  // const [tab, setTab] = useState(
  //   () => localStorage.getItem("activeTab") || "shipping"
  // );
  useEffect(() => {
    const storedTab = localStorage.getItem("activeTab");
    if (storedTab) {
      setTab(storedTab);
    }
  }, []);
  const handleTabChange = (value: string) => {
    setTab(value);
    localStorage.setItem("activeTab", value);
  };

  const handlePrint = useReactToPrint({
    content: () => {
      if (!printRef.current) {
        throw new Error("Print content ref is not set");
      }
      return printRef.current;
    },
    documentTitle: order ? `Invoice-${order.order_number}` : "Invoice",
  });

  // useEffect(() => {
  //   const fetchMessages = async () => {
  //     const token = localStorage.getItem("accessToken");
  //     const res = await fetch(
  //       `http://localhost:8000/api/messaging/orders/${id}/messages/`,
  //       {
  //         headers: { Authorization: `JWT ${token}` },
  //       }
  //     );
  //     const data = await res.json();
  //     setMessages(data);
  //   };
  //   fetchMessages();
  // }, [id]);

  const fetchMessages = async () => {
    const token = localStorage.getItem("accessToken");
    const res = await fetch(
      `http://localhost:8000/api/orders/${id}/messages/`,
      {
        headers: { Authorization: `JWT ${token}` },
      }
    );
    const data = await res.json();
    setMessages(data);
  };

  useEffect(() => {
    fetchMessages();
  }, [id]);

  useEffect(() => {
    const fetchOrder = async () => {
      const token = localStorage.getItem("accessToken");
      const res = await fetch(`http://localhost:8000/orders/${id}/`, {
        headers: { Authorization: `JWT ${token}` },
      });
      const data = await res.json();
      setOrder(data);
    };
    fetchOrder();
  }, [id]);

  if (!order) return <div className="p-6">Loading...</div>;

  // const sendMessage = async () => {
  //   const token = localStorage.getItem("accessToken");
  //   const res = await fetch(
  //     `http://localhost:8000/api/orders/${id}/messages/`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `JWT ${token}`,
  //       },
  //       body: JSON.stringify({ content: newMessage }),
  //     }
  //   );
  //   const data = await res.json();
  //   setMessages((prev) => [...prev, data]);
  //   setNewMessage("");
  // };

  const sendMessage = async () => {
    const token = localStorage.getItem("accessToken");
    const res = await fetch(
      `http://localhost:8000/api/orders/${id}/messages/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${token}`,
        },
        body: JSON.stringify({ content: newMessage }),
      }
    );
    const data = await res.json();
    setNewMessage("");
    await fetchMessages(); // ✅ refetch after sending
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "confirmed":
        return "bg-indigo-100 text-indigo-800";
      case "shipped":
        return "bg-yellow-100 text-yellow-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
      {/* LEFT SIDE */}
      {/* LEFT SIDE */}
      <div className="lg:col-span-2 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Order Details</h1>
              <p className="text-gray-500">{order.order_number}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={handlePrint} variant="outline">
              <Printer className="h-4 w-4 mr-2" /> Print Invoice
            </Button>
          </div>
        </div>

        {/* Hidden Printable Invoice */}
        <div className="hidden">
          <div ref={printRef}>
            <OrderInvoice order={order} />
          </div>
        </div>

        {/* <div className="lg:col-span-2 space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" onClick={() => router.back()}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Order Details</h1>
              <p className="text-gray-500">{order.order_number}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={handlePrint} variant="outline">
              <Printer className="h-4 w-4 mr-2" />
              Print Invoice
            </Button>
          </div>
        </div> */}

        <div className="bg-white rounded-md border p-6 space-y-4">
          <h2 className="font-semibold text-lg">Order Summary</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Order Date</p>
              <p>{new Date(order.created_at).toDateString()}</p>
            </div>
            <div>
              <p className="text-gray-500">Total</p>
              <p>${parseFloat(order.grand_total).toFixed(2)}</p>
            </div>
            <div>
              <p className="text-gray-500">Customer</p>
              <p>{order.customer.name}</p>
            </div>
            <div>
              <p className="text-gray-500">Supplier</p>
              <p>{order.supplier?.name}</p>
            </div>
          </div>
          <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
        </div>

        <div className="bg-white rounded-md border p-6">
          <h2 className="font-semibold text-lg mb-4">Products</h2>
          <table className="w-full text-sm">
            <thead className="text-left bg-gray-50">
              <tr>
                <th className="py-2">Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-4">
                  {order.product}
                  <div className="text-xs text-gray-500">
                    Color: {order.details?.color} | Size: {order.details?.size}
                  </div>
                </td>
                <td>{order.quantity}</td>
                <td>${parseFloat(order.unit_price).toFixed(2)}</td>
                <td>${parseFloat(order.total_price).toFixed(2)}</td>
              </tr>
              <tr className="border-t">
                <td colSpan={2}></td>
                <td className="py-2 font-medium">Shipping</td>
                <td>${parseFloat(order.shipping_cost).toFixed(2)}</td>
              </tr>
              <tr className="border-t">
                <td colSpan={2}></td>
                <td className="py-2 font-bold">Total</td>
                <td className="font-bold">
                  ${parseFloat(order.grand_total).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Tabs
          value={tab}
          onValueChange={handleTabChange}
          defaultValue="shipping"
          className="w-full mt-4"
        >
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>

          <TabsContent
            value="shipping"
            className="bg-white border p-6 rounded-md mt-2"
          >
            <h3 className="font-semibold text-lg mb-4">Shipping Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Method</p>
                <p>{order.shipping?.method}</p>
              </div>
              <div>
                <p className="text-gray-500">Carrier</p>
                <p>{order.shipping?.carrier}</p>
              </div>
              <div>
                <p className="text-gray-500">Tracking</p>
                <p>{order.shipping?.tracking_number}</p>
              </div>
              <div>
                <p className="text-gray-500">Estimated</p>
                <p>{order.shipping?.estimated_delivery}</p>
              </div>
              <div className="col-span-2 mt-4 flex items-start">
                <MapPin className="h-4 w-4 text-gray-500 mt-1 mr-2" />
                <p>{order.shipping?.shipping_address}</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="payment"
            className="bg-white border p-6 rounded-md mt-2"
          >
            <p className="text-gray-500 text-sm">
              Payment section coming soon...
            </p>
          </TabsContent>

          <TabsContent
            value="messages"
            className="bg-white border p-6 rounded-md mt-2 max-h-[400px] overflow-y-auto"
          >
            <h3 className="text-lg font-semibold mb-4">Messages</h3>
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className="bg-gray-100 p-3 rounded mb-2">
                  <p>{msg.content}</p>
                  <p className="text-xs text-gray-500">
                    {msg.sent_at
                      ? new Date(msg.sent_at).toLocaleString()
                      : "No timestamp"}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex mt-4 gap-2">
              <input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 border rounded-md px-3 py-2 text-sm"
                placeholder="Type your message..."
              />
              <Button onClick={sendMessage}>
                <Send className="h-4 w-4 mr-1" />
                Send
              </Button>
            </div>
          </TabsContent>

          <TabsContent
            value="timeline"
            className="bg-white rounded-lg border p-6 mt-4"
          >
            <h3 className="text-lg font-semibold mb-6">Order Timeline</h3>
            <div className="space-y-8 relative">
              {order.events?.map((event, index) => (
                <div key={index} className="flex items-start relative">
                  {index < order.events.length - 1 && (
                    <div className="absolute top-0 left-4 h-full w-px bg-gray-300 z-0"></div>
                  )}
                  <div className="z-10 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center mr-4">
                    {index === 0 ? (
                      <Package className="h-4 w-4" />
                    ) : index === order.events.length - 1 ? (
                      <Truck className="h-4 w-4" />
                    ) : (
                      <Clock className="h-4 w-4" />
                    )}
                  </div>
                  <div className="flex flex-col">
                    <p className="font-medium">{event.event}</p>
                    <Badge className="w-fit mt-1 bg-gray-100 text-gray-800">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
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
          </TabsContent>
        </Tabs>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-6">
        <div className="bg-white rounded-md border p-6">
          <h2 className="font-semibold text-lg mb-4">Customer</h2>
          <p>
            <strong>Name:</strong> {order.customer.name}
          </p>
          <p>
            <strong>Email:</strong> {order.customer.email}
          </p>
          <p>
            <strong>Phone:</strong> {order.customer.phone || "-"}
          </p>
          <p>
            <strong>Company:</strong> {order.customer.company || "-"}
          </p>
        </div>

        <div className="bg-white rounded-md border p-6">
          <h2 className="font-semibold text-lg mb-4">Supplier</h2>
          <div className="flex items-center gap-4">
            <Image
              src={order.supplier?.logo || "/placeholder.svg"}
              alt={order.supplier?.name}
              width={40}
              height={40}
              className="rounded-md object-cover"
            />
            <div>
              <p>{order.supplier?.name}</p>
              <p className="text-sm text-gray-500">
                {order.supplier?.location}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md border p-6">
          <h2 className="font-semibold text-lg mb-4">Documents</h2>
          {order.documents?.map((doc: any) => (
            <div
              key={doc.id}
              className="flex justify-between items-center border rounded-md px-4 py-2 mb-2"
            >
              <div className="flex items-center gap-2">
                <FileText className="text-gray-500" />
                <div>
                  <p className="text-sm">{doc.name}</p>
                  <p className="text-xs text-gray-500">{doc.date_added}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open(doc.file, "_blank")}
              >
                <Download className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-md border p-6 space-y-3">
          <h2 className="font-semibold text-lg mb-2">Order Actions</h2>
          <Button className="w-full">
            <MessageSquare className="h-4 w-4 mr-2" />
            Contact Supplier
          </Button>
          <Button variant="outline" className="w-full">
            <CreditCard className="h-4 w-4 mr-2" />
            View Payment Details
          </Button>
          <Button variant="outline" className="w-full">
            <Ship className="h-4 w-4 mr-2" />
            Track Shipment
          </Button>
          <Button variant="outline" className="w-full">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Follow-up
          </Button>
        </div>
      </div>
    </div>
  );
}
