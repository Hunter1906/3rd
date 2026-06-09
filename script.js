function showPage(num){

    document.querySelectorAll(".page").forEach(page=>{
        page.classList.remove("active");
    });

    document.getElementById("page"+num)
        .classList.add("active");
}

function blowCandle(){

    document.getElementById("wishText")
        .innerHTML =
        "✨ Wish Granted ❤️ ✨";

    setTimeout(()=>{
        showPage(3);
    },2000);
}

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover",()=>{

    noBtn.style.position="absolute";

    noBtn.style.left=
        Math.random()*80+"vw";

    noBtn.style.top=
        Math.random()*80+"vh";
});
