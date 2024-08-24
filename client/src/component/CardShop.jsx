import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/esm/Button';
function CardShop({product}){
    return(
        <Card>
            <Card.Img variant="top" style={{height:'14rem'}} src={product.thumbnail} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        <small className="text-muted">${product.price}</small>
                    </Card.Text>
                    <Button variant='primary' size='lg' href='#'>Add To Cart</Button>
                </Card.Body>
        </Card>
    )
}
export default CardShop;