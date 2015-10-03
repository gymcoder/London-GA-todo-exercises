/*
 *	- Add todos
 *	- Delete todos
 *
 *	## Further challenges
 *	- Mark as completed; styled with a strikethrough.
 *	- Mark all as completed
 *	- delete all todos
 *	- delete all completed todos.
 *	- Edit a todo. Inline editing.
 */

 function makeTodo(textInput) {

		var $todo = $('<li></li>');					//attached DOM node
		var $button = $('<button>x</button>');		//button for deleting the todo items
		
		$todo
			.text(textInput)						//.text sets it to text
			.addClass('todo')						//.add style refers to the CSS styling, maybe useful later
			.append($button);

		$button.on('click', function(){				//
			$(this).parent('li.todo').remove();		//removes the todo entry could also use $todo.remove(); this is because
		});											// the button is naturally inside this function, next time a todo entry
													// is logged the whole script will be run again for a new entry/button
		return $todo;
 	}

	$('#save-button').on('click', function(e){
		e.preventDefault();
		var input = $('#input-field').val();

		var $todo = makeTodo(input);						// at first i missed this line of code out, still ran fine
	$('.todo-list').append(makeTodo(input));
	$('#input-field').val('').focus();						// resets the value inside the field back to noting
	
	});

// these will appear already on the web page, below code shows us how to extract them using the function written above. 
// this may as well be used as it has already been written and can be called at any point.

var strings = [										// made up array
	'washing',
	'ironing',
	'feed the cat'
];

strings.forEach(function(string) {					// (strings) is an array of strings and (string) is an item in the 
	$('.todo-list').append(makeTodo(string));		// array of strings
});

// line 30 the input from the text field
// line 31 e.preventDefault stops the browser doing anything next i.e too quicky to runt the rest of the code
//
// line 32 this is code to 'sanitise' the text put into the text input firld incase anyone is very naughty and 
// puts HTML in there - stopping hacking
//
// REMEBER - text & textInput re the same thing we can call textInput wahtever we want inside the function. It maybe
// makes sens to call it someting diffrent locally inside the function relative to what it is actually doing in there






//
//
//
//
//
