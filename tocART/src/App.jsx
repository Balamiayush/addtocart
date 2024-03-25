import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const arr = [
    {
      name: "laptop1",
      price: "$100",
      brand: "HP",
      img: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "laptop2",
      price: "$150",
      brand: "HP",
      img: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "laptop3",
      price: "$90",
      brand: "HP",
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <main>
        <div className="container ">
          <nav>
            <div id="nleft">
              <p>hello Aayush!</p>
              <h2>find your best beans</h2>
            </div>
            <div id="nright">
              <div className="circle">
                <img
                  src="https://scontent.fmey2-1.fna.fbcdn.net/v/t39.30808-6/424955107_972521857627442_7012615843679960655_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=diLAAdcEzDcAX-YKXrp&_nc_ht=scontent.fmey2-1.fna&oh=00_AfABFHbXuS9OMlT32ztvXpUAbx-OwPWnm8xaZjrTZCoGHA&oe=660469B9"
                  alt=""
                />
              </div>
            </div>
          </nav>
          <div className="search">
            <input type="text" />
          </div>
          <div className="items">
            {arr.map((elem, index) => {
              return (
                <>
                  <div className="box">
                    <img src={elem.img} alt="" />
                    <p>{elem.name}</p>
                    <p>{elem.price}</p>
                    <p>{elem.brand}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
