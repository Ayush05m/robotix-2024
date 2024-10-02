import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/authApi';
import { Link } from 'react-router-dom';
import "../styles/Login.css";
import { useDispatch, useSelector } from "react-redux"
import { signInSuccess } from '../redux/user/userSlice';

// import { useSetRecoilState, useRecoilValue } from 'recoil';
// import { userState } from '../recoil/atom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // const setUser = useSetRecoilState(userState);
  // const user = useRecoilValue(userState);
  const [username, setUsername] = useState();
  const [userId, setUserId] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log(user);
  // console.log(userId);


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        // localStorage.setItem('user', JSON.stringify(response.data));
        setSuccess('Login successful!');
        setError('');
        setUserId(response.data.userId);
        setUsername(response.data.username);

        // console.log("User state after login:", userId);

        setTimeout(() => {
          navigate('/');
        }, 1);
      } else {
        setError('No token received');
      }
    } catch (error) {
      setError('Login failed: ' + (error.response?.data?.message || error.message));
      setSuccess('');
    }
  };
  dispatch(signInSuccess([userId, username]))
  // const user = useSelector(state => state)
  // console.log(user);
  

  return (
    <div className="loginWrap">
      <div className="login-form max-w-md mx-auto bg-gray-900 p-8 mt-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-yellow-500 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500 placeholder-yellow-500 placeholder-opacity-100"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500 placeholder-yellow-500 placeholder-opacity-100"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600 transition duration-300"
            style={{ animationDelay: '0.2s' }}
          >
            Login
          </button>
          <div className="text-center mt-6">
            <p className="text-yellow-500">
              <span>New User?</span> <Link to="/sign-up" className="text-yellow-500 hover:underline">Sign Up</Link>
            </p>
          </div>
        </form >
      </div >
    </div >
  );
};

export default Login;
