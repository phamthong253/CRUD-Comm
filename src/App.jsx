// import TodoApp from './todo-list'
// import Practice from './practice/practice'

import { Route, Routes } from "react-router-dom";
import Create from "./component/create/create.component"
import Gallery from "./component/gallery/gallery.component";
import Home from "./component/home/home.component";
import Edit from "./component/edit/edit.component";
import Signup from "./component/user/signup.component";
import Signin from "./component/user/signin.component";
import './interceptor/axios'
import Manage from "./component/manageUser/manage.component";



function App() {
  return (
    <Routes>
    <Route path="/" index element={<Home />} />
    <Route exact path="/create" element={<Create />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/gallery/:id" element={<Gallery />} />
    <Route path="/edit/:id" element={<Edit />} />
    <Route exact path="signup" element={<Signup />} />
    <Route exact path="signin" element={<Signin />} />
    <Route exact path="manageUser" element={<Manage />} />
    <Route path="manageUser/:id" element={<Manage />} />
  </Routes>
  );
  // <Practice></Practice>
}
export default App;
