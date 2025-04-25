"use client"

import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Project {
  title: string
  description: string
  longDescription?: string
  liveUrl?: string
  code: string
  image: string | StaticImageData

  tags: string[]
}

interface ProjectGalleryProps {
  projects: Project[]
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const currentProject = projects[currentIndex]

  return (
    <div className="relative overflow-hidden rounded-xl bg-card border border-border shadow-lg">
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <Button variant="secondary" size="icon" className="rounded-full" onClick={prevProject}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="icon" className="rounded-full" onClick={nextProject}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2"
        >
          <div className="relative aspect-video md:aspect-auto">
            <Image
              src={currentProject.image || "/placeholder.svg"}
              alt={currentProject.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-30"></div>
          </div>

          <div className="p-6 md:p-8 flex flex-col">
            <h3 className="text-2xl font-bold mb-2">{currentProject.title}</h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {currentProject.tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="font-normal">
                  {tag}
                </Badge>
              ))}
            </div>

            <p className="text-muted-foreground mb-4">{currentProject.description}</p>
            <p className="text-muted-foreground flex-grow">{currentProject.longDescription}</p>

            <div className="flex gap-4 mt-6">
              {currentProject.liveUrl && (
                <Link href={currentProject.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                </Link>
              )}
              <Link href={currentProject.code} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <Github className="h-4 w-4 mr-2" />
                  Source Code
                </Button>
              </Link>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div className="text-sm text-muted-foreground">
                {currentIndex + 1} of {projects.length}
              </div>
              <div className="flex gap-1">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 w-2 rounded-full ${i === currentIndex ? "bg-primary" : "bg-muted"}`}
                    aria-label={`Go to project ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}