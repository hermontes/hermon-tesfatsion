"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SkillBadge } from "@/components/skill-badge";
import {
  Mail
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa"

import ProjectCard from "@/components/project-card";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen custom-appear">
      {/* Hero Section with mint background */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#e6f5f0] dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="space-y-4 md:w-3/5">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Hello, I&apos;m Hermon! <span className="bg-transparent inline-block custom-spin">👋</span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Full Stack Software Engineer | 3+ Years Experience
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[600px]">
                I create software with the user in mind, focusing on usability and long-term impact. Let&apos;s connect and
                build something great!
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  asChild
                  className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-900 text-gray-900 hover:bg-gray-100 dark:border-gray-50 dark:text-gray-50 dark:hover:bg-gray-800"
                >
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block md:w-2/5">
              {/* hero personal image */}
              <div className="aspect-square max-w-[300px] mx-auto bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center">
                <span className="">
                  <Image alt="Hermon Tesfatsion in a professional setting" className="rounded-full" src={"/prof.jpg"} width={400} height={40}></Image>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-12 md:py-24 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex flex-col lg:flex-row lg:gap-8 items-center space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mx-auto max-w-[700px] text-base md:text-lg lg:text-xl lg:text-left dark:text-gray-200">
                Full Stack Software Engineer with expertise in Java, React, and cloud technologies. I build custom integrations and responsive web applications with scalable architecture and intuitive interfaces. I enjoy delivering practical solutions that solve technically challenging and vague problems while creating real business value.
              </p>
            </div>
            <div className="w-full max-w-3xl space-y-4">
              <h3 className="text-xl font-bold">Core Skills</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <SkillBadge skill="Java" icon="java" />
                <SkillBadge skill="JavaScript" icon="javascript" />
                <SkillBadge skill="React" icon="react" />
                <SkillBadge skill="Next.js" icon="nextjs" />
                <SkillBadge skill="Node.js" icon="nodejs" />
                <SkillBadge skill="Python" icon="python" />
                <SkillBadge skill="Docker" icon="docker" />
                <SkillBadge skill="AWS" icon="aws" />
                <SkillBadge skill="MongoDB" icon="mongodb" />
                <SkillBadge skill="SQL" icon="database" />
                <SkillBadge skill="HTML/CSS" icon="html" />
                <SkillBadge skill="Tailwind" icon="tailwind" />
                <SkillBadge skill="CI/CD" icon="git" />
                <SkillBadge skill="RESTful APIs" icon="api" />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Projects Section */}
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                A showcase of my recent development work and personal projects.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl">
              <ProjectCard
                title="Soccer Camp Registration System"
                description="A comprehensive registration platform for soccer camps with user authentication, team selection, and payment processing."
                technologies={["Next.js", "PostgresSQL", "React", "Prisma", "RESTFul API", "Stripe", "Authentication", "Tailwind CSS"]}
                imageUrl="/soccer-camp.png?height=300&width=400"
                githubUrl="https://github.com/hermontes/soccer-camp"
                liveUrl="https://soccer-camp.vercel.app"
              />
              <ProjectCard
                title="NOAA Marine Sanctuaries Redesign"
                description="Revamped three National Marine Sanctuaries websites, boosting engagement by 32% through UX improvements and optimized web performance."
                technologies={["JavaScript", "Bootstrap", "HTML/CSS", "Accessibility"]}
                imageUrl="/noaa.jpg?height=300&width=400"
                githubUrl="https://github.com/hermontes/NOAA-Website-Projects"
                liveUrl="https://sanctuaries.noaa.gov/magazine/giys/boating-happens-here.html"
              />
              <ProjectCard
                title="Blogging Platform"
                description="Full-stack application with reusable components and RESTful APIs for complete blog management including features such as comments and likes."
                technologies={["Node.js", "Express", "MongoDB", "React"]}
                imageUrl="/review-fest.png?height=300&width=400"
                githubUrl="https://github.com/hermontes/BlogPost"
                liveUrl="https://review-fest.vercel.app/"
              />

            </div>

            {/* <Link href="/projects">
              <Button variant="outline" className="mt-4">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link> */}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="w-full py-12 md:py-24 lg:py-20">

        <div className="container mx-auto px-4 md:px-6">

          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div><Image src="/testudo.png" alt="Testudo - University of Maryland mascot" width={80} height={80} /></div>

            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
              {/* <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                My academic background and qualifications.
              </p> */}
            </div>

            <div className="w-full max-w-3xl">
              <div className="flex flex-col items-center space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-semibold tracking-tight">University of Maryland, College Park</h3>

                  <p className="text-lg text-gray-600 dark:text-gray-300">Bachelor of Science, Computer Science</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2019 - 2023</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let&apos;s connect and discuss how we can work together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
              {/* Email Contact */}
              <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
                  <Mail className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-500 dark:text-gray-400">Let&apos;s talk about your project</p>
                <Button asChild variant="outline" className="mt-2">
                  <Link href="mailto:hermontes6@gmail.com">
                    hermontes6@gmail.com
                  </Link>
                </Button>
              </div>

              {/* GitHub Contact */}
              <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
                  <FaGithub className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold">GitHub</h3>
                <p className="text-gray-500 dark:text-gray-400">Check out my projects</p>
                <Button asChild variant="outline" className="mt-2">
                  <Link href="https://github.com/hermontes" target="_blank" rel="noopener noreferrer">
                    @hermontes
                  </Link>
                </Button>
              </div>

              {/* LinkedIn Contact */}
              <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
                  <FaLinkedin className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold">LinkedIn</h3>
                <p className="text-gray-500 dark:text-gray-400">Connect professionally</p>
                <Button asChild variant="outline" className="mt-2">
                  <Link href="https://www.linkedin.com/in/hermontes/" target="_blank" rel="noopener noreferrer">
                    Hermon Tesfatsion
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center justify-center space-x-4">
              <Link
                href="https://github.com/hermontes" target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/hermontes/" target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <FaLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:hermontes8@gmail.com"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 Hermon Tesfatsion. 
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
