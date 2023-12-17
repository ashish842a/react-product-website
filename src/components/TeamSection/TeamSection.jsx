import React from 'react';
import TeamMember from './TeamMember';

import Person1Img from '../../images/person_1.jpg'
import Person2Img from '../../images/person_2.jpg'
import Person3Img from '../../images/person_3.jpg'
import Person4Img from '../../images/person_4.jpg'

const teamMembers = [
  {
    id: 1,
    imageSrc:Person1Img ,
    name: 'Lawson Arnold',
    position: 'CEO, Founder, Atty.',
    description: 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    id: 2,
    imageSrc: Person2Img,
    name: 'Jeremy Walker',
    position: 'CEO, Founder, Atty.',
    description: 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    id: 3,
    imageSrc: Person3Img,
    name: 'Patrik White',
    position: 'CEO, Founder, Atty.',
    description: 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    id: 4,
    imageSrc: Person4Img,
    name: 'Kathryn Ryan',
    position: 'CEO, Founder, Atty.',
    description: 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
];

function TeamSection() {
  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-5 mx-auto text-center">
            <h2 className="section-title">Our Team</h2>
          </div>
        </div>

        <div className="row">
          {teamMembers.map((member) => (
            <TeamMember
              key={member.id}
              imageSrc={member.imageSrc}
              name={member.name}
              position={member.position}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
