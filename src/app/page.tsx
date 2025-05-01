// src/app/page.tsx
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-900 to-zinc-800 flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg animate-text-flicker">
        Daro Obsidian Clone
      </h1>
      <p className="text-lg md:text-xl text-zinc-300 mb-8 text-center max-w-xl">
        마크다운 기반 노트, 자유로운 연결, 그래프 뷰까지.
        <br />
        당신만의 지식 네트워크를 시작하세요.
      </p>
      <Button className="text-lg px-8 py-3 bg-blue-600 hover:bg-blue-700 shadow-lg">
        새 노트 만들기
      </Button>

      {/* 최근 노트 카드 그리드 (샘플 데이터) */}
      <section className="mt-16 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-white mb-6">최근 노트</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-zinc-700 rounded-xl p-5 shadow hover:scale-105 transition cursor-pointer"
            >
              <h3 className="text-lg font-bold text-white mb-2">
                샘플 노트 {n}
              </h3>
              <p className="text-zinc-300 text-sm">최근 수정: 2025-05-01</p>
            </div>
          ))}
        </div>
      </section>

      {/* 주요 기능 미리보기 */}
      <section className="mt-20 flex flex-col md:flex-row gap-8">
        <div className="bg-zinc-800 rounded-2xl p-6 w-64 shadow text-center">
          <span className="text-3xl mb-2 block">📝</span>
          <div className="font-semibold text-white mb-1">마크다운 에디터</div>
          <div className="text-zinc-400 text-sm">
            실시간 미리보기, 단축키 지원
          </div>
        </div>
        <div className="bg-zinc-800 rounded-2xl p-6 w-64 shadow text-center">
          <span className="text-3xl mb-2 block">🕸️</span>
          <div className="font-semibold text-white mb-1">그래프 뷰</div>
          <div className="text-zinc-400 text-sm">
            노트 간 연결, 네트워크 시각화
          </div>
        </div>
        <div className="bg-zinc-800 rounded-2xl p-6 w-64 shadow text-center">
          <span className="text-3xl mb-2 block">📁</span>
          <div className="font-semibold text-white mb-1">폴더/금고 관리</div>
          <div className="text-zinc-400 text-sm">
            폴더별 노트 분류, 금고 구조
          </div>
        </div>
      </section>
    </main>
  );
}
