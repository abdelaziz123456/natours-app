import './index.scss';


function Booking(){
    return(
        <div className='booking'>
          <div className="book">
              <div className="book-form">
              <div className="head">start booking here</div>
                  <form action="#" className="form">

                      <div className="form-group">

                          <input type="text" className="form-input" placeholder='Full Name' id='name' />
                          
                      </div>
                      <div className="form-group">

                          <input type="email" className="form-input" placeholder='Email Address' id='email' />
                          
                      </div>
                      <div className="radio-group">

                          <input type="radio" className="form-input" name='tour'  id='small'/>

                          <label for="small" className="form-label">Small tour group</label>
                          <br />


                          <input type="radio" className="form-input" name='tour' id='large' />

                          <label for="large" className="form-label">Large tour group</label>
                          
                      </div>

                      <div className="button-div">
            <a href="#" className="btn  btn-green">next step &rarr;</a>

            </div>
                     

                      


                  </form>
              </div>
          </div>
        </div>
    )
}


export default Booking;