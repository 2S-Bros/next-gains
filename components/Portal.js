import ReactDOM from "react-dom"

const createUniversalPortal = children => {
  if (
    !(
      typeof window !== `undefined` &&
      window.document &&
      window.document.createElement
    )
  ) {
    return null
  }
  let modalRoot = document.getElementById(`modal-root`)
  if (!modalRoot) {
    modalRoot = document.createElement(`div`)
    modalRoot.setAttribute(`id`, `modal-root`)
    document.body.appendChild(modalRoot)
  }
  return ReactDOM.createPortal(children, modalRoot)
}

const Portal = ({ children }) => createUniversalPortal(children)

export default Portal
