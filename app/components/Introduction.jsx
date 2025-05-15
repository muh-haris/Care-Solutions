export default function Introduction() {
    return (
      <div className=" bg-orange-600 text-white">
        <section id="intro" className="px-6 py-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">About</h2>
          <p className="text-lg">
            The application uses Natural Language Processing and AI algorithms to identify depressive patterns in text input. It helps in early mental health intervention.
          </p>
          <p className="text-lg mt-2 text-justify">
          Depression is a common mental health disorder. It involves a depressed mood or loss of interest in activities for long periods. Approximately 360 million people in the world have depression. It is necessary to diagnose depression at the early stages. Traditionally, depression is diagnosed by a doctor face-to-face. More than 70% of the patients would not consult doctors at the early stages of depression. To overcome such challenges, this project proposes developing an application that will analyse users' written responses to predefined mental health questions to identify depression and provide real-time predictions regarding the presence of depressed symptoms.
          </p>
          <p className="text-lg mt-2 text-justify">
          Applying deep learning techniques and natural language processing (NLP), the model aims to assess textual input that detects depression and predicts its severity.  With the help of modern techniques, the system can read the text and identify depression. The primary objective of this project is to build a system for the continuous assessment of users ‘mental health status. The application will have a user login option to allow the safe storage of individual assessments that the user can carry out. This will enable the patients to perform such self-evaluation tests at regular intervals to assess their cognitive health. With this feature, users can send information to their care providers to improve the treatment and management of mental health issues. Overall, this project intends to make it easy to recognize the early symptoms of depression by using natural language processing techniques. The aim is to give device users the power to take control and incorporate measures that will improve their mental health.
          </p>
        </section>
      </div>
    );
  }
  