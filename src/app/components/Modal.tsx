import React, { useContext, useEffect, useState } from "react";
import { gsap } from "gsap";
import AppContext, { ProjectsType } from "../context/AppContext";
import { X } from "@phosphor-icons/react";
import Image from "next/image";

const SlideModal: React.FC = () => {
  const { openModal, setOpenModal, projects } = useContext(AppContext);
  const [dataModal, setDataModal] = useState<ProjectsType>();
  const [loadDatas, setLoadDatas] = useState(true);
  const [imgMain, setImgMain] = useState("");
  const getIdFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

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
  }, [openModal, getDataProjects]);


  return (
    <div
      className={`modal w-full fixed  justify-center items-center   h-screen  top-0 p-6 max-sm:p-[5px]  ${
        openModal ? "showModal flex z-50" : "opacity-100 hidden"
      }`}
    >
      <div className="modalOverlay overflow-hidden    border-t-4 border-white bg-primaryDark rounded-lg  relative  w-full  max-w-4xl h-full max-h-[80%] z-[100] ">
        <span
          className="top-4 right-4 absolute cursor-pointer hover:scale-95 transition-all"
          onClick={() => {
            setOpenModal(!openModal);
            setImgMain('')
          }}
        >
          <X size={24} color="#f7f7f7" />
        </span>

        {loadDatas ? (
          <div className="text-white">Load</div>
        ) : (
          <>
            <div className="w-full h-full p-4 ">
              <div className="title flex flex-col items-center">
                <h1 className="text-white text-2xl font-semibold ">
                  {dataModal?.nome}
                </h1>
              </div>
              <div className="w-full grid grid-cols-2  max-sm:grid-cols-1  h-full py-4 overflow-auto">
                <div className="galery  flex flex-col items-center p-4 gap-4 max-sm:px-0">
                  <div className="img-main w-full max-w-sm overflow-hidden rounded-lg max-[480px]:h-14">
                    {dataModal?.img ? (
                      <Image
                        src={imgMain.length > 0 ? imgMain : dataModal.imgList[0].img}
                        width={500}
                        height={500}
                        className="h-full"
                        alt={`Imagem do projeto ${dataModal.nome}`}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="flex img-list gap-2">
                    {dataModal?.imgList.map((item, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          setImgMain(item.img);
                        }}
                        className="img overflow-hidden rounded-md cursor-pointer hover:scale-95 transition-transform max-w-[140px] min-h-[10px] "
                      >
                        {dataModal?.img ? (
                          <Image
                            src={item.img}
                            width={500}
                            height={500}
                            className="object-cover h-full "
                            alt={`Imagem do projeto ${dataModal?.nome}`}
                          />
                        ) : (
                          <></>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-4 max-[340px]:gap-2  text-sm font-semibold">
                    <a
                      href={dataModal?.deploy}
                      target="_blank"
                      className="cursor-pointer hover:scale-95 transition-transform text-primaryDark bg-subtitle px-4 max-[340px]:px-2 py-1 rounded-xl"
                    >
                      Deploy
                    </a>
                    <a
                      href={dataModal?.code}
                      target="_blank"
                      className="cursor-pointer hover:scale-95 transition-transform text-primaryDark bg-white px-4 max-[340px]:px-2 py-1 rounded-xl"
                    >
                      Código
                    </a>
                  </div>
                </div>
                <div className="infos ">
                  <div className="w-full text-white">blabla</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SlideModal;
