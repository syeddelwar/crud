import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

export default function Home() {
  return (
    <>
      <div className=" flex space-x-4 justify-center mt-5 items-center">
        FirstName : 
        
        <input
          type="search"
          className="  px-5 py-2 outline-none  focus:ring-0  border border-green-500 rounded-md "
        />

        <button className="    bg-green-600 px-4  rounded-md text-white  p-2">
          Submit
        </button>
      </div>

      {
        // <section>
        //   <div className=" container mx-auto">
        //     <h1 className=" text-4xl text-center font-bold  mt-10">
        //       Task Management App
        //     </h1>
        //     <div className=" border w-[50%] mt-5 mx-auto  border-gray-100 shadow-md h-[25rem]">
        //       <div className=" flex space-x-4 justify-center mt-5 items-center">
        //         <input
        //           type="search"
        //           className="  px-5 py-2 outline-none  focus:ring-0  border border-green-500 rounded-md "
        //         />
        //         <button className="    bg-green-600 px-4  rounded-md text-white  p-2">
        //           Submit
        //         </button>
        //       </div>
        //       {/* body card */}
        //       <div className=" relative  mt-5 shadow-md  h-[5rem]   flex items-center text-xl   rounded-md mx-auto justify-between  px-4 border-gray-100 w-[90%]">
        //         <p>this is sample task</p>
        //         <div
        //           className=" cursor-pointer"
        //           // onClick={() => console.log("hello")}
        //         >
        //           <HiOutlineDotsHorizontal className="  text-blue-600 text-2xl " />
        //         </div>
        //         {/* dropdown menu */}
        //         {/* <div className=" w-[10rem] absolute right-0  top-0  bg-white rounded-md border border-green-600 h-[7rem]  pl-2 shadow-lg">
        //           <ul className="  text-md space-y-2">
        //             <li className=" cursor-pointer">complte</li>
        //             <li className=" cursor-pointer">edit</li>
        //             <li className=" cursor-pointer">delete</li>
        //           </ul>
        //           <span className=" absolute  right-0 cursor-pointer top-0">
        //             <AiOutlineCloseCircle  className=" text-red-600 "/>
        //           </span>
        //         </div> */}
        //       </div>
        //     </div>
        //   </div>
        // </section>
      }
    </>
  );
}
