import React from "react";
import { useState } from "react";
const Imagen = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="card">
      <button
        className="px-6 py-3 text-white-100 bg-white-600 rounded-md"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <div className="card-body">
          <img
            className="h-64 w-64 object-cover rounded-md shadow-lg card-zoom-image"
            src={data.urls.small}
            alt={data.alt_description}
            likes={data.likes}
            views={data.views}
          />
          <p className="card-text font-bold">{data.alt_description}</p>
          <p className="card-text">
            {data.likes} <i class="fa fa-heart text-red-500"></i>
          </p>
        </div>
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                <div className="mt-3 sm:flex">
                  <div className="mt-2 text-center sm:ml-4 sm:text-left">
                    <img
                      className="h-96 w-106 object-cover rounded-lg shadow-lg card-zoom-image"
                      src={data.urls.small}
                      alt={data.alt_description}
                      likes={data.likes}
                      views={data.views}
                    />
                    <div className="md-24 bg-white-200">
                       <a href={data.urls.regular}>URL<i class="fa fa-magnifying-glass-plus"></i></a><p></p>
                       Tamaño: {data.width} x {data.height} <p></p>
                       Autor: {data.user.name}

                    </div>
                    <div className="items-center gap-2 mt-3 sm:flex">
                      <button
                        className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                        onClick={() => setShowModal(false)}
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Imagen;
