import React from 'react';
import logo_sq from '../../assets/media/logo_sq.png';

function Footer() {
  return (
    <footer className="main-footer pt-50 pb-50" style={{backgroundImage: "url(./assets/demo/bg/bg-40.jpg)"}}>
      <div className="container">
        <div className="row d-flex flex-wrap">
          <div className="lqd-column col-md-3 col-sm-6">
            <div className="d-flex justify-content-center flex-column">
              <figure className="text-center mb-4">
                <img src={logo_sq} alt="Virtus"/>
              </figure>
              <ul className="social-icon social-icon-lg d-flex justify-content-center">
                <li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#" target="_blank"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#" target="_blank"><i className="fa fa-youtube-play"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="lqd-column col-md-3 col-sm-6">
            <h3 className="widget-title mb-30 mt-0 text-white font-size-15 text-uppercase ltr-sp-2">Navigation
            </h3>
            <ul className="lqd-custom-menu reset-ul font-size-14 lh-2">
              <li className="mb-1"><a href="#miningcoin">Mining Coin</a></li>
              <li className="mb-1"><a href="#whitepaper">Whitepaper</a></li>
              <li className="mb-1"><a href="#islandmining">What We Do</a></li>
              <li className="mb-1"><a href="#works">Token Sale</a></li>
              <li className="mb-1"><a href="#roadmap">Roadmap</a></li>
              <li className="mb-1"><a href="#team">Team</a></li>
              <li className="mb-1"><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="lqd-column col-md-3 col-sm-6">
            <h3 className="widget-title mb-30 mt-0 text-white font-size-15 text-uppercase ltr-sp-2">Contact Us
            </h3>
            <ul className="lqd-custom-menu reset-ul font-size-14 lh-2">
              <li className="mb-1"><a href="info@islandmining.io">info@islandmining.io</a></li>
              <br/>
              <li className="mb-1"><a href="#">Grand Cayman,</a></li>
              <li className="mb-1"><a href="#">Cayman Islands</a></li>
              <li className="mb-1"><a href="#">KY1-1003</a></li>
            </ul>
          </div>
          <div className="lqd-column col-md-3 col-sm-6">
            <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css"/>
              <div id="mc_embed_signup">
                <form action="/signup" method="post" id="mc-embedded-subscribe-form"
                      name="mc-embedded-subscribe-form"
                      className="validate" target="_blank" noValidate="">
                  <div id="mc_embed_signup_scroll">
                    <label htmlFor="mce-EMAIL" className="widget-title mb-30 text-white font-size-12 text-uppercase ltr-sp-2">
                      Subscribe to our Mailing List
                    </label>
                    <input type="email" value="" name="email" className="email input-email w-100" id="mce-EMAIL" placeholder="email address" required=""/>
                      <div style={{position: 'absolute', left: '-5000px', ariaHidden: "true"}}>
                        <input type="text" name="b_bce954e7f6aba08eb6414eff1_59f6b8c7f9" tabIndex="-1" value=""/>
                      </div>
                      <div className="clear mt-30">
                        <button className="btn btn-solid circle btn-bordered border-thin btn-gradient px-3">
                          <span>
                            <span className="btn-gradient-bg"></span>
                            <span className="btn-txt">Subscribe</span>
                            <span className="btn-icon">
                              <i className="fa fa-long-arrow-right"></i>
                            </span>
                            <span className="btn-gradient-bg btn-gradient-bg-hover"></span>
                            <svg xmlns="http://www.w3.org/2000/svg"  xml_space="preserve" className="btn-gradient-border" width="100%" height="100%">
                              <defs>
                                <linearGradient id="svg-border-5c79175df082b" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop offset="0%"></stop>
                                  <stop offset="100%"></stop>
                                </linearGradient>
                              </defs>
                              <rect x="0.5" y="0.5" rx="30" ry="30" width="100%" height="100%" stroke="url(#svg-border-5c79175df082b)"></rect>
                            </svg>
                          </span>
                        </button>
                      </div>
                  </div>
                </form>
              </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
