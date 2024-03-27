

const Contact = () => {
    return (
<section className="contact" id="contact">
          <h1 className="heading" data-aos="fade-up">
            {" "}
            <span>contact me</span>{" "}
          </h1>
          <form id="contact-form" action method="post">
            <div className="flex">
              <input
                data-aos="fade-right"
                type="text"
                id="name"
                name="name"
                placeholder="enter your name"
                className="box"
                required
              />
              <input
                data-aos="fade-left"
                type="email"
                id="email"
                name="email"
                placeholder="enter your email"
                className="box"
                required
              />
            </div>
            <input
              data-aos="fade-up"
              type="number"
              min={0}
              id="number"
              name="number"
              placeholder="enter your number"
              className="box"
              required
            />
            <textarea
              data-aos="fade-up"
              id="message"
              name="message"
              className="box"
              required
              placeholder="enter your message"
              cols={30}
              rows={10}
              defaultValue={""}
            />
            <input
              type="submit"
              data-aos="zoom-in"
              defaultValue="send message"
              name="send"
              className="btn"
            />
          </form>
          <div className="box-container">
            <div className="box" data-aos="zoom-in">
              <i className="fas fa-phone" />
              <h3>phone</h3>
              <p>+880 164-520-2421</p>
            </div>
            <div className="box" data-aos="zoom-in">
              <i className="fas fa-envelope" />
              <h3>email</h3>
              <p>mdjihat0021@gmail.com</p>
            </div>
            <div className="box" data-aos="zoom-in">
              <i className="fas fa-map-marker-alt" />
              <h3>address</h3>
              <p>narayanganj-1411, Bangladesh</p>
            </div>
          </div>
        </section>
    );
};

export default Contact;