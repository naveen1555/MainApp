// import React from "react";
// import "../../../index.css";

// export default function UserTable({ users }) {
//     return (
//         <table className="min-w-full table-auto border">
//             <thead className="bg-gray-200">
//                 <tr>
//                     <th className="p-2 border">Name</th>
//                     <th className="p-2 border">Username</th>
//                     <th className="p-2 border">Email</th>
//                     <th className="p-2 border">City</th>
//                     <th className="p-2 border">Company</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {users.map((user) => (
//                     <tr key={user.id} className="text-center">
//                         <td className="p-2 border">{user.name}</td>
//                         <td className="p-2 border">{user.username}</td>
//                         <td className="p-2 border">{user.email}</td>
//                         <td className="p-2 border">{user.address.city}</td>
//                         <td className="p-2 border">{user.company.name}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     );
// }

import React from "react";
import "./UserTable.css";

const UserTable = ({ users }) => {
    return (
        <div className="table-container">
            <table className="user-table">
                <thead>
                    <tr className="table-row">
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
