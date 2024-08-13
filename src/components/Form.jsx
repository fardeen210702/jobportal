import React from "react";

function Form() {
  return (
    <form action="" className="flex flex-col md:items-start md:px-6  gap-6 text-sm px-2 sm:items-center">

      <div className="flex flex-col w-[320px] sm:w-[400px] md:w-[90%] lg:w-[330px] xl:w-[450px] gap-2 ">
        <label htmlFor="" className="font-semibold"> Name :</label>
        <input
         placeholder=" Enter your name"
          type="text"
         className="border border-gray-400 p-2 sm:p-3 rounded-sm text-xs" />
      </div>
      
      <div className="flex flex-col w-[320px] sm:w-[400px] md:w-[90%] lg:w-[330px] xl:w-[450px] gap-2">
        <label htmlFor="" className="font-semibold"> Email :</label>
        <input
         placeholder="Enter your E-mail"
          type="text"
         className="border border-gray-400 p-2 sm:p-3 rounded-sm text-xs" />
      </div>

      <div className="flex flex-col w-[320px] sm:w-[400px] md:w-[90%] lg:w-[330px] xl:w-[450px] gap-2">
        <label htmlFor="" className="font-semibold"> Mobile :</label>
        <input
         placeholder="Enter your ph.no"
          type="number"
          className="border border-gray-400 p-2 sm:p-3 rounded-sm text-xs"
          required
        />
      </div>

      <div className="flex flex-col w-[320px] sm:w-[400px] md:w-[90%] lg:w-[330px] xl:w-[450px] gap-2">
        <label htmlFor="" className="font-semibold"> Password :</label>
        <input
         placeholder="Enter your password"
          type="text" 
        className="border border-gray-400 p-2 sm:p-3 rounded-sm text-xs" />
      </div>

      <div className="flex flex-col w-[320px] sm:w-[400px] md:w-[90%]  lg:w-[330px] xl:w-[450px] gap-2">
        <label htmlFor="" className="font-semibold"> Confirm password :</label>
        <input
         placeholder="Confirm your password"
          type="text" 
        className="border border-gray-400 p-2 sm:p-3 rounded-sm text-xs" />
      </div>

      <div className="flex flex-col w-[320px] sm:w-[400px] md:w-[90%] lg:w-[330px] xl:w-[450px] gap-2">
        <label htmlFor="" className="font-semibold">Headline :</label>
        <textarea
        placeholder="Add description for yourself"
          name=""
          id=""
          cols="30"
          rows="3"
          className="border border-gray-400 p-2 sm:p-3 rounded-sm text-xs"
        ></textarea>
      </div>


      <div className="flex flex-col w-[320px] sm:w-[400px] md:w-[90%] lg:w-[330px] xl:w-[450px] gap-2">
        <label htmlFor="" className="font-semibold"> City :</label>
        <input
         placeholder="Enter city"
          type="text" 
        className="border border-gray-400 p-2 sm:p-3 rounded-sm text-xs" />
      </div>


      <div className="flex flex-col w-[320px] sm:w-[400px] md:w-[90%] lg:w-[330px] xl:w-[450px] gap-2">
        <label htmlFor="" className="font-semibold"> Url :</label>
        <input  type="text" 
        className="border border-gray-400 p-2 sm:p-3  text-xs rounded-sm" 
        placeholder="add link to your portfolio"/>
      </div>


      <div  className="flex flex-col w-[320px] sm:w-[400px] md:w-[90%] lg:w-[330px] xl:w-[450px] gap-2">
        <input
         placeholder=""
          type="submit" value={'Register now'} className="w-fit bg-white transition-all duration-300  py-2  px-5 text-sm  font-semibold text-black rounded-sm  border border-[#E45826] hover:bg-[#E45826] hover:text-white " />

      </div>

    </form>
  );
}

export default Form;
