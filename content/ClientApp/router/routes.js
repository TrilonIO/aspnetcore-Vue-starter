import CounterExample from 'components/counter-example'
import FetchData from 'components/fetch-data'
import HomePage from 'components/home-page'

export const routes = [
    { name: 'home', path: '/', component: HomePage, display: 'Home', style: 'glyphicon glyphicon-home' },
    { name: 'counter', path: '/counter', component: CounterExample, display: 'Counter', style: 'glyphicon glyphicon-education' },
    { name: 'fetch-data', path: '/fetch-data', component: FetchData, display: 'Fetch data', style: 'glyphicon glyphicon-th-list' }
]