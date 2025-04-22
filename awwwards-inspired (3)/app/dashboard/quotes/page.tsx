// "use client"

// import type React from "react"

// import { useState } from "react"
// import { RecentQuotes } from "@/components/dashboard/recent-quotes"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { FileText, Plus, Upload, X, Search, Filter, ArrowUpDown, Calendar, Download } from "lucide-react"

// export default function QuotesPage() {
//   const [showNewQuoteForm, setShowNewQuoteForm] = useState(false)
//   const [shipToDoor, setShipToDoor] = useState(false)
//   const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
//   const [formData, setFormData] = useState({
//     productName: "",
//     productType: "",
//     quantity: "",
//     region: "",
//     color: "",
//     targetPrice: "",
//     quality: "",
//     specifications: "",
//     portName: "",
//     destinationCountry: "",
//     shipmentTerms: "",
//     paymentTerms: "",
//     shipmentMethod: "sea",
//     shipmentDestination: "port",
//     doorAddress: "",
//     shipmentDetails: "",
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const newFiles = Array.from(e.target.files)
//       setUploadedFiles((prev) => [...prev, ...newFiles])
//     }
//   }

//   const removeFile = (index: number) => {
//     setUploadedFiles((prev) => prev.filter((_, i) => i !== index))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // In a real app, you would submit the form data to your backend
//     console.log("Quote form data:", formData)
//     console.log("Uploaded files:", uploadedFiles)

//     // Show success message and reset form
//     alert("Your quote request has been submitted successfully! Our sourcing team will contact you shortly.")
//     setShowNewQuoteForm(false)
//     setUploadedFiles([])
//     setFormData({
//       productName: "",
//       productType: "",
//       quantity: "",
//       region: "",
//       color: "",
//       targetPrice: "",
//       quality: "",
//       specifications: "",
//       portName: "",
//       destinationCountry: "",
//       shipmentTerms: "",
//       paymentTerms: "",
//       shipmentMethod: "sea",
//       shipmentDestination: "port",
//       doorAddress: "",
//       shipmentDetails: "",
//     })
//   }

//   return (
//     <div className="space-y-8">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-bold">Quotes</h1>
//           <p className="text-gray-500 mt-1">View and manage your quote requests</p>
//         </div>
//         <Button onClick={() => setShowNewQuoteForm(true)} className="flex items-center">
//           <Plus className="h-4 w-4 mr-2" />
//           Request New Quote
//         </Button>
//       </div>

//       {showNewQuoteForm ? (
//         <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
//           <div className="p-6 border-b border-gray-200 flex justify-between items-center">
//             <h2 className="text-lg font-semibold">Request a New Quote</h2>
//             <Button variant="ghost" size="sm" onClick={() => setShowNewQuoteForm(false)}>
//               <X className="h-4 w-4" />
//             </Button>
//           </div>

//           <form onSubmit={handleSubmit} className="p-6">
//             <Tabs defaultValue="product" className="w-full">
//               <TabsList className="grid w-full grid-cols-2 mb-8">
//                 <TabsTrigger value="product">Product Details</TabsTrigger>
//                 <TabsTrigger value="shipping">Shipping Information</TabsTrigger>
//               </TabsList>

