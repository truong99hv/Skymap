import { useState } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header.jsx";
import Main from "./components/main/Main";
import Api from "./data/api";

function App() {
  const [api, setApi] = useState(Api.str);
  const filter = (api) => {
    setApi(api);
  };
  return (
    <>
      <Header api={api} filter={filter} />
      <Main api={api} filter={filter} />
      <Footer />
    </>
  );
}

export default App;
