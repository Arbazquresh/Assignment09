import React, { useState } from "react";
import { Grid, Button } from "@mui/material";

export const Box = () => {
  const [clr, setClr] = useState(false);
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}></Grid>
      <Grid
        item
        xs={8}
        sx={{
          height: 400,
          width: 400,
          bgcolor: clr ? "red" : "green",
          border: 2,
          marginTop: 4,
        }}
      ></Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={4}></Grid>

      <Grid item xs={4}>
        <Button onClick={() => setClr(!clr)} variant="contained" fullWidth>
          {clr ? "red" : "green"}
        </Button>
      </Grid>

      <Grid item xs={2}></Grid>
    </Grid>
  );
};
