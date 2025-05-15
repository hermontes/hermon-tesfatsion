
"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with mint background */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#e6f5f0] dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="space-y-4 md:w-3/5">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Hello, I'm Hermon! <span className="bg-transparent inline-block custom-spin">👋</span>
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                Full Stack Software Engineer | 3+ Years Experience
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[600px]">
                I create software with the user in mind, focusing on usability and long-term impact. Let's connect and
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
                  <Image alt="Hermon Tesfatsion in a professional setting" src={"/"} width={33} height={3}></Image>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
