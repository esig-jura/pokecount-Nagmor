/**
 * Fichier JavaScript pour l'application PokeCount.
 * @author Morgan Gasser <morgan.gasser@icloud.com>
 * @version 0.1 (Version actuelle)
 * @since 2025-01-29 (Date de création)
 */

const catchBtn = document.getElementById("capturer-btn");
const saveBtn = document.getElementById("sauvegarder-btn");
const countEl = document.getElementById('compteur-el');
const resetBtn = document.getElementById("reset-btn");
let count = 0;
const saveEl = document.getElementById("sauvegarde-el");

window.addEventListener("load", () => { // Attendre que la page soit chargée pour exécuter le code
    saveEl.textContent = localStorage.getItem("captures") || ""; // Charger les captures sauvegardées ou une chaîne vide
});
catchBtn.addEventListener("click", capturer);
saveBtn.addEventListener("click", sauvegarder);
resetBtn.addEventListener("click", reset);

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
    saveEl.textContent += countStr;
    localStorage.setItem("captures", saveEl.textContent);
    count = 0;
    countEl.textContent = count;
}

function reset() {
    if(localStorage.getItem(("history")))
        localStorage.setItem("history", localStorage.getItem("history") + " || " + saveEl.textContent);
    else
        localStorage.setItem("history", saveEl.textContent);
    localStorage.removeItem("captures");
    count = 0;
    countEl.textContent = count;
    saveEl.textContent = "";
}