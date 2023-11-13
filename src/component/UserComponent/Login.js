import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './user.css'
import axios from 'axios';
import UserContext from './UserContext';
import URLContext from '../URLContext';

export default function Login() {
  const { url } = useContext(URLContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [token, setToken] = useState();
  const { user, setUser } = useContext(UserContext);
  const [ err, setErr ]= useState(null);

  const handleSubmit = async (element) => {
    element.preventDefault();
    const queryParams = `?action=${encodeURIComponent('login')}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
    try {
      const response = await axios.get(url+queryParams);
      console.log(response.data);
      if (response.data.status === 1) {

        setToken(response.data.token);

        localStorage.setItem('placeMehta', JSON.stringify({ "token": response.data.token, "email": email,"account_type":response.data.detail.account_type }));

        setUser({ "token": response.data.token, "email": email ,"account_type":response.data.detail.account_type })
        navigate('/users');
      } else {
        console.log("Login failed:", response.data.message);
        setPassword('');
        setErr(response.data.message)
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setErr(error.message);
    }
  }

  useEffect(() => {
    
    if (user!=null) {
      navigate('/users');
      console.log(user.email);
    }
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
                      <h4 className="mt-1 mb-5 pb-1">Placement with Metha</h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <p>Please login to your account</p>
                      {
                        err &&
                        <p style={{textAlign:'center', backgroundColor:'salmon',padding:5}}>{err}</p>
                      }
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example11">Username</label>
                        <input type="email" id="form2Example11" className="form-control"
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
                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" style={{ width: '80%' }}>Log
                          in</button><br />
                        <a className="text-muted" href="/signup">Forgot password?</a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button type="button" className="btn btn-outline-danger" onClick={() => { navigate('/users/signup') }}>Create new</button>
                      </div>

                    </form>

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
