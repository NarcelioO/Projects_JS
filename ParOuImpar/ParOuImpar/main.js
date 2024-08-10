
//impar ou par
const Par_Impar = (e) => e % 2 === 0 ? console.log("Par") : console.log("Impar")


//Função media com vetor e for
const Notas = [10, 20, 30, 40, 50]
const Calculo_Media = (arr)=>{
  let soma = 0
  for(let i = 0; i < arr.length ; i++){
    soma += arr[i]
  }
  var media = soma / arr.length
  return Math.round(media)
} 

//String to UpperCase
var Nome = "narcelio"
const Caixa_Alta = (e) =>{
  var texto = e
  return(texto.toUpperCase())
}

//Numero Primo 

const NumeroPrimo = (e) =>{ 
  if(e > 1){
    if(e === 2 || e % 2 != 0  ){
      return 'Primo'
    }
    else return 'Não é Primo'
  }
   
}

console.log(NumeroPrimo(10))