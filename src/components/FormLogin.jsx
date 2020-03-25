import React, { useState } from 'react' 
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Dashboard from "../components/DashBoard";
import useStyles from "../assets/styles/MakeStyles"


 function FormLogin(props) {
  
  const classes = useStyles();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
    function onChange (event) {
    const { id, value } = event.target
    event.setState({ [id]: value })
  }
  
  function onSubmit (event) {
    event.preventDefault()

    if (props.onSubmit) {
      props.onSubmit({
        email,
        password
        
      })
    }

    setEmail('')
    setPassword('')
    }


  return (
     <div className={classes.root}>
      
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="md" className={classes.containerbox}>
        <Avatar className={classes.avatar}>
          <EditOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form 
        className={classes.form} 
        onSubmit={onSubmit} 
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="email"
                name="email"
                variant="outlined"
                placeholder='fulanitodetal@hotmail.com'
                required
                fullWidth
                id="email"
                label="Usuario"
                autoFocus
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Contraseña"
                name="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} md={12}>
            <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
        Enviar          
        </Button>
          </Grid>
          </form>
        </Container>
        </main>
     </div>
  );
  }
  
  export default FormLogin