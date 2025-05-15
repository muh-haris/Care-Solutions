import Image from "next/image";
import logo from "/public/images/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-8">
      <div className="flex justify-center mb-4">
        <Image src={logo} alt="Logo" width={100} height={100} />
      </div>
      <p>&copy; {new Date().getFullYear()} Care Solutions | All rights reserved.</p>
    </footer>
  );
}
