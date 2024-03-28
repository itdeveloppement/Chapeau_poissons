

// MODALE HEADER

// ouverture et fermeture burger et modale au click
document.querySelector(".hamburger").addEventListener("click", ()=> {
    openModal()
});

/** ouverture et fermeture burger et modale
 *  @param {*} // pas de parametre
 *  @return ne retourne rien 
 */
function openModal () {
    let modale = document.querySelector(".header-modal");
    modale.classList.toggle("header-modal--is-open");
    let burger = document.querySelector(".header-burger");
    burger.classList.toggle("is-active");
}