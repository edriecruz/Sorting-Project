import { useState } from 'react';
import {sample} from './Data'

function App() {
  const [data, setData] = useState();
  return (
    <div className="flex text-center justify-center mt-10">
      <table className=' border-2 w-3/4' >
      <tr className=' border-2 '>
        <th className=' border-2'>First Name</th>
        <th className=' border-2'>Last Name</th>
        <th className=' border-2'>Email</th>
        <th className=' border-2'>Gender</th>
        <th className=' border-2'>IP Address</th>
      </tr>
  {sample.map((user) => (
                    
      <tr  key={user.id} className=' border-2'>
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

export default App;
