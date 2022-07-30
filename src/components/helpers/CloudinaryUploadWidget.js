import React from 'react';
export default function CloudinaryUploadWidget(props){
    const {getImg} = props;
    var myWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: "loboelegante",
          uploadPreset: "dwkjkvku",
          folder:"test",
          sources: [ "local", "instagram", "google_drive"],
          show_powered_by:false,
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            getImg(result.info.secure_url);
        //    console.log(result.info.secure_url);
          }
        }
      );
    const openW = ()=>{
        myWidget.open();
    }
    return (
        <button id="upload_widget" className="cloudinary-button" onClick={openW} >
          Seleccionar Imagenes
        </button>
      );
}

