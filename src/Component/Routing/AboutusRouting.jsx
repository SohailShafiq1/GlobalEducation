import React from 'react';
import { Routes, Route } from 'react-router-dom';

import OurPartners from '../About us/Components/Partners/Partners';
import Team from '../About us/Components/Team/Team';
import TimeLine from '../About us/Components/Timeline/TimeLine';
import WhoWeAre from '../About us/Components/Who we are/WhoWeAre';

const AboutusRouting = () => {
  return (
    <Routes>
     <Route path="/ourpartners" element={<OurPartners />} />
      {/* <Route path="/team" element={<Team />} /> */}
      <Route path="/timeLine" element={<TimeLine />} />
      <Route path="/whoweare" element={<WhoWeAre />} />
    </Routes>
  );
};

export default AboutusRouting;
