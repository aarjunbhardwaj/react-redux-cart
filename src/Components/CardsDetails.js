import React, { useEffect,useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ADD, DLT, Remove } from '../redux/actions/action';

const CardsDetails = () => {
  const [data,setData] = useState([]);
  console.log(data);
  const {id} = useParams();
  //console.log(id);
  
  const history = useNavigate();
  const dispatch = useDispatch();

  const getdata = useSelector((state)=>state.cartreducer.carts);
  //console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter((E)=>{
      return E.id === id
    });
    setData(comparedata);
  }
  
  // add data
  const send = (e)=>{
    dispatch(ADD(e))
  }

  const dlt = (id) =>{
    dispatch(DLT(id));
    history("/");
  }

// remove one item  
const remove = (item) => {
  dispatch(Remove(item))  
  }


  useEffect(()=>{
    compare();
  },[id])
  
  return (
    <div className='container mt-2'>
    <h2 className='text-center'>Items Details Page</h2>
    <section className='container mt-3'>
      <div className='iteamsdetails'>
      {
        data.map((Element)=>{
          return (
            <>
            <div className='items_img'>
          <img src={Element.imgdata} alt='' />
        </div>
        <div className='details'>
          <Table>
            <tr>
              <td>
                <p><strong>Restaurant</strong> :{Element.rname}</p>
                <p><strong>Price</strong> :₹ {Element.price}</p>
                <p><strong>Dishes</strong> :{Element.address}</p>
                <p><strong>Total</strong> :₹ {Element.price * Element.qnty}</p>
                <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:"100",cursor:"pointer",background:"#ddd",color:"#111"}}>
                 <span style={{fontSize:24}} onClick={Element.qnty<=1 ? ()=>dlt(Element.id):()=>remove(Element)}>-</span>
                 <span style={{fontSize:22}}>{Element.qnty}</span>
                 <span style={{fontSize:24}} onClick={()=>send(Element)}>+</span>        
                </div>
              </td>
              <td>
                <p><strong>Rating : </strong><span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{Element.rating} ★ </span> </p>
                <p><strong>Order Review : </strong><span>{Element.somedata}</span> </p>
                <p><strong>Remove : </strong><span><i className='fas fa-trash' style={{color:"red",cursor:"pointer",fontSize:20}} onClick={()=>dlt(Element.id)}></i></span></p> 
              </td>
            </tr>
          </Table>
        </div>
       </>
          )
        })
      }
        
      </div>
    </section>
    </div>
  )
}

export default CardsDetails