let unidade = ['Zero','Um','Dois','Três','Quatro','Cinco','Seis','Sete','Oito','Nove','Dez','Onze','Doze','Treze','Quatorze','Quinze','Dezesseis','Dezessete','Dezoito','Dezenove'];
let dezenaDezena = ['','','Vinte','Trinta','Quarenta','Cinquenta','Sessenta','Setenta','Oitenta','Noventa'];
let centena = ['Cem','Cento','Duzentos','Trezentos','Quatrocentos','Quinhentos','Seiscentos','Setecentos','Oitocentos','Novecentos'];


function enviar() {
  let number = Number(document.getElementById('number').value);

  if (number < 0 || number > 100000) {
    document.getElementById('resultNegative').innerHTML = `Este número está fora do intervalo q sei escrever, Consulte novamente em breve.`;
    document.getElementById('result').innerHTML = ''; 
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
        return 'Mil' ;
      }

      if (number < 2000) {
        return 'Mil' + 
        (number % 1000 === 100 ? ' e Cem' : '' ) +
        (number % 1000 > 100 ? ', ' + centena[Math.floor((number % 1000) / 100)] : '') +
        (number % 100 < 20 && number % 100 > 0 ? ' e ' + unidade[number % 100] : '') +
        (number % 100 < 100 && number % 100 >= 20 ? ' e ' + dezenaDezena[Math.floor((number % 100) / 10)] : '') +
        (number % 100 > 20 && (((number % 100) % 100) % 10) !== 0 ? ' e ' + unidade[((number % 100) % 100) % 10] : '' ) ;
      }
    
      if (number < 20000) {
        return unidade[Math.floor(number / 1000)] + ' mil' +
        (number % 1000 === 100 ? ' e Cem' : '' ) +
        (number % 1000 > 100 ? ', ' + centena[Math.floor((number % 1000) / 100)] : '') +
        (number % 100 < 20 && number % 100 > 0 ? ' e ' + unidade[number % 100] : '') +
        (number % 100 < 100 && number % 100 >= 20 ? ' e ' + dezenaDezena[Math.floor((number % 100) / 10)] : '') +
        (number % 100 > 20 && (((number % 100) % 100) % 10) !== 0 ? ' e ' + unidade[((number % 100) % 100) % 10] : '' ) ;
      }

      if (number < 100000) {
        return dezenaDezena[Math.floor(number / 10000)] + 
        (Math.floor(number / 1000) % 10 > 0 && Math.floor(number / 1000) % 10 < 10 ? ' e ' + unidade[Math.floor(number / 1000) % 10] + ' mil' : ' mil') +
        (number % 1000 === 100 ? ' e Cem' : '' ) +
        (number % 1000 > 100 ? ', ' + centena[Math.floor((number % 1000) / 100)] : '') +
        (number % 100 < 20 && number % 100 > 0 ? ' e ' + unidade[number % 100] : '') +
        (number % 100 < 100 && number % 100 >= 20 ? ' e ' + dezenaDezena[Math.floor((number % 100) / 10)] : '') +
        (number % 100 > 20 && (((number % 100) % 100) % 10) !== 0 ? ' e ' + unidade[((number % 100) % 100) % 10] : '' ) ;
      }

      if (number === 100000) {
        return centena[Math.floor(number % 100000)] + ' mil' ;
      }

      

    }

    console.log(Math.floor(number / 100000) - 1)
    let numberByText = transformNumberText(number);
    let result = document.getElementById('result');
    result.innerHTML = `O número digitado foi... ${numberByText}`;
  }
}