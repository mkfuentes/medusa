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


 function FormEdit(props) {
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
          <EditOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Modificar Producto
        </Typography>
        <form className=
        {classes.form} 
        onSubmit={onSubmit} 
        noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="false"
                name="Codigo de Barras"
                variant="outlined"
                required
                fullWidth
                id="barCode"
                label="Codigo de Barras"
                autoFocus
                value={codeBar}
                onChange={(event) => setCodeBar(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Description"
                label="Descripcion"
                name="Description"
                autoComplete="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="pricePublic"
                label="Precio Publico"
                name="price public"
                type="number"
                value={pricePublic}
                onChange={(event) => setPricePublic(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
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
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="departmento"
                label="Departamento"
                name="departamento"
                autoComplete="departamento"
                value={department}
                onChange={(event) => setDepartment(event.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
          <Button 
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Modificar Producto
          </Button>
          </Grid>
          
        </form>
        </Container>
        </main>
     
    </div>
  );
  }
  
  export default FormEdit