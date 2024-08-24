import Card from 'react-bootstrap/Card';

function CardTemplate({character}) {
    return(
    <Card >
        <Card.Img src={character.image} fluid variant="top" style={{height:'16rem'}} alt={character.alias}/>
        <Card.Body style = {{textAlign:'center'}}>
            <Card.Title>{character.alias}</Card.Title>
            <Card.Text>Powers: {character.powers}</Card.Text>
        </Card.Body>
    </Card>  
    )
}
export default CardTemplate