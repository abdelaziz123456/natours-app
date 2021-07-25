import './index.scss';
function Nav (){
    return (
        <div className="navigation">
          <input type="checkbox" className='navigation-checkbox' id='navi-toggle' />
          <label for="navi-toggle" className='navigation-button'>
              
              <i class="fa fa-bars fa-4x" aria-hidden="true"></i>

            </label> 
          <div className="navigation-background">&nbsp;</div>
          <nav className="navigation-nav">
            <ul className="navigation-list">
             
              <li className="navigation-item">
                <a href="#" className="navigation-link">01 about natours</a>
              </li>
              <li className="navigation-item">
                <a href="#" className="navigation-link">02 your benefits</a>
              </li>
              <li className="navigation-item">
                <a href="#" className="navigation-link">03 popular tours</a>
              </li>
              <li className="navigation-item">
                <a href="#" className="navigation-link">04 stories</a>
              </li>
              <li className="navigation-item">
                <a href="#" className="navigation-link">05 book now</a>
              </li>

              
            </ul>
          </nav>

          

        </div> 
    )
}

export default Nav;