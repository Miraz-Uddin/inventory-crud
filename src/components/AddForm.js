import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddForm = (props) => {
  let navigate = useNavigate();

  const [allValues, setAllValues] = useState({
    title: "",
    price: "",
    quantity: "",
    weight: "",
    color: "",
    thumbnail: "",
  });

  const changeValue = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  const { title, price, quantity, weight, color, thumbnail } = allValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      title === "" ||
      price === "" ||
      quantity === "" ||
      weight === "" ||
      color === "" ||
      thumbnail === ""
    ) {
      console.log("empty field exists");
    } else {
      axios
        .post(`http://localhost:4001/${props.urlPath}`, allValues)
        .then((data) => {
          navigate(`/${props.urlPath}`, { state: data });
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-4 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={title}
                  onChange={changeValue}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  name="price"
                  value={price}
                  onChange={changeValue}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">
                  Quantity
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="quantity"
                  name="quantity"
                  value={quantity}
                  onChange={changeValue}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="weight" className="form-label">
                  Weight
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="weight"
                  name="weight"
                  value={weight}
                  onChange={changeValue}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="color" className="form-label">
                  color
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="color"
                  name="color"
                  value={color}
                  onChange={changeValue}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="thumbnail" className="form-label">
                  Thumbnail Picture
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="thumbnail"
                  name="thumbnail"
                  value={thumbnail}
                  onChange={changeValue}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddForm;
