import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Education</h2>
            </div>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="p-3 bg-primary/10 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">B.Tech in Mechatronics Engineering</h3>
                  <p className="text-muted-foreground">APJ Abdul Kalam Technological University</p>
                  <p className="text-sm font-medium text-primary mt-1">2020 • CGPA: 8.09</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="p-3 bg-primary/10 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Diploma in Data Science</h3>
                  <p className="text-muted-foreground">Techolas Technologies, Calicut</p>
                  <p className="text-sm font-medium text-primary mt-1">Nov 2020 – May 2021</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
            </div>
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Databricks Academy Accreditation</h3>
                  <p className="text-muted-foreground">Databricks Fundamentals</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Databricks Academy Accreditation</h3>
                  <p className="text-muted-foreground">Generative AI Fundamentals</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-6 items-start"
              >
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">AWS Cloud Quest</h3>
                  <p className="text-muted-foreground">Generative AI (Badge)</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex gap-6 items-start"
              >
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Fast Track Data Engineering Bootcamp</h3>
                  <p className="text-muted-foreground">Grow Data Skills</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
