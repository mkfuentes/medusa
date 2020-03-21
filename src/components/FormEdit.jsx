import React, { useState } from 'react' 
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Medusa Project
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function FormEdit(props) {

  const [codeBar,setCodeBar] = useState('')
  const [description,setDescription] = useState('')
  const [pricePublic,setPricePublic] = useState('')
  const [priceStore,setPriceStore] = useState('')
  const [department,setDepartment] = useState('')
  
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



  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <EditOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Modificar Producto
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="succes"
            className={classes.submit}
          >
            Modificar Producto
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
