import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Container } from 'react-bootstrap'
// import Header from "./components/Header"
import "./bootstrap.min.css";
import "./index.css";
// import Footer from "./components/Footer"
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegsiterScreen";
import PatientFormDetails from "./components/PatientFormDetails";
import PatientReport from "./screens/PatientReport";
import PatientScreen from "./screens/PatientScreen";
import addReport from "./screens/AddReport";
import ReportForm from "./screens/ReportForm";
import updatePatientReport from "./screens/updatePatientReport";

function App() {
  return (
    <Router>
      <Route path="/" component={HomeScreen} exact />
      <Route path="/login" component={LoginScreen} exact />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/doctor" component={PatientFormDetails} />
      <Route path="/detail/:id" component={PatientReport} />
      <Route path="/addReport/:id" component={addReport} />
      <Route path="/reportForm/:id" component={ReportForm} />
      <Route path="/patient/:id" component={PatientScreen} />
      <Route path="/updatePatientReport/:id" component={updatePatientReport} />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
