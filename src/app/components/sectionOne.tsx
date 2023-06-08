import {
  InstagramLogo,
  GithubLogo,
  LinkedinLogo,
  ArrowSquareUpRight,
  ArrowCircleUpRight,
} from "@phosphor-icons/react";

export const SectionOne = () => {
  return (
    <section className=" sectionOne flex flex-col items-center min-h-screen  max-[425px]:p-5 max-md:p-14  justify-center">
      <div className="container w-full max-w-2xl 2xl:max-w-4xl  flex flex-col gap-6">
        <div className="top gap-4 flex flex-col">
          <span className="availabilityForWork text-subtitle2 text-sm 2xl:text-2xl ">
            • Disponível para trabalho
          </span>
          <h1 className="text-white text-4xl max-sm:text-2xl 2xl:text-6xl ">
            Vinicios Ragazzi • Desenvolvedor Web Frontend
          </h1>
        </div>
        <div className="description flex flex-col gap-5 font-light">
          <p className="text-lg 2xl:text-2xl max-sm:text-base text-subtitle  leading-7">
            Há mais de dois anos, tenho me dedicado diariamente ao meu
            desenvolvimento profissional, com o objetivo de aprimorar minhas
            habilidades em criação de sistemas e interfaces, buscando
            constantemente melhorar sua estética, usabilidade e excelência.
          </p>
          <p className="text-lg 2xl:text-2xl max-sm:text-base text-subtitle  leading-7">
            Nesse caminho, venho estudando e aprofundando meu conhecimento em
            tecnologias como{" "}
            <span className="font-bold underline ">
              ReactJS, Next.js, Tailwind CSS, Node.js, MongoDB e Express
            </span>
            , com o objetivo de aplicar essas ferramentas de forma eficiente em
            meus projetos.
          </p>
        </div>

        <div className="buttons flex gap-4 items-center mt-4">
          <span className="mailto flex items-center justify-center  gap-1  text-white px-4 py-2 bg-primaryDark cursor-pointer hover:scale-95 transition-all rounded-full 2xl:text-xl">
            Fale comigo <ArrowCircleUpRight  />
          </span>
          <div className="socials flex items-center gap-4">
            <a
              href="#"
              className="rede text-primary bg-white text-xl w-8 h-8  flex justify-center items-center rounded-full cursor-pointer hover:scale-95 transition-all"
            >
              <InstagramLogo weight="fill" />
            </a>
            <a
              href="#"
              className="rede text-primary bg-white text-xl w-8 h-8  flex justify-center items-center rounded-full cursor-pointer hover:scale-95 transition-all"
            >
              <GithubLogo weight="fill" />
            </a>
            <a
              href="#"
              className="rede text-primary bg-white text-xl w-8 h-8  flex justify-center items-center rounded-full cursor-pointer hover:scale-95 transition-all"
            >
              <LinkedinLogo weight="fill" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
