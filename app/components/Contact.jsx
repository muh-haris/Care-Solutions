"use client";

import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 bg-white px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>

        <form
          action="https://formspree.io/f/xrbqrpzg"
          method="POST"
          onSubmit={() => setSubmitted(true)}
          className="space-y-6 bg-orange-600 text-white p-8 rounded-xl shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">Full Name*</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-orange-700 p-2 rounded text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email*</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-orange-700 p-2 rounded text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Phone (optional)</label>
              <input
                type="tel"
                name="phone"
                className="w-full border border-orange-700 p-2 rounded text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Role*</label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center">
                  <input type="radio" name="role" value="Patient" required className="mr-2" />
                  Patient
                </label>
                <label className="flex items-center">
                  <input type="radio" name="role" value="Doctor" required className="mr-2" />
                  Doctor
                </label>
              </div>
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Subject*</label>
            <input
              type="text"
              name="subject"
              required
              className="w-full border border-orange-700 p-2 rounded text-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message*</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full border border-orange-700 p-2 rounded text-black"
            ></textarea>
          </div>

          {/* Centered Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="border-2 border-orange-950 bg-white text-black px-6 py-3 rounded hover:bg-gray-300 transition"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Thank-you Popup */}
        {submitted && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-xl text-center max-w-sm w-full">
              <h3 className="text-xl font-semibold text-green-600 mb-2">Thank You!</h3>
              <p className="mb-4">Your message has been sent successfully.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
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
