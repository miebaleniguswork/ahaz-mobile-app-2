export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  sex: "Male" | "Female" | "";
  location: string;
  displacementStatus: string;
  username: string;
  password: string;
};

export type FormErrors = Partial<Record<keyof FormData, string>>;

