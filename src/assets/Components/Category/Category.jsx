import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategory } from '../../../Services/allApi';
import { toast } from 'react-toastify';
import CategoryList from './CategoryList';

function Category() {

  const [show, setShow] = useState(false);
  const [addRes , setAddRes] = useState('')

  const [category, setCategory] = useState({
    catID: "", catName: "", catVideos: []
  })

  const handleSubmit = async () => {
    const { catID, catName, catVideos } = category

    if (!catID || !catName) {
      toast.info('fill input fields')
    } else {
      const res = await addCategory(category)
      if (res.status === 201) {
        setCategory({ catID: "", catName: "", catVideos: [] })
        handleClose()
        setAddRes(res)
        toast.success('Catefory Added Successfully')
      }

    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='d-grid'>
        <button onClick={handleShow} className='btn btn-success'>Add Category</button>
      </div>


      <CategoryList addRes={addRes} />

      <Modal
        size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <FloatingLabel controlId="floatingID" label="Category Id" className="mb-3" >
              <Form.Control type="text" placeholder="Category ID" onChange={(e) => { setCategory({ ...category, catID: e.target.value }) }} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingName" label="Catgeory Name">
              <Form.Control type="text" placeholder="Category Name" onChange={(e) => { setCategory({ ...category, catName: e.target.value }) }} />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category