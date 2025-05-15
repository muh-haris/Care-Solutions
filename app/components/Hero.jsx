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

'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center min-h-[50vh] bg-gradient-to-r from-indigo-200 to-blue-300 text-center px-4">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Leveraging AI for Early Detection of Depression
      </motion.h1>
      <p className="mt-4 max-w-xl text-lg">
        Analyze textual input to detect signs of depression using AI models.
      </p>
    </section>
  );
}


// 'use client';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import bgImage from '/public/images/background.png';

// export default function Hero() {
//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between h-screen px-6 md:px-16 bg-gradient-to-r from-indigo-200 to-blue-300">
      
//       {/* Left: Text Content */}
//       <div className="w-full md:w-1/2 text-center md:text-left z-10">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl md:text-6xl font-bold text-gray-900"
//         >
//           Leveraging AI for Early Detection of Depression
//         </motion.h1>
//         <p className="mt-4 max-w-xl text-lg text-gray-800">
//           Analyze textual input to detect signs of depression using AI models.
//         </p>
//       </div>

//       {/* Right: Animated Image */}
//       <div className="relative w-full md:w-1/2 h-64 md:h-full mt-10 md:mt-0 overflow-hidden">
//         <motion.div
//           className="absolute inset-0"
//           initial={{ scale: 1 }}
//           animate={{ scale: 1.05 }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//             repeatType: 'reverse',
//             ease: 'easeInOut',
//           }}
//         >
//           <Image
//             src={bgImage}
//             alt="Background Illustration"
//             layout="fill"
//             objectFit="cover"
//             quality={100}
//             className="rounded-lg"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }
