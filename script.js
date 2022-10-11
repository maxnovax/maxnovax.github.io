
let clickCounter = 0;
let cardsFound = 0;
let workers = [
    {
        name: "Szymon",
        img:"",
        isHidden: true,
 
    }, 
    {
        name: "TomekD",
        img:"resources/TomekD.JPG",
        isHidden: true, 
 
    }, 
    {
        name: "TomekP",
        img:"",
        isHidden: true, 
 
    }, 
    {
        name: "Przemek",
        img:"",
        isHidden: true, 
 
    }, 
    {
        name: "Max",
        img:"",
        isHidden: true, 
 
    }, 
    {
        name: "Vlad",
        img:"resources/Vlad.jpg",
        isHidden: true, 
 
    }, 
    {
        name: "Ivan",
        img:"resources/Ivan.jpg",
        isHidden: true, 
 
    }, 
    {
        name: "Diana",
        img:"resources/Diana.jpg",
        isHidden: true, 
 
    }, 
    {
        name: "Misha",
        img:"",
        isHidden: true, 
 
    }, 
    {
        name: "Paweł",
        img:"resources/Paweł.JPG",
        isHidden: true, 
 
    }, 
    {
        name: "Puszek",
        img:"resources/Puszek.jpg",
        isHidden: true, 
 
    }, 
    {
        name: "Karina",
        img:"",
        isHidden: true, 
 
    },
    {
        name: "Paulina",
        img:"",
        isHidden: true, 
 
    },
    {
        name: "Oliwka",
        img:"resources/Oliwka.jpg",
        isHidden: true, 
 
    },
    {
        name: "Gaba",
        img:"resources/Gabi.JPG",
        isHidden: true, 
 
    },
    {
        name: "Maria",
        img:"",
        isHidden: true, 
 
    },
    {
        name: "Patrycja",
        img:"",
        isHidden: true, 
 
    },
]

let onCards = workers;


    /*document.getElementById("start_button").onclick = function(){
        alert("you started the game");
        document.getElementById("start_button").innerHTML = "ggg";
    }*/



const randomize = () =>{
    //Choose 8 from all 
    while (onCards.length > 8){
        let random = Math.floor(Math.random()* onCards.length);
        onCards.splice(random, 1);
    }
    //Double each
    for(let i = 0; i<8; i++){
        if (!appearedTwice(onCards, onCards[i]))
        {
            onCards.push({...onCards[i]});
        }
    }
    // Shuffle them
    onCards.sort(() => Math.random() - 0.5);
}


const hideAll =() =>{
    document.querySelectorAll('.image').forEach(item =>{
        if (item.found !== true){
            item.style.opacity = "0";
            item.isHidden = true;
}});
        onCards.forEach(elem =>{
        elem.isHidden = true;
    })
}
        


const appearedTwice = (arr, elemInArr)=>{
    const counter = arr.filter(element => element === elemInArr).length;
    if (counter === 2) {
        return true;
    } else return false;
}




randomize();
console.log(onCards);
hideAll();

// Copy images from array to cards
for(let i=1; i<=16; i++){
    document.getElementById(i).src = onCards[i-1].img;
    workers[i-1].id = i;
}


document.querySelectorAll('.image').forEach(item =>{
    item.addEventListener('click', () =>{
        if(item.isHidden){
            item.style.opacity = "1";
        } else {
            item.style.opacity = "0";
        }
        clickCounter++;
        checkTwo();
        if(clickCounter>2){
            hideAll();
            clickCounter = 0;  
        }
        if(cardsFound === 16){
            alert("Wygrałeś/aś!!!");
        }
    });
});






function checkTwo(){
    let opened =[];
    for(let i=1; i<=16; i++){
        if(document.getElementById([i]).style.opacity === "1" && document.getElementById([i]).found !== true){
            if(clickCounter<3){
                onCards[i-1].isHidden = false;
                opened.push(onCards[i-1]);
            } else{
                hideAll();
            }
        }
    }
    if(opened.length === 2 && opened[0].name === opened[1].name){
        document.getElementById(opened[0].id).found = true;
        document.getElementById(opened[1].id).found = true;
        cardsFound +=2;
        console.log(opened[0].name);
        console.log(opened[1].name);
    }
    
}








