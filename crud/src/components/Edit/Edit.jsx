import "../Add/Add.css";
import { useState } from "react";

const Edit = ({ closeForm, editproduct, setProducts, products }) => {
  const [edit, setEdit] = useState({
    id: editproduct.id,
    title: editproduct.title,
    description: editproduct.description,
    price: editproduct.price,
  });
  const handleChange = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(edit.name + " has been edited");
    closeForm();
    const upDatedProduct = products.map((product) => {
      if (product.id === edit.id) {
        return edit;
      } else {
        return product;
      }
    });
    setProducts(upDatedProduct);
  };

  return (
    <div
      className="editContent"
      onClick={(e) => {
        if (e.target.className === "editContent") closeForm();
      }}
    >
      <div className="edit">
        <h2 className="headerText">Edit Prodecut</h2>
        <form>
          <div className="formGroup">
            <label htmlFor="name">New Name</label>
            <input
              defaultValue={edit.title}
              name="title"
              type="text"
              placeholder="Enter Name..."
              onChange={handleChange}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="description">New Description</label>
            <textarea
              defaultValue={edit.description}
              name="description"
              cols="30"
              rows="2"
              onChange={handleChange}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="price">New Price</label>
            <input
              defaultValue={edit.price}
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

export default Edit;
