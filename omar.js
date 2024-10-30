let name =  document.getElementById('name')
let email =  document.getElementById('email')
let messge =  document.getElementById('messge')
let click =  document.getElementById('SEND')
let datepro;

if(localStorage.product != null    ){

  datepro = JSON.parse(localStorage.product)

}
else{
     datepro = [];
}
 click.onclick = function(){

  let x = {
    name:name.value,
    emai:email.value,
    messge:messge.value,
  }

 name.value = ''
 email.value = ''
 messge.value =''
 document.getElementById('done').classList.remove('done')
 document.getElementById('done').classList.add('q')


datepro.push(x)

localStorage.product = JSON.stringify(datepro)

showdate()
 }
function showdate(){
 let table;
 for( let i = 0 ; i < datepro.length ; i++){

     table += `
      <tr>
 <td>${i}</td>
    <td>${datepro[i].name}</td>
    <td>${datepro[i].emai}</td>
    <td>${datepro[i].messge}</td>
  </tr>
  `}
   document.getElementById('q').innerHTML = table

 
 }showdate()
document.getElementById('o').onclick = function(){
   document.getElementById('er').classList.add('wer')
    
}
