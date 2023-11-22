import "./Add.css";
import { useState } from "react";

const Add = ({ closeForm }) => {
  const [formsubmit, setFormSubmit] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    setFormSubmit({ ...formsubmit, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(formsubmit.name);
    closeForm();
  }

  return (
    <div
      className="editContent"
      onClick={(e) => {
        if (e.target.className === "editContent") closeForm();
      }}
    >
      <div className="edit">
        <h2 className="headerText">Add Prodecut</h2>
        <form>
          <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input
              defaultValue={formsubmit.name}
              name="name"
              type="text"
              placeholder="Enter Name..."
              onChange={handleChange}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="description">Description</label>
            <textarea
              defaultValue={formsubmit.description}
              name="description"
              cols="30"
              rows="2"
              onChange={handleChange}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="price">Price</label>
            <input
              defaultValue={formsubmit.price}
              name="price"
              type="number"
              placeholder="Enter Price..."
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submitbtn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
