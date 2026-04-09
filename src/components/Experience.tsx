import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Senior Data Engineer",
    company: "Equipo Health Inc.",
    location: "Thiruvananthapuram",
    period: "Sep 2024 – Present",
    description: [
      "Spearheaded the migration of production data from a legacy database to a versioned structure using Pentaho ETL and SQL, improving scalability and reliability for 50,000+ patients and 2 million+ treatment records.",
      "Architected weekly data archival pipelines, reducing active database load by 20% while ensuring compliance with long-term storage and regulatory requirements.",
      "Optimized stored procedures and query logic, significantly accelerating report execution and enhancing operational and clinical reporting performance.",
      "Migrated data for 7 clients across 60+ locations from Version 1 to a FHIR-compliant Version 2 schema using Pentaho ETL and SQL.",
      "Transitioned reporting to AWS QuickSight with SPICE, offloading queries from the production DB and boosting report generation speed by up to 80%."
    ],
    tags: ["Pentaho ETL", "AWS QuickSight", "SQL", "Python", "Data Migration", "FHIR"]
  },
  {
    title: "Product Engineer – Backend & Data",
    company: "Gritstone Technologies",
    location: "Kozhikode",
    period: "Mar 2024 – Aug 2024",
    description: [
      "Engineered a modular e-signature product using Python (FastAPI) and MS SQL Server, implementing microservices architecture for scalable, high-performance workflows.",
      "Integrated Azure ADLS Gen2 and Key Vault to ensure secure document storage and secrets management, meeting enterprise-grade compliance requirements.",
      "Developed and exposed REST API endpoints for document submission, status tracking, and retrieval, enabling seamless integration with front-end clients.",
      "Delivered a fully functional microservice to UAT within a short tenure, showcasing rapid design, development, and deployment capabilities."
    ],
    tags: ["Python", "FastAPI", "Azure ADLS Gen2", "Azure DevOps", "MS SQL Server", "Microservices"]
  },
  {
    title: "Associate Data Engineer",
    company: "iSOCRATES MADTech Pvt Ltd",
    location: "Mysuru",
    period: "Nov 2021 – Feb 2024",
    description: [
      "Built end-to-end ETL pipelines for multi-channel marketing data ingestion into AWS S3 and Redshift, handling structured data from display, search, and social platforms.",
      "Developed reusable Python OOP-based ETL frameworks, reducing pipeline development time and accelerating client onboarding.",
      "Designed star-schema data models in Redshift to support campaign performance analytics, enabling comprehensive cross-channel reporting.",
      "Created Sisense BI dashboards and applied predictive analytics (regression, clustering) to optimize marketing spend, boosting CTR, conversions, and ROI for clients.",
      "Developed a reusable Python OOP-based ETL framework, reducing new data source onboarding time by 10–20% and accelerating integration across multiple clients."
    ],
    tags: ["AWS Redshift", "AWS S3", "Python OOP", "Sisense BI", "Star-Schema", "Predictive Analytics"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Professional Experience</h2>
          <p className="text-muted-foreground mt-2">My journey in data engineering and backend development.</p>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-none shadow-sm overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300 border-l-4 border-l-primary">
                <div className="md:grid md:grid-cols-[250px_1fr] min-h-[200px]">
                  <div className="bg-muted/50 p-6 flex flex-col justify-between border-r border-border/50">
                    <div>
                      <p className="text-sm font-medium text-primary mb-1">{exp.period}</p>
                      <h3 className="font-bold text-lg leading-tight">{exp.company}</h3>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ul className="space-y-3 mb-6">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground flex gap-3 text-sm leading-relaxed">
                            <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="font-normal bg-secondary/50">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
