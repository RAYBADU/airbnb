import React from "react";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import Title from "./components/Title";
import img1 from "./assets/1.avif";
import img2 from "./assets/2.avif";
import img3 from "./assets/3.avif";
import img4 from "./assets/4.avif";
import img5 from "./assets/5.avif";
import img6 from "./assets/6.avif";
import img7 from "./assets/7.avif";
import img8 from "./assets/8.avif";
import img9 from "./assets/9.avif";
import img10 from "./assets/10.avif";
import img11 from "./assets/11.avif";
import img12 from "./assets/12.avif";
import img13 from "./assets/13.avif";
import img14 from "./assets/14.avif";
import img15 from "./assets/15.avif";
import img16 from "./assets/16.avif";
import img17 from "./assets/17.avif";
import img18 from "./assets/18.avif";
import img19 from "./assets/19.avif";
import img20 from "./assets/20.avif";

const App = () => {
  const cardsData = [
    {
      img: img1,
      id: 1,
      title: "Condo in Tema",
      price: "$120/night",
      ratings: "4.8 (200 reviews)",
    },

    {
      img: img2,
      id: 2,
      title: "Apartment in East Legon",
      price: "$240/night",
      ratings: "5.0 (1000 reviews)",
    },

    {
      img: img3,
      id: 3,
      title: "Apartment in Madina",
      price: "$140/night",
      ratings: "4.5 (200 reviews)",
    },
    {
      img: img4,
      id: 4,
      title: "Apartment in Spintex",
      price: "$140/night",
      ratings: "4.0 (3040 reviews)",
    },
    {
      img: img5,
      id: 5,
      title: "Apartment in Accra",
      price: "$140/night",
      ratings: "5.0 (4000 reviews)",
    },
  ];

  const cardsData2 = [
    {
      img: img6,
      id: 6,
      title: "Flat in Chapel Hill",
      price: "$150/night",
      ratings: "4.1 (100 reviews)",
    },

    {
      img: img7,
      id: 7,
      title: "Apartment in New Takoradi",
      price: "$330/night",
      ratings: "5.0 (900 reviews)",
    },

    {
      img: img8,
      id: 8,
      title: "Apartment at Good News",
      price: "$490/night",
      ratings: "4.9 (134 reviews)",
    },
    {
      img: img9,
      id: 9,
      title: "Apartment in Kojokrom",
      price: "$157/night",
      ratings: "3.3 (454 reviews)",
    },
    {
      img: img10,
      id: 10,
      title: "Apartment in BU",
      price: "$5000/night",
      ratings: "5.0 (4000 reviews)",
    },
  ];

  const cardsData3 = [
    {
      img: img11,
      id: 11,
      title: "Flat in Ahodwo",
      price: "$150/night",
      ratings: "4.1 (100 reviews)",
    },

    {
      img: img12,
      id: 12,
      title: "Apartment in Asokwa",
      price: "$330/night",
      ratings: "5.0 (900 reviews)",
    },

    {
      img: img13,
      id: 13,
      title: "Apartment at Patasi",
      price: "$490/night",
      ratings: "4.9 (134 reviews)",
    },
    {
      img: img14,
      id: 14,
      title: "Apartment in Bantama",
      price: "$157/night",
      ratings: "3.3 (454 reviews)",
    },
    {
      img: img15,
      id: 15,
      title: "Apartment in Kumasi Central",
      price: "$5000/night",
      ratings: "5.0 (4000 reviews)",
    },
  ];

  const cardsData4 = [
    {
      img: img16,
      id: 16,
      title: "Flat in Dubai Marina",
      price: "$988/night",
      ratings: "5.5 (390 reviews)",
    },

    {
      img: img17,
      id: 17,
      title: "Apartment in JBR",
      price: "$3335/night",
      ratings: "5.8 (254 reviews)",
    },

    {
      img: img18,
      id: 18,
      title: "Apartment at Palm Jumeirah",
      price: "$998/night",
      ratings: "4.9 (587 reviews)",
    },
    {
      img: img19,
      id: 19,
      title: "Apartment in Deira",
      price: "$789/night",
      ratings: "3.8 (876 reviews)",
    },
    {
      img: img20,
      id: 20,
      title: "Apartment in Downtown Dubai",
      price: "$10,000/night",
      ratings: "5.0 (4000 reviews)",
    },
  ];

  return (
    <div>
      <Nav />
      <Title city="Ayawaso West" />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-8 py-10">
        {cardsData.map((card) => (
          <Cards
            key={card.id}
            img={card.img}
            title={card.title}
            price={card.price}
            ratings={card.ratings}
          />
        ))}
      </div>

      {/* ........................................ */}

      <Title city="Takoradi" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-8 py-10">
        {cardsData2.map((card) => (
          <Cards
            key={card.id}
            img={card.img}
            title={card.title}
            price={card.price}
            ratings={card.ratings}
          />
        ))}
      </div>

      {/* ........................................ */}

      <Title city="Kumasi " />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-8 py-10">
        {cardsData3.map((card) => (
          <Cards
            key={card.id}
            img={card.img}
            title={card.title}
            price={card.price}
            ratings={card.ratings}
          />
        ))}
      </div>

      {/* ........................................ */}

      <Title city="Dubai " />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-8 py-10">
        {cardsData4.map((card) => (
          <Cards
            key={card.id}
            img={card.img}
            title={card.title}
            price={card.price}
            ratings={card.ratings}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
