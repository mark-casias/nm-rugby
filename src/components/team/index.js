import React from 'react';

const TeamPage = (props) => {

  return `
  <div className="team">
    <h2>LA Nukes</h2>
    <div className="team__logo"></div>
    <div className="team__contact">
      <h3>Contact Info:</h3>
      <p><strong>Club Email:</strong> nukesrugbyclub@gmail.com
      <ul className="team_coaches">
        <li>Coach Mateo Cardiel Phone - (505) 500-6497 - Primary Contact</li>
        <li>Coach Demetrio Cardiel Phone - (505) 250-8005</li>
      </ul>
    </div>
    <div className="team__about">
      <h3>About the club:</h3>
      <p>The U-19 high school rugby team of Los Alamos, NM. The Los Alamos Rugby Football Club was founded in 1990 as one of the first boys high school rugby teams in the state. In 2012, the club was renamed as the Los Alamos Nukes Rugby Club. Back-to-back New Mexico 10's State Champions for the 2016 and 2017 seasons.</p>
    </div>
  </div>
  `;
}

export default TeamPage;
