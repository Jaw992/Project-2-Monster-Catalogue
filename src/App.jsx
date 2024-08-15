import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { getData, getAir } from './service/monsterService';

import HomePage from "./components/HomePage";
import MonsterList from "./components/MonsterList";
import FavList from "./components/FavList";
import MonsterDetails from "./components/MonsterDetails";
import FavDetails from "./components/FavDetails";

const App = () => {

  const [monsters, setMonsters] = useState([]);
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    
    const loadMonsters = async () => {
      const data = await getData();
      setMonsters(data);
    }
    loadMonsters();
  }, [])

  useEffect(() => {
    
    const loadAir = async () => {
      const input = await getAir();
      setFavs(input);
    }
    loadAir();
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route  path="/monsters" element={<MonsterList monsters={monsters} setMonsters={setMonsters} favs={favs} setFavs={setFavs} />} />
        <Route path="/monsters/:monId" element={<MonsterDetails monsters={monsters} />} />
        <Route  path="/favourites" element={<FavList favs={favs} setFavs={setFavs} />} />
        <Route  path="/favourites/:favName" element={<FavDetails monsters={monsters} />} />
      </Routes>
    </>
  );
}

export default App;
