import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"
import img4 from "../assets/4.png"
import img5 from "../assets/5.png"
import img6 from "../assets/6.png"

export default function Portfolio() {
    return (
    <section className="portfolio bg-light" id="portfolio">
      <div className="container">
        <div className="row mb-4">
          <div className="col text-center">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md mb-4">
            <div className="card">
              <img className="card-img-top" src={ img1 } alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col-md mb-4">
            <div className="card">
              <img className="card-img-top" src={ img2 } alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>

          <div className="col-md mb-4">
            <div className="card">
              <img className="card-img-top" src={ img3 } alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>   
        </div>

        <div className="row">
          <div className="col-md mb-4">
            <div className="card">
              <img className="card-img-top" src={ img4 } alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div> 
          <div className="col-md mb-4">
            <div className="card">
              <img className="card-img-top" src={ img5 } alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md mb-4">
            <div className="card">
              <img className="card-img-top" src={ img6 } alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}