import React, { useState } from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import "./fileupload.css";

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    return (
        <div className="file-upload">
            <input
                className="file-input"
                type="file"
                name="file"
                onChange={handleFileChange}
            />
            <button
                className="upload-button"
                type="button"
                onClick={() => document.querySelector(".file-input").click()}
            >
                <div className="icon-container">
                    <IoCloudDownloadOutline className="cloud-icon" />
                </div>
                <span className="browse-text">Browse File to Upload</span>
            </button>
        </div>
    );
};

export default FileUpload;
