import './index.scss';
import back_video from '../../img/video.mp4'
function Stories(){
    return (
        <div className='stories'>
            <div className="sub-story">
            <h1 className="head">
               we make people genuinely happu 
            </h1>

            <div className="story-div">

                <div className="img-div img-div1">
                    
                    
                </div> 

                    
                <div className="text-div">
                <h4>
                    IT WAS THE  BEST TOUR I HABE EVER HAD
                    </h4>
                    <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus . 
                    </span>
                    <h2>MARY SMITH</h2>
                </div> 

            </div>
            <div className="story-div">

                <div className="img-div img-div2">

                
                    
                </div> 


                <div className="text-div">
                    <h4>
                    I HAD THE BEST WEEK EVER WITH MY FAMILY
                    </h4>
                    <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur .
                    </span>

                    <h2>JACK WILSON</h2>
                </div>  
            </div>
            <div className='btn-container center-button'>
                    <a className='btn-secondary' href="#">Read All Stories &rarr; </a>

                    </div>

            </div>
            
            
                    <div className="video-div">

                    <video  autoPlay loop >
                        <source src={back_video} type='video/mp4' />
                    </video>


                    </div>
                    

           

        </div>
    )
}


export default Stories;