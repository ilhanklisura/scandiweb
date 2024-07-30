import axios from "axios";

// Index 0 for production, and 1 for development.
const API = [
   `https://touristhorizons.com/backend/`,
   `http://localhost:8000/`,
][1];

export const fetchAllProducts = async () => {
   return await axios.get(API, {
      headers: {
         "Content-Type": "application/json",
      },
   });
};

export const saveProduct = async (productData) => {
   return await axios.post(`${API}/routes/post.php`, productData, {
      headers: {
         "Content-Type": "application/json",
      },
   });
};

export const deleteProduct = async (productId) => {
   const data = new FormData();
   data.append("id", productId);

   return await axios.post(`${API}/routes/delete.php`, data, {
      headers: {
         "Content-Type": "application/json",
      },
   });
};
