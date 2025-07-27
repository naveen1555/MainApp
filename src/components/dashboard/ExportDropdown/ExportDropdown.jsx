import React, { useState } from "react";
import "./ExportDropdown.css";

export default function ExportDropdown() {
    const [open, setOpen] = useState(false);

    return (
        <div className="export-dropdown">
            <button onClick={() => setOpen(!open)}>Download ⬇</button>
            {open && (
                <div className="dropdown-menu">
                    <div>Download Excel</div>
                    <div>Download PDF</div>
                </div>
            )}
        </div>
    );
}
