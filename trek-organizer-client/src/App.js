import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext'
import About from "./components/About/About";
import Details from "./components/Treks/Details/Details";
import Treks from "./components/Treks/Treks";
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
import NotPrivedRoute from './components/Common/GuardedRoutes/NotPrivedRoute';
import PrivateRoute from './components/Common/GuardedRoutes/PrivateRoute';
import Create from './components/Treks/Create/Create';
import Edit from './components/Treks/Edit/Edit';

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
              <Route element={<NotPrivedRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>
              <Route path="/contact" element={<Contacts />} />
              <Route path="/treks/all" element={<Treks />} />
              <Route path="/treks/:trekId" element={<Details />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route element={<PrivateRoute />}>
                <Route path="/logout" element={<Logout />} />
                <Route path="/treks/create" element={<Create />} />
                <Route path="/treks/:trekId/edit" element={<Edit />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
