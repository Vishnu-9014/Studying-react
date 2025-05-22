import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import {useState} from "react";
import Error from "./components/Error";
import "../app.css";
import Contact from "./components/Contact";
import About from "./components/About";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import { Router } from "react-router-dom";
// Restaurant Card Component
const RestaurantCard = ({ name, cuisine, rating }) => (
  <div className="restaurant-card">
    <h2>{name}</h2>
    <p><strong>Cuisine:</strong> {cuisine}</p>
    <p><strong>Rating:</strong> ⭐ {rating}</p>
  </div>
);

// Restaurant List
const restaurantList = [
  { id: 1, name: "Domino's", cuisine: "Pizza", rating: 4.5 },
  { id: 2, name: "KFC", cuisine: "Chicken", rating: 4.3 },
  { id: 3, name: "Subway", cuisine: "Sandwich", rating: 4.2 },
  { id: 4, name: "McDonald's", cuisine: "Burgers", rating: 4.1 },
  { id: 5, name: "Haldiram's", cuisine: "Indian", rating: 4.4 },
  { id: 6, name: "Pizza Hut", cuisine: "Pizza", rating: 4.0 },
  { id: 7, name: "Biryani Blues", cuisine: "Biryani", rating: 4.6 },
  { id: 8, name: "Barbeque Nation", cuisine: "Grill", rating: 4.3 },
  { id: 9, name: "Wow! Momo", cuisine: "Tibetan", rating: 4.2 },
  { id: 10, name: "Burger King", cuisine: "Burgers", rating: 4.1 },
  { id: 11, name: "Faasos", cuisine: "Wraps", rating: 4.0 },
  { id: 12, name: "Behrouz Biryani", cuisine: "Biryani", rating: 4.7 },
  { id: 13, name: "Taco Bell", cuisine: "Mexican", rating: 4.2 },
  { id: 14, name: "Mast Kalandar", cuisine: "North Indian", rating: 4.3 },
  { id: 15, name: "Chai Point", cuisine: "Beverages", rating: 4.5 },
  { id: 16, name: "Chinese Wok", cuisine: "Chinese", rating: 4.4 },
  { id: 17, name: "Dunkin'", cuisine: "Coffee & Donuts", rating: 4.1 },
  { id: 18, name: "The Belgian Waffle", cuisine: "Desserts", rating: 4.6 },
  { id: 19, name: "FreshMenu", cuisine: "Fusion", rating: 4.0 },
  { id: 20, name: "Baskin Robbins", cuisine: "Ice Cream", rating: 4.3 },
];

// Body Component
const Body = () => {
  const [filteredList, setFilteredList] = useState(restaurantList);

  const filterTopRated = () => {
    const topRated = restaurantList.filter((res) => res.rating > 4.3);
    setFilteredList(topRated);
  };

  return (
    <div className="app">
      <h1>🍽️ Restaurant Explorer</h1>
      <button onClick={filterTopRated} className="filter-btn">
        Show Top Rated (4.3+)
      </button>
      <div className="restaurant-list">
        {filteredList.map((res) => (
          <RestaurantCard
            key={res.id}
            name={res.name}
            cuisine={res.cuisine}
            rating={res.rating}
          />
        ))}
      </div>
    </div>
  );
};

const AppLayout=()=>{
  return (
    <div>
      <Header/>
     <Outlet/>
    </div>
  );
};
const appRouter=createBrowserRouter([
  {
    path :"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/restaurants/:resId",
    element:<RestaurantMenu/>
  }
    ],
    errorElement:<Error/>
  }
]);

// Render to DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}
  future={{v7_startTransition:true}} />);


