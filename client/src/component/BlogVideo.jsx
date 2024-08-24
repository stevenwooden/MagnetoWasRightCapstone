import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import CommentBox from './CommentBox';


function BlogVideo({image, video, caption, buttonText}){
    
    const [currentvideo, setCurrentVideo] = useState('');

    const handleVideo = () => {
        setCurrentVideo(video)
    }
    let content;

    if (currentvideo){
        content = (
            <iframe className='blogVideo' width="811" height="456" src={currentvideo} title="Marvel Animation&#39;s X-Men &#39;97 | Official Trailer | Disney+" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        );

    } else {
        content = (
            <Image fluid rounded src={image} style={{width:" 100%"}} alt="video"/>
        )
    }
    return (
        <div className="blog video">
            <div >
                {content}
            </div>
            <h4 className="caption"> {caption}</h4> 
            <Button variant='primary'  onClick={handleVideo} >{buttonText}</Button>    
            
            <CommentBox/>
        </div>
    ) 
};

export default BlogVideo;