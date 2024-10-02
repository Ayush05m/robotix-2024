import React from 'react'
import { useState,useEffect } from 'react';
import { getAllPosts } from '../api/postApi';
import PostCard from '../components/PostCard';
import {useNavigate} from 'react-router-dom';

export default function Post() {
  const [recentPosts,setRecentPost] = useState(null);
  const [userLogged, setUserlogged] = useState(localStorage.getItem('token'))
  // const [showMore,setShowMore] = useState(true);
  
  useEffect(() => {
    getAllPosts()
        .then((response) => setRecentPost(response.data))
        .catch((error) => console.log(error));
  }, []);

  // const handleShowMore = async () => { }
    const [isAdmin, setIsAdmin] = useState(true)
    const navigate = useNavigate();

    const handleUpdatePost = () => {
      navigate('/create-post')
    }
    
  return (
    <>
      <div className='flex items-center justify-end m-4'>
      {userLogged ? <button
                className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors duration-200 left-0"
                onClick={() => handleUpdatePost()}
              >
                Create A Post
              </button> : <div></div>}
      </div>
      <main className='p-3 flex flex-col min-h-screen max-w-7x items-center mx-auto'>
          <div className='text-5xl justify-center items-center'>
            <div className='flex justify-center items-center'>ROBOTIX CLUB BLOG</div>
            <div className="flex flex-wrap mt-5 max-w-7xl">
              {
                recentPosts && recentPosts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))
              }
            </div>
            {/* {showMore && (
            <button onClick ={handleShowMore} className='w-full text-teal-500 self-center text-sm py-7'>Show More</button>
          )
          } */}
          </div>
      </main>
    </>
  )
}

// TODO:
//   1. Show More Functionality