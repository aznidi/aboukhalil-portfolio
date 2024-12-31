import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Parcours = () => {
  // Référence au premier élément pour calculer sa hauteur
  const firstItemRef = useRef(null);
  const [firstItemHeight, setFirstItemHeight] = useState(0);

  // Mettre à jour la hauteur du premier item
  useEffect(() => {
    if (firstItemRef.current) {
      setFirstItemHeight(firstItemRef.current.offsetHeight);
    }
  }, []);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff", // Fond blanc
      color: "#0b1120",
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      position: "relative",
      height: "100vh",
      marginBottom: "100px", // Ajout du margin-bottom de 100px
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#FFD700", // Jaune
      marginBottom: "30px",
      textAlign: "center",
    },
    itemsContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      width: "100%",
      height: "100%",
    },
    item: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#073e82", // Couleur de fond bleu foncé
      border: "3px solid #ffd700", // Bordure jaune
      borderRadius: "10px",
      padding: "20px",
      width: "400px",
      height: "200px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      position: "absolute",
      animation: "shadow-pop-tl 0.3s cubic-bezier(0.470, 0.000, 0.745, 0.715) both",
    },
    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ffc107",
      borderRadius: "50%",
      width: "60px",
      height: "60px",
      color: "#fff",
      fontSize: "24px",
      marginBottom: "10px",
    },
    content: {
      textAlign: "center",
    },
    titleItem: {
      margin: 0,
      fontSize: "18px",
      color: "#ffd700", // Titre de l'item en jaune
    },
    description: {
      margin: "5px 0",
      fontSize: "16px",
      color: "#fff", // Texte blanc
    },
    span: {
      color: "#ddd", // Texte complémentaire gris clair
    },
    line: {
      position: "absolute",
      width: "4px", // Ligne verticale
      backgroundColor: "#ffd700",
      height: "85%", // Hauteur de 12 cm en pixels
    },
    "@keyframes shadow-pop-tl": {
      "0%": {
        boxShadow:
          "0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e",
        transform: "translateX(0) translateY(0)",
      },
      "100%": {
        boxShadow:
          "-1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e, -4px -4px #3e3e3e, -5px -5px #3e3e3e, -6px -6px #3e3e3e, -7px -7px #3e3e3e, -8px -8px #3e3e3e",
        transform: "translateX(8px) translateY(8px)",
      },
    },
  };

  return (
    <div style={styles.container}>
      {/* Titre */}
      <h2 style={styles.title}>Parcours Scolaire</h2>

      <div style={styles.itemsContainer}>
        {/* Ligne verticale centrale */}
        <div style={styles.line}></div>

        {/* Premier élément */}
        <motion.div
          ref={firstItemRef}
          style={{
            ...styles.item,
            top: "50px",
            left: "100px",
          }}
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div style={styles.icon}>
            <i className="fas fa-school"></i>
          </div>
          <div style={styles.content}>
            <h3 style={styles.titleItem}>2022-2023</h3>
            <p style={styles.description}>Baccalauréat Physique-Chimie</p>
            <span style={styles.span}>Académie Maurice Bucaill</span>
          </div>
        </motion.div>

        {/* Deuxième élément (déplacement vers le haut sans dépasser le bas du premier élément) */}
        <motion.div
          style={{
            ...styles.item,
            bottom: `calc(-100px + ${firstItemHeight}px)`, // Ajuste la position pour ne pas dépasser le bas du premier item
            right: "50px",
          }}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div style={styles.icon}>
            <i className="fas fa-laptop-code"></i>
          </div>
          <div style={styles.content}>
            <h3 style={styles.titleItem}>2023-2025</h3>
            <p style={styles.description}>Technicien spécialisé en développement digital</p>
            <span style={styles.span}>ISGI Casablanca</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Parcours;
