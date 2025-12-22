import { useState } from 'react';

export default function App() {
  const [menu] = useState<string[]>(['이름순', '최신순']);
  const [menuItem, setMenuItem] = useState<string>('최신순');
  const [showMenu, setShowMenu] = useState(false); // 이름을 setShowMenu로 수정

  // 함수는 return 위쪽에 위치해야 합니다.
  function handleSelect(cate: string) {
    setMenuItem(cate);
    setShowMenu(false);
  }

  return (
    <> {/* 부모 태그로 감싸야 함 */}
      <div
        className={`select-box ${showMenu ? 'open' : ''}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        {menuItem}
        <img src="arrow.png" alt="arrow" />
      </div>

      {showMenu && (
        <div className="select-options">
          {menu.map((item, index) => (
            <div
              key={index} // map 사용 시 key 값은 필수입니다.
              className={`option-item ${item === menuItem ? 'select' : ''}`} // 비교 로직 수정
              onClick={() => handleSelect(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </>
  );
}