//1.3.6 다음의 코드는 큐 q에 대해서 어떤 작업을 수행하는가?
//Stack<String> stack = new Stack<String>();
// while (!q.isEmpty())
//  stack.push(q.dequeue());
// while (!stack.isEmpty())
//  q.enqueue(stack.pop());

// 1.3.9 표준 입력으로부터 우측 괄호가 빠진 수식을 입력받아, 이항 연산 단위로 괄호 쌍에 맞게 우측 괄호가 추가된 수식을 출력하는 프로그램을 작성하라.
// 예를 들어 1 + 2 ) * 3 - 4 ) * 5 - 6 ) ) ) 을 입력받으면 ((1 + 2) * ((3 - 4) * (5 - 6)))을 출력한다.
function solution9 (str) {
    // [ 1,  +,  2,  ),  *,  3,  - 4 ) * 5 - 6 ) ) )]
    let arr = str.split(' ');
    let stack = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === ')') {
        const rightNumber = stack.pop(); // 4
        const operator = stack.pop(); // -
        const leftNumber = stack.pop(); // (3 - 4)
        stack.push(`( ${leftNumber} ${operator} ${rightNumber} )`);
      } else {
        stack.push(arr[i]);
      }
    }
  
  return stack[0];
}
// console.log(solution9('1 + 2 ) * 3 - 4 ) * 5 - 6 ) ) )'));
console.log(solution9('1 + 2 ) * 3 + 4 ) ) * 3 - 4 ) * 5 - 6 ) ) )'));
// 1 + 2 ) -> ( 1 + 2) * 
// 숫자 연산자 숫자 닫힘
// function solution (str) {
//   let arr = str.split(' ');
//   let stack = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === ')') {
//       // (1 + 2)
//       const rightNumber = stack.pop();
//       const operator = stack.pop();
//       const leftNumber = stack.pop();
//       stack.push(`( ${leftNumber} ${operator} ${rightNumber} )`);
//     } else {
//       // 1, +, 2
//       stack.push(arr[i]);
//     }
//   }

//   return stack;
// }
// console.log(solution('1 + 2 )')); // (1 + 2)


// 1.3.32 스태큐. 스태큐는 끝부분이 스택인 큐 데이터 타입을 말한다. 스태큐는 push, pop, enqueue, dequeue 동작을 지원한다. 스태큐 ADT에 대한 API를 설계하고 연결 리스트 기반으로 구현하라.

