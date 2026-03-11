'use client'
import { motion } from "motion/react"
import { useState } from "react"

export default function Card({...props}) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div {...props}
      layout
      onClick={() => setOpen(!open)}
      style={{
        background: "#eee",
        padding: 20,
        borderRadius: 12,
        width: 300,
        cursor: "pointer"
      }}
    >
      <motion.h2 layout>My Card</motion.h2>
      {open && <p>Extra content that appears when expanded!</p>}
    </motion.div>
  )
}