import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
function Home() {
  let Navigate = useNavigate();
  let location = useLocation();
  const [data, setData] = useState([]);
  const [nosort, setnosort] = useState("");
const [pageperitem,setpageperitem] = useState("10");
const [offset, setOffset] = useState(0);
const [pageCount, setPageCount] = useState(0)

  const [cardcount, setcardcount] = useState(0);
const [card,setcard]=useState(0);
const [theArray, setTheArray] = useState(()=>{
  const saved=localStorage.getItem("secondpagedata")
  const initialvalue=JSON.parse(saved);
  return initialvalue || []
});
const addEntryClick = (e) => {
  let temp = theArray
  let duplicateIndex = temp.findIndex(item=>item._id===e._id);
  if(duplicateIndex>=0){
    temp[duplicateIndex].quantity +=1 
    setcardcount(cardcount+1)
  setTheArray([...temp])
  }
  else
  setTheArray([...theArray, {...e,quantity:1}])

  setcardcount(cardcount+1)
  // console.log(e)
};
console.log(theArray)
  useEffect(async () => {
    const result = await axios(
      " http://interviewapi.ngminds.com/api/getAllProducts"
    );

    setData(result.data.products);
  }, [nosort]);

  console.log(data);
  useEffect(() => {
    // storing input name
    if(theArray.length)

    localStorage.setItem("Totalcards", JSON.stringify(theArray));
    localStorage.setItem("Totalcardsselected",JSON.stringify(theArray.length!="" ?theArray.length :""));
  }, [theArray,cardcount]);
  function nextpage() {
    Navigate("/Cart", { state: {theArray} })
   // e.preventDefault();
    console.log('You clicked submit.');
  }
  function sort(e){
    console.log(e.target.value)
    if(e.target.value==="LH"){
    

    const eitherSort = (data = []) => {
      const sorter = (a, b) => {
         return +a.price - +b.price;
      };
      data.sort(sorter);
   };
   eitherSort(data);
   console.log(data);
   setData([...data])
  }
else if(e.target.value==="HL"){
  
    const eitherSort = (data = []) => {
      const sorter = (b,a) => {
         return +a.price - +b.price;
      };
      data.sort(sorter);
   };
   eitherSort(data);
   console.log(data);
   setData([...data])
   
  }
  else if(e.target.value==="D"){
   setnosort("true")
    //(initialValue)
  }
  
}
function Item(e){
  console.log(e.target.value)
  setpageperitem(e.target.value)
}
   
  return (
    <div class="container">
       {/* <input type="button" value="Add" />,
        <div>{theArray.map(entry =>
          <div>{entry}</div>
        )}
        </div> */}
      
      <h1>
        <a href="/">My Ecommerce Site</a>
        {/* {data.products &&
          data.products.map((item, i) => ( */}
        <span class="pull-right">
          
           {/* <a  onClick={() => {
                    Navigate("/Cart", { state: { item } });
                  }}  */}
                  <a   onClick={nextpage} >Cart ({theArray.length})</a> 
        </span>
         {/* ))} */}
      </h1>
      
      <hr />
      <div class="row">
            <div class="col-sm-12">
                <div >
                    <label for="" class="control-label">Sort by:</label>
                    <select name="" id="" onClick={(e)=>sort(e)}>
                        <option value="D">Default</option>
                        <option value="HL">High to Low</option>
                        <option value="LH">Low to High</option>
                    </select>
                </div>
            </div>
        </div>
      <div class="row">


        {data &&
          data.map((item, i) => (
            <div className="col-md-3">
              <div className="bg-info">
                <img
                  src={`http://interviewapi.ngminds.com/${item.image}`}
                  width="100"
                  height="200"
                ></img>
                <br />
                <br />
                <p>{item.name}</p>
                <p>
                  <i class="fa fa-inr"></i>
                  {item.price}
                </p>
                <a
                  className="btn btn-warning"
                  value={item}
                  onClick={() => addEntryClick(item)}
                  > Add to Cart
                </a>
              </div>
            </div>
          ))}
      </div>
      <hr />
      <div class="row">
            <div class="col-sm-8">
                <ul class="pagination" >
                    <li class="page-item"><a class="page-link">Previous</a></li>
                    <li class="page-item active"><a class="page-link">1</a></li>
                    <li class="page-item"><a class="page-link">{data.length}</a></li>
                    <li class="page-item"><a class="page-link">3</a></li>
                    <li class="page-item"><a class="page-link">Next</a></li>
                </ul>
            </div>
            <div class="col-sm-4 text-right">
                <div >
                    <label for="" class="control-label">Items Per Page:</label>
                    <select name="" id="" onClick={(e)=>Item(e)}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
