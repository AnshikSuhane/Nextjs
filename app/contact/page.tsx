"use client";

import type React from "react";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const formInView = useInView(formRef, { once: true, amount: 0.2 });
  const infoInView = useInView(infoRef, { once: true, amount: 0.2 });

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formState),
    });

    const data = await res.json();

    if (data.success) {
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setIsSubmitted(false), 5000);
    }
  } catch (err) {
    console.error(err);
  } finally {
    setIsSubmitting(false);
  }
};

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
        <Badge className="mb-2">Contact Me</Badge>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Get In Touch
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Have a question or want to work together? Feel free to contact me!
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
        <motion.div
         
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold">Let's Talk</h2>
          <p className="text-muted-foreground">
            Feel free to reach out through any of the following methods. I'll
            get back to you as soon as possible.
          </p>

          <div className="grid gap-4">
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex">
                  <div className="bg-primary p-4 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      anshiksuhane9@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex">
                  <div className="bg-primary p-4 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-sm text-muted-foreground">
                      +91 9301932210
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex">
                  <div className="bg-primary p-4 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      Indore (Madhya Pradesh)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <motion.div className="pt-4">
      <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
      <div className="grid grid-cols-4 gap-4">
        <Link href="https://www.linkedin.com/in/anshik-suhane-003a89316/" passHref>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-12 w-12 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
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

        <Link href="https://github.com/AnshikSuhane" passHref>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-12 w-12 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
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
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span className="sr-only">GitHub</span>
          </Button>
        </Link>

        <Link href="https://x.com/AnshikSuha6771" passHref>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-12 w-12 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
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
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
            <span className="sr-only">Twitter</span>
          </Button>
        </Link>

        <Link href="https://www.instagram.com/anshik.suhane/" passHref>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-12 w-12 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
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
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className="sr-only">Instagram</span>
          </Button>
        </Link>
      </div>

      <div className="relative mt-8 rounded-lg overflow-hidden h-[300px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14657.122407066314!2d80.3924333!3d23.8342944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b58b0cf56517%3A0xb3d98d896328e141!2sKatni%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1713083274215!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        />
      </div>
      </motion.div>
    </motion.div>
          
        

        <motion.div
          ref={formRef}
          initial={{ opacity: 0, x: 20 }}
          animate={formInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Card className="overflow-hidden border-none shadow-lg">
            <CardContent className="p-0">
              <div className="bg-primary p-6 text-primary-foreground">
                <h2 className="text-2xl font-bold">Send Me a Message</h2>
                <p className="text-primary-foreground/80 mt-2">
                  I'd love to hear from you! Fill out the form below and I'll
                  get back to you as soon as possible.
                </p>
              </div>
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e)=>setFormState({...formState,name:e.target.value})}
                      required
                      className="transition-all focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formState.email}
                      onChange={(e)=>setFormState({...formState,email:e.target.value})}
                      required
                      className="transition-all focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={formState.subject}
                      onChange={(e)=>setFormState({...formState,subject:e.target.value})}
                      required
                      className="transition-all focus-visible:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      value={formState.message}
                      onChange={(e)=>setFormState({...formState,message:e.target.value})}
                      required
                      className="transition-all focus-visible:ring-primary"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-md bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                    >
                      Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}
                </form>
              </div>
            </CardContent>
          </Card>
        </motion.div>
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
                Let's Create Something Amazing
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Whether you have a project in mind or just want to say hello,
                I'm always open to new opportunities and connections.
              </p>
              <div className="mt-8">
                <Button size="lg" className="animate-pulse-slow">
                  <Mail className="mr-2 h-4 w-4" />
                  anshiksuhane9@gmail.com
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
