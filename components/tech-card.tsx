"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface TechCardProps {
  name: string
  icon: string
  delay?: number
}

export function TechCard({ name, icon, delay = 0 }: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card border border-border hover:shadow-md transition-all"
    >
      <div className="relative h-12 w-12">
        <Image src={icon || "/placeholder.svg"} alt={name} width={48} height={48} className="object-contain" />
      </div>
      <span className="font-medium text-sm">{name}</span>
    </motion.div>
  )
}
