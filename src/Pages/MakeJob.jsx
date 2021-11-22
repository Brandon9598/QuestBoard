import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import "./Home.css"
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";


import { db } from "../firebase"

function MakeJob() {

    const [titleInput, setTitle] = useState(""); //useState is asynchronous; 
    const [orgNameInput, setOrgName] = useState("");
    const [locationInput, setLocation] = useState("");
    const [dateInput, setDate] = useState("");
    const [workerAmountInput, setWorkerAmount] = useState("");
    const [descInput, setDesc] = useState("");
    const [imgURLInput, setImgUrl] = useState("https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image");
    const [emailInput, setEmail] = useState("");
    const [phoneInput, setPhone] = useState("");

    const history = useHistory();

    const { register, handleSubmit, errors, formState } = useForm({mode: "onChange"});

    const createQuest = (event) => {
        event.preventDefault();
        let newDocRef = db.collection('jobs').doc();
        newDocRef.set({
            title: titleInput,
            orgName: orgNameInput,
            location: locationInput,
            time: dateInput,
            workerAmount: workerAmountInput,
            description: descInput,
            imageURL: imgURLInput,
            email: emailInput,
            phone: phoneInput,
            uid: newDocRef.id
        }).then(() => {
            history.push(`/board`)
        })

    }



    return (
        <div className="form-div">
            <h1>Make a Quest!</h1>
            <Form onSubmit={handleSubmit(createQuest)}>
                <Form.Group className="mb-3" controlId="questName" >
                <Form.Label>Quest Name</Form.Label>
                    <Form.Control type="text" name="formQuestName" placeholder={titleInput} onChange={(e) => setTitle(e.target.value)} ref={register({required: "Name is required"})}/>
                    {errors.formQuestName && <span className="form-error">{errors.formQuestName.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Name of Organization</Form.Label>
                    <Form.Control type="text" name="formQuestOrg" placeholder={orgNameInput} onChange={(e) => setOrgName(e.target.value)} ref={register({required: "Organization is required",})}/>
                    {errors.formQuestOrg && <span className="form-error">{errors.formQuestOrg.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" name="formQuestLocation" placeholder={locationInput} onChange={(e) => setLocation(e.target.value)} ref={register({required: "Location is required",})}/>
                    {errors.formQuestLocation && <span className="form-error">{errors.formQuestLocation.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Date and Time</Form.Label>
                    <Form.Control type="text" name="formQuestDate" placeholder={dateInput} onChange={(e) => setDate(e.target.value)} ref={register({required: "Date is required",})}/>
                    {errors.formQuestDate && <span className="form-error">{errors.formQuestDate.message}</span>}
                    <Form.Text className="text-muted">
                        Example: 10/30/21 4:00PM
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Amount of Workers Needed</Form.Label>
                    <Form.Control type="text" name="formQuestWorkerAmount" placeholder={workerAmountInput} onChange={(e) => setWorkerAmount(e.target.value)} ref={register({required: "Worker Amount is required",})}/>
                    {errors.formQuestWorkerAmount && <span className="form-error">{errors.formQuestWorkerAmount.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Quest Description</Form.Label>
                    <Form.Control as="textarea" name="formQuestDesc" rows={3} placeholder={descInput} onChange={(e) => setDesc(e.target.value)} ref={register({required: "Description is required",})}/>
                    {errors.formQuestDesc && <span className="form-error">{errors.formQuestDesc.message}</span>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Display Image URL</Form.Label>
                    <Form.Control type="text" name="formQuestImgURL" placeholder={imgURLInput} onChange={(e) => setImgUrl(e.target.value)} ref={register({required: "Image URL is required",})}/>
                    {errors.formQuestImgURL && <span className="form-error">{errors.formQuestImgURL.message}</span>}
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="formQuestEmail" placeholder={emailInput} onChange={(e) => setEmail(e.target.value)} ref={register({required: "Email is required",})}/>
                    {errors.formQuestEmail && <span className="form-error">{errors.formQuestEmail.message}</span>}
                    <Form.Text className="text-muted">
                        Applicants for this quest will use this email to contact you.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="phone" name="formQuestPhone" placeholder={phoneInput} onChange={(e) => setPhone(e.target.value)} ref={register({required: "Phone number is required",})}/>
                    {errors.formQuestPhone && <span className="form-error">{errors.formQuestPhone.message}</span>}
                    <Form.Text className="text-muted">
                        Applicants for this quest will use this phone number to contact you.
                    </Form.Text>
                </Form.Group>

                <Button variant="success" type="submit" disabled={!formState.isValid} onClick={createQuest}>Create Quest</Button>
                
            </Form>
        </div>
    )
    
}

export default MakeJob
