import React from "react";
import "../css/carousel.css"

function About() {
  return (
        <div className="justify-center container mx-auto bg-gray-200 rounded-xl border p-8 m-10 h-screen">
          <h1 className="text-2xl">Hello!</h1>
          <br></br>
          <p className="font-bold text-xl max-w-75%">Welcome!</p>
          <br></br>
        <div className="carousel_wrapper">
          <div className="carousel">
            <div className="slide one">
              <img src="https://photos.app.goo.gl/Hvk5Vm4oGCYgi3Tu9" alt="Scott" />
            </div>
            <div className="slide two">
              <img src="https://photos.app.goo.gl/MkkUNM73FUpiqxw26" alt="Austin" />
            </div>
            <div className="slide three">
              <img src="https://photos.app.goo.gl/rrdzSJ1RQACBvyW26" alt="Dylan" />
            </div>
        </div>
      </div>
    </div>  
  );
}

export default About;