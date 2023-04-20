let unidade = ['zero','um','dois','três','quatro','cinco','seis','sete','oito','nove','dez','onze','doze','treze','quatorze','quinze','dezesseis','dezessete','dezoito','dezenove'];
let dezenaDezena = ['','','vinte','trinta','quarenta','cinquenta','sessenta','setenta','oitenta','noventa'];
let centena = ['cem','cento','duzentos','trezentos','quatrocentos','quinhentos','seiscentos','setecentos','sitocentos','novecentos'];




function enviar() {
  let number = Number(document.getElementById('number').value);

  if (number < 0 || number > 100999) {
    document.getElementById('resultNegative').innerHTML = `Este número está fora do intervalo q sei escrever, Consulte novamente em breve.`;
    document.getElementById('result').innerHTML = '';
    document.getElementById('text-result').innerHTML = '';
  } else {
    document.getElementById('resultNegative').innerHTML = '';
    
    function transformNumberText(number){
    
      if (number < 20) {
        return unidade[number];
      }
        
      if (number < 100) {
        return dezenaDezena[Math.floor(number / 10)] + (number % 10 !== 0 ? ' e ' + unidade[number % 10] : '');
      }

      if (number === 100){
        return centena[Math.floor(number % 100)];
      }

      if (number < 1000) {
      return centena[Math.floor(number / 100)] + (number % 100 !== 0 ? ' e ' + transformNumberText(number % 100) : '');
      }
        

      if (number === 1000) {
        return 'mil' ;
      }

      if (number < 2000) {
        return 'mil' + 
        (number % 1000 === 100 ? ' e cem' : '' ) +
        (number % 1000 > 100 ? ', ' + centena[Math.floor((number % 1000) / 100)] : '') +
        (number % 100 < 20 && number % 100 > 0 ? ' e ' + unidade[number % 100] : '') +
        (number % 100 < 100 && number % 100 >= 20 ? ' e ' + dezenaDezena[Math.floor((number % 100) / 10)] : '') +
        (number % 100 > 20 && (((number % 100) % 100) % 10) !== 0 ? ' e ' + unidade[((number % 100) % 100) % 10] : '' ) ;
      }
    
      if (number < 20000) {
        return unidade[Math.floor(number / 1000)] + ' mil' +
        (number % 1000 === 100 ? ' e cem' : '' ) +
        (number % 1000 > 100 ? ', ' + centena[Math.floor((number % 1000) / 100)] : '') +
        (number % 100 < 20 && number % 100 > 0 ? ' e ' + unidade[number % 100] : '') +
        (number % 100 < 100 && number % 100 >= 20 ? ' e ' + dezenaDezena[Math.floor((number % 100) / 10)] : '') +
        (number % 100 > 20 && (((number % 100) % 100) % 10) !== 0 ? ' e ' + unidade[((number % 100) % 100) % 10] : '' ) ;
      }

      if (number < 100000) {
        return dezenaDezena[Math.floor(number / 10000)] + 
        (Math.floor(number / 1000) % 10 > 0 && Math.floor(number / 1000) % 10 < 10 ? ' e ' + unidade[Math.floor(number / 1000) % 10] + ' mil' : ' mil') +
        (number % 1000 === 100 ? ' e cem' : '' ) +
        (number % 1000 > 100 ? ', ' + centena[Math.floor((number % 1000) / 100)] : '') +
        (number % 100 < 20 && number % 100 > 0 ? ' e ' + unidade[number % 100] : '') +
        (number % 100 < 100 && number % 100 >= 20 ? ' e ' + dezenaDezena[Math.floor((number % 100) / 10)] : '') +
        (number % 100 > 20 && (((number % 100) % 100) % 10) !== 0 ? ' e ' + unidade[((number % 100) % 100) % 10] : '' ) ;
      }

      if (number === 100000) {
        return centena[Math.floor(number % 100000)] + ' mil' ;
      }

      if (number < 101000) {
        return  'cem mil' +
        dezenaDezena[Math.floor(number / 100000)] + 
        (Math.floor(number / 1000) % 10 > 0 && Math.floor(number / 1000) % 10 < 10 ? ' e ' + unidade[Math.floor(number / 1000) % 10] + ' mil' : '') +
        (number % 1000 === 100 ? ' e cem' : '' ) +
        (number % 1000 === 200 ? ' e cuzentos' : '' ) +
        (number % 1000 === 300 ? ' e trezentos' : '' ) +
        (number % 1000 === 400 ? ' e quatrocentos' : '' ) +
        (number % 1000 === 500 ? ' e quinhentos' : '' ) +
        (number % 1000 === 600 ? ' e seiscentos' : '' ) +
        (number % 1000 === 700 ? ' e setecentos' : '' ) +
        (number % 1000 === 800 ? ' e oitocentos' : '' ) +
        (number % 1000 === 900 ? ' e novecentos' : '' ) +
        (number % 1000 > 100 
          && number % 1000 !== 200
          && number % 1000 !== 300
          && number % 1000 !== 400
          && number % 1000 !== 500
          && number % 1000 !== 600
          && number % 1000 !== 700
          && number % 1000 !== 800
          && number % 1000 !== 900 ? ', ' + centena[Math.floor((number % 1000) / 100)] : '') +
        (number % 100 < 20 && number % 100 > 0 ? ' e ' + unidade[number % 100] : '') +
        (number % 100 < 100 && number % 100 >= 20 ? ' e ' + dezenaDezena[Math.floor((number % 100) / 10)] : '') +
        (number % 100 > 20 && (((number % 100) % 100) % 10) !== 0 ? ' e ' + unidade[((number % 100) % 100) % 10] : '' ) ;
      }



    }

    console.log(Math.floor(number % 100000))

    let numberByText = transformNumberText(number);
    let result = document.getElementById('result');
    result.innerHTML = `${numberByText}`;

    let textResult = document.getElementById('text-result');
    textResult.innerHTML = 'O número digitado foi...' ;
  }
}

