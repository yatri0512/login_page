import React, { useState } from "react";
import {
   TextField,
   Button,
   Box,
   Typography,
   FormControlLabel,
   Checkbox
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppRegistration from "@mui/icons-material/AppRegistration";
const Registration = (props) => {
   const navigate = useNavigate();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [validEmail, setValidEmail] = useState(false);
   const [validPassword, setValidPassword] = useState(false);
   
   const handleEmailValidation = (e) => {
      setEmail(e.target.value);
      const reg = new RegExp(
         "^[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:.[a-zA-Z0-9]+)*$"
      );
      setValidEmail(reg.test(e.target.value));
      
   };
   const handlePasswordValidation = (e) => {
      setPassword(e.target.value);
      const reg1 = new RegExp(
         "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
      );
      setValidPassword(reg1.test(e.target.value));
   };
   const onSubmit = () =>{
      if(validEmail === true){
         if(validPassword === true)
         {
            navigate("/main");
         }
         else
         {
            alert("Enter valid Password \n 1 Capital latter \n 1 special character \n 8 letter");
         }
      }
      else
      {
         alert("Enter valid email");
      }
  }
   return (
      <>
         <Box
            display="flex"
            flexDirection={"column"}
            alignItems="center">
            <Typography
               variant="h2"
               fontFamily={"cursive"}
               padding={2}
               color={"darkblue"}
               textAlign="center">
               Register
            </Typography>
            <TextField
               id="outline"
               type={"email"}
               label="email"
               variant="outlined"
               margin="normal"
               value={email}
               onChange={(e) => handleEmailValidation(e)}
               error={!validEmail}
               required={true}
            />
            <TextField
               id="outline"
               type={"Password"}
               label="Password"
               variant="outlined"
               name="password"
               value={password}
               onChange={(e) => handlePasswordValidation(e)}
               error={!validPassword}
               required={true}
               margin={"normal"}
            />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Password" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Accept terms and condition" />
            <Button
               startIcon={<AppRegistration />}
               variant="contained"
               size="large"
               onClick={onSubmit}
               sx={{
                  marginTop: 1,
                  borderRadius: 5,
                  backgroundColor: "darkblue",
               }}>
               Register
            </Button>
         </Box>
      </>
   );
};

export default Registration;
