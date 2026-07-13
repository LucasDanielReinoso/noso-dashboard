import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDGgl81VNAPQjn7VY5nM5jCVjM3jYuPJcE",
    authDomain: "noso-database.firebaseapp.com",
    projectId: "noso-database",
    storageBucket: "noso-database.firebasestorage.app",
    messagingSenderId: "12584345878",
    appId: "1:12584345878:web:e16f2d118621ef3caf7037"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.guardarYImprimir = async function() {
    const fichaData = {
        fecha: document.getElementById('fecha')?.value || new Date().toLocaleDateString(),
        cliente: document.getElementById('cliente')?.value,
        presupuesto: document.getElementById('presupuesto')?.value || "0",
        categoria: document.getElementById('categoria')?.value || "General",
        timestamp: new Date().toISOString()
    };

    if (!fichaData.cliente) {
        alert("Completa el cliente");
        return;
    }

    try {
        // Esto creará la base de datos automáticamente al guardar la primera ficha
        await addDoc(collection(db, "servicios"), fichaData);
        alert("¡Ficha guardada en la nube!");
        window.print();
    } catch (e) {
        alert("Error: " + e.message);
    }
};