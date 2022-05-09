// 1-topshiriq

// let string ='xyz';
// let key=30;
// function main( string, key){
//     let natija='';
//     let alifbo=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//     for(let i=0;i<string.length;i++){
//       for(let j=0; j<alifbo.length;j++){
//           if(string[i]==alifbo[j]){
//               if(j+key>25){
//               natija+=(alifbo[j+key-26])%26;}
//               else 
//               {natija+=alifbo[j+key];}
//           }
//           else continue;
//       }
//     }
//     return natija;
// }
// console.log(main(string,key));

// // // // // // // // // // // // // 

//   2-topshiriq
// let b=[5,1,4,2];
// function arrayOfProducts(array){
//     let a=[array.length];
//     for(let i=0;i<array.length;i++){
//         let k=1;
//          for(let j=0;j<array.length;j++){
//              if(i!=j){
//             k*=array[j];
//         }
//         else continue;
//     }
//     a[i]=k;
//     }
//     return a;
// }
// console.log(arrayOfProducts(b));

// // // // // // // // // 

// 3- topshiriq
// let a=[3,2,1,2,6];

// function main(array) {
//     let soni = 0
//     array = array.sort((a, b) => a - b);
//     for (let i = 0; i < array.length; i++) { 
//         soni += (array.length - (i + 1))*array[i];
//     }
//   return soni;
// }
// console.log(main(a))

async function array(){
    let name= await 'ibrohim';
    console.log(name);
    return name;
}
//array().then(data => console.log(data));
console.log(1);
array();
console.log(2);