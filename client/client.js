document
    .getElementById("teste")
    .addEventListener("click", function () {

        console.log("SENDING...");

        window.postMessage({
            type: 'input',
            message: "AQUI MENSAGEM DA APLICACAO"
        }, "http://localhost:8081");

    });

window
    .addEventListener("message", function (event) {
        if (event.data.type === "output") {
            console.log("CHEGOU RETORNO");
            console.log(event);
        } 
    });

