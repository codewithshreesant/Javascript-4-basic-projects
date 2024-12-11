
let insert=document.querySelector('#insert');

window.addEventListener('keydown', handlePressKey);

function handlePressKey(e)
{
    // console.log(e.key);

    insert.innerHTML = `
         <div>
        <table>
            <thead>
                <tr>
                    <th>key</th>
                    <th>keyCode</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${e.key}</td>
                    <td>${e.keyCode}</td>
                </tr>
            </tbody>
        </table>
    </div>
    `
}