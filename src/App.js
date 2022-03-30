import React, {useEffect, useState } from "react"
import './App.css';
import Header from './components/Header';
import NewPatientForm from './components/NewPatientForm';
import PatientList from './components/PatientList';

const patientsAPI = 'http://localhost:9292/patients';
const floorsAPI = 'http://localhost:9292/patient_floors'
const therapistsAPI = 'http://localhost:9292/therapists'

function App() {

  const [patients, setPatients] = useState([]);
  const [floors, setFloors] = useState([]);
  const [therapists, setTherapists] = useState([]);

  useEffect(()=>{
    fetch(patientsAPI)
    .then(response => response.json())
    .then(patientsData =>{
      // console.log(patientsData)
      setPatients(patientsData)
    })
  }, [])

  function handleNewPatient(patient){
    fetch(patientsAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patient),
    })
    .then(response => response.json())
    .then(json => {
      setPatients([...patients, json])
    })
    .catch(err => console.error(err))
  }

  function handleNewFloor(floor){
    fetch(floorsAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(floor),
    })
    .then(response => response.json())
    .then(json => {
      setFloors([...floors, json])
    })
    .catch(err => console.error(err))
  }

  function handleNewTherapist(therapist){
    fetch(therapistsAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(therapist),
    })
    .then(response => response.json())
    .then(json => {
      setTherapists([...therapists, json])
    })
    .catch(err => console.error(err))
  }

  function handleDeletePatient(deletedPatient){
    fetch(`${patientsAPI}/${deletedPatient.id}`, {
      method: 'DELETE'
    });
    const deletePatients = patients.filter(item => item.id !== deletedPatient.id)
    setPatients(deletePatients)
  }

  return (
    <div className="root">
      <Header/>
      <div className="content">
        <NewPatientForm  handleNewPatient={handleNewPatient} handleNewFloor={handleNewFloor} handleNewTherapist={handleNewTherapist} />  
        <PatientList patients={patients} handleDeletePatient={handleDeletePatient} />
      </div>
    </div>
  );
}

export default App;
