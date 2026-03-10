import React, { useState } from "react";
import RegisterLayout from "./layout";
import RegisterCredentials from "./registerCredentials";
import RegisterLocation from "./registerLocation";
import RegisterName from "./registerName";
import RegisterContact from "./registerContact";
import RegisterMore from "./registerMore";

export default function RegistrationFlow() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    location: "",
    username: "",
    password: "",
  });

  const updateData = (data: any) =>
    setFormData((prev) => ({ ...prev, ...data }));

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const steps = [
    { component: RegisterName, title: "Your Name" },
    { component: RegisterContact, title: "Contact Information" },
    { component: RegisterMore, title: "More about you" },
    { component: RegisterLocation, title: "Your Location" },
    { component: RegisterCredentials, title: "Account Credentials" },
  ];

  const currentStep = steps[step - 1];
  const StepComponent = currentStep.component;

  return (
    <RegisterLayout
      title={currentStep.title}
      step={step}
      totalSteps={steps.length}
      nextStep={nextStep}
      prevStep={step > 1 ? prevStep : undefined}
    >
      <StepComponent data={formData} updateData={updateData} />
    </RegisterLayout>
  );
}
