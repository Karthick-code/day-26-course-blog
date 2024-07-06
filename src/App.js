
import './App.css';
import { All } from './Component/All';
import { Fullstack } from './Component/Fullstack';
import { Datascience } from './Component/Datascience';
import { Career } from './Component/Career';
import { Route, Routes, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Cybersecurity } from './Component/Cybersecurity';

function App() {
  // var navigate = useNavigate();
  return (
    <div className="App">
      <div style={{marginTop:"20px"}}>

      </div>
      <AppBar position="static" style={{ marginBottom: "20px" }}>
        <Toolbar style={{ justifyContent: "center" }}>
          <div className="nav">
            {/* <Button  variant="text" color="inherit" onClick={() => navigate("/")}>All</Button>
            <Button variant="text" color="inherit" onClick={() => navigate("fullstack")}>Fullstack Development</Button>
            <Button variant="text" color="inherit" onClick={() => navigate("/datascience")}>DataScience</Button>
            <Button variant="text" color="inherit" onClick={() => navigate("/cyberSecurity")}>Cybersecurity</Button>
            <Button variant="text" color="inherit" onClick={() => navigate("/career")}>Career</Button> */}
            <Link to="/"><Button  variant="contained" color="inherit" >All</Button></Link>
            <Link to="/fullstack"><Button variant="contained" color="inherit" >Fullstack Development</Button></Link>
            <Link to="/datascience"><Button variant="contained" color="inherit" >DataScience</Button></Link>
            <Link to="/cyberSecurity"><Button variant="contained" color="inherit" >Cybersecurity</Button></Link>
            <Link to="/career"><Button variant="contained" color="inherit" >Career</Button></Link>
          </div>
        </Toolbar>
      </AppBar>
      {/* <div className="nav-bar">
      <nav >
        <ul>
          <li><Link to="/">All</Link></li>
          <li><Link to="/fullstack">Fullstack Development</Link></li>
          <li><Link to="/datascience">DataScience</Link></li>
          <li><Link to="/cyberSecurity">CyberSecurity</Link></li>
          <li><Link to="/career">Career</Link></li>
        </ul>
      </nav>
      </div> */}
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/fullstack" element={<Fullstack />} />
        <Route path="/datascience" element={<Datascience />} />
        <Route path="/cyberSecurity" element={<Cybersecurity />} />
        <Route path="/career" element={<Career />} />
      </Routes>

      
    </div>
  );
}
export default App;


