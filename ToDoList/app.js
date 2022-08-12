window.addEventListener('load', () => {
    const form = document.querySelector('#task_form');
    const input = document.querySelector('#new_list');
    const list = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        if (!task) {
            alert('Please add a task to your list');
            return;
        }

        const task_list = document.createElement('div');
        task_list.classList.add('task');

        const task_content = document.createElement('div');
        task_content.classList.add('content');
        task_content.innerText = task;

        const task_actions = document.createElement('div');
        task_actions.classList.add('actions');

        const task_btn = document.createElement('button');
        task_btn.classList.add('delete_btn');
        task_btn.innerHTML = 'Delete';

        task_actions.appendChild(task_btn);

        task_list.appendChild(task_content);
        task_list.appendChild(task_actions);

        list.appendChild(task_list);

        task_btn.addEventListener('click', ()=>{
            list.removeChild(task_list);
        })

        e.target.reset();
    })
})