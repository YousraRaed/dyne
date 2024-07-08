import { ActionReducer, INIT, UPDATE } from '@ngrx/store';

export function hydrationMetaReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      if (typeof window !== 'undefined') {
        const savedState = localStorage.getItem('cartState');
        if (savedState) {
          return {
            ...state,
            cart: JSON.parse(savedState),
          };
        }
      }
    }

    return reducer(state, action);
  };
}
