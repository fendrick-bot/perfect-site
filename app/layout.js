'use client'
import { Inter } from "next/font/google";
import Image from "next/image";
import mainLogo from "../public/picture.png"
import menuIcon from "../public/app.png"
import "./globals.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Perfect Site",
//   description: "This is my perfect website",
// };

export default function RootLayout({ children }) {
  const [isVisible , setVisible] = useState('disabledmenu')
  // console.log(isVisible);

  return (
    <html lang="en">
      <body className={inter.className}>

        <nav>

          <div className="navDiv">
            <Image src={mainLogo} width={40} />
            <h1>Perfect Site</h1>
          </div>


          <div className="navDiv">
            <ul>
              <li>Products</li>
              <li>Blogs</li>
              <li id="navPricing">Pricing</li>
              <li id="navTools">Tools</li>
              <li id="navContact">Contact</li>
            </ul>
            <button>Login</button>
            <menu onClick={()=>{setVisible(isVisible == "activemenu"? 'disabledmenu': 'activemenu') }}> <Image src={menuIcon} width={25} />
            <div id="menuContent" className= {isVisible} >
              <li>Home</li>
              <li id="menuProducts">Products</li>
              <li id="menuBlogs">Blogs</li>
              <li id="menuPricing">Pricing</li>
              <li id="menuTools">Tools</li>
              <li id="menuContact">Contact</li>
            </div>
            </menu>

          </div>

        </nav>
        {children}</body>
    </html>
  );
}
