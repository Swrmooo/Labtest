import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight,faCaretDown,faMagnifyingGlass,faMobileScreen,faEnvelope,faEarthAmericas,} from '@fortawesome/free-solid-svg-icons';
import { faWeixin, faLine, faSquareWhatsapp, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';

import InputBar from "../inputbar";

const Footer = () => {
    return(
        <footer className=" bg-gray-100 py-4 px-14">
        {/* <img 
          src="/image/testTube.png" 
          alt="testtube"
          className="testTubePic" 
        /> */}

        <div className="">
          <div className="flex justify-between w-full">
            <div className="w-2/6 ">
              <div className="flex 2xl:text-5xl ">
                <p className="castellar">
                  Pulse
                </p>
                <p className="2xl:pl-4">
                  Clinic
                </p>
              </div>
              
              <div className="2xl:text-lg">
                <p>Pulse Clinic, 60/22-23 Silom Rd., Bangkok 10500</p>
                <p>TEL. 02-089-1289</p>
              </div>
            </div>

            <div className="w-2/6">
              <p className="pb-4 text-lg font-semibold">
                NEWSLETTER
              </p>  
              <div className="flex">
                <InputBar
                  typeInput={'text'}
                  placeholder={'your email address'}
                  cusElement={'w-full text-slate-300 h-10 pl-4 text-lg rounded-lg'}
                  cusDiv={'w-3/4 mr-2'}
                />

                <InputBar
                  typeInput={'submit'}
                  value={'SUBSCRIBE'}
                  cusElement={'bg-green-800 text-white text-sm font-medium w-full h-10 rounded-lg'}
                  cusDiv={'w-1/4'}
                />
              </div>
            </div>

            <div className="w-2/6 pb-2 px-10 leading-8">
              <p className="text-lg font-semibold pb-2">
                FOLLOW US
              </p>
              <p>
                <FontAwesomeIcon icon={faMobileScreen} className="text-lg pr-4"/>
                +66-65-237-1936
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="text-lg pr-4"/>
                pulsetech@example.com
              </p>
              <p>
                <FontAwesomeIcon icon={faEarthAmericas} className="text-lg pr-4"/>
                www.example.com
              </p>

              <div className="pt-4">
                <FontAwesomeIcon icon={faWeixin} className="text-2xl"/>
                <FontAwesomeIcon icon={faLine} className="text-2xl pl-5"/>
                <FontAwesomeIcon icon={faSquareWhatsapp} className="text-2xl pl-5"/>
                <FontAwesomeIcon icon={faFacebookF} className="text-2xl pl-5"/>
                <FontAwesomeIcon icon={faYoutube} className=" text-2xl pl-5"/>
              </div>
            </div>  
          </div>

          <div className="flex justify-center">
            COPYRIGHT @ 2015 - 2024 PULSE CLINIC ALL RIGHTS RESERVED PRIVACY
          </div>

        </div>
      </footer>
    )
}

export default Footer;