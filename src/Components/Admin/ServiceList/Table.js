import React from 'react';

const Table = ({ table }) => {
    return (
      
            <tr>
               <td>
                   {table.name}
               </td>
               <td>
                   {table.email}
               </td>
               <td>
                   {table.projectName}
               </td>
               <td>
                   {table.projectDetails}
               </td>
            </tr>
           
               
       
    );
};

export default Table;