import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";

// hay que cambiar esto por la peticion a la bd
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}
//aqui deberia tener el rows = payload.data
const rows = [
  // createData(
  //   0,
  //   "16 Mar, 2019",
  //   "Elvis Presley",
  //   "Tupelo, MS",
  //   "VISA ⠀•••• 3719",
  //   312.44
  // ),
  // createData(
  //   1,
  //   "16 Mar, 2019",
  //   "Paul McCartney",
  //   "London, UK",
  //   "VISA ⠀•••• 2574",
  //   866.99
  // ),
  // createData(
  //   2,
  //   "16 Mar, 2019",
  //   "Tom Scholz",
  //   "Boston, MA",
  //   "MC ⠀•••• 1253",
  //   100.81
  // ),
  // createData(
  //   3,
  //   "16 Mar, 2019",
  //   "Michael Jackson",
  //   "Gary, IN",
  //   "AMEX ⠀•••• 2000",
  //   654.39
  // ),
  // createData(
  //   4,
  //   "15 Mar, 2019",
  //   "Bruce Springsteen",
  //   "Long Branch, NJ",
  //   "VISA ⠀•••• 5919",
  //   212.79
  // )
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Orders() {
  const classes = useStyles();
  return (
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
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>
                <Input type="Number" />
              </TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
