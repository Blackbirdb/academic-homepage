import { useState } from 'react';
import { bio, publications, projects } from './data';

function App() {
  const highlightAuthor = (authors) => {
    const myName = "Baodai Huang";
    if (!authors.includes(myName)) return authors;
    const parts = authors.split(myName);
    return (
      <>
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i !== parts.length - 1 && <strong style={{ color: '#000' }}>{myName}</strong>}
          </span>
        ))}
      </>
    );
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="profile-section">
          <div className="profile-limit">
            <img src="https://via.placeholder.com/150" alt={bio.name} className="profile-photo" />
          </div>
          <h1>{bio.name}</h1>
          <p className="role">{bio.role}</p>
          <p className="department">{bio.department}</p>
          <p className="university">{bio.university}</p>

          <div className="contact-links">
            <a href={`mailto:${bio.email}`}>Email</a>
            <span className="separator">•</span>
            <a href={bio.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <span className="separator">•</span>
            <a href={bio.scholar} target="_blank" rel="noopener noreferrer">Google Scholar</a>
          </div>

          <div className="cv-link">
            <a href="/cv.pdf" className="button">Download CV</a>
          </div>
        </div>
      </aside>

      <main className="content">
        <section id="about">
          <h2>About</h2>
          {bio.description.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </section>



        <section id="publications">
          <h2>Publications</h2>
          <div className="publication-list">
            {publications.map((pub, index) => (
              <div key={index} className="publication-item">
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-authors">{highlightAuthor(pub.authors)}</p>
                <p className="pub-conf">{pub.conference}</p>
                <div className="pub-links">
                  {Object.entries(pub.links).map(([key, url]) => (
                    <a key={key} href={url} className="link-tag">{key}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="publication-list">
            {projects.map((proj, index) => (
              <div key={index} className="publication-item">
                <h3 className="pub-title">{proj.title}</h3>
                <p className="pub-authors">{proj.description}</p>
                <div className="pub-links">
                  {Object.entries(proj.links).map(([key, url]) => (
                    <a key={key} href={url} className="link-tag">{key}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
