function guardarYImprimir() {
    // Captura los valores de los nuevos campos
    // Usamos .value para obtener lo que escribiste en los inputs del HTML
    const presupuestoVal = document.getElementById('presupuesto')?.value || "0";
    const categoriaVal = document.getElementById('categoria')?.value || "General";

    const fichaData = {
        fecha: document.getElementById('fecha')?.value || new Date().toLocaleDateString(),
        cliente: document.getElementById('cliente')?.value,
        telefono: document.getElementById('telefono')?.value || '-',
        direccion: document.getElementById('direccion')?.value || '-',
        marca: document.getElementById('marca')?.value || "N/A",
        modelo: document.getElementById('modelo')?.value || "N/A",
        capacidad: document.getElementById('capacidad')?.value || "N/A",
        // Aquí guardamos los datos nuevos
        presupuesto: presupuestoVal,
        categoria: categoriaVal,
        timestamp: new Date().toLocaleString()
    };

    if (!fichaData.cliente || fichaData.cliente.trim() === "") {
        alert("Por favor, completa el nombre del cliente.");
        return;
    }

    // Guardado en el historial
    let historial = JSON.parse(localStorage.getItem('noso_historial') || '[]');
    historial.push(fichaData);
    localStorage.setItem('noso_historial', JSON.stringify(historial));
    
    // Imprimir el documento
    window.print();
}