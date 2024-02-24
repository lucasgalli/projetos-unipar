$(document).ready(function(){

	const baseImagens = {
		todas: ['imagem.jpg', 'cidade.jpg', 'animal.jpg', 'natureza.jpg'],
		animais:['animal.jpg', 'animal1.jpg', 'animal2.jpg', 'animal3.jpeg'],
		natureza:['natureza.jpg', 'natureza1.jpg', 'natureza2.jpg'],
		cidade:['cidade.jpg', 'cidade1.jpg', 'cidade2.jpg']
	}

	function carregaImagens(categoria){
		const imagens = baseImagens[categoria];
		const boxImagens = $('body').find('.box-imagens');
		boxImagens.empty();
		imagens.forEach(img => {
			boxImagens.append('<div class="imagem-item"><img src="imagens/'+img+'" /></div>');
		});
	}

	$('.botao-categoria').click(function(){
		$('body').find('.botao-categoria').removeClass('active');
		$(this).addClass('active');	
		const categoria = $(this).data('categoria');
		carregaImagens(categoria);
	});


});