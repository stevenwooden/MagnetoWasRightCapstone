import Container from "react-bootstrap/esm/Container";
import ContentForm from "../component/ContentForm";

export default function SubmitContent(){

    return(
        <main>
            <div className="background">
                <h1>Submit Your Content</h1>
                <p>Share and let us showcase your interest in X-Men fan art, news, online articles and more! </p>
            </div>
            <div className="form">
            <Container>
                <ContentForm/>
            </Container>
            </div>
        </main>
    )


}