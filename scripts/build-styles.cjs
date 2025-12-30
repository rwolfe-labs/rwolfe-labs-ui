const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");
const tokens = fs.readFileSync(path.join(root, "src", "styles", "tokens.css"), "utf8");
const globalCss = fs.readFileSync(path.join(root, "src", "styles", "global.css"), "utf8");
const base = fs.readFileSync(path.join(root, "src", "styles", "base.css"), "utf8");
const components = fs.readFileSync(path.join(root, "src", "styles", "components.css"), "utf8");
const output = `${tokens}\n\n${globalCss}\n\n${base}\n\n${components}\n`;

fs.mkdirSync(dist, { recursive: true });
fs.writeFileSync(path.join(dist, "styles.css"), output);
fs.writeFileSync(path.join(root, "styles.css"), output);
