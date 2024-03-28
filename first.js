let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let turnO = true; //playerX, playerO.

//Storing all the wining patterns
// Creating a 2D array (An array where a single array consists more arrays.)

const win_patterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]];


boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("Box was clicked.")
        if (turnO === true){
        box.innerText = 'O';
            turnO = false;
    } 
        else{
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    })
})


const checkwinner = () => {
    for (let pattern of win_patterns){
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innertext,
        //     boxes[pattern[2]].innerText
        //     );
            let pos1val = boxes[pattern[0]].innertext;
            let pos2val = boxes[pattern[1]].innertext;
            let pos3val = boxes[pattern[2]].innertext;

            if (pos1val != "" && pos2val != "" && pos3val != ""){
                if (pos1val === pos2val && pos2val === pos3val){
                    console.log("Winner");
                }
            }
        }
}

//Reset Button 
resetbtn.addEventListener("click", ()=>{
    turnO =true;
    console.log("Reset Button is Clicked.")
    box.innerText("");
})