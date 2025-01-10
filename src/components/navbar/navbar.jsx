// import React, {useState}from "react";
// import { Search } from "lucide-react";
// import logo from "../../assets/logo.svg";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


// export default function Navbar() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
//   const handleClick=()=>{
//     navigate('/search')
//   }
//   return (
//     <nav className="fixed top-0 left-0 z-50 w-full h-16 bg-primary flex items-center justify-between px-4">
//       {/* Left side - Logo and Brand */}
//       <div className="flex items-center gap-8 py-8 text-white">
//         <img
//           src={logo}
//           alt="logo"
//           className="h-8 hover:cursor-pointer transition-transform duration-200 hover:scale-105"
//         />
//         <Link className="text-2xl font-semibold hidden md:block hover:cursor-pointer hover:text-secondary transition-colors duration-200" to="/">
//           Coherence
//         </Link>
//       </div>

//       {/* Right side - Navigation Links */}
//       <div className="flex items-center gap-6 py-8 text-white">
//         {/* Search Icon */}
//         {/* <button
//           className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
//           aria-label="Search" onClick={handleClick}
//         >
//           <Search size={20} />
//         </button> */}
//          <div className="relative w-full">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="Search"
//               className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
//             />
//             <Search
//               className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//               size={18}
//             />
//           </div>

//         {/* Navigation Links */}
//         <Link
//           to="/blog"
//           className="text-lg font-bold hover:text-secondary transition-colors duration-200"
//         >
//           Blog
//         </Link>
//         <Link
//           to="/career"
//           className="text-lg font-bold hover:text-secondary transition-colors duration-200"
//         >
//           Careers
//         </Link>
//         <Link
//           to="/contact"
//           className="text-lg font-bold hover:text-secondary transition-colors duration-200"
//         >
//           Contact
//         </Link>
//         <Link
//           to="/about"
//           className="text-lg font-bold hover:text-secondary transition-colors duration-200"
//         >
//           About
//         </Link>
//       </div>
//     </nav>
//   );
// }
import React, { useState } from "react";
import { Search } from "lucide-react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 z-50 w-full h-16 bg-primary flex items-center justify-between px-4">
      {/* Left side - Logo and Brand */}
      <div className="flex items-center gap-8 py-8 text-white">
        <img
          src={logo}
          alt="logo"
          className="h-8 hover:cursor-pointer transition-transform duration-200 hover:scale-105"
        />
        <Link
          className="text-2xl font-semibold hidden md:block hover:cursor-pointer hover:text-secondary transition-colors duration-200"
          to="/"
        >
          Coherence
        </Link>
      </div>

      <div className="relative w-1/3 hidden md:block">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
        />
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={18}
        />
      </div>

      {/* Right side - Navigation Links */}
      <div className="flex items-center gap-6 py-8 text-white">
        <Link
          to="/blog"
          className="text-lg font-bold hover:text-secondary transition-colors duration-200"
        >
          Blog
        </Link>
        <Link
          to="/career"
          className="text-lg font-bold hover:text-secondary transition-colors duration-200"
        >
          Careers
        </Link>
        <Link
          to="/contact"
          className="text-lg font-bold hover:text-secondary transition-colors duration-200"
        >
          Contact
        </Link>
        <Link
          to="/about"
          className="text-lg font-bold hover:text-secondary transition-colors duration-200"
        >
          About
        </Link>
      </div>
    </nav>
  );
}


  
      
        


