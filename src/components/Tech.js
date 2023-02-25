import React from "react";

export default function Tech({mobile}) {
  return (
    <div className={mobile <=996 ? "flex container mx-auto flex-col justify-center  h-full sm:flex-row" : " flex container mx-auto flex-col justify-between sm:justify-between md:justify-between  h-full sm:flex-row " }>    
     {
      mobile  <= 966 ?
      <div className="flex flex-col sm:mb-0 mb-5  justify-center">
       <h1>Mobile</h1> 
      </div>
      :<>
      
      <div className="flex flex-col sm:mb-0 mb-5  justify-center">
        <p className="px-16 py-8 bg-red-800">1</p>
      </div>
      <div className="flex flex-col justify-center">
        <p className="px-16 py-8 mb-10 bg-red-800">1</p>
        <p className="px-16 py-8 mb-10 bg-red-800">1</p>
      </div>
      <div className="flex flex-col justify-center">
        <p className="px-16 py-8 mb-10 bg-red-800">1</p>
        <p className="px-16 py-8 mb-10 bg-red-800">1</p>
        <p className="px-16 py-8 mb-10 bg-red-800">1</p>
      </div>
      <div className="flex flex-col justify-center">
        <p className="px-16 py-8 mb-10 bg-red-800">1</p>
        <p className="px-16 py-8 mb-10 bg-red-800">1</p>
      </div>
      <div className="flex flex-col justify-center">
        <p className="px-16 py-8 bg-red-800">1</p>
      </div>
      </> 
    } 
    </div>
  );
}
