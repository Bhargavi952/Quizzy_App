import React, { useEffect,useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CategoryCard from "./CategoryCard";
import { Zoom } from "react-slideshow-image";
import pic1 from "../../Images/1.svg";
import pic2 from "../../Images/2.svg";
import pic3 from "../../Images/3.svg";
import pic4 from "../../Images/4.svg";
import pic5 from "../../Images/5.svg";
import pic6 from "../../Images/6.svg";
import pic7 from "../../Images/7.svg";
import { useDispatch, useSelector } from "react-redux";
import "react-slideshow-image/dist/styles.css";
import axios from "axios";

const Home = () => {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7];
  const zoomOutProperties = {
    indicators: true,
    scale: 0.4,
  };

 let userId = useSelector(state=>state.auth.userId)
console.log(userId);
const [data,setData] =useState("")
const fetchData= async()=>{
  let category = await axios.get("http://localhost:4000/category")
   console.log(category.data.data)
  let x = category.data.data
  setData(x)
  console.log(data)
}

  useEffect(()=>{
    fetchData()
  },[])


  return (
    <div>
      <Navbar />
    <div>
    <CategoryCard data={data} />
    </div>
      <div style={{ width: "50%", margin: "auto" }}>
        <Zoom {...zoomOutProperties}>
          {images.map((each, index) => (
            <div key={index} style={{ width: "100%" }}>
              <img style={{ objectFit: "cover", width: "100%" }} src={each} />
            </div>
          ))}
        </Zoom>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
