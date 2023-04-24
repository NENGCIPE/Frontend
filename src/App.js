import React from 'react';
import Navigation from './components/Navigation';
import './App.css';


function App() {
  return (
    <div className= "App">
      <Navigation />


      <div class="container1">
        <img src="./img/Image1.png" alt="간판" class="image1"/>
        <div class="text1">
          <p>Find food recipe in your refrigerator</p>
        </div>
      </div>

      <div class="container2">
        <img src="./img/Image3.png" alt="소고기" class="image2"/>
        <div class="text2">
          <p>냉장고에 재료는 많은데 </p><p>무슨 음식을 할 수 있을까?</p>
        </div>
      </div>

      <div class="container3">
        <img src="./img/Image2.png" alt="밥상" class="image3"/>
        <div class="text3">
          <p>냉장고에 재료는 많은데 </p><p>무슨 음식을 할 수 있을까?</p>
        </div>
      </div>

      <div class="container4">
        <div class="text4">
          <p>RECIPES</p>
        </div>
        <div class="image4">
          <img src="./img/Image4.png" alt="예시1" />
          <img src="./img/Image5.png" alt="예시2" />
          <img src="./img/Image6.png" alt="예시3" />
        </div>
      </div>

    </div>


    
  );
}

export default App;
