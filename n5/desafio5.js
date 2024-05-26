// Projete uma função de gaveta de caixa registradora checkCashRegister()que aceite preço de compra como primeiro argumento ( price), pagamento como segundo argumento ( cash) e gaveta de dinheiro ( cid) como terceiro argumento.

// cidé uma matriz 2D que lista a moeda disponível.

// A checkCashRegister()função deve sempre retornar um objeto com uma statuschave e uma changechave.

// Devolva {status: "INSUFFICIENT_FUNDS", change: []}se o dinheiro na gaveta for menor que o troco devido ou se você não puder devolver o troco exato.

// Devolver {status: "CLOSED", change: [...]}com dinheiro na gaveta como valor da chave changese for igual ao troco devido.

// Caso contrário, retorne {status: "OPEN", change: [...]}, com o troco devido em moedas e notas, ordenado da maior para a menor ordem, conforme o valor da changechave.

// Unidade monetária	Quantia
// Centavo	US$ 0,01 (CENTAVO)
// Níquel	US$ 0,05 (NÍQUEL)
// moeda de dez centavos	US$ 0,1 (DIME)
// Trimestre	US$ 0,25 (TRIMESTRE)
// Dólar	US$ 1 (UM)
// Cinco dólares	US$ 5 (CINCO)
// Dez dólares	US$ 10 (DEZ)
// Vinte dólares	$ 20 (VINTE)
// Cem dólares	$ 100 (CEM)
// Veja abaixo um exemplo de matriz de gaveta de dinheiro:

// [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100]
// ]




function checkCashRegister(price, cash, cid) {
    // mapeamento do nome da moeda e do valor
    const valoresMoeda = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    };
  
    // dinheiro total no caixa (cid)
    let totalCid = 0;
    for (let item of cid) {
      totalCid += item[1];
    }
  
    // troco devido
    let mudanca = cash - price;
  
    // teste de fundos insuficientes
    if (totalCid < mudanca) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } 
    // teste de caixa fechado
    else if (totalCid === mudanca) {
      return {status: "CLOSED", change: cid};
    } 
    // cálculo do troco
    else {
      let change = [];
      for (let i = cid.length - 1; i >= 0; i--) {
        const nomeMoeda = cid[i][0];
        const valorMoeda = valoresMoeda[nomeMoeda];
        let montante = 0;
        // enquanto o troco devido for maior ou igual ao valor da moeda e houver disponibilidade dessa moeda no caixa
        while (mudanca >= valorMoeda && cid[i][1] > 0) {
          mudanca -= valorMoeda;
          cid[i][1] -= valorMoeda;
          montante += valorMoeda;
          // arredonda para evitar erros de precisão com valores de ponto flutuante
          mudanca = Math.round(mudanca * 100) / 100;
        }
        // Se usar alguma quantidade dessa moeda como troco, adiciar ao array de troco
        if (montante > 0) {
          change.push([nomeMoeda, montante]);
        }
      }
      // Se conseguir fornecer todo o troco devido
      if (mudanca === 0) {
        return {status: "OPEN", change: change};
      } 
      // Se não der para fornecer o troco exato
      else {
        return {status: "INSUFFICIENT_FUNDS", change: []};
      }
    }
  }
  
  console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]));
  