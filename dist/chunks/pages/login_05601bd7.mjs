/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_1042e5f9.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_f0867d4d.mjs';

const $$Astro = createAstro("https://creativetimofficial.github.io");
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign In" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main>${renderComponent($$result2, "SignIn", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/xiao/Desktop/alto_web/src/components/signin", "client:component-export": "default" })}</main>` })}`;
}, "/Users/xiao/Desktop/alto_web/src/pages/login.astro", void 0);

const $$file = "/Users/xiao/Desktop/alto_web/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };
