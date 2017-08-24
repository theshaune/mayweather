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
const isMounted = css``

const showBackground = css`
  &:before {
    opacity: 1;
  }
`

// Component
const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  transition: 1s;

  &:before {
    background-image: url(/static/conorWallpaper.svg),
      url(/static/floydWallpaper.svg);
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: bottom right, left, right;
    content: none;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0;
    transition: .5s;
    z-index: -1;
  }

  @media (min-width: 690px) {
    &:before {
      content: '';
    }
  }

  ${props => props.mounted && isMounted};
  ${props => props.activePage === '/' && props.mounted && showBackground};
`

const App = ({ activePage, page, children, mounted }) =>
  <Wrapper
    activePage={activePage}
    children={children}
    page={page}
    mounted={mounted}
  />

export default enhance(App)
