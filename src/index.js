module.exports = function reverse (n) {
  let arr;
  if(n < 0){
   arr = n.toString().slice(1).split(''); 
  }else{

    arr = n.toString().split('');
  }
  arr.reverse();
  return Number(arr.join('')) 
}
