import React from 'react';

function Resume() {
  return (
    <div className="resume-page">
      <h2>Skills</h2>
      <ul className="skills-list">
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
        {/* Add more skills */}
      </ul>
      <div className="resume-link">
        <a href="path_to_resume" target="_blank" rel="noopener noreferrer">Download Resume</a>
      </div>
    </div>
  );
};

export default Resume;
