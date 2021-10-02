import React from 'react';
import Svg, {Path} from 'react-native-svg';

function SearchIcon(props) {
  return (
    <Svg
      viewBox="0 0 20 20"
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="m19.755 18.345-5.392-5.393a8.026 8.026 0 1 0-1.415 1.414l5.392 5.392 1.415-1.413ZM8.047 14.052a6 6 0 1 1 4.242-1.757 5.962 5.962 0 0 1-4.242 1.757Z"
        fill="#95989A"
      />
    </Svg>
  );
}

export default SearchIcon;
