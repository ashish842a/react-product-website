import React from 'react';

import Img1 from "../../images/img-grid-1.jpg";
import Img2 from "../../images/img-grid-2.jpg";
import Img3 from "../../images/img-grid-3.jpg";

function WeHelpSection() {
  const imagePaths = [Img1, Img2, Img3];

  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-7 mb-5 mb-lg-0">
          <div className="imgs-grid">
            {imagePaths.map((path, index) => (
              <div key={index} className={`grid grid-${index + 1}`}>
                <img src={path} alt={`Untree.co ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-5 ps-lg-5">
          <h2 className="section-title mb-4">We Help You Make Modern Interior Design</h2>
          <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>

          <ul className="list-unstyled custom-list my-4">
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
            <li>Donec vitae odio quis nisl dapibus malesuada</li>
          </ul>
          <p><a href=" " className="btn">Explore</a></p>
        </div>
      </div>
    </div>
  );
}

export default WeHelpSection;
