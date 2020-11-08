const data2 = [{
        name: 'Link 1.',
        id: '#'
    },
    {
        name: 'Link 2.',
        id: '#'
    },
    {
        name: 'Link 3.',
        id: '#'
    }
]

const listComponent2 = (data2) => {
    return data2.map((item) => {
        return (

            `
<li><a target="_parent" href=${ item.id }><i class=${ item.class }>&nbsp;</i>${ item.name }</a></li>
`
        )
    }).join('')
}

const el2 = document.querySelector('[links-uteis-component]')

el2.innerHTML = listComponent2(data2)