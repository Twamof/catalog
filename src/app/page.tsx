"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Boxes,
  ShoppingCart,
  CreditCard,
  Cpu,
  Car,
  Sparkles,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  ArrowLeft,
  X,
  Volume2,
  VolumeX,
  Bookmark,
  ChevronRight,
  ChevronLeft,
  Ticket,
  Bell,
  Flower,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { servicesData, uiTranslations, System } from "./data";

export default function VertexCatalog() {
  const basePath = process.env.NODE_ENV === "production" ? "/catalog" : "";
  const [lang, setLang] = useState<"ar" | "en" | "fr">("ar");
  const [selectedBook, setSelectedBook] = useState<System | null>(null);
  const [isOpening, setIsOpening] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [previewImgIndex, setPreviewImgIndex] = useState(0);

  // Auto-cycle preview images if there are multiple
  useEffect(() => {
    if (!isOpening || !selectedBook || !selectedBook.previewImages || selectedBook.previewImages.length <= 1) return;
    
    const interval = setInterval(() => {
      setPreviewImgIndex(prev => (prev + 1) % selectedBook.previewImages.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isOpening, selectedBook]);

  // Reference for playing audio synthesized programmatically
  const playFlipSound = () => {
    if (typeof window === "undefined" || !soundEnabled) return;
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const bufferSize = ctx.sampleRate * 0.35; // 0.35 seconds
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      // Create high-pass/bandpass sweeping noise for realistic paper swoosh
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noiseNode = ctx.createBufferSource();
      noiseNode.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.Q.value = 6.0;

      const now = ctx.currentTime;
      // Frequency sweep
      filter.frequency.setValueAtTime(250, now);
      filter.frequency.exponentialRampToValueAtTime(1400, now + 0.08);
      filter.frequency.exponentialRampToValueAtTime(180, now + 0.35);

      const gainNode = ctx.createGain();
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.06, now + 0.05);
      gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      noiseNode.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      noiseNode.start(now);
      noiseNode.stop(now + 0.35);
    } catch (e) {
      console.log("Audio not allowed yet or not supported", e);
    }
  };

  const selectLanguage = (selectedLang: "ar" | "en" | "fr") => {
    setLang(selectedLang);
  };

  const handleBookClick = (book: System) => {
    playFlipSound();
    setSelectedBook(book);
    const index = servicesData.findIndex((b) => b.id === book.id);
    setActiveIndex(index);
    setPreviewImgIndex(0);
    setIsOpening(true);
  };

  const handleCloseBook = () => {
    playFlipSound();
    setIsOpening(false);
    setTimeout(() => {
      setSelectedBook(null);
    }, 500); // Wait for transition out
  };

  const handleNextBook = () => {
    playFlipSound();
    const nextIdx = (activeIndex + 1) % servicesData.length;
    setActiveIndex(nextIdx);
    setSelectedBook(servicesData[nextIdx]);
    setPreviewImgIndex(0);
  };

  const handlePrevBook = () => {
    playFlipSound();
    const prevIdx = (activeIndex - 1 + servicesData.length) % servicesData.length;
    setActiveIndex(prevIdx);
    setSelectedBook(servicesData[prevIdx]);
    setPreviewImgIndex(0);
  };

  const t = uiTranslations[lang];
  const isRtl = lang === "ar";
  const activeBook = selectedBook || servicesData[activeIndex];

  // Helper to render book icons dynamically
  const renderIcon = (iconName: string, size = 28, className = "") => {
    switch (iconName) {
      case "car":
        return <Car size={size} className={className} />;
      case "shopping-cart":
        return <ShoppingCart size={size} className={className} />;
      case "credit-card":
        return <CreditCard size={size} className={className} />;
      case "cpu":
        return <Cpu size={size} className={className} />;
      case "ticket":
        return <Ticket size={size} className={className} />;
      case "bell-concierge":
        return <Bell size={size} className={className} />;
      case "flower":
        return <Flower size={size} className={className} />;
      default:
        return <Boxes size={size} className={className} />;
    }
  };

  const chunkedServices = [];
  for (let i = 0; i < servicesData.length; i += 4) {
    chunkedServices.push(servicesData.slice(i, i + 4));
  }

  return (
    <div 
      className={`min-h-screen relative bg-[#030712] overflow-hidden text-zinc-100 flex flex-col font-sans`}
      dir={isRtl ? "rtl" : "ltr"}
      style={{ fontFamily: isRtl ? "var(--font-cairo), sans-serif" : "var(--font-sans), sans-serif" }}
    >
      {/* LUXURY RADIAL GLOWS */}
      <div className="absolute inset-0 z-0 luxury-grid-bg pointer-events-none opacity-40" />
      <div className="absolute top-[-200px] left-1/4 w-[700px] h-[700px] rounded-full radial-glow-1 pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute bottom-[-100px] right-1/4 w-[800px] h-[800px] rounded-full radial-glow-2 pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full radial-glow-3 pointer-events-none z-0" />

      {/* HEADER NAVBAR */}
      <header className="relative z-40 border-b border-white/5 bg-slate-950/25 backdrop-blur-md px-6 py-4 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="font-black text-xl tracking-wider text-white gold-text-glow">
              {t.brandTitle}
            </h1>
          </div>

          {/* Links for UI styling */}
          <div className="hidden md:flex gap-8 text-sm text-zinc-400 items-center">
            <a href="#catalog" className="hover:text-amber-400 transition-colors text-amber-400">{t.navServices}</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">{t.navContact}</a>
          </div>

          {/* CONTROL SECTION (SOUND & i18n SWITCHER) */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button 
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-zinc-400 hover:text-white"
              title="Toggle Page-Flip Sound"
            >
              {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>

            {/* Language Pill Switcher */}
            <div className="flex p-1 rounded-xl bg-slate-950/80 border border-white/10">
              {(["ar", "en", "fr"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => selectLanguage(l)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    lang === l
                      ? "bg-gradient-to-r from-amber-400 to-amber-600 text-black shadow-[0_0_10px_rgba(224,176,52,0.25)]"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* HERO HEADER */}
      <section className="relative z-10 text-center pt-16 px-6 max-w-4xl mx-auto flex-shrink-0">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-xl text-amber-400 text-xs font-semibold mb-6 shadow-[inset_0_0_12px_rgba(224,176,52,0.05)]"
        >
          <Sparkles size={13} className="text-amber-400 animate-pulse" />
          {t.heroBadge}
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-white"
        >
          {t.heroTitlePart1}
          <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
            {t.heroTitleHighlight}
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 mt-6 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          {t.heroDesc}
        </motion.p>
      </section>

      {/* MAIN CATALOG AREA: STANDING SHELF */}
      <main id="catalog" className="relative z-10 max-w-7xl w-full mx-auto px-6 py-20 flex-grow flex flex-col items-center justify-center">
        
        {chunkedServices.map((shelfBooks, shelfIdx) => (
          <div key={shelfIdx} className={`w-full relative px-4 flex flex-col items-center ${shelfIdx > 0 ? "mt-24" : "py-8"}`}>
            
            {/* Standing books container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12 w-full max-w-5xl z-10 mb-4 justify-items-center">
              {shelfBooks.map((book, idx) => {
                const bTrans = book.translations[lang];
              return (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.3, type: "spring", stiffness: 60 }}
                  whileHover={{ 
                    y: -25,
                    rotateY: isRtl ? 15 : -15,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  onClick={() => handleBookClick(book)}
                  className="group relative cursor-pointer w-[220px] h-[330px] perspective-2000 preserve-3d"
                >
                  {/* REALISTIC STANDING BOOK CARD */}
                  <div className={`w-full h-full rounded-r-[18px] rounded-l-[4px] relative overflow-hidden transition-all duration-300 border ${book.skin.borderClass} ${book.skin.bgClass} ${book.skin.glowClass}`}>
                    
                    {/* LEATHER TEXTURE OVERLAY */}
                    <div className="absolute inset-0 leather-texture opacity-30 mix-blend-overlay" />
                    
                    {/* COVER EMBOSSED IMAGE PREVIEW */}
                    <div className="absolute top-4 inset-x-4 h-32 rounded-lg overflow-hidden border border-white/10 relative">
                      <Image
                        src={`${basePath}${book.coverImage}`}
                        alt={bTrans.title}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                      
                      {/* EMBOSSED ICON */}
                      <div className="absolute bottom-2 right-2 w-8 h-8 rounded-md bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-amber-400">
                        {renderIcon(book.iconName, 15)}
                      </div>
                    </div>

                    {/* BOOK COVER CONTENT */}
                    <div className="absolute inset-x-4 bottom-4 flex flex-col justify-end">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-amber-500/80 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                          {book.badge}
                        </span>
                        <span className="text-[9px] uppercase tracking-wider text-zinc-500">
                          {t.spineText}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors leading-snug">
                        {bTrans.title}
                      </h3>
                      
                      <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                        {bTrans.subtitle}
                      </p>

                      {/* CTA AT BOTTOM */}
                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-amber-400 font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                        <span>{t.flipCoverTooltip}</span>
                        {isRtl ? <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> : <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />}
                      </div>
                    </div>

                    {/* HARDCOVER SPINE ACCENT */}
                    <div 
                      className={`absolute top-0 bottom-0 w-[10px] shadow-[inset_-3px_0_10px_rgba(0,0,0,0.8)] z-20 ${
                        isRtl 
                          ? "right-0 rounded-r-[18px] border-r border-white/10" 
                          : "left-0 rounded-l-[4px] border-l border-white/10"
                      } ${book.skin.spineClass}`}
                    />

                    {/* COVER CORNER GOLD GUARDS */}
                    {book.skin.goldFrame && (
                      <>
                        <div className={`absolute top-0 w-4 h-4 border-t-2 border-amber-500/40 z-30 ${isRtl ? "left-0 border-l-2" : "right-0 border-r-2"}`} />
                        <div className={`absolute bottom-0 w-4 h-4 border-b-2 border-amber-500/40 z-30 ${isRtl ? "left-0 border-l-2" : "right-0 border-r-2"}`} />
                      </>
                    )}
                  </div>

                  {/* SHADOW CASTING UNDER BOOK */}
                  <div className="absolute bottom-[-16px] inset-x-2 h-4 bg-black/80 rounded-full blur-[8px] group-hover:blur-[12px] group-hover:scale-95 transition-all duration-300 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>

          {/* LUXURY GOLD/MARBLE SHELF STAND */}
          <div className="w-full max-w-5xl h-6 rounded-md border border-white/10 marble-shelf-gradient shadow-[0_15px_30px_rgba(0,0,0,0.9)] relative flex items-center justify-center">
            
            {/* Shelf Metallic Front Edge Lip */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 rounded-t-md opacity-85 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]" />
            
            {/* Shelf Title Emblem */}
            <div className="px-5 py-0.5 rounded-full border border-amber-500/30 bg-slate-950 text-[10px] text-amber-400 tracking-wider font-extrabold uppercase absolute bottom-[-10px] shadow-[0_4px_10px_rgba(0,0,0,0.5)] z-20">
              {t.shelfTitle}
            </div>
            
            {/* Shelf Reflection Glow */}
            <div className="absolute top-[-25px] inset-x-0 h-6 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />
          </div>

          {/* EXTRA SHELF BRACKETS */}
          <div className="w-full max-w-5xl flex justify-between px-16 relative pointer-events-none">
            <div className="w-8 h-10 border-r border-b border-white/10 bg-slate-900 shadow-lg rounded-br-lg" />
            <div className="w-8 h-10 border-l border-b border-white/10 bg-slate-900 shadow-lg rounded-bl-lg" />
          </div>
        </div>
        ))}
      </main>

      {/* 3D BOOK DETAILED SPREAD MODAL overlay */}
      <AnimatePresence>
        {isOpening && selectedBook && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
          >
            {/* CLOSE ACTION BUTTON */}
            <button
              onClick={handleCloseBook}
              className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full border border-white/15 bg-slate-950/70 hover:bg-slate-900 text-zinc-400 hover:text-white transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] z-50 flex items-center justify-center"
              title={t.closeBookTooltip}
            >
              <X size={22} />
            </button>

            {/* MAIN 3D BOOK STRUCTURE AND WRAPPER */}
            <div className="w-full max-w-[1100px] h-[90vh] md:h-[650px] relative perspective-2000 preserve-3d flex items-center justify-center">
              
              {/* SHADOW BENEATH OPENED SPREAD */}
              <div className="absolute inset-4 bg-black/90 rounded-[40px] blur-[60px] opacity-75 pointer-events-none" />

              {/* BOOK BODY: DUAL PAGES SPREAD CONTAINER */}
              <motion.div 
                initial={{ rotateX: 20, scale: 0.85, y: 50 }}
                animate={{ rotateX: 0, scale: 1, y: 0 }}
                exit={{ rotateX: 20, scale: 0.85, y: 50 }}
                transition={{ type: "spring", stiffness: 65, damping: 14 }}
                className="w-full h-full grid grid-cols-1 md:grid-cols-2 rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/10 bg-[#070b19] shadow-2xl relative preserve-3d"
              >
                
                {/* 1. LEFT PAGE SPREAD: PROJECT PREVIEW */}
                <div 
                  className={`relative min-h-[300px] md:h-full p-8 md:p-12 flex flex-col justify-between ${
                    isRtl ? "border-l md:border-l-0 md:border-r border-white/10" : "border-r border-white/10"
                  }`}
                  style={{
                    backgroundImage: `linear-gradient(rgba(7, 11, 25, 0.88), rgba(7, 11, 25, 0.95)), url(${basePath}${activeBook.coverImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  <div className="absolute inset-0 bg-[#070b19]/90 mix-blend-multiply pointer-events-none" />
                  
                  {/* Decorative Gold Filigree Corner (Left Page Top Left / Top Right depending on layout) */}
                  <div className={`absolute top-6 w-8 h-8 border-t border-amber-500/20 pointer-events-none ${isRtl ? "right-6 border-r" : "left-6 border-l"}`} />

                  {/* Header metadata inside book */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] tracking-widest uppercase font-bold text-amber-500/80 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded">
                      {t.spineText}
                    </span>
                    <span className="text-xs text-zinc-500 font-bold">{activeBook.badge} / 04</span>
                  </div>

                  {/* High Quality Embed Screenshot Preview */}
                  <div className="relative z-10 my-4 flex-1 min-h-[250px] md:min-h-[350px] w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl group/preview bg-black/40 backdrop-blur-sm">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={previewImgIndex}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={`${basePath}${activeBook.previewImages[previewImgIndex]}`}
                          alt={activeBook.translations[lang].title}
                          fill
                          unoptimized
                          priority
                          className="object-contain object-center transform transition-transform duration-700 group-hover/preview:scale-105 p-2"
                        />
                      </motion.div>
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                    
                    {/* Dots indicator if multiple images */}
                    {activeBook.previewImages && activeBook.previewImages.length > 1 && (
                      <div className="absolute top-3 right-3 flex gap-1.5 z-20">
                        {activeBook.previewImages.map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-1.5 h-1.5 rounded-full transition-all ${i === previewImgIndex ? "bg-amber-400 w-3" : "bg-white/40"}`} 
                          />
                        ))}
                      </div>
                    )}
                    
                    {/* Float overlay label */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-black/60 backdrop-blur-md border border-white/10 p-2.5 rounded-lg">
                      <span className="text-[11px] font-semibold text-zinc-300 leading-snug">
                        {activeBook.translations[lang].subtitle}
                      </span>
                      <div className="w-6 h-6 rounded-md bg-amber-500/20 flex items-center justify-center text-amber-400">
                        {renderIcon(activeBook.iconName, 13)}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Text Inside Page */}
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                      {activeBook.translations[lang].title}
                    </h3>
                    <p className="text-zinc-400 text-xs md:text-sm mt-3 leading-relaxed">
                      {activeBook.translations[lang].description}
                    </p>
                  </div>
                </div>

                {/* 2. RIGHT PAGE SPREAD: CORE FEATURES & SPECIFICATIONS */}
                <div className="relative h-full p-8 md:p-12 flex flex-col justify-between bg-gradient-to-b from-[#090f23] to-[#050814]">
                  
                  {/* Decorative Gold Filigree Corner */}
                  <div className={`absolute top-6 w-8 h-8 border-t border-amber-500/20 pointer-events-none ${isRtl ? "left-6 border-l" : "right-6 border-r"}`} />

                  {/* Features Header inside book */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-1.5 h-6 rounded bg-amber-500" />
                      <h4 className="text-base md:text-lg font-black text-amber-400 tracking-wide uppercase gold-text-glow">
                        {t.mainFeaturesHeader}
                      </h4>
                    </div>

                    {/* Features checklist grid */}
                    <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                      {activeBook.translations[lang].features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-4 p-3.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
                        >
                          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                            {fIdx % 4 === 0 && <Sparkles size={15} />}
                            {fIdx % 4 === 1 && <Shield size={15} />}
                            {fIdx % 4 === 2 && <Zap size={15} />}
                            {fIdx % 4 === 3 && <Boxes size={15} />}
                          </div>
                          <div>
                            <h5 className="text-xs md:text-sm font-bold text-white">
                              {feature}
                            </h5>
                            <p className="text-[10px] md:text-xs text-zinc-400 mt-0.5">
                              {activeBook.translations[lang].featureDescs[fIdx]}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Call-to-action & Footer Pagination */}
                  <div className="relative z-10 pt-6 mt-6 border-t border-white/5">
                    
                    {/* Glowing Premium CTA */}
                    <button className="w-full h-12 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-600 hover:from-amber-400 hover:to-amber-500 text-black text-sm font-extrabold shadow-[0_0_30px_rgba(224,176,52,0.25)] hover:shadow-[0_0_40px_rgba(224,176,52,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group/cta transform hover:scale-[1.01]">
                      {t.ctaButton}
                      {isRtl ? <ArrowLeft size={16} className="group-hover/cta:-translate-x-1.5 transition-transform" /> : <ArrowRight size={16} className="group-hover/cta:translate-x-1.5 transition-transform" />}
                    </button>

                    {/* Pagination Controls */}
                    <div className="flex items-center justify-between text-xs text-zinc-500 mt-6">
                      <div className="font-bold tracking-widest text-[11px]">
                        0{activeIndex + 1} / 04
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={handlePrevBook}
                          className="w-9 h-9 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all flex items-center justify-center"
                          title={t.prevBookBtn}
                        >
                          {isRtl ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
                        </button>
                        
                        <button
                          onClick={handleNextBook}
                          className="w-9 h-9 rounded-lg border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all flex items-center justify-center"
                          title={t.nextBookBtn}
                        >
                          {isRtl ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* BOOK CENTER CREASE SHADOW */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-4 bg-gradient-to-r from-black/60 via-black/10 to-black/60 pointer-events-none z-20 hidden md:block" />
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/10 pointer-events-none z-30 hidden md:block" />

              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER VALUES BAR */}
      <section className="relative z-10 bg-slate-950/40 border-t border-white/5 py-12 px-6 mt-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center md:border-r border-white/5 last:border-r-0 px-4">
            <h5 className="text-amber-400 font-extrabold text-lg gold-text-glow">{t.bottomTitle1}</h5>
            <p className="text-xs text-zinc-400 mt-1">{t.bottomDesc1}</p>
          </div>
          <div className="text-center md:border-r border-white/5 last:border-r-0 px-4">
            <h5 className="text-amber-400 font-extrabold text-lg gold-text-glow">{t.bottomTitle2}</h5>
            <p className="text-xs text-zinc-400 mt-1">{t.bottomDesc2}</p>
          </div>
          <div className="text-center md:border-r border-white/5 last:border-r-0 px-4">
            <h5 className="text-amber-400 font-extrabold text-lg gold-text-glow">{t.bottomTitle3}</h5>
            <p className="text-xs text-zinc-400 mt-1">{t.bottomDesc3}</p>
          </div>
          <div className="text-center px-4">
            <h5 className="text-amber-400 font-extrabold text-lg gold-text-glow">{t.bottomTitle4}</h5>
            <p className="text-xs text-zinc-400 mt-1">{t.bottomDesc4}</p>
          </div>
        </div>

        {/* CONNECTED CONTACT US SECTION */}
        <div id="contact" className="max-w-6xl mx-auto border-t border-white/5 pt-12 pb-6">
          <h4 className="text-center text-xl font-black text-white tracking-wider mb-10 gold-text-glow">
            {t.navContact}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* WhatsApp */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/5 bg-slate-950/60 backdrop-blur-xl hover:border-amber-500/30 transition-all duration-300 group shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform duration-300 mb-4 shadow-[0_0_15px_rgba(224,176,52,0.1)]">
                <Phone size={20} />
              </div>
              <h5 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-3">WhatsApp</h5>
              <div className="flex flex-col gap-2 text-xs font-mono text-zinc-400">
                <a href="https://wa.me/212646398611" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  +212 646-398611
                </a>
                <a href="https://wa.me/212702627922" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  +212 702-627922
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/5 bg-slate-950/60 backdrop-blur-xl hover:border-amber-500/30 transition-all duration-300 group shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform duration-300 mb-4 shadow-[0_0_15px_rgba(224,176,52,0.1)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>
              <h5 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-3">Instagram</h5>
              <div className="flex flex-col gap-2 text-xs text-zinc-400">
                <a href="https://www.instagram.com/devnapp_official/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  @devnapp_official
                </a>
                <a href="https://www.instagram.com/vertex_.digital/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  @vertex_.digital
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/5 bg-slate-950/60 backdrop-blur-xl hover:border-amber-500/30 transition-all duration-300 group shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform duration-300 mb-4 shadow-[0_0_15px_rgba(224,176,52,0.1)]">
                <Mail size={20} />
              </div>
              <h5 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-3">Email</h5>
              <div className="flex flex-col gap-2 text-xs text-zinc-400">
                <a href="mailto:contact@devnapp.com" className="hover:text-amber-400 transition-colors">
                  contact@devnapp.com
                </a>
                <a href="mailto:moohamed.oufkir@gmail.com" className="hover:text-amber-400 transition-colors">
                  moohamed.oufkir@gmail.com
                </a>
              </div>
            </div>

            {/* Maps */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/5 bg-slate-950/60 backdrop-blur-xl hover:border-amber-500/30 transition-all duration-300 group shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform duration-300 mb-4 shadow-[0_0_15px_rgba(224,176,52,0.1)]">
                <MapPin size={20} />
              </div>
              <h5 className="text-xs font-bold text-zinc-300 uppercase tracking-widest mb-3">Location</h5>
              <div className="flex flex-col gap-2 text-xs text-zinc-400">
                <a href="https://maps.google.com/?q=Tangier,Morocco" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  {lang === "ar" ? "طنجة، المغرب" : lang === "fr" ? "Tanger, Maroc" : "Tangier, Morocco"}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-zinc-600 text-xs tracking-wider">
          © 2026 DevNApp. All rights reserved. Premium Interactive 3D Showcase.
        </div>
      </section>
    </div>
  );
}
