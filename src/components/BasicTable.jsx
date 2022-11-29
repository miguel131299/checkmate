import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Context } from "../Context";
import { useContext } from "react";

export default function BasicTable() {
  const { tableData } = useContext(Context);

  function getWidth() {
    const { innerWidth } = window;
    return innerWidth;
  }

  return (
    <TableContainer component={Paper} sx={{ height: 400 }}>
      <Table
        sx={{ maxWidth: getWidth() > 992 ? 900 : 400 }}
        stickyHeader
        aria-label="sticky table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                backgroundColor: "#1C4E51",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Artikel
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#1C4E51",
                color: "white",
                fontWeight: "bold",
              }}
              align="right"
            >
              Artikel Status
            </TableCell>
            <TableCell
              sx={{
                backgroundColor: "#1C4E51",
                color: "white",
                fontWeight: "bold",
              }}
              align="right"
            >
              Deine Antwort
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Artikel #{row.index}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.answer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
