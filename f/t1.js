//function getResult() {
//    s = s[0].toUpperCase() + s.substring(1, s.lengt);
//    return s
//}

//console.log(
//    getResult('имя'),
//    '=='<
//    'имя'
//);

// function getResult() {
//   var s = 0;

//    for ( let i = 0; i < a.length; i++) {
//        s = s + a[i];
//   }
//  return s;
// }

getResult();

console.log(getResult([1, 2, 3, 4, 5]), '==', 15)
console.log(getResult([-1, -2, -3, -4, -5]), '==', -15)
console.log(getResult([-2, -2, 0, 4]), '==', 0)

function getResult(s)
 {
    var a = ['0', '1', '2', '3', '4', '5',
                '6', '7', '8', '9', '10', '11', '12', '13', '14',];

            for (let i = 0; i < a.length; i++) {
                s = s.replace(a[i], '!');
            }

  return s;
}

console.log(
    getResult('Текст с числами 2 и 3 до 5.'),  
    '==',
    'Текст с числами ! и ! до !.'
);