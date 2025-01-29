/**
 * Fichier JavaScript pour l'application PokeCount.
 * @author Morgan Gasser <morgan.gasser@icloud.com>
 * @version 0.1 (Version actuelle)
 * @since 2025-01-29 (Date de création)
 */

const catchBtn = document.getElementById("capturer-btn");
const saveBtn = document.getElementById("sauvegarder-btn");

catchBtn.addEventListener("click", capturer);
saveBtn.addEventListener("click", sauvegarder);


const countEl = document.getElementById('compteur-el');
let count = 0;
const saveEl = document.getElementById("sauvegarde-el");

function capturer() {
    count += 1;
    countEl.textContent = count;
    if (count < 5)
        countEl.style.color = "green";
    else if (count < 10)
        countEl.style.color = "yellow";
    else
        countEl.style.color = "red";
}

function sauvegarder() {
    let countStr = count + " Pokémons - ";
    saveEl.textContent += countStr; // Ajouter la valeur actuelle du compteur
    count = 0;
    countEl.textContent = count;
}