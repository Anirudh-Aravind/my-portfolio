import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Database, Bot, Activity, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Enterprise Data Migration & Archival",
    description: "Spearheaded the migration of production data from a legacy database to a versioned structure, ensuring zero data loss and maintaining data integrity. Architected weekly archival pipelines that reduced active database load by 20% while ensuring long-term compliance.",
    tags: ["Pentaho ETL", "SQL", "Data Migration", "Data Archival", "Performance Tuning"],
    icon: <Database className="w-6 h-6 text-primary" />,
    company: "Equipo Health Inc.",
    isCompanyProject: true
  },
  {
    title: "Intelligent Health Screening",
    description: "A comprehensive health screening application leveraging advanced data processing and machine learning to analyze patient metrics and provide intelligent health insights.",
    tags: ["Python", "Machine Learning", "Data Processing", "Healthcare Analytics"],
    icon: <Activity className="w-6 h-6 text-primary" />,
    github: "https://github.com/Anirudh-Aravind/Intelligent-health-screening",
    isCompanyProject: false
  },
  {
    title: "Multi-Agent Finance Assistant",
    description: "An innovative financial assistant powered by multi-agent AI architecture. It processes complex financial queries, analyzes market data, and provides intelligent, context-aware financial insights.",
    tags: ["Agentic AI", "Python", "LLMs", "Financial Data", "Multi-Agent Systems"],
    icon: <Bot className="w-6 h-6 text-primary" />,
    github: "https://github.com/Anirudh-Aravind/multi_agent_finance_assistant",
    isCompanyProject: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-muted-foreground mt-2">A showcase of enterprise data solutions and open-source AI projects.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col border-border/50 bg-card hover:border-primary/50 transition-colors duration-300 shadow-sm hover:shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      {project.icon}
                    </div>
                    {!project.isCompanyProject && project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-2 hover:bg-primary hover:text-primary-foreground rounded-full transition-colors text-muted-foreground"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <CardTitle className="text-xl leading-tight mb-2">{project.title}</CardTitle>
                  {project.company && (
                    <CardDescription className="font-medium text-primary">
                      {project.company}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="font-normal bg-secondary/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* View More Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="h-full"
          >
            <a href="https://github.com/Anirudh-Aravind" target="_blank" rel="noreferrer" className="block h-full">
              <Card className="h-full flex flex-col items-center justify-center border-dashed border-2 border-border/50 bg-transparent hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group min-h-[300px]">
                <div className="p-4 bg-muted rounded-full mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Github className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">View More Projects</h3>
                <p className="text-muted-foreground text-center px-6 mb-4">
                  Explore more of my open-source contributions and experiments on GitHub.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium group-hover:translate-x-1 transition-transform">
                  Go to GitHub <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