//               <TabsContent value="product" className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <Label htmlFor="region">Region of Origin</Label>
//                     <Input
//                       id="region"
//                       name="region"
//                       value={formData.region}
//                       onChange={handleChange}
//                       placeholder="e.g. Asia, Europe, North America"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="productName">Product Name</Label>
//                     <Input
//                       id="productName"
//                       name="productName"
//                       value={formData.productName}
//                       onChange={handleChange}
//                       placeholder="Enter product name"
//                       required
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="productType">Type of Product</Label>
//                     <Input
//                       id="productType"
//                       name="productType"
//                       value={formData.productType}
//                       onChange={handleChange}
//                       placeholder="e.g. Apparel, Electronics, Furniture"
//                       required
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="quantity">Quantity</Label>
//                     <Input
//                       id="quantity"
//                       name="quantity"
//                       value={formData.quantity}
//                       onChange={handleChange}
//                       type="number"
//                       placeholder="Enter quantity"
//                       min="1"
//                       required
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="color">Color</Label>
//                     <Input
//                       id="color"
//                       name="color"
//                       value={formData.color}
//                       onChange={handleChange}
//                       placeholder="e.g. Red, Blue, Custom"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="targetPrice">Target Price</Label>
//                     <Input
//                       id="targetPrice"
//                       name="targetPrice"
//                       value={formData.targetPrice}
//                       onChange={handleChange}
//                       placeholder="Your target price per unit"
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <Label>Quality</Label>
//                   <select
//                     className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                     name="quality"
//                     value={formData.quality}
//                     onChange={handleChange}
//                   >
//                     <option value="">Select quality level</option>
//                     <option value="best">Best</option>
//                     <option value="good">Good</option>
//                     <option value="normal">Normal</option>
//                     <option value="low">Low</option>
//                     <option value="lowest">Lowest</option>
//                   </select>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="specifications">Specifications</Label>
//                   <Textarea
//                     id="specifications"
//                     name="specifications"
//                     value={formData.specifications}
//                     onChange={handleChange}
//                     placeholder="Enter detailed product specifications"
//                     className="min-h-[100px]"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label>Attachments</Label>
//                   <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
//                     <Upload className="mx-auto h-12 w-12 text-gray-400" />
//                     <p className="mt-2 text-sm text-gray-500">Drag and drop files here, or click to select files</p>
//                     <p className="mt-1 text-xs text-gray-400">
//                       Product images, design files, specification documents, etc. (Max 10MB per file)
//                     </p>
//                     <Input
//                       type="file"
//                       className="hidden"
//                       id="file-upload"
//                       multiple
//                       onChange={handleFileUpload}
//                       accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.xls,.xlsx,.ai,.psd"
//                     />
//                     <Button
//                       type="button"
//                       variant="outline"
//                       className="mt-4"
//                       onClick={() => document.getElementById("file-upload")?.click()}
//                     >
//                       Select Files
//                     </Button>
//                   </div>

//                   {uploadedFiles.length > 0 && (
//                     <div className="mt-4">
//                       <Label>Uploaded Files</Label>
//                       <div className="mt-2 space-y-2">
//                         {uploadedFiles.map((file, index) => (
//                           <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
//                             <div className="flex items-center">
//                               <FileText className="h-5 w-5 text-gray-400 mr-2" />
//                               <div>
//                                 <p className="text-sm font-medium">{file.name}</p>
//                                 <p className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
//                               </div>
//                             </div>
//                             <Button variant="ghost" size="sm" onClick={() => removeFile(index)}>
//                               <X className="h-4 w-4" />
//                             </Button>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 <div className="flex justify-end pt-4">
//                   <Button type="button" variant="outline" onClick={() => setShowNewQuoteForm(false)} className="mr-2">
//                     Cancel
//                   </Button>
//                   <Button type="button" onClick={() => document.getElementById("shipping-tab")?.click()}>
//                     Next: Shipping Details
//                   </Button>
//                 </div>
//               </TabsContent>

