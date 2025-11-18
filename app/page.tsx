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
              </div>
            </TabsContent>
          </Tabs>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={skillsInView ? { opacity: 1, y: 0 } : {}}
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
