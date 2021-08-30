// Etape 1 - Sélectionner nos éléments
let input=document.querySelector('.reponse');
let btn =document.querySelector('.btn');
let error=document.querySelector('#error');
let formualire=document.querySelector('#form');
// Etape 2 - Cacher l'erreur
error.style.display='none';
// Etape 3 - Générer un nombre aléatoire
let nbreAleatoire=Math.floor(Math.random()* Math.floor(100));
// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup',()=>{
    if (isNaN(input.value)){
        error.style.display='inline';
    }else {
        error.style.display='none';
    }
})
let compteur=0;
let nombreChoisi;
// Etape 5 - Agir à l'envoi du formulaire
formualire.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(isNaN(input.value) || input.value==''){
        input.style.border='2px solid red';
    }else{
        input.style.border='2px solid green';
        compteur++;
        nombreChoisi=input.value;
        input.value='';
        verifier(nombreChoisi);
    }
})

// Etape 6 - Créer la fonction vérifier
function verifier(nombreChoisi) {
    let instruction=document.createElement('div');

    if(nombreChoisi<nbreAleatoire){
        instruction.textContent="#"+compteur+"("+nombreChoisi+")"+"C'est plus !";
        instruction.className="instruction plus";
    }else if(nombreChoisi>nbreAleatoire) {
        instruction.textContent="#"+compteur+"("+nombreChoisi+")"+"C'est moins !";
        instruction.className="instruction moins";
    }else {
        instruction.textContent="Félicitation vous avez trouvé avec "+compteur+"tentatives";
        instruction.className="instruction fini";
    }
    document.querySelector("#instruction").prepend(instruction);

}