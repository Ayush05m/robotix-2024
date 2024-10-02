import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { createPost, getAllPosts } from '../api/postApi';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const user = useSelector(state => state.user);
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ title: '', content: '', author: user.userid, category: '', imageUrl: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  // console.log(user);
  // console.log(post);
  

  useEffect(() => {
    getAllPosts()
      .then((response) => setPosts(response.data))
      .catch((error) => {
        console.error('Error fetching posts:', error);
        setError('Failed to fetch posts');
      });
  }, []);

  const handleCreatePost = async (postData) => {
    const cleanContent = postData.content.replace(/<p>/g, '').replace(/<\/p>/g, '');

    const dataToSend = { ...postData, content: cleanContent };
    // console.log(dataToSend);
    

    try {
      const response = await createPost(dataToSend);
      setPosts([response.data, ...posts]);

      setSuccess('Post created successfully!');
      setError('');
      setPost({ title: '', content: '', author: '', category: '', imageUrl: '' });
      navigate(`/post/${response.data._id}`);
      
    } catch (error) {
      console.error('Error creating post:', error);
      setError('Failed to create post');
      setSuccess('');
    }
  };

  // console.log(user);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user.userid);
    let id = user.userid;
    console.log(id);
    
    setPost({ ...post, author: id });

    handleCreatePost(post);
  };

  
  const handleContentChange = (content) => {
    setPost({ ...post, content });
  };

  return (
    <>
      {error && <p className="text-red-500 text-center -4">{error}</p>}
      {success && <p className="text-green-500 text-center mb-4">{success}</p>}

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-gray-900 shadow-lg rounded-lg">

        <h2 className="text-2xl font-semibold mb-6 text-center text-yellow-500">Create a New Post</h2>

        <input
          type="text"
          placeholder="Title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-500 transition-all duration-200 placeholder-yellow-500 bg-gray-800"
          required
        />

        <select
          value={post.category}
          onChange={(e) => setPost({ ...post, category: e.target.value })}
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-500 transition-all duration-200 placeholder-yellow-500 bg-gray-800"
          required
        >
          <option value="">Select a Category</option>
          <option value="Projects">Projects</option>
          <option value="News">News</option>
          <option value="AI & Machine Learning">AI & Machine Learning</option>
          <option value="Collaborations">Collaborations</option>
          <option value="Instructions">Instructions</option>
          <option value="Events">Events</option>
          <option value="Career Pathways">Career Pathways</option>
        </select>

        <div className="mb-4">
          <label className="block text-yellow-500 mb-2">Image URL:</label>
          <input
            type="text"
            placeholder="Enter image URL"
            value={post.imageUrl}
            onChange={(e) => setPost({ ...post, imageUrl: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-500 bg-gray-800 placeholder-yellow-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-yellow-500 mb-2">Content:</label>
          <Editor
            apiKey="d9z39elok5kewan1p7d8ldv5h0f2omeosnrhcs81c07rvm82"
            value={post.content}
            onEditorChange={handleContentChange}
            init={{
              height: 400,
              menubar: true,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
              skin: 'oxide-dark',        
              content_css: 'dark',
            }}
          />
        </div>
        {/* 
        <input
          type="text"
          placeholder="Author ID"
          value={post.author}
          onChange={(e) => setPost({ ...post, author: e.target.value })}
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-500 transition-all duration-200 placeholder-yellow-500 bg-gray-800"
          required
        /> */}

        <button
          type="submit"
          className="w-full bg-yellow-600 text-white p-3 rounded-lg hover:bg-yellow-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-500"
        >
          Add Post
        </button>
      </form>
    </>
  );
}