//               <TabsContent value="shipping" className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <Label htmlFor="portName">Port Name</Label>
//                     <Input
//                       id="portName"
//                       name="portName"
//                       value={formData.portName}
//                       onChange={handleChange}
//                       placeholder="Enter port name"
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="destinationCountry">Destination Country</Label>
//                     <Input
//                       id="destinationCountry"
//                       name="destinationCountry"
//                       value={formData.destinationCountry}
//                       onChange={handleChange}
//                       placeholder="Enter destination country"
//                       required
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label>Shipment Terms</Label>
//                     <select
//                       className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                       name="shipmentTerms"
//                       value={formData.shipmentTerms}
//                       onChange={handleChange}
//                     >
//                       <option value="">Select shipment terms</option>
//                       <option value="fob">FOB (Free On Board)</option>
//                       <option value="cif">CIF (Cost, Insurance, and Freight)</option>
//                       <option value="exw">EXW (Ex Works)</option>
//                       <option value="ddp">DDP (Delivered Duty Paid)</option>
//                       <option value="cfr">CFR (Cost and Freight)</option>
//                     </select>
//                   </div>
//                   <div className="space-y-2">
//                     <Label>Payment Terms</Label>
//                     <select
//                       className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                       name="paymentTerms"
//                       value={formData.paymentTerms}
//                       onChange={handleChange}
//                     >
//                       <option value="">Select payment terms</option>
//                       <option value="tt">T/T (Telegraphic Transfer)</option>
//                       <option value="lc">L/C (Letter of Credit)</option>
//                       <option value="dp">D/P (Documents against Payment)</option>
//                       <option value="da">D/A (Documents against Acceptance)</option>
//                       <option value="paypal">PayPal</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <Label>Shipment Method</Label>
//                   <RadioGroup
//                     defaultValue="sea"
//                     className="flex space-x-4"
//                     name="shipmentMethod"
//                     value={formData.shipmentMethod}
//                     onValueChange={(value) => setFormData((prev) => ({ ...prev, shipmentMethod: value }))}
//                   >
//                     <div className="flex items-center space-x-2">
//                       <RadioGroupItem value="sea" id="sea" />
//                       <Label htmlFor="sea">Sea</Label>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <RadioGroupItem value="air" id="air" />
//                       <Label htmlFor="air">Air</Label>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <RadioGroupItem value="express" id="express" />
//                       <Label htmlFor="express">Express</Label>
//                     </div>
//                   </RadioGroup>
//                 </div>

//                 <div className="space-y-2">
//                   <Label>Shipment Destination</Label>
//                   <RadioGroup
//                     defaultValue="port"
//                     className="flex space-x-4"
//                     name="shipmentDestination"
//                     value={formData.shipmentDestination}
//                     onValueChange={(value) => {
//                       setFormData((prev) => ({ ...prev, shipmentDestination: value }))
//                       setShipToDoor(value === "door")
//                     }}
//                   >
//                     <div className="flex items-center space-x-2">
//                       <RadioGroupItem value="port" id="port" />
//                       <Label htmlFor="port">To Port</Label>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <RadioGroupItem value="door" id="door" />
//                       <Label htmlFor="door">To Door</Label>
//                     </div>
//                   </RadioGroup>
//                 </div>

//                 {shipToDoor && (
//                   <div className="space-y-2">
//                     <Label htmlFor="doorAddress">Complete Door Address</Label>
//                     <Textarea
//                       id="doorAddress"
//                       name="doorAddress"
//                       value={formData.doorAddress}
//                       onChange={handleChange}
//                       placeholder="Enter complete delivery address"
//                       className="min-h-[80px]"
//                     />
//                   </div>
//                 )}

//                 <div className="space-y-2">
//                   <Label htmlFor="shipmentDetails">Additional Requirements</Label>
//                   <Textarea
//                     id="shipmentDetails"
//                     name="shipmentDetails"
//                     value={formData.shipmentDetails}
//                     onChange={handleChange}
//                     placeholder="Enter any additional shipment details, timeline requirements, or special instructions"
//                     className="min-h-[100px]"
//                   />
//                 </div>

