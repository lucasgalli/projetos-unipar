$(document).ready(function () {
    $('#consultar').click(function () {
        consultarCEP();
    });
	
	$('#cep').on('input', function () {
        // Remove caracteres não numéricos
        $(this).val($(this).val().replace(/\D/g, '')); //A expressão regular, remover todos os caracteres não numéricos

		/**
		 
	 	\D: Isso é uma classe de caracteres em uma expressão regular que representa qualquer caractere que não seja um dígito.
		/g: O modificador g significa "global" e faz com que a correspondência seja feita em toda a string, não apenas na primeira ocorrência.
		
		*/

    });

	function mostrarMensagem(mensagem, sucesso = true) {
		var cor = sucesso ? 'green' : 'red';
		$('#resultado').html('<p style="color:' + cor + ';">' + mensagem + '</p>');
	}
	
	function consultarCEP() {

		var cep = $('#cep').val(); 

		$('#resultado').empty();
	
		if (cep.length !== 8) {
			mostrarMensagem('Digite um CEP válido com 8 dígitos.', false);
			return;
		}
	
		mostrarLoading(true);
		setTimeout(function() { 
			$.ajax({
				url: 'https://viacep.com.br/ws/' + cep + '/json/',
				type: 'GET',
				dataType: 'json',
				success: function (data) {
					mostrarLoading(false);
					if (!data.erro) {
						exibirResultado(data);
					} else {
						mostrarMensagem('CEP não encontrado.');
					}
				},
				error: function () {
					mostrarLoading(false);
					mostrarMensagem('Erro ao consultar o CEP. Tente novamente.', false);
				}
			});
		}, 1000);
		
	}
	
	function exibirResultado(data) {
		var resultado = $('#resultado');
		resultado.empty();
		resultado.append(	'<h2>Resultado da Consulta</h2>'
							+ '<p><strong>CEP:</strong> ' + data.cep + '</p>'
							+ '<p><strong>Logradouro:</strong> ' + data.logradouro + '</p>'
							+ '<p><strong>Bairro:</strong> ' + data.bairro + '</p>'
							+ '<p><strong>Cidade:</strong> ' + data.localidade + '</p>'
							+ '<p><strong>Estado:</strong> ' + data.uf + '</p>'
							+ '<p><strong>IBGE:</strong> ' + data.ibge + '</p>'
						);
	}
	
	function mostrarLoading(ativo) {
		if (ativo) {
			$('#resultado').html('<p><img src="loading.gif" alt="Carregando..."></p>');
		}
	}	

    	// Adicione esta função para alternar entre o modo noturno e o modo padrão
	$('body').on('click', '#modo-noturno', function () {
		$('body').toggleClass('dark-mode');
		$('.container').toggleClass('dark-mode');
		$('.lampada').toggleClass('apagada');

		if (Cookies.get("modo-noturno") == 'on') {
			Cookies.set('modo-noturno', 'off');
		} else {
			Cookies.set('modo-noturno', 'on');
		}

	});

	if (Cookies.get("modo-noturno") == 'on') {
		$('body').toggleClass('dark-mode');
		$('.container').toggleClass('dark-mode');
		$('.lampada').toggleClass('apagada');
	}

});