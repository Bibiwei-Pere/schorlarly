import Image from 'next/image'
import React from 'react'
import Arrow from "@/app/components/assets/images/arrow-left-black.svg";
 import { Button } from "@/components/ui/button";
 import './Dispute.scss'


const DisputePage = () => {
  return (
  <>
      <div className='flex justify-between '>
        <span className='flex'>
             <Image src={Arrow} alt="Arrow" /> 
            <h2 className='text-black'>View disputes / #2001</h2>
        </span>
        <span className="flex flex-row w-[311px] gap-[10px]">
                  <Button variant={"secondary"} className="flex flex-row justify-center items-center gap-[8px]">
                      Contact support
                  </Button>
                 <Button variant={"secondary"} className="flex flex-row justify-center items-center gap-[8px] bg-red-600 text-white">
                   Issue refund
                 </Button>
          </span>
      </div>
      
      <div className='message'>
        <p>Subject</p>
        <h1 className='text-black'>I got my package broken</h1>
        <p>Created on Sat 12 may, 2023</p>
      </div>
  </>
  )
}

export default DisputePage













































// 'use client'
// import React, { useState } from 'react'
// import { EyeIcon } from "lucide-react";
// import Link from "next/link";
// import Arrow from "@/app/components/assets/images/arrow-left-black.svg";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";


// const page = () => {
//   return (
//     <>
//           <div className="headList">
//                  <span className="wrapper">
//                    <div>
//                      
//                    </div>
//                    <h3>View dispute/#2001</h3>
//                  </span>
  
                  //  <span className="flex flex-row w-[311px] gap-[10px]">
                  //    <Button variant={"secondary"} className="flex flex-row justify-center items-center gap-[8px]">
                  //         Contact support
                  //    </Button>
                  //    <Button variant={"secondary"} className="flex flex-row justify-center items-center gap-[8px] bg-red-600 text-white">
                  //         Issue refund
                  //    </Button>
                  //  </span>
//             </div>
//             <div>
//                 <h2>Welcome</h2>
//             </div>
//     </>
//   )
// }

// export default page