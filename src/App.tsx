import { Container, Grid2 } from "@mui/material";

import "./App.css";

function App() {
  return (
    <Container>
      <Grid2 container spacing={2}>
        <Grid2>
          <h2>Графики</h2>
        </Grid2>
      </Grid2>
        <Grid2 container spacing={2}>
          {new Array(6).fill(null).map((el, index) => (
            <Grid2 key={index} size={4}>Категория</Grid2>
          ))}
        </Grid2>
    </Container>
  );
}

export default App;
