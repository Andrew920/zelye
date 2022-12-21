import { useAppSelector } from 'Hooks/useAppSelector';
import { useMemo } from 'react';
import { selectCurrentUser } from 'Slices';

export const useAuth = () => {
  const user = useAppSelector(selectCurrentUser);

  return useMemo(() => ({ user }), [user]);
};
