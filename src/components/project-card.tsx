import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa"
interface ProjectCardProps {
  title: string,
  description: string,
  technologies: string[],
  imageUrl: string,
  githubUrl: string,
  liveUrl?: string,
}

export default function ProjectCard({ title, description, technologies, imageUrl, githubUrl, liveUrl }: ProjectCardProps) {


  return (
    <Card className=" relative overflow-hidden hover:shadow-md transition-all">
      <div className="aspect-video relative">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-all hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl font-bold leading-none tracking-tight">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex mt-auto  gap-5 justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub className="mr-2 h-4 w-4" />
            Code
          </Link>
        </Button>
        {liveUrl && (
          <Button size="sm" asChild>
            <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>

    </Card>
  )
}