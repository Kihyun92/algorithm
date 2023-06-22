// 1.1.3  명령어를 인수로 3개의 정수를 받고 그 값들이 모두 같으면 "equal" 다르면 "not equal" 문자를 작성하는 프로그램을 작성하라. 
function checkEqual(a, b, c) {
  // 정수 여부 체크
  if(!Number.isInteger(a)||!Number.isInteger(b)||!Number.isInteger(c)) {
    return 'not equal';
  }

  // 값 비교
  if (a === b && b=== c) {
    return "equal";
  }
  return "not equal";
}
console.log(checkEqual(1,2,3))
console.log(checkEqual(1,1,1))
console.log(checkEqual(1,'한글',1))
console.log(checkEqual(1,'1',1))
console.log(checkEqual(1.0,1,1)) // 1.0은 정수로 인식
console.log(checkEqual(1.1,1.1,1.1))

// 1.1.5  double 타입 변수 x,y가 정확히 0과 1사이에 있으면 true를 출력하고 그렇지않으면 false를 출력하는 프로그램을 작성하라. 
function checkRange(x, y) {
  if(x%1 > 0 && y%1 > 0) {
    return x > 0 && x < 1 && y > 0 && y < 1;
  }
  return false;
}

console.log(checkRange(0.1, 0.2)) // true
console.log(checkRange(0.1, 1.2)) // false
console.log(checkRange('0.1', '0.2')) // false

// 1.1.9  양의 정수 N을 이진수로 표현한 String타입 변수 s로 변환하는 코드를 작성하라. 
function toBinaryString(N) {
    if(N === 0){
        return '0'
    }
    
    let number = N;
    let binary = ''; 

    while(number > 0) {
        binary = number % 2 + binary
        number = Math.floor(number/2)
    }

    return binary
}

console.log(toBinaryString(18)) // 10010
console.log(Number(18).toString(2))

console.log(toBinaryString(234123))
console.log(Number(234123).toString(2))

// 1.1.13 2차원 배열의 행과 열을 바꾸는 (90도 회전)코드를 작성하라. 즉 원본이 N열 M행이었다면 바뀐 행열은 M열 N행이어야한다. 
function rotateMatrix(matrix) {
  const rowNumber = matrix.length;
  const colNumber = matrix[0].length;
  const result = [];

  for (let i = 0; i < colNumber; i++) {
    result[i]=[];

    for (let j = 0; j < rowNumber; j++) {
      result[i][j] = matrix[j][i];
    }
  }
  return result;
}

console.log(rotateMatrix([[1,2,3],[4,5,6],[7,8,9]])) // [[1,4,7],[2,5,8],[3,6,9]]
console.log(rotateMatrix([[1,2,3],[4,5,6],[7,8,9],[10,11,12]])) // [[1,4,7,10],[2,5,8,11],[3,6,9,12]]
