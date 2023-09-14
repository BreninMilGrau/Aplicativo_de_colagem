// main.js
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("video");
    const canvas = document.getElementById("canvas");
    const startButton = document.getElementById("startButton");
    const createCollageButton = document.getElementById("createCollageButton");

    let images = [];

    // Inicializa a câmera
    navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function(stream) {
            video.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Erro ao acessar a câmera: ", error);
        });

    // Tira uma selfie e adiciona à lista de imagens
    startButton.addEventListener("click", function() {
    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Converta a imagem em um URL de dados
    const imageDataURL = canvas.toDataURL("image/jpeg");

    // Crie um elemento de âncora para download
    const downloadLink = document.createElement("a");
    downloadLink.href = imageDataURL;
    downloadLink.download = "selfie.jpg";
    
    // Clique automaticamente no link de download para iniciar o download
    document.body.appendChild(downloadLink);
    downloadLink.click();
    
    // Remova o elemento de âncora após o download
    document.body.removeChild(downloadLink);
});

    // Cria a colagem com as selfies tiradas
    createCollageButton.addEventListener("click", function() {
        // Implemente a lógica para criar a colagem aqui, usando a biblioteca ou código necessário.
        // Você pode usar bibliotecas como Fabric.js ou simplesmente manipular o HTML e o CSS para criar a colagem.
        // Depois de criar a colagem, você pode exibi-la ou fazer o download, conforme necessário.
    });
});

// ...
