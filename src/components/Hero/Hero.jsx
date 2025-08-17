// src/components/Hero/Hero.jsx
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="hero"
    >
      <h1>Hello, I’m Thawatchai 👋</h1>
      <p>Welcome to my portfolio website</p>
      
      {/* ✅ ปุ่ม Contact Me */}
      <motion.button 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
        className="contact-btn"
        onClick={() => window.location.href="#contact"} // scroll ไป Contact section
      >
        Contact Me
      </motion.button>
    </motion.section>
  );
}

export default Hero;
