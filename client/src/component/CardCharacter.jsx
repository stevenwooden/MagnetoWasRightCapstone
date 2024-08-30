import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

function CardTemplate({character}) {
    return(
    <Card className='charCard'>
        <Card.Img src={character.image} fluid variant="top" style={{height:' 16rem' ,objectFit:'cover'}} alt={character.alias}/>
        {/* <Card.Body style = {{textAlign:'center'}}> */}
            <Accordion>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header className='nameCard' >{character.alias}</Accordion.Header>
                    <Accordion.Body>{character.powers}</Accordion.Body>
                </Accordion.Item>
            </Accordion>
            {/* <Card.Title>{character.alias}</Card.Title>
            <Card.Text>Powers: {character.powers}</Card.Text> */}
        {/* </Card.Body> */}
    </Card>  
    )
}
export default CardTemplate