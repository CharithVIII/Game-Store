import { data } from './data';
import { Link } from 'react-router-dom';
import './newlyadded.css';

function Newlyadded() {
    return (
        <div className="Newly-added">
            <h3 className="text-center text-white m-5 head-text">Newly Added</h3>
            <div className="container text-center">
                <div className="row g-5 justify-content-around">
                    <div className="col-md-4 col-sm-6 col-12 col-lg-3">
                        <div class="card bg-dark custom-size">
                            <img
                                src="https://assets-prd.ignimgs.com/2023/06/11/starwarsoutlaws-1686512371646.jpg?width=250&crop=1%3A1%2Csmart&auto=webp&dpr=2"
                                class="card-img-top"
                                alt="Image of game"
                            />
                            <div class="card-body">
                                <h5 class="card-title text-light">Star Wars Outlaws</h5>
                                <Link className="" to={`/product/${data[0].id}`}>
                                    <button className="button-new text-light" >Buy Today</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 col-lg-3">
                        <div class="card bg-dark custom-size">
                            <img
                                src="https://assets-prd.ignimgs.com/2024/06/09/agemyth-1717954786865.jpg?width=300&crop=1%3A1%2Csmart&auto=webp&dpr=2"
                                class="card-img-top"
                                width={"100%"}
                                alt="Image Of Game"
                            />
                            <div class="card-body">
                                <h5 class="card-title title text-light">Age Of Mythology</h5>
                                <Link className="" to={`/product/${data[1].id}`}>
                                <button className="button-new text-light" >Buy Today</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 col-lg-3">
                        <div class="card bg-dark custom-size">
                            <img
                                src="https://assets-prd.ignimgs.com/2024/07/10/nba-2k25-button-1720620672645.jpg?width=250&crop=1%3A1%2Csmart&auto=webp&dpr=2"
                                class="card-img-top"
                                alt="Image Of Game"
                            />
                            <div class="card-body">
                                <h5 class="card-title title text-light ">NBA 2k 25</h5>
                                <Link className="" to={`/product/${data[2].id}`}>
                                <button className="button-new text-light" >Buy Today</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Newlyadded;






