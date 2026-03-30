import { useState, useCallback } from 'react';

export const useImageLoader = (initialCount = 0) => {
  const [unloadedCount, setUnloadedCount] = useState(initialCount);

  const onImageLoadStart = useCallback(() => {
    setUnloadedCount(prev => prev + 1);
  }, []);

  const onImageLoad = useCallback(() => {
    setUnloadedCount(prev => prev - 1);
  }, []);

  return {
    isLoading: unloadedCount > 0,
    onImageLoadStart,
    onImageLoad,
  };
};
