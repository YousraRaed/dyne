import { ActionReducer } from '@ngrx/store';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return (state, action) => {
    const nextState = reducer(state, action);

    if (typeof window !== 'undefined') {
      localStorage.setItem('cartState', JSON.stringify(nextState.cart));
    }

    return nextState;
  };
}
