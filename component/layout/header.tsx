import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'

interface Props {
    menu:any
}

const Header:React.FC<Props> = ({menu}) =>{
    return(
        <div className="w-content py-4 mx-auto inter">
            <div className="flex flex-wrap">
                <div className="w-1/12 logoHeader">
                    Logo
                </div>

                <div className="w-10/12 flex justify-end">
                    <div className="flex flex-wrap w-3/5">
                        {menu?.map((o:any,i:any)=>(
                            <div key={i} className="w-1/4 p-2 textNavHover text-center">
                                <a href={o.link}>
                                    {o.label}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-1/12 relative flex shadow-md rounded-lg">
                    <div className='cartHover bg-white relative w-2/4 rounded-l-lg flex justify-center items-center'>
                        <a href="/cart" className=''>
                            <FontAwesomeIcon icon={faCartShopping} 
                            className="text-xl"/>
                        </a>
                    </div>

                    <div className='loginHover bg-green-900 text-white w-14 h-full rounded-r-lg rounded-tl-2xl flex justify-center items-center absolute right-0'>
                        <a href="/login" className=''>
                            <FontAwesomeIcon icon={faUser} 
                            className="text-xl"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;