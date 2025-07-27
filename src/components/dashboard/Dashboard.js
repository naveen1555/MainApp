import {React,useState,useEffect} from 'react';
import Sidebar from "./Sidebar/Sidebar.jsx";
import Topbar from "./Topbar/Topbar.jsx";
import UserTable from "./UserTable/UserTable.jsx";
import Pagination from "./Pagination/Pagination.jsx";

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
      const [users, setUsers] = useState([]);
      const [filteredUsers, setFilteredUsers] = useState([]);
      const [searchName, setSearchName] = useState("");
      const [filterUsername, setFilterUsername] = useState("");

      // Pagination states
      const [currentPage, setCurrentPage] = useState(1);
      const usersPerPage = 3;

      useEffect(() => {
        const handleResize = () => {
          setIsSidebarOpen(window.innerWidth > 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }, []);

      useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => res.json())
          .then((data) => {
            setUsers(data);
            setFilteredUsers(data);
          });
      }, []);

      useEffect(() => {
        let result = [...users];
        if (searchName) {
          result = result.filter((user) =>
            user.name.toLowerCase().includes(searchName.toLowerCase())
          );
        }
        if (filterUsername) {
          result = result.filter(
            (user) => user.username.toLowerCase() === filterUsername.toLowerCase()
          );
        }
        setFilteredUsers(result);
        setCurrentPage(1); // Reset to first page on filter change
      }, [searchName, filterUsername, users]);

      // Pagination logic
      const indexOfLastUser = currentPage * usersPerPage;
      const indexOfFirstUser = indexOfLastUser - usersPerPage;
      const paginatedUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
      const totalPages = Math.ceil(filteredUsers.length / usersPerPage);


  return (
 <div className="app">
      <Sidebar isOpen={isSidebarOpen} />
      <div className="main-content">
        <Topbar
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
          users={users}
          searchName={searchName}
          setSearchName={setSearchName}
          filterUsername={filterUsername}
          setFilterUsername={setFilterUsername}
          filteredUsers={paginatedUsers}
        />
        <UserTable users={paginatedUsers} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  )
}

export default Dashboard
