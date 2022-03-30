import React from "react"

function NewPatientForm({ handleNewPatient, handleNewFloor, handleNewTherapist }) {  //<---add 'handleNewPatient' as prop

    function handleFormSubmit(event){
        event.preventDefault()
        
        const patienttName = event.target['patient-name'].value
        const diagnosis = event.target['diagnosis'].value
        const age = event.target['age'].value
        const room = event.target['room'].value
        const therapistName = event.target['therapist-name'].value
        
        const newPatient = {
            patient_name: patienttName,
            patient_diagnosis: diagnosis,
            age: age,
            patient_floor_id: 1,
            therapist_id: 1
        };
        const newFloor = { 
            floor_number: 1,
            room_number: room
        }
        const newTherapist = {
            name: therapistName
        }
        
        handleNewPatient(newPatient);
        handleNewFloor(newFloor);
        handleNewTherapist(newTherapist);
        
        event.target.reset();
    }

    return(   //add 'onSubmit={handleFormSubmit}' inside line 29
        <>
            <form id="new-patient-form"  onSubmit={handleFormSubmit}>      
                <input id="patient-name" type="text" placeholder="Patient Name" />
                <select name="diagnosis" id="diagnosis" form="new-patient-form">
                    <option value="stroke">stroke</option>
                    <option value="knee_replacement">knee replacement</option>
                    <option value="hip_replacement">hip replacement</option>
                    <option value="asthma">asthma</option>
                    <option value="heart_attack">heart attack</option>
                    <option value="broken_shoulder">broken shoulder</option>
                    <option value="broken_leg">broken leg</option>
                </select>
                <input id="age" type="text" placeholder="Patient Age" />
                <select name="room" id="room" form="new-patient-form">
                    <option value="101">101</option>
                    <option value="201">201</option>
                    <option value="301">301</option>
                    <option value="401">401</option>
                    <option value="501">501</option>
                    <option value="601">601</option>
                </select>
                <select name="therapist-name" id="therapist-name" form="new-patient-form">
                    <option value="rick">Rick</option>
                    <option value="john">John</option>
                    <option value="tunisia">Tunisia</option>
                    <option value="evan">Evan</option>
                </select>
                <input type="submit" value="Add Patient" />
            </form>
        </>
    )
}

export default NewPatientForm;