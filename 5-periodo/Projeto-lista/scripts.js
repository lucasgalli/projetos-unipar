$(document).ready(function () {

	function adicionaTarefa() {
		var tarefa = $('#tarefa').val();
		if (tarefa !== '') { //trim() - apagar os espaços
			$('#lista-tarefas').prepend('<li class="item"><input type="checkbox" class="conclui-tarefa"><input type="text" class="descricao-tarefa" value="' + tarefa + '" tabindex="-1"><i class="fa-solid fa-trash-can remover-tarefa"></i></li>');
			$('#tarefa').val('');
		}
	}

	$('body').on('keypress', '#tarefa', function (e) {
		if (e.which === 13) {
			adicionaTarefa();
		}
	});

	$('body').on('click', '.remover-tarefa', function () {
		$(this).parent().remove();
	});

	$('body').on('click', '.item', function () {
		$(this).find('.descricao-tarefa').focus();
	});

	$('body').on('click', '.conclui-tarefa', function () {
		$(this).parent().find('.descricao-tarefa').toggleClass('feito');
	});

	$(".item").draggable({
		revert: true
	});
	$("#lista-tarefas").sortable({
		revert: true
	});
	$(".item").draggable({
		connectToSortable: "#sortable",
		helper: "clone",
		revert: "invalid"
	});
	$("ul, li").disableSelection();

	$('input[name=tarefa').focus();
});
