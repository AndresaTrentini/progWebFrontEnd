import { useState } from "react";
import { Modal, Button  } from "react-bootstrap";
import GlobalMenu from "../../components/GlobalMenu";

const Tests = () => {
    const  [modalShow, setModalShow ] =useState(false);

    const handleModalclose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);


    return(
      <>
        <GlobalMenu />
        <h1> testes</h1>
        <h2>Modal Bootstrap
        
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Launch static backdrop modal
                </button>
           </h2>
  
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Meu texto de exemplo
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Understood</button>
                    </div>
                    </div>
                </div>
            </div>
                <h2>Modal React-Bootstrap
                    <Button variant='primary' onClick={handleModalShow}>Lauch demo modal</Button>
                </h2>
                <Modal
                    show={modalShow}
                    onHide={handleModalclose}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Centered Modal</h4>
                        <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleModalclose}>Close</Button>
                    </Modal.Footer>
                </Modal>
                </>
    );
}
export default Tests;
