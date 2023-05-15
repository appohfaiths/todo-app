import { useState } from 'react';

export default function useToggleState() {
  const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}
