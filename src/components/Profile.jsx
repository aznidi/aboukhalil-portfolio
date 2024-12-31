import React from "react";

const Profile = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#1c1c28", // Couleur de fond plus foncée
        color: "#ffffff", // Texte blanc
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#292940", // Couleur du conteneur
          borderRadius: "15px",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)",
          padding: "40px",
          width: "1000px", // Largeur augmentée
        }}
      >
        {/* Image de profil */}
        <div style={{ marginRight: "40px", flexShrink: 0 }}>
          <img
            src="https://via.placeholder.com/250" // Remplacez par votre chemin d'image
            alt="Profile"
            style={{
              width: "250px", // Image plus grande
              height: "250px",
              borderRadius: "50%",
              border: "4px solid #4a90e2", // Bordure bleue
            }}
          />
        </div>

        {/* Informations textuelles */}
        <div style={{ flex: 1 }}>
          <h1
            style={{
              color: "#4a90e2", // Couleur bleue
              fontSize: "28px",
              marginBottom: "15px",
              textTransform: "uppercase",
            }}
          >
            Hi There! I'm AISSAM TAHIRI
          </h1>
          <h2
            style={{
              fontSize: "22px",
              color: "#9fa2b2", // Gris clair pour le sous-titre
              marginBottom: "25px",
            }}
          >
            Software Engineer
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#d1d2dc", // Texte secondaire
              marginBottom: "25px",
            }}
          >
            As a software engineer, my passion lies in seamlessly integrating
            creativity with technology to develop innovative and impactful
            solutions. Through my expertise, I strive to design and build
            systems that not only perform effectively but also enhance user
            experiences and drive meaningful outcomes.
          </p>
          <div
            style={{
              fontSize: "18px",
              color: "#ffffff", // Texte blanc
              marginBottom: "25px",
            }}
          >
            <p>
              <strong style={{ color: "#4a90e2" }}>Phone:</strong> +212 649088706
            </p>
            <p>
              <strong style={{ color: "#4a90e2" }}>Email:</strong>{" "}
              tahiriaissam7@gmail.com
            </p>
            <p>
              <strong style={{ color: "#4a90e2" }}>From:</strong> Azrou, Morocco
            </p>
            <p>
              <strong style={{ color: "#4a90e2" }}>Language:</strong> Arabic,
              English, French
            </p>
          </div>
          <button
            style={{
              backgroundColor: "#4a90e2", // Bleu plus vif pour le bouton
              color: "#ffffff",
              padding: "15px 30px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "bold",
              marginTop: "10px",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#367ab9")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4a90e2")}
            onClick={() => window.open("path/to/your/cv.pdf", "_blank")} // Remplacez par le chemin vers le CV
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
