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
  padding: 1rem;
  text-transform: uppercase;

  & > :not(:first-child) {
    margin-left: .25rem;
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
    vertical-align: middle;
  }
`
const Title = styled.span`
  display: block;
  font-size: .85rem;
  pointer-events: none;
  margin-bottom: .25rem;
`

export default ({ meme, url }) =>
  <Wrapper>
    <Title>Brought to you by:</Title>
    <Link href={`https://instagram.com/hennersmate`}>@hennersmate</Link>
    <Seperator />
    <Link href={`https://instagram.com/slick_owens`}>@slick_owens</Link>
    <Seperator />
    <Link href={`https://instagram.com/sthxwest`}>@west</Link>
  </Wrapper>
