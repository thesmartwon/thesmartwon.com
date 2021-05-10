import { h } from 'preact'
import render from 'preact-render-to-string'
import { HTML } from './html'

export const renderPage = ({
	title,
	cssFileNames = [], 
	children,
}) => '<!DOCTYPE html>' + render(
	<HTML title={title} cssFileNames={cssFileNames}>
    {children}
	</HTML>)
