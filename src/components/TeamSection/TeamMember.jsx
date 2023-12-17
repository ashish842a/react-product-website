import React from 'react';

const TeamMember = ({ imageSrc, name, position, description }) => (
  <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
    <img src={imageSrc} className="img-fluid mb-5" alt={name} />
    <h3 className="clas">
      <a href=" ">
        <span className="">{name}</span>
      </a>
    </h3>
    <span className="d-block position mb-4">{position}</span>
    <p>{description}</p>
    <p className="mb-0">
      <a href=" " className="more dark">
        Learn More <span className="icon-arrow_forward"></span>
      </a>
    </p>
  </div>
);

export default TeamMember;
