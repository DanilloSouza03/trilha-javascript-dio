/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
const precoEtiqueta = 100;
const condicaoPag = 4;

if (condicaoPag === 1) {
    const precoFinal = precoEtiqueta - (precoEtiqueta * 0.1);
    console.log(`O preço final é ${precoFinal.toFixed(2)}`);
} else if (condicaoPag === 2) { 
    const precoFinal = precoEtiqueta - (precoEtiqueta * 0.15);
    console.log(`O preço final é ${precoFinal.toFixed(2)}`);
} else if (condicaoPag === 3) {
    const precoFinal = precoEtiqueta;
    console.log(`O preço final é ${precoFinal.toFixed(2)}`);
} else if (condicaoPag === 4) {
    const precoFinal = precoEtiqueta + (precoEtiqueta * 0.1);
    console.log(`O preço final é ${precoFinal.toFixed(2)}`);
} else {
    console.log(`Não existe essa forma de pagamento`)
}