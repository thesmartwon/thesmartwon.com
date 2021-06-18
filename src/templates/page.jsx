import { h } from 'preact'
import render from 'preact-render-to-string'
import { HTML } from './html'

export const renderPage = ({
	title,
	cssFileName, 
	children,
}) => '<!DOCTYPE html>' + render(
	<HTML title={title} cssFileName={cssFileName}>
    {children}
	</HTML>)
