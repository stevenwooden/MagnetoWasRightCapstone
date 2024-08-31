import { Link } from "react-router-dom";

import Image from 'react-bootstrap/Image';


function SectionLinks() {



    return(
        <div >
                <div className="linkTitle">
                    <h2>CHECKOUT OUR CONTENT!</h2>
                </div>
                <div className=" section-index row ">
                
                <div className="col-lg-6">
                    <Link className="image-link" to="/blog">
                    <Image src= "/assets/images/blogHome.png" fluid rounded alt="blog home" className="blogIimage feature"/>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <Link className="image-link" to="/character-bio">
                    <Image src= "/assets/images/character.png" fluid  rounded alt="character" className="character feature"/>
                    </Link>    
                </div>
                </div>
        </div>
    )
}

export default SectionLinks