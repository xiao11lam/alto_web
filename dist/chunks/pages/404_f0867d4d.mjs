/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderSlot, d as renderHead, e as addAttribute, f as renderComponent, m as maybeRenderHead } from '../astro_1042e5f9.mjs';
import 'html-escaper';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://creativetimofficial.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, metaDescription } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-sckkx6r4><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>Alto Health</title><meta name="description"', '><meta name="generator"', ">", '</head><body class="overflow-x-hidden" data-astro-cid-sckkx6r4><!-- Google Tag Manager (noscript) --><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKDMSK6" height="0" width="0" style="display:none;visibility:hidden" data-astro-cid-sckkx6r4>\n      </iframe></noscript><!-- End Google Tag Manager (noscript) -->', '<script src="https://kit.fontawesome.com/349ee9c857.js" crossOrigin="anonymous"><\/script></body></html>'])), addAttribute(metaDescription, "content"), addAttribute(Astro2.generator, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/xiao/Desktop/alto_web/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://creativetimofficial.github.io");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Error Page" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main>${renderComponent($$result2, "Content404", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/xiao/Desktop/alto_web/src/components/404/content", "client:component-export": "default" })}</main>` })}`;
}, "/Users/xiao/Desktop/alto_web/src/pages/404.astro", void 0);

const $$file = "/Users/xiao/Desktop/alto_web/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _ };
