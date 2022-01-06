// import './App.css';

import About from "./components/About/About";
import Blog from "./components/Blogs/Blog/Blog";
import Blogs from "./components/Blogs/Blogs";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Trails from "./components/Trails/Trails";

function App() {
  return (
    <div>
      <body>
        <Header />
        <About />
        <Trails />
        <Gallery />
        <Contacts/>
        <Blogs />
        <Blog/>
        <Footer />
      </body>
    </div>
  );
}

export default App;
