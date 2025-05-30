"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image, { type StaticImageData } from "next/image"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SkillShowcase } from "@/components/skill-showcase"
import ecommerce from "@/public/ecommerce.png";
import realEstate from "@/public/RealEstate.png"
import portfolio from "@/public/Portfolio.png"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string | StaticImageData
  liveUrl?: string
  code: string
  tags: string[]
  category: "all" | "frontend"
  delay: number
}

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl card-hover"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative aspect-video overflow-hidden rounded-t-xl">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={600}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
        {project.liveUrl && (
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="secondary" className="rounded-full">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
      <div className="p-6 bg-card">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-muted-foreground mt-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, i) => (
            <Badge key={i} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-6 flex gap-2">
          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm">
                View Project
              </Button>
            </Link>
          )}
          <Link href={project.code} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              <Github className="h-4 w-4 mr-2" />
              View Code
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      id: "ecommerce",
      title: "ShopHub E-commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and admin dashboard.",
      longDescription:
        "This comprehensive e-commerce platform features user authentication, product catalog with filtering and search, shopping cart functionality, secure checkout with Stripe integration, order management, and an admin dashboard for inventory control. Built with React, Supabase.",
      image: ecommerce,
      liveUrl: "https://health-tracker-a187.vercel.app/",
      code: "https://github.com/AnshikSuhane/shopHub.git",
      tags: ["React", "Node.js","supabase"],
      category: "frontend",
      delay: 0.1,
    },
    {
      id: "ease-estate",
      title: "EaseEstate",
      description: "A responsive Property finder platform with real-time booking System.",
      longDescription: 
        "EaseEstate is a responsive full-stack property finder platform that allows users to search, explore, and book properties in real-time. It features a seamless booking system, property filters, user authentication, and admin management. Built using Next.js, Socket.io for real-time communication, PostgreSQL for data storage, and hosted on AWS for scalability and performance.",
      image: realEstate,
      liveUrl: "https://thriving-dodol-5e0eb7.netlify.app/",
      code: "https://github.com/AnshikSuhane/RealEstate.git",
      tags: ["React Js", "Clerk", "Tailwind CSS"],
      category: "frontend",
      delay: 0.2,
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      description: "A modern portfolio site built with Next.js and Framer Motion animations.",
      longDescription:
        "This portfolio website showcases professional work with smooth animations and transitions. Features include project galleries, skill visualization, contact forms, and responsive design for all devices. Built with Next.js, Framer Motion, and Tailwind CSS.",
      image: portfolio,
      liveUrl: "https://nextjs-u832-q1co547fg-anshiksuhanes-projects.vercel.app/",
      code: "https://github.com/AnshikSuhane/AnshikSuhane.git",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
      category: "frontend",
      delay: 0.3,
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 lg:py-32 pt-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center mb-8"
      >
        <Link href="/">
          <Button variant="ghost" className="group flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="space-y-2 text-center mb-12"
      >
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          A collection of my work across web and mobile development
        </p>
      </motion.div>

      <Tabs defaultValue="all" className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <TabsList className="grid grid-cols-2 w-full max-w-xl">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
          </TabsList>
        </motion.div>

        <TabsContent value="all" className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="frontend" className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((project) => project.category === "frontend")
              .map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <section className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-2 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter">Technologies Used</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Click on a technology to learn more about how I've used it in my projects
          </p>
        </motion.div>

        <SkillShowcase
          skills={[
            {
              name: "React",
              icon: "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945110.png?f=webp&w=256",
              description: "A JavaScript library for building user interfaces with reusable components.",
              projects: ["EaseEstate-RealEstate Plattform"],
            },
            {
              name: "Next.js",
              icon: "https://images.prismic.io/turing/652ec31afbd9a45bcec81965_Top_Features_in_Next_js_13_7f9a32190f.webp?auto=format%2Ccompress&fit=max&w=3840",
              description: "A React framework that enables server-side rendering and static site generation.",
              projects: ["E-commerce Plattform","PortFolio Website"],
            },
          
            {
              name: "TypeScript",
              icon: "https://cdn.iconscout.com/icon/free/png-256/free-typescript-1174965.png",
              description: "A strongly typed programming language that builds on JavaScript.",
              projects: ["Portfolio Website","E-commerce Platform"],
            },
            {
              name: "Tailwind CSS",
              icon: "https://scontent.fidr4-2.fna.fbcdn.net/v/t39.30808-6/299463877_560030875914611_8025210373789510385_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=RHC7jsxkEmwQ7kNvwF9UpQI&_nc_oc=Adm5HgwlzWQPYdVA1u2CgUxUN90o03aoZHTCpGwyzSTxFCMSixRhXs3U4eGThI0jHjiOMVvYTxM0Lh5IskZJb_px&_nc_zt=23&_nc_ht=scontent.fidr4-2.fna&_nc_gid=4aIV5htoQh9TVEdfxpt_XA&oh=00_AfHDZyoUOk-viKTG5GHoTOCWmS6fxEugQOskTcDgPwZx1w&oe=68101F77",
              description: "A utility-first CSS framework for rapidly building custom user interfaces.",
              projects: ["Portfolio Website", "E-commerce Platform","EaseEstate-RealEstate Plattform"],
            },
            {
              name: "Framer Motion",
              icon: "https://user-images.githubusercontent.com/38039349/60953119-d3c6f300-a2fc-11e9-9596-4978e5d52180.png",
              description: "A production-ready motion library for React.",
              projects: ["Portfolio Website", "E-commerce Platform"],
            },
          ]}
        />
      </section>
    </div>
  )
}