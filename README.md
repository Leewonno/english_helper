# 영어 단어 암기 도우미, English Helper

## 📘 프로젝트 개요

영어 단어 암기를 반복 연습으로 돕는 간단한 학습 도구입니다. 사용자는 마크다운 표 형태로 단어와 뜻을 입력하고, 영어 단어의 의미를 맞히며 학습 성과를 확인할 수 있습니다.

<br />

## 💡 개발 목적
영어 단어 암기를 돕기 위해 개발하였습니다.

<br />

## ⚡️ 주요 기능
- 즉석 퀴즈: 입력된 단어를 한 문제씩 표시하고 사용자가 입력한 뜻의 정오를 판별합니다.
- 오답 노트: 학습 세션 종료 후 틀린 단어와 뜻을 표로 정리해 다시 확인할 수 있습니다.

<br />

## ⚙️ 기술 스택
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

<br />

## 🗂️ 프로젝트 구조
```
src/
  app/
    assets/
    share/
```

<br />

## 🏃 사용법
```bash
npm install
npm run dev
```

앱의 텍스트 영역에 아래와 같이 **마크다운 표 형태**로 단어를 붙여 넣으세요.

```markdown
| 단어 | 뜻 |
|----|----|
| apple | 사과 |
| improve | 향상시키다 |
| confident | 자신감 있는 |
```

<br />

## 🌐 License

```
Copyright 2025 Leewonno

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```