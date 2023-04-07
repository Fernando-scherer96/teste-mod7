const form = document.getElementById('formulario');
		const campoA = document.getElementById('campoA');
		const campoB = document.getElementById('campoB');
		const mensagem = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	if (parseInt(campoB.value) > parseInt(campoA.value)) {
		mensagem.innerHTML = 'Formulário válido!';
		mensagem.style.color = 'green';
	} else {
		mensagem.innerHTML = 'Formulário inválido!';
		mensagem.style.color = 'red';
	}
});