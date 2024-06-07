let nomeHeroi = "SuperMan";
let xpHeroi = 8500;
let nivel;

if (xpHeroi < 1000) {
    nivel = "Ferro";
} else if (xpHeroi >= 1000 && xpHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 6000) {
    nivel = "Ouro";
} else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
    nivel = "Platina";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "Ascendente";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel);
