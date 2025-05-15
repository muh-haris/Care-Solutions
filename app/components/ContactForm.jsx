"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const recaptchaToken = formData.get("g-recaptcha-response");

    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const data = await response.json();
        setError(data?.errors?.[0]?.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Network error. Try again.");
    }
  };

  if (submitted) {
    window.location.href = "/thank-you";
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-100 p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Full Name*</label>
          <input type="text" name="name" required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email*</label>
          <input type="email" name="email" required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Phone</label>
          <input type="tel" name="phone" className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Role*</label>
          <div className="flex gap-4 mt-2">
            <label className="flex items-center">
              <input type="radio" name="role" value="Patient" required className="mr-2" /> Patient
            </label>
            <label className="flex items-center">
              <input type="radio" name="role" value="Doctor" required className="mr-2" /> Doctor
            </label>
          </div>
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium">Subject*</label>
        <input type="text" name="subject" required className="w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Message*</label>
        <textarea name="message" rows="5" required className="w-full border p-2 rounded" />
      </div>

      {/* reCAPTCHA */}
      <div className="mt-4">
        <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}
