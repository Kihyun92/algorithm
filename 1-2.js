/**
 * 문제: 1.2.1 명령어 인수로 정수 N을 입력받아 N개의 랜덤 좌표를 1X1 사각형 영역 안에 생성하는 Point2D 클라이언트 프로그램을 작성하라.
 *  그리고 가장 가까이 있는 두 점의 거리를 계산하라.
 * 참고 자료
 *  - [랜덤하게 숫자를 만드는 방법](https://svijaykoushik.github.io/blog/2019/10/04/three-awesome-ways-to-generate-random-number-in-javascript/)
 */
class Point2D {
  constructor(N) {
    this.points = [];

    for (let i = 0; i < N; i++) {
      const x = Math.random();
      const y = Math.random();
      this.points.push([x, y]);
    }
  }

  #getDistance(point1, point2) {
    const x = point1[0] - point2[0];
    const y = point1[1] - point2[1];
    return Math.sqrt(x * x + y * y);
  }

  getMostCloselyPointDistance() {
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < this.points.length; i++) {
      for (let j = i + 1; j < this.points.length; j++) {
        const distance = this.#getDistance(this.points[i], this.points[j]);
        if (min > distance) {
          min = distance;
        }
      }
    }
    return min;
  }
}

const point2D = new Point2D(10);
console.log(point2D.points);
console.log(point2D.getMostCloselyPointDistance());

/**
 * 문제: 1.2.2 명령어 인수로 정수 N을 입력받아 N개의 구간(double 값 쌍)을 표준 입력으로부터 입력받고
 * 서로 교차하는 구간들을 출력하는 Interval1D 클라이언트 프로그램을 작성하라.
 */

class Interval1D {
  constructor(N) {
    this.intervals = [];

    // 랜덤 숫자를 생성하여 N개의 구간을 입력 받았다고 가정
    for (let i = 0; i < N; i++) {
      const x = Math.random();
      const y = Math.random();
      this.intervals.push([x, y]);
    }
  }

  #isCross(interval1, interval2) {
    const [x1, y1] = interval1;
    const [x2, y2] = interval2;
    return x1 < y2 && x2 < y1;
  }

  getCrossIntervals() {
    const result = [];

    for (let i = 0; i < this.intervals.length; i++) {
      for (let j = i + 1; j < this.intervals.length; j++) {
        if (this.#isCross(this.intervals[i], this.intervals[j])) {
          result.push([this.intervals[i], this.intervals[j]]);
        }
      }
    }
    return result;
  }
}

const interval1D = new Interval1D(10);
console.log('interval1D.intervals::: ', interval1D.intervals);
console.log('interval1D.getCrossIntervals::: ', interval1D.getCrossIntervals());

/**
 * 문제:
 * 1.2.3 명령어 인수로 N, min, max를 입력받고 N개의 랜덤 2D 구간을 생성한다. 이때 구간의 너비와
 * 높이는 1X1 사각형 안에서 min과 max 사이에 균일하게 분포해야 한다. 생성된 구간들을 StdDraw를
 * 이용해서 그림으로 그리고 서로 겹치는 구간의 개수와 다른 구간을 내부에 포함하는 구간의 개수를 출력하라.
 */

// 1.2.4
// var, let, const 
var string1 = 'hello';
var string2 = string1;
string1 = 'world';
console.log(string1);
console.log(string2);
// 우ㅣ와 같이 가정하면 'world', 'hello'로 찍힐 것 같음

/** 
 * 문제: 1.2.6 
 * Hint: 문자열 병합
 */
function isCircular(s, a) {
  if (s.length !== a.length) return false;
  const string = s + s;
  return string.indexOf(a) !== -1;
}

// AGTGACGAGTGACG TGACGAC
console.log(isCircular('ACTGACG', 'TGACGAC')); // toBe true


// 1.2.7 
// 'hello world' -> 'dlrow olleh'

// 1.2.8 
// const a = ['a', 'b', ..., ]
// const b = ['a', 'b', ..., ]

// a <-> b 

// let temp = a;
// a = b;
// b = temp;
// 결론: 효율성 영향 없을듯

// 1.2.9


// 1.2.10
// 1.2.11 날짜값이 유효한지 검사하는 SmartDate 클래스를 구현하라.
// TODO: assert 사용 가능? -> console.assert()를 활용하면 될듯
class SmartDate {
  constructor(m, d, y) {
    // 유효성 검사
    if (m < 1 || m > 12) throw new Error('Invalid month');
    if (d < 1 || d > 31) throw new Error('Invalid day');
    if (y < 0) throw new Error('Invalid year');
    this.m = m;
    this.d = d;
    this.y = y;

    this._value = y * 512 + m * 32 + d;
  }
}

// 1.2.12 
class SmartDate2 {
  constructor(m, d, y) {
    // 유효성 검사
    if (m < 1 || m > 12) throw new Error('Invalid month');
    if (d < 1 || d > 31) throw new Error('Invalid day');
    if (y < 0) throw new Error('Invalid year');
    this.m = m;
    this.d = d;
    this.y = y;

    this._value = y * 512 + m * 32 + d;
  }

  dayOfTheWeek() {
    const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const currentDate = new Date(this.y, this.m - 1, this.d);
    return weekdays[currentDate.getDay()];
  }
}

console.log(new SmartDate2(6, 22, 2023).dayOfTheWeek()); // thursday

// 1.2.18 
class Accumulator {
  constructor() {
    this.m = 0.0;
    this.s = 0.0;
    this.N = 0;
  }

  addDataValue(x) {
    this.N += 1;
    this.s = this.s + 1.0 * (this.N - 1) / this.N * (x - this.m) * (x - this.m);
    this.m = this.m + (x - this.m) / this.N;
  }

  mean() {
    return this.m;
  }

  // 분산
  var() {
    console.log('this.s::: ', this.s);
    console.log('this.N::: ', this.N);
    console.log('this.s / (this.N - 1)::: ', this.s / (this.N - 1));
    return this.s / (this.N - 1);
  }

  // 표준편차
  stddev() {
    return Math.sqrt(this.var());
  }
}

const acc = new Accumulator();
acc.addDataValue(10);

console.log(acc.mean());
console.log(acc.var());
console.log(acc.stddev());
// LOG: JS에선 NAN이 출력됨. 0으로 나누다보니 발생하는 것 같은데... 좀더 보자
