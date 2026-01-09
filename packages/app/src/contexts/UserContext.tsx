import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';

type User = {
  id: string | null;
  name: string;
  email: string;
  token: string | null;
  isAuthenticated: boolean;
};

type UserAction =
  | { type: 'LOGIN'; payload: Omit<User, 'isAuthenticated'> }
  | { type: 'LOGOUT' }
  | {
      type: 'UPDATE_PROFILE';
      payload: Partial<Omit<User, 'isAuthenticated' | 'token'>>;
    };

const defaultUser: User = {
  id: null,
  name: '',
  email: '',
  token: null,
  isAuthenticated: false,
};

const UserContext = createContext<{
  state: User;
  dispatch: React.Dispatch<UserAction>;
}>({
  state: defaultUser,
  dispatch: () => null,
});

function userReducer(state: User, action: UserAction): User {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...action.payload,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return { ...defaultUser };
    case 'UPDATE_PROFILE':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(userReducer, defaultUser, () => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('user');
      return stored ? JSON.parse(stored) : defaultUser;
    }
    return defaultUser;
  });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state));
  }, [state]);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
