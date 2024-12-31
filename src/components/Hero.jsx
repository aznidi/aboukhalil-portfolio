import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap"; // Assurez-vous que GSAP est installé
import { TextPlugin } from "gsap/TextPlugin"; // Importer le plugin TextPlugin
import 'animate.css';

// Enregistrer le plugin
gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const changingTextRef = useRef(null); // Référence pour l'élément du texte dynamique

  // Fonctions pour gérer le survol des icônes
  const handleMouseEnter = (icon) => setHoveredIcon(icon);
  const handleMouseLeave = () => setHoveredIcon(null);

  useEffect(() => {
    const texts = ["Aboukhalil Mohammed Ali", "un Développeur Fullstack"];
    let currentIndex = 0;

    const changeText = () => {
      if (changingTextRef.current) {
        // Effacer le texte précédent
        gsap.to(changingTextRef.current, {
          duration: 2, // Ralentir la suppression du texte
          text: "",
          ease: "power3.inOut",
          onComplete: () => {
            // Ajouter le texte suivant caractère par caractère
            gsap.to(changingTextRef.current, {
              duration: 3, // Ralentir l'écriture du texte
              text: texts[currentIndex],
              ease: "power3.inOut",
              onComplete: () => {
                // Passer à l'index suivant
                currentIndex = (currentIndex + 1) % texts.length;
                setTimeout(changeText, 2500); // Attendre avant de recommencer (ajouter un délai)
              },
            });
          },
        });
      }
    };

    changeText(); // Démarrer l'animation du texte
  }, []);

  return (
    <div style={styles.container}>
      {/* Partie gauche */}
      <div style={styles.leftSection}>
        <p
          className={`animate__animated animate__backInRight`}
          style={styles.greeting}
        >
          Bonjour à tous
        </p>
        <h1
          className={`animate__animated animate__backInRight`}
          style={styles.name}
        >
          Je suis <span ref={changingTextRef} style={styles.highlight}></span>
        </h1>
        <h3
          className={`animate__animated animate__backInRight`}
          style={styles.title}
        >
          Étudiant en deuxième année de développement digital à l'ISGI Casablanca.
        </h3>
        <div style={styles.buttonsContainer}>
          <a
            href="/Aboukhalil_Mohammmed_Ali_CV.pdf"
            download="Aboukhalil_Mohammmed_Ali_CV.pdf"
            style={styles.button}
          >
            <i className="fas fa-download" style={styles.downloadIcon}></i>
            Télécharger mon CV
          </a>
          {/* Icônes des réseaux sociaux */}
          <div style={styles.socialIcons}>
            {[{ href: "https://www.linkedin.com/in/mohammed-ali-aboukhalil-a56019329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", iconClass: "fab fa-linkedin-in" },
              { href: "mailto:medaliaboukhalil@gmail.com", iconClass: "fas fa-envelope" },
              { href: "https://github.com/aboukhalil05", iconClass: "fab fa-github" }].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...styles.icon,
                  ...(hoveredIcon === index ? styles.iconHover : {}),
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <i className={item.iconClass} style={styles.iconInner}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Partie droite */}
      <div style={styles.rightSection}>
        <div style={styles.imageWrapper}>
          <img src="/profile.jpg" style={styles.image} alt="Profile" />
          <div style={styles.circleOverlay}></div>
        </div>
      </div>

      {/* Style CSS intégré */}
      <style jsx>{`
        @keyframes slideFromTop {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        a:hover {
          box-shadow: 0 0 15px rgba(0, 0, 230, 0.8); /* Ombre bleue */
          transition: box-shadow 0.3s ease-in-out; /* Transition douce */
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh",
    padding: "0 50px",
    backgroundColor: "white", // Fond blanc
    color: "#073e82",
    fontFamily: "'Poppins', sans-serif",
    flexWrap: "wrap",
    marginTop: "-10px",
  },
  leftSection: {
    flex: 1,
    padding: "20px",
    minWidth: "300px",
  },
  greeting: {
    color: "#073e82",
    fontSize: "27px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Ombre portée
  },
  name: {
    fontSize: "3rem",
    fontWeight: "bold",
    margin: "10px 0",
    textShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)", // Ombre portée
  },
  highlight: {
    color: "#FFD700",
  },
  title: {
    fontSize: "1.5rem",
    color: "#073e82",
    marginBottom: "20px",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)", // Ombre portée
    textAlign: "left", // Aligner le texte à gauche
    width: "16cm", // Largeur de 7 cm
    whiteSpace: "normal", // Permet au texte de revenir à la ligne
    wordWrap: "break-word",
  },
  buttonsContainer: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  button: {
    backgroundColor: "#FFD700",
    color: "#073e82",
    padding: "8px 12px",
    border: "none",
    borderRadius: "30px",
    fontSize: "0.9rem",
    cursor: "pointer",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  downloadIcon: {
    fontSize: "1rem",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
    marginLeft: "4cm",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#073e82",
    color: "#FFD700",
    textDecoration: "none",
    fontSize: "1.2rem",
    transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease",
  },
  iconHover: {
    backgroundColor: "#FFD700",
    color: "#073e82",
    transform: "scale(1.1)",
    boxShadow: "0 0 10px rgba(0, 115, 230, 0.5)",
  },
  iconInner: {
    fontSize: "1.2rem",
  },
  rightSection: {
    flex: 1,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imageWrapper: {
    position: "relative",
    width: "350px",
    height: "350px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "3px solid #FFD700", // Bordure jaune autour de l'image
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  circleOverlay: {
    position: "absolute",
    top: "10px",
    left: "10px",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    border: "5px solid #FFD700",
    zIndex: -1,
  },
  portfolioText: {
    marginTop: "10px",
    color: "#073e82",
    fontWeight: "bold",
    fontSize: "20px",
  },
};

export default Hero;
