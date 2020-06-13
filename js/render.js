function render(array, esperandoTecla) {
  function criarLI() {
    let li = document.createElement('li');
    return li;
  }

  function criarButton() {
    let button = document.createElement('button');
    return button;
  }

  function criarImg() {
    let img = document.createElement('img');
    return img;
  }

  function criarDiv() {
    let div = document.createElement('div');
    return div;
  }

  function criarSpan() {
    let span = document.createElement('span');
    return span;
  }
  if (esperandoTecla === false) {
    ul.innerHTML = '';
    inText.value = '';
    inText.focus();
    usuarioEncontrado.textContent = `(${array.length}) usuários encontrados.`;
    for (i = 0; i < array.length; i++) {
      let li = criarLI();
      let div = criarDiv();
      let img = criarImg();
      let span = criarSpan();

      ul.appendChild(li);
      li.appendChild(div);
      div.appendChild(img);
      div.appendChild(span);

      img.src = array[i].foto;
      img.classList.add('img');
      div.classList.add('divUsuario');
      span.textContent = `${array[i].nome}, ${array[i].idade} anos`;
      renderStats(array);
    }
  }
}

function renderStats(array) {
  function calcSexo(sexo) {
    const countSexo = array.reduce((accumulator, current) => {
      if (sexo === current.sexo) {
        accumulator++;
      }
      return accumulator;
    }, 0);

    return countSexo;
  }
  function calcSoma() {
    const soma = array.reduce((accumulator, current) => {
      return accumulator + current.idade;
    }, 0);

    return soma;
  }

  function calcMedia(soma) {
    const media = soma / array.length;
    return media;
  }
  statsEncontrado.textContent = 'Estatísticas:';
  liFem.textContent = `Sexo Feminino: ${calcSexo('female')}`;
  liMasc.textContent = `Sexo Masculino: ${calcSexo('male')}`;
  liSoma.textContent = `Soma das Idades: ${calcSoma()}`;
  liMedia.textContent = `Média das idade: ${calcMedia(calcSoma()).toFixed(2)}`;
}
