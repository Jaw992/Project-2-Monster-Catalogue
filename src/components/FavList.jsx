import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap"

import { deleteMonster } from "../service/monsterService";
import NavBar from "./NavBar";

export default function FavList({favs, setFavs}) {

  console.log("In FavList - ", favs)

    const handleDelete = async (favId) => {
      setFavs(favs.filter((fav) => fav.id !== favId));
      await deleteMonster(favId);
    }
        
  if (!favs || favs.length === 0) {
    return (
      <>
      <NavBar />
      <h1 className="title">None in Library</h1>
    </>
    )
  }
  
  return (
    <>
      <NavBar />
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
            {favs.map((fav) => (
            <tr key={fav.name}>
              <th scope="row">{fav.name}</th>
              <td>{fav.type}</td>
              <td>{fav.species}</td>
              <td className="buttons">
                <Link to={`/favourites/${fav.name}`}>
                <Button variant="outline-info">More Details</Button>
                </Link>
                <Button variant="warning" onClick={() => handleDelete(fav.id)}>★</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </>
    );
}