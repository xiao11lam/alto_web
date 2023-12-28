/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_1042e5f9.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_f0867d4d.mjs';

const $$Astro = createAstro("https://creativetimofficial.github.io");
const $$Landing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Landing;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Landing Page" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main>${renderComponent($$result2, "HeaderLanding", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/xiao/Desktop/alto_web/src/components/landing/header", "client:component-export": "default" })}${renderComponent($$result2, "CategoriesSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/xiao/Desktop/alto_web/src/components/landing/categories", "client:component-export": "default" })}${renderComponent($$result2, "ContentSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/xiao/Desktop/alto_web/src/components/landing/content", "client:component-export": "default" })}${renderComponent($$result2, "BasicSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/xiao/Desktop/alto_web/src/components/landing/starterPack", "client:component-export": "default" })}${renderComponent($$result2, "TestimonialSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/xiao/Desktop/alto_web/src/components/landing/testimonials", "client:component-export": "default" })}${renderComponent($$result2, "FooterSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/xiao/Desktop/alto_web/src/components/landing/footer", "client:component-export": "default" })}</main>` })}`;
}, "/Users/xiao/Desktop/alto_web/src/pages/landing.astro", void 0);

const $$file = "/Users/xiao/Desktop/alto_web/src/pages/landing.astro";
const $$url = "/landing";

export { $$Landing as default, $$file as file, $$url as url };
