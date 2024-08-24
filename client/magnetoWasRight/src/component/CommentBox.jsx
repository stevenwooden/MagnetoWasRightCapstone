import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
function CommentBox() {
    return (
        <Form>
        <Form.Group style={{marginTop:30}} className="mb-3" >
            <Form.Label className='caption'>Chime In!</Form.Label>
            <Form.Control placeholder='What do you think?' as="textarea" rows={3}/>
            <Button style={{marginTop:5}} variant= 'primary' >Post</Button>
        </Form.Group>
        </Form>
    );
    }

export default CommentBox;