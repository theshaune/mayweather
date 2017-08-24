import styled, { css } from 'styled-components'
import { withState, lifecycle, compose } from 'recompose'

const enhance = compose(
  withState('mounted', 'setMounted', ({ instant }) => instant),
  lifecycle({
    componentWillMount() {},
    componentDidMount() {
      // 😖 This delay allows our animation to trigger on mount
      setTimeout(() => this.props.setMounted(true), 150)
    }
  })
)

// Styles
const isMounted = css`
  transform: scale3d(1, 1, 1);
  opacity: 1;
`

const inActive = css`
  transform: scale3d(.75, .75, 1);
  opacity: 0;
  z-index: 1;
`

// Component
const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  transform: scale3d(1.1, 1.1, 1.1);

  transition: .25s;
  z-index: 11;

  ${props => props.mounted && isMounted};
  ${props => props.activeMeme.url !== props.meme.url && inActive};
`

const Page = ({ activeMeme, meme, key, children, mounted }) =>
  <Wrapper
    meme={meme}
    activeMeme={activeMeme}
    children={children}
    mounted={mounted}
    key={key}
  />

export default enhance(Page)
