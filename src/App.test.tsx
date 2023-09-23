import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import rerender, { act } from 'react-test-renderer' // ES6
import App from './App'
import { OpenButton } from './components/StartButtonComponent'
import 'jest-styled-components'
import Container from './components/Container'

describe('App.tsx', () => {
  it('should render a container component with "opacity: 0%" if width={0}', () => {
    const wrapper = rerender
      .create(<Container height={30} width={0} />)
      .toJSON()
    expect(wrapper).toHaveStyleRule('opacity', '0%')
  })
  it('should render a container component with "opacity: 100%" if width={40}', () => {
    const wrapper = rerender
      .create(<Container height={30} width={40} />)
      .toJSON()
    expect(wrapper).toHaveStyleRule('opacity', '100%')
  })
  it('should render a start button component with "display: block" if isdisplayed={1}', () => {
    const wrapper = rerender.create(<OpenButton isdisplayed={1} />).toJSON()
    expect(wrapper).toHaveStyleRule('display', 'block')
  })
  it('should render a start button component with "display: none" if isdisplayed={0}', () => {
    const wrapper = rerender.create(<OpenButton isdisplayed={0} />).toJSON()
    expect(wrapper).toHaveStyleRule('display', 'none')
  })

  it('should update the input value on change', async () => {
    render(<App />)
    const inputElement = screen.getByTestId('input')

    const resultsContainer = screen.queryByTestId('li')
    expect(resultsContainer).toBeNull()

    fireEvent.change(inputElement, { target: { value: 'London' } }) // userEvent.type(input, 'London')

    await waitFor(() => {
      const suggestions = screen.getAllByTestId('li')
      expect(suggestions[0]).toHaveTextContent('London, GB')
    })
  })

  it('should update the input value after click on the suggestion button from "london" to "London"', async () => {
    render(<App />)
    const inputElement = screen.getByTestId('input')

    const resultsContainer = screen.queryByTestId('li')
    expect(resultsContainer).toBeNull()

    fireEvent.change(inputElement, { target: { value: 'london' } })

    await waitFor(() => {
      const suggestions = screen.getAllByTestId('li')
      checkTheCaseOfTheFirstLetter(suggestions)
    })

    function checkTheCaseOfTheFirstLetter(suggestions: HTMLElement[]) {
      fireEvent.click(suggestions[0])
      expect(inputElement).not.toHaveValue('london')
      expect(inputElement).toHaveValue('London')
    }
  })
})
