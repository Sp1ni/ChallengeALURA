document.getElementById('botonEncriptar').addEventListener('click', function() {
    let text = document.getElementById('textoEntrada').value;
    let encryptedText = text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('textoSalida').value = encryptedText;
});

document.getElementById('botonDesencriptar').addEventListener('click', function() {
    let text = document.getElementById('textoEntrada').value;
    let decryptedText = text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('textoSalida').value = decryptedText;
});

document.getElementById('botonCopiar').addEventListener('click', function() {
    let text = document.getElementById('textoSalida').value;
    navigator.clipboard.writeText(text);
    alert("Texto copiado al portapapeles");
});