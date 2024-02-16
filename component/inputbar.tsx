import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
    icon?:any;
    cusIcon?:any;
    cusDiv?:any;
    cusElement?:any;
    placeholder?:any;
    value?:any;
    typeInput?:any;
    idName?:any;
}

const InputBar:React.FC<Props> = ({icon,idName,cusIcon,cusElement,cusDiv,placeholder,value,typeInput}) => {
    const idname = idName;
  
    return (
      <div className={cusDiv}>
        <FontAwesomeIcon icon={icon}
        className={cusIcon}
        />

        <input 
          type={typeInput}
          id={idname}
          name={idname}
          placeholder={placeholder}
          value={value}
          className={cusElement}
        />
      </div>
  )
}

export default InputBar