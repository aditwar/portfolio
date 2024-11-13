import Contact from "../components/contact";

export default function About() {
    return (
    <section className="about" id="about">
      <div className="container">
        <div className="row mb-4">
          <div className="col text-center">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem animi quibusdam, eveniet quae quas nemo unde porro incidunt architecto, quis quaerat veniam doloribus hic, mollitia laudantium voluptate corrupti provident numquam repudiandae veritatis corporis? Pariatur, adipisci illum velit harum nostrum explicabo fugiat tempore commodi inventore ducimus soluta animi magnam, rerum sed ab natus laboriosam voluptatibus eius hic quo distinctio! Aperiam, possimus.</p>
          </div>
          <div className="col-md-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit minus distinctio quam dignissimos nostrum laborum vero sapiente dolores commodi at cum, veritatis sunt facere eveniet possimus nihil in enim eaque ullam temporibus maxime, quod corporis fuga! Minus facilis rem vitae nemo dolores mollitia, excepturi voluptatem facere sed, fugit error placeat blanditiis a temporibus distinctio quam rerum doloremque libero dicta at.</p>
          </div>
        </div>
      </div>
      <Contact />
    </section>
    )
}