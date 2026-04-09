import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
// @ts-ignore
import myVideo from '../avatar.mp4';
// @ts-ignore
import myResume from '../resume.pdf';

export default function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
              Senior Data Engineer
            </h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Strong in data engineering & exploring the future of AI.
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Senior Data Engineer with 4.5+ years of experience specializing in high-performance ETL/ELT pipelines, cloud-native data warehouses, and advanced analytics. I am deeply interested in trying out new emerging technologies in the market, leveraging the modern data stack—including Databricks, Snowflake, and Agentic AI workflows—to build intelligent, scalable platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="#projects">
                  View Projects <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-primary/50 hover:bg-primary/10" asChild>›
                <a href={myResume} target="_blank" rel="noreferrer" download>
                  Download CV <Download className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md lg:max-w-full aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden border border-primary/20 shadow-[0_0_40px_-15px_rgba(255,99,33,0.3)] flex items-center justify-center group bg-black"
          >
            <video 
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              autoPlay 
              loop 
              muted 
              playsInline
              // src="/avatar.mp4" 
              // src={`${import.meta.env.BASE_URL}avatar.mp4`}
              src={myVideo}
            />
            
            {/* Decorative gradient glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-tr from-primary/30 to-transparent opacity-50 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
