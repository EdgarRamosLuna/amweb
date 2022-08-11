import React, { useState, useEffect } from 'react';

import useDrivePicker from 'react-google-drive-picker'

export default function DrivePicker(props) {
  const [openPicker, authResponse] = useDrivePicker();  
  // const customViewsArray = [new google.picker.DocsView()]; // custom view
  const {getImg} = props;
  const [imgData, setImgData] = useState([]);
  let docsD;
  const handleOpenPicker = () => {
    
    openPicker({
      clientId: "390553706720-cq78avtd0f54j0fcde3fis3anvblnng7.apps.googleusercontent.com",
      developerKey: "AIzaSyC-4SrhunG39efAqFUaEjPBJoAG7QExQLI",
      viewId: "FOLDERS",
      setIncludeFolders:true,
      setSelectFolderEnabled:true,
      // token: token, // pass oauth token in case you already have one
      locale:"es",
      supportDrives: true,
      multiselect: true,
      viewMimeTypes:"image/png,image/jpeg,image/jpg",
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === 'cancel') {
          console.log('User clicked cancel/close button')
        }
        
        docsD = data.docs;
        for (let i = 0; i < docsD.length; i++) {
          const docs = docsD[i];
          const imgUrl = `https://drive.google.com/uc?export=view&id=${docs.id}`;
          const tumbNail = `https://drive.google.com/thumbnail?id=${docs.id}`;
     
    //      getImg([{'img':imgUrl, 'tumbnail':tumbNail}]);
          getImg(imgUrl, tumbNail);
        }
       
   
      },
    })
  }


  
  return (
    <div>
        <button onClick={() => handleOpenPicker()} className="gd-btn"><i class="fa-brands fa-google-drive"></i> Importar Desde Google Drive</button>
    </div>
  );
}