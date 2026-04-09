import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tighter">ANIRUDH P M</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
          <a href="#education" className="hover:text-foreground transition-colors">Education</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Anirudh-Aravind" target="_blank" rel="noreferrer" className="p-2 hover:bg-accent rounded-full transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/anirudh-p-m-039406192/" target="_blank" rel="noreferrer" className="p-2 hover:bg-accent rounded-full transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:anirudhparavind@gmail.com" className="p-2 hover:bg-accent rounded-full transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
