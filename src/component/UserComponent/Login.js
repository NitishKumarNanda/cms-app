import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './user.css'
import axios from 'axios';
import UserContext from './UserContext';
import URLContext from '../URLContext';
import Questions from './Question.json';


export default function Login() {
  //////////////////////////////////////////////
  // const { tab,courseID } = useParams();
  //////////////////////////---------------------------------------------
  const { url } = useContext(URLContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { user, setUser } = useContext(UserContext);
  const [err, setErr] = useState(null);
  const [resetForm, setResetForm] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [ques, setQues] = useState();
  const [ans, setAns] = useState();
  const [success, setSuccess] = useState();
  //---------------------------------------
  const securityQuestions = Questions
  const location = useLocation();
  const { tab, courseID } = location.state || {};

  //----------------------------------------
  const handleSubmit = async (element) => {
    element.preventDefault();
    // const queryParams = `?action=${encodeURIComponent('login')}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;

    try {
      const response = await axios.get(url + `login/?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);

      if (response.data.status === 200) {
        localStorage.setItem('placeMehta', JSON.stringify({ "token": response.data.data.token, "email": response.data.data.email, "type": response.data.data.type }));
        setUser({ "token": response.data.data.token, "email": response.data.data.email, "type": response.data.data.type })
        if (tab === null || tab === undefined || tab === "") {
          navigate("/users");
        } else {
          navigate('/users/' + tab + '/' + courseID);
        }
      } else {
        console.log("Login failed:", response.error);
        setPassword('');
        setErr(response.data.error)
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setErr(error.message);
    }
  }
  const handleReset = async (element) => {
    element.preventDefault();
    const payload = {
      email: email,
      ques: ques,
      ans: ans,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    }
    try {
      const response = await axios.put(url + 'passwordReset', payload);

      if (response.data.status === 200) {
        setSuccess(response.data.message);
        setPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setResetForm(false);
      } else {
        console.log("Password rest failed:", response.error);
        setQues('');
        setAns('');
        setNewPassword('');
        setConfirmPassword('');
        setErr(response.data.error)
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setErr(error.message);
    }
  }
  useEffect(() => {
    if (user != null) {
      if (tab === null || tab === undefined || tab === "") {
        navigate("/users");
      } else {
        navigate('/users/' + tab + '/' + courseID);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])
  return (
    <section className="gradient-form" style={{ backgroundColor: "#eee", width: '100%' }}>
      <div className="container py-5 ">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6 col-md-12">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <h4 className="mt-1 mb-5 pb-1">Placement with Mehta</h4>
                    </div>
                    {!resetForm ?
                      <form onSubmit={handleSubmit}>
                        <p>Please login to your account</p>
                        {
                          err &&
                          <p style={{ textAlign: 'center', backgroundColor: 'salmon', padding: 5 }}>{err}</p>
                        }
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form2Example11">Username</label>
                          <input type="email"
                            id="form2Example11"
                            className="form-control"
                            value={email || ""}
                            placeholder="UserName or E-mail Address" onChange={(e) => { setEmail(e.target.value) }} />

                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form2Example22">Password</label>
                          <input type="password" id="form2Example22" className="form-control"
                            value={password || ''}
                            placeholder='Password'
                            onChange={(e) => { setPassword(e.target.value) }} />

                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" style={{ width: '80%' }}>
                            Log in
                          </button>
                          <br />
                          <p className="text-muted" onClick={() => { setResetForm(true) }} style={{ cursor: 'pointer' }}>Forgot password?</p>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button type="button" className="btn btn-outline-danger" onClick={() => { navigate('/users/signup', { state: { tab: 'purchase', courseID: courseID } }) }}>Create new</button>
                        </div>

                      </form>
                      :
                      <form onSubmit={handleReset}>
                        <p>Forgotten Password</p>
                        {err && (
                          <p style={{ textAlign: "center", backgroundColor: "salmon", padding: 5 }}>{err}</p>
                        )}
                        {
                          success &&
                          <p style={{ textAlign: 'center', backgroundColor: 'lightseagreen', padding: 5 }}>{success}</p>
                        }
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form2Example11">
                            Email-ID*
                          </label>
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            value={email || ""}
                            placeholder="E-mail ID"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="ques">Security Question*</label>
                          <select id="ques" className="form-select" name='ques' onChange={(e) => {
                            setQues(e.target.value);
                          }} required>
                            <option value="">Select a Security Question</option>
                            {securityQuestions.map((question, index) => (
                              <option key={index} value={question}>{question}</option>
                            ))}
                          </select>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="ans">Security Answer*</label>
                          <input type="ans" id="ans" className="form-control" name='ans' onChange={(e) => {
                            setAns(e.target.value);
                          }} placeholder='Security Answer' required />

                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="newPassword">
                            New Password*
                          </label>
                          <input
                            type="password"
                            id="newPassword"
                            className="form-control"
                            value={newPassword || ""}
                            placeholder="New Password"
                            onChange={(e) => {
                              setNewPassword(e.target.value);
                            }}
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="confirmPassword">
                            Confirm Password*
                          </label>
                          <input
                            type="password"
                            id="confirmPassword"
                            className="form-control"
                            value={confirmPassword || ""}
                            placeholder="Confirm Password"
                            onChange={(e) => {
                              setConfirmPassword(e.target.value);
                            }}
                          />
                        </div>
                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="submit"
                            style={{ width: "80%" }}
                          >
                            Reset Password
                          </button>
                          <br />
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Already have an account?</p>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => {
                              setResetForm(false);
                            }}
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    }
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 d-flex align-items-center gradient-custom-2">
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
