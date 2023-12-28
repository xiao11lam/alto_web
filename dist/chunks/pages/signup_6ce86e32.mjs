/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_1042e5f9.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_f0867d4d.mjs';

const $$Astro = createAstro("https://creativetimofficial.github.io");
const $$Signup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signup;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign Up" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main>${renderComponent($$result2, "SignUp", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/xiao/Desktop/alto_web/src/components/signup", "client:component-export": "default" })}</main>` })}`;
}, "/Users/xiao/Desktop/alto_web/src/pages/signup.astro", void 0);

const $$file = "/Users/xiao/Desktop/alto_web/src/pages/signup.astro";
const $$url = "/signup";

export { $$Signup as default, $$file as file, $$url as url };
