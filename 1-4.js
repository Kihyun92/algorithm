// 1.4.8 입력 파일의 숫자 값들 중에 값이 같은 쌍이 몇개나 되는지 헤아리는 프로그램을 작성하라. 
// 만약 생각한 알고리즘이 제곱 시간이라면 Array.sort()를 사용하여 선형로그 시간 알고리즘을 고안하라.
const input = [2, 1, 8, 5, 4, 2, 3, 3, 6];

const findPair = (input) => {
    const numbers = input.sort((a,b)=> a-b);
    let count = 0;
    
    for(let i=0;i<numbers.length-1;i++){
        if(numbers[i] === numbers[i + 1]) {
            count++;
        }
    }

    return count;
}

console.log('findPair(input)::: ', findPair(input));
// => nC2, 문제가 잘못됨.. 경우의 수를 구하는 것 같은 문제임. [1, 1, 1, 2]

// 1.4.10 이진 탐색 코드를 수정하여 합치되는 항목들 중에서 항상 인덱스가 가장 작은 항목이 리턴하게 하라. 이때 로그 시간 성능이 유지되어야 한다.
const input2 = [1, 4, 5, 2, 3, 6, 7, 8, 6, 9, 10].sort((a,b)=> a-b);
const binarySearch = (input, target) => {
    let left =0;
    let right = input.length-1;
    let result = -1;

    while(left <= right){
        const mid = Math.floor((left+right)/2);

        if(input[mid] === target){
            result = mid
            right = mid -1
        } else if(input[mid]<target) {
            left = mid +1
        } else {
            right = mid -1
        }
    }

    return result;
}

console.log('input2::: ', input2);
console.log('binarySearch(input2, 6)::: ', binarySearch(input2, 6));  // 5

// 1.4.12 N개의 int값을 가진 두 개의 정렬된 배열을 받아서 두 배열 모두에 존재하는 값들을 순서대로 출력하는 프로그램을 작성하라. 이 프로그램의 실행시간은 최악 조건에서 N에 비례해야 한다.

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = [2, 4, 6, 8, 10, 12, 14, 16, 18];

const findCommonValue = (a, b) => {
  const commonValues = [];
  let i = 0;
  let j = 0;

  while(i<a.length && j<b.length){
    if(a[i]===b[j]){
        commonValues.push(a[i]);
        i++;
        j++;
    } else if(a[i]<b[j]){
        i++;
    } else {
        j++;
    }
  }

  return commonValues;
}

console.log('findCommonValue(a, b)::: ', findCommonValue(a, b));  // 2, 4, 6, 8
