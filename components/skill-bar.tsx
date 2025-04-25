"use client"

import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface SkillBarProps {
  name: string
  progress: number
  delay?: number
  icon?: string
}

export function SkillBar({ name, progress, delay = 0, icon }: SkillBarProps) {
  return (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {icon && (
            <div className="h-6 w-6 relative flex-shrink-0">
              <Image
                src={icon || "/placeholder.svg"}
                alt={`${name} icon`}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          )}
          <span className="font-medium">{name}</span>
        </div>
        <span className="text-muted-foreground">{progress}%</span>
      </div>
      <div className="progress-bar" style={{ "--progress": `${progress}%` } as React.CSSProperties}>
        <div className="h-full bg-primary rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
    </motion.div>
  )
}
