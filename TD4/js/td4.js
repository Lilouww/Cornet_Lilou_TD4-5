"use strict";

let message = "JavaScript is ok :)";
console.log(message);

function onLoad() {
  console.log("In onLoad() function…");
}
//Exercice 1
const personne1 = {
  nom: "Cornet",
  prenom: "Lilou",
  age: 20,
  taille: 162,
};
const personne = {};
personne.nom = "Cornet";
personne.prenom = "Lilou";
personne.age = 20;
personne.taille = 162;
const x = personne;
x.nom = "Lilou";
console.log(personne.nom);
console.log(personne["nom"]);
const propriete = "nom";
console.log(personne[propriete]);
for (let variable in personne) {
  console.log(variable + " : " + personne[variable]);
}
personne.poids = 50;
delete personne.poids;
personne.sports = {
  sport1: "Natation",
  sport2: "Basketball",
  sport3: "Musculation",
};
console.log(personne.sports.sport1);
console.log(personne.sports["sport2"]);
const proprietesport = "sport3";
console.log(personne.sports[proprietesport]);
for (let i in personne.sports) {
  console.log(i + " : " + personne.sports[i]);
}
personne.sports = [
  { nom: "Tennis", equipement: ["raquette", "balle", "filet"] },
  { nom: "Natation", equipement: ["maillot", "bonnet", "lunettes"] },
  { nom: "Basketball", equipement: ["ballon", "panier"] },
];
for (let i in personne.sports) {
  console.log(
    i + " : " + personne.sports[i].nom + " : " + personne.sports[i].equipement
  );
}
personne.qui = function () {
  console.log(this.nom + this.prenom);
};
personne.quimaj = function () {
  console.log(this.nom.toUpperCase() + this.prenom.toUpperCase());
};
const div = document.createElement("div");
div.textContent = Object.values(personne);
document.body.appendChild(div);
console.log(JSON.stringify(personne));
personne.datenaissance = new Date("12-02-2003");
console.log(JSON.stringify(personne));
personne.age = function () {
  return new Date().getFullYear() - this.datenaissance.getFullYear();
};
console.log(JSON.stringify(personne.age.toString()));
//Exercice 2
personne.langue = "francais";
Object.defineProperty(personne, "getlang", {
  get: function () {
    return this.langue;
  },
});
Object.defineProperty(personne, "setlang", {
  set: function (lang) {
    this.langue = lang;
  },
});
Object.defineProperty(personne, "getfullName", {
  get: function () {
    return this.nom + this.prenom;
  },
});
personne.fullName = function () {
  return this.nom + this.prenom;
};
const obj = { counter: 0 };
Object.defineProperty(obj, "reset", {
  get: function () {
    this.counter = 0;
  },
});
Object.defineProperty(obj, "inc", {
  get: function () {
    this.counter++;
  },
});
Object.defineProperty(obj, "dec", {
  get: function () {
    this.counter--;
  },
});
Object.defineProperty(obj, "add", {
  set: function (valeur) {
    this.counter += valeur;
  },
});
Object.defineProperty(obj, "subs", {
  set: function (valeur) {
    this.counter -= valeur;
  },
});
function Personne(nom, prenom, age, couleuryeux) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  this.couleuryeux = couleuryeux;
  this.name = function () {
    console.log(this.nom + this.prenom);
  };
  this.changer = function (nom) {
    this.nom = nom;
  };
}
const pere = new Personne("nompere", "prenompere", 50, "couleuryeuxpere");
const mere = new Personne("nommere", "prenommere", 50, "couleuryeuxmere");
let x1 = "Hello";
console.log(x1.length);
let x2 = 1;
console.log(x2.toExponential());
let x3 = true;
console.log(x3.valueOf());
let x4 = {};
console.log(x4.hasOwnProperty("toString"));
let x5 = [];
console.log(x5.length);
let x6 = /a/;
console.log(x6.dotAll);
let x7 = function () {};
console.log(x7.length);
let x8 = new Date();
console.log(x8.getDate());
console.log(Math.E);
console.log(Math.LN10);
console.log(Math.PI);
console.log(Math.random());
//Exercice 3
Personne.prototype.nationalite = "francaise";
Personne.prototype.name = function () {
  return this.nom + this.prenom;
};
function Personne2(nom, prenom) {
  this.nom = nom;
  this.prenom = prenom;
  this.estomac = [];
}
Personne2.prototype.manger = function (nourriture) {
  if (this.estomac.length <= 10) this.estomac.push(nourriture);
};
Personne2.prototype.digestionOK = function () {
  this.estomac = [];
};
Personne2.prototype.name = function () {
  return this.nom + this.prenom;
};

function Car(modele, conso100km) {
  this.modele = modele;
  this.conso100km = conso100km;
  this.reservoirlitre = 0;
  this.compteurkm = 0;
}
Car.prototype.addfuel = function (nblt) {
  this.reservoirlitre += nblt;
};
Car.prototype.drive = function (nbkm) {
  const conso = this.conso100km / (100 * nbkm);
  if (this.reservoirlitre < conso) {
    const distancePossible = (this.reservoirlitre / this.conso100km) * 100;
    console.log(`Je serai à court de carburant dans ${distancePossible} km`);
    this.compteurkm += distancePossible;
    this.reservoirlitre = 0;
  } else {
    this.reservoirlitre -= conso;
    this.compteurkm += nbkm;
  }
};
function Baby(nom, prenom, age, couleuryeux, jouetFavori) {
  Personne.call(this, nom, prenom, age, couleuryeux);
  this.jouetFavori = jouetFavori;
}
Baby.prototype = Object.create(Personne.prototype);
Baby.prototype.jouer = function () {
  return "Je joue avec mon jouet favori " + this.jouetFavori;
};
