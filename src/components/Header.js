import React from 'react';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { yellow, red, lightBlue, orange, deepPurple, green, blueGrey, blue} from '@mui/material/colors';

let YellowButton = styled(MenuItem)(({theme}) => ({
    color: theme.palette.getContrastText(yellow[600]),
    backgroundColor: yellow[600],
    '&:hover': {
      backgroundColor: yellow[700]
    }
}))
let BlueButton = styled(MenuItem)(({theme}) => ({
    color: theme.palette.getContrastText(lightBlue[600]),
    backgroundColor: lightBlue[600],
    '&:hover': {
      backgroundColor: lightBlue[800]
    }
}))
let RedButton = styled(MenuItem)(({theme}) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700]
    }
}))
let OrangeButton = styled(MenuItem)(({theme}) => ({
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
    '&:hover': {
        backgroundColor:orange[800]
    }
}))
let GreenButton = styled(MenuItem)(({theme}) =>({
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[400],
    '&:hover': {
        backgroundColor:green[900]
    }
}))
let PurpleButton = styled(MenuItem)(({theme}) =>({
    color: theme.palette.getContrastText(deepPurple[400]),
    backgroundColor: deepPurple[400],
    '&:hover': {
        backgroundColor:deepPurple[900]
    }
})) 
let LightButton = styled(MenuItem)(({theme}) =>({
    color: theme.palette.getContrastText(blueGrey[200]),
    backgroundColor: blueGrey[200],
    '&:hover': {
        backgroundColor:blueGrey[300]
    }
}))
let DarkButton = styled(MenuItem)(({theme}) =>({
    color: theme.palette.getContrastText(blueGrey[800]),
    backgroundColor: blueGrey[800],
    '&:hover': {
        backgroundColor:blueGrey[700]
    }
}))
let MuiButton = styled(MenuItem)(({theme}) =>({
    color: theme.palette.getContrastText(blue[700]),
    backgroundColor: blue[700],
    '&:hover': {
        backgroundColor:blue[800]
    }
}))

let Header = ({themeChange}) =>{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <Box>
            
            <AppBar>
            <Toolbar sx= {{ display: "flex", justifyContent: "space-between"}}>
                <Box>Calculator</Box>
                <Box sx={{display:"flex", justifyContent:"end"}}>
                    <div>
                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            varient="text"
                            sx = {{color: "white"}}
                        >
                            Colors
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <RedButton onClick={()=>{themeChange(1)}} >Red</RedButton>
                            <YellowButton onClick={()=>{themeChange(2)}}>Yellow</YellowButton>
                            <BlueButton onClick={()=>{themeChange(3)}}>Blue</BlueButton>
                            <OrangeButton onClick ={() =>{themeChange(4)}}>Orange</OrangeButton>
                            <GreenButton onClick={() =>{themeChange(5)}}>Green</GreenButton>
                            <PurpleButton onClick = {()=>{themeChange(6)}}>Purple</PurpleButton>
                            <LightButton onClick={() =>{themeChange(7)}}>Light</LightButton>
                            <DarkButton onClick={() =>{themeChange(8)}}>Dark</DarkButton>
                            <MuiButton onClick={() =>{themeChange(0)}}>Mui</MuiButton>
                        </Menu>
                    </div>
                </Box>
            </Toolbar>
            </AppBar>
            <Toolbar></Toolbar>
        </Box>
    )
}
export default Header