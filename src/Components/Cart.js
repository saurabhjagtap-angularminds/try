import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReactDOM from "react-dom";

function Cart() {
  let Navigate = useNavigate();
  let location = useLocation();
  const [allselectedcard, setallselectedcard] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("Totalcards");
    const initialValue = JSON.parse(saved);
    return initialValue 
     || []
    ;
  });
  console.log(allselectedcard)
  const selected = location.state.theArray;
  const totalcards=location.state.cardcount;
  console.log("selecteddata", selected);
  const [counter, setCounter] = useState(1);
  const [totalcard, settotalcard] = useState();
  const [totalno, settotalno] = useState();
  const incrementCounter = (e) =>{
    let temp = allselectedcard
    let duplicateIndex = temp.findIndex(item=>item._id===e._id);
    if(duplicateIndex>=0){
      temp[duplicateIndex].quantity +=1 
     // setcardcount(cardcount+1)
   // setTheArray([...temp])
   setallselectedcard([...temp]) } }
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 0) {
    decrementCounter = () => settotalno(0);
  }
  useEffect(() => {
    // storing input name
    // if(allselectedcard.length)

    localStorage.setItem("secondpagedata", JSON.stringify(allselectedcard));
    
  }, [allselectedcard]);
  
console.log(totalcards)
console.log(selected)
  // console.log(counter);
  // console.log(counter);
  //localStorage.setItem("count", counter);
 // let localcount = localStorage.getItem("Totalcardsno");

  // function shooping() {
  //   localStorage.setItem("Total", JSON.stringify(allselectedcard));
  //   Navigate("/", { state: {} })
  //  // e.preventDefault();
  //   console.log('You clicked submit.');
  // }
  const clear=(e)=>{
   // localStorage.removeItem("Totalcards",e)
  console.log(e)
setallselectedcard( allselectedcard.filter((c)=>c._id!==e._id))
  }
  console.log(allselectedcard)

  return (
    <div>
      {" "}
      <div className="container">
        <div className="row">
          <h1>
            <a href="/">My Ecommerce Site</a>

            <span className="pull-right">
              <a href="cart.html">Cart ({})</a>
            </span>
          </h1>
          <hr />
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">MY CART ({allselectedcard.length})</div>
              <div className="panel-body">
              {allselectedcard&&
          allselectedcard.map((item, i) => (
                <div className="row">
                  <div className="col-md-3">
                    {" "}
                    <img
                      src={`http://interviewapi.ngminds.com/${
                        item.image 
                      }`}
                      width="100px"
                      height="200px"
                    ></img> 
                  </div>
                  <div className="col-md-3">
                    {" "}
                    {item.name}
                    <br />
                    <i className="fa fa-inr"></i>
                    {item.price * item.quantity}
                  </div>
                  <div className="col-md-3">
                    {" "}
                    quantity
                    <br />
                    <button onClick={decrementCounter}>-</button>
                    <input
                      type="text"
                      name="quantity"
                      size="5px"
                      value={item.quantity}
                    />
                    <button onClick={()=>incrementCounter(item)}>+</button>
                  </div>
                  <div className="col-md-3">
                    {" "}
                    <a className="btn btn-warning"   onClick={()=>clear(item)} >remove</a>
                  </div>
                </div>
 ))}
                <hr />
                <div className="row">
                  <div className="col-md-9">
                    <label className="pull-right">Amount Payable</label>
                  </div>
                  <div className="col-md-3 ">400</div>
                </div>
              </div>
              <div className="panel-footer">
                <a
                  className="btn btn-success"
                  // onClick={shooping}
                  onClick={() => {
                    Navigate("/", { state: {} });
                  }}
                >
                  Continue Shopping
                </a>
                <a
                  className="pull-right btn btn-danger"
                  onClick={() => {
                    Navigate("/placeorder", { state: {} });
                  }}
                >
                  Place Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
