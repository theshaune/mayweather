import styled, { css } from 'styled-components'
import { withState, lifecycle, withProps, compose } from 'recompose'
import ConorHappy from './ConorHappy'
import ConorStare from './ConorStare'
import FloydHappy from './FloydHappy'
import FloydHat from './FloydHat'

const enhance = compose(
  withState('isMounted', 'setMounted', false),
  withProps(props => ({
    fighter: props.name ? FloydHappy : null
  })),
  lifecycle({
    componentWillMount() {},
    componentDidMount() {
      // 😖 This delay allows our animation to trigger on mount
      setTimeout(() => this.props.setMounted(true), 50)
      this.forceUpdate()
    }
  })
)

const Fighter = ({ image }) => {
  if (image === 'floydHappy') {
    return <FloydHappy />
  } else if (image === 'floydHat') {
    return <FloydHat />
  } else if (image === 'conorHappy') {
    return <ConorHappy />
  } else if (image === 'conorStare') {
    return <ConorStare />
  }
  return null
}

export default enhance(Fighter)
