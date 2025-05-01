module.exports = {
  semi: true, // 문장 끝에 세미콜론 사용
  singleQuote: true, // 작은따옴표 사용
  printWidth: 100, // 한 줄 최대 길이
  tabWidth: 2, // 탭 너비
  trailingComma: "all", // 가능한 곳에 항상 쉼표
  arrowParens: "always", // 화살표 함수 매개변수 항상 괄호
  bracketSpacing: true, // 중괄호 내 공백 유지
  endOfLine: "lf", // 줄바꿈 방식 통일
  plugins: ["prettier-plugin-tailwindcss"], // Tailwind 클래스 정렬 플러그인
};
