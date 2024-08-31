import BlogArticle from "../component/BlogArticle"
import BlogVideo from "../component/BlogVideo"
import Container from "react-bootstrap/esm/Container" 
import { useEffect, useState } from "react"


export default function BlogPage(){
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //   // Fetch blog data from the server
    //     fetch('http://localhost:8080/api/posts')
    //         .then(response => response.json())
    //         .then(data => setPosts(data))
    //         .catch(error => console.error('Error fetching blog posts:', error));
    // }, []);

    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:6060/api/posts')
            .then(response => response.json())
            .then(data => setPosts(data));  
            .catch(error => console.error('Error fetching post',error));
    }, []);


    return(
        <main>
        <div className="background">
        <h1 >Spotlight on Mutants</h1>
        <p >Catchup on the latest News and Entertainment</p>
        </div>
        <Container>
            {posts.map(post => (
            post.video ? (
                <BlogVideo
                key={post._id}
                video={post.video}
                image={post.image}
                title={post.title}
                buttonText="Click Here to Watch!"
                />
            ) : (
                <BlogArticle
                key={post._id}
                image={post.image}
                link={post.link}
                title={post.title}
                buttonText="Click Here to Read!"
                />
            )
            ))}
        </Container>
        </main>
    )
}


{/* <BlogVideo
            video="https://www.youtube.com/embed/73_1biulkYk?si=bAuQOCeviU4THOoU"
            image="/assets/images/Deadpool-Wolverine-1.jpg"
            title='Check out this new trailer for Deadpool and Wolverine!'
            buttonText='Click Here to Watch!'
        />
        <BlogVideo
            video="https://www.youtube.com/embed/pv3Ss8o9gGQ"
            image="/assets/images/x-men97.png"
            title="Check out this trailer for X-MEN 97 and watch on Disney +"
            buttonText="Click Here to Watch!"
        />
        <BlogArticle 
            image = "/assets/images/blueteamgoldteam.jpg"
            link= "https://www.marvel.com/articles/comics/x-men-blue-gold-team-history-explained"
            title="Do you want to know more about the history of the lengendary Blue and Gold Teams of the X-MEN!!"
        />
        <BlogArticle
            image="/assets/images/x-menadapt.jpg"
            link= "https://gamerant.com/mcu-x-men-movie-adapt-x-men-blue-gold/"
            title= 'Should the MCU adapt this very famous storyline into a movie?'
        /> */}