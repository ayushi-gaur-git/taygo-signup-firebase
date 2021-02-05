import './App.css';
import Grid from '@material-ui/core/Grid';
import ImgContainer from './ImgContainer';
import SignupForm from './signupForm';
import Hidden from '@material-ui/core/Hidden';

function App() {
  return (
    <div className="App">
      <Grid container>
        <Hidden smDown>
          <Grid item md={6} lg={6} className="img-container">
            <ImgContainer />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={6} lg={6} className="form-area">
          <SignupForm />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
