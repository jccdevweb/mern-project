import { Backdrop, CircularProgress, Grid, Typography,Container, TextField, Button, MenuItem } from '@mui/material';
import { Box } from '@mui/system';

import axios from 'axios';
import React, { useContext, useState } from 'react'
import AuthContex from '../context/AuthContext';

const Register = () => {
  const[userRegister, setUserRegister] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password:'',
    passwordVerify:''
  });

  const [payment, setPayment] = useState({
    cardNumber: '',
    expirationMonth: '',
    expirationYear: '',
    CVV: '',
  });


  const { getLoggedIn } = useContext(AuthContex);
  const {email, password, passwordVerify} = userRegister

  const isEnabled = 
  userRegister?.email.length === 0 ||
  userRegister?.password.length === 0 ||
  userRegister?.passwordVerify.length === 0 ||
  payment?.cardNumber.length === 0 ||
  payment?.expirationMonth.length === 0 ||
  payment?.expirationYear.length === 0 ||
  payment?.CVV.length === 0 ;


  const [isLoading, setIsLoading] = useState(false);

  
  const Register = async (e) => {
    e.preventDefault();
    try{
      setIsLoading(true);
      const processPaymentResponse = await axios.request({
        url: `http://localhost:5001/auth/create`,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: {
          userRegister,
          payment,
        },
      });
 

    } catch(err){
      console.error(err)
    } finally {
      setIsLoading(false);
    }
  } 


  return (
    <>    
      <div style={{textAlign: "center", paddingTop:"3rem"}}>
        <Container maxwidth="lg">
          <Grid
            container
            spacing={2}
            sx={{
              padding: 5,
              backgroundColor: '#f6f6f6',
              width: '100%',
              borderRadius: 5,
            }}>
          <Grid item xs={12} style={{ textAlign: 'center'}}>
            <Typography
             style={{ textAlign: 'left'}}
              variant="h6"
              gutterBottom
              component="div"
              >
                MEMBER REGISTRATION
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box component="form">
              <Grid container spacing={2}>
              <Grid item xs={6}>
                  <TextField     
                      type="text" 
                      fullWidth       
                      label='First Name'
                      value={userRegister.firstName}
                      onChange={(e) => setUserRegister({...userRegister, firstName: e.target.value, })}
                      variant='outlined'/>
                </Grid>
                <Grid item xs={6}>
                  <TextField     
                      type="ematextil" 
                      fullWidth       
                      label='Last Name'
                      value={userRegister.lastName}
                      onChange={(e) => setUserRegister({...userRegister, lastName: e.target.value, })}
                      variant='outlined'/>
                </Grid>
                <Grid item xs={6}>
                  <TextField     
                      type="email" 
                      fullWidth       
                      label='Email'
                      value={userRegister.email}
                      onChange={(e) => setUserRegister({...userRegister, email: e.target.value, })}
                      variant='outlined'/>
                </Grid>
                <Grid item xs={3}>
                  <TextField    
                      type="password"
                      fullWidth             
                      label='Password'
                      value={userRegister.password}
                      onChange={(e) => setUserRegister({...userRegister, password: e.target.value, })}
                    variant='outlined'/>
                </Grid>
                <Grid item xs={3}>
                  <TextField 
                      type="password"
                      fullWidth
                      label='Password Verify'
                      value={userRegister.passwordVerify}
                      onChange={(e) => setUserRegister({...userRegister, passwordVerify: e.target.value, })}
                      variant='outlined'/>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ textAlign: 'center', marginTop: '10px' }}
                >
                  <Typography
                    style={{ textAlign: 'left'}}
                    variant="h6"
                    gutterBottom
                    component="div"
                    sx={{ mt: 2 }}
                  >
                    MEMBERSHIP PAYMENT
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ textAlign: 'center', marginTop: '10px' }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <TextField
                        fullWidth
                        label="Card Number"
                        variant="outlined"
                        value={payment.cardNumber}
                        onChange={(e) =>
                          setPayment({
                            ...payment,
                            cardNumber: e.target.value,
                          })
                        }
                        required
                        type="number"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        fullWidth
                        label="Expr Month"
                        variant="outlined"
                        helperText="MM"
                        value={payment.expirationMonth}
                        onChange={(e) =>
                          setPayment({
                            ...payment,
                            expirationMonth: e.target.value,
                          })
                        }
                        select
                        required
                      >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value="01">01</MenuItem>
                        <MenuItem value="02">02</MenuItem>
                        <MenuItem value="03">03</MenuItem>
                        <MenuItem value="04">04</MenuItem>
                        <MenuItem value="05">05</MenuItem>
                        <MenuItem value="06">06</MenuItem>
                        <MenuItem value="07">07</MenuItem>
                        <MenuItem value="08">08</MenuItem>
                        <MenuItem value="09">09</MenuItem>
                        <MenuItem value="10">10</MenuItem>
                        <MenuItem value="11">11</MenuItem>
                        <MenuItem value="12">12</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        fullWidth
                        label="Expr Year"
                        helperText="YYYY"
                        variant="outlined"
                        value={payment.expirationYear}
                        onChange={(e) =>
                          setPayment({
                            ...payment,
                            expirationYear: e.target.value,
                          })
                        }
                        inputProps={{ maxLength: 4 }}
                        required
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        fullWidth
                        label="CVV"
                        variant="outlined"
                        value={payment.CVV}
                        onChange={(e) =>
                          setPayment({
                            ...payment,
                            CVV: e.target.value,
                          })
                        }
                        required
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} mt={6} style={{ textAlign: 'center' }}>
                    <Button
                        fullWidth
                        size="large"
                        disabled={isEnabled}
                        variant="contained"
                        type="submit"
                        onClick={Register}
                        sx={{ backgroundColor: '#6fca54' }}
                    >
                      Submit Registration
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>    
        </Container>
      </div>
    </>

  )
}

export default Register