import React from 'react'
import {render, cleanup, queryByTestId, fireEvent, waitForDomChange, getByText} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import App from './App'

afterEach(cleanup)

describe('List component', () => {
    test('hides list item when input is empty', async () => {
        const {container, getByPlaceholderText, debug} = render(<App/>)
        const searchInput = getByPlaceholderText('Type color')

        expect(searchInput.value).toBeFalsy()
        expect(queryByTestId(container, 'list')).toBeFalsy()
    })

    test('shows list item when input is not empty', async () => {
        const {container, getByPlaceholderText, debug} = render(<App/>)
        const searchInput = getByPlaceholderText('Type color')

        fireEvent.change(searchInput, {target: {value: 'Aqu'}})
        expect(queryByTestId(container, 'list')).toBeTruthy()
    })

    test('makes inputed substring bold in list items', () => {
        const {container, getByPlaceholderText, debug} = render(<App/>)
        const searchInput = getByPlaceholderText('Type color')

        const substring = 'Aqu'

        fireEvent.change(searchInput, {target: {value: substring}})

        const boldSubstring = container.querySelector('b')
        
        expect(boldSubstring.innerHTML).toBe(substring)
        expect(queryByTestId(container, 'list')).toBeTruthy()
    })

    test('clicking on list item should set input value', () => {
        const {getByPlaceholderText, getByTestId, debug} = render(<App/>)
        const searchInput = getByPlaceholderText('Type color')
        const substring = 'Aqu'

        fireEvent.change(searchInput, {target: {value: substring}})
        const list = getByTestId('list')
        const listItems = list.querySelectorAll('.wrapper')
        const item = listItems[0]
    
        fireEvent.click(item)

        expect(searchInput.value).toBe(item.textContent)

        debug()
    })
})