//                 <div className="flex justify-between pt-4">
//                   <Button
//                     type="button"
//                     variant="outline"
//                     id="product-tab"
//                     onClick={() => document.getElementById("product-tab")?.click()}
//                   >
//                     Back to Product Details
//                   </Button>
//                   <Button type="submit">Submit Quote Request</Button>
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </form>
//         </div>
//       ) : (
//         <>
//           <div className="flex flex-col md:flex-row gap-4 mb-6">
//             <div className="relative flex-grow">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//               <Input
//                 className="pl-10 pr-4 py-2 rounded-md border border-gray-300 w-full"
//                 placeholder="Search quotes by product, ID, or status..."
//               />
//             </div>
//             <div className="flex gap-2">
//               <Button variant="outline" className="flex items-center">
//                 <Filter className="h-4 w-4 mr-2" />
//                 Filter
//               </Button>
//               <Button variant="outline" className="flex items-center">
//                 <ArrowUpDown className="h-4 w-4 mr-2" />
//                 Sort
//               </Button>
//               <Button variant="outline" className="flex items-center">
//                 <Calendar className="h-4 w-4 mr-2" />
//                 Date Range
//               </Button>
//               <Button variant="outline" className="flex items-center">
//                 <Download className="h-4 w-4 mr-2" />
//                 Export
//               </Button>
//             </div>
//           </div>

//           <RecentQuotes />
//         </>
//       )}
//     </div>
//   )
// }

// "use client";

// import type React from "react";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   FileText,
//   Plus,
//   Upload,
//   X,
//   Search,
//   Filter,
//   ArrowUpDown,
//   Calendar,
//   Download,
// } from "lucide-react";
// import { RecentQuotes } from "@/components/dashboard/recent-quotes";

// export default function QuotesPage() {
//   const [showNewQuoteForm, setShowNewQuoteForm] = useState(false);
//   const [shipToDoor, setShipToDoor] = useState(false);
//   const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
//   const [formData, setFormData] = useState({
//     productName: "",
//     productType: "",
//     quantity: "",
//     region: "",
//     color: "",
//     targetPrice: "",
//     quality: "",
//     specifications: "",
//     portName: "",
//     destinationCountry: "",
//     shipmentTerms: "",
//     paymentTerms: "",
//     shipmentMethod: "sea",
//     shipmentDestination: "port",
//     doorAddress: "",
//     shipmentDetails: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const newFiles = Array.from(e.target.files);
//       setUploadedFiles((prev) => [...prev, ...newFiles]);
//     }
//   };

//   const removeFile = (index: number) => {
//     setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const token = localStorage.getItem("accessToken");
//     if (!token) return alert("Please log in first.");

//     const data = new FormData();
//     Object.entries(formData).forEach(([key, value]) => data.append(key, value));
//     uploadedFiles.forEach((file) => data.append("attachments", file));

//     try {
//       const res = await fetch("http://localhost:8000/quotes/create/", {
//         method: "POST",
//         headers: {
//           Authorization: `JWT ${token}`,
//         },
//         body: data,
//       });

//       if (!res.ok) throw new Error("Failed to create quote");

//       alert("Quote submitted successfully");
//       setShowNewQuoteForm(false);
//       setUploadedFiles([]);
//       setFormData({
//         productName: "",
//         productType: "",
//         quantity: "",
//         region: "",
//         color: "",
//         targetPrice: "",
//         quality: "",
//         specifications: "",
//         portName: "",
//         destinationCountry: "",
//         shipmentTerms: "",
//         paymentTerms: "",
//         shipmentMethod: "sea",
//         shipmentDestination: "port",
//         doorAddress: "",
//         shipmentDetails: "",
//       });
//     } catch (err) {
//       console.error("Quote submission error:", err);
//       alert("There was an error submitting your quote.");
//     }
//   };

//   return (
//     <div className="space-y-8">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-bold">Quotes</h1>
//           <p className="text-gray-500 mt-1">
//             View and manage your quote requests
//           </p>
//         </div>
//         <Button
//           onClick={() => setShowNewQuoteForm(true)}
//           className="flex items-center"
//         >
//           <Plus className="h-4 w-4 mr-2" />
//           Request New Quote
//         </Button>
//       </div>

