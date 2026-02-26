import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 w-full glass-panel z-40 border-b-0">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-heading font-bold text-xl tracking-tight text-foreground" data-testid="text-logo">
            Joabe<span className="text-primary">.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-nav-sobre">Sobre Mim</a>
            <a href="#projetos" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-nav-projetos">Projetos</a>
            <a href="#contato" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-nav-contato">Contato</a>
          </div>
        </div>
      </nav>

      <Hero />
      <About />
      <Projects />
      <Contact />
      
      <footer className="py-8 bg-card border-t border-border text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Joabe Dias. Todos os direitos reservados.</p>
      </footer>

      <FloatingWhatsApp />
    </main>
  );
}
