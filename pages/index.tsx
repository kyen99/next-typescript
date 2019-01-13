import * as React from 'react'
import styled from 'styled-components'

const Main = styled.div`
  background-color: #eee;
  border: 1px solid black;
  padding: 50px;
  text-align: center;
`

interface Props {
  message: string;
}
interface State {
  value: number;
}

// Stateless component
const ValueDisplay = ({ value }: { value: number }): React.ReactElement<any> => (
  <h2>{value}</h2>
)

// Class-based component with state
class App extends React.Component<Props, State> {
  public state: State = {
    value: 0,
  }
  public static async getInitialProps() {
    // Get initial data (i.e. hit an API)
    return {
      message: 'Hello World'
    }
  }
  public handleIncrement = (e: any) => {
    console.log(e.target.value)
    const { value } = this.state
    this.setState({
      value: value + 1
    })
  }
  public render() {
    const { value } = this.state
    const { message } = this.props
    return (
      <Main>
        <h1>{message}</h1>
        <p><input type='button' onClick={this.handleIncrement} value='Increment' /></p>
        <ValueDisplay value={value} />
      </Main>
    )
  }
}

export default App
