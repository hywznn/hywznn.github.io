import React, { useEffect, useRef } from "react";
import { workflow } from "../data.mjs";
import { contributionGroups, solving } from "../case-data.mjs";
import { External, Arrow } from "./UI.jsx";
export default function CaseStudy() {
  const disclosure = useRef(null);
  useEffect(() => {
    const revealCase = (hash) => {
      if (hash === "#fowoco-case" || hash.startsWith("#case-")) {
        disclosure.current.open = true;
        requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ block: "start" }));
      }
    };
    const openFromLink = () => revealCase(window.location.hash);
    const openFromClick = (event) => {
      const link = event.target.closest?.("a[href^='#']");
      if (link) revealCase(link.hash);
    };
    openFromLink();
    window.addEventListener("hashchange", openFromLink);
    document.addEventListener("click", openFromClick);
    return () => {
      window.removeEventListener("hashchange", openFromLink);
      document.removeEventListener("click", openFromClick);
    };
  }, []);
  return (
    <section id="fowoco-case" className="section case-section">
      <div className="container">
        <details className="case-disclosure" ref={disclosure}>
          <summary>
            <div><p className="section-kicker">02 / FOWOCO CASE STUDY</p><h2>중복 판단과 업무 단절을 고친 과정</h2><p>현업 조사 · 중복 판단 제거 · OCR 이후 업무 재개 · E2E 검증</p></div>
            <span className="disclosure-label"><span className="when-closed">상세 펼치기</span><span className="when-open">상세 접기</span><b aria-hidden="true">+</b></span>
          </summary>
        <div className="case-layout">
          <aside className="case-index">
            <span>PROBLEM TO RESULT</span>
            <a href="#case-research">01 현업에서 찾은 문제</a>
            <a href="#case-architecture">02 실행 구조와 개인 기여</a>
            <a href="#case-solving">03 두 가지 문제 해결</a>
            <a href="#case-result">04 끝까지 확인한 결과</a>
          </aside>
          <div className="case-content">
            <article className="case-block" id="case-research">
              <p className="block-kicker">01 / 현업 조사</p>
              <h3>번역보다, 서류 누락과 재작업이 더 큰 부담이었습니다.</h3>
              <p>
                처음에는 E-9 근로자와의 언어 문제가 핵심이라고 예상했습니다.
                제조업 HR 담당자는 한국어가 가능한 동료나 외부 지원자를 통해
                소통하고 있었습니다. 더 큰 부담은 신고 절차, 누락 서류, 만료일
                관리와 재작업이었습니다.
              </p>
              <div className="research-shift">
                <div>
                  <span>초기 가설</span>
                  <strong>번역 · 행정 안내</strong>
                </div>
                <Arrow />
                <div>
                  <span>조사 후 바꾼 방향</span>
                  <strong>정보 보완 → 승인 → 완료 증빙</strong>
                </div>
              </div>
              <p>
                그래서 자연어로 답하는 기능에 머무르지 않고, 선행 서류 확인부터
                담당자 승인과 완료 증빙 저장까지 업무 단계로 구조화했습니다.
              </p>
            </article>
            <article className="case-block" id="case-architecture">
              <p className="block-kicker">02 / 실행 구조</p>
              <h3>AI는 후보를 제안하고, 서버는 실행 조건을 확인합니다.</h3>
              <p>
                Intent 분석 결과를 바로 실행하지 않습니다. 필수정보와 업무
                상태를 확인하고 HR 승인을 거친 요청만 실행하도록 경계를
                두었습니다.
              </p>
              <ol className="workflow-diagram" aria-label="FOWOCO 업무 흐름">
                {workflow.map((x, i) => (
                  <li key={x} className={i === 5 ? "human-step" : ""}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <strong>{x}</strong>
                    {i === 5 && <small>사람이 승인</small>}
                  </li>
                ))}
              </ol>
              <div className="responsibility">
                <div>
                  <span>AI</span>
                  <strong>요청 해석 · 후보 제안</strong>
                  <p>Intent / Workflow / Required Slot</p>
                </div>
                <div>
                  <span>SERVER + HR</span>
                  <strong>조건 검증 · 승인 · 실행 통제</strong>
                  <p>현재 상태 / revision / fingerprint</p>
                </div>
                <div>
                  <span>BACKEND</span>
                  <strong>이력 · 증빙 · 실패 후 재개</strong>
                  <p>Task / Outbox / Idempotency</p>
                </div>
              </div>
              <p className="measurement-note">
                Agent가 서버 DB를 직접 변경하거나 기관 제출·승인·완료를 임의로
                수행하지 않도록 설계했습니다.
              </p>
              <details className="contribution-details">
                <summary>
                  직접 맡은 설계·구현·검증 범위{" "}
                  <span aria-hidden="true">+</span>
                </summary>
                <div className="contribution-grid">
                  {contributionGroups.map((g) => (
                    <div key={g.title}>
                      <h4>{g.title}</h4>
                      <ul>
                        {g.items.map((x) => (
                          <li key={x}>{x}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </details>
            </article>
            <article className="case-block" id="case-solving">
              <p className="block-kicker">03 / 문제 해결</p>
              <div className="solution-stack">
                {solving.map((s) => (
                  <div className="solution" key={s.number}>
                    <span className="solution-number">{s.number}</span>
                    <h3>{s.title}</h3>
                    <p>{s.problem}</p>
                    <div className="solution-action">
                      <span>수정</span>
                      <p>{s.action}</p>
                    </div>
                    <div className="before-after">
                      <div>
                        <span>변경 전</span>
                        <p>{s.before}</p>
                      </div>
                      <Arrow />
                      <div>
                        <span>변경 후</span>
                        <p>{s.after}</p>
                      </div>
                    </div>
                    <div className="solution-result">
                      <strong>{s.value}</strong>
                      <p>{s.result}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
            <article className="case-block case-result" id="case-result">
              <p className="block-kicker">04 / 검증 결과</p>
              <h3>OCR부터 증빙까지, 대표 Case의 모든 Task를 완료했습니다.</h3>
              <p>
                합성 문서를 이용한 로컬 Server–AI E2E에서 문서 제출, OCR 검토,
                업무 재개, HWP 생성, 승인과 증빙 저장을 순서대로 확인했습니다.
              </p>
              <div className="case-result-metrics">
                <div>
                  <strong>4 / 4</strong>
                  <span>Task 완료</span>
                </div>
                <div>
                  <strong>
                    100<span>%</span>
                  </strong>
                  <span>대표 Case 진행률</span>
                </div>
                <div>
                  <strong>COMPLETED</strong>
                  <span>최종 Case 상태</span>
                </div>
              </div>
              <p className="measurement-note">
                대표 Case 1개의 로컬 합성 문서 검증 결과입니다. 실제 정부기관
                자동 제출·기업 파일럿 성과가 아닙니다.
              </p>
              <blockquote>
                업무형 Agent에는 답변 이후의 설계가 필요했습니다.
                <br />
                <strong>
                  상태를 남기고, 중복을 막고, 승인받고, 실패한 지점에서 다시
                  시작하는 것.
                </strong>
                <br />그 흐름을 Backend에 연결하는 개발자가 되고자 합니다.
              </blockquote>
              <External
                href="https://github.com/fowoco/server"
                className="inline-link"
              >
                FOWOCO 구현 보기
              </External>
            </article>
          </div>
        </div>
        </details>
      </div>
    </section>
  );
}
