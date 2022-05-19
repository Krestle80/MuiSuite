import React from "react";
import Button from '@mui/material/Button'


let CalculatorButton = ({name, props }) => {
    return(
        <Button key = {name} sx={{width: '100%', borderRadius:'0px', height:'100%'}} onClick={()=>{
            if(name === '+' || name === '-' || name === '*' || name === '/' || name === "^y" || name ==="^-y"){
                props.handleSignsMultiple(name)
                
            }
            else if (name === '^2' ||name === 'sqrt' || name === 'sin(x)' || name === 'cos' || name === 'tan' || name === "Log10" || name === "Ln"){
                props.handleSignsSingle(name)
            }
            else if (name === "e" || name === "π") props.addSpecialInt(name)
            else if (name === 'c'){
                props.clear()
            }
            else if (name === '=') props.equals()
            else    props.addIntegerToCalc(name); 
        }}>{name}</Button>
    )
}
export default CalculatorButton