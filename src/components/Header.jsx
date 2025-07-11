// src/components/Header.jsx
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Website Development",
    dropdown: [
      "Website Design Services",
      "UI/UX Design",
      "Shopify Website Design",
      "E-Commerce Website",
    ],
  },
  {
    label: "Digital Marketing",
    dropdown: [
      "Content Marketing",
      "Email Marketing",
      "Search Engine Marketing",
      "SEO",
      "Social Media Marketing",
      "Amazon Advertising",
      "Full-Service Amazon Assistance",
    ],
  },
  {
    label: "Corporate Branding",
    dropdown: [
      "Brand Strategy",
      "Logo Design",
      "Social Media Design",
      "Visiting Card Design",
      "Corporate Gifts Design",
      "Packaging Design",
      "Flyers and Stationary Design",
    ],
  },
  {
    label: "Video Animation",
    dropdown: [
      "2D and 3D Illustrations",
      "2D Animation",
      "3D Animation",
      "3D Architecture Animation",
      "Explainer Video",
      "Logo Animation",
      "Motion Graphics",
      "Whiteboard Animation",
    ],
  },
  {
    label: "Mobile Application",
    dropdown: [
      "Game App Development",
      "iOS App Development",
      "MVPs",
      "Product Strategy",
      "Agile Development",
      "Android App",
      "App Marketing",
      "Cross Platform",
    ],
  },
];

