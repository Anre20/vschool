import React, { useState } from 'react';

const BadgeForm = ({ addBadge }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    birthPlace: '',
    phone: '',
    favoriteFood: '',
    about: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });

    validateForm({
      ...form,
      [name]: value
    });
  };

  const validateForm = (form) => {
    const isFormValid = Object.values(form).every(
      (value) => value.trim().length >= 3
    ) && /^\d+$/.test(form.phone);
    setIsFormValid(isFormValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBadge(form);
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      birthPlace: '',
      phone: '',
      favoriteFood: '',
      about: ''
    });
    setIsFormValid(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
        minLength="3"
      />
      <input
        type="text"
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
        minLength="3"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="birthPlace"
        value={form.birthPlace}
        onChange={handleChange}
        placeholder="Place of Birth"
        required
        minLength="3"
      />
      <input
        type="text"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
        minLength="3"
        pattern="^\d{10}$"
      />
      <input
        type="text"
        name="favoriteFood"
        value={form.favoriteFood}
        onChange={handleChange}
        placeholder="Favorite Food"
        required
        minLength="3"
      />
      <textarea
        name="about"
        value={form.about}
        onChange={handleChange}
        placeholder="Tell us about yourself"
        required
        minLength="3"
      />
      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
};

export default BadgeForm;
