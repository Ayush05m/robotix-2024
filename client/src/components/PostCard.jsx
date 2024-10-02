import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function PostCard({post}) {
  return (
    <div className="my-2 px-2 w-full md:w-1/2 lg:my-5 lg:px-5 lg:w-1/3">
      <article className="overflow-hidden rounded-xl shadow-md transition-shadow hover:shadow-lg bg-white">
        <a href={`/post/${post._id}`}>
          <img
            alt="Post Image"
            className="block h-[260px] w-full object-cover transition-transform duration-300 hover:scale-105"
            src={post.imageUrl}
          />
        </a>

        <header className="flex items-start justify-between leading-tight p-3 md:p-5">
          <h1 className="text-lg font-semibold text-black">
            <a
              className="no-underline hover:underline line-clamp-2"
              href={`/post/${post._id}`}
            >
              {post.title}
            </a>
          </h1>
          <p className="text-sm text-black">
            {post && new Date(post.updatedAt).toLocaleDateString()}
          </p>
        </header>

        <footer className="flex items-center justify-between p-3 md:p-5">
          <a className="flex items-center no-underline hover:underline text-gray-900 dark:text-white">
            <button
              type="button"
              className="text-white bg-black border border-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-4 py-2"
            >
              {post && post.category}
            </button>
          </a>
        </footer>
      </article>
    </div>
  )
}

// TODO:
//   1. search by category
