/**
 * Created by neevor on 17/10/16.
 */

// Objects
var myComputer = {
	operatingSystem: "Linux",
	screenSize: "15 inches",
	purchaseYear: 2016,

	reinstallSystem: function(os) {
		this.operatingSystem = os;
		console.log("OS on my computer is now ", this.operatingSystem);
	},
	printThis: function() {
		console.log(this);
	}
};

// Prototype? Constructor
function computer(owner, os, screen, purchaseYear) {
	this.owner = owner;
	this.os = os;
	this.screen = screen;
	this.purchaseYear = purchaseYear;

	this.turnOn = function() {
		console.log('beeeep! beep!');
	}

}


var todosList = {
	todos: [],

	addItem: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		view.displayTodosOnPage();
	},
	updateItem: function(index, newValue) {
		this.todos[index].todoText = newValue;
		view.displayTodosOnPage();
	},
	deleteItem: function(index) {
		this.todos.splice(index, 1);
		view.displayTodosOnPage();
	},
	toggleCompleted: function(index) {
		item = this.todos[index];
		item.completed = !item.completed;
		view.displayTodosOnPage();
	},
	toggleAll: function() {
		var allTrue = true;
		this.todos.forEach(function(todo) {
			if (!todo.completed) {
				allTrue = false;
			}
		});
		this.todos.forEach(function(todo) {
			todo.completed = !allTrue;
		});

		view.displayTodosOnPage();
	}
};


var handlers = {
	addTodo: function() {
		var input = document.getElementById("addItem");
		if (input.value) {
			todosList.addItem(input.value);
		} else {
			alert('No input!');
		}
		input.value = '';
	},
	updateTodo: function() {
		var indexInput = document.getElementById("updateItemIndexInput");
		var textInput = document.getElementById("updateItemTextInput");
		if (indexInput.value && indexInput.value in todosList.todos) {
			if (textInput.value) {
				// indexInput.valueAsNumber; ???
				todosList.updateItem(indexInput.value, textInput.value);
			} else {
				alert("Input can't be empty!");
			}
		} else {
			alert('No such item!');
		}
		indexInput.value = '';
		textInput.value = '';
	},
	toggleTodo: function() {
		var input = document.getElementById("toggleItemIndexInput");
		if (input.value && input.value in todosList.todos) {
			todosList.toggleCompleted(input.valueAsNumber);
		} else {
			alert('No such item!');
		}
		input.value = '';
	},
	toggleAll: function() {
		todosList.toggleAll();
	},
};


var view = {
	displayTodosOnPage: function() {
		var todos_len = todosList.todos.length;
		var todoUl = document.getElementById("todos");
		todoUl.innerHTML = '';

		todosList.todos.forEach(function(todo, index) {
			var todoLi = document.createElement('li');
			var todoCompleted = todo.completed == false ? '( ) ' : '(x) ';

			todoLi.textContent = ' '+todoCompleted+todo.todoText+' ';
			todoLi.id = index;
			todoLi.appendChild(this.createDeleteButton());
			todoUl.appendChild(todoLi);
		}, this); 
	},
	createDeleteButton: function() {
		var deleteButton = document.createElement('button');
		deleteButton.textContent = ('delete');
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},
	createToggleCheckbox: function() {
		var toggleCheckbox = document.createElement('input');
		todoToggle.setAttribute('type', 'checkbox');
		return toggleCheckbox;
	},
	setUpEventListeners: function() {
		var todoUl = document.querySelector('ul');

		todoUl.addEventListener('click', function(event) {
			var elementClicked = event.target;

			if (elementClicked.className === 'deleteButton') {
				todosList.deleteItem(parseInt(elementClicked.parentNode.id));
			}
		})
	}
};


view.setUpEventListeners();
