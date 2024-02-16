import Image from "next/image";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight,faCaretDown,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import InputBar from "@/component/inputbar";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="relative inter" >
      {/* header */}
      {/* header */}
      <div className="">
        <div className="bgShadow ">
        <img 
          src="/image/dna.png" 
          alt="dna"
          className="dnaPic" 
        />
      </div>

      <div className="w-full flex justify-between items-center 2xl:py-8 2xl:px-80 lg:py-4 lg:px-28 md:px-14 mobileRes">
        <div className="logoHeader ">
          LOGO
        </div>
            
        <div className="navMenu md:w-8/12 xl:w-6/12 2xl:w-4/12">
          <div className="flex justify-around w-full md:text-base lg:text-lg 2xl:text-3xl">
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
        <p className="tracking-widest md:text-xs lg:text-sm 2xl:text-3xl mobile-text1">
          WE ARE HERE FOR HELP WHAT ARE YOU LOOKING FOR?
        </p>

        <div className="flex flex-col justify-center items-center">
          <div className='flex justify-center items-center '>
            <p className="castellar ltSize ">
              LAB
            </p>
            <p className="2xl:ml-20 lg:ml-10 md:ml-8 ltSize">
              TEST
            </p>  
              <FontAwesomeIcon icon={faCaretRight} className="ml-5 text-base 2xl:text-9xl md:text-7xl md:ml-3 mobile-caretRight"/>
          </div>
            
          <InputBar
            icon={faMagnifyingGlass}
            cusIcon={'magnifyIcon'}
            typeInput='search'
            placeholder="Search for tests or location..."
            cusElement={'headerSearchBar'}
            cusDiv={'w-full flex justify-center items-center relative'}
          />
        </div>
      </div>

      <div className="relative z-1 md:text-xs lg:text-sm 2xl:text-xl font-semibold flex flex-col justify-center items-center">
        Scroll For More
        <FontAwesomeIcon icon={faCaretDown} style={{fontSize:'2rem',marginTop:'-10px'}}/>
      </div>
      </div>

      {/* content */}
      {/* content */}
      <div className="relative bg-slate-500">
        content
      </div>

      {/* footer */}
      {/* footer */}
      <div className="relative xl:p-14 flex flex-col justify-center items-center bg-slate-300">
        <div className="bg-pink-300 flex justify-between 2 w-full">
          <div className="2xl:w-2/6">
            <div className="flex 2xl:text-5xl 2xl:pb-2">
              <p className="castellar">
                Pulse
              </p>
              <p className="2xl:pl-4">
                Clinic
              </p>
            </div>
            
            <p className="2xl:w-2/3 2xl:text-2xl ">
              Pulse Social Enterprise is Asia's leading lifestyle clinic, offering one-stop services for travel medicine, sexual health, preventive & integrated medicine, and more.
            </p>
          </div>

          <div className="bg-pink-100  2xl:w-2/6">
            <p className="2xl:pb-2 text-2xl font-semibold">
              NEWSLETTER
            </p>
            <div className="flex">
              <InputBar
                typeInput={'text'}
                placeholder={'your email address'}
                cusElement={'w-full text-slate-300 h-16 border text-2xl rounded-xl'}
                cusDiv={'w-3/4 mr-2'}
              />

              <InputBar
                typeInput={'submit'}
                value={'SUBSCRIBE'}
                cusElement={'bg-green-800 text-white font-medium w-full h-16 text-2xl rounded-xl'}
                cusDiv={'w-1/4'}
              />
            </div>
          </div>

          <div className="2xl:w-2/6">third</div>

        </div>
        <div className="bg-slate-200">
        COPYRIGHT @ 2015 - 2024 PULSE CLINIC ALL RIGHTS RESERVED PRIVACY
        </div>
      </div>

    </main>
  );
}
