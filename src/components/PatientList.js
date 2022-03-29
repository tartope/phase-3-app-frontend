import React from "react"
import Patient from './Patient'

function PatientList({ patients }) {

  const patientList = patients.map(patient => {
    return <Patient key={patient.id} patient={patient} />
  })

    return(
      <table>
          <tbody>
            <tr>
                <th></th>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Diagnosis</th>
                <th>Age</th>
                <th>Room</th>
                <th>Therapist</th>
            </tr>
            {patientList}
          </tbody>
      </table>  
    );
}

export default PatientList;