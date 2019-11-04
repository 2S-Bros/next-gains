import { useTransition, animated } from "react-spring"
import styled from "styled-components"
import Portal from "./Portal"
import { CloseButton } from "./Buttons"
import useScrollFreeze from "../hooks/useScrollFreeze"

const ModalAnimation = props => {
  const { isActive } = props
  const transitions = useTransition(isActive, null, {
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
    leave: {
      opacity: 0,
      transform: "translate3d(0,-40px,0)"
    }
  })
  return (
    <Portal>
      {transitions.map(
        ({ item, key, props: animation }) =>
          item && <Modal key={key} animation={animation} {...props} />
      )}
    </Portal>
  )
}

const Modal = ({ animation, isActive, children, maxWidth, closeAction }) => {
  useScrollFreeze()
  const { opacity } = animation
  const pointerEvents = isActive ? `all` : `none`
  return (
    <ModalOuterWrapper style={{ pointerEvents }}>
      <ModalWrapper>
        <Transport maxWidth={maxWidth} style={animation}>
          <CloseButton
            onClick={closeAction}
            style={{
              position: "absolute",
              right: "-15px",
              top: "-15px",
              pointerEvents: "all",
              zIndex: "1"
            }}
          />
          <div style={{ pointerEvents }}>{children}</div>
        </Transport>
      </ModalWrapper>
      <Background as={animated.div} style={{ opacity }} onClick={closeAction} />
    </ModalOuterWrapper>
  )
}

const ModalOuterWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: var(--highestLevel);
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow-y: scroll;
  padding: 10%;
  pointer-events: none;
  z-index: var(--highestLevel);
`

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  pointer-events: all;
  background: linear-gradient(
    142.24deg,
    rgba(130, 216, 216, 0.9) 3.62%,
    rgba(25, 19, 36, 0.9) 100%
  );
  width: 100vw;
  height: 100vh;
  z-index: 11;
`

const Transport = styled(animated.div)`
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
  min-width: 320px;
  max-width: ${({ maxWidth }) => maxWidth};
`

export default ModalAnimation
