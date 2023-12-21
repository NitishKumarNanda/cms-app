import React, { useContext, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import URLContext from '../URLContext';
import Questions from './Question.json';

export default function SignUp() {
  const securityQuestions = Questions;
  const navigate = useNavigate();
  const location = useLocation();
  const { tab, courseID } = location.state || {};
  const { url } = useContext(URLContext);
  const [error, setError] = useState();
  const [inputs, setInputs] = useState({ 'name': '', 'email': '', 'password': '', 'confirmPassword': '', 'ques': '', 'ans': '' });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs.Password !== inputs.ConfirmPassword) {
      setInputs(values => ({ ...values, 'password': '', 'confirmPassword': '' }))
      setError("Password not matching");
      return;
    } else {
      const response = await axios.post(url + 'newUser', { ...inputs })
      if (response.data.status === 200) navigate('/users/login', { state: { tab: tab, courseID: courseID } });
      else if (response.data.status === 400) setError(response.data.error_msg);
    }
  }
  return (
    <section className="gradient-form" style={{ backgroundColor: "#eee", width: '100%' }}>
      <div className="container py-5 ">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <h4 className="mt-1 mb-5 pb-1">Placement with Mehta</h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <p style={{ fontWeight: 700 }}>Please details to enter your account</p>
                      {
                        error && <p style={{ color: 'red' }}>{error}</p>
                      }
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="name">Name*</label>
                        <input type="text" id="name" className="form-control" name='name' onChange={handleChange} placeholder='Full Name' required />

                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="email">Email address*</label>
                        <input type="email" id="email" className="form-control" name='email' onChange={handleChange} placeholder='Email-ID' required />

                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">Password*</label>
                        <input type="password" id="password" className="form-control" name='password' onChange={handleChange} placeholder='Password' required />

                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="confirmPassword">Confirm Password*</label>
                        <input type="password" id="confirmPassword" className="form-control" name='confirmPassword' onChange={handleChange} placeholder='Confirm Password' required />

                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="ques">Security Question*</label>
                        <select id="ques" className="form-select" name='ques' onChange={handleChange} required>
                          <option value="">Select a Security Question</option>
                          {securityQuestions.map((question, index) => (
                            <option key={index} value={question}>{question}</option>
                          ))}
                        </select>
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="ans">Security Answer*</label>
                        <input type="ans" id="ans" className="form-control" name='ans' onChange={handleChange} placeholder='Security Answer' required />

                      </div>
                      <div className="text-center pt-1 mb-5 pb-1">
                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" style={{ width: '80%' }}>
                          Sign up
                        </button>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-4">
                        <NavLink to={'/users/login'}>Click here to Login</NavLink>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">Discover the Mehta Placements Advantage in Just 15 Days! Embark on a Journey to Your Dream Job with Expert Live Sessions, Skill Assessments, Dedicated Placement Support, Realistic Mock Interviews, and Exclusive Access to Top Company Interviews—Your Fast-Track to Success!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
