import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import EducationalForm from '../EducationalForm'
import BasicForm from '../BasicForm'
import PersonalForm from '../PersonalForm'
import ErrorPage from '../ErrorPage'
import ExtraForm from '../ExtraForm'
import CourseIntro1 from './CourseIntro1';
import CourseIntro2 from './CourseIntro2';
import CourseIntro3 from './CourseIntro3';




const steps = [
    'courseinfo',
    'Course intro recording',
    'lecture recording',
    'pricing',
    'publish'
];

export default function HorizontalLabelPositionBelowStepper() {
    const [count, setCount] = React.useState(1);
    const [step, setStep] = React.useState(0);
    const nextStep = () => {
        if (step === 1 && count <= 2 && count >= 1) {
            console.log(step, "stepp")
            console.log(count, "count")
            setCount(count + 1)
        }
        else {
            setStep((prev) => prev + 1);
        }
    };
    const prevStep = () => {
        setStep((prev) => prev - 1);
    };
    const IntroPrevStep = () => {
        setCount((prev) => prev - 1);
    };
    const renderPage = (step) => {
        switch (step) {
            case 0:
                return (
                    <PersonalForm nextStep={nextStep} />
                );
            case 1:
                if (count === 1) {
                    return (
                        // <BasicForm nextStep={nextStep} prevStep={prevStep} />
                        <CourseIntro1 nextStep={nextStep} prevStep={prevStep} />
                    );
                }
                else if (count === 2) {
                    return (
                        // <BasicForm nextStep={nextStep} prevStep={prevStep} />
                        <CourseIntro2 nextStep={nextStep} prevStep={prevStep} IntroPrevStep={IntroPrevStep} />
                    );
                }
                else {
                    return (
                        // <BasicForm nextStep={nextStep} prevStep={prevStep} />
                        <CourseIntro3 nextStep={nextStep} prevStep={prevStep} IntroPrevStep={IntroPrevStep} />
                    );
                }
            case 2:
                return (
                    <EducationalForm nextStep={nextStep} prevStep={prevStep} />
                );
            case 3:
                return (
                    <ExtraForm nextStep={nextStep} prevStep={prevStep} />
                );
            case 4:
                return (
                    <ExtraForm nextStep={nextStep} prevStep={prevStep} />
                );
            default:
                return <ErrorPage />;
        }
    };
    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={step} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>{renderPage(step)}</div>
        </Box>
    );
}
