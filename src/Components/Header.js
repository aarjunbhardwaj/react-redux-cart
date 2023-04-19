import { React, useEffect, useState } from 'react';
import { Nav, Navbar, Container, Table } from "react-bootstrap";
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {DLT} from '../redux/actions/action';


const Header = () => {
    const [price,setPrice] = useState(0);
    console.log(price);  
    const getdata = useSelector((state)=>state.cartreducer.carts);
    console.log(getdata);
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState (null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const dlt = (id)=> {
        dispatch(DLT(id))
    }

    const total = ()=>{
        let price = 0;
        getdata.map((Element,keyframes)=>{
            price = Element.price * Element.qnty + price
        });
        setPrice(price);
    }

    useEffect(()=>{
        total();
    },[total])

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-3">Add to Cart</NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/" className="text-decoration-none text-light">Home</NavLink>
                    </Nav>
                    <Badge badgeContent={getdata.length} color="primary"
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <i className="fa fa-shopping-cart text-light" style={{ fontSize: 25, cursor: "pointer" }} aria-hidden="true"></i>
                    </Badge>
                </Container>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                      {
                        getdata.length ?
                        <div className='card_details'style={{width:"24rem",padding:10}}>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Photo</th>
                                        <th>Restaurant Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getdata.map((E)=>{
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                        <NavLink to={`/cart/${E.id}`} onClick={handleClose}>
                                                            <img src={E.imgdata} style={{width:"5rem", height:"5rem"}} alt="" />
                                                        </NavLink>    
                                                        </td>
                                                        <td>
                                                            <p>{E.rname}</p>
                                                            <p>Price : ₹ {E.price}</p>
                                                            <p>Quantity : {E.qnty}</p>
                                                            <p style={{color:"red", fontSize:20,cursor:"pointer"}} onClick={()=>dlt(E.id)}>
                                                                <i className='fas fa-trash smalltrash'></i>
                                                            </p>
                                                        </td>
                                                        <td className='mt-5' style={{color:"red", fontSize:20,cursor:"pointer"}}onClick={()=>dlt(E.id)}>
                                                        <i className='fas fa-trash largetrash'></i>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }
                                    <p className='text-center'> Total : ₹ {price} </p>
                                </tbody>
                            </Table>
                        </div>:
                        <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
                        <i className='fa fa-close smallclose' style={{position:"absolute",top:2,right:20,fontSize:"23",cursor:"pointer"}}
                        onClick={handleClose}
                        ></i>      
                        <p style={{fontSize:22}}>Your Cart is Empty</p>
                        <img src='./cart.gif' alt=""className='emptycart_img' style={{width:"5rem",padding:10}}/>
                    </div>
                      }

                    
                </Menu>
            </Navbar>
        </>
    )
}

export default Header