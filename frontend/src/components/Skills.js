// Skills.js

import React from 'react';
import './Skills.css'; // Import your CSS file

const Skills = () => {
    return (
        <div className="skills-container">
            <h2 className="experience-sub-title">Libraries & Frameworks</h2>
            <div className="article-container">
                <article className="skill">
                    <div>
                        <h3>React</h3>
                        <p>Intermediate</p>
                    </div>
                </article>
                <article className="skill">
                    <div>
                        <h3>Node.js</h3>
                        <p>Intermediate</p>
                    </div>
                </article>
                <article className="skill">
                    <div>
                        <h3>Express.js</h3>
                        <p>Intermediate</p>
                    </div>
                </article>
                <article className="skill">
                    <div>
                        <h3>MongoDB</h3>
                        <p>Intermediate</p>
                    </div>
                </article>
            </div>
            <h2 className="experience-sub-title">Languages & Tools</h2>
            <div className="article-container">
                <article className="skill">
                    <div>
                        <h3>JavaScript</h3>
                        <p>Intermediate</p>
                    </div>
                </article>
                <article className="skill">
                    <div>
                    <h3>TypeScript</h3>
                        <p>Intermediate</p>
                    </div>
                </article>
                <article className="skill">
                    <div>
                        <h3>Git</h3>
                        <p>Intermediate</p>
                    </div>
                </article>
                <article className="skill">
                    <div>
                        <h3>GitHub</h3>
                        <p>Intermediate</p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Skills;
