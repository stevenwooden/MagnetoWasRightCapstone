import Image from "react-bootstrap/esm/Image"
import Button from "react-bootstrap/esm/Button"
import Container from "react-bootstrap/Container"
// import CommentBox from "./CommentBox";
function BlogArticle ({image, title, link, author, content}) {
    return (

        <Container>
            <div className="blog" style={{borderBottom:"solid lightgray 1px"}}>
                <Image fluid rounded src={image} style={{width: "75%", marginBottom:10,  }} alt="X-men Adapt"/>
                <h4 className="caption">{title}</h4><p style={{color:"lightgray", marginLeft:4}}>{author}</p>
                <h6 style={{margin:8}}>{content}</h6>
                <Button variant="primary" style={{margin:10}} href={link} >Click Here Read More!</Button> 
                {/* <CommentBox/> */}
            </div>
        </Container>
    )
}

export default BlogArticle;