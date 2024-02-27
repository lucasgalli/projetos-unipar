$(document).ready(function(){

	const baseImagens = {
		todas: ['imagem.jpg', 'cidade.jpg', 'animal.jpg', 'natureza.jpg'],
		animais:['animal.jpg', 'animal1.jpg', 'animal2.jpg', 'animal3.jpg'],
		natureza:['natureza.jpg', 'natureza1.jpg', 'natureza2.jpg', 'natureza3.jpg'],
		cidade:['cidade.jpg', 'cidade1.jpg', 'cidade2.jpg', 'cidade3.jpg']
	}

	function carregaImagens(categoria){//
		const imagens = baseImagens[categoria];
		const boxImagens = $('body').find('.box-imagens');
		boxImagens.empty();
		imagens.forEach(img => {
			boxImagens.append('<div class="imagem-item"><img src="imagens/'+img+'" /></div>');
		});
	}

	$('body').on('click', '.botao-categoria', function () {
		$('body').find('.botao-categoria').removeClass('active');
		$(this).addClass('active');	
		const categoria = $(this).data('categoria');
		carregaImagens(categoria);
	});

	/*$('header').click(function () {*/
	$('body').on('click', 'img', function () {
		alert(123)
	});

	//carregaImagens('todas');
});