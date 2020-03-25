import React, { useState } from 'react' 
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import Typography from "@material-ui/core/Typography";
import useStyles from "../assets/styles/MakeStyles"
import Container from "@material-ui/core/Container";
import Dashboard from "../components/DashBoard";


 function FormAdd(props) {
  const classes = useStyles();

  const [codeBar,setCodeBar] = useState('')
  const [description,setDescription] = useState('')
  const [pricePublic,setPricePublic] = useState('')
  const [priceStore,setPriceStore] = useState('')
  const [department,setDepartment] = useState('')
  
  function onChange (event) {
    if (props.onChange) props.onChange(event)
  }
  function onSubmit (event) {
    event.preventDefault()

    if (props.onSubmit) {
      props.onSubmit({
        codeBar,
        description,
        pricePublic,
        priceStore,
        department
      })
    }

    setCodeBar('')
    setDescription('')
    setPricePublic('')
    setPriceStore('')
    setDepartment('')
  }
  
  return (
    <div className={classes.root}>
      <Dashboard />
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="md" className={classes.containerbox}>
          <Avatar className={classes.avatar}>
            <AddShoppingCartOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Agregar Producto
          </Typography>
          <form 
            onSubmit={onSubmit}
            className={classes.form} 
            >
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <TextField
                  autoComplete="false"
                  name="codeBar"
                  variant="outlined"
                  required
                  fullWidth
                  id="codeBar"
                  label="Codigo de Barras"
                  autoFocus
                  value={codeBar}
                  onChange={(event) => setCodeBar(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="Description"
                  label="Descripcion"
                  name="description"
                  autoComplete="Description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="pricePublic"
                  label="Precio Publico"
                  name="pricepublic"
                  type="number"
                  value={pricePublic}
                onChange={(event) => setPricePublic(event.target.value)}

                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="priceStore"
                  label="Precio Compra"
                  type="number"
                  id="priceStore"
                  value={priceStore}
                onChange={(event) => setPriceStore(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="department"
                  label="Departamento"
                  name="departamento"
                  autoComplete="departamento"
                  value={department}
                onChange={(event) => setDepartment(event.target.value)}
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
                Agregar Producto
              </Button>
            </Grid>
          </form>
        </Container>
      </main>
      
    </div>
  );
}

export default FormAdd
