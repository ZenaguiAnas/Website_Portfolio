import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    title: "Agile Project Management",
    image: "/certifications/agile.png",
    link: "https://www.coursera.org/account/accomplishments/certificate/2CSQFV4PP7US",
  },
  {
    title: "Python Programmer Bootcamp",
    image: "/certifications/pyth2.jpg",
    link: "https://learn.365datascience.com/certificates/CC-76381FBEB1/",
  },
  {
      title: "Oracle Cloud Infrastructure",
      image: "/certifications/oracleAi.png",
      link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=FC0C8F61364ED481E9EFFCF0D9D22EAC1335CCE53AE7AB98292D521C88BB2B4D",
  },
  {
    title: "Introduction to Python",
    image: "/certifications/pyth1.jpg",
    link: "https://learn.365datascience.com/certificates/CC-53D97FA342/",
  },
];

const Certifications = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="certifications" className="w-full py-16 bg-gray-100">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
        <Slider {...settings}>
          {certifications.map((cert, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 duration-300">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-64 object-cover "
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-3 py-1 mt-4 text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-full shadow-lg transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
                  >
                    View Certification
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Certifications;
