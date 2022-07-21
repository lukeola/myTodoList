   
 /*MODEL SECTION*/


 //If localstorage has a todo array, then use it.
 //Otherwise use the defualt array.

 let todos;

 // Retieve localstorage
const savedTodos = JSON.parse(localStorage.getItem('todos'));

//check if it is an array
    if (Array.isArray(savedTodos)){

        todos = savedTodos;
    } else {
    //Define an object group for the arrays
    todos = [
        
    {
        title:'hello',
        dueDate: 'hi',
        id: 'there'

    },

    {
        title: 'Wash Car',
        dueDate: '20/07/2022',
        id: 'id2'
    },
        
    {
        title: 'Make Dinner',
        dueDate: '20/07/2022',
        id: 'id3'
    } ];

  
 } 
    
    //create Todo
    function createTodo (title, dueDate){
        
        const id = '' + new Date().getTime();
        
        //push the inputs into the variables
        todos.push(
        {
            title: title,
            dueDate: dueDate,
            id: id
        }    
        );
        saveTodos();
    }
   
    //delete Todo
        function removeTodo(idToDelete) {
            
       todos = todos.filter(function (todo) {

       //if the id of this todo matches idToDelete, return false
       //For everything else retunr true

       if (todo.id === idToDelete){

        return false;

       }

       else {
            
        return true;

        }

       });

    saveTodos();

    }


    // Save Todo
    function saveTodos(){

        localStorage.setItem('todos', JSON.stringify(todos));
    }

 /*CONTROLLER SECTION */

   //function to add Todo item
    function addTodo(){

        const textbox = document.getElementById('todo-title');
        const title = textbox.value;
        
        const datePicker = document.getElementById('date-picker');
        const dueDate = datePicker.value;
        
        createTodo(title, dueDate);

         render();

    }

    //function to delete the todo item
    function deleteTodo(event){
       const deleteButton = event.target;
       const idToDelete = deleteButton.id;

       removeTodo(idToDelete);
       render();
    }

/* VIEW SECTION */

    function render(){

        //this line of code helps to reset our list
        document.getElementById('todo-list').innerHTML = '';

    todos.forEach(function addTodo(todo){
        let element = document.createElement('div');
        element.innerText = todo.title + ' ' + todo.dueDate; 

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.style = 'margin-left: 12px;';
        deleteButton.onclick = deleteTodo;
        deleteButton.id = todo.id;
        element.appendChild(deleteButton);

        const todoList = document.getElementById('todo-list');
        todoList.appendChild(element);}
    )
    }   