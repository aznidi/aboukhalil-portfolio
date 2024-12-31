import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <div style={{
      backgroundColor: '#073e82',
      color: '#FFDD00',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: '50px',
    }}>
      {/* Titre */}
      <h1 style={{
        fontSize: '2rem',  // Taille du titre réduite
        marginBottom: '30px'
      }}>
        Aboukhlil Mohmmed Ali • Développeur Full-Stack
      </h1>

      {/* Contenu de contact sur une seule ligne */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',  // Centrer horizontalement
        gap: '30px',  // Espacement entre chaque élément
        alignItems: 'center'
      }}>
        {/* Email */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href="mailto:medaliaboukhalil@gmail.com" 
             style={{
               color: 'white', 
               textDecoration: 'none', 
               transition: 'color 0.3s ease', 
               display: 'flex',
               alignItems: 'center',
             }}
             onMouseOver={(e) => {
               e.target.style.color = '#FFDD00';  // Changer la couleur du texte
               e.target.querySelector('svg').style.fill = '#FFDD00'; // Changer la couleur de l'icône
             }}  
             onMouseOut={(e) => {
               e.target.style.color = 'white';  // Revenir à la couleur du texte
               e.target.querySelector('svg').style.fill = 'white'; // Revenir à la couleur de l'icône
             }}
          >
            <FaEnvelope style={{ color: 'white', marginRight: '10px', transition: 'fill 0.3s ease' }} />
            medaliaboukhalil@gmail.com
          </a>
        </div>

        {/* Téléphone */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href="tel:+2120710290759" 
             style={{
               color: 'white', 
               textDecoration: 'none', 
               transition: 'color 0.3s ease',
               display: 'flex',
               alignItems: 'center',
             }}
             onMouseOver={(e) => {
               e.target.style.color = '#FFDD00';
               e.target.querySelector('svg').style.fill = '#FFDD00';
             }} 
             onMouseOut={(e) => {
               e.target.style.color = 'white';
               e.target.querySelector('svg').style.fill = 'white';
             }}
          >
            <FaPhone style={{ color: 'white', marginRight: '10px', transition: 'fill 0.3s ease' }} />
            +2120710290759
          </a>
        </div>

        {/* Localisation */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span 
            style={{
              color: 'white', 
              transition: 'color 0.3s ease',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseOver={(e) => {
              e.target.style.color = '#FFDD00';
              e.target.querySelector('svg').style.fill = '#FFDD00';
            }} 
            onMouseOut={(e) => {
              e.target.style.color = 'white';
              e.target.querySelector('svg').style.fill = 'white';
            }}
          >
            <FaMapMarkerAlt style={{ color: 'white', marginRight: '10px', transition: 'fill 0.3s ease' }} />
            Hay Mohmmadi, Casablanca
          </span>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        marginTop: '10px',
        fontSize: '15px',
        color: 'white'
      }}>
        © 2024 ABOUKHALIL MOHAMMED ALI
      </footer>
    </div>
  );
};

export default Footer;
