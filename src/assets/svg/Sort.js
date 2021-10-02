import React from 'react';
import Svg, {Path} from 'react-native-svg';

function Sort(props) {
  return (
    <Svg
      viewBox="0 0 16 16"
      {...props}
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.167 5.083 8.083 1 4 5.083l.822.823L8.084 2.65l3.261 3.255.823-.823ZM4 10.917 8.083 15l4.084-4.083-.823-.823-3.26 3.255-3.261-3.255-.823.823Z"
        fill="#707070"
      />
    </Svg>
  );
}

export default Sort;
