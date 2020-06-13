function filterResults(usuarioPesquisado) {
  /*let arrayTemp = arrayData.filter((current) => {
    if (removeAcento(current.nome).match(usuarioPesquisado) !== null) {
      return current;
    }
  });*/
  let arrayTemp = arrayData.filter((current) => {
    let string = current.nome.toLowerCase();
    if (string.match(usuarioPesquisado) !== null) {
      return current;
    }
  });
  return arrayTemp;
}
function preventFormSubmit() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  let form = document.querySelector('.form');
  form.addEventListener('submit', handleSubmit);
}
function escutarTeclas() {
  function escutarClick(event) {
    //let usuarioPesquisado = removeAcento(event.path[2][0].value);
    let usuarioPesquisado = event.path[2][0].value.toLowerCase(); // coloca o string como todos os caracteres minusculos.
    let arrayTemp = filterResults(usuarioPesquisado);
    arrayTemp = ordernarArray(arrayTemp);
    render(arrayTemp, false);
  }
  function escutarEnter(event) {
    if (event.key === 'Enter' && event.path[2][0].value !== '') {
      //usuarioPesquisado = removeAcento(event.path[2][0].value);
      usuarioPesquisado = event.path[2][0].value.toLowerCase(); // coloca o string como todos os caracteres minusculos.
      let arrayTemp = ordernarArray(filterResults(usuarioPesquisado));
      render(arrayTemp, false);
    }
  }

  inButton.addEventListener('click', escutarClick);
  inText.addEventListener('keyup', escutarEnter);
}
