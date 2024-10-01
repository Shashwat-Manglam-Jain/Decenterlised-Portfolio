import React from "react";

const Buy = () => {
  return (<div className="" style={{height:'250px'}}>
    <div className="container d-flex justify-content-center" >
      <button
        type="button"
        className="btn "
        style={{ background: "#ffdd00", color: "#ffffff",borderRadius:'7px' }}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDmXWmjrJr1l4vZX3DtPi_kVLjFk4cAht_CQ&s"
          alt=""
          style={{width:'100px'}}
        />
        <span className="fs-2 " style={{position:'relative',left:'-10px',top:'10px'}}>Buy me a coffee 👍</span>
      
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-4" id="exampleModalLabel">
              Buy me a coffee 👍 ...
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <span className="fs-5">Enter Ethereum Amount</span>
              <input
                type="number"
                className="my-3"
                style={{ width: "100%" }}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style={{ background: "#f5470c", color: "#ffffff" }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div></div>
  );
};

export default Buy;
