import React, { useState } from "react";
import { Grid, Button } from "@mui/material";

export const Bulb = () => {
  const [data, setData] = useState(false);

  return (
    <div style={{ backgroundColor: "Black" }}>
      <Grid container spacing={2}>
        <Grid item xs={2}></Grid>
        <Grid
          sx={{
            height: 400,
            width: 200,
            marginTop: 5,
          }}
          item
          xs={8}
        >
          <img
            src={`${data ? `Bulbon` : `Bulboff`}.png`}
            alt=""
            height={"400"}
            width={"600"}
          />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <Button onClick={() => setData(!data)} variant="contained" fullWidth>
            {data ? "ON" : "OFF"}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
