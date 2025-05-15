// import Image from "next/image";

// const images = ["app1.png", "app2.png", "app3.png", "app4.png", "app5.png", "app6.png", "app7.png", "app8.png", "app9.png", "app10.png", "app11.png", "app12.png"];

// export default function AppScreenshots() {
//   return (
//     <section id="screenshots" className="py-12 bg-gray-50">
//       <h2 className="text-3xl text-center font-bold mb-6">App Design</h2>
//       <div className="overflow-x-auto whitespace-nowrap px-6">
//         <div className="inline-flex space-x-4">
//           {images.map((img, i) => (
//             <Image
//               key={i}
//               src={`/images/${img}`}
//               alt={`App screenshot ${i + 1}`}
//               width={300}
//               height={600}
//               className="rounded-xl shadow-lg"
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
//-------------

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Welcome Screen",
    description: "The welcome screen offers a simple interface for starting a button named Get Started.",
    image: "/images/app1.png",
  },
  {
    title: "Role Selection",
    description: "Users select their role: Doctor or Patient. Each role is clearly defined, doctors access patient records and provide support, patients track their progress and connect with professionals",
    image: "/images/app2.png",
  },
  {
    title: "SignIn/SignUp",
    description: "The sign-in/sign-up interface includes email and password fields, a 'Forgot Password?' option, a prominent 'Sign In' button, and a clearly separated 'Create Account' option. It supports both login and registration, allowing new and returning users to access the platform easily.",
    image: "/images/app3.png",
  },
  {
    title: "Patient's Home Screen",
    description: "Patient's home interface features a personalized greeting, a depression test prompt and quick-access wellness tools including Health Check, Daily Tasks, Meditation and Mood Tracker. It includes a Daily Wellness Tips section for psychoeducation and a bottom taskbar with Home, Community, Doctors and Profile for easy navigation.",
    image: "/images/app4.png",
  },
  {
    title: "Depression Test Resut",
    description: "The evaluation result screen displays the user's diagnosis with a visual icon and a brief explanation of the condition, including its depressive and manic phases. It then provides personalized suggestions based on the result to guide the user's next steps.",
    image: "/images/app5.png",
  },
  {
    title: "Daily Wellness",
    description: "Daily Wellness dashboard shows the current date, task completion summary and categorized wellness areas like Mindfulness, Physical Health and Social Connection with progress bars and task metrics (e.g., 3 of 4 tasks). It includes percentage completions, fraction-based counts and an Insights for deeper analytics, helping users track self-care progress through clear, goal-oriented segments.",
    image: "/images/app6.png",
  },
  {
    title: "Search/Select Doctors",
    description: "The Doctors interface includes a patient panel with two sections: My Chats for ongoing conversations and Available Doctors for finding new providers. A search bar allows filtering by doctor name or specialty. Each doctor entry displays the name, specialization and last interaction timestamp.",
    image: "/images/app8.png",
  },
  {
    title: "Chat with Doctor",
    description: "The Chat Interface enables real-time messaging between patients and doctors, showing the doctor's name and availability status. It includes chat history with timestamps, read receipts and support for deleted messages. The bottom toolbar provides a message input field, options to attach files or voice notes and a send button for communication.",
    image: "/images/app9.png",
  },
  {
    title: "Community Section",
    description: "The Community Feed interface allows users to share posts and interact through like and comment options. A Create New Post button enables new submissions, while existing posts display user messages with timestamps in a card-based format, supporting peer engagement and communication.",
    image: "/images/app10.png",
  },
  {
    title: "Profile",
    description: "The patient profile interface displays personal information including name, age, gender, phone number and email in a structured, card-style layout.",
    image: "/images/app11.png",
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

export default function AppScreenshots() {
  return (
    <section id="screenshots" className="py-16 bg-gray-50 px-6">
      <h2 className="text-3xl text-center font-bold mb-12">App Design & Features</h2>
      <div className="space-y-16 max-w-6xl mx-auto">
        {sections.map((section, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center ${
                isReversed ? "md:flex-row-reverse" : ""
              } gap-10`}
            >
              <div className="md:w-1/2">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={250}
                  height={250}
                  className="rounded-xl shadow-xl"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-2">{section.title}</h3>
                <p className="text-lg text-gray-700">{section.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
