const begin1 = {
  '1': {
    text: "Argument sifatida ikkita sonni oladigan funksiya yarating va ularning yig‘indisini qaytaring.",
    examples: [
      'addition(3, 2) ➞ 5',
      'addition(-3, -6) ➞ -9',
      'addition(7, 3) ➞ 10'
    ],
    fun_name: 'addition (a, b)',
    solved: false,
    check: ['3, 2', '-3, -6', '7, 3'],
    answers: [5, -9, 10],
  },
  '2': {
    text: "Butun daqiqalarni oladigan va uni soniyalarga aylantiruvchi funksiyani yozing.",
    examples: [
      'convert(5) ➞ 300',
      'convert(3) ➞ 180',
      'convert(2) ➞ 120'
    ],
    fun_name: 'convert (minutes)',
    solved: false,
    check: ['5', '3', '2'],
    answers: [300, 180, 120],
  },
  '3': {
    text: "Argument sifatida butun sonni oladigan funksiya yarating. 1 dan shu songacha bo'lgan sonlar yig'indisini toping. Misol uchun, agar kiruvchi son 4 bo'lsa, sizning funktsiyangiz 10 ni qaytarishi kerak, chunki 1 + 2 + 3 + 4 = 10.",
    examples: [
      'addUp(4) ➞ 10',
      'addUp(13) ➞ 91',
      'addUp(600) ➞ 180300',
    ],
    fun_name: 'addUp (num)',
    solved: false,
    check: ['4', '10', '13', '600'],
    answers: [10, 55, 91, 180300],
  },
  '4': {
    text: "Uchburchakning ikkita tomoni berilgan, uchinchi tomonining maksimal uzunligini topadigan funksiya tuzing, bunda yon uzunliklari butun sonlardan iborat.",
    examples: [
      'nextSide(8, 10) ➞ 17',
      'nextSide(5, 7) ➞ 11',
      'nextSide(9, 2) ➞ 10'
    ],
    fun_name: 'nextSide (side1, side2)',
    solved: false,
    check: ['8, 10', '5, 7', '9, 2'],
    answers: [17, 11, 10],
  },
  '5': {
    text: "Butun son qabul qiluvchi va shu sonning faktorialini qaytaruvchi funksiya tuzing.",
    examples: [
      'factorial(3) ➞ 6',
      'factorial(5) ➞ 120',
      'factorial(13) ➞ 6227020800'
    ],
    fun_name: 'factorial (num)',
    solved: false,
    check: ['3', '5', '13', '9'],
    answers: [6, 120, 6227020800, 362880],
  },
  '6': {
    text: "Ikkita son va matematik amalni (+ - / * ) qabul qiluvchi funksiya tuzing. Funksiya berilgan sonlar ustida amalani bajarib javob qaytarishi kerak.",
    examples: [
      'calculator(2, "+", 2) ➞ 4',
      'calculator(2, "*", 2) ➞ 4',
      'calculator(4, "/", 2) ➞ 2'
    ],
    fun_name: 'calculator (num1, operator, num2)',
    solved: false,
    check: ['2, "+", 2', '12, "*", 2', '4, "/", 2', '123, "-", 24'],
    answers: [4, 24, 2, 99],
  },
  '7': {
    text: "Uchta sonni qabul qiluchi funksiya tuzing. Bu funksiya birinchi ikkita sonning oxirgi raqamlari ko'paytmasining oxirgi raqami uchinchi sonni oxirigi raqamiga teng bo'lsa rost qaytarsin aks holda yolg'on.",
    examples: [
      'lastDig(25, 21, 125) ➞ true',
      'lastDig(55, 226, 5190) ➞ true',
      'lastDig(12, 215, 2142) ➞ false'
    ],
    fun_name: 'lastDig (a, b, c)',
    solved: false,
    check: ['25, 21, 125', '55, 226, 5190', '12, 215, 2142', '14, 23, 231'],
    answers: [true, true, false, false],
  },
  '8': {
    text: "Kordinata tekisligida ikkita nuqta orasidagi masofani (butun qismdan so'ng 3 xona aniqlikda va float tipida) qaytaruvchi funksiya tuzing.",
    examples: [
      'getDistance(-2, 1, 4, 3) ➞ 6.325',
      'getDistance(0, 0, 1, 1) ➞ 1.414',
      'getDistance(10, -5, 8, 16) ➞ 21.095'
    ],
    fun_name: 'getDistance (x1, y1, x2, y2)',
    solved: false,
    check: ['-2, 1, 4, 3', '0, 0, 1, 1', '10, -5, 8, 16'],
    answers: [6.325, 1.414, 21.095],
  },
  '9': {
    text: "Agar n^2 soni n bilan tugasa, n soni 'automorphic' hisoblanadi. Masalan: n=5, n^2=25. Sonni qabul qiladigan va agar shu son 'automorphic' bo'lsa rost, bo'lmasa noto'g'ri qiymatini qaytaradigan funksiya tuzing.",
    examples: [
      'isAutomorphic(5) ➞ true',
      'isAutomorphic(8) ➞ false',
      'isAutomorphic(76) ➞ true'
    ],
    fun_name: 'isAutomorphic (num)',
    solved: false,
    check: ['5', '3', '127', '25', '40', '76'],
    answers: [true, false, false, true, false, true],
  },
  '10': {
    text: "ax² + bx + c = 0 kvadrat tenglama x ning haqiqiy qiymatlari uchun 0, 1 yoki 2 ta aniq yechimga ega. a, b va c berilgan bo'lsa, siz tenglama yechimlar sonini qaytaruvchi funksiya tuzing.",
    examples: [
      'solutions(1, 0, -1) ➞ 2',
      'solutions(1, 0, 0) ➞ 1',
      'solutions(1, 0, 1) ➞ 0'
    ],
    fun_name: 'solutions (a, b, c)',
    solved: false,
    check: ['1, 0, -1', '1, 0, 0', '1, 0, 1'],
    answers: [2, 1, 0],
  },
}

