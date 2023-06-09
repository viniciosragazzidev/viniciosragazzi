import React, { useContext, useEffect, useState } from "react";
import { gsap } from "gsap";
import AppContext, { ProjectsType } from "../context/AppContext";
import { X } from "@phosphor-icons/react";

const SlideModal: React.FC = () => {
  const { openModal, setOpenModal, projects } = useContext(AppContext);
  const [dataModal, setDataModal] = useState<ProjectsType>();
  const [loadDatas, setLoadDatas] = useState(true);
  const getIdFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    console.log(id);

    return id;
  };
  const getDataProjects = async () => {
    let id = Number(getIdFromURL());
    if (id !== null) {
      let data = projects[id];

      setDataModal(data);
      console.log(data, id);

      setLoadDatas(false);
    }
  };
  const removeIdFromURL = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete("id");
    history.pushState({}, "", url.toString());
  };
  useEffect(() => {
    if (openModal) {
      getDataProjects();
    } else {
      removeIdFromURL();
    }
  }, [openModal,getDataProjects]);
  return (
    <div
 
      className={`modal w-full fixed  justify-center items-center   h-screen  top-0 p-6  ${
        openModal ? "showModal flex z-50" : "opacity-100 hidden"
      }`}
    >
      <div className="modalOverlay   border-t-4 border-white bg-primaryDark rounded-lg  relative  w-full  max-w-4xl h-full max-h-[80%] z-[100] ">
        <span
          className="top-4 right-4 absolute cursor-pointer hover:scale-95 transition-all"
          onClick={() => {
            setOpenModal(!openModal);
          }}
        >
          <X size={24} color="#f7f7f7" />
        </span>

        {loadDatas ? (
          <div>Load</div>
        ) : (
          <>
            <div className="w-full h-full p-4">
              <div className="title flex flex-col items-center">
                <h1 className="text-white text-2xl font-semibold ">
                  {dataModal?.nome}
                </h1>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SlideModal;
