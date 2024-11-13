import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "../axios";

type RegisterForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

function Register(): JSX.Element {
  const [formData, setFormData] = useState<RegisterForm>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/Auth/register", formData);
      console.log("User registered:", response.data);
    } catch (error: any) {
      console.error("Error registering user:", error.response?.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" onChange={handleChange} placeholder="نام" />
      <input
        name="lastName"
        onChange={handleChange}
        placeholder="نام خانوادگی"
      />
      <input name="email" onChange={handleChange} placeholder="نام کاربری" />
      <input
        name="password"
        type="password"
        onChange={handleChange}
        placeholder="کلمه عبور"
      />
      <button type="submit">ثبت‌نام</button>
    </form>
  );
}

export default Register;
