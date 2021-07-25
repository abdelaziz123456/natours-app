
import './index.scss'

function Cards(){


    return (
        <div  className='cards-section'>
            <h1 className='head'> most popular tours</h1>

            <div className="card-container">

                <div className="row">
                    <div className="card-main  card-orange">

                        <div className="card front front-orange">
                            <div className="card-image">
                               
                            
                            </div>

                        <div className="text-div">
                                <h1>the sea explorer</h1>

                        </div>
                        <div className="details-div">
                            <p>3 day tours</p>
                            <hr />
                            <p>up to 30 people</p>
                            <hr />
                            <p>2 tour guide</p>
                            <hr />
                            <p>sleep in cozy hotels</p>
                            <hr />
                            <p>difficulty: easy</p>
                            <hr />
                        </div>
                            
                        </div>



                        <div className="card back back-orange">

                        <span>only</span>
                        
                            <h1>$297</h1>
                            
                            <a href="#" className="btn btn-white">Book now</a>
                            
                            
                        </div>


                    </div>
                    <div className="card-main card-green">
                        <div className="card front front-green">
                        <div className="card-image">
                        
                        

                        </div>

                        <div className="text-div">
                                <h1>the forest hiker</h1>

                        </div>

                        <div className="details-div">
                            <p>7 day tours</p>
                            <hr />
                            <p>up to 40 people</p>
                            <hr />
                            <p>6 tour guide</p>
                            <hr />
                            <p>sleep in provided tents</p>
                            <hr />
                            <p>difficulty: medium</p>
                            <hr />
                        </div>
                            
                            
                        </div>


                        <div className="card back back-green">
                        <span>only</span>
                        
                        <h1>$497</h1>
                        
                        <a href="#" className="btn btn-white">Book now</a>
                            
                            
                        </div>

                        
                    </div>
                    <div className="card-main card-blue">

                        <div className="card front front-blue">
                        <div className="card-image">
                                
                               
                        </div>


                        <div className="text-div">
                                <h1> snow adventurer</h1>

                        </div>
                        <div className="details-div">
                            <p>3 day tours</p>
                            <hr />
                            <p>up to 15 people</p>
                            <hr />
                            <p>3 tour guide</p>
                            <hr />
                            <p>sleep in provided tents</p>
                            <hr />
                            <p>difficulty: hard</p>
                            <hr />
                        </div>
                            
                            
                        </div>
                        <div className="card back back-blue">
                            
                        <span>only</span>
                        
                        <h1>$897</h1>
                        
                        <a href="#" className="btn btn-white">Book now</a>
                        </div>

                        
                    </div>

                    
                    
                </div>

                
            </div>
            
            

            

            <div className="button-div">
            <a href="#" className="btn  btn-green">Discover our tours</a>

            </div>

           


        </div>

            


                
    )
}



export default Cards