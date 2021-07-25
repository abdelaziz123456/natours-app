import './Header.scss';
import logo from '../../img/logo-white.png'
function Header (){
return(
    <div className='header'>
        <div className='logo-box'>
            <img src={logo} alt="logo" className='logo' />
        
        </div>


        <div className='text-area'>
        <h1 className='heading'>
            <span className='heading-main'>Outdoors</span>
            
            <span className='heading-sub'>is where life happens</span>
        </h1>
        <a href="#" className="btn btn-white">Discover our tours</a>

        </div>
        

        

        
    </div>
)
}


export default Header