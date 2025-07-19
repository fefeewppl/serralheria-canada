"use client";

import Image from "next/image";
import { 
  Shield, 
  Sparkles, 
  Palette, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Facebook,
  Instagram,
  CheckCircle,
  Star,
  Calendar,
  Wrench,
  Truck,
  Building2,
  Container,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Fechar modal com ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-black text-yellow-400">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-yellow-400/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">SC</span>
              </div>
              <div>
                <h1 className="text-yellow-400 font-semibold text-lg elegant-title">Serralheria Canadá</h1>
                <p className="text-yellow-400/70 text-xs">Desde 2016</p>
              </div>
            </div>

            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-yellow-400 hover:text-yellow-300 transition-colors">Início</a>
              <a href="#sobre" className="text-yellow-400 hover:text-yellow-300 transition-colors">Sobre</a>
              <a href="#servicos" className="text-yellow-400 hover:text-yellow-300 transition-colors">Serviços</a>
              <a href="#containers" className="text-yellow-400 hover:text-yellow-300 transition-colors">Containers</a>
              <a href="#projetos" className="text-yellow-400 hover:text-yellow-300 transition-colors">Projetos</a>
              <a href="#contato" className="text-yellow-400 hover:text-yellow-300 transition-colors">Contato</a>
            </nav>

            {/* CTA Button Desktop */}
            <a 
              href="https://wa.me/5518981270860?text=Olá%2C%20vi%20o%20site%20da%20Serralheria%20Canadá%20e%20gostaria%20de%20um%20orçamento"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors sparkle"
            >
              Orçamento
            </a>

            {/* Menu Mobile Button */}
            <button 
              className="md:hidden text-yellow-400 hover:text-yellow-300 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Menu Mobile */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-yellow-400/20 pt-4">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#inicio" 
                  className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </a>
                <a 
                  href="#sobre" 
                  className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre
                </a>
                <a 
                  href="#servicos" 
                  className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Serviços
                </a>
                <a 
                  href="#containers" 
                  className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Containers
                </a>
                <a 
                  href="#projetos" 
                  className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projetos
                </a>
                <a 
                  href="#contato" 
                  className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </a>
                <a 
                  href="https://wa.me/5518981270860?text=Olá%2C%20vi%20o%20site%20da%20Serralheria%20Canadá%20e%20gostaria%20de%20um%20orçamento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors sparkle w-fit"
                >
                  Orçamento
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16 industrial-bg metal-texture">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl hero-title text-yellow-400 mb-6">
              Bem-vindo à Serralheria Canadá
            </h1>
            <p className="text-lg md:text-xl elegant-subtitle text-yellow-400/80 mb-12">
              Cada projeto é feito com técnica, cuidado e compromisso com a durabilidade.
            </p>
            
            {/* Diferenciais */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center space-x-3">
                <Shield className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Segurança real</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sparkles className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Acabamento impecável</span>
              </div>
              <div className="flex items-center space-x-3">
                <Palette className="w-8 h-8 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Design que valoriza seu espaço</span>
              </div>
            </div>

            <a 
              href="https://wa.me/5518981270860?text=Olá%2C%20vi%20o%20site%20da%20Serralheria%20Canadá%20e%20gostaria%20de%20um%20orçamento"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 neon-border"
            >
              Solicite um Orçamento
            </a>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section id="sobre" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl section-title text-yellow-400 mb-8">
              Nossa História
            </h2>
            <div className="bg-black/50 p-8 rounded-lg border border-yellow-400/20">
              <p className="text-xl elegant-title text-yellow-400 mb-6">
                "Transformamos metal em confiança."
              </p>
              <p className="text-yellow-400/80 elegant-body mb-6">
                Desde 2016, a Serralheria Canadá tem se dedicado a criar soluções metálicas 
                que combinam funcionalidade, segurança e design. Nossa experiência abrange 
                desde portões e escadas até estruturas metálicas complexas.
              </p>
              <p className="text-yellow-400/80 elegant-body">
                Agora também oferecemos <span className="text-yellow-400 font-medium">locação de containers</span> para obras, 
                garantindo durabilidade, praticidade e segurança em seus projetos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl section-title text-yellow-400 text-center mb-16">
            Nossos Serviços
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portões */}
            <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg card-title text-yellow-400 mb-3">Portões sob medida</h3>
              <p className="text-yellow-400/70 elegant-body text-sm">Portões personalizados que combinam segurança e estética para sua propriedade.</p>
            </div>

            {/* Escadas */}
            <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg card-title text-yellow-400 mb-3">Escadas personalizadas</h3>
              <p className="text-yellow-400/70 elegant-body text-sm">Escadas metálicas funcionais e elegantes para diversos ambientes.</p>
            </div>

            {/* Estruturas */}
            <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg card-title text-yellow-400 mb-3">Estruturas metálicas</h3>
              <p className="text-yellow-400/70 elegant-body text-sm">Estruturas robustas e duráveis para projetos industriais e comerciais.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Locação de Containers */}
      <section id="containers" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl section-title text-yellow-400 text-center mb-8">
            Locação de Containers
          </h2>
          <p className="text-yellow-400/80 text-center elegant-body mb-12 max-w-3xl mx-auto">
            Containers robustos e seguros para suas obras. Durabilidade, praticidade e confiança em um só lugar.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagem do Container */}
            <div className="relative">
              <div className="bg-black/50 rounded-lg overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 cursor-pointer group">
                <div 
                  className="h-80 bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 flex items-center justify-center overflow-hidden"
                  onClick={() => setSelectedImage("/container.jpg")}
                >
                  <Image 
                    src="/container.jpg" 
                    alt="Container para locação - Serralheria Canadá" 
                    width={400} 
                    height={320}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Informações do Container */}
            <div className="space-y-6">
              <div className="bg-black/50 p-6 rounded-lg border border-yellow-400/20">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4 card-title">
                  Container para Obras
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-yellow-400 font-medium mb-1">Segurança Garantida</h4>
                      <p className="text-yellow-400/70 elegant-body text-sm">Estrutura robusta e resistente para proteger seus materiais e equipamentos.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Truck className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-yellow-400 font-medium mb-1">Entrega e Retirada</h4>
                      <p className="text-yellow-400/70 elegant-body text-sm">Serviço completo de entrega no local da obra e retirada após o uso.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-yellow-400 font-medium mb-1">Flexibilidade de Prazo</h4>
                      <p className="text-yellow-400/70 elegant-body text-sm">Locação por períodos flexíveis, adaptados às necessidades do seu projeto.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Sparkles className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-yellow-400 font-medium mb-1">Qualidade Premium</h4>
                      <p className="text-yellow-400/70 elegant-body text-sm">Containers em excelente estado de conservação e manutenção regular.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA para Container */}
              <div className="text-center">
                <a 
                  href="https://wa.me/5518981270860?text=Olá%2C%20vi%20o%20site%20da%20Serralheria%20Canadá%20e%20gostaria%20de%20um%20orçamento%20de%20container"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 neon-border"
                >
                  Solicitar Orçamento de Container
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfólio */}
      <section id="projetos" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl section-title text-yellow-400 text-center mb-8">
            Projetos Recentes
          </h2>
          <p className="text-yellow-400/80 text-center elegant-body mb-12 max-w-2xl mx-auto">
            Projetos finalizados que combinam segurança, acabamento e design funcional.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Portão Principal */}
            <div className="bg-black/50 rounded-lg overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 cursor-pointer group">
              <div 
                className="h-48 bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 flex items-center justify-center overflow-hidden"
                onClick={() => setSelectedImage("/portoes/portao-principal.jpg")}
              >
                <Image 
                  src="/portoes/portao-principal.jpg" 
                  alt="Portão principal metálico" 
                  width={192} 
                  height={192}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Grade de Piscina */}
            <div className="bg-black/50 rounded-lg overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 cursor-pointer group">
              <div 
                className="h-48 bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 flex items-center justify-center overflow-hidden"
                onClick={() => setSelectedImage("/grades/grade-piscina.jpg")}
              >
                <Image 
                  src="/grades/grade-piscina.jpg" 
                  alt="Grade de segurança para piscina" 
                  width={192} 
                  height={192}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Escada Interna */}
            <div className="bg-black/50 rounded-lg overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 cursor-pointer group">
              <div 
                className="h-48 bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 flex items-center justify-center overflow-hidden"
                onClick={() => setSelectedImage("/escadas/escada-interna.jpg")}
              >
                <Image 
                  src="/escadas/escada-interna.jpg" 
                  alt="Escada interna moderna" 
                  width={192} 
                  height={192}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Corrimão Decorativo */}
            <div className="bg-black/50 rounded-lg overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 cursor-pointer group">
              <div 
                className="h-48 bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 flex items-center justify-center overflow-hidden"
                onClick={() => setSelectedImage("/escadas/corrimao-decorativo.jpg")}
              >
                <Image 
                  src="/escadas/corrimao-decorativo.jpg" 
                  alt="Corrimão decorativo metálico" 
                  width={192} 
                  height={192}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Grade Residencial */}
            <div className="bg-black/50 rounded-lg overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 cursor-pointer group">
              <div 
                className="h-48 bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 flex items-center justify-center overflow-hidden"
                onClick={() => setSelectedImage("/grades/grade-residencial.jpg")}
              >
                <Image 
                  src="/grades/grade-residencial.jpg" 
                  alt="Grade residencial metálica" 
                  width={192} 
                  height={192}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Container para Locação */}
            <div className="bg-black/50 rounded-lg overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 cursor-pointer group">
              <div 
                className="h-48 bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 flex items-center justify-center overflow-hidden"
                onClick={() => setSelectedImage("/portoes/portao6.jpg")}
              >
                <Image 
                  src="/portoes/portao6.jpg" 
                  alt="Grade residencial metálica" 
                  width={192} 
                  height={192}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl section-title text-yellow-400 text-center mb-16">
            Nossos Diferenciais
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-lg card-title text-yellow-400 mb-2">Segurança contra o tempo</h3>
              <p className="text-yellow-400/70 elegant-body text-sm">Materiais de qualidade que resistem ao tempo.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-lg card-title text-yellow-400 mb-2">Acabamento de alto padrão</h3>
              <p className="text-yellow-400/70 elegant-body text-sm">Detalhes que fazem a diferença.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-lg card-title text-yellow-400 mb-2">Design funcional</h3>
              <p className="text-yellow-400/70 elegant-body text-sm">Beleza e funcionalidade em harmonia.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-10 h-10 text-yellow-400" />
              </div>
              <h3 className="text-lg card-title text-yellow-400 mb-2">Atendimento próximo</h3>
              <p className="text-yellow-400/70 elegant-body text-sm">Suporte personalizado e dedicado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl section-title text-yellow-400 text-center mb-16">
            Depoimentos de Clientes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/50 p-6 rounded-lg border border-yellow-400/20">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-yellow-400/80 mb-4 elegant-body">
                "Excelente trabalho! O portão ficou perfeito e a equipe foi muito profissional."
              </p>
              <div>
                <p className="text-yellow-400 font-semibold">João Silva</p>
                <p className="text-yellow-400/60 text-sm">São Paulo, SP</p>
              </div>
            </div>

            <div className="bg-black/50 p-6 rounded-lg border border-yellow-400/20">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-yellow-400/80 mb-4 elegant-body">
                "Contratei para alugar containers e fiquei muito satisfeito com a qualidade."
              </p>
              <div>
                <p className="text-yellow-400 font-semibold">Maria Santos</p>
                <p className="text-yellow-400/60 text-sm">Campinas, SP</p>
              </div>
            </div>

            <div className="bg-black/50 p-6 rounded-lg border border-yellow-400/20">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-yellow-400/80 mb-4 elegant-body">
                "Estrutura metálica de primeira qualidade. Recomendo para todos!"
              </p>
              <div>
                <p className="text-yellow-400 font-semibold">Carlos Oliveira</p>
                <p className="text-yellow-400/60 text-sm">Santos, SP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl section-title text-yellow-400 mb-8">
            Pronto para transformar seu espaço?
          </h2>
          <p className="text-lg elegant-body text-yellow-400/80 mb-8 max-w-2xl mx-auto">
            Pronto para transformar seu espaço ou alugar um container com confiança?
          </p>
          <a 
            href="https://wa.me/5518981270860?text=Olá%2C%20vi%20o%20site%20da%20Serralheria%20Canadá%20e%20gostaria%20de%20um%20orçamento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 neon-border"
          >
            Fale com a gente agora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-black border-t border-yellow-400/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Contato */}
            <div>
              <h3 className="text-yellow-400 font-bold text-lg mb-4">Contato</h3>
              <div className="space-y-2">
                                 <div className="flex items-center space-x-2">
                   <Phone className="w-4 h-4 text-yellow-400" />
                   <span className="text-gray-300">(18) 98127-0860</span>
                 </div>
                                 <div className="flex items-center space-x-2">
                   <MessageCircle className="w-4 h-4 text-yellow-400" />
                   <span className="text-gray-300">(18) 98127-0860</span>
                 </div>
                                 <div className="flex items-center space-x-2">
                   <Mail className="w-4 h-4 text-yellow-400" />
                   <span className="text-gray-300">serralheriacanada@gmail.com</span>
                 </div>
                                 <div className="flex items-center space-x-2">
                   <MapPin className="w-4 h-4 text-yellow-400" />
                   <span className="text-gray-300">Avanhandava, SP</span>
                 </div>
              </div>
            </div>

            {/* Serviços */}
            <div>
              <h3 className="text-yellow-400 font-bold text-lg mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Portões sob medida</li>
                <li>Escadas personalizadas</li>
                <li>Estruturas metálicas</li>
              </ul>
            </div>

            {/* Containers */}
            <div>
              <h3 className="text-yellow-400 font-bold text-lg mb-4">Containers</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Locação de containers</li>
                <li>Entrega e retirada</li>
                <li>Flexibilidade de prazo</li>
                <li>Qualidade premium</li>
              </ul>
            </div>

            {/* Horário */}
            <div>
              <h3 className="text-yellow-400 font-bold text-lg mb-4">Horário de Atendimento</h3>
              <div className="space-y-2 text-gray-300">
                <p>Segunda a Sexta: 8h às 18h</p>
              {/*  <p>Sábado: 8h às 12h</p>*/}
                <p>Domingo: Fechado</p>
              </div>
            </div>

            {/* Redes Sociais */}
            <div>
              <h3 className="text-yellow-400 font-bold text-lg mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/SerralheriaaCanada" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/serralheria.canada/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-yellow-400/20 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2025 - Serralheria Canadá. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal para visualizar imagens */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-yellow-400 hover:text-yellow-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative">
              <Image 
                src={selectedImage} 
                alt="Visualização ampliada" 
                width={800} 
                height={600}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
