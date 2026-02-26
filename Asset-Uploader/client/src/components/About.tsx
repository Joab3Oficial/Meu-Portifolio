import { motion } from "framer-motion";
import { Code2, BookOpen, TrendingUp, Target } from "lucide-react";

export function About() {
  const traits = [
    {
      title: "Iniciante na área profissional",
      icon: <Code2 size={24} className="text-primary mb-4" />
    },
    {
      title: "Aprendiz motivado",
      icon: <BookOpen size={24} className="text-primary mb-4" />
    },
    {
      title: "Focado em crescimento constante",
      icon: <TrendingUp size={24} className="text-primary mb-4" />
    },
    {
      title: "Comprometido com dedicação e evolução",
      icon: <Target size={24} className="text-primary mb-4" />
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre Mim</h2>
          <div className="w-16 h-1.5 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Determinado, disciplinado e em busca de conhecimento.</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Sou um profissional em início de carreira, movido por um desejo autêntico de aprender e fazer a diferença. Entendo que o início de qualquer jornada exige esforço extra, e é exatamente isso que tenho a oferecer: vontade de trabalhar, facilidade de adaptação e um foco inabalável em resultados.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Busco oportunidades onde eu possa contribuir com minha energia e dedicação, enquanto absorvo conhecimento e me desenvolvo ao lado de equipes experientes. Estou pronto para abraçar desafios e construir uma base sólida para minha carreira.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {traits.map((trait, index) => (
              <motion.div 
                key={index}
                className="bg-card p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                {trait.icon}
                <h4 className="font-semibold text-foreground/90">{trait.title}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
