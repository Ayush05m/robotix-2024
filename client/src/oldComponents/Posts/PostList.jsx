import React, { useState } from 'react';
import CommentSection from '../Comments/CommentSection';

function PostList({ posts, updatePost, deletePost }) {
  const [editingId, setEditingId] = useState(null);
  const [updatedPost, setUpdatedPost] = useState({ title: '', content: '' });

  const handleEdit = (id, post) => {
    setEditingId(id);
    setUpdatedPost({ title: post.title, content: post.content });
  };

  const handleUpdate = (id) => {
    updatePost(id, updatedPost);
    setEditingId(null);
  };

  return (
      <div className="space-y-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="p-6 bg-white shadow-md rounded-lg border border-gray-200"
          >
            {editingId === post._id ? (
              <>
                {/* Edit form */}
                <input
                  className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={updatedPost.title}
                  onChange={(e) => setUpdatedPost({ ...updatedPost, title: e.target.value })}
                  placeholder="Edit title"
                />
                <textarea
                  className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={updatedPost.content}
                  onChange={(e) => setUpdatedPost({ ...updatedPost, content: e.target.value })}
                  placeholder="Edit content"
                  rows="4"
                />
                <button
                  className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
                  onClick={() => handleUpdate(post._id)}
                >
                  Update
                </button>
              </>
            ) : (
              <>
                {/* Display post */}
                <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <p className="text-gray-600 font-semibold mb-4">Author: {post.author}</p>
                
                {/* Action buttons */}
                <button
                  className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  onClick={() => handleEdit(post._id, post)}
                >
                  Edit
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  onClick={() => deletePost(post._id)}
                >
                  Delete
                </button>
              </>
            )}
            {/* Comment Section */}
            <CommentSection postId={post._id} />
          </div>
        ))}
      </div>
  );
}

export default PostList;