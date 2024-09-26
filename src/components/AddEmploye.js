import React,{ useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function AddEmploye(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [img, setImg] = useState('');



  return (
    <>
      <button variant="primary" onClick={handleShow} class='block mx-auto m2 bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded'>
        +Add Employee
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>          
            <form onSubmit={(e)=>{
                e.preventDefault();
                setName('');
                setRole('');
                setImg('');
                props.newEmployee(name,role,img);
                

            }}
            class="w-full max-w-sm" id='editModal'>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
                            Full Name
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="name" 
                            type="text" 
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}                            
                        />
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="role">
                            Role
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            id="role" 
                            type="text" 
                            value={role}
                            onChange={(e)=>{setRole(e.target.value)}} 
                        />
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                        for="img">
                            Image URL
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            id="img" 
                            type="text" 
                            value={img}
                            onChange={(e)=>{setImg(e.target.value)}} 
                        />
                    </div>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <button className='bg-slate-600 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded' onClick={handleClose}>Close</button>

            <button className='bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded' onClick={handleClose} form='editModal'>Add</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmploye;