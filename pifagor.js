function generateTabele(size)
{
    let table = document.createElement("table");
    for(let i=0; i<=size; i++)
    {
        let row = document.createElement("tr");
        for(let j=0; j<=size; j++)
        {
            if(i==0 && j>0)
            {
                let th = document.createElement("th");
                th.innerHTML = j;
                row.appendChild(th);
            }
            else if(i>0 && j==0)
            {
                let th = document.createElement("th");
                th.innerHTML = i;
                row.appendChild(th);
            }
            else if(i!=0 && j!=0)
            {
                let td = document.createElement("td");
                td.innerHTML = i*j;
                row.appendChild(td);
            }
            else
            {
                let th = document.createElement("th");
                row.appendChild(th);
            }
        }
        table.appendChild(row);
    }
    return table;
}

// let table = generateTabele(5);
// document.body.appendChild(table);

window.onload = () =>
{
    let table = generateTabele(10);
    document.body.appendChild(table);
}