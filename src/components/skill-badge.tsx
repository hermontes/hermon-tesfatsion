import { Badge } from "@/components/ui/badge"
import {
  FaJava,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaDatabase,
  FaHtml5,
  FaGithub,
  FaCode,
} from "react-icons/fa"
import { SiNextdotjs, SiMongodb, SiTailwindcss } from "react-icons/si"
import { TbApi } from "react-icons/tb"

interface SkillBadgeProps {
  skill: string
  icon?: string
  small?: boolean
}

export function SkillBadge({ skill, icon, small = false }: SkillBadgeProps) {
  const getIcon = () => {
    switch (icon?.toLowerCase()) {
      case "java":
        return <FaJava className="h-3 w-3 mr-1" />
      case "javascript":
        return <FaJs className="h-3 w-3 mr-1" />
      case "react":
        return <FaReact className="h-3 w-3 mr-1" />
      case "nextjs":
        return <SiNextdotjs className="h-3 w-3 mr-1" />
      case "nodejs":
        return <FaNodeJs className="h-3 w-3 mr-1" />
      case "python":
        return <FaPython className="h-3 w-3 mr-1" />
      case "docker":
        return <FaDocker className="h-3 w-3 mr-1" />
      case "aws":
        return <FaAws className="h-3 w-3 mr-1" />
      case "mongodb":
        return <SiMongodb className="h-3 w-3 mr-1" />
      case "database":
        return <FaDatabase className="h-3 w-3 mr-1" />
      case "html":
        return <FaHtml5 className="h-3 w-3 mr-1" />
      case "tailwind":
        return <SiTailwindcss className="h-3 w-3 mr-1" />
      case "git":
      case "github":
        return <FaGithub className="h-3 w-3 mr-1" />
      case "api":
        return <TbApi className="h-3 w-3 mr-1" />
      default:
        return <FaCode className="h-3 w-3 mr-1" />
    }
  }

  return (
    <Badge
      variant={small ? "secondary" : "outline"}
      className={`flex items-center ${small ? "text-xs py-0 px-2" : "text-sm py-1 px-3"}`}
    >
      {icon && getIcon()}
      {skill}
    </Badge>
  )
}
