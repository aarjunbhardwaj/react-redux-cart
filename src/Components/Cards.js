import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import CardsData from './CardsData';
import Style from './style.css';
import { useDispatch } from 'react-redux';
import {ADD} from '../redux/actions/action';

const Cards = () => {
    const [data, setData] = useState(CardsData);
   // console.log(data);

   const dispatch = useDispatch();
   const send = (E)=>{
   dispatch(ADD(E));

   }
    return (
        <div className='container mt-3'Style={{Style}}>
            <h2 className='text-center'>Add to Cart Projects</h2>
            <div className='row d-flex justify-content-center align-items-center'>
                {
                    data.map((Element, id) => {
                        return (
                            <>
                                <Card style={{ width: '22rem',border:"none" }} className='mx-2 mt-4 card_style'>
                                    <Card.Img variant='top' src={Element.imgdata} style={{height:"16rem"}} className='mt-3'/>
                                    <Card.Body>
                                        <Card.Title> {Element.rname} </Card.Title>
                                        <Card.Text>
                                          Price : ₹ {Element.price}  
                                        </Card.Text>
                                        <div className='button_div d-flex justify-content-center'>
                                        <Button variant='primary'
                                        onClick={()=>send(Element)}
                                        className='col-lg-12' >Add to Cart</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Cards