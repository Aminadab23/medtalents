import  { useState } from 'react';
import { BsSearch } from "react-icons/bs";
const SearchJob = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  
  return (
    <div className='border rounded-lg w-fit p-5 h-96'>
    <div className='flex m-5'>
        <input type="text" placeholder='Search job' className='border rounded-md px-3'/><span><BsSearch size={28} className='border rounded-md cursor-pointer hover:bg-slate-100'/></span>
    </div>
    <div className='py-5'>
        <div className='flex'>
    <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="block form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-400"
      />
      <label className="ml-2 text-gray-700">Old</label> </div> 
      <div className='flex'>
    <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="block form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-400"
      />
      <label className="ml-2 text-gray-700">New</label> </div> 
      <div className='flex'>
    <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="block form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-400"
      />
      <label className="ml-2 text-gray-700">All</label> </div> 
</div>
</div>
  )
}

export default SearchJob