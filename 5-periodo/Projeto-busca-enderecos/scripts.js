$(document).ready(function(){
	
	$('body').on('click', '#consultar', function(){
		consultaCep();
	});

	function consultaCep(){
		const cep = $('#cep').val();
		if(cep.length !== 8){
			alert('Digite o cep corretamenta');
			return false;
		}

		loading();
		setTimeout(function(){
			$.ajax({
				url: 'https://viacep.com.br/ws/'+cep+'/json/',
				type: 'GET',
				dataType: 'json',
				success: function(data){
					$('body').find('#resultados').html('<h2>Resultado da consulta</h2>'
														+ '<p>CEP: '+data.cep+'</p>'
														+ '<p>Logradouro: '+data.logradouro+'</p>'
														+ '<p>Bairro: '+data.bairro+'</p>'
														+ '<p>Cidade: '+data.localidade+'</p>'
														+ '<p>Estado: '+data.uf+'</p>'
														+ '<p>IBGE: '+data.ibge+'</p>'
														);
				}
			})
		}, 1000);

	}

	function loading(){
		$('#resultados').html('<img src="loading.gif" />');
	}

	$('body').on('click', '#modo-noturno', function(){
		alert(123);
		$('body').toggleClass('dark-mode');
	});

})