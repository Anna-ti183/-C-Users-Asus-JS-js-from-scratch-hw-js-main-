// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(Number_1, Number_2, Number_3) {
   if (Number_1 >= Number_2 && Number_1 >=Number_3){
   return Number_1 
   } else if (Number_2 >= Number_1 && Number_2 >= Number_3){
    return Number_2
   } else {
    return Number_3
   }
}
console.log(findLargest(5,15,10))