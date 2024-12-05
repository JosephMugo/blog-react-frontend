import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './BlogCard.css';
import { Button, CardActions } from '@mui/material';
import { handleDelete } from '../../../utils/network';

const BlogCard = ({ setBlogs, id, title, body, author, date }) => {
  const formattedDate = new Date(date);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary' }}
          gutterBottom
        >
          {body}
        </Typography>
        <Typography
          variant="overline"
          sx={{ display: 'block', color: 'text.primary' }}
        >
          Author: {author}
        </Typography>
        <Typography
          variant="overline"
          sx={{ display: 'block', color: 'text.primary' }}
        >
          Date: {formattedDate.toUTCString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="outlined"
          color="error"
          onClick={() => {
            handleDelete(id, setBlogs);
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
