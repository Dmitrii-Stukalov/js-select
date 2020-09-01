import {Select} from './select/select'
import './select/styles.scss'

const select = new Select('#select', {
    placeholder: 'Choose element',
    // selectedId: '1',
    data: [
        {id: '1', value: 'React'},
        {id: '2', value: 'Angular'},
        {id: '3', value: 'Vue'}
    ],
    onSelect(item) {
        console.log('Selected Item', item)
    }
})

window.s = select