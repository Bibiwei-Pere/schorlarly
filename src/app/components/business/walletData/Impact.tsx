// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// <Tabs defaultValue="allEvents" className="w-full mt-4">
//   <TabsList className="grid max-w-[329px] grid-cols-3 h-10 items-center justify-center rounded-md bg-white p-1 text-gray-500">
//     {transaction.map((service) => (
//       <TabsTrigger
//         value={service.value}
//         key={service.value}
//         className="rounded-sm py-2  data-[state=active]:bg-red-50 data-[state=active]:text-red-700"
//       >
//         {service.value}
//       </TabsTrigger>
//     ))}
//   </TabsList>
//   <div className="border-b border-gray-200 mt-4"></div>
//   {transaction.map((service) => (
//     <TabsContent
//       value={service.value}
//       key={service.title}
//       className="cardContainer"
//       onClick={() => setActive(true)}
//     >
//       <h2 className="font-xl">{service.title}</h2>
//       <div className="flex justify-between">
//         <p>{service.note}</p>
//         <span className="flex gap-3">
//           <button className="border rounded-[68px] mr-2 p-1 px-4">
//             Export All
//           </button>
//           <button className="mr-3 border rounded-[68px] mr-2 p-1 px-4 bg-red-500 text-white">
//             Request Payout
//           </button>
//         </span>
//       </div>
//       <div className="flex gap-[10px] mt-[30px]">
//         <div className="flex border rounded-md mr-2 p-1 px-4 ">
//           <Image src={caldate} alt={caldate} />
//           &nbsp;
//           <p>Last 7 days </p>
//         </div>
//         <div className="flex border rounded-md mr-2 p-1 px-4 ">
//           <Image src={calfill} alt={calfill} />
//           &nbsp;
//           <p>Filter</p>
//           <select name="#" id="#"></select>
//         </div>
//       </div>
//       <div></div>
//       {service.paymentTable}
//     </TabsContent>
//   ))}
// </Tabs>;
