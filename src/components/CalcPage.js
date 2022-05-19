import React from 'react';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import CalculatorButton from './CalculatorButton'
import {useState} from 'react'
import { Typography } from '@mui/material';

let CalcPage = ()=>{
    const [calc, setCalc] = useState({
        sign:"",
        display:"0",
        value:0,
        res:0
    })
    //adds numbers to the display
    const addIntegerToCalc = (name) =>{
        console.log(name)
        setCalc({
            ...calc,
            value: calc.value === 0 && name === '0' 
                ? '0' 
                : calc.value === 0 
                ? name
                // : calc.value % 1 === 0 
                // ? Number(calc.value + name)
                : calc.value + name,
            display: calc.display === 0 && name === '0'
            ? 0
            : calc.display == '0' 
            ? name
            :calc.display + name,
            res: !calc.sign ? 0 : calc.res

        })
    }
    //handles Pi and e respectively
    const addSpecialInt = (name) =>{
        if(calc.value){
            if(name === "e"){
                let initialValue = calc.value
                let calcValue = calc.value + Math.E
                setCalc({
                    ...calc,
                    display: initialValue + "e",
                    value: calcValue,
                })
            }
            else{
                let initialValue = calc.value
                let calcValue = calc.value + Math.PI
                setCalc({
                    ...calc,
                    display: initialValue + "π",
                    value: calcValue
                })
            }

        } 
        else if( name === "e"){
            setCalc({
                ...calc,
                display: "e",
                value: Math.E
            })
        }
        else{
            setCalc({
                ...calc,
                display: "π",
                value: Math.PI
            })
        }
    }
    //needed two functions for dealing with operations with one or two values required
    const handleSignsSingle = (name) =>{
        if(calc.value){
        const math = (a, sign) =>
                sign === "^2" 
                ? a * a 
                : sign === "sqrt"
                ? Math.sqrt(a)
                : sign === "sin"
                ? Math.sin(a)
                : sign === "cos"
                ? Math.cos(a)
                : sign === "tan"
                ? Math.tan(a) 
                : sign === "Log10"
                ? Math.log10(a)
                : Math.log(a)

                
                let answer = math(calc.value, name)
                setCalc({
                    ...calc, 
                    display: answer,
                    value: answer
                })
        }
    }
    const handleSignsMultiple = (name) =>{
        setCalc({
            ...calc,
            sign: calc.value === 0 ? "" : name,
            display: calc.display + name,
            res: !calc.res && calc.value ?  calc.value: calc.res,
            value : !calc.res && calc.value ? 0 : calc.value
        })
    }
    const clear = () =>{
        setCalc({
            sign:"",
            display:"0",
            value:0,
            res:0
        })
    }
    const equals = () =>{
        if( calc.value && calc.sign){
            const math = (a,b,sign) => 
                calc.value === "0" && calc.sign === "/"
                ? "Can't divide with 0"
                :sign === '+' 
                ? a + b 
                : sign === '-' 
                ? a - b 
                : sign === '*'
                ? a * b 
                : sign === '/'
                ? a / b 
                :sign === "^y"
                ? Math.pow(a, b)
                : Math.pow(a, (1/b));
            
                 let answer =  math(Number(calc.res), Number(calc.value),calc.sign)
                 console.log(answer, Number(calc.res), Number(calc.value))
            setCalc({
                ...calc,
                display:answer,
                res : 0,
                value: answer,
                sign: ""
            })
        }
    }
    const props = {addIntegerToCalc, addSpecialInt, handleSignsSingle, handleSignsMultiple, clear , equals}
    const handleChange =(event) =>{
        setCalc(event.target.value)
    }
    return(
        <Box>
            <Grid container spacing = {0}>
                <Grid item lg={2}></Grid>
                <Grid item lg={8}>
                    <Card sx={{mt:4}}>
                        <TextField id="filled-basic" fullWidth label="" sx={{ alignContent: 'end'}} variant="filled" value={calc.display} onChange={handleChange}/>
                        {/* <Box sx={{width:'100%',height:'100%', display:'flex', justifyContent:'end'}}>
                            <Typography>{calc}</Typography>
                        </Box> */}
                        <Box>
                            <Grid container spacing = {0} sx={{width: '100%'}}>
                                <Grid  item lg={1} sx={{width: '100%'}}>
                                    <ButtonGroup
                                            orientation="vertical"
                                            aria-label="vertical contained button group"
                                            variant="contained"
                                            sx={{width: '100%'}}
                                    >
                                        <CalculatorButton name = {"sin"} props = {props} />
                                        <CalculatorButton name = "cos" props = {props}/>
                                        <CalculatorButton name = "tan" props = {props}/>
                                        <CalculatorButton name = "Log10" props = {props}/>
                                        <CalculatorButton name = "Ln" props = {props}/>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item lg={1}>
                                    <ButtonGroup
                                            orientation="vertical"
                                            aria-label="vertical contained button group"
                                            variant="contained"
                                            sx={{width: '100%'}}
                                    >
                                        <CalculatorButton name = "+" props = {props} />
                                        <CalculatorButton name = "*" props = {props} />
                                        <CalculatorButton name = "^2" props = {props}/>
                                        <CalculatorButton name = "^y" props = {props}/>
                                        <CalculatorButton name = "π" props = {props}/>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item lg={1}>
                                    <ButtonGroup
                                            orientation="vertical"
                                            aria-label="vertical contained button group"
                                            variant="contained"
                                            sx={{width: '100%'}}
                                    >
                                        <CalculatorButton name = "-" props = {props} />
                                        <CalculatorButton name = "/" props = {props} />
                                        <CalculatorButton name = "sqrt" props = {props}/>
                                        <CalculatorButton name = "^1/y" props = {props}/>
                                        <CalculatorButton name = "e" props = {props}/>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item lg={3}>
                                    <ButtonGroup
                                            orientation="vertical"
                                            aria-label="vertical contained button group"
                                            variant="contained"
                                            sx={{width: '100%', height: '100%'}}
                                    >
                                        <CalculatorButton name = "7" props = {props}/>
                                        <CalculatorButton name = "4" props = {props}/>
                                        <CalculatorButton name = "1" props = {props}/>
                                        <CalculatorButton name = "c" props = {props}/>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item lg={3}>
                                    <ButtonGroup
                                            orientation="vertical"
                                            aria-label="vertical contained button group"
                                            variant="contained"
                                            sx={{width: '100%', height: '100%'}}
                                    >
                                        <CalculatorButton name = "8" props = {props}/>
                                        <CalculatorButton name = "5" props = {props}/>
                                        <CalculatorButton name = "2" props = {props}/>
                                        <CalculatorButton name = "0" props = {props}/>
                                    </ButtonGroup>
                                </Grid>
                                <Grid item lg={3}>
                                    <ButtonGroup
                                            orientation="vertical"
                                            aria-label="vertical contained button group"
                                            variant="contained"
                                            sx={{width: '100%', height: '100%'}}
                                    >
                                        <CalculatorButton name = "9" props = {props}/>
                                        <CalculatorButton name = "6" props = {props}/>
                                        <CalculatorButton name = "3" props = {props}/>
                                        <CalculatorButton name = "=" props = {props}/>
                                    </ButtonGroup>
                                </Grid>
                            </Grid>
                        </Box>
                    </Card>
                </Grid>
                <Grid item lg={2}></Grid>
            </Grid>

        </Box>
    )
}

export default CalcPage