import React, { useState, useCallback } from 'react';
import { BlogList } from './BlogList';
import {Blog} from "./Blog";
import "./App.css"
import {data, addSomethingToData, removeSomethingFromData } from './DataBase';



function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [totalWordCount, setTotalWordCount] = useState(0);

  const handleBlogSubmit = useCallback((content) => {
    const newBlog = { content };
    setBlogs((prevBlogs) => [newBlog, ...prevBlogs]);
    setTotalWordCount((prevWordCount) => prevWordCount + getWordCount(content));
    addSomethingToData(content)
  }, []);

  const handleBlogDelete = useCallback((index) => {
    const deletedBlog = blogs[index];
    const updatedBlogs = [...blogs.slice(0, index), ...blogs.slice(index + 1)];
    setBlogs(updatedBlogs);
    removeSomethingFromData(deletedBlog)
    setTotalWordCount((prevWordCount) => prevWordCount - getWordCount(deletedBlog.content));
  }, [blogs]);

  const getWordCount = useCallback((text) => {
    const words = text.trim().split(/\s+/);
    return words.length;
  }, []);

  return (
    <div>
      <h1>My Blog</h1>
      <BlogList blogs={blogs} onDelete={handleBlogDelete} />
      <Blog onBlogSubmit={handleBlogSubmit} />
      <p>Total Word Count: {totalWordCount}</p>
    </div>
  );
}

export default BlogPage;

