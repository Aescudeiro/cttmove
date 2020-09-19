import React, { useState } from "react";
import "./FileUpload.css";
import { FaFolderOpen} from "react-icons/fa";

const FileUpload = () => {
  return (
    <div className="file-upload-container">
      <div className="text-group">
        <h3>Faça upload dos seus ficheiros.</h3>
        <p>Formato pdf ou png.</p>
      </div>
      <div className="dashed-area">
      <div>
        <FaFolderOpen size={50} color="rgb(121, 158, 189)"/>
        <p id="drag-and-drop">Arraste e largue os seus ficheiros aqui.</p>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
