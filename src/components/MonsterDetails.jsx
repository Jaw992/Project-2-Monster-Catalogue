import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function MonsterDetails ({monsters}) {
    
    const {monId} = useParams();

    if (monsters.length === 0) {
        return console.log("Loading Monster");
    } else {
        const eachMonster = monsters.find((mon) => mon.id === Number(monId));
        
        return (
            <Container>
                <fieldset className="detailbox">
                <h2>{eachMonster.name}</h2>
                <dl>
                    <dt>Description</dt>
                        <dd>{eachMonster.description}</dd>
                    <dt>Type</dt>
                        <dd className="toCaps">{eachMonster.type}</dd>
                    <dt>Species</dt>
                        <dd className="toCaps">{eachMonster.species}</dd>
                    <dt>Locations</dt>
                        <dd>
                            <ul>
                                {eachMonster.locations.map((location) => (
                                    <li key={location.id}>
                                        {location.name} {"--->"} Area: {location.zoneCount}
                                    </li>
                                ))}
                            </ul>
                        </dd>
                    <dt>Resistance</dt>
                        <dd className="toCaps"> 
                            {eachMonster.resistances.length > 0 ? 
                            <ul className="resist">     
                                {eachMonster.resistances.map((resist) => (
                                <li className="box" key={resist.element}>
                                {resist.element}
                                </li>
                                ))}  
                            </ul> 
                            : <p>None</p> 
                            }
                        </dd>
                    <dt>Weakness</dt>
                        <dd className="toCaps">
                            {eachMonster.weaknesses.length > 0 ?
                            <ul className="weakness">
                                {eachMonster.weaknesses.map((weak) => (
                                <li className="box" key={weak.element}>
                                {weak.element} : {weak.stars}
                                </li>
                                ))} 
                            </ul> 
                            : <p>No Weaknesses</p>
                            }
                        </dd>
                </dl>
                <Link to="/monsters"><button>Back</button></Link>
                </fieldset>
            </Container>
        );
    }
}