import React, { useState,useEffect } from 'react' 
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import Dashboard from "../components/DashBoard";
import useStyles from '../assets/styles/MakeStyles'
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import axios from 'axios'

function Sell(props) {
  const [codeBar,setCodeBar] = useState('')
  const [products,setProducts] = useState('')
  
  
   

   function onSubmit (event) {
    event.preventDefault()
  
    async function productlist(event){

      const pro = await axios.get("http://localhost:8080/products")
       console.log(pro.data.data.product);
 
       setProducts({products: pro.data.data.product})
       
     } 
     
     productlist()

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
       >
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
              <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>CodeBar</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Cant</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/*aaqui renderea los datos  con el row que debe tener la respuest del servidor  payload.data*/}
          
            <TableRow key={products.id}>
              <TableCell>{products.date}</TableCell>
              <TableCell>{products.name}</TableCell>
              <TableCell>{products.shipTo}</TableCell>
              <TableCell>
                <Input type="Number" />
              </TableCell>
              <TableCell align="right">{products.amount}</TableCell>
            </TableRow>
         
        </TableBody>
      </Table>
      </React.Fragment>
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