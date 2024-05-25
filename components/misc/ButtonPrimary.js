import React from "react";

const ButtonPrimary = ({ children, addClass }) => {
  return (
    <button
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none " +
        addClass
      }
      onClick={() => {
        alert("Descargando la app...");
        window.location.href = "/assets/app-debug.apk";
      }}
      aria-label="Descargar la aplicación"
    >
      {children}
    </button>

  );
};

export default ButtonPrimary;
