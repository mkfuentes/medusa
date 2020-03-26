import React from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Dashboard from "../components/DashBoard";
import AddProduct from "../components/FormAdd";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import useStyles from "../assets/styles/MakeStyles";


export default function Add() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <Dashboard />
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="md" className={classes.container}>
          <div className={classes.iconoAdd}>
            <Avatar>
              <AddShoppingCartOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" display="block">
              Agregar producto
            </Typography>
          </div>
          <AddProduct />
        </Container>
      </main>
    </div>
  );
}
