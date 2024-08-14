import React, { useState } from 'react';


function SkillsEducation() {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <div>
      <div className="tab-titles">
        <p 
          className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} 
          onClick={() => setActiveTab('skills')}
        >
          Skills
        </p>
        <p 
          className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} 
          onClick={() => setActiveTab('education')}
        >
          Education
        </p>
      </div>
      {activeTab === 'skills' && (
        <div className="tab-content active-tab" id="skills">
          <ul>
            <li>Python</li>
            <li>PowerBi</li>
            <li>Machine Learning</li>
            <li>SQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Excel</li>
            <li>JavaScript (Basic)</li>
            <li>React (Basic)</li>
          </ul>
        </div>
      )}
      {activeTab === 'education' && (
        <div className="tab-content active-tab" id="education">
          <ul>
            <li>
              <span>M.Sc (Data Science)</span>
              <br />
              From Dr. D. Y. Patil Arts, Commerce and Science College Pimpri with{' '}
              <span style={{ color: '#ff004f' }}>84%</span>
            </li>
            <li>
              <span>B.Sc (Mathematics)</span>
              <br />
              From Shri Shiv Chhatrapati College Junnar with{' '}
              <span style={{ color: '#ff004f' }}>82.55%</span>
            </li>
            <li>
              <span>12th (Science)</span>
              <br />
              From G.R.P.S college Narayangoan with{' '}
              <span style={{ color: '#ff004f' }}>53.80%</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SkillsEducation;
