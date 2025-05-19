# Squash: Caido Request Minimizer Plugin

Squash is a Caido plugin that adds a right-click context menu option to minimize an HTTP request. When activated, it launches a background job that:
	1.	Sends the original request
	2.	Compares responses to identify invariant behavior
	3.	Iteratively removes query parameters, form fields, and headers (including individual cookies)
	4.	Retains only fields necessary to preserve the original response
	5.	Sends the minimized request to a new Replay tab for review and testing

## Installation
Download plugin_package.zip from https://github.com/evanconnelly/squash/releases
Add to Caido: https://docs.caido.io/guides/plugins

## Usage
<img src="/assets/menu.png" alt="Menu Image" width="400">

Right click a HTTP request in Caido - > Plugins - > Squash -> Minimize Request
the minimized request will open in a new Replay tab for review and testing
