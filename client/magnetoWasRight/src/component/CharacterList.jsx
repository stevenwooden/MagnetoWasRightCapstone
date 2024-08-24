import { useEffect, useState } from "react";
import CardTemplate from "./CardCharacter";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/esm/Container";

function CharacterList(){
    const [characters, setCharacters] = useState([]);

    useEffect(()=> {
        fetch('/data/character.json')
            .then(response => response.json())
            .then(data => setCharacters(data));  
    }, []);

    return (
        <Container>
        <Row xs ={1} md={2} lg={4}>
            {characters.map(character => (
                <Col style={{width:'18rem'}} key = {character.alias} className="mb-4">
                    <CardTemplate character={character}/>
                </Col>
            ))}
        </Row>
        </Container>
    )
}

export default CharacterList;