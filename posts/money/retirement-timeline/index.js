import { h, render } from 'preact'
import { RetirementTimeline } from '../../../src/components/retirement-timeline'

const root = document.getElementById('retirementTimeline')
render(h(RetirementTimeline), root, root)