const Header = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
     <>
    {/* TOP CONTACT BAR */}
    <div className="flex justify-end items-center space-x-6 px-6 pt-3 text-sm text-white">
      <div className="flex items-center space-x-2">
        <img src="/images/uk.png" alt="UK" className="w-5 h-5" />
        <span>+44 20 82644477</span>
      </div>
      <div className="flex items-center space-x-2">
        <img src="/images/us.png" alt="US" className="w-5 h-5" />
        <span>+1 775 376 9324</span>
      </div>
    </div>
   <header className="relative z-30 bg-white shadow-md rounded-full mx-5 my-3">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <img src="/images/Link.png" alt="Logo" className="h-10" />

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
          {navItems.map((item, index) => (
            <div key={index} className="relative group">
              <button
                className="flex items-center hover:text-blue-600"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                {item.label}
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>

              {item.dropdown.length > 0 && openIndex === index && (
                <div
                  className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg"
                  onMouseEnter={() => setOpenIndex(index)}
                  onMouseLeave={() => setOpenIndex(null)}
                >
                  {item.dropdown.map((subItem, i) => (
                    <a
                      key={i}
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA & Icon */}
        <div className="flex items-center space-x-4 text-sm">
          <button className="px-5 py-2 bg-purple-800 text-white rounded-full hover:bg-purple-900 transition">
            Start Project
          </button>
          <img src="/images/image3.png" alt="Call Icon" className="h-10 w-10" />
        </div>
      </div>

      {/* Enquire Now */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-3 py-2 rounded-r-lg rotate-[-90deg] origin-left text-sm font-semibold">
        Enquire Now
      </div>
    </header>
    </>
  );
};

export default Header;


// import { useState } from "react";
// import { ChevronDown, PhoneCall } from "lucide-react";

// const navItems = [
//   {
//     label: "Website Development",
//     dropdown: ["Website Design Services", "UI/UX Design", "Shopify Website Design", "E-Commerce Website"],
//   },
//   {
//     label: "Digital Marketing",
//     dropdown: [
//   "Content Marketing",
//   "Email Marketing",
//   "Search Engine Marketing – Pay Per Click Advertising",
//   "Search Engine Optimization",
//   "Social Media Marketing",
//   "Amazon Advertising",
//   "Full-Service Amazon Assistance"
// ]


//   },
//   {
//     label: "Corporate Branding",
//     dropdown: ["Brand Strategy",
// "Logo Design",
// "Social Media Design", 
// "Visiting Card Design", 
// "Corporate Gifts Design",
// "Packaging Design",
// "Flyers and Stationary Design"],
//   },
//   {
//     label: "Video Animation",
//     dropdown: [
//   "2D and 3D Illustrations",
//   "2D Animation",
//   "3D Animation",
//   "3D Architecture Animation",
//   "Animation Service",
//   "Explainer Video",
//   "Logo Animation",
//   "Motion Graphics",
//   "Whiteboard Animation"
// ]

//     ,
//   },
//    {
//     label: "Mobile Application",
//     dropdown:[
//   "Game App Development",
//   "iOS App Development",
//   "Minimal Viable Products",
//   "Product Strategy",
//   "Agile Development",
//   "Android App Development",
//   "App Marketing Development",
//   "Cross Platform App"
// ]
// ,
//   },
// ];

// export default function Navbar() {
//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <header className="relative z-50 bg-[#e8eaf0] text-black m-5  rounded-full  ">
//       {/* Top Bar */}
//       <div className="container mx-auto flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <img src="/images/Link.png" alt="Logo" className="h-10" />

//         {/* Navigation */}
//         <nav className="hidden md:flex space-x-5">
//           {navItems.map((item, index) => (
//             <div key={index} className="relative group">
//               <button
//                 className="flex items-center text-base font-medium hover:text-yellow-400 transition-colors"
//                 onMouseEnter={() => setOpenIndex(index)}
//                 onMouseLeave={() => setOpenIndex(null)}
//               >
//                 {item.label}
//                 {item.dropdown.length > 0 && <ChevronDown className="ml-1 w-4 h-4" />}
//               </button>

//               {item.dropdown.length > 0 && openIndex === index && (
//                 <div
//                   className="absolute left-0 mt-2 w-56 bg-[#f5f5f5] border border-gray-700 rounded shadow-lg"
//                   onMouseEnter={() => setOpenIndex(index)}
//                   onMouseLeave={() => setOpenIndex(null)}
//                 >
//                   {item.dropdown.map((subItem, i) => (
//                     <a
//                       key={i}
//                       href="#"
//                       className="block px-4 py-2 text-sm hover:bg-gray-800 hover:text-black-400"
//                     >
//                       {subItem}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>

//         {/* Contact and CTA */}
//         <div className="flex items-center space-x-6">
//           <button className="flex items-center px-6 py-3 bg-[#2c1561] text-[#ffffff]  rounded-full transition-colors">
//             Start Project 
//           </button>
//         </div>
//       </div>
// <img src="/images/image3.png" alt="Logo" className="h-10" />
   
//     </header>
//   );
// }


// header should look like same as image color and everthing
// import { useState } from "react";
// import { ChevronDown, PhoneCall } from "lucide-react";

// const navItems = [
//   {
//     label: "Website Development",
//     dropdown: ["Website Design Services", "UI/UX Design", "Shopify Website Design", "E-Commerce Website"],
//   },
//   {
//     label: "Digital Marketing",
//     dropdown: [],
//   },
//   {
//     label: "Corporate Branding",
//     dropdown: [],
//   },
//   {
//     label: "Video Animation",
//     dropdown: [],
//   },
// ];

// export default function Navbar() {
//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <header className="relative z-50 shadow bg-white">
//       {/* Top Bar */}
//       <div className="flex justify-between items-center px-6 py-4">
//        <img src="/images/Link.png" alt="Logo" className="h-10" />


//         <nav className="hidden md:flex space-x-6">
//           {navItems.map((item, index) => (
//             <div key={index} className="relative group">
//               <button
//                 className="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
//                 onMouseEnter={() => setOpenIndex(index)}
//                 onMouseLeave={() => setOpenIndex(null)}
//               >
//                 {item.label}
//                 {item.dropdown.length > 0 && <ChevronDown className="ml-1 w-4 h-4" />}
//               </button>

//               {item.dropdown.length > 0 && openIndex === index && (
//                 <div
//                   className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg"
//                   onMouseEnter={() => setOpenIndex(index)}
//                   onMouseLeave={() => setOpenIndex(null)}
//                 >
//                   {item.dropdown.map((subItem, i) => (
//                     <a
//                       key={i}
//                       href="#"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       {subItem}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </nav>

//         <div className="flex items-center space-x-6 text-sm">
//           <span className="flex items-center space-x-1">
//             <span className="text-xl">🇬🇧</span>
//             <span>+44 20 82644477</span>
//           </span>
//           <span className="flex items-center space-x-1">
//             <span className="text-xl">🇺🇸</span>
//             <span>+1 775 376 9324</span>
//           </span>
//           <button className="flex items-center px-4 py-2 bg-purple-700 text-white rounded-full hover:bg-purple-800">
//             Start Project <PhoneCall className="ml-2 w-4 h-4" />
//           </button>
//         </div>
//       </div>

//       {/* Enquire Now */}
//       <div className="fixed left-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white px-3 py-2 rounded-r-lg rotate-[-90deg] origin-left">
//         Enquire Now
//       </div>
//     </header>
//   );
// }