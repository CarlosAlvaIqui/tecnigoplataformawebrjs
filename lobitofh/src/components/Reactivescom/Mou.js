import React from 'react';
import {Modal, Button,} from 'react-bootstrap'

const Mou = (props) => {
    console.log(props.algo)

    const [show, setShow] = React.useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setShow(true)}>
        {props.ninoni}
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              {props.algo}
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
export default Mou;