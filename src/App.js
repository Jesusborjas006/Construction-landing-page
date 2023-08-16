import Navbar from "../src/components/Navbar";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Logos from "./components/Logos";
import Message from "./components/Message";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <main className="">
      <Navbar />
      <Logos />
      <Message />
      <Blogs />
      <Subscribe />
      <Footer />
    </main>
  );
}

export default App;
