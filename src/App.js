import { Navbar } from './components/index.js'
import {BlogMain, BlogPersonal, Login, BlogAdvice, BlogExperience,Signup, Singlepost} from './pages/';
import {Footer} from './components'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<BlogMain/>}/>
        <Route path = "personal" element = {<BlogPersonal/>}/>
        <Route path = "advice" element = {<BlogAdvice/>}/>
        <Route path = "experience" element = {<BlogExperience/>}/>
        <Route path = "signin" element = {<Login/>}/>
        <Route path = "signup" element = {<Signup/>}/>
        <Route path = "singlepost" element = {<Singlepost/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
