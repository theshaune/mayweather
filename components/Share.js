import styled, { css } from 'styled-components'

// Styles
const isFacebook = css`
  &:hover {
    color: #3b5998;
  }
`
const isTwitter = css` 
  &:hover {
    color: #1da1f3;
  }
`

// Components
const Wrapper = styled.div`
  display: flex;
  Justify-content: center;
  padding: 1rem;
  text-transform: uppercase;

  & > :not(:first-child) {
    margin-left: .5rem;
  }
`

const Link = styled.a`
  display: inline-block;
  color: rgb(58, 58, 58);
  text-decoration: none;
  vertical-align: middle;

  ${props => props.facebook && isFacebook};
  ${props => props.twitter && isTwitter};
`

const Seperator = styled.span`
  display: inline-block;

  &:before {
    content: '/';
  }
`
const Title = styled.span`
  display: inline-block;
  pointer-events: none;
`

export default ({ meme, url }) =>
  <Wrapper>
    <Title>Share:</Title>
    <Link
      href={`http://facebook.com/sharer/sharer.php?&u=https://thesmacktalkgenerator.com${url}&t=${meme.sentence
        ? meme.sentence
        : 'Talk Smack'}`}
      facebook
    >
      Facebook
    </Link>
    <Seperator />
    <Link
      href={`http://twitter.com/share?text=${meme.sentence
        ? meme.sentence
        : 'Talk Smack'}&url=https://thesmacktalkgenerator.com${url}`}
      twitter
    >
      Twitter
    </Link>
  </Wrapper>
