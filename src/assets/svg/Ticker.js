import React from 'react';
import Svg, {Path} from 'react-native-svg';

function Ticker(props) {
  return (
    <Svg viewBox="0 0 9 8" {...props} xmlns="http://www.w3.org/2000/svg">
      <Path d="M3.929.382 2.58 2.7l-1.1 1.879L.13 6.977C-.173 7.494.072 8 .67 8h7.611c.6 0 .839-.506.54-1.023L7.473 4.619c-.3-.516-.8-1.383-1.1-1.9L5.026.4C4.72-.124 4.228-.135 3.929.382Z" />
    </Svg>
  );
}

export default Ticker;
