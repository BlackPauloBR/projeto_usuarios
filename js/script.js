let inText = null;
let inButton = null;
let usuarioEncontrado = null;
let ul = null;
let statsEncontrado = null;
let ulStats = null;
let liMasc = null;
let liFem = null;
let liSoma = null;
let liMedia = null;
let arrayData = [];
let carregando = true;
let esperandoTecla = true;
//let usuarioPesquisado = null;

window.addEventListener('load', () => {
  inText = document.querySelector('#inText');
  inButton = document.querySelector('#inButton');
  usuarioEncontrado = document.querySelector('#usuarioEncontrado');
  ul = document.querySelector('#ul');
  statsEncontrado = document.querySelector('#statsEncontrado');
  ulStats = document.querySelector('#ulStats');
  liMasc = ulStats.querySelector('#liMasc');
  liFem = ulStats.querySelector('#liFem');
  liSoma = ulStats.querySelector('#liSoma');
  liMedia = ulStats.querySelector('#liMedia');
  preventFormSubmit();
  loadingSetInterval(); //Bloqueia o acesso ao input até o carregamento dos dados;
  doFetch();
});

function loadingSetInterval() {
  const interval = setInterval(() => {
    //carregando é uma variavel global, e muda seu estado, depois da mudança de estado do arrayData[] for igual a array[n];
    if (carregando == false) {
      inText.disabled = false;
      inText.value = '';
      inText.focus();
      inButton.disabled = false;
      clearInterval(interval);
      return;
    }
  }, 0);
}

async function doFetch() {
  //prettier-ignore

  let res = await fetch(
    'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'
  );
  let json = await res.json();
  arrayData = mapArrayData(json.results);

  if (arrayData != []) {
    carregando = false;
  }
  arrayData = ordernarArray(arrayData);
  escutarTeclas();
  render(arrayData, esperandoTecla);
}

function mapArrayData(json) {
  let array = json.map((current) => {
    return {
      nome: `${current.name.first} ${current.name.last}`,
      foto: current.picture.thumbnail,
      idade: current.dob.age,
      sexo: current.gender,
    };
  });
  return array;
}

/*function removeAcento(text) {
  /*text = text
    .normalize('NFD') //troca a codificação onde 'Á'(\u03ef) fica sendo \u0030 \u0350 (length === 2)
    .replace(/[\u0300-\u036f]/g, '') // remove um range de acentos, baseado na codificação NFD

  return text;
}
*/

function ordernarArray(array) {
  let arrayTemp = array.sort((a, b) => {
    return a.nome.localeCompare(b.nome);
  });

  return arrayTemp;
}
