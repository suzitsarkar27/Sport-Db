
const eventHandler = () => {
    const input = document.getElementById('input-fild');
    const inputValue = input.value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.player))
        input.value ="";
}

const displayData = players => {
    const main = document.getElementById('main');
    for (const player of players) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card p-5">
        <dir>
            <img class="w-100" src="${player.strThumb}" alt="">
        </dir>
        <h3>Name:${player.strPlayer}</h3>
        <h3>Country:${player.strNationality}</h3>
        <p></p>
        <div>
            <button  class="btn btn-danger">Dalete</button>
            <button onclick="display(${player.idPlayer})" class="btn btn-success">Detalic</button>
        </div>
    </div>
        `
        main.appendChild(div);
        

    }
}

const display = (id) => {
    const url=`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => Detalic(data.players[0]))
}


const Detalic = (infro) => {
    const contanir = document.getElementById('container');
    const div = document.createElement('div');
    div.innerHTML = `
    <h3>Name:${infro.strPlayer}</h3>
    `
    contanir.appendChild(div)
}
