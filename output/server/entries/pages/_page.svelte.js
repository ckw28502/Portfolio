import { c as create_ssr_component, v as validate_component, e as escape, d as each } from "../../chunks/ssr.js";
const Profile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative shadow-2xl w-96 grid gap-6 place-items-center" data-svelte-h="svelte-1qqmwnh"><img src="/assets/picture.png" alt="" class="object-cover z-[2] max-h-[70vh] rounded-lg"></div>`;
});
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="intro" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10" data-svelte-h="svelte-1hmoaq8"><h2 class="font-semibold text-4xl sm:text:5xl md:text-6xl"><span class="poppins text-violet-400">Calvin</span> Kwan
			<br>
			Full Stack <span class="poppins text-violet-400">Developer</span></h2> <p class="text-base sm:text-lg md:text-xl">I am more <span class="text-violet-400">focused</span> on backend development using
			Python(Flask) and Java(Spring Boot). I also have some
			<span class="text-violet-400">experiences</span> in PHP (Laravel).</p> <a href="mailto:ckw28502@gmail.com" target="_blank" class="blue-shadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"><div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <h3 class="relative z-9">Contact me →</h3></a></div> ${validate_component(Profile, "Profile").$$render($$result, {}, {}, {})}</section>`;
});
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="projects" class="py-20 lg:py-32 flex flex-col gap-24" data-svelte-h="svelte-qfqm60"><div class="flex flex-col gap-2 text-center"><h3 class="text-lg sm:text-xl md:text-2xl">My proud <span class="poppins text-violet-400">innovations</span></h3></div></section>`;
});
class AboutModel {
  id;
  title;
  description;
  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
  getId() {
    return this.id;
  }
  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
}
const AboutData = [
  {
    title: "DOUBLE DEGREE STUDENT",
    description: "I am a student from iSTTS (institut Sains dan Teknologi Terpadu Surabaya) in Indonesia who partake a double degree program to continue my pursuit of knowledge in Fontys, Netherlands."
  },
  {
    title: "EAGER TO LEARN",
    description: "I am fascinated in the world of software development. Whenever I found something interesting, I always try to find out about it. This trait of mine is often triggered during every software development project I was in."
  },
  {
    title: "DESKTOP, WEB, AND MOBILE DEVELOPER",
    description: "Even though I mostly participate on web application project (full stack), I also learned how to make a desktop application and mobile application"
  }
];
function convertAboutDataToAboutModel() {
  return AboutData.map((about, index) => new AboutModel(index + 1, about.title, about.description));
}
const AboutService = { convertAboutDataToAboutModel };
const AboutList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { about } = $$props;
  if ($$props.about === void 0 && $$bindings.about && about !== void 0)
    $$bindings.about(about);
  return `<div class="flex gap-6 sm:gap-8"><p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold self-center">0${escape(about.getId())}</p> <div class="flex flex-col gap-6 sm:gap-8"><h3 class="text-2xl sm:text-3xl md:text-5xl">${escape(about.getTitle())}</h3> <p>${escape(about.getDescription())}</p></div></div>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const abouts = AboutService.convertAboutDataToAboutModel();
  return `<section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"><div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4" data-svelte-h="svelte-1klj819"><h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl py"><span class="poppins text-violet-400">ABOUT</span> ME</h3></div> <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">${each(abouts, (about) => {
    return `${validate_component(AboutList, "AboutList").$$render($$result, { about }, {}, {})}`;
  })}</div></section>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="flex flex-col flex-1 p-4">${validate_component(Intro, "Intro").$$render($$result, {}, {}, {})} ${validate_component(Project, "Project").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})}</main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
