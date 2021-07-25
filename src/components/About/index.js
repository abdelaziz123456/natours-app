import './About.scss';


import image_1 from '../../img/nat-1-large.jpg';
import image_2 from '../../img/nat-2-large.jpg';
import image_3 from '../../img/nat-3-large.jpg';



function About (){
    return(
        <div className='about'>
            <h1 className='head'> exciting tours for adventurous people</h1>
        

        
            <div className='flex-box'>

                <div className="text-box">
                    <p className='strong'>
                        you're going to fall in love with nature
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                    <p className='strong'>
                        live adventure like you never have before
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                    <div className='btn-container'>
                    <a className='btn-secondary' href="#">Learn more &rarr; </a>

                    </div>

                    
 
                    


                </div>
            
                <div className="composition">
                    <img src={image_1} alt='photo 1' className="composition__photo composition__photo--p1" />  
                    <img src={image_2} alt='photo 2' className="composition__photo composition__photo--p2" /> 
                    <img src={image_3} alt='photo 3' className="composition__photo composition__photo--p3" /> 
                </div>

            </div>
        </div>
    )
}

export default About;