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

  // function handleNewPatient(patient){
  //   fetch(patientsAPI, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(patient),
  //   })
  //   .then(response => response.json())
  //   .then(json => {
  //     setPatients([...patients, json])
  //   })
  //   .catch(err => console.error(err))
  // }

  // add 'handleNewPatient={handleNewPatient}' to <NewPatientForm />
  return (
    <div className="root">
      <Header/>
      <div className="content">
        <NewPatientForm   />  
        <PatientList patients={patients} />
      </div>
    </div>
  );
}

export default App;
