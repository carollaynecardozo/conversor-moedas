function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 6.25;
  console.log(valorEmReal);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorElementoTexto = "O resultado em real é";
  elementoValorConvertido.innerHTML = valorElementoTexto;
  var elementoResultado = document.getElementById("resultado");
  elementoResultado.value = "R$ " + valorEmReal;
}