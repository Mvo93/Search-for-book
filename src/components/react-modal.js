import Modal from 'react-bootstrap/Modal';
import React from 'react';
import '../styles/modal.scss';

function StaticExample({info,setInfo,show,setShow}) {
    console.log(info,"in modal")
  return (
<Modal
        show={show}
        onHide={() => {
            setInfo({})
            setShow(false)}}        
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            
           {info.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
        <div className='mainmodal'>
            <div className="modalimgDiv">
                <img src={info.imageLinks.thumbnail} className="modalimg"  alt="..."/>
            </div>
            <div className='info'>
                <hr/>
                    <p>Authors: <span className='authors'><b>{info.authors?info.authors.join(` ,`):"Without author"}</b></span></p>
                    <p>Categories: <b>{info.categories?info.categories.join(` ,`):" Without categories"}</b></p>
                <hr/>
            </div>
        </div>
            <hr/>
            <p>{info.description}</p>
            </>
           
        </Modal.Body>
      </Modal>
  );
}

export default StaticExample;