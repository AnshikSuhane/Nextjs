'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const GitHub = () => {
  // Animation variants for image scaling
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  // Animation variants for text and button entrance
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

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

      {/* GitHub Stats Section */}
      <div className="square has-transition">
        <div className="github-stats mt-8 flex flex-col items-center">
          <motion.h3 
            className="text-3xl font-bold mb-4" 
            variants={textVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }} // Use delay for the title
          >
            GitHub Stats
          </motion.h3>

          <motion.img 
            src="https://github-readme-stats.vercel.app/api?username=AnshikSuhane&theme=shadow_green&hide_border=false&include_all_commits=false&count_private=true" 
            alt="GitHub Stats"
            className="rounded-lg shadow-xl mb-4 w-full max-w-4xl" 
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          />

          <motion.img 
            src="https://nirzak-streak-stats.vercel.app/?user=AnshikSuhane&theme=shadow_green&hide_border=false" 
            alt="GitHub Streak Stats"
            className="rounded-lg shadow-xl mb-4 w-full max-w-4xl"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          />

          <motion.img 
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=AnshikSuhane&theme=shadow_green&hide_border=false&include_all_commits=false&count_private=true&layout=compact" 
            alt="Top Languages"
            className="rounded-lg shadow-xl mb-4 w-full max-w-4xl"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          />

          <motion.img 
            src="https://github-contributor-stats.vercel.app/api?username=AnshikSuhane&limit=5&theme=dark&combine_all_yearly_contributions=true" 
            alt="Top Contributed Repo"
            className="rounded-lg shadow-xl mb-4 w-full max-w-4xl"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          />
        </div>
      </div>
    
    </div>
  )
}

export default GitHub