import React from "react";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navdiv">
          {/* Logo */}
          <div className="logo">
            <span className="lightblue">&lt;</span>
            <span className="darkblue">M</span>
            <span className="lightblue">ed</span>
            <span className="darkblue">A</span>
            <span className="lightblue">li</span>
            <span className="lightblue">/&gt;</span>
          </div>

          {/* Liens */}
          <ul className="nav-links">
            <li>
              <a href="Hero.jsx">Accueil</a>
            </li>
            <li>
              <a href="Parcours.jsx">Parcours</a>
            </li>
            <li>
              <a href="skills.jsx">Compétences</a>
            </li>
            <li>
              <a href="contact.jsx">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

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
          background-color: #f7f9fc;
          color: #073e82;
          padding-top: 70px; /* Pour éviter que le contenu soit caché derrière la navbar */
        }
        .navbar {
          background: #073e82;
          font-family: Calibri, sans-serif;
          padding: 15px;
          width: 100%;
          height: 70px;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
        }
        .navdiv {
          display: flex;
          align-items: center;
          justify-content: space-between; /* Les liens sont à droite */
          width: 100%;
        }
        .logo {
          margin-left: 20px; /* Espacement à gauche pour le logo */
        }
        .logo .lightblue {
          color: white;
          font-size: 30px;
          font-weight: 600;
        }
        .logo .darkblue {
          color: #ffd700;
          font-size: 30px;
          font-weight: 600;
        }
        .nav-links {
          display: flex;
          gap: 25px;
          margin-right: 20px; /* Espacement à droite pour les liens */
        }
        .nav-links li {
          list-style: none;
          position: relative;
        }
        .nav-links li a {
          color: #ffd700;
          font-size: 20px;
          font-weight: bold;
          transition: color 0.3s ease;
        }
        .nav-links li a:hover {
          color: white;
        }
        .nav-links li::before {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 50%;
          width: 0;
          height: 2px;
          background: white;
          transition: all 0.3s ease;
        }
        .nav-links li:hover::before {
          width: 100%;
          left: 0;
        }
      `}</style>
    </div>
  );
}

export default App;
