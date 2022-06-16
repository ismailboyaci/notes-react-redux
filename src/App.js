import { Container, Divider } from "@mui/material";

import Header from "./components/Header";
import Notes from "./components/Notes";
import TextArea from "./components/TextArea";

function App() {
  return (
    <Container>
      <Header />
      <TextArea />
      <Divider style={{ marginTop: 10 }} />
      <Notes />
      <Divider style={{ marginTop: 10 }} />
    </Container>
  );
}

export default App;
