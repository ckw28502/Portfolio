import { c as create_ssr_component, b as add_attribute, e as escape, d as each, v as validate_component } from "../../chunks/ssr.js";
class TabModel {
  //Properties
  name;
  url;
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
  getName() {
    return this.name;
  }
  getUrl() {
    return this.url;
  }
}
const NavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tab } = $$props;
  if ($$props.tab === void 0 && $$bindings.tab && tab !== void 0)
    $$bindings.tab(tab);
  return `<a${add_attribute("href", tab.getUrl(), 0)} class="duration-200 hover:text-violet-400"><p>${escape(tab.getName())}</p></a>`;
});
const tabData = [
  {
    name: "Projects",
    link: "#projects"
  },
  {
    name: "About me",
    link: "#about"
  }
];
function createTabObjectsFromJson() {
  return tabData.map((tab) => new TabModel(tab.name, tab.link));
}
const TabService = { createTabObjectsFromJson };
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isTop } = $$props;
  const tabs = TabService.createTabObjectsFromJson();
  const headerClasses = isTop ? "py-6 bg-transparent border-transparent" : "py-4 bg-slate-950 border-violet-950";
  if ($$props.isTop === void 0 && $$bindings.isTop && isTop !== void 0)
    $$bindings.isTop(isTop);
  return `<header${add_attribute("class", "sticky z-[10] top-10 duration-200 px-6 flex items-center justify-between border-solid bg-opacity-5 " + headerClasses, 0)}><h1 class="font-medium" data-svelte-h="svelte-zuislp"><strong class="font-bold poppins">Calvin</strong> Kwan</h1> <div class="sm:flex items-center gap-4 hidden">${each(tabs, (tab) => {
    return `${validate_component(NavLink, "NavLink").$$render($$result, { tab }, {}, {})}`;
  })} <a href="mailto:ckw28502@gmail.com" target="_blank" class="blue-shadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950" data-svelte-h="svelte-uoph8i"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h2 class="relative z-9">Contact me</h2></a></div></header>`;
});
const ContactData = [
  {
    name: "whatsapp",
    url: "https://wa.me/+639731213"
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/kwan_calvin/"
  },
  {
    name: "github",
    url: "https://github.com/ckw28502"
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/calvin-kwan-1ba0b2255/?_l=in_ID"
  }
];
class ContactModel {
  name;
  url;
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
  getName() {
    return this.name;
  }
  getUrl() {
    return this.url;
  }
}
function convertContactDataToContactModel() {
  return ContactData.map((contact) => new ContactModel(contact.name, contact.url));
}
const ContactService = { convertContactDataToContactModel };
const ContactLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { contact } = $$props;
  if ($$props.contact === void 0 && $$bindings.contact && contact !== void 0)
    $$bindings.contact(contact);
  return `<a${add_attribute("href", contact.getUrl(), 0)}${add_attribute("aria-label", contact.getName(), 0)} target="_blank" class="w-1/4 p-4 flex items-center justify-center"><i class="${"fab text-3xl mr-2 fa-" + escape(contact.getName(), true)}"></i></a>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const contacts = ContactService.convertContactDataToContactModel();
  return `<footer class="py-20 sm:py-32 bg-black border-t border-solid border-violet-500 flex flex-col gap-4 sm:gap-8 justify-center items-center"><p class="px-4 py-2 bg-white text-slate-950 font-medium" data-svelte-h="svelte-gihohd">Contact me! ↓</p> <div class="flex gap-4 items-center justify-center">${each(contacts, (contact) => {
    return `${validate_component(ContactLink, "ContactLink").$$render($$result, { contact }, {}, {})}`;
  })}</div></footer>`;
});
const ScrollUpButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let divClasses;
  let { isTop } = $$props;
  if ($$props.isTop === void 0 && $$bindings.isTop && isTop !== void 0)
    $$bindings.isTop(isTop);
  divClasses = isTop ? "opacity-full pointer-events-auto" : "pointer-events-none opacity-0";
  return `<div${add_attribute("class", "fixed bottom-0 w-full duration-200 flex p-10 z-[10] " + divClasses, 0)}><button class="ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer" aria-label="Scroll to top" data-svelte-h="svelte-1pmfvc3"><i class="fa-solid fa-arrow-up grid place-items-center aspect-square"></i></button></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isTop;
  let y;
  isTop = y <= 0;
  return `<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">${validate_component(ScrollUpButton, "ScrollUpButton").$$render($$result, { isTop }, {}, {})} ${validate_component(Header, "Header").$$render($$result, { isTop }, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> `;
});
export {
  Layout as default
};
