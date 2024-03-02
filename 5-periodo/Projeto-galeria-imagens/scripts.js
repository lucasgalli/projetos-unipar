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
			boxImagens.append('<div class="imagem-item"><div class="fechar-imagem">X</div><img src="imagens/'+img+'" alt="'+img+'" /></div>');
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
			if(sort == 'asc'){
				return imagemA.localeCompare(imagemB);
			}
			else{
				return imagemB.localeCompare(imagemA);
			}
		});

		$('body').find('.box-imagens').append(imagens);
	}

	$('body').on('click', '.botao-ordenar', function () {
		const sort = $(this).data('sort');
		sortImagens(sort);
	});

	function buscaImagens(busca){
		const imagens = $('.box-imagens .imagem-item');
		imagens.each(function(){
			const nomeImagem = $(this).find('img').attr('alt');
			const imagemVisivel = nomeImagem.startsWith(busca);
			$(this).toggle(imagemVisivel);
		});
	}

	$('#busca-imagens').on('input', function(e){
		const busca = $(this).val();
		buscaImagens(busca);
	});

	$(document).on('keydown', function(e){
		if(e.which == 27){
			$('body').find('.box-imagens .imagem-item').removeClass('imagem-selecionada');
			$('body').find('.box-imagens .imagem-item').removeClass('bg-img');
			$('html, body').css({'overflow':'auto','height':'100vh'});
			$('body').find('.fechar-imagem').hide();
		}
	});

	$('body').on('click', 'img', function(){
		$(this).css('max-height', '100vh - 200px');
		$(this).parent().find('.fechar-imagem').show();
		$(this).parent().addClass('imagem-selecionada');
		$(this).parent().addClass('bg-img');

		$('html, body').css({'overflow':'hidden','height':'100%'});
	});

	$('body').on('click', '.fechar-imagem', function(){
		$(this).parent().removeClass('imagem-selecionada');
		$(this).parent().removeClass('bg-img');
		$('html, body').css({'overflow':'auto','height':'100vh'});
		$(this).hide();
	});

	$('body').on('click', '.bg-img', function(){
		$(this).removeClass('imagem-selecionada');
		$(this).removeClass('bg-img');
		$('html, body').css({'overflow':'auto','height':'100vh'});
		$('body').find('.fechar-imagem').hide();
	});

	carregaImagens('todas');
});