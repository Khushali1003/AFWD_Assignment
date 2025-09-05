// src/components/SignupForm.jsx
import React, { useRef, useState } from 'react';

export default function SignupForm({ onSignup }) {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const [errors, setErrors] = useState({});

  function validateAll() {
    const e = {};
    const name = nameRef.current;
    const email = emailRef.current;
    const pass = passRef.current;

    if (!name.checkValidity()) e.name = name.validationMessage;
    if (!email.checkValidity()) e.email = email.validationMessage;
    if (!pass.checkValidity()) e.password = pass.validationMessage;
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (!validateAll()) return;

    const newUser = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      createdAt: new Date().toISOString(),
    };

    if (typeof onSignup === 'function') onSignup(newUser);
  }

  return (
    <section className="max-w-lg">
      <h2 className="text-xl font-semibold mb-3">Signup</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label className="block mb-2">
          <div className="text-sm">Name</div>
          <input
            ref={nameRef}
            type="text"
            required
            minLength={3}
            placeholder="Your name"
            onInput={() => setErrors((s) => ({ ...s, name: undefined }))}
            className="w-full p-2 border rounded bg-white dark:bg-slate-800"
          />
          {errors.name && <div className="text-red-600 text-sm mt-1">{errors.name}</div>}
        </label>

        <label className="block mb-2">
          <div className="text-sm">Email</div>
          <input
            ref={emailRef}
            type="email"
            required
            placeholder="you@example.com"
            onInput={() => setErrors((s) => ({ ...s, email: undefined }))}
            className="w-full p-2 border rounded bg-white dark:bg-slate-800"
          />
          {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
        </label>

        <label className="block mb-2">
          <div className="text-sm">Password</div>
          <input
            ref={passRef}
            type="password"
            required
            minLength={6}
            placeholder="6+ characters"
            onInput={() => setErrors((s) => ({ ...s, password: undefined }))}
            className="w-full p-2 border rounded bg-white dark:bg-slate-800"
          />
          {errors.password && <div className="text-red-600 text-sm mt-1">{errors.password}</div>}
        </label>

        <div className="mt-3">
          <button type="submit" className="px-4 py-2 rounded bg-indigo-600 text-white">Sign up</button>
        </div>
      </form>
    </section>
  );
}
