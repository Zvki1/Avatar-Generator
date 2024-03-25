/* eslint-disable react/prop-types */
import { useState } from 'react';

const NameInput = ({onChangeName}) => {
    const [name, setName] = useState('')
    const handleChangeName = (e) =>{
        setName(e.target.value)
        onChangeName(e.target.value)
    }
  return (
    <div className="text-white pt-7 flex flex-col items-center">
        <h3 className="text-xl text-center">Enter your name please <br /> (defeault is person)</h3>
        <form action="" className="flex flex-col items-center gap-4 w-full pt-3 ">
        <input 
        type="search" id="default-search" className=" w-3/4 p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "  placeholder='Enter your name here...' 
        value={name}
        onChange={handleChangeName}
        />
           
        </form>
    </div>
  )
}

export default NameInput