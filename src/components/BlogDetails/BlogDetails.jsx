import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data: blog, error, isPending } = useFetch(`https://blog-api-aakash19here.herokuapp.com/blogs/${id}`);
  const handleClick = () => {
    fetch(`https://blog-api-aakash19here.herokuapp.com/blogs/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        history.push('/');
      });
  };
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By - {blog.author}</p>
          <div>{blog.body}</div>
          <button
            className="deleteBtn"
            type="button"
            onClick={handleClick}
          >
            Delete
          </button>
        </article>
      )}

    </div>
  );
};

export default BlogDetails;
