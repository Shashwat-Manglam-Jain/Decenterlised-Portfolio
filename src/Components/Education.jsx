import React from 'react';

const Education = () => {
  return (
    <div className="container" style={{height:'450px'}}>
      <p className="fs-1 fw-bold">Education</p>
      <div className="row d-flex">
        <div className="col-6">
          <div className="card">
            <div className="card-header">Schooling</div>
            <div className="card-body">
              <h5 className="card-title">KV1 Sagar M.P</h5>
              <p className="card-text">Board - CBSE</p>
              <p className="card-text">2008-2022</p>
              <a href="https://no1sagarcantt.kvs.ac.in/" className="btn btn-primary"  style={{background:'#f5470c',color:"#ffffff"}}>School visit</a>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-header">Graduation</div>
            <div className="card-body">
              <h5 className="card-title">Oriental Group of Instution</h5>
              <p className="card-text">Affilated - RGPV</p>
              <p className="card-text">20022-2026</p>
              <a href="https://oriental.ac.in/" className="btn btn-primary"  style={{background:'#f5470c',color:"#ffffff"}}>College visit</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
