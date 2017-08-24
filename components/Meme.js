import styled, { css } from 'styled-components'
import { withState, lifecycle, compose } from 'recompose'
import Fighter from './Fighter'

import Share from '../components/Share'
const enhance = compose(
  withState('isMounted', 'setMounted', ({ instant }) => instant),
  lifecycle({
    componentWillMount() {},
    componentDidMount() {
      // 😖 This delay allows our animation to trigger on mount
      setTimeout(() => this.props.setMounted(true), 50)
      this.forceUpdate()
    }
  })
)

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  padding: 0 2 rem;
  transition: 2s;

  ${props =>
    props.isMounted &&
    css`
      opacity: 1
  `};
`

const Image = styled.div`
  display: inline-block;
  margin-bottom: calc(1rem + 2vh);
  max-width: calc(2rem + 6vh + 1vw);
  width: 100%;

  @media (min-width: 420px) {
    max-width: calc(3rem + 6vh + 2vw);
  }
`

const Title = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1;
  max-width: calc(460px + 15vw);
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 420px) {
    font-size: calc(1rem + 1.5vw + 1vh);
  }
`

const Meme = ({ asPath, activePage, meme, isMounted }) =>
  <Wrapper meme={meme} activePage={activePage} isMounted={isMounted}>
    <Image>
      <Fighter image={meme.raw.image} />
    </Image>
    <Title>
      “{meme.sentence}”
    </Title>
    <Share meme={meme} url={asPath} />
  </Wrapper>

export default enhance(Meme)
