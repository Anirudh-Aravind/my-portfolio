import { Github, Linkedin, Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <footer className="py-20 border-t bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Let's connect</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              I'm always open to discussing data engineering projects, ETL automation, or exploring new emerging technologies in the data space.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Kozhikode, Kerala, India</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+917907131098" className="hover:text-foreground transition-colors">+91 7907131098</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MessageCircle className="w-5 h-5 text-primary" />
                <a href="https://wa.me/919744964180" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">+91 9744964180 (WhatsApp)</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:anirudhparavind@gmail.com" className="hover:text-foreground transition-colors">anirudhparavind@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end md:items-end">
            <div className="flex gap-4 mb-8">
              <a href="https://github.com/Anirudh-Aravind" target="_blank" rel="noreferrer" className="p-4 bg-muted hover:bg-primary hover:text-primary-foreground rounded-2xl transition-all duration-300 shadow-sm">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/anirudh-p-m-039406192/" target="_blank" rel="noreferrer" className="p-4 bg-muted hover:bg-primary hover:text-primary-foreground rounded-2xl transition-all duration-300 shadow-sm">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Anirudh P M. Built with React & Tailwind.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
