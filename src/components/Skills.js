import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="main-skills">
          <div className="skill">
            <label>JS: 85%</label>
            <div className="skill-bar"><div className="skill-level" style={{width: '85%'}}></div></div>
          </div>
          <div className="skill">
            <label>React: 80%</label>
            <div className="skill-bar"><div className="skill-level" style={{width: '80%'}}></div></div>
          </div>
          <div className="skill">
            <label>Node: 85%</label>
            <div className="skill-bar"><div className="skill-level" style={{width: '85%'}}></div></div>
          </div>
          <div className="skill">
            <label>Mongo: 80%</label>
            <div className="skill-bar"><div className="skill-level" style={{width: '80%'}}></div></div>
          </div>
        </div>
        <div className="other-skills">
          <div className="other-skill-box">HTML</div>
          <div className="other-skill-box">CSS</div>
          <div className="other-skill-box">jQuery</div>
          <div className='other-skill-box'>Bootstrap</div>
          <div className="other-skill-box">Angular</div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
