import React from 'react';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import {firestore} from './firebase/firebase';

export default function SignupForm() {
  const [state, setState] = React.useState({
    fName: "",
    lName: "",
    email: "",
    phone: ""
  });

  const [errorState, setErrorState] = React.useState({
    fName: false,
    lName: false,
    email: false,
    phone: false
  });

  let errorText = {
    fName: errorState.fName ? "First Name is Required" : <span>&#8203;</span>,
    lName: errorState.lName ? "Last Name is Required" : <span>&#8203;</span>,
    email: errorState.email ? "Email is Required" : <span>&#8203;</span>,
    phone: errorState.phone ? "Phone Number is Required" : <span>&#8203;</span>,
  }

  const handleSubmit = async () => {
    // console.log(Object.keys(state))
    if(Object.keys(state).filter(ob => state[ob] == "").length > 0) {
      setErrorState({
        fName: state.fName == "" ? true : false,
        lName: state.lName == "" ? true : false,
        email: state.email == "" ? true : false,
        phone: state.phone == "" ? true : false,
      })
    } else {
      console.log("submit");
      await firestore.collection('users').add({firstName: state.fName,
                                        lastName: state.lName,
                                        email: state.email,
                                        phone: state.phone});
      alert(`Created a new user`);
    }
  }

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
    setErrorState({
      ...errorState,
      [e.target.name]: false
    })
  }

  return <div className="form-container">
    <Hidden mdUp>
      <img src="https://cms.taygo.com/whitelabel/default/images/logo_light_normal.png" style={{height:"50px",padding:"8px",paddingBottom:"20px"}}/>
    </Hidden>
    <Typography variant="h5" style={{padding:"8px",paddingBottom:"30px"}}>
       Sign up to TAYGO
    </Typography>
    <Grid container>
      <Grid item xs={12} md={6}>
        <TextField
          label="First Name"
          placeholder="John"
          name="fName"
          value={state.fName}
          onChange={handleChange}
          error={errorState.fName}
          helperText={errorText.fName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label="Last Name"
          placeholder="Doe"
          name="lName"
          value={state.lName}
          onChange={handleChange}
          error={errorState.lName}
          helperText={errorText.lName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <TextField
        label="Email"
        placeholder="example@site.com"
        name="email"
        value={state.email}
        onChange={handleChange}
        error={errorState.email}
        helperText={errorText.email}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        label="Mobile Number"
        placeholder="888-888-8888"
        name="phone"
        value={state.phone}
        onChange={handleChange}
        error={errorState.phone}
        helperText={errorText.phone}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneAndroidIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
    <Grid item xs={12} className="submit-btn" style={{marginTop:"10px",marginBottom:"20px"}}>
      <Button variant="contained" onClick={handleSubmit}>Start with TAYGO</Button>
    </Grid>
    <Grid item xs={12} style={{marginTop:"10px 0",textAlign:"center"}}>
      <Typography variant="caption" className="muted" style={{overflow:"hidden",whiteSpace:"nowrap"}}>
        By clicking the button, I agree to the Terms of Services and Privacy Policy
      </Typography>
    </Grid>
    <Grid item xs={12} style={{marginTop:"10px 0",textAlign:"center"}}>
      <Typography variant="body2">
        Already a member? <a>Sign In</a>
      </Typography>
    </Grid>
  </div>
}
