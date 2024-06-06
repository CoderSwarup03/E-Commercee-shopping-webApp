import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import "../components/modal.css"
import { useNavigate } from 'react-router-dom';

const CheckOutPage = () => {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("visa")


    // Handle Tab Change
    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    }

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // direct come to HOME page
    const location = useState();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"

    const handleOrderConfirm = () => {
        alert("Your Order is confirm successfully!!")
        localStorage.removeItem("cart");
        navigate(from,{replace: true})
    }

    return (
        <div className='modalCart'>
            <Button variant='primary' className='py-2' onClick={handleShow}>Proceed to Checkout</Button>
            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                className='model fade'
                centered
            >
                <div className="modal-dialog">
                    <h5 className='px-3 mb-3'>Select Your Payment Method</h5>
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="tabs mt-3">
                                <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                    <li className='nav-item' role='presentation'>
                                        <a className={`nav-link ${activeTab === "visa" ? "active" : ""}`}

                                            id='visa-tab'
                                            data-toggle="tab"
                                            role='tab'
                                            aria-controls='visa'
                                            aria-selected={activeTab === "visa"}
                                            onClick={() => handleTabChange("visa")}
                                            href="#visa"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsAFtwrA8bhy1TTZ_Ui44bpV03t1JvYZxn6Rg0-meFRlx5erjsmtlL8mQlR60LE65Fn1CL8rrOKlQnZKn9rW_tnefPJYNMz-7S1dB-EKEwrODT9ot-M7a_aoRiDRueKUI5Pa7RyQQhTF823uT1RCzOWHEfmXzmH9UwERKWJ7WdNFSNydhzvzQV2oLVhrA/s712/images%20(65).jpeg" alt=""
                                                width="80" />
                                        </a>
                                    </li>
                                    <li className='nav-item' role='presentation'>
                                        <a className={`nav-link ${activeTab === "phonepay" ? "active" : ""}`}

                                            id='phonepay-tab'
                                            data-toggle="tab"
                                            role='tab'
                                            aria-controls='phonepay'
                                            aria-selected={activeTab === "phonepay"}
                                            onClick={() => handleTabChange("phonepay")}
                                            href="#phonepay"><img src="https://seeklogo.com/images/P/phone-pe-2020-logo-3817ECEEA6-seeklogo.com.png" alt=""
                                                width="80" />
                                        </a>
                                    </li>
                                </ul>
                                {/* content */}
                                <div className="tab-content" id="myTabContent">
                                    {/* Visa Content */}
                                    <div className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}
                                        id='visa'
                                        role='tabpanel'
                                        aria-labelledby='visa-tab'
                                    >
                                        {/* visa tab content */}
                                        <div className='mt-4 mx-4'>
                                            <div className="text-center">
                                                <h5>Cradit Cart</h5>
                                            </div>
                                            <div className='form mt-3'>
                                                <div className="inputbox">
                                                    <input className='form-control' required type="text" name='name' id='name' />
                                                    <span>Cardholder Name</span>
                                                </div>
                                                <div className="inputbox">
                                                    <input className='form-control' required type="text" name='number' id='number' min="1" max="99" />
                                                    <span>Card Number</span> <i className='fa fa-eye'></i>
                                                </div>
                                                <div className="d-flex flex-row">
                                                    <div className="inputbox">
                                                        <input className='form-control' required type="text" name='number' id='number' min="1" max="99" />
                                                        <span>Expiration Date</span>
                                                    </div>
                                                    <div className="inputbox">
                                                        <input className='form-control' required type="text" name='number' id='number' min="1" max="99" />
                                                        <span>CVV</span>
                                                    </div>
                                                </div>
                                                <div className="px-5 pay">
                                                    <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Order Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* PhonePay Content */}

                                    <div className={`tab-pane fade ${activeTab === "phonepay" ? "show active" : ""}`}
                                        id='phonepay'
                                        role='tabpanel'
                                        aria-labelledby='phonepay-tab'
                                    
                                    >
                                        <div className='mt-4 mx-4'>
                                            <div className="text-center">
                                                <h5>Phonepay Account Info</h5>
                                            </div>
                                            <div className='form mt-3'>
                                                <div className="inputbox">
                                                    <input className='form-control' required type="text" name='name' id='name'/>
                                                    <span>Enter Your UPI ID</span>
                                                </div>
                                                <div className="inputbox">
                                                    <input className='form-control' required type="text" name='number' id='number' min="1" max="99" />
                                                    <span>Enter Your Name</span> 
                                                </div>
                                                <div className="d-flex flex-row">
                                                    <div className="inputbox">
                                                        <input className='form-control' required type="text" name='number' id='number' min="1" max="99" />
                                                        <span>Extra Info</span>
                                                    </div>
                                                    <div className="d-flex flex-row">
                                                        <div className="inputbox">
                                                            <input
                                                                type='text'
                                                                name='number'
                                                                id='number'
                                                                min='1'
                                                                max='99'
                                                                className='form-control'
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="px-5 pay">
                                                    <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Proceed To Pay</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* payment desclimer */}
                                <p className='mt-3 px-4 p-Disclaimer'><em>Payment Disclaimer:</em>In no event shall payment or partial payment by Owner for any meterial or service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default CheckOutPage

//YT: 2:15:30