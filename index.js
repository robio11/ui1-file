console.log("site");

let Box = document.querySelector(".container");
let addbtn = document.getElementById('addBtn');
let card = ["box","box1"];
let p = [" laborum dolore tempore iure explicabo nam? Consequatur omnis, praesentium qui perferendis lib","werthj sghn hnbvc sdhgjmnbvc srthnbd srthnbvc erth "];

for (let i = 0; i < card.length; i++) {
    let fetch = document.querySelector(".container").innerHTML;
    Box.innerHTML = ` <div id="box${i}" class="box"> 
    <img src="${card[i]}"
        class="spider" alt="spider"> 
     <div class="show1">
        <p class="lorem1">${p[i]}</p>
    </div>` +fetch;
    let img = document.getElementById(`card${i}`);
    img.style.backgroundImage = `url('../img/${card[i]}.jpg')`;
    
}
