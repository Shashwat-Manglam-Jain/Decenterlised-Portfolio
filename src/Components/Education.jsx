import React, { useEffect, useState } from 'react';

const Education = ({ state }) => {
  const [educate, seteducate] = useState([]);

  useEffect(() => {
    const { contract } = state;
    if (!contract) {
      console.log("Contract not found");
      return;
    }

    const fetchEducation = async () => {
      try {
        const education = await contract.methods.getEducation().call();
        console.log(education);
        seteducate(education);
      } catch (error) {
        console.error("Error fetching education details", error);
      }
    };

    fetchEducation();

  }, [state]);

  return (
    <div className="container " style={{ height: '450px' }}>
      <p className="fs-1 fw-bold">Education</p>
      <div className="d-flex flex-wrap" >
      {educate.length > 0 && educate.map((val, i) => (
        <div  key={i} style={{ width: '50%' }}>
        
            <div className="card">
              <div className="card-header">{val.typee}</div>
              <div className="card-body">
                <h5 className="card-title">{val.title}</h5>
                <p className="card-text">{val.affiliated}</p>
                <p className="card-text">{val.year}</p>
                <a href={val.link} className="btn btn-primary" style={{ background: '#f5470c', color: "#ffffff" }}>
                  School visit
                </a>
              </div>
            </div>
          </div>

      ))}</div>
    </div>
  );
}

export default Education;
