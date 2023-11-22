import "./App.css";
import Container from "./components/Container/Container";
import Add from "./components/Add/Add";
import Header from "./components/Header/Header";
import Card from "./components/card/Card";
import React, { useState, useEffect } from "react";
import Edit from "./components/Edit/Edit";

function App() {
  const [products, setProducts] = useState([]);
  const [isOpenform, setIsOpenform] = useState(null);
  const [editproduct, setEditproduct] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
  });

  const getProducts = async () => {
    try {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <Container>
        <Header />
      </Container>
      <hr />
      <Container>
        <div>
          <button
            className="addbtn"
            onClick={() => {
              setIsOpenform("add");
            }}
          >
            Add Product
          </button>
        </div>
        {isOpenform == "add" && (
          <Add
            closeForm={() => {
              setIsOpenform(null);
            }}
          />
        )}
        {isOpenform == "edit" && (
          <Edit
            setEditproduct={setEditproduct}
            editproduct={editproduct}
            setProducts={setProducts}
            products={products}
            closeForm={() => {
              setIsOpenform(null);
            }}
          />
        )}
        <div className="product-grid">
          <table className="table">
            <thead>
              <tr className="tableHeader">
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            {products.map((product) => (
              <Card
                key={product.id}
                product={product}
                handleDelete={handleDelete}
                setIsOpenform={setIsOpenform}
                setEditproduct={setEditproduct}
                editproduct={editproduct}
              />
            ))}
          </table>
        </div>
      </Container>
    </div>
  );
}

export default App;
