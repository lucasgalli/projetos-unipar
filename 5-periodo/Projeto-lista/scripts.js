$(document).ready(function () {
	// Function to add a new task
	function addTask() {
		var taskText = $('#taskInput').val();
		if (taskText.trim() !== '') {
			$('#taskList').append('<li><span class="task-text">' + taskText + '</span><button class="delete-btn">Delete</button></li>');
			$('#taskInput').val('');
		}
	}

	// Event listener for add task button
	$('#addTaskBtn').click(function () {
		addTask();
	});

	// Event listener for pressing Enter key in the input field
	$('#taskInput').keypress(function (e) {
		if (e.which === 13) {
			addTask();
		}
	});

	// Event listener for deleting a task
	$('#taskList').on('click', '.delete-btn', function () {
		$(this).closest('li').remove();
	});

	// Event listener for marking a task as completed
	$('#taskList').on('click', '.task-text', function () {
		$(this).toggleClass('completed');
	});
});
