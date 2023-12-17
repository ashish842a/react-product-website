import React from 'react';
import Feature from './Feature';

import TruckIcon from "../../images/truck.svg"
import BagIcon from "../../images/bag.svg"
import SupportIcon from "../../images/support.svg"
import ReturnIcon from "../../images/return.svg"
import WhyImage from "../../images/why-choose-us-img.jpg"

function WhyChooseSection() {
  const features = [
    { imgUrl: TruckIcon, title: "Fast & Free Shipping", desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate" },
    { imgUrl: BagIcon, title: "Easy to Shop", desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate" },
    { imgUrl: SupportIcon, title: "24/7 Support", desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate" },
    { imgUrl: ReturnIcon, title: "Hassle Free Returns", desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate" },
  ];

  return (
    <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <h2 className="section-title">Why Choose Us</h2>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

            <div className="row my-5">
              {features.map((feature, index) => (
                <Feature
                  key={index}
                  imgUrl={feature.imgUrl}
                  title={feature.title}
                  desc={feature.desc}
                />
              ))}
            </div>
          </div>

          <div className="col-lg-5">
            <div className="img-wrap">
              <img src={WhyImage} alt="WhyImage" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
  );
}

export default WhyChooseSection;
