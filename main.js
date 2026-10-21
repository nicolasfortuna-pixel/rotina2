import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
    getDatabase,
    ref,
    push,
    onValue,
    update,
    remove,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBAYspbYjnLFu-Lgj5girpN1AJNUp-fEjg",
  authDomain: "lista2-efc1f.firebaseapp.com",
  databaseURL: "https://lista2-efc1f-default-rtdb.firebaseio.com",
  projectId: "lista2-efc1f",
  storageBucket: "lista2-efc1f.firebasestorage.app",
  messagingSenderId: "752639242748",
  appId: "1:752639242748:web:7d6b4bad300c362e83c279",
  measurementId: "G-L7MD6WZ7QQ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const coisas = ref(db, "coisas");

const form = document.getElementById("form-coisas");
const titulo = document.getElementById("titulo");
const lista = document.getElementById("lista-coisas")
const mensagens = document.getElementById("mensagens")

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    await push(coisas, {
        titulo: titulo.value
    });
    form.reset();
    mensagens.textContent = "Adicionado!";
});

onValue.Coisas