import { h, render } from 'preact'
import { Logo } from '../../../src/components/logo'

const root = document.getElementById('preact-logo')
render(h(Logo), root, root)