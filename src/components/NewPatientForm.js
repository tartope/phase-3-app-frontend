import React from "react"

function NewPatientForm() {
    return(
        <>
            <form id="new-patient-form">
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
                <input id="floor" type="text" placeholder="Floor" />
                <input id="therapist-name" type="text" placeholder="Therapist Name" />
                <input type="submit" value="Add Patient" />
            </form>
        </>
    )
}

export default NewPatientForm;