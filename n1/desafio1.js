// Retorne truese a string fornecida for um palíndromo. Caso contrário, retorne false.

// Um palíndromo é uma palavra ou frase escrita da mesma maneira para frente e para trás, ignorando pontuação, maiúsculas e minúsculas e espaçamento.

// Nota: Você precisará remover todos os caracteres não alfanuméricos (pontuação, espaços e símbolos) e colocar tudo no mesmo caso (minúsculas ou maiúsculas) para verificar a existência de palíndromos.

// Passaremos strings com formatos variados, como racecar, RaceCar, e race CARentre outros.

// Também passaremos strings com símbolos especiais, como 2A3*3a2, 2A3 3a2e 2_A3*3#A2.


function palindrome(str) {
    // deixa apenas letras
    let newStr = str.replace(/[\W_]/g, '');
    // converte todas as letras para minusculas 
    newStr = newStr.toLowerCase();
    // compara a string original com sua forma invertida
    return newStr === newStr.split('').reverse().join('');
  }
  