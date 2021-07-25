import './index.scss';
import logo from '../../img/logo-green-2x.png'

function Footer(){
    return (
        <div className='footer-main'>
            <div className="logo-div">
                <img src={logo} alt="" />
            </div>
            <div className="links-list">
                <ul>
                    <li><a href="#">company</a></li>
                    <li><a href="#">contact us</a></li>
                    <li><a href="#">careers</a></li>
                    <li><a href="#">privacy policy</a></li>
                    <li><a href="#">terms</a></li>
                    
                </ul>
            </div>
        </div>
    )
}


export default Footer;