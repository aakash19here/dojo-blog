import React from 'react';
import BlogList from '../../components/BlogList/BlogList';
import useFetch from '../../hooks/useFetch';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('https://blog-api-aakash19here.herokuapp.com/blogs');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;

//  const handleClick = (e) => {
//   console.log('Hello', e);
//  };
// <button type="button" onClick={handleClick}>Click Me</button>

// If we want to give arguments to the function
//   const handleClickAgain = (name, e) => {
//     console.log(`Hello ${name}`, e);
//   };
// <button type="button" onClick={(e) => handleClickAgain('Aakash', e)}>Click Me Again</button>

// const [name, setName] = useState('Aakash');
// const handleClick = () => {
//   setName('Jadhav');
// };
// <p>{name}</p>
// <button type="button" onClick={handleClick}>Click me to change Name</button>

// const handleDelete = (id) => {
//   const newBlogs = blogs.filter((blog) => blog.id !== id);
//   setBlogs(newBlogs);
// };
