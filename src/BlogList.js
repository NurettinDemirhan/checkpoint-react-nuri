import { Link } from "react-router-dom";

export function BlogList({ blogs, onDelete }) {
    return (
      <div>
        {blogs.map((blog, index) => (
          <Link to={`/entry/${index}`} key={index}>
            <p >{blog.content}</p>
            <button onClick={() => onDelete(index)}>Delete</button>
            <p>Word Count: {getWordCount(blog.content)}</p>
            <hr/>
          </Link>
        ))}
      </div>
    );
  }

  const getWordCount = (text) => {
    const words = text.trim().split(/\s+/);
    return words.length;
  };