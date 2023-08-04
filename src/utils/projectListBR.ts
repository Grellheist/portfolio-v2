import whisker from "/projects/whisker.png"

const projects = [
    {
        picture: whisker,
        alt: "Foto de um clone do Twitter",
        title: "Whisker",
        description: "Whisker é uma rede social e um clone do Twitter. Foi projetado para ser uma cópia do design e do layout do Twitter, e tem as funcionalidades: Tweets (ou Meow), Likes e Comentários. É necessário estar logado para verificar as funcionalidades.",
        demo: "https://whisker-network.vercel.app/",
        source: "https://github.com/Grellheist/whisker",
        technologies: [
            "TailwindCSS",
            "NextJS",
            "Typescript",
            "Clerk",
            "Prisma",
            "MySQL",
            "RadixUI",
            "Vercel",
            "PlanetScale",
        ],
        account: { username: "demo123", password: "Jj@7TsFk" }
    },
]

export default projects
