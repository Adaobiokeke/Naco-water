import React, {useState}from 'react'
import {Divdatas} from './Modaldata'
import './ModalCont.css';
import Grid from '@material-ui/core/Grid'
import Modal from 'react-modal'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { NavLink } from "react-router-dom";

Modal.setAppElement('#root')
const ModalCont = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false),
    [content, setContent] = useState({});
    const handleOpen = (item) => {
        setContent(item);
        setModalIsOpen(true)
    }
    return (
        <div >
            <Modal isOpen={modalIsOpen}
                 ShouldCloseOnOverlayClick={false}
                 style={{
                     overlay:{
                         backgroundColor:'grey'
                     },
                     content:{
                         color:'black',
                         padding:100
                     }
                 }}
                 >
                    <h2 >Description</h2>
                    <img src={content.image}style={{width:100}}/>
                    <p>Price:{content.Price}</p>
                    <p>Size:{content.size}</p>
                    <p>{content.content}</p>
                    <p> Please click on <em><q>place order</q></em> below to finalize order.</p>
                    <a href='https://form.jotform.com/211665272491053' target="_blank">Place Order</a>
                    <div className="contact"> 
                    <p>To chat with an agent, plase click on the Whatsapp Icon</p>
                        <a href='https://wa.me/2348132293230'className='whatsapp_float' target='_blank'><i class='fa fa-whatsapp whatsapp-icon'></i></a>
                    </div>
                    <div className='modalbtn1'>
                    <button onClick={() => setModalIsOpen(false)} className='modalbtn'>Close</button>
                    </div>
                 </Modal>
            <div className="path">
            <ArrowBackIcon className="icon"/>
            <p>
            <NavLink to="/" className="navigation">Back</NavLink></p>
            </div>
            <Grid container spacing={5} className="gridcont">
            {Divdatas && Divdatas.map((box,index) =>
            <Grid item xs={12} sm={6} md={12}>
            <div className="containers">
                <img src={box.image} style={{width:350, height:250}}/>
                <button onClick ={() => handleOpen(box)} className='divbutton'>{box.title}</button>
            </div>
            </Grid>
            )}
            </Grid>
        </div>
    )
}

export default ModalCont;
