import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/images/project-1.png";
import project2 from "@/assets/images/project-2.png";
import project3 from "@/assets/images/project-3.png";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Dashboard Analítico",
      description: "Uma interface moderna para visualização de dados complexos com gráficos interativos e design responsivo.",
      image: project1,
      tags: ["React", "Tailwind CSS", "Data Viz"]
    },
    {
      id: 2,
      title: "Aplicativo Mobile Finanças",
      description: "Conceito de aplicativo mobile para gestão financeira pessoal com foco em experiência do usuário limpa e intuitiva.",
      image: project2,
      tags: ["Mobile UI", "UX Design", "Figma"]
    },
    {
      id: 3,
      title: "E-commerce Minimalista",
      description: "Plataforma de e-commerce moderna com jornada de compra simplificada e foco em conversão.",
      image: project3,
      tags: ["Web Design", "UI/UX", "Frontend"]
    }
  ];

  return (
    <section id="projetos" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meus Projetos</h2>
          <div className="w-16 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos recentes e conceitos desenvolvidos durante meu processo de aprendizado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`card-project-${project.id}`}
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>
                <button 
                  className="w-full py-2.5 bg-primary/10 text-primary font-medium rounded-xl hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 mt-auto"
                  data-testid={`button-ver-projeto-${project.id}`}
                >
                  Ver Projeto
                  <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
