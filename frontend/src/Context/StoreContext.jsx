import { createContext, useEffect, useState } from "react";
export const StoreContext = createContext(null);
import axios from "axios";

const StoreContextProvider = (props) => {
  const [cartitems, setcartitems] = useState({});
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);
  //const [cartitems, setCartItems] = useState({});
  const url = "http://localhost:4000";

  const addtocart = async (itemId) => {
    if (!cartitems[itemId]) {
      setcartitems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const removefromcart = async (itemId) => {
    setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const getTotalCartAmount = () => {
    let totalamount = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let iteminfo = food_list.find((product) => product._id === item);
        totalamount += iteminfo.price * cartitems[item];
      }
    }
    return totalamount;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    console.log(response.data.data);
    setFoodList(response.data.data);
  };

  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: token }
    );
    setcartitems(response.data.cartData);
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData({ token: localStorage.getItem("token") });
      }
    }
    loadData();
  }, []);

  const contextvalue = {
    food_list,
    cartitems,
    addtocart,
    removefromcart,
    setcartitems,
    getTotalCartAmount,
    url,
    token,
    setToken,
    loadCartData,
  };
  return (
    <StoreContext.Provider value={contextvalue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
