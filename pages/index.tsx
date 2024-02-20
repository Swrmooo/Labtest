import Image from "next/image";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight,faCaretDown,faMagnifyingGlass,faMobileScreen,faEnvelope,faEarthAmericas,} from '@fortawesome/free-solid-svg-icons';

import InputBar from "@/component/inputbar";
import Layout from "@/component/layout";

export default function Home() {
  return (
    <Layout>
      <div className="">
        <div className="w-full dnaBG absolute top-0 -left-60 -z-10">
          <div>
            <img 
              src="/image/dna.png" 
              alt="dna"
              className="w-full object-cover" 
              style={{height:"40rem"}}
            />
          </div>
        </div>

        <div className="w-content mx-auto border border-rose-600">
          <div className="contentSearch">
            <p className="tracking-widest hText1">
              WE ARE HERE FOR HELP WHAT ARE YOU LOOKING FOR?
            </p>

            <div className="flex flex-col justify-center items-center border border-rose-600">
              <div className='tlAnimate flex relative justify-center items-center '>
                <p className="castellar ltSize ">
                  LAB
                </p>

                <div className="mark 2xl:ml-20 lg:ml-10 md:ml-8 ltSize">
                  <p className="testAnimate ">TEST</p>
                  <p className="locationAnimate">LOCATION</p>
                </div> 

                  <FontAwesomeIcon icon={faCaretRight} className=" absolute right-0 bottom-0 rotate-45 2xl:text-3xl md:text-7xl md:ml-3"/>
              </div>
            </div>

            <InputBar
                icon={faMagnifyingGlass}
                cusIcon={'magnifyIcon'}
                typeInput='search'
                placeholder="Search for tests or location..."
                cusElement={'headerSearchBar'}
              cusDiv={'w-5/12 flex justify-center items-center relative'}
              />
          </div>   
        </div>

      </div>
    </Layout>
  );
}
