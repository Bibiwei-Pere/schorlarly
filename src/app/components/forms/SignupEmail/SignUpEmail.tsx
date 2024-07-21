'use client';
import './SignupEmail.scss';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Oyoyo from '../../assets/images/Oyoyo.svg';
import EyeSlash from '../../assets/images/eye-slash.svg';
import ReactFlagsSelect from 'react-flags-select';
import Background from '../../authBackground/Background';

const SignupEmail = (account: any) => {
  const [business, setBussines] = useState('');
  const [selected, setSelected] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log('SignupEmail Successful');
  };

  return (
    <section className="signupEmail">
      <Background />
      <div className="container">
        <Image src={Oyoyo} alt="Envelope" />
        <h2>Create an account</h2>
        <p className="text">
          Already have an account?{' '}
          <Link className="btn" href="/auth/login">
            Sign In
          </Link>
        </p>
        <form onSubmit={handleSubmit} className="formContainer">
          <div className="sub_wrapper">
            <label>
              Email
              <input type="email" placeholder="email@example.com" required />
            </label>
            <span>
              <label>
                First name
                <input type="text" placeholder="Enter your name" required />
              </label>
              <label>
                Last name
                <input type="text" placeholder="Enter your name" required />
              </label>
              <label>
                User name
                <input type="text" placeholder="Enter your name" required />
              </label>
              <label>
                Gender
                <input type="text" placeholder="Enter your name" required />
              </label>
            </span>
          </div>
          <div className="select">
            <label>Country of residence</label>
            <ReactFlagsSelect
              selectButtonClassName="menu-flags-button"
              className="menu-flags"
              searchable
              searchPlaceholder="Search countries"
              selected={selected}
              onSelect={(code) => setSelected(code)}
            />
          </div>
          {account.account.account === 'Business' && (
            <div className="select2">
              <label>Business type</label>
              <ReactFlagsSelect
                selectButtonClassName="menu-flags-button"
                className="menu-flags"
                placeholder="Select a business type"
                countries={['PR', 'BS']}
                customLabels={{
                  PR: 'Premium',
                  BS: 'Basic',
                }}
                selected={business}
                onSelect={(code) => setBussines(code)}
              />
            </div>
          )}
          <div className="sub_wrapper">
            <label>
              Password
              <div>
                <input type="password" placeholder="Enter password" required />
                <Image src={EyeSlash} alt="EyeSlash" />
              </div>
            </label>
            <label>
              Comfirm Password
              <div>
                <input type="password" placeholder="Enter password" required />
                <Image src={EyeSlash} alt="EyeSlash" />
              </div>
            </label>
          </div>

          <div className="terms">
            <input type="checkbox" />
            <p>
              By clicking Create account, I agree that I have read and accepted
              the <Link href="#">Terms of Use</Link> and{' '}
              <Link href="#">Privacy Policy</Link>.
            </p>
          </div>
          <button className="btn">Create account</button>
        </form>
      </div>
    </section>
  );
};

export default SignupEmail;
