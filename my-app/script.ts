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
    const user = await prisma.user.create({
        data: {
            name: "Pedro",
            email: "pedroheinrich91@gmail.com",
            posts: {
                create: {
                    title: "Meu primeiro post",
                    text: "Meu primeiro post com o prisma",
                    published: true
                },
            },
        },
        include: {
            posts: true
        },
    });
    console.log("Create User", user);
}
main()