import * as React from 'react'
import styled from 'styled-components'

const Main = styled.div`
  background-color: #eee;
  border: 1px solid black;
  padding: 50px;
  text-align: center;
`

interface Props {
  className: string;
}

interface State {
  value: number;
}

class App extends React.Component<Props, State> {
  public state: State = {
    value: 10,
  }
  public static async getInitialProps() {
    return {}
  }
  public render() {
    const { value } = this.state
    return (
      <Main>
        Hello World:
        {' '}
        {value}
      </Main>
    )
  }
}

export default App
