import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext'
import About from "./components/About/About";
// import Blog from "./components/Blogs/Blog/Blog";
import Blogs from "./components/Blogs/Blogs";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Trails from "./components/Trails/Trails";
import Logout from './components/Logout/Logout';
import { NotificationProvider } from './contexts/NotificationContext';
import Notification from './components/Common/Notification/Notification';

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <div>
          <Header />
          <Notification />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trails" element={<Trails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contacts />} />
              <Route path="/trek/all" element={<Blogs />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
