import { Button, Container, Grid2 as Grid, Typography } from '@mui/material';
import BlogCard from './components/BlogCard/BlogCard';
import './App.css';
import { useEffect, useState } from 'react';
import { getBlogs } from '../utils/network';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs(setBlogs);
  }, []);

  const handleBlogRefresh = () => {
    getBlogs(setBlogs);
  };

  return (
    <Container className="blog-container">
      <Grid container>
        <Grid size={{ xs: 8, sm: 10 }}>
          <Typography variant="h1">Blog</Typography>
        </Grid>
        <Grid size={{ xs: 4, sm: 2 }}>
          <Button variant="contained" onClick={handleBlogRefresh}>
            Refresh Blogs
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        {blogs.map((blog) => (
          <BlogCard
            setBlogs={setBlogs}
            key={blog._id}
            id={blog._id}
            title={blog.title}
            body={blog.body}
            author={blog.author}
            date={blog.date}
          />
        ))}
        {blogs.length === 0 && (
          <Typography variant="h4">There are no blogs</Typography>
        )}
      </Grid>
    </Container>
  );
}

export default App;
