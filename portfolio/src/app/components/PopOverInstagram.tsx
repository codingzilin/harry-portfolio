import React from 'react'
import Image from 'next/image'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import { FaInstagram } from 'react-icons/fa'


export default function PopOverInstagram() {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Button className='font-mono rounded-2xl' variant="outline"><FaInstagram />Instagram</Button>
        </PopoverTrigger>
        <PopoverContent className="flex items-center justify-center w-auto">
          <Image src='/instagram-QRcode.jpg' alt='instagram' width={200} height={200}/>
        </PopoverContent>
      </Popover>
    </div>
  )
}
