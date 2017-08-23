import styled, { css } from 'styled-components'

const Page = styled.div.attrs({
  children: props => props.children
})`${css``}`

export default props =>
  <Page>
    {props.children}
  </Page>
