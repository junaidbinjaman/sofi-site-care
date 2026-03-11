'use client'
import { motion } from "motion/react"
import { useState } from "react"

export default function Example() {
  const [active, setActive] = useState("home")
  const tabs = ["home", "about", "contact"]

  return (
    <div style={{ display: "flex", gap: 20 }}>
      {tabs.map(tab => (
        <div key={tab} onClick={() => setActive(tab)} style={{ position: "relative" }}>
          {tab}
          {active === tab && (
            <motion.div
              layoutId="underline"
              style={{ height: 3, background: "blue" }}
            />
          )}
        </div>
      ))}
    </div>
  )
}
