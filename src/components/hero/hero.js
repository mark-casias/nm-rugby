import * as React from "react";
import './hero.scss';

const Hero = (props) => {
  // @todo: make the bg image a prop.
  const bgImage = '/img/scrum-fun.jpg'
  return (
    <div className="flex min-h-screen bg-right-bottom bg-cover hero-image" style={{backgroundImage: `url(${bgImage})`}}>
    <div className="container relative z-10 flex items-end p-4 mx-auto">
      <div>
        <div className="float-left px-5 py-4 my-5 content">
          <div class="flex items-center">
          <img src="/img/Y-HS-V2-logo-cropped.webp"
          alt="Y&HS Rugby logo"
          className="mr-5" />
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
