import React from 'react';
import Svg, {Path} from 'react-native-svg';

function Close(props) {
  return (
    <Svg
      viewBox="0 0 14 14"
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="m8.66 7 4.987-4.987A1.18 1.18 0 0 0 11.979.345L7 5.332 2.005.345a1.17 1.17 0 0 0-1.66 0 1.18 1.18 0 0 0 0 1.668L5.332 7 .345 11.987a1.18 1.18 0 0 0 0 1.668c.46.46 1.208.46 1.66 0L6.992 8.66l4.987 4.995a1.18 1.18 0 0 0 1.668-1.668L8.66 7Z"
        fill="#95989A"
      />
    </Svg>
  );
}

export default Close;
