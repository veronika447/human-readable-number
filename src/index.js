module.exports = toReadable

function numToStr(n) {
  if (n == '1')
    return 'one';
  if (n == '2')
    return 'two';
  if (n == '3')
    return 'three';
  if (n == '4')
    return 'four';
  if (n == '5')
    return 'five';
  if (n == '6')
    return 'six';
  if (n == '7')
    return 'seven';
  if (n == '8')
    return 'eight';
  if (n == '9')
    return 'nine';
  return 'zero';
}

function toReadable(number) {
  let arr = Array.from(number.toString()).map(item => numToStr(item));
  if (arr.length === 3)
    arr.splice(0, 1, arr[0] + ' hundred');
  if (arr.at(-2) == 'one') {
    if (arr.at(-1) == 'zero') { arr.splice(-2, 2, 'ten'); }
    else if (arr.at(-1) == 'one') { arr.splice(-2, 2, 'eleven'); }
    else if (arr.at(-1) == 'two') { arr.splice(-2, 2, 'twelve'); }
    else if (arr.at(-1) == 'three') { arr.splice(-2, 2, 'thirteen'); }
    else if (arr.at(-1) == 'five') { arr.splice(-2, 2, 'fifteen'); }
    else if (arr.at(-1) == 'eight') { arr.splice(-2, 2, 'eighteen'); }
    else {
      arr.splice(-2, 2, arr.at(-1) + 'teen')
    }
  } else if (arr.length > 1) {
    if (arr.at(-2) == 'two') { arr.splice(-2, 1, 'twenty') }
    else if (arr.at(-2) == 'three') { arr.splice(-2, 1, 'thirty') }
    else if (arr.at(-2) == 'four') { arr.splice(-2, 1, 'forty') }
    else if (arr.at(-2) == 'five') { arr.splice(-2, 1, 'fifty') }
    else if (arr.at(-2) == 'eight') { arr.splice(-2, 1, 'eighty') }
    else if (arr.at(-2) == 'zero') { arr.splice(-2, 1) }
    else {
      let arr1 = arr.splice(-2, 2,);
      arr.push(arr1[0] + 'ty', arr1[1])
    };
    if (arr.at(-1) == 'zero')
      arr.splice(-1, 1);
  }
  return arr.join(' ');
}