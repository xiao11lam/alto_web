/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_1042e5f9.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_f0867d4d.mjs';

const $$Astro = createAstro("https://creativetimofficial.github.io");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Us Page" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main>${renderComponent($$result2, "HeaderAbout", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/xiao/Desktop/alto_web/src/components/about/header", "client:component-export": "default" })}${renderComponent($$result2, "FeaturesAbout", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/xiao/Desktop/alto_web/src/components/about/features", "client:component-export": "default" })}${renderComponent($$result2, "TestimonialAbout", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/xiao/Desktop/alto_web/src/components/about/testimonials", "client:component-export": "default" })}${renderComponent($$result2, "TeamAbout", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/xiao/Desktop/alto_web/src/components/about/team", "client:component-export": "default" })}${renderComponent($$result2, "FooterAbout", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/xiao/Desktop/alto_web/src/components/about/footer", "client:component-export": "default" })}</main>` })}`;
}, "/Users/xiao/Desktop/alto_web/src/pages/about.astro", void 0);

const $$file = "/Users/xiao/Desktop/alto_web/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
