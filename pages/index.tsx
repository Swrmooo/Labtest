import Image from "next/image";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight,faCaretDown,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Searchbar from "@/component/searchbar";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="relative inter" >
        <div className="bgShadow ">
          <img 
            src="/image/dna.png" 
            alt="dna"
            className="dnaPic" 
          />
        </div>

        <div className="border-2 border-blue-400 w-full flex justify-between items-center px-80 py-4">
          
          <div className="logoHeader ">
            LOGO
          </div>
            
          <div className="navMenu">
            <div className="flex justify-evenly w-full">
              <a href="">About</a>
              <a href="">Type Of Test</a>
              <a href="">Blog</a>
              <a href="">Shop</a>
            </div>

            <div className="clButton">
              <a href="">Cart</a>
              <a href="">Login</a>
            </div>

          </div>
        </div>

        <div className="contentSearch">
          
          <p className="text-3xl tracking-widest">
            WE ARE HERE FOR HELP WHAT ARE YOU LOOKING FOR?
          </p>

          <div className="ltFont">
            <p className="castellar">
              LAB
            </p>
            <p className="ml-20">
              TEST
            </p>
            <div>
              <FontAwesomeIcon icon={faCaretRight} style={{fontSize:'10rem',marginLeft:'2rem'}}/>
            </div>
          </div>
          
          <Searchbar
            icon={faMagnifyingGlass}
            typeInput='text'
            placeholder="Search for tests or location..."
            cusElement={'headerSearchBar'}
            cusDiv={'w-5/12 flex justify-center items-center relative'}
          />
        </div>
        <div className="relative z-1 text-xl  font-semibold flex flex-col justify-center items-center">
          Scroll For More
          <FontAwesomeIcon icon={faCaretDown} style={{fontSize:'2rem',marginTop:'-10px'}}/>
        </div>

    </main>
  );
}
