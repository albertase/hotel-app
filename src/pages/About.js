import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="container aboutus">
      <div className="row">
        <div className="col-md-6 col-12 my-auto">
          <img
            src={require("../images/about.svg").default}
            alt="about us"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 col-12 my-auto">
          <h1 className="display-4 text-center my-5">About Us </h1>
          <p className="lead text-justify text-center">
            As the name describes “Deluxe”, in this room view, location,
            advanced furnishings, decorations and shapes are deluxe in every
            way. Some hotels include additional amenities in these rooms such as
            a large writing desk, flattering flowers, upgraded bathroom and
            beautiful bathrobes. This room maximum comes in 4- and 5-star
            categories. Their facilities also depend on the types of hotels.
            Each and every facility of a deluxe room, you can take in the hotel
            in deluxe environments.
          </p>
          <div className="text-center col-md-6 col-12 mx-auto">
            <Link
              to="/contact"
              className="btn btn-outline-dark btn-block btn-lg my-5"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <div className="about_company">
        <h1 className="display-4">About Company</h1>
        <div className="pt-4">
          <p className="about_info">
            As the name describes “Deluxe”, in this room view, location,
            advanced furnishings, decorations and shapes are deluxe in every
            way. The rooms of the hotel are classified according to the number
            of beds in them, their size and their range of facilities. Prices of
            rooms in every hotel are different depends upon their convenience.
            There are the top three basic categories of the room for the hotel;
            on their based the hotel rooms are divided: Standard, Family Rooms
            and Suites. The category depends on the both big and small hotels.
            The big hotels make their own room categories by offering spa nearby
            rooms, which is called “Spa elite rooms”. On another hand, the
            “Pure” rooms are fashioned by using hypoallergenic materials. The
            hotels offer different types of the layout according to the needs
            and convenience of all their guests. A standard room comes in the
            category of the hotel’s cheapest room. It is a type of single room,
            which has a king-size bed, or as two beds — this room is decorated
            with two queen-size beds. A standard room includes all kinds of
            basic facilities such as a table, chair, desk, cupboard, dressing
            table, DVD player, television, telephone, coffee maker and a private
            bathroom.{" "}
          </p>
        </div>
      </div>
      <div className="testimony">
        <h1 className="display-4 mb-4">What Our Clients says</h1>
        <div className="row mb-5">
          <div className="col-md-10 col-12 mx-auto">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="2"
                ></li>
                <li
                  data-target="#carouselExampleCaptions"
                  data-slide-to="3"
                ></li>
              </ol>
              <div className="carousel-inner card border-0 shadow-lg p-4">
                <div className="carousel-item active text-center">
                  <div className="row">
                    <div className="col-md-8 col-12 my-auto">
                      <img
                        src={
                          require("../images/customers/customer1.svg").default
                        }
                        className="text-center img-fluid"
                        width="450"
                        height="400"
                        alt="customer1"
                      />
                    </div>
                    <div className="col-md-4 col-12 my-auto">
                      <div className="text-dark">
                        <h3 className="font-weight-bolder ">Customer ABC</h3>
                        <p>
                          We are always available 24/7. Our customers care is always there for you!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item text-center">
                  <div className="row">
                    <div className="col-md-8 col-12 my-auto">
                      <img
                        src={
                          require("../images/customers/customer1.svg").default
                        }
                        className="text-center img-fluid"
                        width="450"
                        height="400"
                        alt="customer2"
                      />
                    </div>
                    <div className="col-md-4 col-12 my-auto">
                      <div className="text-dark">
                        <h3 className="font-weight-bolder ">Customer DRF</h3>
                        <p>
                          Want to speak with the customer care representative? Be patient she'll talk to you in a minute time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item text-center">
                  <div className="row">
                    <div className="col-md-8 col-12 my-auto">
                      <img
                        src={
                          require("../images/customers/customer3.svg").default
                        }
                        className="text-center img-fluid"
                        width="450"
                        height="400"
                        alt="customer3"
                      />
                    </div>
                    <div className="col-md-4 col-12 my-auto">
                      <div className="text-dark">
                        <h3 className="font-weight-bolder ">Customer RTY</h3>
                        <p>
                        Want to speak with the customer care representative? <br />
                        Be patient she'll talk to you in a minute time. She's busy now.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item text-center">
                  <div className="row">
                    <div className="col-md-8 col-12 my-auto">
                      <img
                        src={
                          require("../images/customers/customer4.svg").default
                        }
                        className="text-center img-fluid"
                        width="450"
                        height="400"
                        alt="customer4"
                      />
                    </div>
                    <div className="col-md-4 col-12 my-auto">
                      <div className="text-dark">
                        <h3 className="font-weight-bolder ">Customer RTY</h3>
                        <p>
                        Want to speak with the customer care representative? Be patient she'll talk to you in a minute time.

                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleCaptions"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <h1 className="display-4">Our Team</h1>
      </div>
      <div className="row mb-5">
        <div className="col-md-4 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src={require("../images/CEO.jpeg")}
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Director</h5>
              <div className="card-text text-black-50">
                CEO <p className="float-right">5 years</p>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src={require("../images/member2.jpeg")}
              height="400"
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Team Member</h5>
              <div className="card-text text-black-50">
                Manager <p className="float-right">5 years</p>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12 mx-auto my-2">
          <div className="card border-0 shadow-lg p-4">
            <img
              src={require("../images/member1.jpeg")}
              height="400"
              className="card-img-top"
              alt="director"
            />
            <div className="card-body">
              <h5 className="card-title mb-0">Team Member</h5>
              <div className="card-text text-black-50">
                Manager <p className="float-right">8 years</p>
              </div>
              <h6 className="mt-5">CONNECT</h6>
              <div className="d-flex justify-content-around">
                <FaFacebookSquare className="connect" />
                <AiFillInstagram className="connect" />
                <FaLinkedin className="connect" />
                <IoLogoYoutube className="connect" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
