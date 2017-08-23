import {
  compose,
  withProps,
  withState,
  withPropsOnChange,
  withHandlers
} from 'recompose'
import Router from 'next/router'
import { generateMeme, parseMeme } from '../lib/data'
import AppBody from '../components/AppBody'
import AppWrapper from '../components/AppWrapper'
import Button from '../components/Button'
import Home from '../components/Home'
import Meme from '../components/Meme'
import Page from '../components/Page'
import Share from '../components/Share'

const enhance = compose(
  withState('memes', 'setMemes', []),
  withPropsOnChange(['meme'], props => {
    props.setMemes([props.meme, ...props.memes.splice(0, 1)])
  }),
  withHandlers({
    changeRoutes: props => event => {},
    home: props => event =>
      Router.push(
        {
          pathname: '/'
        },
        '/',
        { shallow: false }
      ),
    route: props => nextRoute => event => {
      // This duplicate could be handled better.
      props.setMemes([props.meme, ...props.memes.splice(0, 1)])
      Router.push(
        {
          pathname: '/',
          query: {
            url: nextRoute.url,
            ...nextRoute
          }
        },
        nextRoute.url,
        { shallow: false }
      )
    }
  })
)

const Index = ({ asPath, memes, route, home, ...props }) =>
  <AppWrapper>
    <AppBody>
      <Page meme={{ url: '/' }} activeMeme={{ url: asPath }} instant>
        <Home instant />
      </Page>
      {asPath !== '/' &&
        memes.map(
          o =>
            o &&
            <Page key={o.url} id={o.url} meme={o} activeMeme={memes[0]} instant>
              <Meme meme={o} instant />
            </Page>
        )}
    </AppBody>
  </AppWrapper>

const EhancedIndex = enhance(Index)

EhancedIndex.getInitialProps = ({ query, asPath }) => {
  const meme = asPath !== '/' ? parseMeme(query) : null
  return { query, asPath, meme }
}

export default EhancedIndex
