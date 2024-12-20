// CRUD Javascript Básico
const miniTwiter = {
    usuarios: [
        {
            userName: 'Pablo Henrique'
        }
    ],
    posts: [
        {
            owner: "Pablo Henrique",
            content: "Meu primeiro twitch"
        }
    ]
};

// Create
function criarPost (dados){
    miniTwiter.posts.push({
        owner: dados.owner,
        content: dados.content
    })
}

criarPost({owner: "Tais Gessyca", Content: "Estava gripada"})
console.log(miniTwiter.posts)