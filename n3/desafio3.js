// Uma das cifras mais simples e mais conhecidas é a cifra de César , também conhecida como cifra de deslocamento . Em uma cifra de deslocamento, os significados das letras são alterados em uma determinada quantidade.

// Um uso moderno comum é a cifra ROT13 , onde os valores das letras são deslocados em 13 casas. Assim A ↔ N, B ↔ Oe assim por diante.

// Escreva uma função que receba uma string codificada ROT13 como entrada e retorne uma string decodificada.

// Todas as letras serão maiúsculas. Não transforme nenhum caractere não alfabético (isto é, espaços, pontuação), mas transmita-os.



function rot13(str) {

    const letraParaNumero = {
      A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9, K: 10, L: 11,
      M: 12, N: 13, O: 14, P: 15, Q: 16, R: 17, S: 18, T: 19, U: 20, V: 21, W: 22,
      X: 23, Y: 24, Z: 25
    };
  
    const numeroParaLetra = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
    // decodificar caractere ROT13
    function decodificarCaractere(char) {
      // testar se é uma letra
      if (/[A-Z]/.test(char)) {
      // número associado à letra
        const numero = letraParaNumero[char];
      // transformação ROT13 (módulo 26 para garantir que esteja dentro do intervalo de letras)
        const numeroNovo = (numero + 13) % 26;
      // retorna a letra correspondente ao número decodificado
        return numeroParaLetra[numeroNovo];
      }
      else{ //caso de espaços e caracteres especiais 
        return char;
      }
    }
    // decodifica cada caractere na string e retorna a string resultante
    return str.split('').map(decodificarCaractere).join('');
  }
  
  console.log(rot13("SERR PBQR PNZC")); 
  