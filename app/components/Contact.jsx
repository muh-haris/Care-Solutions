// "use client";

// import { useState } from "react";

// export default function ContactSection() {
//   const [submitted, setSubmitted] = useState(false);

//   return (
//     <section id="contact" className="py-20 bg-white px-4">
//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>

//         <form
//           action="https://formspree.io/f/xrbqrpzg"
//           method="POST"
//           onSubmit={() => setSubmitted(true)}
//           className="space-y-6 bg-orange-600 text-white p-8 rounded-xl shadow-lg"
//         >
//           <div className="grid md:grid-cols-2 gap-4">
//             <div>
//               <label className="block mb-1 font-medium">Full Name*</label>
//               <input
//                 type="text"
//                 name="name"
//                 required
//                 className="w-full border border-orange-700 p-2 rounded text-black"
//               />
//             </div>
//             <div>
//               <label className="block mb-1 font-medium">Email*</label>
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 className="w-full border border-orange-700 p-2 rounded text-black"
//               />
//             </div>
//             <div>
//               <label className="block mb-1 font-medium">Phone (optional)</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 className="w-full border border-orange-700 p-2 rounded text-black"
//               />
//             </div>
//             <div>
//               <label className="block mb-1 font-medium">Role*</label>
//               <div className="flex gap-4 mt-2">
//                 <label className="flex items-center">
//                   <input type="radio" name="role" value="Patient" required className="mr-2" />
//                   Patient
//                 </label>
//                 <label className="flex items-center">
//                   <input type="radio" name="role" value="Doctor" required className="mr-2" />
//                   Doctor
//                 </label>
//               </div>
//             </div>
//           </div>

//           <div>
//             <label className="block mb-1 font-medium">Subject*</label>
//             <input
//               type="text"
//               name="subject"
//               required
//               className="w-full border border-orange-700 p-2 rounded text-black"
//             />
//           </div>

//           <div>
//             <label className="block mb-1 font-medium">Message*</label>
//             <textarea
//               name="message"
//               rows="5"
//               required
//               className="w-full border border-orange-700 p-2 rounded text-black"
//             ></textarea>
//           </div>

//           {/* Centered Submit */}
//           <div className="text-center">
//             <button
//               type="submit"
//               className="border-2 border-orange-950 bg-white text-black px-6 py-3 rounded hover:bg-gray-300 transition"
//             >
//               Submit
//             </button>
//           </div>
//         </form>

//         {/* Thank-you Popup */}
//         {submitted && (
//           <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//             <div className="bg-white p-6 rounded-xl shadow-xl text-center max-w-sm w-full">
//               <h3 className="text-xl font-semibold text-green-600 mb-2">Thank You!</h3>
//               <p className="mb-4">Your message has been sent successfully.</p>
//               <button
//                 onClick={() => setSubmitted(false)}
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
//------------------------

"use client";

import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-orange-50 to-white px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-800 mb-2">Contact Us</h2>
          <p className="text-orange-600">We'd love to hear from you. Send us a message!</p>
        </div>

        <form
          action="https://formspree.io/f/xrbqrpzg"
          method="POST"
          onSubmit={() => setSubmitted(true)}
          className="space-y-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-10 rounded-2xl shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Full Name*</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border-2 border-orange-300 p-3 rounded-lg text-black focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition duration-200"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Email*</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border-2 border-orange-300 p-3 rounded-lg text-black focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition duration-200"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Phone (optional)</label>
              <input
                type="tel"
                name="phone"
                className="w-full border-2 border-orange-300 p-3 rounded-lg text-black focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition duration-200"
                placeholder="(123) 456-7890"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Role*</label>
              <div className="flex gap-6 mt-2">
                <label className="flex items-center cursor-pointer group">
                  <div className="relative">
                    <input 
                      type="radio" 
                      name="role" 
                      value="Patient" 
                      required 
                      className="sr-only peer" 
                    />
                    <div className="w-6 h-6 border-2 border-orange-300 rounded-full group-hover:border-white transition duration-200"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-30 peer-checked:opacity-100">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <span className="ml-2 group-hover:text-orange-200 transition duration-200">Patient</span>
                </label>
                <label className="flex items-center cursor-pointer group">
                  <div className="relative">
                    <input 
                      type="radio" 
                      name="role" 
                      value="Doctor" 
                      required 
                      className="sr-only peer" 
                    />
                    <div className="w-6 h-6 border-2 border-orange-300 rounded-full group-hover:border-white transition duration-200"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-30 peer-checked:opacity-100">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <span className="ml-2 group-hover:text-orange-200 transition duration-200">Doctor</span>
                </label>
              </div>
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Subject*</label>
            <input
              type="text"
              name="subject"
              required
              className="w-full border-2 border-orange-300 p-3 rounded-lg text-black focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition duration-200"
              placeholder="How can we help you?"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message*</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border-2 border-orange-300 p-3 rounded-lg text-black focus:border-orange-400 focus:ring focus:ring-orange-200 focus:ring-opacity-50 transition duration-200"
              placeholder="Please share your thoughts or questions..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-white text-orange-700 font-medium px-8 py-3 rounded-full border-2 border-white hover:bg-orange-50 hover:text-orange-800 transform hover:scale-105 transition duration-300 shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Thank-you Popup */}
        {submitted && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md w-full border-t-4 border-orange-500 animate-fadeIn">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-orange-700 mb-2">Thank You!</h3>
              <p className="mb-6 text-gray-600">Your message has been sent successfully. We'll get back to you soon.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}