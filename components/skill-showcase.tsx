"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface Skill {
  name: string
  icon: string
  description: string
  projects?: string[]
}

interface SkillShowcaseProps {
  skills: Skill[]
}

export function SkillShowcase({ skills }: SkillShowcaseProps) {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center p-3 rounded-lg cursor-pointer transition-all ${
              activeSkill?.name === skill.name
                ? "bg-primary/10 border-primary"
                : "bg-card border-border hover:border-primary/50"
            } border`}
            whileHover={{ y: -5 }}
            onClick={() => setActiveSkill(skill)}
          >
            <div className="relative h-12 w-12 mb-2">
              <Image
                src={skill.icon || "/placeholder.svg"}
                alt={skill.name}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <span className="text-xs font-medium text-center">{skill.name}</span>
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeSkill && (
          <motion.div
            key={activeSkill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <Image
                      src={activeSkill.icon || "/placeholder.svg"}
                      alt={activeSkill.name}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{activeSkill.name}</h3>
                    <p className="text-muted-foreground">{activeSkill.description}</p>
                  </div>
                </div>

                {activeSkill.projects && activeSkill.projects.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Projects using {activeSkill.name}:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {activeSkill.projects.map((project, i) => (
                        <li key={i}>{project}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
