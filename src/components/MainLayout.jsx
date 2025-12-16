import { useState } from 'react';

function MainLayout() {
  const [item, setItem] = useState;

  const aaa = () => {
    console.log('aaaaaa');
    console.log('dddddd');
    console.log('test');
    console.log('cccccc');
    console.log('dddddd');
    console.log('gggggg');
    console.log('cccccc');
  };

  return (
    <>
      <div>111test123테스트시작</div>
      <div>테스트중</div>
      <div>111test123테스트중간점검</div>
      <div>111test123테스트중간점검</div>
      <div>111test123테스트중간점검</div>
      <div>111test123테스트성공</div>
    </>
  );
}
export default MainLayout;
