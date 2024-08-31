import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';

const ContentForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newPost = {
        title,
        author,
        content,
        image,
        }

        try {
        const response = await axios.post('http://localhost:8080/api/posts/create', newPost);
        console.log(response.data.message);
        // Reset form fields
        setTitle('');
        setAuthor('');
        setContent('');
        setImage('');
        } catch (error) {
        console.error('Error submitting content:', error.response?.data?.error || error.message);
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
            <Form.Label>Image</Form.Label>
            <Form.Control
            type="text"
            placeholder="Enter image url here"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
        </Form.Group>

        <Form.Group className="formInputs" controlId="formLink">
            <Form.Label>Title</Form.Label>
            <Form.Control
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </Form.Group>

        <Form.Group className="formInputs" controlId="formLink">
            <Form.Label>Content</Form.Label>
            <Form.Control
            type="text"
            placeholder="Say what you want"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            />
        </Form.Group>

        <Button variant="primary" type="submit" style={{marginTop: 10}}>
            Submit
        </Button>
        </Form>
    );
};

export default ContentForm;