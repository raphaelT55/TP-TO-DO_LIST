import { fetchJSON } from "./function/api.js";
import { createElement } from "./function/dom.js";

try{
    const todo = await fetchJSON('https://jsonplqqaceholder.typicode.com/todos?_limit=5')
    console.log(todo);
}
catch(e){
    const alertElement = createElement('div',{
        class: 'alert alert-danger m-2',
        role: 'alert',
    })
    alertElement.innerText = 'Impossible de charger cette ressource'
    document.body.prepend(alertElement)
}