//       {showNewQuoteForm ? (
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white border rounded-md p-6 space-y-6"
//         >
//           <h2 className="text-lg font-semibold mb-4">Request a New Quote</h2>

//           <Tabs defaultValue="product">
//             <TabsList className="grid grid-cols-2 w-full mb-6">
//               <TabsTrigger value="product">Product Details</TabsTrigger>
//               <TabsTrigger value="shipping">Shipping Information</TabsTrigger>
//             </TabsList>

//             <TabsContent value="product" className="space-y-4">
//               <Input
//                 name="productName"
//                 placeholder="Product Name"
//                 value={formData.productName}
//                 onChange={handleChange}
//                 required
//               />
//               <Input
//                 name="productType"
//                 placeholder="Product Type"
//                 value={formData.productType}
//                 onChange={handleChange}
//                 required
//               />
//               <Input
//                 name="quantity"
//                 placeholder="Quantity"
//                 type="number"
//                 value={formData.quantity}
//                 onChange={handleChange}
//                 required
//               />
//               <Input
//                 name="region"
//                 placeholder="Region"
//                 value={formData.region}
//                 onChange={handleChange}
//               />
//               <Input
//                 name="color"
//                 placeholder="Color"
//                 value={formData.color}
//                 onChange={handleChange}
//               />
//               <Input
//                 name="targetPrice"
//                 placeholder="Target Price"
//                 value={formData.targetPrice}
//                 onChange={handleChange}
//               />
//               <select
//                 name="quality"
//                 value={formData.quality}
//                 onChange={handleChange}
//                 className="border rounded p-2 w-full"
//               >
//                 <option value="">Select Quality</option>
//                 <option value="best">Best</option>
//                 <option value="good">Good</option>
//                 <option value="normal">Normal</option>
//               </select>
//               <Textarea
//                 name="specifications"
//                 placeholder="Specifications"
//                 value={formData.specifications}
//                 onChange={handleChange}
//               />
//               <Input type="file" multiple onChange={handleFileUpload} />
//               {uploadedFiles.map((file, index) => (
//                 <div key={index} className="flex justify-between items-center">
//                   <span>{file.name}</span>
//                   <Button variant="ghost" onClick={() => removeFile(index)}>
//                     <X className="w-4 h-4" />
//                   </Button>
//                 </div>
//               ))}
//             </TabsContent>

//             <TabsContent value="shipping" className="space-y-4">
//               <Input
//                 name="portName"
//                 placeholder="Port Name"
//                 value={formData.portName}
//                 onChange={handleChange}
//               />
//               <Input
//                 name="destinationCountry"
//                 placeholder="Destination Country"
//                 value={formData.destinationCountry}
//                 onChange={handleChange}
//               />
//               <select
//                 name="shipmentTerms"
//                 value={formData.shipmentTerms}
//                 onChange={handleChange}
//                 className="border rounded p-2 w-full"
//               >
//                 <option value="">Select Shipment Terms</option>
//                 <option value="fob">FOB</option>
//                 <option value="cif">CIF</option>
//               </select>
//               <select
//                 name="paymentTerms"
//                 value={formData.paymentTerms}
//                 onChange={handleChange}
//                 className="border rounded p-2 w-full"
//               >
//                 <option value="">Select Payment Terms</option>
//                 <option value="tt">T/T</option>
//                 <option value="lc">L/C</option>
//               </select>
//               <RadioGroup
//                 value={formData.shipmentMethod}
//                 onValueChange={(val) =>
//                   setFormData((prev) => ({ ...prev, shipmentMethod: val }))
//                 }
//               >
//                 <RadioGroupItem value="sea" label="Sea" />
//                 <RadioGroupItem value="air" label="Air" />
//               </RadioGroup>
//               <RadioGroup
//                 value={formData.shipmentDestination}
//                 onValueChange={(val) => {
//                   setFormData((prev) => ({
//                     ...prev,
//                     shipmentDestination: val,
//                   }));
//                   setShipToDoor(val === "door");
//                 }}
//               >
//                 <RadioGroupItem value="port" label="To Port" />
//                 <RadioGroupItem value="door" label="To Door" />
//               </RadioGroup>
//               {shipToDoor && (
//                 <Textarea
//                   name="doorAddress"
//                   placeholder="Door Address"
//                   value={formData.doorAddress}
//                   onChange={handleChange}
//                 />
//               )}
//               <Textarea
//                 name="shipmentDetails"
//                 placeholder="Additional Shipment Details"
//                 value={formData.shipmentDetails}
//                 onChange={handleChange}
//               />
//             </TabsContent>
//           </Tabs>

