import React from "react";
import Header from "./componet/Header";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import "./App.css";
import Fiels from "./componet/Fiels";
function App() {
  const [form, Setform] = React.useState({ name: "", email: "" });
  const [data, setdata] = React.useState([]);
  function handleAdd() {
    setdata((prev) => {
      return [...prev, { name: form.name, email: form.email }];
    });
    Setform({ name: "", email: "" });
  }

  const element = data.map((ele, idx) => (
    <Fiels
      key={idx}
      id={idx}
      name={ele.name}
      email={ele.email}
      handleDelete={handleDelete}
    />
  ));

  function handleDelete(id) {
    setdata((prev) => {
      let ans = prev;
      ans.splice(id, 1);
      return [...ans];
      // let newArr = [];
      // prev.forEach((item, idx) => {
      //   if (idx != id) newArr.push(item);
      // });
      // return newArr;
    });
  }

  function handleClick(e) {
    Setform((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <div className="App">
      <Header />

      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            // onChange={(event) => setName(event.target.value)}
            onChange={handleClick}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            value={form.name}
          />
          <TextField
            id="outlined-basic"
            // onChange={(event) => setEmail(event.target.value)}
            onChange={handleClick}
            label="Email"
            variant="outlined"
            value={form.email}
            name="email"
          />
          <Button
            onClick={handleAdd}
            style={{ backgroundColor: "green" }}
            variant="contained"
          >
            <AddIcon />
          </Button>
        </Stack>
      </div>
      {element}
    </div>
  );
}

export default App;
