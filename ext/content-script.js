function returnMessage(e) {
	console.log("RETORNO BACKGROUND SCRIPT");
	console.log(e);

	window.postMessage({
		type: "output",
		message: "AQUI MENSAGEM DA APLICACAO"
	}, "http://localhost:8081");
}

window.addEventListener("message", function (event) {

	if (event.data.type === "input") {

		console.log("content script sending message");
		console.log(event);

		try {
			browser.runtime.sendMessage(event.data, returnMessage);
		} catch (Exception) {
			chrome.runtime.sendMessage(event.data, returnMessage);
		}

	}

});
