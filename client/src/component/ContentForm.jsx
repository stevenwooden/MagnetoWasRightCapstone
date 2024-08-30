import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


const ContentForm = () => {
    const [author, setAuthor] = useState('');
    const [link, setLink] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const postData = {
            author,
            link,
        };

        try {
            const response = await fetch('/data/magneto_was_right.posts.json', {
                method: 'POST',
                body: JSON.stringify(postData),
            });

            if (response.ok) {
                alert('Post added successfully!');
                // Reset form fields
                setAuthor('');
                setLink('');
            } else {
                throw new Error('Failed to add post');
            }
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
        <Button variant="primary" type="submit" style={{marginTop: 10}}>
            Submit
        </Button>
        </Form>
    );
};

export default ContentForm;