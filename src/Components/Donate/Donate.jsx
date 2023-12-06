import React from 'react';
import './Donate.css';

const Donate = () => (

  <div className="donate-wrapper">
    <div className="donate-content one">
      <h2>Changed Over</h2>

      <span style={{ fontWeight: '700', fontSize: '20px', paddingBottom: '10px' }}>1000</span>
      <p>
        individuals in the community through our programs
      </p>
    </div>
    <div className="donate-content two">
      <h2>Donate Money</h2>

      <p>
        Help us continue our mission to build better future together.
      </p>
      <button className="btn donate-btn">Donate</button>
    </div>
    <div className="donate-content three">
      <h2>Be a volunteer</h2>

      <p>
        Join our team and be a part of the change.
      </p>
      <button className="btn donate-btn vol-btn">Volunteer</button>
    </div>
  </div>

);

export default Donate;
