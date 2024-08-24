import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/esm/Image';



function CarouselShop() {
    return (
        <Carousel >
        <Carousel.Item >
            <Image className = 'shop' src= "/assets/images/x-menmerch.jpeg" alt='x-men'/>
            <Carousel.Caption>
                <h2 className='carouselCaption'>Shop the X-Men Experience</h2>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image className='shop' src='/assets/images/clothes.jpg' alt='xmen clothes' />
            <Carousel.Caption>
            <h2 className='carouselCaption'>Mutant Fashion</h2>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image className='shop' src='/assets/images/xmenacess.jpg' alt= 'xmen accessories' /> 
            <Carousel.Caption>
            <h2 className='carouselCaption'>Power Up Your Look With Accesories</h2>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}

export default CarouselShop;