import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
    icon?:any;
    cusDiv?:any;
    cusElement?:any;
    placeholder?:any;
    typeInput?:any;
    idName?:any;
}

const Searchbar:React.FC<Props> = ({icon,idName,cusElement,cusDiv,placeholder,typeInput}) => {
    const idname = idName;
  
    return (
      <div className={cusDiv}>
        <FontAwesomeIcon icon={icon}
        style={{position:'absolute',left:'0px',zIndex:'1', color:'gray', fontSize:'2rem',paddingLeft:'3rem'}}
        />

        <input 
          type='text'
          id={idname}
          name={idname}
          placeholder={placeholder}
          className={cusElement}
        />
      </div>
    
  )
}

export default Searchbar