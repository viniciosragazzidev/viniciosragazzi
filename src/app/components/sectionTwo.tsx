import { InstagramLogo, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";

export const SectionTwo = () => {
  const [totalPages, setTotalPages] = useState(1);
  const {openModal,setOpenModal,projects} = useContext(AppContext)

  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    if (projects.length > 0) {
      let totItens = Math.ceil(projects.length / 4);
      setTotalPages(totItens);
      console.log(totItens);
    }
  }, []);

  const projectsPerPage = 4;
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;

  const [showProject, setShowProjects] = useState(true);
  const alternateShow = () => {
    setShowProjects(false);

    setTimeout(() => {
      setShowProjects(true);
    }, 200);
  };
  

  const addItemInURL = (item: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set('id', item.toString());
    history.pushState({}, '', url.toString());
    setOpenModal(true);
}



  
  return (
    <section
      id="projects"
      className=" flex flex-col items-center min-h-screen w-full max-[425px]:p-5  px-24 max-sm:px-14"
    >
      <div className="container w-full max-w-3xl  flex flex-col gap-6 relative">
        <div className="top w-full my-7">
          <h1 className="text-white text-4xl max-sm:text-2xl">Projetos</h1>
        </div>
        <div className="projectsBox grid grid-cols-2 max-md:grid-cols-1 justify-center items-center justify-items-center gap-5">
          {projects.slice(startIndex, endIndex).map((value, i) => (
            <div
            onClick={()=>{addItemInURL(value.id)}}
              className={`cardProjects w-full h-min  hover:scale-105  bg-primaryDark rounded-xl p-5 overflow-hidden ${
                showProject ? "show" : ""
              }`}
            >
              <div className="contain flex flex-col gap-5" key={i}>
                <div className="header flex justify-between items-center">
                  <span className="title text-sm text-white font-semibold capitalize ">
                    {value.nome}
                  </span>
                  <div className="flex gap-4 max-[340px]:gap-2  text-sm font-semibold">
                    <a
                      href={value.deploy}
                      target="_blank"
                      className="cursor-pointer hover:scale-95 transition-transform text-primaryDark bg-subtitle px-4 max-[340px]:px-2 py-1 rounded-xl"
                    >
                      Deploy
                    </a>
                    <a
                      href={value.code}
                      target="_blank"
                      className="cursor-pointer hover:scale-95 transition-transform text-primaryDark bg-white px-4 max-[340px]:px-2 py-1 rounded-xl"
                    >
                      Código
                    </a>
                  </div>
                </div>

                <div className="img h-full overflow-hidden rounded-md">
                  <img
                    className="object-contain w-full"
                    src={value.img}
                    alt={`imagem do projeto ${value.nome}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination absolute bottom-[-50px] right-0">
          <ul className="flex gap-2">
            {Array.from({ length: totalPages }, (valor, i) => (
              <li>
                <a
                  href="#projects"
                  className={`w-7 h-7 text-sm rounded-lg  text-white bg-primaryDark flex justify-center items-center hover:scale-95 cursor-pointer transition-all hover:bg-subtitle hover:text-primaryDark hover:font-bold ${
                    currentPage == i + 1
                      ? "bg-subtitle text-primaryDark font-bold"
                      : ""
                  }`}
                  onClick={() => {
                    setCurrentPage(i + 1);
                    alternateShow();
                  }}
                >
                  {i + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
