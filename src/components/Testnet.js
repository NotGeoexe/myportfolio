import React from 'react';
import valorant from "../assets/img/valorant.png";
import minecraft from "../assets/img/minecraft.jpg";
import fallguys from "../assets/img/fallguys.jpg";
import pes from "../assets/img/pes.jpg";
import tom from "../assets/img/tom.jpg";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
<script async defer src="https://buttons.github.io/buttons.js"></script>

export const Testnet = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="testnet" id="testnet">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2> GAMES</h2>
                        <p>I'm about to start a game. Want to join me ? </p>
                        {/* <a class="github-button" href="https://github.com/nodexcapital/testnet"  target="_blank" data-icon="octicon-star" data-size="large" data-show-count="true">Github Stars ⭐</a> */}
                        <br></br>
                        <br></br>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                             <img src={valorant} alt="Image" />
                             <h5>notgeo17727#8361</h5>
                            </div>

                            <div className="item">
                            <img src={minecraft} alt="Image" />
                              <h5>gamer17727</h5>
                            </div>

                            <div className="item">
                             <img src={fallguys} alt="Image" />
                              <h5>Not!Geo17727</h5>
                            </div>

                            <div className="item">
                            <img src={pes} alt="Image" />
                             <h5>Not!Geo17727</h5>
                            </div>

                            <div className="item">
                             <img src={tom} alt="Image" />
                              <h5>Tomb Rider</h5>
                            </div>

                            {/* <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/defund" target="_blank"> <img src={defund} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/defund" target="_blank">  <h5>Defund</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/dymension" target="_blank"> <img src={dymension} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/dymension" target="_blank">  <h5>Dymnension</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/gitopia" target="_blank"> <img src={gitopia} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/gitopia" target="_blank"> <h5>Gitopia</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/humans" target="_blank"> <img src={humans} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/humans" target="_blank"> <h5>Humans AI</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/lava" target="_blank"><img src={lava} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/lava" target="_blank"> <h5>Lava Network</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/mars" target="_blank"> <img src={mars} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/mars" target="_blank"> <h5>Mars Protocol</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/neutron" target="_blank"> <img src={neutron} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/neutron" target="_blank"> <h5>Neutron</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/nibiru" target="_blank"><img src={nibiru} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/nibiru" target="_blank"> <h5>Nibiru</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/nois" target="_blank"><img src={nois} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/nois" target="_blank"> <h5>Nois Network</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/nolus" target="_blank"><img src={nolus} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/nolus" target="_blank"> <h5>Nolus</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/okp4" target="_blank"><img src={okp4} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/okp4" target="_blank"><h5>Okp4 Network</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/uptick" target="_blank"><img src={uptick} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/uptick" target="_blank"> <h5>Uptick</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/quasar" target="_blank"><img src={quasar} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/quasar" target="_blank"> <h5>Quasar</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/realio" target="_blank"> <img src={realio} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/realio" target="_blank"> <h5>Realio Network</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/sei" target="_blank"> <img src={sei} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/sei" target="_blank"> <h5>Sei Network</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/sigma" target="_blank"><img src={saage} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/sigma" target="_blank"><h5>Sge Network</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/source" target="_blank"><img src={source} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/source" target="_blank"><h5>Source Protocol</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/sui" target="_blank"><img src={sui} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/sui" target="_blank"><h5>Sui Network</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/terp" target="_blank"><img src={terp} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/terp" target="_blank"><h5>Terp Network</h5></a>
                            </div>

                            <div className="item">
                            <a href="https://github.com/nodexcapital/testnet/tree/main/tidechain" target="_blank"><img src={tidefi} alt="Image" /></a>
                            <a href="https://github.com/nodexcapital/testnet/tree/main/tidechain" target="_blank"><h5>Tidechain</h5></a>
                            </div> */}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
  
}
