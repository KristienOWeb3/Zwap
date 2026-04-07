"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    id: 1,
    content: (
      <div className="flex flex-col items-center justify-center h-full w-full bg-[#111111] text-white">
        <button className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform shadow-2xl text-lg">
          Drop your CV
        </button>
      </div>
    ),
    zIndex: 10,
  },
  {
    id: 2,
    content: (
      <div className="flex flex-col h-full w-full bg-white border-t-[20px] border-blue-500 p-8 md:p-16 lg:p-24 shadow-[0_-10px_40px_rgba(0,0,0,0.15)] text-black">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-5xl tracking-tight leading-tight mt-12 md:mt-24">
          Sofia Maren is a brand designer and art director based in Los Angeles...
        </h2>
      </div>
    ),
    zIndex: 20,
  },
  {
    id: 3,
    content: (
      <div className="flex flex-col h-full w-full bg-neutral-50 p-8 md:p-16 lg:p-24 shadow-[0_-10px_40px_rgba(0,0,0,0.15)]">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">Performance Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full pb-12">
          {/* Graph Placeholder */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 flex flex-col justify-end relative overflow-hidden">
            <div className="w-full h-48 bg-neutral-100 rounded-xl mb-4 animate-pulse"></div>
            <div className="w-3/4 h-6 bg-neutral-200 rounded animate-pulse mb-3"></div>
            <div className="w-1/2 h-4 bg-neutral-100 rounded animate-pulse"></div>
            <p className="text-neutral-400 font-medium absolute top-8 left-8">Analytics Graph Placeholder</p>
          </div>
          {/* Image Showcase */}
          <div className="bg-white rounded-3xl p-2 shadow-sm border border-neutral-100">
            <div className="w-full h-full bg-neutral-200 rounded-2xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
                alt="Graphs and charts" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    ),
    zIndex: 30,
  }
];

const StackedCard = ({ card, index, progress, range, targetScale }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // As the overall page scrolls, this hook dynamically shrinks the un-focused cards
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // Opacity fade when a card gets pushed heavily into the background
  const opacity = useTransform(progress, range, [1, 0.4]);

  return (
    <div 
      ref={containerRef} 
      className="h-screen w-full flex items-center justify-center sticky top-0" 
      style={{ zIndex: card.zIndex }}
    >
      <motion.div 
        style={{ 
          scale, 
          opacity, 
          top: `calc(-10% + ${index * 15}px)` // Adds slight visual depth offset
        }} 
        className="w-full h-full origin-top"
      >
        {card.content}
      </motion.div>
    </div>
  );
};

export default function StackedCardsAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Tracks scroll progress across the entire container containing all stacked cards
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <div ref={containerRef} className="relative w-full">
      {cards.map((card, i) => {
        // Target scale shrinks by 0.05 for each card layered on top
        const targetScale = 1 - ((cards.length - i) * 0.05); 
        
        // Maps the scroll range for exactly when this card should begin scaling down
        const range = [i * (1 / cards.length), 1];
        
        return (
          <StackedCard 
            key={card.id} 
            card={card} 
            index={i} 
            progress={scrollYProgress} 
            range={range} 
            targetScale={targetScale} 
          />
        );
      })}
    </div>
  );
}
