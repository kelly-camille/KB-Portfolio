import React, {useEffect} from 'react'
import ReactVivus from 'react-vivus';
import mainTitle from '../svg/main-title_animated.svg';


const Title = () => (
  <ReactVivus
    id="foo"
    option={{
      file: mainTitle,
      animTimingFunction: 'EASE',
      type: 'oneByOne',
      onReady: console.log
    }}
    style={{ height: '100px', width: '100px' }}
    callback={console.log}
  />
);




  // function myCallback(){
  //   animation.stop()
  // 



// const Title= () => {
//   new Vivus('main-title', {
//     file: 'svg/main-title_animated.svg',
//     onReady: function (myVivus) {
//       // `el` property is the SVG element
//       myVivus.el.setAttribute('height', 'auto');
//     }
//   });

//   return(
//     <div id= 'main-title'><p>test</p></div>
//   )
// }

//Vivus component - research
export default Title