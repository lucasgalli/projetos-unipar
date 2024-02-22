$(document).ready(function(){

	const baseImagens = {
		todas:['imagem.jpg', 'cidade.jpg', 'animal.jpg', 'natureza.jpg'],
		animais:['animal.jpg', 'animal1.jpg', 'animal2.jpg', 'animal3.jpg'],
		natureza:['natureza.jpg', 'natureza1.jpg', 'natureza2.jpg', 'natureza3.jpg'],
		cidade:['cidade.jpg', 'cidade1.jpg', 'cidade2.jpg', 'cidade3.jpg']
	}

	function carregaImagens(categoria){ //
		const imagens = baseImagens[categoria];
		const boxImagens = $('body').find('.box-imagens');
		
		imagens.forEach(img => {
			console.log(img);
			boxImagens.append('<div><img src="imagens/'+img+'" /></div>');
		});
	}

	$('.botao-categoria').click(function(){
		$('body').find('.botao-categoria').removeClass('active');
		$(this).addClass('active');	
		const categoria = $(this).data('categoria');
		carregaImagens(categoria);
	});


});