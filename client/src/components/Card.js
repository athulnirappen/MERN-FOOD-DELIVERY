import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart,useCart } from "./ContextReducer";
const Card = (props) => {
 let foodItem = props.item;
  let dispatch = useDispatchCart()
  let data = useCart()
  const priceref=useRef()

  let options = props.options
  let priceOptions = Object.keys(options)
  const [qty, setQty] = useState(1)
  const [size,setSize]=useState('')
  
  const HandleAddtocart = async () => {
    let food = [];
    for (let item of data) {
      if (item.id === props.foodItem._id) {
        food = item;

        break;
      }
    }
     if (food !== []) {
      if (food.size === size) {
      await dispatch({ type: "UPDATE", id:props.foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
        });
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }

    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });



  
    
  }
  let finalPrice = qty * parseInt(options[size])
  useEffect(() => {
    setSize(priceref.current.value)
  },[])



  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "500px", alignItems: "center" }}
        >
          <img
            style={{ height: "180px", objectFit: "fill" }}
            src={props.foodItem.img}
            className="card-img-top rounded mx-auto d-block "
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <p className="card-text">This is some important text</p>
            <div className="container w-100">
              <select
                className="m-2 h-100  bg-success rounded"
                onChange={(e) => setQty(e.target.value)}
              >
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select
                className="m-2 h-100  bg-success rounded"
                ref={priceref}
                onChange={(e) => setSize(e.target.value)}
              >
                {priceOptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              <div className="d-inline h-100 fs-5">${finalPrice}</div>
            </div>
          </div>
          <button
            className={"btn btn-success justify-center ms-2"}
            style={{ marginBottom: "10px" }}
            onClick={HandleAddtocart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
