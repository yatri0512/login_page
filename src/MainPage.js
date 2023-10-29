import React from "react";
import Typewriter from "typewriter-effect";
import {Typography,Link} from '@mui/material'
const MainPage = () => {
   return (
      <>
        <Typography color="orange" fontSize={50} marginTop={30} textAlign={"center"}>
         <Typewriter
            options={{
               strings: [
                  "Hello",
                  "I am Yatri Doshi.",
                  "I am from Ahmedabad.",
                  "I am React Developer.",
                  "I love to create beautiful and functional websites.",
                  "Thank You for Visiting...",
               ],
               autoStart: true,
               loop: true,
            }}
         />
         </Typography>
         <Typography fontSize={20} textAlign={"center"}>
            <Link href="https://github.com/yatri0512" style={{color: "lightblue", textDecoration:"none"}}>
              Github: https://github.com/yatri0512</Link>
         </Typography>
      </>
   );
};

export default MainPage;
