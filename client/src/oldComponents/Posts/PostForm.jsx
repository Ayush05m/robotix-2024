import React, { useState } from 'react';

function PostForm({ createPost }) {
  const [post, setPost] = useState({ title: '', content: '', author: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createPost(post);
      setSuccess('Post Created successful!');
      setError('');
      setPost({ title: '', content: '', author: '' });
    } catch (error) {
      setError('failed: ' + error.message);
      setSuccess('');
    }
  };

  return (
    <>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
        <input
          type="text"
          placeholder="Title"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Content"
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
          className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />
        <input
          type="text"
          placeholder="Author ID"
          value={post.author}
          onChange={(e) => setPost({ ...post, author: e.target.value })}
          className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        >
          Add Post
        </button>
      </form>
    </>
  );
}

export default PostForm;