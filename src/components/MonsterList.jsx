import NavBar from "./NavBar"
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap"

import { Link } from "react-router-dom";
import { createMonster } from "../service/monsterService";
import { useState } from "react";

export default function MonsterList({monsters, favs, setFavs}) {

  console.log("In MonList - ", favs);
  const [isFav, setIsFav] = useState(false);

  const isDuplicate = (monster) => { 
    return favs.some((favourite) => favourite.name === monster.name);
  };

  const handleAdd = async (monster) => {

    setIsFav(true);

    if (isDuplicate(monster)) {
      console.log("Monsters exist, no actions taken");
      return null;   
    } else {
      const addMonster = await createMonster(monster.name, monster.type, monster.species);
      setFavs([...favs, addMonster]);
    }

    setIsFav(false);
  };

    return (
      <>
        <NavBar />
        <h1 className="title">Monster Catalogue</h1>

        <Table striped bordered variant="dark">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Species</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
          {monsters.map((monster) => (
              <tr key={monster.id}>
                <th scope="row">{monster.name}</th>
                <td>{monster.type}</td>
                <td>{monster.species}</td>
                <td className="buttons">
                  <Link to={`/monsters/${monster.id}`} >
                  <Button variant="outline-info">More Details</Button>
                  </Link>
                  <Button variant={isDuplicate(monster) ? "warning" : "outline-warning"}
                  onClick={() => handleAdd(monster)}>★</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }