import React from "react";
import Dashboard from "./components/dashboard/Dashboard.js";
import ProtectedRoute from "./components/ProtectedRoute";
import LogInForm from "./components/Login/LoginForm";
import Signup from "./components/Login/Signinform";
import Counter from "./components/counter";
import TableRows from "./components/index";
import Login from "./components/HamburgerMenu/hamburger";
import Selectlistoption from "./components/selectlistoption";
import TwowayDataBinding from "./components/TwowayDataBinding";
import AddUser from "./components/addUser";
import MainData from "./components/Pagination/MainData";
import CountryList from "./components/searchResults";
import RectangleBox from "./components/rectangle";
import CryptoMain from "./components/cryptoPagination/CryptoMain";
import ShowTable from "./components/showTable";
import Pagination from "./components/Pagination/Pagination.js";
import Home from "./components/Login/Home";
import DateTime from "./components/DateTime/DateTime";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import LeftRightClickPage from "./components/LeftRightClickPage";
import Trail from "./components/trail";
import ToDoList from "./components/to-do-list/ToDoList";
import Notifications from "./components/pushNotification";
import Fetch1 from "./components/fetch";
import FileUpload from "./components/inputfileupload/fileUpload";
import PracticeTodo from "./components/practicetodo/Pratice_todo";
import Main from "./components/Lifecyclemethods/main";
// import { Pagination } from "@mui/material";
import HamburgerMenu  from "./components/HamburgerMenu/hamburger";
import FormValidations from "./components/FormValidations/FormValidations.jsx";
import "./index.css"
import "./App.css"
// import { Dashboard } from "@mui/icons-material";

function App() {
  return (
<>
            <BrowserRouter>
                <Routes>
                    <Route path="/forms" element={<FormValidations/>}/>
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/login" element={<LogInForm />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/" element={<HamburgerMenu/>}/>
                    <Route path="/pagination" element={<Pagination />} />
                    <Route path="/datetime" element={<DateTime />} />
                    <Route path="/showTable" element={<ShowTable />} />
                    <Route path="/countryList" element={<CountryList />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/tableRows" element={<TableRows />}/>
                    <Route path="/selectlistoption" element={<Selectlistoption />}/>
                    <Route path="/addUser" element={<AddUser />} />
                    <Route path="/mainData" element={<MainData />} />
                    <Route path="/cryptoMain" element={<CryptoMain />} />
                    <Route path="/twowayDataBinding"element={<TwowayDataBinding />} />
                    <Route path="/rectangleBox" element={<RectangleBox />} />
                    <Route path="/LeftRightClickPage" element={<LeftRightClickPage />} />
                    <Route path="/Trail" element={<Trail />} />
                    <Route path="/ToDoList" element={<ToDoList />} />
                    <Route path="/pushNotification" element={<Notifications />} />
                    <Route path="/fetch" element={<Fetch1 />} />
                    <Route path="/fileUpload" element={<FileUpload />} />
                    <Route path="/practicetodo" element={<PracticeTodo />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
