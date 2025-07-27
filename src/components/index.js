// import {React,Component} from "react";

// const index = () => {
//   const addRow = () => {

//   };
//   return (
//     <div>
//       <button onClick={addRow}></button>
//       <table>
//         <thead>
//           <tr>serial</tr>
//           <tr>description</tr>
//           <tr>price</tr>
//         </thead>
//         <tbody>
//           <tr></tr>
//           <tr></tr>
//           <tr></tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default index;

import React, { useState } from "react";
function TableRows({ rows, tableRowRemove, onValUpdate }) {
  return rows.map((rowsData, index) => {
    const { name, email, profile } = rowsData;
    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            value={name}
            onChange={(event) => onValUpdate(index, event)}
            name="name"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={email}
            onChange={(event) => onValUpdate(index, event)}
            name="email"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={profile}
            onChange={(event) => onValUpdate(index, event)}
            name="profile"
            className="form-control"
          />
        </td>
        <td>
          <button
            className="btn btn-dark"
            onClick={() => tableRowRemove(index)}
          >
            Delete Row
          </button>
        </td>
      </tr>
    );
  });
}
function Table() {
  const [rows, initRow] = useState([]);
  const addRowTable = () => {
    const data = {
      name: "",
      email: "",
      profile: "",
    };
    initRow([...rows, data]);
  };
  const tableRowRemove = (index) => {
    const dataRow = [...rows];
    dataRow.splice(index, 1);
    initRow(dataRow);
  };
  const onValUpdate = (i, event) => {
    const { name, value } = event.target;
    const data = [...rows];
    data[i][name] = value;
    initRow(data);
  };
  return (
    <>
      <h2 className="text-center">React JS Add / Delete Table Rows Example</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Profile</th>
            <th>
              <button className="btn btn-danger" onClick={addRowTable}>
                Insert Row
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRows
            rows={rows}
            tableRowRemove={tableRowRemove}
            onValUpdate={onValUpdate}
          />
        </tbody>
      </table>
    </>
  );
}
export default Table;

//adding rows in a table on clicking a addrow button in react hooks?
// class tables extends Component {
//   state = {
//     rows: []
//   };
//   handleChange = idx => e => {
//     const { name, value } = e.target;
//     const rows = [...this.state.rows];
//     rows[idx] = {
//       [name]: value
//     };
//     this.setState({
//       rows
//     });
//   };
//   handleAddRow = () => {
//     const item = {
//       name: "",
//       mobile: ""
//     };
//     this.setState({
//       rows: [...this.state.rows, item]
//     });
//   };
//   handleRemoveRow = () => {
//     this.setState({
//       rows: this.state.rows.slice(0, -1)
//     });
//   };
//   render() {
//     return (
//       <div>
//         <div className="container">
//           <div className="row clearfix">
//             <div className="col-md-12 column">
//               <table
//                 className="table table-bordered table-hover"
//                 id="tab_logic"
//               >
//                 <thead>
//                   <tr>
//                     <th className="text-center"> # </th>
//                     <th className="text-center"> Name </th>
//                     <th className="text-center"> Mobile </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {this.state.rows.map((item, idx) => (
//                     <tr id="addr0" key={idx}>
//                       <td>{idx}</td>
//                       <td>
//                         <input
//                           type="text"
//                           name="name"
//                           value={this.state.rows[idx].name}
//                           onChange={this.handleChange(idx)}
//                           className="form-control"
//                         />
//                       </td>
//                       <td>
//                         <input
//                           type="text"
//                           name="mobile"
//                           value={this.state.rows[idx].mobile}
//                           onChange={this.handleChange(idx)}
//                           className="form-control"
//                         />
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <button
//                 onClick={this.handleAddRow}
//                 className="btn btn-default pull-left"
//               >
//                 Add Row
//               </button>
//               <button
//                 onClick={this.handleRemoveRow}
//                 className="pull-right btn btn-default"
//               >
//                 Delete Row
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default tables;




// //Source: https://stackoverflow.com/questions/49171107



