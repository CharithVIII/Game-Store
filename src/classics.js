function Classics(){
    return(
      <div className="classics" id="classics">
        <h3 className="text-center m-4 text-white">Classics</h3>
        <div className="container text-center">
          <div className="row justify-content-evenly">
            <div className="col classicGames col-6 mb-5 col-md-4">
          
                <img src="gta.jpg" className="card-img-top" alt="..."  />
                <div className="card-body">
                  <h5 className="card-title text-white my-3">GTA San Andreas</h5>
                  <a href="#" className="btn button-classics">Buy Now</a>
                </div>
              </div>
         
            <div className="col classicGames col-6 mb-5 col-md-4">
             
                <img src="https://m.media-amazon.com/images/M/MV5BMTE3YmIwN2MtODEzNC00ZGNkLWFmMzktZDU3YmMwM2E2MDk2XkEyXkFqcGc@._V1_.jpg" className="card-img-top" alt=""  />
                <div className="card-body">
                  <h5 className="card-title text-white my-3">Halo 3</h5>
                  <a href="#" className="btn button-classics">Buy Now</a>
                </div>
            
            </div>
            <div className="col classicGames col-6 mb-5 col-md-4">
              
                <img src="https://m.media-amazon.com/images/M/MV5BMzBhYzc4NjUtMmIzMS00YWVlLTg0MTgtNmE0MDUwZDliODJjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title text-white my-3">Uncharted: Drakes Fortune</h5>
                  <a href="#" className="btn button-classics">Buy Now</a>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    )
  }
  
  export default Classics;