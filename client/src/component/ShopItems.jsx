import { useEffect, useState } from "react"
import CardShop from "./CardShop";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function ShopItems(){
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/products?limit=6')
            .then(response => response.json())
            .then(data => setProducts(data.products));           

    }, []);

    return(
        <div>
            <Container>
                <Row xs={1} md={2} lg ={4} className = "g-4">
                    {products.map(product => (
                        <Col  style={{width:'18rem'}} key={product.id} className="mb-4">
                            <CardShop product={product}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
};

export default ShopItems