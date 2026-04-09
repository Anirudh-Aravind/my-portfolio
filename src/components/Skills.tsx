import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Core Competencies",
    skills: ["ETL/ELT Pipeline Architecture", "Data Migration & Transformation", "Data Pipeline Orchestration", "SQL Query Optimization", "API Data Integration", "Data Quality Assurance", "Big Data Processing"]
  },
  {
    title: "Cloud & Data Warehouses",
    skills: ["AWS (S3, Redshift, EC2)", "Azure (ADLS Gen2, Key Vault, DevOps)", "Snowflake", "Databricks", "BigQuery"]
  },
  {
    title: "ETL & Orchestration",
    skills: ["Pentaho", "dbt", "Airbyte", "n8n", "Workflow Scheduling", "Observability"]
  },
  {
    title: "Languages & Frameworks",
    skills: ["Python (OOP)", "SQL", "FastAPI", "REST APIs", "PySpark"]
  },
  {
    title: "BI & Analytics",
    skills: ["AWS QuickSight", "Sisense BI", "Predictive Analytics", "ML Pipeline Enablement", "Data Modeling"]
  },
  {
    title: "Emerging Tech & Tools",
    skills: ["Agentic AI Workflows", "Generative AI", "Docker", "Git", "JIRA", "MongoDB", "MySQL", "MS SQL Server"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Technical Expertise</h2>
          <p className="text-muted-foreground mt-2">Comprehensive toolkit for building scalable data platforms.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-primary/90">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => (
                      <Badge key={skill} variant="outline" className="px-3 py-1 bg-background/50 hover:bg-primary/10 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
