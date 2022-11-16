let ecran = document.querySelector(".ecran");
let chiffres = document.querySelectorAll(".bouton");
let buouton_egal = document.querySelector(".egal")
let effacer = document.querySelector("#effacer")
let resultat=0;
function calculer(){
    resultat = eval(ecran.innerHTML);
    ecran.innerHTML=resultat
}
function efface(){
    ecran.innerHTML="";
}

chiffres.forEach((chiffre)=>{
    (
        chiffre.addEventListener('click',()=>{
            if(ecran.innerHTML==0){
                ecran.innerHTML=chiffre.id
            }
            else {
                ecran.innerHTML+=chiffre.id
            }
            }
        )
    )
})
buouton_egal.addEventListener('click',()=>{
    calculer();
})
effacer.addEventListener('click',()=>{
    efface();
})
