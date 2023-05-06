import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Movies from "./components/Movies/Movies";
//import UserProfile from "./Profile/userProfile";
//import { adminActions, userActions } from "./store";


function App(){
  return (
    <div>
<Header />
      <section>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/auth" element={<Auth />} />
          {/*<Route path="/booking/:id" element={<Booking /> } />*/}
          

        </Routes>
      </section>
    </div>
  )
}

export default App;

