/**
 * Created by neevor on 17/10/16.
 */
// var todos = [];

// todos.push(
// 	'item 1',
// 	'item 2',
// 	'item 3',
// 	'item 4',
// 	'item 5',
// 	'item 6');

// function addTodo(list, item) {
//     list.push(item);
// }

// function updateTodo(list, itemPosition, newValue) {
// 	list[itemPosition] = newValue;
// }

// function deleteTodo(list, itemPosition) {
//     list.splice(itemPosition, 1);
//     return list
// }

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

	displayTodos: function() {
		if (this.todos.length) {
			console.log("My todos:")
			for (var i = 0; i < this.todos.length; i++) {
				done = this.todos[i].completed == true ? '(x)' : '( )';
				console.log(done, this.todos[i].todoText);
			}
		} else {
			console.log("My todos list is empty.")
		}

	},
	displayTodosOnPage: function() {
	var todos_len = this.todos.length;
	var myNode = document.getElementById("todos");
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}
	myNode.innerHTML = "TODO List:";

	for (var i = 0; i < todos_len; i++) {
		var node = document.createElement("li");
		var textnode = document.createTextNode(this.todos[i].todoText+" ("+this.todos[i].completed+")");
		node.appendChild(textnode);
		document.getElementById("todos").appendChild(node);
	}
	},
	addItem: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
		this.displayTodosOnPage();
	},
	updateItem: function(index, newValue) {
		this.todos[index].todoText = newValue;
		this.displayTodos();
		this.displayTodosOnPage();
	},
	deleteItem: function(index) {
		this.todos.splice(index, 1);
		this.displayTodos();
		this.displayTodosOnPage();
	},
	toggleCompleted: function(index) {
		item = this.todos[index];
		item.completed = !item.completed;
		this.displayTodos();
		this.displayTodosOnPage();
	},
	toggleAll: function() {
		allTrue = true;
		for (var i = 0; i < this.todos.length; i++) {
			if (!this.todos[i].completed) {
				allTrue = false;
				break;
			}
		}
		for (var i = 0; i < this.todos.length; i++) {
			this.todos[i].completed = !allTrue;
		}
		this.displayTodos();
		this.displayTodosOnPage();
	}
}


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
	deleteTodo: function() {
		var input = document.getElementById("deleteItem");
		if (input.value && input.value in todosList.todos) {
			todosList.deleteItem(input.value);
			input.value = '';
		} else {
			alert('No such item!');
		}
	},
	displayTodos: function() {
		todosList.displayTodos()
	},
	toggleAll: function() {
		todosList.toggleAll();
	}
};

var a = 10;

function gauss(num) {
	if (num <= 1) {
		return 1
	} else {
		return num + gauss(num - 1)
	}
}

console.log(gauss(100));