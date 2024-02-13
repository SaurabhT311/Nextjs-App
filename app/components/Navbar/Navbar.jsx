import Link from "next/link";
import "./Navbar.scss";
import { NAV_LINKS } from "@/constants/constant";
import Image from "next/image";
const Navbar = () => {
  return (
    // Lets use semantic HTML5
    // <div>Navbar</div>
    <nav className="nav-container">
      <div className="logo-container">  
            <span className="logo">AFC Inc.</span>
        </div>
        
      <ul className="nav-bar hidden h-full gap-12 lg:flex items-center">
        {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} 
            className = "nav-item text-base font-normal flex items-center justify-center text-grey-50 cursor-pointer transition-all hover:font-bold" 
            >
                {link.label}
            </Link>
        ))}
      </ul>
      <div className="lg:flex items-center justify-center hidden">
        <button className="nav-button text-base font-bold text-center" type="button">Get Started</button>
      </div>
      <Image className="menu-bar inline-block cursor-pointer lg:hidden" 
        src="menu.svg" 
        alt="menu" 
        width={24} 
        height={24}/>
    </nav>
  );
};

export default Navbar;

