// select the element

const body = docoment.quwreryselector("body");
const heading = document.querySelector(".heading");
const color = docoment.quwreryselector(".color");

//generate random color

function generateRandomColor(){
    let randomcolor = "#";
    for (let i=0; i<6; i++){
        randomcolor += math.floor(math.randomcolor() * 16).tostring(16);
    }
    return randomcolor;

}

function colorchanger(e){
    // console.log(e.target.id);
    switch (e.target.id) {
        case "grey":
            body.style.backgroundcolor = "grey"
            break;

            case "green":
            body.style.backgroundcolor = "green"
            break;

            case "black":
                body.style.backgroundcolor = "black"
                break;

            case "blue":
            body.style.backgroundcolor = "blue"
            break;

            case "random":
            body.style.backgroundcolor = "random"
            break;
    
        default:
            body.style.backgroundcolor = "white"
            break;
    }
}

color.forEach((color) => {
    color.addEventListener("click", (e) => colorChange(e));
  });