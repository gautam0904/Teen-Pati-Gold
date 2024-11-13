"use client"; // Mark this component as a client component

import { useState, useEffect } from "react";
import Image from "next/image"; // Import the Image component
import styles from "./page.module.css"; // Adjust the import based on your structure
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const carouselItems = [
  {
    src: "/asset/Secure-and-Fair-1.webp",
    alt: "Step 1",
    caption: "Step 1: Open the app and create an account.",
  },
  {
    src: "/asset/Online-Teen-Patti.webp",
    alt: "Step 2",
    caption: "Step 2: Choose your preferred game mode.",
  },
  {
    src: "/asset/Cards-in-Hand-Victory-in-Mind.webp",
    alt: "Step 3",
    caption: "Step 3: Invite friends or join an online game.",
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Teen Patti Gold</title>
        <meta
          name="description"
          content="Download Teen Patti, the ultimate card game for your mobile device!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>
          Teen Patti Gold{" "}
          <a
            href="https://www.earntp.com/m/jny6cm?f=w&p=wa&l=en&tp=m74"
            className={styles.downloadButton}
          >
            Download
          </a>
        </h1>
        <p>
          The ultimate{" "}
          <a
            href="https://www.earntp.com/gold/2z249v?f=w&p=wa&tp=gold1"
          >
            card game
          </a>{" "}
          experience!
        </p>
      </header>

      <section className={styles.carouselSection}>
        <h2 className={"text-white"}>Teen Patti Gold</h2>
        <div className={`carousel`}>
          <div className={`carousel-inner`}>
            {carouselItems.map((item, index) => (
              <div
                className={`carousel-item ${index === currentIndex ? "active" : ""}`}
                key={index}
              >
                <a href="https://www.earntp.com/m/jny6cm?f=w&p=wa&l=en&tp=m74">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    className="img-fluid"
                    width={600} // Specify width for optimization
                    height={400} // Specify height for optimization
                  />
                </a>
                <div className="carousel-caption d-none d-md-block">
                  <p>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={prevSlide}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={nextSlide}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <main className={styles.main}>
        <section className={styles.infoSection}>
          <h2>About Teen Patti</h2>
          <div className="row">
            <div className="col-lg-6 p-2">
              <p>
                Teen Patti is a popular Indian card game that brings together
                friends and family for hours of fun and excitement. With
                stunning graphics, smooth gameplay, and multiple game modes,
                Teen Patti offers a thrilling experience for players of all
                skill levels. Teen Patti Gold isn’t just a game; it’s a modern
                take on the beloved traditional card game. Welcome to the
                thrilling world of Teen Patti Games, where traditional card
                gaming meets innovation and excitement. Teen Patti, a beloved
                Indian card game, has taken a bold step forward with the
                emergence of Teen Patti App.{" "}
                <a
                  href="https://www.earntp.com/m/jny6cm?f=w&p=wa&l=en&tp=m74"
                >
                  Download for Android
                </a>
              </p>
            </div>
            <div className="col-lg-6 p-2">
              <Image
                src="/asset/image1.jpg"
                alt="image 1"
                className="img-fluid m-2 w-100 d-flex align-items-center justify-content-center"
                width={150} // Specify width for optimization
                // Specify height for optimization
              />
            </div>
          </div>
         
          <div className="row">
            <div className="col-lg-6 p-2">
              <Image
                src="/asset/image2.jpg"
                alt="image 2"
                className="img-fluid m-2 w-100 d-flex align-items-center justify-content-center"
                width={300} // Specify width for optimization
              />
            </div>
            <div className="col-lg-6 p-2">
              <p>
            In Teen Patty, loose and tight refers to the general tendency of
            players to play cards or fold quickly after the first round. There
            is no universally accepted odds or percentage of hands played, but
            &quot;strong&quot; players will generally prefer to hold weak hands, while
            &quot;weak&quot; players will bet more on hands, thus playing more competitive
            hands.
            <a
              href="https://www.earntp.com/gold/2z249v?f=w&p=wa&tp=gold1"
            >
              Try it now
            </a>
          </p>
            </div>
          </div>
          <div className="row">
          
            <div className="col-lg-6 p-2">
              <p>
                Usually a bet or starting price is placed on the table (pot).
                This can be equal bets on all players or a larger bet from one
                player (more parts than the rotation). Ante is a mistake bet
                where each player puts an equal amount of money or chips into
                the pot before the cards are dealt. It is usually a unit (the
                value or minimum in play) or a small percentage such as half or
                a quarter of the minimum bet. The ante that each player pays
                ensures that the player who folds loses money (albeit slowly) on
                each turn, thus encouraging each player to reach for a small
                playing hand rather than an open hand form.
              </p>
            </div>
              <div className="col-lg-6 p-2">
              <Image
                src="/asset/image3.jpg"
                alt="image 3"
                className="img-fluid d-flex align-items-center justify-content-center"
                width={350} // Specify width for optimization// Specify height for optimization
              />
            </div>
          </div>
        </section>

        <section className={styles.tableSection}>
          <h2>Game Features</h2>
          <table className={styles.featuresTable}>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Multiplayer</td>
                <td>Play with friends or join online rooms.</td>
              </tr>
              <tr>
                <td>Graphics</td>
                <td>Stunning graphics and immersive gameplay.</td>
              </tr>
              <tr>
                <td>Games</td>
                <td>Multiple game modes: Classic, Joker, and more.</td>
              </tr>
              <tr>
                <td>Events</td>
                <td>Regular updates and exciting events.</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.downloadSection}>
          <h2>Download Now</h2>
          <p>
            Click the button below to{" "}
            <a
              href="https://www.earntp.com/m/jny6cm?f=w&p=wa&l=en&tp=m74"
            >
              download
            </a>{" "}
            Teen Patti and start playing today!
          </p>
          <a
            href="https://www.earntp.com/gold/2z249v?f=w&p=wa&tp=gold1"
            className={styles.downloadButton}
          >
            Download for Android
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <h1>
          <a
            href="https://www.earntp.com/m/jny6cm?f=w&p=wa&l=en&tp=m74"
            className="text-white text-decoration-none"
          >
            Teen Patti Gold
          </a>
        </h1>
        <p>&copy; 2024 Teen Patti. All rights reserved.</p>
      </footer>
    </div>
  );
}
