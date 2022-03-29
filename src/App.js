import React, {useEffect, useState } from "react"
import './App.css';
import Header from './components/Header';
import NewPatientForm from './components/NewPatientForm';
import PatientList from './components/PatientList';

const patientsAPI = 'http://localhost:9292/patients';

function App() {

  const [patients, setPatients] = useState([]);

  useEffect(()=>{
    fetch(patientsAPI)
    .then(response => response.json())
    .then(patientsData =>{
      // console.log(patientsData)
      setPatients(patientsData)
    })
  }, [])

  return (
    <div className="root">
      <Header/>
      <div className="content">
        <NewPatientForm />
        <PatientList patients={patients} />
      </div>
    </div>
  );
}

export default App;
