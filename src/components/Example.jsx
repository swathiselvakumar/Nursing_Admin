import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosTutorial = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editItem, setEditItem] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getNextId = () => {
    return data.length > 0 ? data[data.length - 1].id + 1 : 1;
  };

  const addNewItem = async () => {
    const newId = getNextId();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          id: newId,
          title: newItem,
          body: "Sample body",
          userId: 1,
        }
      );
      console.log("New item added:", response.data);
      fetchData(); // Refresh data after adding new item
      setNewItem(""); // Clear input field
    } catch (error) {
      console.error("Error adding new item:", error);
    }
  };

  const updateItem = async (id) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          title: editItem,
          body: "Updated body",
          userId: 1,
        }
      );
      console.log("Item updated:", response.data);
      fetchData(); // Refresh data after updating item
      setEditItem(""); // Clear input field
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  const deleteItem = async (id) => {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      console.log("Item deleted:", response.data);
      fetchData(); // Refresh data after deleting item
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.title} -{" "}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h3>Add New Item</h3>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addNewItem}>Add</button>
      <h3>Edit Item</h3>
      <input
        type="text"
        value={editItem}
        onChange={(e) => setEditItem(e.target.value)}
      />
      <button onClick={() => updateItem(1)}>Update</button>
    </div>
  );
};

export default AxiosTutorial;
