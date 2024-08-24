
import HomeHeader from "../component/HomeHeader"
import SectionLinks from "../component/SectionLinks"
import HomeImage from "../component/HomeImage"
import Container from "react-bootstrap/esm/Container"
export default function HomePage() {
    return (

    <div>
        <HomeImage/>
        <HomeHeader/>
        <Container>
            <SectionLinks/>
        </Container>
    </div>
    )
}