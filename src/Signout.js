import React, { useState } from "react";
import {Outlet} from 'react-router-dom';
import { Tab, Tabs, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Signout = () => {
   const [value, setValue] = useState(0);

   const handleChange = (event, newValue) => {
        setValue(newValue);
   };
   var navigate =useNavigate();
   return (
         <Container
            verticalAlign="middle"
            display="flex"
            justifyContent="center"
            sx={{
               display: {
                  margin: "auto",
                  textAlign: "center",
                  width: "100%",
               },
            }}>
            <Box
               display="flex"
               flexDirection={"column"}
               maxWidth={500}
               alignItems="center"
               justifyContent={"center"}
               margin="auto"
               marginTop={'2rem'}
               marginBottom={5}
               padding={2}
               borderRadius={10}
               backgroundColor={"white"}
               boxShadow={"white 0px 2px 6px"}
               sx={{
                  ":hover": {
                     boxShadow: "white 0px 5px 15px",
                  },
                  "@media (max-width: '900px')": {maxWidth:'800'}
               }}>
                <Tabs
                  value={value}
                  onChange={handleChange}>
                    <Tab label='Login' onClick={()=>navigate("/")} />
                    <Tab label='Register' onClick={()=>navigate("/register")} />
                  </Tabs>   
                  <Outlet />
            </Box>
         </Container>
   );
};

export default Signout;
