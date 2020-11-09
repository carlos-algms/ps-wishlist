import { useCallback, useEffect, useRef, useState } from 'react';

export default function useMergeableState<S>(
  initialState: S | (() => S),
): [S, (s: Partial<S>) => void] {
  const isMounted = useRef(true);
  const [state, setState] = useState<S>(initialState);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const mergeState = useCallback(
    (partialState: Partial<S> | ((current: S) => Partial<S>)): void => {
      if (isMounted.current) {
        setState((currentState: S) => {
          const newState =
            typeof partialState === 'function' ? partialState(currentState) : partialState;
          return { ...currentState, ...newState };
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [], // FIX: eslint is complaining about S generic params
  );

  return [state, mergeState];
}
