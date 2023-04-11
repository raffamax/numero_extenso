let unidade = ['Zero','Um','Dois','Três','Quatro','Cinco','Seis','Sete','Oito','Nove','Dez','Onze','Doze','Treze','Quatorze','Quinze','Dezesseis','Dezessete','Dezoito','Dezenove'];
let dezenaDezena = ['Vinte','Trinta','Quarenta','Cinquenta','Sessenta','Setenta','Oitenta','Noventa'];
let centena = ['Cem','Cento','Duzentos','Trezentos','Quatrocentos','Quinhentos','Seiscentos','Setecentos','Oitocentos','Novecentos'];
let milhar = ['Mil'];
let milhao = ['Milhão','Milhões'];
let bilhao = ['Bilhão','Bilhões'];
let trilhao = ['Trilhão','Trilhões'];


function enviar() {
    let number = Number(document.getElementById('number').value);

    let numberByText = '';

    if (number >= 10000) {
        numberByText += `${unidade[Math.floor(number / 1000)]} ${milhar[0]}`;
        number %= 1000;
        if (number !== 0) {
          numberByText += ', ';
        }
      }

    if (number > 1000) {
        numberByText +=  milhar[Math.floor(number / 1000) - 1];
        number %= 1000;
        if (number !== 0) {
          numberByText += ', ';
        }
      }

    if (number === 1000) {
        numberByText += milhar[Math.floor(number / 1000) - 1];
        number %= 1000;
    }

    if (number === 100) {
        numberByText += centena[Math.floor(number / 100) - 1];
        number %= 100;
      }
    
    
      if (number > 100) {
        numberByText += centena[Math.floor(number / 100)];
        number %= 100;
        if (number !== 0) {
          numberByText += ' e ';
        }
      }
    
      if (number >= 10 && number <= 19) {
        numberByText += unidade[number];
        number = 0;
      } else if (number >= 20) {
        numberByText += dezenaDezena[Math.floor(number / 10) - 2];
        number %= 10;
        if (number !== 0) {
          numberByText += ' e ';
        }
    }

    
    
      if (number > 0) {
        numberByText += unidade[number];
      }

    
    
    // return console.log(numberByText);

      
      let result = document.getElementById('result');
        result.innerHTML = `O número digitado foi... ${numberByText}`; 

}