// import Image from "next/image";
// import logo from "/public/images/qr-code.jpg";

// export default function DownloadSection() {
//   return (
//     <section id="download" className="py-16 text-center bg-white">
//       <h2 className="text-3xl font-bold mb-4">Download the App now</h2>
//       <p className="mb-6">Get started with AI-powered depression detection today.</p>
//       <a href="/download/app.apk" download className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-900 transition">
//         Download App
//       </a>
//       <a href="/download/app.apk" download>
//         <Image 
//           src={logo} 
//           alt="Download App" 
//           width={200}
//           height={200} 
//           className="mx-auto hover:scale-105 transition-transform duration-300 mt-5"
//         />
//       </a>
//     </section>
//   );
// }
//-------------

import Image from "next/image";
import logo from "/public/images/qr-code.jpg";
import { ArrowDown, Download, Phone, Tablet, Laptop } from "lucide-react";

export default function DownloadSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with orange gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 opacity-95"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-orange-300 rounded-full opacity-20"></div>
      
      <div className="relative container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side: Text content */}
          <div className="md:w-1/2 text-white mb-12 md:mb-0 text-center md:text-left">
            <h2 id="download" className="text-4xl md:text-5xl font-bold mb-6">
              Take Control of Your 
              <span className="block mt-2 text-orange-200">Mental Health</span>
            </h2>
            
            <p className="text-xl mb-8 text-orange-50 max-w-lg">
              Get started with our AI-powered depression detection app today and begin your journey toward better mental wellness.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center">
                <div className="bg-orange-400 p-2 rounded-full mr-3">
                  <Phone size={16} className="text-white" />
                </div>
                <p className="text-orange-50">Available on Android</p>
              </div>
              
              <div className="flex items-center">
                <div className="bg-orange-400 p-2 rounded-full mr-3">
                  <Laptop size={16} className="text-white" />
                </div>
                <p className="text-orange-50">Web application accessible on the browser</p>
              </div>
              
              <div className="flex items-center">
                <div className="bg-orange-400 p-2 rounded-full mr-3">
                  <Tablet size={16} className="text-white" />
                </div>
                <p className="text-orange-50">Optimized for tablet experience</p>
              </div>
            </div>
            
            <a 
              href="https://drive.google.com/file/d/152Ap9xhynifem-WlDBGrKaFZD7ufMu_j/view?usp=sharing" 
              download
              className="inline-flex items-center bg-white text-orange-600 font-medium px-8 py-4 rounded-full 
                        hover:bg-orange-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download size={20} className="mr-2" />
              Download Now
            </a>
          </div>
          
          {/* Right side: App logo and download visual */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Pulsing circle animation */}
              <div className="absolute inset-0 rounded-full bg-orange-300 animate-ping opacity-20"></div>
              
              {/* Logo container with glowing effect */}
              <div className="relative bg-white bg-opacity-95 p-8 rounded-xl shadow-2xl transform 
                              hover:scale-105 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 to-transparent 
                                rounded-xl opacity-30"></div>
                
                <Image 
                  src={logo} 
                  alt="Download App" 
                  width={240}
                  height={240} 
                  className="relative z-10"
                />
                
                <div className="flex justify-center mt-4">
                  <ArrowDown size={28} className="text-orange-600 animate-bounce" />
                </div>
                
                <p className="mt-4 font-medium text-orange-800">
                  Scan to download
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm text-white border border-orange-300 border-opacity-30">
            <div className="text-3xl font-bold mb-2">10,000+</div>
            <p className="text-orange-100">Active Users</p>
          </div>
          
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm text-white border border-orange-300 border-opacity-30">
            <div className="text-3xl font-bold mb-2">4.8/5</div>
            <p className="text-orange-100">User Rating</p>
          </div>
          
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm text-white border border-orange-300 border-opacity-30">
            <div className="text-3xl font-bold mb-2">75%</div>
            <p className="text-orange-100">Early Detection Rate</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
