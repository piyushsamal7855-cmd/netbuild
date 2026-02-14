import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const phoneNumber = "7855901395";

  // WhatsApp Order Logic
  const sendOrder = (product) => {
    const msg = `Hello Theos Cafe! I want to order: ${product}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="bg-cafeDark text-white min-h-screen">
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        className="text-center py-16 px-4 bg-gradient-to-b from-cafeBrown to-cafeDark"
      >
        <div className="w-24 h-24 border-2 border-cafeGold rounded-full mx-auto flex items-center justify-center mb-6">
          <span className="text-3xl font-serif text-cafeGold">TC</span>
        </div>
        <h1 className="text-5xl font-serif text-cafeGold italic">Theos Cafe</h1>
        <p className="mt-4 tracking-[0.3em] text-xs uppercase">Premium Dessert Cafe • Surat</p>
        
        <button 
          onClick={() => sendOrder("Full Menu")}
          className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold transition-all"
        >
          WhatsApp Order
        </button>
      </motion.header>

      {/* Special Offers Section */}
      <section className="p-6 max-w-4xl mx-auto">
        <div className="bg-black/40 border border-cafeGold/20 p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl text-cafeGold font-bold italic">Combo Deal</h2>
            <p className="text-gray-400">Brownie + Coffee</p>
          </div>
          <button 
            onClick={() => sendOrder("Combo Deal")}
            className="bg-cafeGold text-black px-6 py-2 rounded-lg font-bold"
          >
            ORDER NOW
          </button>
        </div>
      </section>
    </div>
  );
};

export default App;
