import React, { useState } from 'react'
import  MockData  from './MOCK_DATA (1).json'

export default function App() {
  const [data, setData] = useState(MockData);
  const [order, setOrder] = useState("asc");

  const sorting = (col) => {
    if (order === "asc") {
      const sorted = [...data].sort((a,b) =>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("dsc");
    }
    if (order === "dsc") {
      const sorted = [...data].sort((a,b) =>
      a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("asc");
    }
  };
  return (
    <div className="flex text-center justify-center mt-10">
      <table className=' border-2 w-3/4' >
      <tr className=' border-2 '>
        <th className=' border-2' onClick={()=>sorting("first_name")}>First Name</th>
        <th className=' border-2' onClick={()=>sorting("last_name")}>Last Name</th>
        <th className=' border-2' onClick={()=>sorting("email")}>Email</th>
        <th className=' border-2' onClick={()=>sorting("gender")}>Gender</th>
        <th className=' border-2' onClick={()=>sorting("ip_address")}>IP Address</th>
      </tr>
  {data.map((user) => (
                    
      <tr key={user.id} className=' border-2'>
          <td className='pl-3 pt-3 border-2'>{user.first_name}</td>
          <td className='pl-3 pt-3 border-2'>{user.last_name}</td>
          <td className='pl-3 pt-3 border-2'>{user.email}</td>
          <td className='pl-3 pt-3 border-2'>{user.gender}</td>
          <td className='pl-3 pt-3 border-2'>{user.ip_address}</td>
      </tr>
              ))}
              </table>
    </div>
  );
}
