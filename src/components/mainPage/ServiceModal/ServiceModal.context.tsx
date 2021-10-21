import { createContext, PropsWithChildren, useReducer } from 'react'
import { DEFAULT_STATE } from '../../../constants/initialState'
import { Dispatch } from 'react'
import { AnyAction, Service } from '../../../types'
import { ACTIONS } from '../../../constants/actions'

type ModalState = {
  show: boolean
  service: Service
}

const useActions = (dispatch: Dispatch<AnyAction>) => ({
  showModal: (service: Service) => dispatch({ type: ACTIONS.showModal, payload: { service } }),
  closeModal: () => dispatch({ type: ACTIONS.closeModal, payload: {} }),
})

export const ModalContext = createContext({
  state: DEFAULT_STATE.modal,
  actions: {} as ReturnType<typeof useActions>,
})

const showModal = (state: ModalState, payload: Record<string, any>): ModalState => ({
  ...state,
  show: true,
  ...payload,
})

const closeModal = (state: ModalState): ModalState => ({
  ...state,
  show: false,
})

const modalReducer = (state: ModalState, { type, payload }: AnyAction) => {
  switch (type) {
    case ACTIONS.showModal:
      return showModal(state, payload)

    case ACTIONS.closeModal:
      return closeModal(state)

    default:
      return state
  }
}

export const ModalContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [state, dispatch] = useReducer(modalReducer, DEFAULT_STATE.modal)

  const actions = useActions(dispatch)

  return (
    <ModalContext.Provider value={{ state, actions }} >
      {children}
    </ModalContext.Provider>
  )
}
