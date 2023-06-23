import {
  createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState,
} from 'react';

type SpringType = typeof import('@react-spring/web')
type GestureType = typeof import('@use-gesture/react')

interface AnimationContextPayload {
    Gesture?: GestureType;
    Spring?: SpringType;
    isLoaded?: boolean;
}

// Обе библиотеки зависят друг от друга
const getAsyncAnimationModules = async () => Promise.all([
  import('@react-spring/web'),
  import('@use-gesture/react'),

]);

const AnimationContext = createContext<AnimationContextPayload>({});

export const useAnimationLibs = () => useContext(AnimationContext) as
    Required<AnimationContextPayload>;

export const AnimationProvider = ({ children }: {children: ReactNode}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const SpringRef = useRef<SpringType>();
  const GestureRef = useRef<GestureType>();

  useEffect(() => {
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      SpringRef.current = Spring;
      GestureRef.current = Gesture;
      setIsLoaded(true);
    });
  }, []);

  const providerValue = useMemo(() => ({
    Spring: SpringRef.current,
    Gesture: GestureRef.current,
    isLoaded,
  }), [isLoaded]);

  return (
    <AnimationContext.Provider value={providerValue}>
      {children}
    </AnimationContext.Provider>
  );
};
