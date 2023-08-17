import Navbar from "../src/components/Navbar";
import Blogs from "./components/Blogs";
import Engineers from "./components/Engineers";
import Footer from "./components/Footer";
import Logos from "./components/Logos";
import Message from "./components/Message";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <main className="">
      <Navbar />
      <Logos />
      <Engineers />
      <Message />
      <Blogs />
      <Subscribe />
      <Footer />
    </main>
  );
}

export default App;
