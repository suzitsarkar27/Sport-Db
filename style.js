
const eventHandler = () => {
    document.getElementById('main').innerHTML = "";
    const input = document.getElementById('input-fild');
    const inputValue = input.value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValue}`;
    fetch(url)
    .then(res=>res.json())
        .then(data => {
            
            if (data.player == null) {
                
                const error = document.getElementById('error')
                error.innerHTML = `
                <h3> Plesse type a valid number</h3>
                `
            } else {
                displayData(data.player)
                // document.getElementById('spener').style.display = 'none'
              
            }
        })
    input.value = "";
}


    

const displayData = players => {
   
    if (players == true) {
        console.log('amar')
        document.getElementById('spener').style.display = 'block'
    } else {
        console.log('romar')
        document.getElementById('spener').style.display = 'block'
   }
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
    // document.getElementById('input-fild').innerHTML = "";
    
    const url=`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => Detalic(data.players[0]))
}


const Detalic = (infro) => {
    // console.log(infro.strGender)
    if (infro.strGender=='Male') {
        document.getElementById('male').style.display = 'block'
        document.getElementById('femal').style.display='none'

    } else {
        document.getElementById('male').style.display = 'none'
        document.getElementById('femal').style.display='block'
    }
    
      
 
       
    const contanir = document.getElementById('div-contanir');
    const div = document.createElement('div');
    div.innerHTML = `
    <h3>Name:${infro.strPlayer}</h3>
    `
  
    contanir.appendChild(div)
}
