import { Alert, Button, Grid, TextField, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContex from '../context/AuthContext';

const Login = () => {
  const[userLogin, setUserLogin] = useState({
    email: '',
    password:'',
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isEnabled =
  userLogin?.email.length === 0 ||
  userLogin?.password.length === 0 ;

  const navigate = useNavigate();
  const { getLoggedIn } = useContext(AuthContex);
  const {email, password, } = userLogin
  const login = async (e) => {
    
    e.preventDefault();
    try{
      const userLoginData ={
        email,
        password,
      };

      await axios.post("http://localhost:5001/auth/login", userLoginData,);
      await getLoggedIn();
    } catch(err){
      console.error(err)
    }
  } 


  return (
    <>
         <div style={{textAlign: "center", paddingTop:"3rem"}}>
            <Container>
              <Grid
                container
                spacing={2}
                sx={{
                  backgroundColor: '#f6f6f6',
                  width: '100%',
                  borderRadius: 5,
                  padding: 5,
                }}>
              <Grid item xs={12} style={{ textAlign: 'center'}}>
                <Typography
                  variant="h4"
                  gutterBottom
                  component="div"
                  >
                    LOGIN ACCOUNT
                </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box component="form">
              <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField 
                  type="email"
                  fullWidth       
                  label='Email'
                  value={userLogin.email}
                  onChange={(e) => setUserLogin({...userLogin, email: e.target.value, })}
                  variant='outlined'/>
              </Grid>
              <Grid item xs={6}>
                <TextField 
                  type="password"
                  fullWidth       
                  label='Password'
                  value={userLogin.password}
                  onChange={(e) => setUserLogin({...userLogin, password: e.target.value, })}
                  variant='outlined'/>
              </Grid>
              {isSuccess ? (
                  <Grid
                    item
                    xs={12}
                    mt={6}
                    display="flex"
                    justifyContent="center"
                  >
                    <Grid container display="flex" justifyContent="center">
                      <Grid item xs={6} style={{ textAlign: 'center' }}>
                        <Alert severity="success">
                          Thank you for joining! <br />
                          Confirmation Number:
                          
                        </Alert>
                      </Grid>
                    </Grid>
                  </Grid>
                ) : (<Grid item xs={12} mt={6} style={{ textAlign: 'center' }}>
                    <Button
                        fullWidth
                        size="large"
                        disabled={isEnabled}
                        variant="contained"
                        type="submit"
                        onClick={login}
                        sx={{ backgroundColor: '#6fca54' }}
                    >
                      Submit Registration
                    </Button>
                  </Grid>
                  )};
              </Grid>

            </Box>
          </Grid>
              </Grid>
            </Container>

    </div>
    </>

  )
}

export default Login