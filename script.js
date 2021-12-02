
let currentNodeIdentifier = 0;


function yes() {
    currentNodeIdentifier = nodes.find((node) => node.id === currentNodeIdentifier).yesLink
    setMainContentToCurrentNode()

}
function no() {
    currentNodeIdentifier = nodes.find((node) => node.id === currentNodeIdentifier).noLink
    setMainContentToCurrentNode()
}

function setMainContentToCurrentNode() {
    const currentNode = nodes.find((node) => node.id === currentNodeIdentifier)
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
        yesLink: 9,
        noLink: 11,
        backgroundColor: "#fff"

    },
    {
        id: 9,
        description: "To be blunt you did not do your job, and I have half a mind to banish you right now. But I will give you a chance to redeem yourself.",
        description2: "{And what is that?(yes), or Not interested(no)}",
        yesLink: 11,
        noLink: 14,
        backgroundColor: "#fff"

    },
    {
        id: 10,
        description: "This is not a request sir.",
        description2: "{Fine take me to the king(yes), or I have no buisness with the king}",
        yesLink: 8,
        noLink: 12,
        backgroundColor: "#fff"

    },
    {
        id: 11,
        description: "If you want to keep your job you will find my father's killer and end him",
        description2: "{do you accept this quest?}",
        yesLink: 15,
        noLink: 12,
        backgroundColor: "#fff"

    },
    {
        id: 12,
        description: "[you are banished, but given a small amount of money, enough to get to the next kingdom. you spend the rest of your days wondering how this happened to you and how foolish you had been to not show up to your post that night]",
        description2: "",
        yesLink: 13,
        noLink: 13,
        backgroundColor: "#fff"

    },
    {
        id: 13,
        description: "The end",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 14,
        description: "I would advise you to reconsider. If you don't want to take this quest then you will be banished for failing to protect the king",
        description2: "{will you reconsider?}",
        yesLink: 15,
        noLink: 12,
        backgroundColor: "#fff"

    },
    {
        id: 15,
        description: "Great, we will supply you with some gold and my seal so you can get help. Good luck on your journey.",
        description2: "",
        yesLink: 16,
        noLink: 15,
        backgroundColor: "#fff"

    },
    {
        id: 16,
        description: "[you leave the castle and head out on the road. The king gave you the a crossbow bolt the assasin used to take out the guards in the towers] ",
        description2: "{Do you go to Aswen(yes), or Etrya(no)",
        yesLink: 17,
        noLink: 1,
        backgroundColor: "#fff"

    },
    {
        id: 17,
        description: "[you go to Aswen]",
        description2: "{Do you want to go to the market(yes), or the castle(no)}",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 18,
        description: "why did you choose no?",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 19,
        description: "why did you choose no?",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 20,
        description: "why did you choose no?",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 21,
        description: "why did you choose no?",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 22,
        description: "why did you choose no?",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 23,
        description: "why did you choose no?",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 24,
        description: "why did you choose no?",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 25,
        description: "why did you choose no?",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 26,
        description: "why did you choose no?",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 27,
        description: "why did you choose no?",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 28,
        description: "why did you choose no?",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 29,
        description: "why did you choose no?",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 30,
        description: "why did you choose no?",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 31,
        description: "why did you choose no?",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 32,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 33,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 34,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 35,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 36,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 37,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 38,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 39,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 40,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 41,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 42,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 43,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 44,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 45,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 46,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 47,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 48,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 49,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 50,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 51,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 52,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 53,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 54,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },
    {
        id: 55,
        description: "",
        description2: "",
        yesLink: 0,
        noLink: 0,
        backgroundColor: "#fff"

    },







]
