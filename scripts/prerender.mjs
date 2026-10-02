import { createServer } from "vite";
import { readFile, writeFile } from "node:fs/promises";
import React from "react";
import { renderToString } from "react-dom/server";
const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
try {
  const { default: App } = await server.ssrLoadModule("/src/App.jsx");
  const template = await readFile("docs/index.html", "utf8");
  await writeFile(
    "docs/index.html",
    template.replace(
      "<!--app-html-->",
      renderToString(React.createElement(App)),
    ),
  );
  await writeFile("docs/.nojekyll", "");
  console.log(
    "Prerendered Korean portfolio: full content available before JavaScript.",
  );
} finally {
  await server.close();
}
