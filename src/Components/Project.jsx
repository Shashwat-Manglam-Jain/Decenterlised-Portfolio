import React, { useState, useEffect } from "react";

const Project = ({ state }) => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    const { contract } = state;
    if (!contract) {
      console.log("Contract not found");
      return;
    }

    const fetchAllProjects = async () => {
      try {
        const allProjects = await contract.methods.allProjects().call();
        console.log(allProjects);
        setProject(allProjects);
      } catch (error) {
        console.error("Error fetching projects", error);
      }
    };

    fetchAllProjects();
  }, [state]);

  return (
    <div className="container" style={{ height: '800px' }}>
      <p className="fs-1 fw-bold">Blockchain Projects</p>

      <div className="row card-group d-flex flex-wrap row-gap-3">
        {project.length > 0 && project.map((val, i) => (
          <div className="col-4 column-gap-3" key={i}>
            <div className="card m-3">
              <img
                src={val.projImg}
                className="card-img-top"
                alt={val.name}
                style={{ height: "200px", objectFit: "cover" }} // Added style for uniform image display
              />
              <div className="card-body">
                <h5 className="card-title">{val.name}</h5>
                <p className="card-text">{val.description}</p>
                <a href={val.link} className="btn btn-primary" style={{ background: '#f5470c', color: "#ffffff" }}>
                  Project visit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
