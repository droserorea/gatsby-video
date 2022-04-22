import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ArticlePreview = ({ title, path, image, alt, summary }) => (
    <div>
        <Card sx={{ maxWidth: 1000 }}>
            <CardMedia
                component="img"
                alt={alt}
                height="540"
                image={image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {summary}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={path}>Learn More</Link> <br />
            </CardActions>
        </Card>
        {/* 
        <Link to={path}>
            <h2>{title}</h2>
        </Link>
        <img src={image} alt={alt} width="100%" />
        <div dangerouslySetInnerHTML={{ __html: summary }} /> */}
        <br />
    </div>
);

ArticlePreview.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired
}

export default ArticlePreview;
