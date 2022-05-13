import React, { useState } from 'react'
import  MockData  from './MOCK_DATA (1).json'
import { Container } from './Container';

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
    <div className=" text-center justify-center mt-10">
      <button className='m-2' onClick={()=>sorting("first_name")}>sort by first name</button>
      <button className='m-2' onClick={()=>sorting("last_name")}>sort by last name</button>
    <div className="flex flex-wrap justify-center">

  {data.map((user) => (
                    <div className='m-12 border-2 p-6 w-1/6'>
                      <Container details={user} key={user.id} />
                    </div>
              ))}
        </div>
    </div>
  );
}
