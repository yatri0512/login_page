import React, {useState} from "react";
import {
   TextField,
   Button,
   Box,
   Link,
   FormControlLabel,
   Typography,
   Checkbox
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Log from "@mui/icons-material/Login";
const Login = (props) => {
   const navigate = useNavigate();
   const [email,setEmail]=useState(""); 
	const [password,setPassword]=useState("");
   const [validEmail, setValidEmail] = useState(false);
   const [validPassword, setValidPassword] = useState(false);
   const handleEmailValidation = (e) => {
      setEmail(e.target.value);    
      const reg = new RegExp('^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$');
      setValidEmail(reg.test(e.target.value));
  };
  const handlePasswordValidation = (e) => {
      setPassword(e.target.value);    
      const reg1 = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$');
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
            alert("Enter valid password");
         }
      }
      else
      {
         alert("Enter valid email");
      }
  }
   return (
      <>
         <>
            <Box
               display="flex"
               flexDirection={"column"}
              >
                <Typography variant="h2"
                    fontFamily={'cursive'}
                    padding={2}
                    color={'darkblue'}
                    textAlign="center">
                        Login
                </Typography>
               <TextField
                  id="outline"
                  type={'email'}
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
                  value={password} onChange={(e) => handlePasswordValidation(e)}
                  error={!validPassword}
                  required={true}
                  margin={"normal"}
               />
               <Button
                  startIcon={<Log />}
                  variant="contained"
                  size="large"
                  onClick={onSubmit}
                  sx={{
                  marginTop: 1,
                  borderRadius: 5,
                  backgroundColor: 'darkblue'
                  }}>
                  Login
               </Button>
               <Box 
                  display={'flex'}
                  flexDirection={'column'}
                  marginTop={3}
                  margin="auto"
                  >
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Password" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Accept terms and condition" />
                  <Button>
                     <Link>
                        Forgot Password?
                     </Link>
                  </Button>
               </Box>
            </Box>
         </>
      </>
   );
};

export default Login;
