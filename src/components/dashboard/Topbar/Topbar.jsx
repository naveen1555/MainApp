import React, { useEffect, useRef } from "react";
import { utils, writeFile } from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "./Topbar.css";
import { FaBars } from "react-icons/fa";

export default function Topbar({
    isSidebarOpen,
    setIsSidebarOpen,
    searchName,
    setSearchName,
    filterUsername,
    setFilterUsername,
    users,
    filteredUsers,
    // exportToExcel,
    // exportToPDF
}) {
    const topbarRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                isSidebarOpen &&
                topbarRef.current &&
                !topbarRef.current.contains(event.target) &&
                window.innerWidth <= 768
            ) {
                setIsSidebarOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isSidebarOpen, setIsSidebarOpen]);
    const exportToExcel = () => {
        const ws = utils.json_to_sheet(filteredUsers);
        const wb = utils.book_new();
        utils.book_append_sheet(wb, ws, "Users");
        writeFile(wb, "users.xlsx");
    };
    const exportToPDF = () => {
        const doc = new jsPDF();
        autoTable(doc, {
            head: [["Name", "Username", "Email"]],
            body: filteredUsers.map((u) => [u.name, u.username, u.email]),
        });
        doc.save("users.pdf");
    };

    return (
        <div className="topbar" ref={topbarRef}>
            <div className="filters-exportbuttons-container" >
                <div className="filters">
                    <input
                        type="text"
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                        placeholder="Search by name"
                    />
                    <select
                        value={filterUsername}
                        onChange={(e) => setFilterUsername(e.target.value)}
                    >
                        <option value="">All Usernames</option>
                        {(users || []).map((u) => (
                            <option key={u.id} value={u.username}>
                                {u.username}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="export-buttons">
                    <button className="excel" onClick={exportToExcel}>Export Excel</button>
                    <button className="pdf" onClick={exportToPDF}>Export PDF</button>
                </div>
            </div>
            <button
                className="hamburger"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <FaBars />
            </button>
        </div>
    );
}
