import styled, { css } from 'styled-components'
import { withState, lifecycle, compose } from 'recompose'
import Fighter from './Fighter'

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
  padding: 0 1rem;
  transition: 2s;

  ${props =>
    props.isMounted &&
    css`
      opacity: 1
  `};
`

const Title = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: calc(2.5rem + 1.5vw + 1vh);
  font-weight: 600;
  letter-spacing: -0.025em;
  line-height: 1;
  margin-bottom: calc(2rem + 2vh);
  max-width: calc(460px + 15vw);
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 420px) {
    font-size: calc(3rem + 1.5vw + 1vh);
  }
`

const SubTitle = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  max-width: calc(320px);
  text-align: center;
  text-transform: uppercase;

  // @media (min-width: 420px) {
  //   font-size: calc(2.5rem + 1.5vw + 1vh);
  // }
`

const Meme = ({ activePage, isMounted }) =>
  <Wrapper isMounted={isMounted}>
    <Title>
      The <br /> Smack Talk <br /> Generator
    </Title>
    <SubTitle>
      Now you can roast your friends like mayweather and mcgregor.
      <br />
      <br />
      Click the Button, generate an insult, then send to your friends.
    </SubTitle>
  </Wrapper>

export default enhance(Meme)
