<div align="center">
  <img width="1000" alt="image" src="https://user-images.githubusercontent.com/6225588/211916659-567751d1-0225-402b-9141-4145c18b0834.png">

  <br />
  <br />
  <a href="https://caido.io/">Website</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://dashboard.caido.io/">Dashboard</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://docs.caido.io/" target="_blank">Docs</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://links.caido.io/roadmap">Roadmap</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://github.com/caido/caido/tree/main/brand">Branding</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://links.caido.io/www-discord" target="_blank">Discord</a>
  <br />
  <hr />
</div>

## 👋 Frontend SDK

[![NPM Version](https://img.shields.io/npm/v/@caido/sdk-frontend?style=for-the-badge)](https://www.npmjs.com/package/@caido/sdk-frontend)

This is repository for the Caido frontend SDK.

The design pattern is heavily influenced by the VSCode SDK and works mainly with the `Command` concept.

```typescript
import { Caido } from "@caido/sdk-frontend";

Caido.commands.register("my-command", {
  name: "My Command",
  run: (context) => {
    // Do something
  },
});

Caido.commandPalette.register("my-command");
```

## 💚 Community

Come join our [Discord](https://links.caido.io/www-discord) community and connect with other Caido users! We'd love to have you as part of the conversation and help with any questions you may have.