//           <div className="flex justify-end">
//             <Button type="submit">Submit Quote Request</Button>
//           </div>
//         </form>
//       ) : (
//         <>
//           <div className="flex flex-col md:flex-row gap-4 mb-6">
//             <div className="relative flex-grow">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//               <Input
//                 className="pl-10 pr-4 py-2 rounded-md border border-gray-300 w-full"
//                 placeholder="Search quotes..."
//               />
//             </div>
//             <div className="flex gap-2">
//               <Button variant="outline" className="flex items-center">
//                 <Filter className="h-4 w-4 mr-2" />
//                 Filter
//               </Button>
//               <Button variant="outline" className="flex items-center">
//                 <ArrowUpDown className="h-4 w-4 mr-2" />
//                 Sort
//               </Button>
//               <Button variant="outline" className="flex items-center">
//                 <Calendar className="h-4 w-4 mr-2" />
//                 Date
//               </Button>
//               <Button variant="outline" className="flex items-center">
//                 <Download className="h-4 w-4 mr-2" />
//                 Export
//               </Button>
//             </div>
//           </div>

//           <RecentQuotes />
//         </>
//       )}
//     </div>
//   );
// }

"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  Plus,
  Upload,
  X,
  Search,
  Filter,
  ArrowUpDown,
  Calendar,
  Download,
} from "lucide-react";
import { RecentQuotes } from "@/components/dashboard/recent-quotes";

