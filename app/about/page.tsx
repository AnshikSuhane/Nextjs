"use client";

import type React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Briefcase,
  Code,
  Download,
  GraduationCap,
  User,
  Waypoints,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { TechCard } from "@/components/tech-card";
import personal from "@/public/personal.png";

export default function AboutPage() {
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const framerMotionRef = useRef<HTMLDivElement>(null);

  const experienceInView = useInView(experienceRef, { once: true, amount: 0.2 });
  const educationInView = useInView(educationRef, { once: true, amount: 0.2 });
  const framerMotionInView = useInView(framerMotionRef, { once: true, amount: 0.2 });

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
        <Badge className="mb-2">About Me</Badge>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Know Who I Am
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Get to know more about my background, experience, and what drives me
        </p>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-16 xl:grid-cols-[1fr_450px] max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-6"
        >
          <div className="bg-white shadow-xl rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:scale-105">
            <div className="flex items-center mb-6 animate-slide-in-left">
              <User className="w-12 h-12 text-indigo-600 mr-4 animate-spin-slow" />
              <h2 className="text-3xl font-bold text-gray-800">Who I Am</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed animate-fade-in">
              Hi, I'm a passionate web developer with a strong focus on creating dynamic and user-friendly web applications.
              I have completed my schooling up to 12th grade from <span className="font-semibold text-indigo-600">Tilak Rastriya School, Katni (MP)</span>.
              My journey into coding is fueled by a love for problem-solving and continuous learning.
            </p>
          </div>
            
          <div className="pt-4">
            <Link href="/contact">
              <Button className="group">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button variant="outline" className="ml-4">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <div className="relative mx-auto w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden border-4 border-primary/20 animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-white text-4xl font-bold">
              <Image
                src={personal}
                alt="Anshik Suhane"
                width={350}
                height={350}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="font-bold text-xl">Personal Info</h3>
              <div className="grid gap-3">
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="font-medium">Name:</span>
                  <span>Anshik Suhane</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="font-medium">Age:</span>
                  <span>20 Years</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="font-medium">Location:</span>
                  <span>Indore, Madhya Pradesh</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="font-medium">Email:</span>
                  <span className="break-all">anshiksuhane9@gmail.com</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="font-medium">Languages:</span>
                  <span>English</span>
                </div>
                <div className="grid grid-cols-[100px_1fr] gap-2">
                  <span className="font-medium">Freelance:</span>
                  <span className="text-green-500 font-medium">Available</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Education Section */}
      <motion.div ref={educationRef}>
        <h2 className="text-2xl font-bold text-center mt-12">Education</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={educationInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center my-8"
        >
          <Badge className="mb-2">High School Education</Badge>
          <p className="text-lg">
            Completed 12th grade from 
            <span className="font-semibold text-indigo-600"> Tilak Rastriya School, Katni (MP)</span>
          </p>
        </motion.div>
      </motion.div>

      {/* Framer Motion Skills Section */}
      <motion.div ref={framerMotionRef}>
        <h2 className="text-2xl font-bold text-center mt-12">My Skills with Framer Motion</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={framerMotionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center my-8"
        >
          <p className="text-lg">
            I have experience using Framer Motion to create smooth and interactive animations for web applications. 
            Through engaging transitions and animations, I aim to enhance user experience and visual appeal.
          </p>
        </motion.div>
      </motion.div>

      <div className="mt-20 max-w-6xl mx-auto">
        <Tabs defaultValue="experience" className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center mb-12"
          >
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="experience" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span className="hidden sm:inline">Experience</span>
              </TabsTrigger>
              <TabsTrigger value="education" className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4" />
                <span className="hidden sm:inline">Education</span>
              </TabsTrigger>
              <TabsTrigger value="skills" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Skills</span>
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="experience" className="space-y-8">
            <div ref={experienceRef} className="space-y-8">
              {[
                {
                  title: "Frontend Developer Intern",
                  company: "WebSolutions Co.",
                  period: "2022 - Present",
                  description:
                    "Assisting in the development of user interfaces using React. Collaborating with designers to implement pixel-perfect designs.",
                  achievements: [
                    "Developed responsive components for client projects",
                    "Participated in team meetings and contributed to discussions",
                  ],
                  delay: 0.2,
                },
              ].map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={experienceInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: job.delay, duration: 0.5 }}
                  className="relative pl-8 border-l-2 border-primary pb-8 last:pb-0"
                >
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold">{job.title}</h3>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {job.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{job.company}</p>
                    <p className="text-muted-foreground mt-2">{job.description}</p>
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        {job.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education" className="space-y-8">
            <div ref={educationRef} className="space-y-8">
              {/* Updated Education Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={educationInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative pl-8 border-l-2 border-primary pb-8 last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-bold">High School Diploma</h3>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      Completed 12th Grade
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">Tilak Rastriya School, Katni (MP)</p>
                  <p className="text-muted-foreground mt-2">
                    Completed my schooling with a focus on Commerce subjects.
                  </p>
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Technical Skills Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
                    <div className="space-y-4">
                      {/* Example Skill Bars */}
                      {[
                        { name: "Frontend Development", percentage: "90%" },
                        { name: "Backend Development", percentage: "85%" },
                        { name: "Database Management", percentage: "80%" },
                        { name: "UI/UX Design", percentage: "75%" },
                        { name: "DevOps", percentage: "70%" },
                      ].map((skill, i) => (
                        <div className="space-y-2" key={i}>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <Image
                                src="https://cdn3.vectorstock.com/i/1000x1000/95/32/front-end-developer-icon-outline-vector-32839532.jpg"
                                alt={skill.name}
                                width={24}
                                height={24}
                                className="object-contain"
                              />
                              <span className="font-medium">{skill.name}</span>
                            </div>
                            <span className="text-muted-foreground">{skill.percentage}</span>
                          </div>
                          <div className="progress-bar" style={{ "--progress": skill.percentage } as React.CSSProperties}>
                            <div className="h-full bg-primary rounded-full" style={{ width: skill.percentage }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Professional Skills</h3>
                    <div className="space-y-4">
                      {[
                        { name: "Problem Solving", percentage: "95%" },
                        { name: "Communication", percentage: "85%" },
                        { name: "Team Collaboration", percentage: "90%" },
                        { name: "Project Management", percentage: "80%" },
                        { name: "Adaptability", percentage: "95%" },
                      ].map((skill, i) => (
                        <div className="space-y-2" key={i}>
                          <div className="flex justify-between">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted-foreground">{skill.percentage}</span>
                          </div>
                          <div className="progress-bar" style={{ "--progress": skill.percentage } as React.CSSProperties}>
                            <div className="h-full bg-primary rounded-full" style={{ width: skill.percentage }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Technologies & Tools Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="md:col-span-2"
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-6">Technologies & Tools</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                      {/* Example Technologies */}
                      <TechCard
                        name="JavaScript"
                        icon="https://d2jdgazzki9vjm.cloudfront.net/images/javascript/javascript_logo.png"
                        delay={0.1}
                      />
                      <TechCard
                        name="TypeScript"
                        icon="https://cdn-icons-png.flaticon.com/512/919/919832.png"
                        delay={0.15}
                      />
                      <TechCard
                        name="React"
                        icon="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945110.png?f=webp&w=256"
                        delay={0.2}
                      />
                      <TechCard
                        name="Next.js"
                        icon="https://images.prismic.io/turing/652ec31afbd9a45bcec81965_Top_Features_in_Next_js_13_7f9a32190f.webp?auto=format%2Ccompress&fit=max&w=3840"
                        delay={0.25}
                      />
                      <TechCard
                        name="Node.js"
                        icon="https://cdn-icons-png.flaticon.com/128/5968/5968322.png"
                        delay={0.3}
                      />
                      <TechCard
                        name="MongoDB"
                        icon="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png"
                        delay={0.35}
                      />
                      <TechCard
                        name="REST APIs"
                        icon="https://dfdmyvckxgqn5.cloudfront.net/_app/immutable/assets/building-elegant-rest-apis.d8f4cbc6.jpg"
                        delay={0.55}
                      />
                      <TechCard
                        name="HTML5"
                        icon="https://cdn-icons-png.flaticon.com/256/174/174854.png"
                        delay={0.6}
                      />
                      <TechCard
                        name="CSS3"
                        icon="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png"
                        delay={0.65}
                      />
                      <TechCard
                        name="Tailwind"
                        icon="https://cdn.iconscout.com/icon/free/png-256/free-tailwindcss-3521829-2945278.png"
                        delay={0.7}
                      />
                      <TechCard
                        name="Framer"
                        icon="https://konstantinlebedev.com/static/76d81ec25cd799b15cd16c0b16e869af/cover.png"
                        delay={0.75}
                      />
                      <TechCard
                        name="GitHub"
                        icon="https://avatars1.githubusercontent.com/u/9919?v=4"
                        delay={0.9}
                      />
                      <TechCard
                        name="Docker"
                        icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCAJH4R87uV3Rvncs3L3urjeNESAfJGTMTrA&s"
                        delay={0.95}
                      />
                      <TechCard
                        name="Vercel"
                        icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-vtiBy89TRfu4e7bC7WJpf1IX1TPuOvyhJw&s"
                        delay={1.05}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-animated opacity-20"></div>
          <div className="relative glass-effect rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Work Together?
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                I'm currently available for freelance work and exciting
                opportunities. Let's build something amazing together.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get in Touch
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View My Work
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
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
      className={className}
    >
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  );
}