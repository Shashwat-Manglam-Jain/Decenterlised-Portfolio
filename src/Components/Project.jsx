import React from "react";

const Project = () => {
  return (
    <div className="container" style={{height:'800px'}}>
      <p className="fs-1 fw-bold">Blockchain Projects</p>
      <div className="row card-group d-flex flex-wrap row-gap-3">
        <div className="col-4 column-gap-3">
          <div class="card m-3" >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIcwt4U72qbCuk1Bzes5qODmYmrN2xp9MvOw&s"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Decenterlised Amazon Clone</h5>
              <p class="card-text">
              The **Decentralized Amazon Clone** is a blockchain-powered e-commerce platform enabling peer-to-peer transactions without intermediaries, ensuring transparent pricing, secure payments, and user-controlled data with fair, direct marketplace interactions.
              </p>
              <a href="#" className="btn btn-primary"  style={{background:'#f5470c',color:"#ffffff"}}>Project visit</a>

            </div>
          </div>
      
      </div>
      <div className="col-4 column-gap-3">
        <div class="card m-3" >
          <img
            src="https://i.ytimg.com/vi/lnAO9OC2QKY/maxresdefault.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Decenterlised Youtube Clone</h5>
            <p class="card-text">
            The **Decentralized YouTube Clone** is a blockchain-based video platform where creators control content, ensuring censorship resistance, transparent monetization, and content ownership, with direct token-based rewards and community-driven governance.
            </p>
            <a href="#" className="btn btn-primary"  style={{background:'#f5470c',color:"#ffffff"}}>Project visit</a>

          </div>
        </div>
      </div>
      <div className="col-4 column-gap-3">
        <div class="card m-3" >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0XJqhd6kujFOcczCcdvT0-847JumKPKKWw&s"
            class="card-img-top"
            alt="Decenterlised Voting App"
          />
          <div class="card-body">
            <h5 class="card-title">Decenterlised Voting App</h5>
            <p class="card-text">
            The **Decentralized Voting App** offers a secure, transparent, and tamper-proof voting process using blockchain technology, ensuring voter anonymity, immutability of votes, and full transparency for an auditable, trust-driven election system.
            </p>
            <a href="#" className="btn btn-primary"  style={{background:'#f5470c',color:"#ffffff"}}>Project visit</a>

          </div>
        </div>
      </div>

    </div>  </div>
  );
};

export default Project;
