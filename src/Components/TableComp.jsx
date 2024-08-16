import React, { useState, useEffect } from "react";
import axios from "axios";
import { obj } from "./Obj";
import {
  Grid,
  Card,
  CardContent,
  ListItem,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  Table,
  TableContainer,
} from "@mui/material";

export const TableComp = () => {
  const [data, setData] = useState(obj);

  //   const getData = async () => {
  //     const result = await axios.get(obj);
  //     setData(result.data);
  //   };

  //   useEffect(() => {
  //     getData();
  //   }, []);
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Work</TableCell>
            <TableCell align="right">City</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((item) => (
            <TableRow>
              <TableCell>{item.Name}</TableCell>
              <TableCell align="right">{item.Id}</TableCell>
              <TableCell align="right">{item.Name}</TableCell>
              <TableCell align="right">{item.Age}</TableCell>
              <TableCell align="right">{item.Work}</TableCell>
              <TableCell align="right">{item.City}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
