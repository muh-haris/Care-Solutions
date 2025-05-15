// export default function Introduction() {
//     return (
//       <div className=" bg-orange-600 text-white">
//         <section id="intro" className="px-6 py-12 text-center max-w-4xl mx-auto">
//           <h2 className="text-3xl font-semibold mb-4">About</h2>
//           <p className="text-lg">
//             The application uses Natural Language Processing and AI algorithms to identify depressive patterns in text input. It helps in early mental health intervention.
//           </p>
//           <p className="text-lg mt-2 text-justify">
//           Depression is a common mental health disorder. It involves a depressed mood or loss of interest in activities for long periods. Approximately 360 million people in the world have depression. It is necessary to diagnose depression at the early stages. Traditionally, depression is diagnosed by a doctor face-to-face. More than 70% of the patients would not consult doctors at the early stages of depression. To overcome such challenges, this project proposes developing an application that will analyse users' written responses to predefined mental health questions to identify depression and provide real-time predictions regarding the presence of depressed symptoms.
//           </p>
//           <p className="text-lg mt-2 text-justify">
//           Applying deep learning techniques and natural language processing (NLP), the model aims to assess textual input that detects depression and predicts its severity.  With the help of modern techniques, the system can read the text and identify depression. The primary objective of this project is to build a system for the continuous assessment of users ‘mental health status. The application will have a user login option to allow the safe storage of individual assessments that the user can carry out. This will enable the patients to perform such self-evaluation tests at regular intervals to assess their cognitive health. With this feature, users can send information to their care providers to improve the treatment and management of mental health issues. Overall, this project intends to make it easy to recognize the early symptoms of depression by using natural language processing techniques. The aim is to give device users the power to take control and incorporate measures that will improve their mental health.
//           </p>
//         </section>
//       </div>
//     );
//   }
//-------------

'use client';

import { useState } from 'react';
import { BookOpen, Brain, Heart, Activity } from 'lucide-react';

export default function Introduction() {
  const [activeTab, setActiveTab] = useState('about');
  
  return (
    <div className="bg-gradient-to-b from-orange-600 to-orange-500 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 id='intro' className="text-4xl md:text-5xl font-bold mb-4">Mental Health Assessment</h1>
          <p className="text-xl max-w-3xl mx-auto text-orange-100">
            Using AI and Natural Language Processing to identify and monitor depression patterns
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-orange-400">
          <button 
            onClick={() => setActiveTab('about')}
            className={`px-6 py-3 font-medium text-lg transition-colors ${
              activeTab === 'about' 
                ? 'border-b-2 border-white text-white' 
                : 'text-orange-200 hover:text-white'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => setActiveTab('approach')}
            className={`px-6 py-3 font-medium text-lg transition-colors ${
              activeTab === 'approach' 
                ? 'border-b-2 border-white text-white' 
                : 'text-orange-200 hover:text-white'
            }`}
          >
            Our Approach
          </button>
          <button 
            onClick={() => setActiveTab('features')}
            className={`px-6 py-3 font-medium text-lg transition-colors ${
              activeTab === 'features' 
                ? 'border-b-2 border-white text-white' 
                : 'text-orange-200 hover:text-white'
            }`}
          >
            Features
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-orange-50 text-orange-950 rounded-lg shadow-xl p-8">
          {activeTab === 'about' && (
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-500 p-3 rounded-full mr-4">
                  <BookOpen size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-orange-800 mb-3">Understanding Depression</h2>
                  <p className="text-lg">
                    Depression is a common mental health disorder affecting approximately 360 million people worldwide. 
                    It involves a depressed mood or loss of interest in activities for extended periods.
                  </p>
                </div>
              </div>
              
              <p className="text-lg">
                More than 70% of patients don't consult doctors at the early stages of depression. 
                Traditional diagnosis requires face-to-face doctor consultations, creating barriers to early intervention.
              </p>
              
              <p className="text-lg font-medium text-orange-700">
                Our application addresses these challenges by providing accessible mental health screening through 
                analysis of written responses, helping identify depression symptoms at earlier stages.
              </p>
            </div>
          )}

          {activeTab === 'approach' && (
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-500 p-3 rounded-full mr-4">
                  <Brain size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-orange-800 mb-3">Our Technical Approach</h2>
                  <p className="text-lg">
                    The application leverages cutting-edge Natural Language Processing and Deep Learning techniques
                    to analyze textual input and identify patterns associated with depression.
                  </p>
                </div>
              </div>
              
              <p className="text-lg">
                By applying advanced AI algorithms to user responses, we can detect subtle linguistic indicators
                that may signal depressive symptoms. The system evaluates text and provides real-time predictions
                regarding the presence and severity of depression.
              </p>
              
              <p className="text-lg font-medium text-orange-700">
                Our model is trained on extensive datasets to recognize various manifestations of depression
                in written communication, making mental health assessment more accessible and continuous.
              </p>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-orange-500 p-3 rounded-full mr-4">
                  <Heart size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-orange-800 mb-3">Key Features</h2>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-100 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-orange-800 mb-2">Secure User Profiles</h3>
                  <p>User login system that enables safe storage of individual assessment history</p>
                </div>
                
                <div className="bg-orange-100 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-orange-800 mb-2">Continuous Monitoring</h3>
                  <p>Regular self-evaluation tests to track cognitive health over time</p>
                </div>
                
                <div className="bg-orange-100 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-orange-800 mb-2">Care Provider Integration</h3>
                  <p>Option to share assessment results with healthcare professionals</p>
                </div>
                
                <div className="bg-orange-100 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-orange-800 mb-2">AI-Powered Analysis</h3>
                  <p>Advanced natural language processing to detect early symptoms</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center mt-6">
                <div className="bg-orange-500 p-3 rounded-full mr-4">
                  <Activity size={24} className="text-white" />
                </div>
                <p className="text-lg font-medium text-orange-700">
                  Empowering users to take control of their mental health journey
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}