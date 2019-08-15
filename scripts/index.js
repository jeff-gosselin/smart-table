// Creates a new table according to user input of # of Columns and Rows
const newTable = (e) => {
    e.preventDefault();
    let cols = e.target.form[0].value;
    let rows = e.target.form[1].value;
    const main = document.querySelector('#main-container');
    const table = document.createElement('table'); 
    const td = document.createElement('td');
    table.className = 'smart-table';

    console.log("Columns:", cols);
    console.log("Rows:", rows);

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        tr.dataset.id = `row${i}`;
        for (let j = 0; j < cols; j++) {

            if (i === 0) {

                tr.innerHTML += `<th width="${100/cols}%" 
                    onclick="setColType(${j+1})" 
                    data-id="${j+1}" data-sortable="false" 
                    data-filterable="false" 
                    contenteditable="true"><div class="controller">+</div></th>`;
            } else {
                tr.innerHTML += `<td data-id="col${j+1} row${i}" contenteditable="true"></td>`;
            }     
        }
        table.appendChild(tr);
    }


    main.appendChild(table);
}

// When a column header is selected a user can change the column type to... (sortable, filterable, both, none)
const setColType = (id) => {
    let colHeader = document.querySelectorAll(`[data-id="${id}"]`)[0];
    
    let sortCheckbox = document.querySelector('.control-sort');
    let filterCheckbox = document.querySelector('.control-filter');
    console.log("s", colHeader.dataset);
    sortCheckbox.checked = colHeader.dataset.sortable === "true" || colHeader.dataset.sortable === true;
    filterCheckbox.checked = colHeader.dataset.filterable === "true";
    

    sortCheckbox.addEventListener('click', () => {
        colHeader.dataset.sortable = !sortCheckbox.checked;
        console.log(colHeader.dataset);
    });
    
}


const btn = document.querySelector('.create-table');
btn.addEventListener('click', e => newTable(e));