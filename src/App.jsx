import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import "./App.css";
import "./components/Loader/Loader.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // loader 1.5 วินาที
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="loader">Loading...</div>; // Loader หน้าเต็ม
  }

  return (
    <ThemeProvider>
      <Helmet>
        <title>Thawatchai Suhongsa - Portfolio</title>
        <meta name="description" content="Personal portfolio showcasing projects, skills, and contact information." />
        <meta name="keywords" content="Portfolio, Web Developer, React, Thawatchai Suhongsa" />
        <meta name="author" content="Thawatchai Suhongsa" />
        <meta property="og:title" content="Thawatchai Suhongsa - Portfolio" />
        <meta property="og:description" content="Explore my projects and skills in web development." />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Helmet>

      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
