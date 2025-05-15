// 'use client';
// import { motion } from 'framer-motion';

// export default function Hero() {
//   return (
//     <section className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-indigo-200 to-blue-300 text-center px-4">
//       <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-4xl md:text-6xl font-bold">
//         Leveraging AI for Early Detection of Depression
//       </motion.h1>
//       <p className="mt-4 max-w-xl text-lg">
//         Analyze textual input to detect signs of depression using AI models.
//       </p>
//     </section>
//   );
// }
//-----------------------

// 'use client';
// import { motion } from 'framer-motion';

// export default function Hero() {
//   return (
//     <section className="flex flex-col justify-center items-center min-h-[50vh] bg-gradient-to-r from-indigo-200 to-blue-300 text-center px-4">
//       <motion.h1
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="text-4xl md:text-6xl font-bold"
//       >
//         Leveraging AI for Early Detection of Depression
//       </motion.h1>
//       <p className="mt-4 max-w-xl text-lg">
//         Analyze textual input to detect signs of depression using AI models.
//       </p>
//     </section>
//   );
// }
//--------------

'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden flex flex-col justify-center items-center min-h-[80vh] bg-gradient-to-br from-orange-200 via-amber-200 to-orange-100 text-center px-4 py-16">
      {/* Background decoration elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-orange-300 blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-amber-400 blur-3xl"
        />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold border border-orange-200 shadow-sm">
            Research Project
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-orange-900 leading-tight"
        >
          Leveraging AI for
          <span className="block text-orange-600"> Early Detection of Depression</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-orange-800 mx-auto leading-relaxed"
        >
          Our innovative platform uses advanced natural language processing to analyze textual input
          and identify early warning signs of depression with high accuracy.
        </motion.p>
        
        <motion.div
          className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <a href="#test">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              whileHover={{ scale: 1.05, backgroundColor: '#c2410c' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="px-8 py-4 bg-orange-500 text-white rounded-lg font-medium shadow-lg flex items-center justify-center min-w-40"
            >
              <span>Take Test</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            
            </motion.button>
          </a>
          
          <a href="#intro">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, delay: 1 }}
              className="px-8 py-4 border-2 border-orange-400 text-orange-600 bg-transparent hover:bg-orange-50 rounded-lg font-medium flex items-center justify-center min-w-40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Learn More</span>
            </motion.button>
          </a>
            
        </motion.div>
        
        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { number: '92%', label: 'Accuracy Rate' },
            { number: '10k+', label: 'Processed Samples' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
              className="bg-white bg-opacity-80 rounded-xl p-6 shadow-md border border-orange-100"
            >
              <h3 className="text-3xl font-bold text-orange-600">{stat.number}</h3>
              <p className="text-orange-800 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
          />
        </svg>
      </div>
    </section>
  );
}