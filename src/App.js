import Navbar from "../src/components/Navbar";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Engineers from "./components/Engineers";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Message from "./components/Message";
import Subscribe from "./components/Subscribe";
import Why from "./components/Why";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Logos />
      <Why />
      <Engineers />
      <Message />
      <Contact />
      <Blogs />
      <Subscribe />
      <Footer />
    </main>
  );
}

export default App;
