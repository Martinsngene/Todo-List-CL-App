

let input = prompt("Welcome. Please what would you like to do?");

const toDos = ['Collect chicken eggs', 'cook' ];

while(input !== 'quit' && input !== 'q') {

	if (input === 'list') {
		console.log("*************");

			for (let i = 0; i < toDos.length; i++) {

				console.log(`${i}: ${toDos[i]}`);
			}
		
		console.log("*************");
	} else if (input === 'new') {

		const newTodo = prompt("What would you like to add to your Todos?");

		toDos.push(newTodo);

		console.log(`${newTodo} added to the list.`);
	} else if(input === 'delete'){
		const delItem = parseInt(prompt("Please enter the index of the todo you want to delete"));
		if(!Number.isNaN(delItem)){

			const deleted = toDos.splice(delItem, 1);
			console.log(`Ok deleted ${deleted[0]}`);

		}else{
			console.log("Unknown index");
		}
		
	}

	input = prompt("Welcome. Please what would you like to do?");

}

console.log("Ok You Have Exited The App. Do have A Nice Day.");