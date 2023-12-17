import React from 'react';


import TruckIcon from "../../images/truck.svg"
import BagIcon from "../../images/bag.svg"
import SupportIcon from "../../images/support.svg"
import ReturnIcon from "../../images/return.svg"

// Features data
const featuresData = [
  {
    icon: TruckIcon,
    title: 'Fast & Free Shipping',
    description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.',
  },
  {
    icon: BagIcon,
    title: 'Easy to Shop',
    description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.',
  },
  {
    icon: SupportIcon,
    title: '24/7 Support',
    description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.',
  },
  {
    icon: ReturnIcon,
    title: 'Hassle-Free Returns',
    description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.',
  },
  {
    icon: TruckIcon,
    title: 'Fast & Free Shipping',
    description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.',
  },
  {
    icon: BagIcon,
    title: 'Easy to Shop',
    description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.',
  },
  {
    icon: SupportIcon,
    title: '24/7 Support',
    description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.',
  },
  {
    icon: ReturnIcon,
    title: 'Hassle-Free Returns',
    description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.',
  },
];
  

function Feature({ icon, title, description }) {
  return (
    <div className="col-6 col-md-6 col-lg-3 mb-4">
      <div className="feature">
        <div className="icon">
          <img src={icon} alt="data" className="img-fluid" />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function WhyChooseUsSection() {
  return (
    <div className="why-choose-section">
      <div className="container">
        <div className="row my-5">
          {featuresData.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUsSection;
