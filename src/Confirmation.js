import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast'

const Confirmation = () => {

    const [show, setShow] = useState(true);

    return ( 
        <Toast 
            style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                zIndex: 10
            }}
            show={show} onClose={() => setShow(false)} delay={3000} autohide
        >
            <Toast.Header>
                <strong className="mr-auto">My App</strong>
                <small>just now</small>
            </Toast.Header>
            <Toast.Body>Your friend request has been sent!</Toast.Body>
        </Toast>
    );
}
 
export default Confirmation;