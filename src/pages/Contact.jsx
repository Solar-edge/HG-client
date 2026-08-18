import { motion } from "motion/react";

export default function Contact() {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER || "2348101328963";

  const whatsapp = `https://wa.me/${number}?text=${encodeURIComponent(
    "Hello Solar Edge, I would like to make an enquiry."
  )}`;

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="logo.jpeg" />

      <section className="section page-top contact-page">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow">CONTACT</span>
          <h1>Let's talk about your energy needs.</h1>
          <p className="lead">Have a product question or need help deciding what fits your project? Reach out directly.</p>
          <a className="btn btn-dark" href={whatsapp}>Chat with us on WhatsApp</a>
        </motion.div>
        <motion.div
          className="contact-card"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
        >
          <span>SOLAR EDGE</span>
          <h2>Direct support</h2>
          <p>For product availability, pricing, specifications and project enquiries, WhatsApp is the quickest way to reach the team.</p>
          <a href={whatsapp}>Start a conversation →</a>
        </motion.div>
      </section>
    </>


  );
}