'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
    setEmail('');
    setNombre('');
    setEmpresa('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1d4ed8] to-[#1e40af]">
      {/* Header BLANCO con Logo e Isotipo REAL - COMPACTO */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6 py-2">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#3b5bdb] rounded-xl flex items-center justify-center shadow-sm p-1.5">
              <Image
                src="/Softerreno_S_isotipo_blanco_transparente.png"
                alt="Softerreno Isotipo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-gray-900 font-bold text-base tracking-tight leading-tight">Softerreno</h1>
              <p className="text-gray-500 text-[10px] tracking-wider font-medium uppercase">ERP Inmobiliario</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section AZUL GRADIENTE CON LÍNEAS - FIT CONTENT */}
      <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1d4ed8] to-[#1e40af] py-4 overflow-hidden h-[calc(100vh-56px)]">
        {/* Patrón de cuadrícula */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center py-4">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-4 md:gap-8 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/20">
                <motion.span
                  className="w-2 h-2 bg-[#60a5fa] rounded-full"
                  animate={{
                    opacity: [1, 0.3, 1],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.span>
                <span className="text-white text-sm font-semibold">ERP #1 en Gestión de Loteos</span>
              </div>

              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3 leading-tight">
                Vende más parcelas<br />
                con <span className="text-[#7c9de8]">gestión profesional</span>
              </h1>

              <p className="text-sm md:text-base text-blue-100 mb-2 md:mb-3 leading-relaxed max-w-2xl">
                Controla proyectos, stock, clientes y cobranza en una plataforma
                diseñada específicamente para desarrolladores de lotes.
              </p>

              <p className="text-white text-base md:text-lg font-bold mb-3 md:mb-4">
                Sin Excel. Sin WhatsApp. Sin errores.
              </p>

              {/* Waitlist Moderna */}
              <div className="mb-2 md:mb-3">
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm md:text-base">Ten acceso anticipado</h3>
                    <p className="text-blue-100 text-xs hidden md:block">Sé de los primeros en probar Softerreno</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-2 md:space-y-3">
                  <div className="flex flex-col md:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 px-3 py-2 md:px-4 md:py-3 rounded-xl bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm font-medium shadow-lg"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white px-4 py-2 md:px-6 md:py-3 rounded-xl font-bold text-sm hover:from-[#2563eb] hover:to-[#1d4ed8] transition shadow-lg whitespace-nowrap"
                    >
                      {isSubmitting ? 'Enviando...' : 'Registrarme'}
                    </button>
                  </div>

                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white">Acceso prioritario</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white">Cupos limitados</span>
                    </div>
                  </div>
                </form>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 bg-green-500 text-white px-3 py-2 rounded-xl text-sm font-medium"
                  >
                    ✓ ¡Te avisaremos cuando lancemos!
                  </motion.div>
                )}
              </div>

            </div>

            {/* Right - Dashboard Preview con IMAGEN REAL */}
            <div className="relative w-full lg:ml-auto lg:max-w-2xl lg:-mr-12 mt-4 lg:mt-0">
              {/* Card flotante "Parcelas vendidas" - ABAJO - OCULTA EN MOBILE */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="hidden lg:block absolute -left-12 bottom-1/4 z-10 bg-white rounded-lg shadow-xl p-2.5 w-40"
              >
                <p className="text-gray-500 text-[10px] mb-0.5">Parcelas vendidas</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">142</h3>
                  <div className="bg-gray-100 rounded px-1.5 py-0.5">
                    <span className="text-gray-700 text-xs font-bold">+12</span>
                  </div>
                </div>
                <p className="text-gray-500 text-[9px] mt-0.5">Este año</p>
              </motion.div>

              {/* Screenshot REAL del Dashboard con barra de navegación - CON RECUADRO TRANSPARENTE */}
              <div className="relative rounded-xl shadow-2xl border-2 border-white/30 backdrop-blur-sm p-1 bg-white/5">
                {/* Browser Chrome */}
                <div className="bg-[#3a3a3a] rounded-t-lg px-3 py-2 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="flex-1 bg-[#2a2a2a] rounded px-2 py-1 text-gray-400 text-xs">
                    softerreno.com/dashboard
                  </div>
                </div>

                <Image
                  src="/mockup1.png"
                  alt="Dashboard Softerreno"
                  width={700}
                  height={700}
                  className="rounded-b-lg w-full h-auto"
                />
              </div>

              {/* Card flotante "Ventas del mes" - ARRIBA - OCULTA EN MOBILE */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="hidden lg:block absolute -right-8 top-1/4 z-10 bg-gradient-to-br from-[#4169e1] to-[#3b82f6] rounded-lg shadow-xl p-3 w-40 text-white"
              >
                <p className="text-blue-100 text-[10px] mb-0.5">Ventas del mes</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-2xl font-bold">$2.4M</h3>
                  <div className="bg-white/20 rounded px-1.5 py-0.5">
                    <span className="text-white text-xs font-bold">↑ 28%</span>
                  </div>
                </div>
                <p className="text-blue-100 text-[9px] mt-0.5">Este año</p>
              </motion.div>
            </div>
          </div>

          {/* Beneficios debajo - Cards optimizadas */}
          <div className="mt-4 md:mt-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
              {[
                {
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                  title: 'Acceso inmediato',
                  desc: 'Usa todas las funcionalidades'
                },
                {
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  title: 'Setup gratuito',
                  desc: 'Configuración en 24 horas'
                },
                {
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  title: 'Precio especial',
                  desc: 'Descuento early adopter'
                },
                {
                  icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
                  title: 'Soporte prioritario',
                  desc: 'Línea directa con el equipo'
                }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-lg md:rounded-xl p-2 md:p-3 hover:bg-white/15 transition-all">
                  <div className="text-white flex-shrink-0 bg-white/20 rounded-lg p-1.5 md:p-2">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xs md:text-sm mb-0.5 leading-tight">{item.title}</h3>
                    <p className="text-blue-100 text-[10px] md:text-xs leading-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Redes Sociales - Debajo de las cards, alineadas con el mockup */}
            <div className="flex items-center justify-center md:justify-end gap-2 mt-4 md:mt-6 md:-mr-48">
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center transition">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center transition">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center transition">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.308-.346-.11l-6.4 4.03-2.76-.918c-.6-.187-.612-.6.125-.89l10.782-4.156c.5-.176.943.11.78.89z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center transition">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
