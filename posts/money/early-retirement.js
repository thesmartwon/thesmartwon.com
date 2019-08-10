import { h, render } from 'preact'
import { RetirementCalc } from '../../src/components/retirement-calc'

const root = document.getElementById('retirementCalc')
render(h(RetirementCalc), root, root)