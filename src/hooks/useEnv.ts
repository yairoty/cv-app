import { useMemo } from 'react';
import { EnvVariables, getEnv } from '../utils';

export const useEnv = (): EnvVariables => {
  const envVars = useMemo(() => {
    return getEnv();
  }, []);

  return envVars;
};
