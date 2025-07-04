let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let msgcon = document.querySelector(".msg-container");
let newgame = document.querySelector(".new-game");
let msg = document.querySelector("#msg");
let turn0 = true;
const winpat = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0 == true) {
            box.innerText = 'X';
            turn0 = false;
            box.classList.add('X');
        } else {
            box.innerText = '0';
            box.classList.add('Y');
            turn0 = true;
        }

        box.disabled = true;
        checkwinner();

    })
});
const checkwinner = () => {
    for (let pattern of winpat) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        let p1 = boxes[pattern[0]].innerText;
        let p2 = boxes[pattern[1]].innerText;
        let p3 = boxes[pattern[2]].innerText;
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 == p2 && p2 == p3 && p1 == p3) {
                console.log("winner" + p1);
                showWinner(p1);
            }
        }
    }


};

const showWinner = (winner) => {
    msg.innerText = `winner ${winner} `;
    msgcon.classList.remove("hide");
    disableboxes();

};
const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const resetGame = () => {
    turn0 = true;
    enableboxes();
    msgcon.classList.add("hide");

};


newgame.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);