import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, TextField, Button } from "@mui/material";

export const TodoList = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [clr,setClr]=useState("")



  const handleAdd = () => {
    setData([...data, text]);
    setText("");
  };

  const handleDelete = (item) => {
    const result = data.filter((elem) => elem !== item);
    setData(result);
  };

  useEffect(()=>{
    if(data.length>=1 && data.length<=3 ){
    setClr("red")
  }else if(data.length>3 && data.length<=5){
    setClr("green")
  }else if(data.length>5 && data.length<=7){
    setClr("orange")
  } else if(data.length>7 && data.length<=9){
    setClr("blue")
  }else if(data.length>9 && data.length<=11){
    setClr("yellow")
  }else{
    setClr("aqua")
  }
  },[data])

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid sx={{ bgcolor: clr, marginTop: 2 }} item xs={2}></Grid>
          <Grid item xs={6}>
            <TextField
              value={text}
              onChange={(e) => setText(e.target.value)}
              variant="outlined"
              fullWidth
              label="Add Name"
            />
          </Grid>

          <Grid item xs={4}>
            <Button onClick={handleAdd} variant="contained" fullWidth>
              Add
            </Button>
          </Grid>

          {data.map((item) => (
            <Grid item xs={3} sx={{ textAlign: "center" }}>
              <h1>{item}</h1>
              <Button onClick={() => handleDelete(item)} variant="contained">
                Deletedddd
              </Button>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
