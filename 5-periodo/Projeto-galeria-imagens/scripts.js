$(document).ready(function(){

	const baseImagens = {
		todas: ['imagem.jpg', 'cidade.jpg', 'animal.jpg', 'natureza.jpg'],
		animais:['animal.jpg', 'animal1.jpg', 'animal2.jpg', 'animal3.jpg'],
		natureza:['natureza.jpg', 'natureza1.jpg', 'natureza2.jpg', 'natureza3.jpg'],
		cidade:['cidade.jpg', 'cidade1.jpg', 'cidade2.jpg', 'cidade3.jpg']
	}

	function carregaImagens(categoria){
		const imagens = baseImagens[categoria];
		const boxImagens = $('body').find('.box-imagens');
		boxImagens.empty();
		imagens.forEach(img => {
			boxImagens.append('<div class="imagem-item"><img src="imagens/'+img+'" alt="'+img+'" /></div>');
		});
	}

	$('body').on('click', '.botao-categoria', function () {
		$('body').find('.botao-categoria').removeClass('active');
		$(this).addClass('active');	
		const categoria = $(this).data('categoria');
		carregaImagens(categoria);
	});

	function sortImagens(sort){
		const imagens = $('.box-imagens .imagem-item');
		imagens.sort(function (a, b){
			const imagemA = $(a).find('img').attr('alt');
			const imagemB = $(b).find('img').attr('alt');
			//console.log(imagemA);
			if(sort == 'asc'){
				return imagemA.localeCompare(imagemB);
			}
			else{
				return imagemB.localeCompare(imagemA);
			}
		});

		$('body').find('.box-imagens').append(imagens);
		//console.log(imagens);
	}

	$('body').on('click', '.botao-ordenar', function () {
		const sort = $(this).data('sort');
		sortImagens(sort);
	});

	function buscaImagens(busca){
		const imagens = $('.box-imagens .imagem-item');
		console.log(imagens);
		imagens.each(function(){
			const nomeImagem = $(this).find('img').attr('alt');
			const imagemVisivel = nomeImagem.startsWith(busca);
			//console.log(imagemVisivel);
			$(this).toggle(imagemVisivel);
		});
	}

	$('#busca-imagens').on('input', function(){
		const busca = $(this).val();
		buscaImagens(busca);
	});

	carregaImagens('todas');
});