import Image from "next/image";
import logo from "/public/images/qrcode.jpg";

export default function DownloadSection() {
  return (
    <section id="download" className="py-16 text-center bg-white">
      <h2 className="text-3xl font-bold mb-4">Download the App now</h2>
      <p className="mb-6">Get started with AI-powered depression detection today.</p>
      <a href="/download/app.apk" download className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-900 transition">
        Download App
      </a>
      <a href="/download/app.apk" download>
        <Image 
          src={logo} 
          alt="Download App" 
          width={200}
          height={200} 
          className="mx-auto hover:scale-105 transition-transform duration-300 mt-5"
        />
      </a>
    </section>
  );
}
