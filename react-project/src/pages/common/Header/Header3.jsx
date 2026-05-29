const Header3 = () => {
  return (
    <>
      <header className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-[#f4fbf7] via-[#f5fbf9] to-[#fbfbfa] border-b border-gray-100">
        {/* 왼쪽: 검색창 영역 */}
        <div className="flex items-center flex-1 max-w-md">
          <div className="relative w-full">
            {/* 돋보기 아이콘 */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Input 필드 */}
            <input
              type="text"
              placeholder="Find something..."
              className="w-full py-1.5 pl-10 pr-12 text-sm text-gray-600 placeholder-gray-400 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-gray-300"
            />

            {/* 단축키 표시 (⌘K) */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <span className="text-xs text-gray-400 font-sans">⌘K</span>
            </div>
          </div>
        </div>

        {/* 오른쪽: 내비게이션 & 버튼 영역 */}
        <div className="flex items-center space-x-6 text-sm font-medium text-gray-600">
          <a href="#api" className="hover:text-gray-900 transition-colors">
            API
          </a>
          <a
            href="#documentation"
            className="hover:text-gray-900 transition-colors"
          >
            Documentation
          </a>
          <a href="#support" className="hover:text-gray-900 transition-colors">
            Support
          </a>

          {/* 세로 구분선 */}
          <div className="h-4 w-[1px] bg-gray-200"></div>

          {/* 테마 토글 버튼 (해 아이콘) */}
          <button className="text-gray-500 hover:text-gray-900 transition-colorsp p-1 rounded-full hover:bg-gray-50">
            <Sun className="w-4 h-4 stroke-[2]" />
          </button>

          {/* Sign in 버튼 */}
          <button className="px-5 py-2 text-sm font-semibold text-white bg-[#111111] rounded-full hover:bg-black transition-colors">
            Sign in
          </button>
        </div>
      </header>
    </>
  );
};

export default Header3;
