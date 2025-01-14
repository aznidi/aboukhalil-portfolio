import React from "react";
import { motion } from "framer-motion";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useForm } from "@formspree/react";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { Audio } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";

// Validation Schema with Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Le nom est requis."),
  email: Yup.string()
    .email("Adresse email invalide.")
    .required("L'email est requis."),
  message: Yup.string().required("Le message est requis."),
});

const Contact = () => {
  const [state, handleSubmit] = useForm("xovvjbrn");

  const succeededMessage = () => toast.success("Message envoyé avec succès !");
  const errorMessage = () => toast.error("Une erreur s'est produite.");

  return (
    <div
      id="contact"
      className="min-h-screen bg-white text-black flex flex-col justify-center items-center font-montserrat px-6"
    >
      {/* Titre animé */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
        style={{ color: "#073e82" }}
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
        {({ errors, touched }) => (
          <motion.div
            className="w-full max-w-lg bg-primary rounded-lg p-8 shadow-lg"
            style={{
              backgroundColor: "#073e82",
              border: "4px solid #FBBF24",
            }}
            animate={
              errors.name || errors.email || errors.message
                ? { x: [0, -10, 10, 0] }
                : {}
            }
            transition={{ duration: 0.3 }}
          >
            <Form>
              {/* Champ Nom */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold mb-2 transition-transform transform hover:-translate-y-1"
                  style={{ color: "#FBBF24" }}
                >
                  Nom
                </label>
                <Field
                  id="name"
                  name="name"
                  className={`w-full px-4 py-3 rounded-md focus:ring focus:ring-yellow-500 focus:outline-none transition-all ${
                    touched.name && errors.name
                      ? "border-red-500"
                      : "border-gray-400"
                  }`}
                  style={{
                    transition: "all 0.3s ease",
                  }}
                  placeholder="Votre nom"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </motion.div>

              {/* Champ Email */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold mb-2 transition-transform transform hover:-translate-y-1"
                  style={{ color: "#FBBF24" }}
                >
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  className={`w-full px-4 py-3 rounded-md focus:ring focus:ring-yellow-500 focus:outline-none transition-all ${
                    touched.email && errors.email
                      ? "border-red-500"
                      : "border-gray-400"
                  }`}
                  style={{
                    transition: "all 0.3s ease",
                  }}
                  placeholder="Votre email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </motion.div>

              {/* Champ Message */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold mb-2 transition-transform transform hover:-translate-y-1"
                  style={{ color: "#FBBF24" }}
                >
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows="5"
                  className={`w-full px-4 py-3 rounded-md focus:ring focus:ring-yellow-500 focus:outline-none transition-all ${
                    touched.message && errors.message
                      ? "border-red-500"
                      : "border-gray-400"
                  }`}
                  style={{
                    transition: "all 0.3s ease",
                  }}
                  placeholder="Votre message"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </motion.div>

              {/* Bouton Envoyer */}
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-yellow-500 text-white font-bold rounded-md shadow-md hover:bg-[#D9A20B] hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
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
          </motion.div>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
