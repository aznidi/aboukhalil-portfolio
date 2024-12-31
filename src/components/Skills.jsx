import React from "react";

function Skills() {
  return (
    <div>
      <h2>Mes Compétences</h2>
      <h3 style={{ color: '#073e82', textAlign: 'center' }}>Mes Compétences Techniques</h3>
      <div className="skills-container">
        <div className="skill-box">
          <img src="html.jpg" alt="HTML" />
          <span>HTML</span>
        </div>
        <div className="skill-box">
          <img src="css.jpg" alt="CSS" />
          <span>CSS</span>
        </div>
        <div className="skill-box">
          <img src="js.jpg" alt="JavaScript" />
          <span>JavaScript</span>
        </div>
        <div className="skill-box">
          <img src="php.jpg" alt="PHP" />
          <span>PHP</span>
        </div>
        <div className="skill-box">
          <img src="python1.jpg" alt="Python" />
          <span>Python</span>
        </div>
        <div className="skill-box">
          <img src="react.png" alt="React" />
          <span>React</span>
        </div>
        <div className="skill-box">
          <img src="laravel1.jpg" alt="Laravel" />
          <span>Laravel</span>
        </div>
        <div className="skill-box">
          <img src="mysql.jpg" alt="MySQL" />
          <span>MySQL</span>
        </div>
      </div>

      <h3 style={{ color: '#073e82', textAlign: 'center', marginTop: '3cm' }}>Mes Compétences Bureautiques</h3>
      <div className="skills-container">
        <div className="skill-box">
          <img src="word.jpg" alt="Word" />
          <span>Word</span>
        </div>
        <div className="skill-box">
          <img src="excel.jpg" alt="Excel" />
          <span>Excel</span>
        </div>
        <div className="skill-box">
          <img src="ppt.jpg" alt="PowerPoint" />
          <span>PowerPoint</span>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          text-decoration: none;
        }
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: white; /* Fond blanc */
          color: white;
        }
        body::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: -1;
        }
        
        .skills-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          padding-left: 100px;
          padding-right: 100px;
        }
        .skill-box {
          background-color: #073e82;
          border-radius: 10px;
          border: 3px solid #FFD700; /* Bordure jaune */
          padding: 20px;
          width: 200px;
          height: 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 10px rgba(7, 62, 130, 0.5);
          transition: transform 0.5s ease, box-shadow 0.5s ease, border 0.3s ease;
        }
        .skill-box:hover {
          transform: scale(1.1);
          box-shadow: 0 0 20px white; /* Ombre blanche au survol */
          border: 3px solid #FFD700; /* Bordure jaune au survol */
        }
        .skill-box img {
          width: 100px;
          height: 100px;
          margin-bottom: 10px;
          border-radius: 50%;
          object-fit: cover;
          transition: box-shadow 0.3s ease;
          background-color: rgb(255, 255, 255);
          border: 2px solid white; /* Bordure blanche de 2px autour de l'image */
        }
        .skill-box:hover img {
          box-shadow: 0 0 15px #FFD700; /* Ombre jaune autour de l'image au survol */
        }
        .skill-box span {
          font-size: 16px;
          color: #fbfbfb;
          font-weight: bold;
        }
        h2 {
          
          margin-bottom: 2cm; /* Espacement de 2cm entre le grand titre et le sous-titre */
          text-align: center;
          color: #FFD700;
           fontSize: "2.5rem",
      fontWeight: "bold",
      
      
        }
        h3 {
          font-size: 24px;
          margin-bottom: 40px;
          text-align: center;
          color: #073e82;
           
      fontWeight: "bold",
     
      textAlign: "center",
        }
        .cv-button {
          background-color: #FFD700;
          color: #2c3e50;
          font-size: 18px;
          font-weight: bold;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        .cv-button:hover {
          background-color: #ffffff;
          color: #2c3e50;
        }
      `}</style>
    </div>
  );
}

export default Skills;