export default function QuotesPage() {
  const [showNewQuoteForm, setShowNewQuoteForm] = useState(false);
  const [shipToDoor, setShipToDoor] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    productName: "",
    productType: "",
    quantity: "",
    region: "",
    color: "",
    targetPrice: "",
    quality: "",
    specifications: "",
    portName: "",
    destinationCountry: "",
    shipmentTerms: "",
    paymentTerms: "",
    shipmentMethod: "sea",
    shipmentDestination: "port",
    doorAddress: "",
    shipmentDetails: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setUploadedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken");
    if (!token) return alert("Please log in first.");

    const data = new FormData();

    // ✅ Ensure clean, flat string values
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        data.append(key, String(value).trim());
      }
    });

    uploadedFiles.forEach((file) => data.append("attachments", file));

    try {
      const res = await fetch("http://localhost:8000/quotes/create/", {
        method: "POST",
        headers: {
          Authorization: `JWT ${token}`,
          Accept: "application/json",
        },
        body: data,
      });

      const result = await res.json();

      if (!res.ok) {
        console.error("Quote create error:", result);
        throw new Error("Failed to create quote");
      }

      alert("Quote submitted successfully");
      setShowNewQuoteForm(false);
      setUploadedFiles([]);
      setFormData({
        productName: "",
        productType: "",
        quantity: "",
        region: "",
        color: "",
        targetPrice: "",
        quality: "",
        specifications: "",
        portName: "",
        destinationCountry: "",
        shipmentTerms: "",
        paymentTerms: "",
        shipmentMethod: "sea",
        shipmentDestination: "port",
        doorAddress: "",
        shipmentDetails: "",
      });
    } catch (err) {
      console.error("Quote submission error:", err);
      alert("There was an error submitting your quote.");
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Quotes</h1>
          <p className="text-gray-500 mt-1">
            View and manage your quote requests
          </p>
        </div>
        <Button
          onClick={() => setShowNewQuoteForm(true)}
          className="flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Request New Quote
        </Button>
      </div>

      {showNewQuoteForm ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white border rounded-md p-6 space-y-6"
        >
          <h2 className="text-lg font-semibold mb-4">Request a New Quote</h2>

          <Tabs defaultValue="product">
            <TabsList className="grid grid-cols-2 w-full mb-6">
              <TabsTrigger value="product">Product Details</TabsTrigger>
              <TabsTrigger value="shipping">Shipping Information</TabsTrigger>
            </TabsList>

            <TabsContent value="product" className="space-y-4">
              {[
                "productName",
                "productType",
                "quantity",
                "region",
                "color",
                "targetPrice",
              ].map((field) => (
                <Input
                  key={field}
                  name={field}
                  placeholder={field.replace(/([A-Z])/g, " $1")}
                  value={
                    (formData[field as keyof typeof formData] as string) || ""
                  }
                  onChange={handleChange}
                  required={
                    field === "productName" ||
                    field === "productType" ||
                    field === "quantity"
                  }
                />
              ))}

              <select
                name="quality"
                value={formData.quality}
                onChange={handleChange}
                className="border rounded p-2 w-full"
              >
                <option value="">Select Quality</option>
                <option value="best">Best</option>
                <option value="good">Good</option>
                <option value="normal">Normal</option>
              </select>

              <Textarea
                name="specifications"
                placeholder="Specifications"
                value={formData.specifications}
                onChange={handleChange}
              />
              <Input type="file" multiple onChange={handleFileUpload} />
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{file.name}</span>
                  <Button variant="ghost" onClick={() => removeFile(index)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="shipping" className="space-y-4">
              {[
                "portName",
                "destinationCountry",
                "shipmentTerms",
                "paymentTerms",
              ].map((field) => (
                <Input
                  key={field}
                  name={field}
                  placeholder={field.replace(/([A-Z])/g, " $1")}
                  value={
                    (formData[field as keyof typeof formData] as string) || ""
                  }
                  onChange={handleChange}
                />
              ))}

              <RadioGroup
                value={formData.shipmentMethod}
                onValueChange={(val) =>
                  setFormData((prev) => ({ ...prev, shipmentMethod: val }))
                }
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="sea" value="sea" />
                  <Label htmlFor="sea">Sea</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="air" value="air" />
                  <Label htmlFor="air">Air</Label>
                </div>
              </RadioGroup>

              <RadioGroup
                value={formData.shipmentDestination}
                onValueChange={(val) => {
                  setFormData((prev) => ({
                    ...prev,
                    shipmentDestination: val,
                  }));
                  setShipToDoor(val === "door");
                }}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="port" value="port" />
                  <Label htmlFor="port">To Port</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem id="door" value="door" />
                  <Label htmlFor="door">To Door</Label>
                </div>
              </RadioGroup>

              {shipToDoor && (
                <Textarea
                  name="doorAddress"
                  placeholder="Door Address"
                  value={formData.doorAddress}
                  onChange={handleChange}
                />
              )}

              <Textarea
                name="shipmentDetails"
                placeholder="Additional Shipment Details"
                value={formData.shipmentDetails}
                onChange={handleChange}
              />
            </TabsContent>
          </Tabs>

          <div className="flex justify-end">
            <Button type="submit">Submit Quote Request</Button>
          </div>
        </form>
      ) : (
        <>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                className="pl-10 pr-4 py-2 rounded-md border border-gray-300 w-full"
                placeholder="Search quotes..."
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" className="flex items-center">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                Sort
              </Button>
              <Button variant="outline" className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Date
              </Button>
              <Button variant="outline" className="flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          <RecentQuotes />
        </>
      )}
    </div>
  );
}
