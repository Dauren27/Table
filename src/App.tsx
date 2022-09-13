import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.scss";
import Table from "./components/table/Table";

const App: React.FC = () => {

  const [charactersInfo, setCharactersInfo] = useState<Object[] | null>(null);

  const fetchUsers = async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character/?page=1"
    );
    setCharactersInfo(response.data.results);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  
  return (
    charactersInfo && (
      <div className="App">
        <h1 className="title">Техническое задание</h1>
        <Table charactersInfo={charactersInfo} />
      </div>
    )
  );
};

export default App;
