import images from '../assets/images';
import './Estilos.css';

function Cards() {
  return (
    <>
      <div>
        <h1 className="text-center text-2xl pt-14 pb-4">What's Happening</h1>
        <div className="grid-container">
          <div className="grid-item">
            <div className="columna-content">
              <img src={images[0].img} alt="gato" />
              <h3>{images[0].title}</h3>
              <p> {images[0].description}</p>
            </div>
          </div>
          <div className="grid-item">
            <div className="columna-content">
              <img src={images[1].img} alt="huellita" />
              <h3>{images[1].title}</h3>
              <p> {images[1].description}</p>
            </div>
          </div>
          <div className="grid-item">
            <div className="columna-content">
              <img src={images[2].img} alt="hueso" />
              <h3>{images[2].title}</h3>
              <p> {images[2].description}</p>
            </div>
          </div>
          <div className="grid-item">
            <div className="columna-content">
              <img src={images[3].img} alt="corazon" />
              <h3>{images[3].title}</h3>
              <p> {images[3].description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
