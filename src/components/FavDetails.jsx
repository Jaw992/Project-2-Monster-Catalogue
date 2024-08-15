import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function FavList({monsters}) {

  const {favName} = useParams();

  if (monsters.length === 0) {
    return console.log("Loading Monster")
  } else {
    const eachFav = monsters.find((mon) => mon.name === favName);
    
    return (
      <Container>
        <fieldset className="detailbox">
        <h2>{eachFav.name}</h2>
        <dl>
          <dt>Description:</dt>
            <dd>{eachFav.description}</dd>
          <dt>Type:</dt>
            <dd className="toCaps">{eachFav.type}</dd>
          <dt>Species:</dt>
            <dd className="toCaps">{eachFav.species}</dd>
          <dt>Locations:</dt>
            <dd>
              <ul>
                {eachFav.locations.map((location) => (
                  <li key={location.id}>
                  {location.name} {"--->"} Area: {location.zoneCount}
                  </li>
                ))}
              </ul>
            </dd>
          <dt>Resistance:</dt>
            <dd className="toCaps">
                {eachFav.resistances.length > 0 ? 
                <ul className="resist">
                  {eachFav.resistances.map((resist) => (
                  <li className="box" key={resist.element}>
                  {resist.element}
                  </li>
                  ))}
                </ul>
                : <p>None</p>
                }
            </dd>
            <dt>Weakness:</dt>
              <dd className="toCaps">
                {eachFav.weaknesses.length > 0 ? 
                <ul className="weakness">
                  {eachFav.weaknesses.map((weak) => (
                  <li className="box" key={weak.element}>
                  {weak.element} : {weak.stars}
                  </li>
                  ))} 
                </ul>
                : <p>None</p>
                }
              </dd>
            </dl>
        <Link to="/favourites" ><button>Back</button></Link>
        </fieldset>
      </Container>
    );
  }
}