const numbers = [2, 4, 8, 16, 32, 64,128, 256, 512, 1024, 2048];

    let soma =0;

    let media =0;

    for(let i = 0; i < numbers.length; i++) {

       soma += numbers[i];
       media = soma/numbers.length;

       
    };

    
   alert(`A soma do ${numbers} é igual a ${soma}!`);
   alert(`A media dos valores somados é de ${media.toFixed(2)}`);
 
   const notas = {
      bimestre1: 7.0,
      bimestre2: 3.7,
      bimestre3: 6.4,
      bimestre4: 8.6
      }
  let somas =0;
  let quantidades = 0;
  for(let bimestre in notas){
  somas+=notas[bimestre]
  quantidades++
  }
  let mediaa;
  media = (somas/quantidades).toFixed(2);
  console.log(somas);
  
  if(mediaa >= 7){
      console.log(`O aluno foi aprovado`)
  } else {
      console.log(`O aluno nao foi aprovado com a nota ${media}` )
  }