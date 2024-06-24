import React from 'react'
import { Refresh} from '../Button';
import { SideBar } from '../sidebar/SideBar';

// export const revalidate = 12;

async function GetStoreData() {

  const res = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  if (!res.ok) {
    throw new Error("failed to fetcht the data");
  }
  return res.json();
}


const DefaultBehaviour = async() => {
    const data = await GetStoreData();
   
    
  return (
    <div className='flex w-full'>
    <SideBar/>
    <main className="flex justify-center items-center w-full">
    <div className="main_container flex flex-wrap justify-centerh-48 h-48">
      <div className="card bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="card-content text-center">
          <p className="text-xl font-semibold mb-4">Default Behaviour</p>
          <p className="text-gray-700 text-2xl">{data.unixtime}</p>
        </div>
      </div>
    </div>
  </main>
    </div>
  )
}

export default DefaultBehaviour





