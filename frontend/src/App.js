import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import InputSearch from "./components/InputSearch/InputSearch";
import Footer from "./components/Footer/Footer";
import OutputSearch from "./components/OutputSearch/OutputSearch";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  
});

function App() {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
  },[])

  useEffect(() => {
    setShow(true);
  }, [search]);

  const search2D = (val) => {
    setSearch(val);
  };

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <InputSearch onSearch={search2D} />
        {show && <OutputSearch val={search} />}
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
