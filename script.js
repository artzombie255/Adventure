
let currentNodeIdentifier = 0;


function yes() {
    currentNodeIdentifier = nodes.find( (node) => node.id === currentNodeIdentifier).yesLink
    setMainContentToCurrentNode()
}
function no() {
    currentNodeIdentifier = nodes.find((node) => node.id === currentNodeIdentifier).noLink
    setMainContentToCurrentNode()
}

function setMainContentToCurrentNode() {
    const currentNode = nodes.find( (node) => node.id === currentNodeIdentifier)
    document.getElementById("mainContent").innerHTML = currentNode.description
    document.getElementById("secondaryContent").innerHTML = currentNode.description2
    document.body.style.backgroundColor = currentNode.backgroundColor
    console.log(currentNode.backgroundColor)
}
// this is an array of nodes
const nodes = [
    {
        id: 0,
        description: "Would you like to adventure?",
        description2: "",
        yesLink: 1,
        noLink: 2,
        backgroundColor: "#fff"
    },
    {
        id: 1,
        description: "You chose yes!",
        description2: "",
        yesLink: 3,
        noLink: 4,
        backgroundColor: "#fff"

    },
    {
        id: 2,
        description: "Why did you choose no?",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 3,
        description: "Your adventure begins on a dark dreary hill.",
        description2: "",
        yesLink: 5,
        noLink: 3,
        backgroundColor: "#fff"

    },
    {
        id: 4,
        description: "Then what did you choose?",
        description2: "",
        yesLink: 1,
        noLink: 2,
        backgroundColor: "#fff"

    },
    {
        id: 5,
        description: "The king of Chteni was assasinated the night before. while you, the captain of the guard lives in disgrace.",
        description2: "",
        yesLink: 6,
        noLink: 5,
        backgroundColor: "#fff"

    },
    {
        id: 6,
        description: "So there you were, alone on the hill, pondering what came over you to get a few drinks that made you forget your only purpose. Protecting the king.",
        description2: "",
        yesLink: 7,
        noLink: 6,
        backgroundColor: "#fff"

    },
    {
        id: 7,
        description: "[a page runs up the hill] Captain come with me the princ- ... I mean king, wants to see you",
        description2: "{do you want to follow the page?}",
        yesLink: 8,
        noLink: 10,
        backgroundColor: "#fff"

    },
    {
        id: 8,
        description: "[you follow the page to the throne room] Well, good to finally see you Captain.",
        description2: "{How can I serve you my lord?(yes), or Why did you bring me here?(no)}",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 9,
        description: "why did you choose no?",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 10,
        description: "why did you choose no?",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 11,
        description: "why did you choose no?",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    
]
