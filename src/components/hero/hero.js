import * as React from "react";
import { Link } from 'gatsby';
import './hero.scss';

const Hero = (props) => {

  const r = Math.floor(Math.random() * 7);
  const bgImage = (props.hero && props.hero.image) ? props.hero.image : `/img/hero-${r}.jpg`
  return (
    <div className="flex bg-center bg-cover hero-image" style={{backgroundImage: `url(${bgImage})`}}>
    <div className="container relative z-10 flex items-end p-4 mx-auto">
      <div>
        <div className="float-left px-5 py-4 mb-5 content">
          <div class="flex items-center">
            <Link to="/">
              <img src="/img/Y-HS-V2-logo-cropped.webp"
                alt="Y&HS Rugby logo"
                className="mr-5"
              />
            </Link>
          { props.title && (<h1 className="mb-3 text-5xl heading md:text-4xl">{ props.title }</h1>)}
          </div>
          { props.tagline && (<div className="hidden leading-normal text sm:block">{ props.tagline }</div>)}

        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero;
