# Squash: Caido Request Minimizer Plugin

Squash is a Caido plugin that adds a right-click context menu option to minimize an HTTP request. When activated, it launches a background job that:
- Sends the original request
- Iteratively removes query parameters, form fields, and headers (including individual cookies)
- Compares responses to identify invariant behavior
- Retains only fields necessary to preserve the original response
- Sends the minimized request to a new Replay tab for review and testing

## Installation
- Download plugin_package.zip from https://github.com/evanconnelly/squash/releases
- Add to Caido: https://docs.caido.io/guides/plugins

## Usage
<img src="/assets/menu.png" alt="Menu Image" width="400">

Right click an HTTP request in Caido - > Plugins - > Squash -> Minimize Request
the minimized request will open in a new Replay tab for review and testing
