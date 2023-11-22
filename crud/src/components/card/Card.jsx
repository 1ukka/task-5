import "./Card.css";
import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

const Card = ({
  product,
  handleDelete,
  setIsOpenform,
  setEditproduct,
}) => {
  const confirmDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      handleDelete(product.id);
    }
  };

  const handleEdit = () => {
    setIsOpenform("edit");
    setEditproduct(product);
  };

  return (
    <>
      <tbody>
        <tr>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td>{product.description}</td>
          <td>${product.price}</td>
          <td>
            <span className="span">
              <BsFillTrashFill
                className="trash"
                onClick={() => confirmDelete()}
              />
              <BsFillPencilFill
                className="editbtn"
                onClick={() => {
                  handleEdit();
                }}
              />
            </span>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Card;
