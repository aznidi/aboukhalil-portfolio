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
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col justify-center items-center font-montserrat px-6"
    >
      {/* Titre animé */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center"
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
          <Form className="w-full max-w-lg bg-white bg-opacity-10 backdrop-blur-md border border-primary-light rounded-lg p-8 shadow-lg">
            {/* Champ Nom */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-primary-light mb-2"
              >
                Nom
              </label>
              <Field
                id="name"
                name="name"
                className={`w-full px-4 py-3 rounded-md focus:ring focus:ring-primary focus:outline-none ${
                  touched.name && errors.name
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
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
                className="block text-lg font-semibold text-primary-light mb-2"
              >
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                className={`w-full px-4 py-3 rounded-md focus:ring focus:ring-primary focus:outline-none ${
                  touched.email && errors.email
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
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
                className="block text-lg font-semibold text-primary-light mb-2"
              >
                Message
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows="5"
                className={`w-full px-4 py-3 rounded-md focus:ring focus:ring-primary focus:outline-none ${
                  touched.message && errors.message
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
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
              className="w-full px-6 py-3 bg-primary text-gray-900 font-bold rounded-md shadow-md hover:shadow-lg transition-all duration-300"
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
        )}
      </Formik>
    </div>
  );
};

export default Contact;
