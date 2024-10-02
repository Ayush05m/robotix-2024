import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, signup } from '../api/authApi';
import { Link } from 'react-router-dom';
// import "../styles/SignUp.css"
import { signInFailure, signInSuccess } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const setUser = useSetRecoilState(userState);
  const user = useSelector(state => state.user)
  const [userId, setUserid] = useState('');


  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await signup({ username, email, password });
      console.log(response.data);
      setSuccess('Signup successful!');
      setError('');
      // userId = response.data._id
      setUserid(response.data._id);
      useEffect(() => {
        console.log(userId);
      }, [userId])

      navigate('/')
      // directLogin();
    } catch (error) {
      setError('Signup failed. Please try again.');
    }
  };

  const directLogin = async () => {
    try {
      const response = await login({ email, password });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        // localStorage.setItem('user', JSON.stringify(response.data));
        setSuccess('Login successful!');
        setError('');
        setTimeout(() => {
          // navigate('/');
        }, 1);
        dispatch(signInSuccess([userId, username]))

      } else {
        setError('No token received');
      }
    } catch (error) {
      setError('Login failed: ' + (error.response?.data?.message || error.message));
      setSuccess('');
    }
  };



  return (
    <div className="signup max-w-md mx-auto bg-gray-900 p-8 mt-10 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-center text-yellow-500 mb-6">Sign Up</h2>

      {/* Display error and success messages */}
      {/* {error && <p className="text-red-500 text-center">{error}</p>}
      {success && <p className="text-green-500 text-center">{success}</p>} */}

      <form onSubmit={handleSignup} className="space-y-6">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Name"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500 placeholder-yellow-500 placeholder-opacity-100"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500 placeholder-yellow-500 placeholder-opacity-100"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500 placeholder-yellow-500 placeholder-opacity-100"
        />

        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500 placeholder-yellow-500 placeholder-opacity-100"
        />

        <button
          type="submit"
          className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600 transition duration-300"
        >
          Signup
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-yellow-500">
          Already have an account? <Link to="/log-in" className="text-yellow-500 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}