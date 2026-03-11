  import React, { useState } from "react";
  import RegisterLayout from "./layout";
  import RegisterCredentials from "./registerCredentials";
  import RegisterLocation from "./registerLocation";
  import RegisterName from "./registerName";
  import RegisterContact from "./registerContact";
  import RegisterMore from "./registerMore";
import type { FormData, FormErrors } from "./_types";

  export default function RegistrationFlow() {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState<FormData>({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      birthYear: "",
      birthMonth: "",
      birthDay: "",
    sex: "",
      location: "",
      displacementStatus: "",
      username: "",
      password: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const updateData = (data: Partial<FormData>) =>
      setFormData((prev) => ({ ...prev, ...data }));

    const nextStep = () =>
      setStep((prev) => (prev >= steps.length ? prev : prev + 1));
    const prevStep = () => setStep((prev) => prev - 1);

    const validateCurrentStep = () => {
      const e: FormErrors = {};

      if (step === 1) {
        if (formData.firstName.trim().length < 2) {
          e.firstName = "First name must be at least 2 characters.";
        }
        if (formData.lastName.trim().length < 2) {
          e.lastName = "Last name must be at least 2 characters.";
        }
      }

      if (step === 2) {
        const email = formData.email.trim();
        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailOk) e.email = "Please enter a valid email address.";

      const phone = formData.phone.trim();
      if (phone.length === 0) e.phone = "Phone number is required.";
      }

      if (step === 3) {
        if (!formData.birthYear) e.birthYear = "Select a year.";
        if (!formData.birthMonth) e.birthMonth = "Select a month.";
        if (!formData.birthDay) e.birthDay = "Select a day.";
      if (!formData.sex) e.sex = "Select sex.";
      }

      if (step === 4) {
        if (formData.location.trim().length === 0) {
          e.location = "City is required.";
        }
      if (formData.displacementStatus.trim().length === 0) {
        e.displacementStatus = "Please select an option.";
      }
      }

    if (step === 5) {
      if (formData.username.trim().length === 0) {
        e.username = "Username is required.";
      }
      if (formData.password.trim().length === 0) {
        e.password = "Password is required.";
      }
    }

      setErrors(e);
      return Object.keys(e).length === 0;
    };

    const handleNext = () => {
      if (!validateCurrentStep()) return;
      setErrors({});
      if (step >= steps.length) return;
      nextStep();
    };

    const steps = [
      { component: RegisterName, title: "Your Name" },
      { component: RegisterContact, title: "Contact Information" },
      { component: RegisterMore, title: "More about you" },
      { component: RegisterLocation, title: "Your Location" },
      { component: RegisterCredentials, title: "Account Credentials" },
    ];

    const currentStep = steps[step - 1] ?? steps[0];
    const StepComponent = currentStep.component;

    return (
      <RegisterLayout
        title={currentStep.title}
        step={step}
        totalSteps={steps.length}
        nextStep={handleNext}
        prevStep={step > 1 ? prevStep : undefined}
      >
        <StepComponent data={formData} updateData={updateData} errors={errors} />
      </RegisterLayout>
    );
  }
