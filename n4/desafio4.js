// Retorne truese a string passada parecer um número de telefone válido nos EUA.

// O usuário pode preencher o campo do formulário da maneira que desejar, desde que tenha o formato de um número válido nos EUA. A seguir estão exemplos de formatos válidos para números dos EUA (consulte os testes abaixo para outras variantes):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// Para este desafio, você verá uma string como 800-692-7753ou 8oo-six427676;laskdjf. Sua tarefa é validar ou rejeitar o número de telefone dos EUA com base em qualquer combinação dos formatos fornecidos acima. O código de área é obrigatório. Se o código do país for fornecido, você deverá confirmar se o código do país é 1. Retorne truese a string for um número de telefone válido nos EUA; caso contrário, retorne false.



function telephoneCheck(str) {
    // é preciso usar uma expressão regular para validar números de telefone 
    const valida = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
  //'^' - inicio da str     // '(1\s?)' - "1" seguido opcionalmente por um espaço
  // '(\(\d{3}\)|\d{3})' - 3 dígitos dentro de parênteses ou 3 digitos  
  // '[-\s]?' - um hífen ou espaço em branco, opcionais
  // '\d{3}' - 3 digitos    // '\d{4}' - 4 digitos
  // '$' - fim da str
  
    // testa se a string corresponde a expressão regular
    return valida.test(str);
  }
  telephoneCheck("555-555-5555");