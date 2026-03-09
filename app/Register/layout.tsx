import React, { useState } from "react";
import RegisterName from "./registerName";
import RegisterLocation from "./registerLocation";
import RegisterCredentials from "./registerCredentials";
import { Text } from "react-native";


// i believe we should have layout with the following reusables:

//  <Image
//         source={require("../assets/images/ahaz-logo.png")}
//         style={styles.logo}
//       />
//       <Text style={styles.title}>Create Your Account</Text>

// already have an account? login 

// title of the current registration file and its position

// back and next

// footer: terms of service privacy policy deletion instruction


// the above reusables are for name, location, credentials, more, photo, contact register .tsx files.

export default function RegistrationFlow() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    location: "",
    username: "",
    password: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const updateData = (data: Partial<typeof formData>) =>
    setFormData((prev) => ({ ...prev, ...data }));

  switch (step) {
    case 1:
      return <RegisterName data={formData} updateData={updateData} nextStep={nextStep} />;
    case 2:
      return <RegisterLocation data={formData} updateData={updateData} nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <RegisterCredentials data={formData} updateData={updateData} nextStep={nextStep} prevStep={prevStep} />;
    default:
      return <Text>Registration Complete</Text>;
  }
}