// import React from 'react';
// import "../../../index.css";
// import "./Sidebar.css"
// export default function Sidebar() {
//     return (
//         //             <h2 className="sidebar-title">Testadmin</h2>
//             <ul className="sidebar-menu">
//                 <li className="sidebar-item">Dashboard</li>
//                 <li>
//                     <details className="sidebar-details">
//                         <summary className="sidebar-summary">Masters</summary>
//                         <ul className="sidebar-submenu">
//                             <li className="sidebar-subitem">Subitem 1</li>
//                             <li className="sidebar-subitem">Subitem 2</li>
//                         </ul>
//                     </details>
//                 </li>
//                 <li>
//                     <details className="sidebar-details">
//                         <summary className="sidebar-summary">Reports</summary>
//                         <ul className="sidebar-submenu">
//                             <li className="sidebar-subitem">Report A</li>
//                             <li className="sidebar-subitem">Report B</li>
//                         </ul>
//                     </details>
//                 </li>
//             </ul>
//         </div>
//     );
// }
import React from 'react';
import "../../../index.css";
import "./Sidebar.css";

export default function Sidebar({ isOpen }) {
    return (
        <div className={`custom-sidebar ${isOpen ? '' : 'closed'}`}>
            <h2 className="sidebar-title">Testadmin</h2>
            <ul className="sidebar-menu">
                <li className="sidebar-item">Dashboard</li>
                <li>
                    <details className="sidebar-details">
                        <summary className="sidebar-summary">Masters</summary>
                        <ul className="sidebar-submenu">
                            <li className="sidebar-subitem">Subitem 1</li>
                            <li className="sidebar-subitem">Subitem 2</li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details className="sidebar-details">
                        <summary className="sidebar-summary">Reports</summary>
                        <ul className="sidebar-submenu">
                            <li className="sidebar-subitem">Report A</li>
                            <li className="sidebar-subitem">Report B</li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    );
}
