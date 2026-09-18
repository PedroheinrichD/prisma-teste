import { prisma } from "./lib/prisma";


async function main() {
    try {
        await createUserPost()
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect()
    }
}

// função para criar algum valor
async function createUserPost() {
    // const user = await prisma.user.create({
    //     data: {
    //         name: "Pedro",
    //         email: "pedroheinrich91@gmail.com",
    //         posts: {
    //             create: {
    //                 title: "Meu primeiro post",
    //                 text: "Meu primeiro post com o prisma",
    //                 published: true
    //             },
    //         },
    //     },
    //     include: {
    //         posts: true
    //     },
    // });


    // const addPost = await prisma.post.create({
    //     data: {
    //         title: "terceiro post do pedro",
    //         text: "texto do terceiro post do pedro adicionando separado",
    //         published: true,
    //         userId: 1,
    //     }
    // })
    // console.log("ppost inserido", addPost);
    


    // fazendo um fetchall nos users e posts incluido
//     const allUsers = await prisma.user.findMany({
//         where:{
//             name: "Pedro"
//         },

//         include: {
//             posts: true
//         },
//     });
//     console.log("All users with their posts:", JSON.stringify(allUsers, null, 2));

const user = await prisma.user.findUnique({
    where: {
        id: 1
    }
})
console.log("usuario selecionado", user);


}
main()