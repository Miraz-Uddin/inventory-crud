import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function SingleView(props) {
  let params = useParams();
  const navigate = useNavigate();
  const removeKey = props.removeKey;
  const item = props.items.find((x) => x.id === Number(params.id));

  if (item !== undefined) {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-6 mx-auto p-5">
              <div
                className="card mb-3 position-relative"
                style={{ maxWidth: "540px" }}
              >
                <div className="position-absolute" style={{ right: "0" }}>
                  <button className="btn btn-dark" onClick={() => navigate(-1)}>
                    Go Back
                  </button>
                </div>
                <div className="row g-0">
                  <div className="col-md-3 d-flex align-items-center">
                    <div>
                      <img
                        src={item.thumbnail}
                        className="img-fluid rounded-start"
                        alt={`${item.thumbnail}`}
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="card-body py-0">
                      <div>
                        {Object.keys(item)
                          .filter((item) => !removeKey.includes(item))
                          .map((key) => (
                            <p className="card-text mb-1" key={key}>
                              <span>
                                {key}: {item[key]}
                              </span>
                            </p>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SingleView;
