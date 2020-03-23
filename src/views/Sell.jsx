import React, { useState } from 'react' 
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import Orders from "../components/Orders";
import Dashboard from "../components/DashBoard";
import useStyles from '../assets/styles/MakeStyles'

function Sell(props) {
  const [codeBar,setCodeBar] = useState('')
  function onSubmit (event) {
    event.preventDefault()

    if (props.onSubmit) {
      props.onSubmit({
        codeBar,
      })
    }

    setCodeBar('')
  
  }


  
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    
    <div className={classes.root}>
      <Dashboard />
      <CssBaseline />

      <form className={classes.form} noValidate
        onSubmit={onSubmit}>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* CodeBar */}
        
            <Grid item xs={12} md={8} onSubmit={onSubmit}>
              <Paper className={classes.paper}>
                <Input id="codebar" 
                placeholder="BarCode" 
                autoFocus
                value={codeBar}
                onChange={(event) => setCodeBar(event.target.value)}/>
              </Paper>
            </Grid>
            
            {/* Orders */}
            <Grid item xs={12} md={8}>
              <Paper className={fixedHeightPaper}>
                <Orders />
              </Paper>
            </Grid>
            {/* Total */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>

              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
      </form>
    </div>
    
  );
}

export default Sell