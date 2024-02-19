import Footer from "./footer";
import Header from "./header";
import { Menus } from "@/config/menu";

interface Props {
    children:JSX.Element;
}
const Layout:React.FC<Props> = ({children}) =>{
    return(
        <div className="flex flex-col justify-between h-screen">
            <div className="">
                <Header menu={Menus}/>
            </div>

            <div className="grow">
                {children}
            </div>
            
            <div className="">
                <Footer/>
            </div>
        </div>
    )
}

export default Layout;