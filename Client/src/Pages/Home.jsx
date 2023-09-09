import "./pagestyle.css";
import logo from "./logo.png";
import "./Animate.css";

export default function Home() {
  return (
    <div className="bg-transparent h-screen flex flex-col justify-center items-center">
       <div class="flex-grow">
      <img src={logo} alt="#" className="max-w-full shadow-md" /></div>
      <footer className="text-center mt-4">
        <p>&copy; BAD BANK 2023 | All Rights Reserved.</p>
        <p>Contact Us - 0421 2323 4322</p>
      </footer>
    </div>
  );
}