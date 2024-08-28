import Container from "react-bootstrap/esm/Container";
import ContentForm from "../component/ContentForm";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SubmitContent(){

    return(
        <main>
            <div className="background">
                <h1>Submit Your Content</h1>
                <p>Share and let us showcase your interest in X-Men fan art, news, online articles and more! </p>
            </div>
            <div>
            <Container className="formSubject">
                <Row>
                    <Col>
                        <Image src="/assets/images/russell_dauterman_x-men_legends_cover.jpg" alt="stature" className="contentPic"/>
                    </Col>
                    <Col className="form">
                        <ContentForm/>
                    </Col>  
                </Row>
            </Container>
            </div>
        </main>
    )


}