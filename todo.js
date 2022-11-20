/* The appendChild() method of the Node interface adds a node to the end of the list of children of a specified parent node */
window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");
 /* when the whole page load hten get these elements using queryselector */
	form.addEventListener('submit', (e) => { /*to submit the form */
		e.preventDefault(); /*it stops it from refreshing the page*/

		const task = input.value;

		const task_el = document.createElement('div'); /* creating a element in dom */
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el); /* adding hte content and making it visible in dom */

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text'); /* adding class to the element */
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el); /* and now we will get the text we put in the task bar  at this moment we cant edit or delete it */

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button'); /* creating a button for edit */
		task_edit_el.classList.add('edit'); /* giving class */
		task_edit_el.innerText = 'Edit'; /*innerHTML to show on the webpage */

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete'); /* giving class */
		task_delete_el.innerText = 'Delete'; /*innerHTML to show on the webpage */

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el); /* appending task elements to action elements */

		list_el.appendChild(task_el); /* appending action elements to the list */

		input.value = '';

		task_edit_el.addEventListener('click', (e) => { /* adding event listener to make the edit button clickable or workable */
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save"; /* a save to add in innerhtml to show on webpage when we click on edit */
				task_input_el.removeAttribute("readonly"); /* to remove the readonly attribute and make it editable to write something over their*/
				task_input_el.focus();
			} else { /* in the else part if we don't want to edit something then it will only show edit and will make it readonly */
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => { /* adding event listener to make the delete  button clickable or workable */
			list_el.removeChild(task_el); /*to delete the list we don;t want */
		});
	});
});