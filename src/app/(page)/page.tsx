'use client'

import styles from "@/app/assets/css/home.module.css";
import { KeyboardEvent, useEffect, useState } from "react";
import { getExamData } from "../share";
import { ArrayType } from "../share/types/data";

export default function Home() {

  // 문제 풀이 시작
  const [isStart, setIsStart] = useState<boolean>(false);
  // 문제 원본 데이터
  const [data, setData] = useState<string>("");
  // 문제 변환 데이터 (마크다운 테이블 -> 리스트)
  const [arr, setArr] = useState<ArrayType[]>([]);
  // 문제 순번
  const [idx, setIdx] = useState<number>(0);
  // 정답 Input
  const [answer, setAnswer] = useState<string>("");
  // 정답 표시
  const [isResult, setIsResult] = useState<boolean>(false);
  // 정답 결과
  const [result, setResult] = useState<string>("");
  // 틀린 문제
  const [wrong, setWrong] = useState<ArrayType[]>([]);
  // 마지막까지 다 풀었는지 확인
  const [isEnd, setIsEnd] = useState<boolean>(false);


  const handleStart = () => {
    if (!data) {
      alert("문제를 풀 단어와 뜻을 입력해주세요.");
      return;
    }
    setWrong([]);
    setIsStart(true);
    setIsEnd(false);
    setArr(getExamData(data));
  }

  const handleCheckAnswer = () => {
    // 의미가 맞는 지 확인
    if (arr[idx].mean.replaceAll(' ', '').indexOf(answer.replaceAll(' ', '')) > -1) {
      setResult("정답입니다!");
    } else {
      setResult(`틀렸습니다. 정답은 '${arr[idx].mean}' 입니다.`);
      setWrong((pre) => [...pre, { word: arr[idx].word, mean: arr[idx].mean }]);
    }
    setIsResult(true);
    // 2초 뒤 다음문제 세팅
    setTimeout(() => {
      setIsResult(false);
      setAnswer("");
      // 문제 끝남
      if (idx + 1 === arr.length) {
        setIsEnd(true);
        setData("");
        return;
      }
      setIdx(idx + 1);
    }, 2000)
  }

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    const keyCode = e.keyCode;
    if (key === 'Enter' && keyCode === 13) {
      handleCheckAnswer();
    }
  }

  useEffect(() => {
    setIsStart(false);
    setArr([]);
    setIdx(0);
  }, [isEnd])

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>오늘의 영어 단어</div>
      {
        isStart && !isEnd ?
          // 시작 + 문제가 있음
          arr ?
            <div className={styles.examBox}>
              <div className={styles.word}>
                {arr[idx].word}
              </div>
              <div className={styles.answerBox}>
                <input className={styles.answer} type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} onKeyDown={(e) => handleEnter(e)} />
              </div>
              <div className={styles.buttonBox}>
                <button type="button" className={styles.send} onClick={handleCheckAnswer}>확인</button>
                {
                  isResult ?
                    <div className={styles.result}>{result}</div>
                    :
                    <></>
                }

              </div>
            </div>
            :
            <></>
          :
          <div className={styles.textBox}>
            <textarea className={styles.textarea} value={data} onChange={(e) => setData(e.target.value)}></textarea>
            <button className={styles.start} onClick={handleStart}>시작</button>
          </div>
      }
      {
        isEnd ?
          // 틀린문제
          <div className={styles.wrongBox}>
            <div className={styles.wrongTitle}>틀린 단어</div>
            <table className={styles.wrongTable}>
              <colgroup>
                <col width={"50%"}></col>
                <col width={"50%"}></col>
              </colgroup>
              <thead>
                <tr>
                  <th>단어</th>
                  <th>뜻</th>
                </tr>
              </thead>
              <tbody>
                {wrong.map((v, i) => {
                  return (
                    <tr key={i}>
                      <td>{v.word}</td>
                      <td>{v.mean}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          :
          <></>
      }
    </div>
  );
}
