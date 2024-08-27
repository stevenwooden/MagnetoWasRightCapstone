import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';

const ContentForm = () => {
    const [author, setAuthor] = useState('');
    const [link, setLink] = useState('');
    const [video, setVideo] = useState('');
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [article, setArticle] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        await axios.post('http://localhost:3000/api/posts', {
            author,
            link,
            video,
            image,
            title,
            article,
            date,
        });
        alert('Post added successfully!');
        // Reset form fields
        setAuthor('');
        setLink('');
        setVideo('');
        setImage('');
        setTitle('');
        setArticle('');
        setDate('');
        } catch (error) {
        console.error('Error adding post:', error);
        alert('Failed to add post. Please try again.');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="formInputs" controlId="formAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control
            type="text"
            placeholder="Enter author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            />
        </Form.Group>

        <Form.Group className="formInputs" controlId="formLink">
            <Form.Label>Link</Form.Label>
            <Form.Control
            type="text"
            placeholder="Enter external link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            />
        </Form.Group>

        <Form.Group className="formInputs" controlId="formVideo">
            <Form.Label>Video URL</Form.Label>
            <Form.Control
            type="text"
            placeholder="Enter video URL"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
            />
        </Form.Group>

        <Form.Group className="formInputs" controlId="formImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
            type="text"
            placeholder="Enter image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
        </Form.Group>

        <Form.Group className="formInputs" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
            type="text"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </Form.Group>

        <Form.Group className="formInputs" controlId="formArticle">
            <Form.Label>Article</Form.Label>
            <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter article content"
            value={article}
            onChange={(e) => setArticle(e.target.value)}
            />
        </Form.Group>

        <Form.Group className="formInputs" controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
    );
};

export default ContentForm;