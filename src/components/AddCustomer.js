import React,{ useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function AddCustomer(props) {
  const [show, setShow] = useState(props.show);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState('');
  const [industry, setIndustry] = useState('');
 


  return (
    <>
      <button variant="primary" onClick={props.toggleShow} class='block mx-auto m2 bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded'>
        +Add Customer
      </button>

      <Modal
        show={props.show}
        onHide={props.toggleShow}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>          
            <form onSubmit={(e)=>{
                e.preventDefault();
                setName('');
                setIndustry('');              
                props.newCustomer(name,industry);
                

            }}
            class="w-full max-w-sm" id='editModal'>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
                            Name
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
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" 
                        for="industry">
                            Industry
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            id="industry" 
                            type="text" 
                            value={industry}
                            onChange={(e)=>{setIndustry(e.target.value)}} 
                        />
                    </div>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
            <button className='bg-slate-600 hover:bg-slate-400 text-white font-bold py-2 px-4 rounded' onClick={props.toggleShow}>Close</button>

            <button className='bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded'  form='editModal'>Add</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

