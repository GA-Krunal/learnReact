import React from 'react'
import EducationalForm from './EducationalForm'
import BasicForm from './BasicForm'
import PersonalForm from './PersonalForm'
import ErrorPage from './ErrorPage'
import { useState } from 'react'
import {
  Stepper,
  Step,
  StepLabel
} from "@material-ui/core";
import ExtraForm from './ExtraForm'

const Home = () => {
    const [step, setStep] = useState(0);
    const nextStep = () => {
      setStep((prev) => prev + 1);
    };
    const prevStep = () => {
      setStep((prev) => prev - 1);
    };
    const steps = ["PersonnelForm", "PaymentForm", "EducationForm", "FinalForm"];

    const renderForm = (step) => {
        switch (step) {
          case 0:
            return (
              <PersonalForm nextStep={nextStep}/>
            );
          case 1:
            return (
              <BasicForm nextStep={nextStep} prevStep={prevStep}/>
            );
          case 2:
            return (
              <EducationalForm nextStep={nextStep} prevStep={prevStep}/>
            );
          case 3:
            return (
              <ExtraForm nextStep={nextStep} prevStep={prevStep}/>
            );
          default:
            return <ErrorPage />;
        }
      };
    return (
        <div>
         <Stepper activeStep={step}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>{renderForm(step)}</div>
        </div>
    )
}

export default Home
