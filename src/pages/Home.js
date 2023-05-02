import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
// import { Carousel } from "react-bootstrap";

export default function Home() {
  return (
    <>
      {/* <Carousel controls={false}>
        <Carousel.Item>
          <Hero hero="defaultHero"></Hero>
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://zone1-ibizaspotlightsl.netdna-ssl.com/sites/default/files/styles/auto_1500_width/public/article-images/135991/slideshow-1593682789.jpg"
            alt="First slide"
            width={900} 
            height={700}
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Hero hero="defaultHero"></Hero>
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
      <Hero hero="defaultHero"></Hero>

      <Banner
        title="Luxurious Rooms"
        subtitle="deluxe rooms starting at ₦30,000"
      >
        <Link to="/rooms" className="btn btn-primary">
          Our Rooms
        </Link>
      </Banner>
      <Services />
      <FeaturedRooms />
    </>
  );
}

// .defaultHero,
// .roomsHero
{
  /* <marquee direction="up" height="300" width="1000" >This is a really old feature that only works in some browsers. You should never use it for a real website.</marquee> */
}
