// support/utils.js
export function obterDiaUtilAnterior(data) {
    let diasParaReduzir = 1;
    while (diasParaReduzir > 0) {
      data.setDate(data.getDate() - 1);
      if (data.getDay() !== 0 && data.getDay() !== 6) { // 0 = Domingo, 6 = Sábado
        diasParaReduzir -= 1;
      }
    }
    return data;
  }
  
  export function formatarData(data) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }
  