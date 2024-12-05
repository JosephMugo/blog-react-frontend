import axios from 'axios';

export const getBlogs = (setBlogs) => {
  axios
    .get('http://localhost:3001/blogs')
    .then((res) => {
      setBlogs(res.data);
    })
    .catch((err) => {
      console.log(err);
      alert('Something went wrong!');
    });
};

export const handleDelete = (id, setBlogs) => {
  axios
    .delete(`http://localhost:3001/blogs/${id}`)
    .then(() => {
      getBlogs(setBlogs);
    })
    .catch((err) => {
      console.log(err);
      alert('Something went wrong!');
    });
};
