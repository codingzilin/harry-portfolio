'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

export default function ContactSection() {
  return (
    <><div className='flex py-6'>
      <p className='font-mono text-lg'>Feel free to contact me at harry.song518@outlook.com</p>
    </div>
    <div className='flex flex-row gap-4'>
        <Button 
          className='font-mono rounded-2xl'
          variant="outline"
          onClick={() => window.open('https://github.com/codingzilin', '_blank')}>
          <FaGithub />GitHub<MdArrowOutward /></Button>
        <Button
          className='font-mono rounded-2xl'
          variant="outline"
          onClick={() => window.open('https://www.linkedin.com/in/zilin-song', '_blank')}
          >
          <FaLinkedinIn />LinkedIn<MdArrowOutward /></Button>
        <Button className='font-mono rounded-2xl' variant="outline"><FaInstagram />Instagram</Button>
    </div></>
  )
}
