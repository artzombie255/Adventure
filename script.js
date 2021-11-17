
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
    document.body.style.backgroundColor = currentNode.backgroundColor
    console.log(currentNode.backgroundColor)
}
// this is an array of nodes
const nodes = [
    {
        id: 0,
        description: "would you like to adventure?",
        yesLink: 1,
        noLink: 2,
        backgroundColor: "#fff"
    },
    {
        id: 1,
        description: "you chose yes!",
        yesLink: 3,
        noLink: 4,
        backgroundColor: "#fff"

    },
    {
        id: 2,
        description: "why did you choose no?",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 3,
        description: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 4,
        description: "then what did you choose?",
        yesLink: 1,
        noLink: 2,
        backgroundColor: "#fff"

    },
    {
        id: 5,
        description: "why did you choose no?",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 6,
        description: "why did you choose no?",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 7,
        description: "why did you choose no?",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 8,
        description: "why did you choose no?",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 9,
        description: "why did you choose no?",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    
]
