function guardarYImprimir() {
    // Eliminamos cualquier punto o símbolo para guardar solo el número puro
    let valorPresupuesto = document.getElementById('presupuesto')?.value || "0";
    let valorNumerico = parseFloat(valorPresupuesto.replace(/\./g, '').replace(',', '.')) || 0;

    const fichaData = {
        fecha: document.getElementById('fecha')?.value || new Date().toLocaleDateString(),
        cliente: document.getElementById('cliente')?.value,
        telefono: document.getElementById('telefono')?.value || '-',
        direccion: document.getElementById('direccion')?.value || '-',
        marca: document.getElementById('marca')?.value || "N/A",
        modelo: document.getElementById('modelo')?.value || "N/A",
        capacidad: document.getElementById('capacidad')?.value || "N/A",
        presupuesto: valorNumerico, // Guardamos el número puro
        timestamp: new Date().toLocaleString()
    };

    if (!fichaData.cliente || fichaData.cliente.trim() === "") {
        alert("Por favor, completa el nombre del cliente.");
        return;
    }

    let historial = JSON.parse(localStorage.getItem('noso_historial') || '[]');
    historial.push(fichaData);
    localStorage.setItem('noso_historial', JSON.stringify(historial));
    window.print();
}