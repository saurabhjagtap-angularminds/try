import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ReactDOM from "react-dom";
function Placeorder() {
  let Navigate = useNavigate();
  let location = useLocation();
  return (
    <div>
      <div class="container">
        <div class="row">
          <h1>
            <a href="/">My Ecommerce Site</a>

            <span class="pull-right">
              <a href="cart.html">Cart (0)</a>
            </span>
          </h1>
          <hr />
          <div class="col-md-12">
            <div class="panel panel-default">
              <div class="panel-heading">Place Order</div>
              <div class="panel-body">
                <form class="form-horizontal" role="form" />

                <table class="table table-striped">
                  <thead class="table-head">
                    <tr>
                      <td>Product Name</td>
                      <td> Quntity</td>
                      <td> SubTotal</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>H2O Sb104 Stainless Steel Sports </td>
                      <td>2</td>
                      <td>
                        <i class="fa fa-inr"></i>400
                      </td>
                    </tr>
                    <tr>
                      <td>bbb</td>
                      <td>1</td>
                      <td>
                        <i class="fa fa-inr"></i>1000
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Total</strong>
                      </td>
                      <td>
                        <strong> 3</strong>
                      </td>
                      <td>
                        <strong>
                          <i class="fa fa-inr"></i>2400{" "}
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />

                <br />
                <div class="form-group">
                  <label for="inputName3" class="col-sm-2 control-label">
                    Enter Order Details
                  </label>
                </div>
                <div class="form-group">
                  <label for="inputName3" class="col-sm-2 control-label">
                    Name
                  </label>
                  <div class="col-sm-6">
                    <input
                      class="form-control"
                      id="inputName3"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputEmail3" class="col-sm-2 control-label">
                    Address
                  </label>
                  <div class="col-sm-6">
                    <textarea
                      class="form-control"
                      id="inputEmail3"
                      placeholder="Deliver Address"
                    ></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-2 control-label"></label>
                  <div class="col-sm-6">
                    <a href="" class="btn btn-warning">
                      Confirm Order
                    </a>
                  </div>
                </div>
              </div>
              <form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Placeorder;
