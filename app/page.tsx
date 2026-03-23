"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Star,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SkillBar } from "@/components/skill-bar";
import { ProjectGallery } from "@/components/project-gallery";
import personal from "@/public/personal.png";
import { featuredProjects, skillSet, tools } from "@/data/Project";
import Link from "next/link";

const resume = "/AnshikSuhane.pdf";

export default function Home() {
  // Refs for scroll animations
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  // Check if elements are in view
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.2 });
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.2 });
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    amount: 0.2,
  });

  // Parallax scroll effect
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="relative">
      {/* Background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl opacity-20 animate-float-delay"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <motion.div
          className="container px-4 md:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <motion.div
              className="flex flex-col justify-center space-y-4 order-2 lg:order-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <Badge className="mb-4" variant="outline">
                    Full Stack Developer
                  </Badge>
                </motion.div>
                <motion.h1
                  className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Hi, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-400 via-red-400 to-green-400">
                    {" "}Anshik Suhane
                  </span>
                </motion.h1>
                <motion.p
                  className="max-w-[600px] text-muted-foreground md:text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  I build exceptional digital experiences that are fast,
                  accessible, visually appealing, and responsive.
                </motion.p>
              </div>
              <motion.div
                className="flex flex-col gap-3 min-[400px]:flex-row"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto group">
                    Hire Me
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <a
                  href={resume}
                  download="AnshikSuhane.pdf"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto flex gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </Button>
                </a>
              </motion.div>
              <motion.div
                className="flex gap-4 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Link
                  href="https://github.com/AnshikSuhane"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/anshik-suhane-003a89316/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:anshiksuhane9@gmail.com">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border-4 border-primary/20 animate-float">
                <Image
                  src={personal}
                  alt="Anshik Suhane"
                  width={350}
                  height={350}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/30 mix-blend-overlay" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section
        ref={skillsRef}
        className="py-16 md:py-24 lg:py-32 bg-muted/50 relative overflow-hidden"
      >
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4">My Skills</Badge>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Technical Expertise
            </h2>
            <p className="mt-3 text-muted-foreground md:text-lg max-w-3xl mx-auto">
              I've spent years refining my skills across the full stack. Here's
              what I bring to the table.
            </p>
          </motion.div>

          <Tabs defaultValue="frontend" className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList>
            </motion.div>

            <TabsContent value="frontend" className="space-y-4 sm:space-y-6">
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                <SkillBar
                  name="React"
                  progress={90}
                  delay={0.1}
                  icon="https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-1024.png"
                />
                <SkillBar
                  name="Next.js"
                  progress={85}
                  delay={0.2}
                  icon="https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-2/15/nextjs-1024.png"
                />
                <SkillBar
                  name="TypeScript"
                  progress={80}
                  delay={0.3}
                  icon="https://cdn1.iconfinder.com/data/icons/brands-5/512/fi-brands-typescript-1024.png"
                />
                <SkillBar
                  name="Tailwind CSS"
                  progress={95}
                  delay={0.4}
                  icon="https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-3/15/tailwind-1024.png"
                />
                <SkillBar
                  name="Framer Motion"
                  progress={75}
                  delay={0.5}
                  icon="https://konstantinlebedev.com/static/76d81ec25cd799b15cd16c0b16e869af/cover.png"
                />
                <SkillBar
                  name="UI/UX Design"
                  progress={70}
                  delay={0.6}
                  icon="https://cdn.sanity.io/images/599r6htc/regionalized/5094051dac77593d0f0978bdcbabaf79e5bb855c-1080x1080.png?w=540&h=540&q=75&fit=max&auto=format"
                />
              </div>
            </TabsContent>

            <TabsContent value="backend" className="space-y-4 sm:space-y-6">
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                <SkillBar
                  name="Node.js"
                  progress={85}
                  delay={0.1}
                  icon="https://cdn.hashnode.com/res/hashnode/image/upload/v1703155483443/e42a7be2-890a-4bd2-accf-306e53ccebbd.png"
                />
                <SkillBar
                  name="Express"
                  progress={80}
                  delay={0.2}
                  icon="https://media.licdn.com/dms/image/v2/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=4jKdvoBWv587Ek7xruyjjOaKoMjvAKw3eAN4MKlJZPc"
                />
                <SkillBar
                  name="MongoDB"
                  progress={75}
                  delay={0.3}
                  icon="https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png"
                />
                <SkillBar
                  name="REST APIs"
                  progress={90}
                  delay={0.6}
                  icon="https://dfdmyvckxgqn5.cloudfront.net/_app/immutable/assets/building-elegant-rest-apis.d8f4cbc6.jpg"
                />
              </div>
            </TabsContent>

            <TabsContent value="other" className="space-y-4 sm:space-y-6">
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                <SkillBar
                  name="Git & GitHub"
                  progress={90}
                  delay={0.1}
                  icon="https://avatars1.githubusercontent.com/u/9919?v=4"
                />
                <SkillBar
                  name="Docker"
                  progress={65}
                  delay={0.2}
                  icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCAJH4R87uV3Rvncs3L3urjeNESAfJGTMTrA&s"
                />
                <SkillBar
                  name="Shadcn UI"
                  progress={65}
                  delay={0.2}
                  icon="https://media.licdn.com/dms/image/sync/v2/D5627AQEDSh526VG5EQ/articleshare-shrink_800/articleshare-shrink_800/0/1732894833923?e=2147483647&v=beta&t=4UdrCu6_dwMREzZ6q053mSsIQsWQA2adFFsg7nj9q74"
                />
                <SkillBar
                  name="Chakra UI"
                  progress={65}
                  delay={0.2}
                  icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvxDjw3t33aQYuBVMUTb1kDG7gKeDkBHbFhA&s"
                />
                <SkillBar
                  name="Netlify"
                  progress={65}
                  delay={0.2}
                  icon="https://flaviocopes.com/images/netlify/netlify-logo.png"
                />
                <SkillBar
                  name="Postman"
                  progress={65}
                  delay={0.2}
                  icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTCtlPnz9P1zvOHh_oKi5-C_9RBprAFrARbQ&s"
                />
                <SkillBar
                  name="Slack"
                  progress={65}
                  delay={0.2}
                  icon="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/slack-logo-slide.png"
                />
                <SkillBar
                  name="Firebase"
                  progress={65}
                  delay={0.2}
                  icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuawUuQCcq6fD-KpdmL4QixUOyqQqdrVNIDg&s"
                />
                   <SkillBar
                  name="Stripe"
                  progress={65}
                  delay={0.2}
                  icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGluJhW7I1NYU7jF77E-9K9I46_ib_DUNHw&s"
                />
                <SkillBar
                  name="Gemini AI."
                  progress={65}
                  delay={0.2}
                  icon="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBhUTBxQWFhUXGR8VGBcYGB0aGhweGBgaHRcfFxwfKCgsGSExIhofIjEhLCkvLjE6HiE1PTUsNy0tLisBCgoKDg0OGxAQGzMmICYvLTY3LS82LTc3Mjc3LSs3NzItMTUvLS0yLzctNS81OC0wLSsvLSsuNy0tLS43LTcwNf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAABgcIBQQDAgH/xABNEAABAwIEAgUECw4DCQAAAAABAAIDBBEFBhIhBzETQVFhcQgigbMUMjY3UmJyc5GhsRUWFyMzQlR0k7LBw9HSNDWEGCVTY5KUouHw/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAQFAQMGAgf/xAApEQEAAgEDAgQGAwAAAAAAAAAAAQIDBBESBTFRkaGxEyEiQYHhMmFx/9oADAMBAAIRAxEAPwC8UREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEXLzLircIwh8g9sfNYO1x5fRzPcCsTO0by948dslopXvLn4TmV1fmeanIbobcMIvclhAffffrIsOQ61JFTOEVElBXslj3LTfx+ECe8Ej0q4aaeOqp2vhN2uAIPiteGbTXeU/qenphyRGPttHnD6oiLarRERARF+ZZGQxF0pDWgXJJsABuST1BB+kVSZv444Vhshjy7H7JeNjISWxA/F65PqHYSq7ruNOdKp14JIou6OJp9ZrQafRZioONec6U/j3xS/ORAer0Kysn8bMFxiYR4432LIdg8u1Qnxdto9It3oLTRfwEOFwv6gIiICIiAiIgIiICIiAiKNcRMzuyjlWSpiaHvFmRtN9OpxsC63UNzba9rXF7oJKiz1k3jPmGTMcbMc0SQyvDCAwNLNZsCwjnYm9je60KgIiICIv44hrblB/UWdcX464+/F3OwhkLYAfMY9hc5zeoyEOG552Frct+ZvLKGPRZny3DVwNLRK25ad9LmuLXi+1wHNIvbfmg7CIvH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Ds5t/wA5pvYHY3I2vcaMwziHlDEqYPhrYG3/ADZXiJw7i19j/BR/PvCLCcz1Lp8Pd7HqHbuIF43nrL27WcfhA9pIJVX1HA/OET7M9jv72yG3/k0H6kFlZ94vYLg+HuZl+RtRUOFmlnnRsv8AnOdydb4Iv32XK4M8QMz5lxE02JxtmjY3U+o9o5nPSH2Gl5J2As07ONzYqPYHwFxiecHG54omdYjvI89o3ADfG58Fd2Wcu4ZlfCm0+Ds0sG5J3c5x5uees/8AoCwACCkfKS90tN8wfWOUv8nH3DzfrT/UwL18UeGtXnfFYpaadkQjj0Wc0knzib7eK7fDDJ8+SsAfT1EjZS6Yy6mggAFkbbb/ACPrQS9Zp8oX3fD5hn7z1pZVZxJ4V1mcsx+yaeoZGOjbHpc0k+aXG+3ig6/A73s6bxl9dIp4o7kDLsuVcqxUs7xIYy86mggHXI53I/KUiQZT41e+bV+MfqIlcg94P/Qfy1yM98Hq7NGa5quGpjY2TTZpY4kaY2M3IPxbqbDK034Ovud0jdfsf2P0ljpvpte3Ygz1wZ98uk8X+pkU48pj/E0PyZftiXVyPwdrss5qhqpqmN4iLiWhjgTqY5uxJ+MpBxU4e1OeZac00zIuhDwdTS6+vRa1uXtUHC8m33M1Pz/8tqt5QvhdkqoyRhUsVTK2Uvk6QFoIt5oFt/BTRBTvlJ/5BS/PO/cXj8mb8hXeMP2SqccUskVGd8OhjppWxdG8vJcCb3bawsvhwqyDU5GZUCpmZL02gjS0tto13vfn7YfQgz/xM939b8+/7VqbJ/uSo/1eL1TVVuaeCtfjmY56mOqjaJZHPDSxxIueRN1bmCUTsNwWCGQhxiiZGSORLGBpI+hB7UREBERBHsLy4aHMktQS3S6+gC9wXkF9+zrA8VIURYiNmrFhpiiYpH3mfMREWW0REQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//9k="
                />
              </div>
            </TabsContent>
          </Tabs>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-20 text-center"
          >
            <h3 className="text-xl font-bold mb-6">Technologies I Work With</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {skillSet.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: tech.delay, duration: 0.5 }}
                  viewport={{ once: true }}
                  style={{ borderLeft: `6px solid ${tech.borderColor}` }}
                  className="flex flex-col items-center p-3 rounded-lg bg-white dark:bg-white dark:text-black border border-gray-200 hover:shadow-md transition-all"
                >
                  <div className="relative h-8 w-8 sm:h-10 sm:w-10 mb-2">
                    <Image
                      src={tech.img}
                      alt={tech.name}
                      width={60}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <h3 className="text-xl font-bold mb-6">Tools I Work With</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {tools.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: tech.delay, duration: 0.5 }}
                  viewport={{ once: true }}
                  style={{ borderLeft: `6px solid ${tech.borderColor}` }}
                  className="flex flex-col items-center p-3 rounded-lg bg-white dark:bg-white dark:text-black border border-gray-200 hover:shadow-md transition-all"
                >
                  <div className="relative h-8 w-8 sm:h-10 sm:w-10 mb-2">
                    <Image
                      src={tech.img}
                      alt={tech.name}
                      width={60}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-16 md:py-24 lg:py-32 relative">
        <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-5">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent"></div>
          <div className="h-full w-full bg-[url('/placeholder.svg')] bg-repeat bg-[length:50px_50px]"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
        </motion.div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge className="mb-4">My Work</Badge>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-3 text-muted-foreground md:text-lg max-w-3xl mx-auto">
              Check out some of my recent work. Each project represents a unique
              challenge and solution.
            </p>
          </motion.div>

          <div className="space-y-12">
            <ProjectGallery projects={featuredProjects} />
          </div>

          <div className="mt-12 text-center">
            <Link href="/projects">
              <Button variant="outline" className="group">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-80 animate-gradient"></div>
            <div className="relative backdrop-blur-sm bg-background/50 rounded-2xl p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                    Ready to Work Together?
                  </h2>
                  <p className="mt-3 text-muted-foreground md:text-lg">
                    I'm currently available for freelance work and exciting
                    opportunities. Let's build something amazing together.
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href="/contact" className="w-full sm:w-auto">
                      <Button size="lg" className="w-full sm:w-auto">
                        Get in Touch
                      </Button>
                    </Link>
                    <Link href="/projects" className="w-full sm:w-auto">
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto"
                      >
                        View My Work
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
