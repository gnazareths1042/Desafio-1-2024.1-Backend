// Converta o número fornecido em um algarismo romano.
// Todas as respostas em algarismos romanos devem ser fornecidas em letras maiúsculas.

function convertToRoman(num) {
    let resultado = '';
    
    const algarismosRomanos = [ 
      { valor: 1000, numeral: 'M' },
      { valor: 900, numeral: 'CM' },
      { valor: 500, numeral: 'D' },
      { valor: 400, numeral: 'CD' },
      { valor: 100, numeral: 'C' },
      { valor: 90, numeral: 'XC' },
      { valor: 50, numeral: 'L' },
      { valor: 40, numeral: 'XL' },
      { valor: 10, numeral: 'X' },
      { valor: 9, numeral: 'IX' },
      { valor: 5, numeral: 'V' },
      { valor: 4, numeral: 'IV' },
      { valor: 1, numeral: 'I' }
    ];
  
    for (let i = 0; i < 13; i++) { //passar em todos os 13 elementos da matriz, em ordem decrescente
      while (num >= algarismosRomanos[i].valor) {
        resultado += algarismosRomanos[i].numeral;
        num -= algarismosRomanos[i].valor;
      }
    }
    
    return resultado;
  }
  
  console.log(convertToRoman(36));