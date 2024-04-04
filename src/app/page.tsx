import MusicAnimation from "@/components/LoadeAnimation";
import ProjectsList from "@/components/ProjectsList";
import SpotifyMusicCurrentPlayer from "@/components/SpotifyMusicCurrentPlayer";
import { Badge } from "@/components/ui/badge";
import { getCurrentlyPlaying } from "@/lib/services/spotify";
import { revalidateTag } from "next/cache";
import Image from "next/image";
import { BiBook, BiLogoSpotify, BiPlayCircle } from "react-icons/bi";

export default async function Home() {
  const mytechs = [
    {
      name: "ReactJS",
    },
    {
      name: "Next.js",
    },
    {
      name: "Tailwind CSS",
    },
    {
      name: "TypeScript",
    },
    {
      name: "JavaScript",
    },
    {
      name: "Node.js",
    },
    {
      name: "PostgreSQL",
    },
  ];

  revalidateTag("currently-playing");

  let currentlyPlaying = await getCurrentlyPlaying();

  return (
    <main className="container w-full overflow-y-auto py-20">
      <div className="flex flex-col justify-center gap-10 w-full h-full max-w-4xl mx-auto ">
        <section className="flex  max-sm:items-start items-center gap-4">
          <div className="image aspect-square overflow-hidden relative rounded-lg">
            <Image src="/logo.png" width={86} height={86} alt="logo" />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold">Vinicios Ragazzi</h1>
            <p className=" text-muted-foreground">
              Desenvolvedor Front-end{" "}
              <span className="text-primary">Freelancer</span>
            </p>
            <div className="flex max-sm:hidden gap-2 pt-3">
              {mytechs.map((tech) => (
                <Badge variant="outline" key={tech.name}>
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section className="flex gap-4 items-center ">
          {currentlyPlaying && currentlyPlaying.item && (
            <>
              <div className="image  w-24 h-24 aspect-square overflow-hidden relative rounded-lg">
                <MusicAnimation className="absolute top-0 left-0 z-50" />

                <Image
                  src={currentlyPlaying.item.album.images[0].url || ""}
                  fill
                  className="opacity-40"
                  alt={currentlyPlaying.item.name}
                />
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl  flex items-center gap-2">
                  <span>
                    <BiLogoSpotify className="text-green-500 text-2xl" />
                  </span>
                  <span className="font-bold ">
                    {currentlyPlaying.item.name}
                  </span>
                </h1>
                <div className="flex gap-5 items-center">
                  {" "}
                  <p className="text-muted-foreground">
                    {currentlyPlaying.item.artists[0].name} /{" "}
                    {currentlyPlaying.item.album.name}
                  </p>
                </div>
              </div>
              <p className="text-4xl cursor-pointer hover:scale-90 transition-all ">
                <BiPlayCircle className="text-green-500 " />
              </p>
            </>
          )}
        </section>
        <section className="flex flex-col px-2 sm:px-7 py-5 border border-slate-800/50 rounded-lg justify-center gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold flex items-center gap-1 sm:gap-2">
              <BiBook className="text-primary text-lg" /> Sobre mim
            </h3>

            <span className="text-sm text-muted-foreground cursor-pointer hover:text-primary transition-all">
              Saiba mais
            </span>
          </div>
          <p className="text-muted-foreground ">
            Há mais de dois anos tenho me dedicado diariamente ao meu
            desenvolvimento profissional, com o objetivo de aprimorar minhas
            habilidades em criação de sistemas e interfaces, buscando
            constantemente melhorar sua estética, usabilidade e excelência.
            Nesse caminho, venho estudando e aprofundando meu conhecimento em
            tecnologias como{" "}
            <span className=" font-bold">
              ReactJS, Next.js, TailwindCSS, TypeScript, JavaScript, Node.js e
              PostgreSQL{" "}
            </span>{" "}
            com o objetivo de aplicar essas ferramentas de forma eficiente em
            meus projetos.
          </p>
        </section>

        {/* <SpotifyMusicCurrentPlayer /> */}
        <ProjectsList />
      </div>
    </main>
  );
}
