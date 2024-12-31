import React from "react";
import { motion } from "framer-motion";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useForm } from "@formspree/react";
import * as Yup from "yup";
import { Audio } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Validation Schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Le nom est requis."),
  email: Yup.string().email("Adresse email invalide.").required("L'email est requis."),
  message: Yup.string().required("Le message est requis."),
});

function Contact() {
  const [state, handleSubmit] = useForm("xovvjbrn");
  const succeededMessage = () => toast.success("Un message a été envoyé avec succès !");
  const errorMessage = () => toast.error("Une erreur s'est produite.");

  const styles = {
    container: {
      position: "relative",
      padding: "100px 20px",
      fontFamily: "'Poppins', sans-serif",
      background: "#ffffff", // Fond blanc
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#FFD700", // Jaune
      marginBottom: "30px",
      textAlign: "center",
    },
    form: {
      width: "100%",
      maxWidth: "600px",
      background: "#073e82", // Fond bleu foncé
      borderRadius: "10px",
      border: "5px solid #FFD700", // Bordure jaune de 5px
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
    },
    label: {
      fontSize: "1rem",
      fontWeight: 600,
      color: "#ffffff", // Blanc
    },
    input: {
      marginTop: "10px",
      padding: "10px",
      border: "1px solid #FFD700", // Bordure jaune
      borderRadius: "5px",
      fontSize: "1rem",
      outline: "none",
      color: "#073e82", // Couleur du texte à l'intérieur
    },
    textarea: {
      marginTop: "10px",
      padding: "10px",
      border: "1px solid #FFD700", // Bordure jaune
      borderRadius: "5px",
      fontSize: "1rem",
      outline: "none",
      color: "#073e82", // Couleur du texte à l'intérieur
    },
    error: {
      color: "#f87171",
      fontSize: "0.875rem",
      marginTop: "5px",
    },
    button: {
      padding: "15px",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#FFD700", // Jaune
      color: "white",
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#FFC300", // Jaune foncé pour le survol
    },
    placeholder: {
      color: "#073e82", // Couleur du texte du placeholder
    },
  };

  return (
    <div id="contactez-moi" style={styles.container}>
      {/* Titre animé */}
      <motion.h2
        style={styles.title}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contactez-moi
      </motion.h2>

      {/* Formulaire */}
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <Form style={styles.form}>
            {/* Champ Nom */}
            <motion.div
              style={styles.formGroup}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <label htmlFor="name" style={styles.label}>
                Nom
              </label>
              <Field
                id="name"
                name="name"
                style={styles.input}
                placeholder="Votre nom"
              />
              <ErrorMessage name="name" component="div" style={styles.error} />
            </motion.div>

            {/* Champ Email */}
            <motion.div
              style={styles.formGroup}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <label htmlFor="email" style={styles.label}>
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                style={styles.input}
                placeholder="Votre email"
              />
              <ErrorMessage name="email" component="div" style={styles.error} />
            </motion.div>

            {/* Champ Message */}
            <motion.div
              style={styles.formGroup}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <label htmlFor="message" style={styles.label}>
                Message
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                style={styles.textarea}
                placeholder="Votre message"
              />
              <ErrorMessage name="message" component="div" style={styles.error} />
            </motion.div>

            {/* Bouton Envoyer */}
            <motion.button
              type="submit"
              style={styles.button}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              onClick={() => {
                if (state.succeeded) {
                  succeededMessage();
                } else {
                  errorMessage();
                }
              }}
            >
              {!state.submitting ? (
                "Envoyer"
              ) : (
                <Audio
                  height="25"
                  width="25"
                  radius="9"
                  color="white"
                  ariaLabel="loading"
                />
              )}
            </motion.button>
            <ToastContainer position="bottom-right" />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Contact;
