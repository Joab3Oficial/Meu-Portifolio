import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import profileImage from "@/assets/images/profile.jpg";

import IMG_9 from "@assets/IMG-9.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Desenvolvedor em Formação
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Olá, eu sou <br />
              <span className="text-primary">Joabe Dias</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
              Tenho 24 anos e estou começando minha jornada profissional. Sou apaixonado por aprender, crescer e desenvolver projetos que gerem impacto.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a 
                href="#projetos"
                className="px-8 py-3.5 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors shadow-sm hover:shadow flex items-center gap-2"
                data-testid="link-hero-projetos"
              >
                Ver Projetos
                <ArrowRight size={18} />
              </a>
              <a 
                href="#contato"
                className="px-8 py-3.5 bg-secondary text-secondary-foreground font-medium rounded-full hover:bg-secondary/80 transition-colors"
                data-testid="link-hero-contato"
              >
                Entrar em Contato
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="w-48 h-48 md:w-80 md:h-80 relative shrink-0 overflow-hidden rounded-[2rem] shadow-xl border-4 border-white/50"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary/40 rotate-6 opacity-30 blur-lg -z-10"></div>
            <img 
              src={IMG_9} 
              alt="Joabe Dias" 
              className="w-full h-full object-cover object-[center_25%] scale-150 relative z-10 ml-[0px] mr-[0px] mt-[39px] mb-[39px]"
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.src = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=400";
              }}
              data-testid="img-profile-hero"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
