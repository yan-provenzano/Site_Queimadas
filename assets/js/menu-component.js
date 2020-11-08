const data = [{
        name: 'Home',
        id: 'index.html'
    },
    {
        name: 'Áreas Protegidas',
        id: 'areas-protegidas.html'
    },
    {
        name: 'Generic',
        id: 'generic.html'
    },
    {
        name: 'Elements',
        id: 'elements.html'
    }
]

const listComponent = (data) => {
    return data.map((item) => {
        return (
            `
<li><a target="_parent" href=${ item.id }>${ item.name } </a></li>
`
        )
    }).join('')
}

const el = document.querySelector('[menu-component]')

el.innerHTML = listComponent(data)