const array1 = {
  '1': {
    text: "Faqat sonlardan iborat massivni oladigan funksiya yarating va birinchi elementni qaytaring.",
    examples: [
      'getFirstValue([1, 2, 3]) ➞ 1',
      'getFirstValue([80, 5, 100]) ➞ 80',
      'getFirstValue([-500, 0, 50]) ➞ -500'
    ],
    fun_name: 'getFirstValue (arr)',
    solved: false,
    check: ['[1, 2, 3]', '[80, 5]', '[-500, 0, 50]'],
    answers: [1, 80, -500],
  },
  '2': {
    text: "Berilgan sonlar qatorida eng kichik va eng katta sonlarni qaytaruvchi funksiya tuzing",
    examples: [
      'minMax([1, 2, 3, 4, 5]) ➞ [1, 5]',
      'minMax([2334454, 5]) ➞ [5, 2334454]',
      'minMax([1]) ➞ [1, 1]',
    ],
    fun_name: 'minMax (arr)',
    solved: false,
    check: ['[1, 2, 3, 4, 5]', '[2334454, 5]', '[1]'],
    answers: [[1, 5], [5, 2334454], [1, 1]],
  },
  '3': {
    text: "rgb() da berilgan rang qiymatlarini qarama-qarshi rangga o'giruvchi funksiya tuzing. (255, 255, 255) bu oqrang va uni qarama-qarshisi (0, 0, 0) qora",
    examples: [
      'colorInvert([255, 255, 255]) ➞ [0, 0, 0]',
      'colorInvert([0, 0, 0]) ➞ [255, 255, 255]',
      'colorInvert([165, 170, 221]) ➞ [90, 85, 34]'
    ],
    fun_name: 'colorInvert (rgb)',
    solved: false,
    check: ['[255, 255, 255]', '[0, 0, 0]', '[165, 170, 221]', '[120, 45, 25]'],
    answers: [[0, 0, 0], [255, 255, 255], [90, 85, 34], [135, 210, 230]],
  },
}