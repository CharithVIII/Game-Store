import { data } from './data';
import { Link } from 'react-router-dom';
import './popular.css';

function Popular() {
    return (
      <div className="popular" id="popular">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/553850/capsule_616x353.jpg?t=1724260543" class="d-block w-100" alt="..." />
              <Link className="buy-popular" to={`/product/${data[4].id}`}>Buy Now</Link>
            </div>
            <div class="carousel-item">
              <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2778580/capsule_616x353.jpg?t=1721683108" class="d-block w-100" alt="..." />
              <Link className="buy-popular" to={`/product/${data[5].id}`}>Buy Now</Link>
            </div>
            <div class="carousel-item">
              <img src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/capsule_616x353.jpg?t=1725556209" class="d-block w-100" alt="..." />
              <Link className="buy-popular" to={`/product/${data[6].id}`}>Buy Now</Link>
            </div>
            <div class="carousel-item">
              <img src="https://motionbgs.com/media/6470/black-myth-wukong.jpg" class="d-block w-100" alt="..." />
              <Link className="buy-popular" to={`/product/${data[7].id}`}>Buy Now</Link>
            </div>
            <div class="carousel-item">
              <img src="https://image.api.playstation.com/vulcan/ap/rnd/202312/0117/da083fa5e19458dd750aa8a6ea30ba10bac6f87074693df5.jpg" class="d-block w-100" alt="..." />
              <Link className="buy-popular" to={`/product/${data[8].id}`}>Buy Now</Link>
            </div>
            <div class="carousel-item">
              <img src="https://preview.redd.it/the-final-shape-launch-trailer-wallpaper-v0-6lvtdteylz2d1.png?auto=webp&s=3be01cc0a8ac9f0f42dcbc781909d55e93501644" class="d-block w-100" alt="..." />
              <Link className="buy-popular" to={`/product/${data[9].id}`}>Buy Now</Link>
            </div>
            <div class="carousel-item">
              <img src="https://cdn.dlcompare.com/others_jpg/upload/news/image/red-dead-redemption-is-reportedl-31230da2-image-31230d86.jpg.webp" class="d-block w-100" alt="..." />
              <Link to={`/product/${data[3].id}`} className="buy-popular">Buy Now</Link>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
  
  export default Popular;
  