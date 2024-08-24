import BlogArticle from "../component/BlogArticle"
import BlogVideo from "../component/BlogVideo"
import Container from "react-bootstrap/esm/Container" 

export default function BlogPage(){


    return(
        <main>
        <div className="background">
        <h1 >Spotlight on Mutants</h1>
        <p >Catchup on the latest News and Entertainment</p>
        </div>
        <Container>
        <BlogVideo
            video="https://www.youtube.com/embed/73_1biulkYk?si=bAuQOCeviU4THOoU"
            image="/assets/images/Deadpool-Wolverine-1.jpg"
            caption='Check out this new trailer for Deadpool and Wolverine!'
            buttonText='Click Here to Watch!'
        />
        <BlogVideo
            video="https://www.youtube.com/embed/pv3Ss8o9gGQ"
            image="/assets/images/x-men97.png"
            caption="Check out this trailer for X-MEN 97 and watch on Disney +"
            buttonText="Click Here to Watch!"
        />
        <BlogArticle 
            image = "/assets/images/blueteamgoldteam.jpg"
            link= "https://www.marvel.com/articles/comics/x-men-blue-gold-team-history-explained"
            caption="Do you want to know more about the history of the lengendary Blue and Gold Teams of the X-MEN!!"
        />
        <BlogArticle
            image="/assets/images/x-menadapt.jpg"
            link= "https://gamerant.com/mcu-x-men-movie-adapt-x-men-blue-gold/"
            caption= 'Should the MCU adapt this very famous storyline into a movie?'
        />
        </Container>
        </main>
    )
}