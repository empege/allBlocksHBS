(() => { var e = { 23: () => { const e = { header: ".js-accordion-header", content: ".js-accordion-content", paragraph: ".js-accordion-paragraph", icon: ".js-acordion-icon" }, t = document.querySelectorAll(e.header); document.querySelectorAll(e.content), t.forEach((e => e.addEventListener("click", (e => a(e))))); const a = t => { const a = t.currentTarget.parentElement, i = t.currentTarget, r = a.querySelector(e.content), s = r.querySelector(e.paragraph).offsetHeight, n = a.querySelectorAll(e.icon);[...i.classList].includes("accordion__header--active") ? (i.classList.remove("accordion__header--active"), r.style.maxHeight = 0, n[0].classList.remove("display-none"), n[1].classList.add("display-none")) : (i.classList.add("accordion__header--active"), r.style.maxHeight = `${s + 40}px`, n[0].classList.add("display-none"), n[1].classList.remove("display-none")) } }, 355: () => { const e = (e, t, a = "accordion--theme--primary") => { const i = Handlebars.templates.accordion; t.theme = a; const r = i(t); document.querySelector(e).innerHTML += r }, t = (e, t) => { const a = (0, Handlebars.templates.slidermh)(t); document.querySelector(e).innerHTML += a }; ((e, t, a = "modal--theme--default", i = "modal--active--default") => { const r = Handlebars.templates.modal; t.theme = a, t.enterMode = i; const s = r(t); document.querySelector(e).innerHTML += s })("#faq-page", { title: "Warning", text: "Some text here... Some text here... Some text here... Some text here... Some text here... Some text here...", themes: { default: "modal--theme--default", warning: "modal--theme--warning", dark: "modal--theme--dark" } }, "modal--theme--dark", "modal--active--fadein"), e(".faq-page-wrapper", { accordionData: [{ id: "0", title: "What's this all about?", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus eveniet pariatur voluptates tempora, officiis a facilis, corrupti numquam at cum temporibus beatae earum natus amet vero ratione excepturi nam?" }, { id: "1", title: "Question 1?", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus eveniet pariatur voluptates tempora, officiis a facilis, corrupti numquam at cum temporibus beatae earum natus amet vero ratione excepturi nam?" }, { id: "2", title: "Question 2?", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus eveniet pariatur voluptates tempora, officiis a facilis, corrupti numquam at cum temporibus beatae earum natus amet vero ratione excepturi nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus eveniet pariatur voluptates tempora, officiis a facilis, corrupti numquam at cum temporibus beatae earum natus amet vero ratione excepturi nam?" }, { id: "3", title: "Question 3?", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }] }, "accordion--theme--primary"), (e => { const t = (0, Handlebars.templates.sidebar)(); document.querySelector("#faq-page").innerHTML += t })(), e(".sidebar", { accordionData: [{ id: "0", title: "What's this all about?", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus eveniet pariatur voluptates tempora, officiis a facilis, corrupti numquam at cum temporibus beatae earum natus amet vero ratione excepturi nam?" }, { id: "1", title: "Question 1?", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus eveniet pariatur voluptates tempora, officiis a facilis, corrupti numquam at cum temporibus beatae earum natus amet vero ratione excepturi nam?" }, { id: "2", title: "Question 2?", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia possimus eveniet pariatur voluptates tempora, officiis a " }] }, "accordion--theme--secondary"), t(".slider-test-container", { data: [{ title: "Filter technology in detail", text: "Our filters separate the useful from the harmful. But what is the definition of harmful? And who decides that? In order to find the right solutions, we selectively use all of our system expertise. And we are happy to offer you some insights into how filter technology works in detail in different applications.", url: "https://www.mann-hummel.com/en/research-and-development/filter-technology-in-detail/", img: "https://www.mann-hummel.com/fileadmin/_processed_/4/1/csm_filtertechnik_buehnenbilder_fdf3a1ecf3.jpg" }, { title: "Credentials", text: "For individual large-scale orders or series production, MANN+HUMMEL guarantees the highest quality for the best price. In this way we are able to convince customers in many different sectors that we are the right partner for them. Our references speak for themselves.", url: "https://www.mann-hummel.com/en/the-company/credentials/", img: "https://www.mann-hummel.com/fileadmin/_processed_/6/8/csm_Referenzen_buehnenbild_01_847bdb81ca.jpg" }, { title: "Innovations and creativity", text: "Particulate filter in a motorcycle helmet? Fine dust eater? Bionic filter? – MANN+HUMMEL is using its creativity and ability to take a broader view to develop solutions to meet the challenges of the future. Here we like to take inspiration from nature.", url: "https://www.mann-hummel.com/en/research-and-development/innovations-and-creativity/", img: "https://www.mann-hummel.com/fileadmin/_processed_/0/8/csm_innovation_kreativitaet_buehnenbild_05de1dafc3.jpg" }, { title: "Future trends", text: "The Internet of Things Lab in Singapore, pilot projects against microplastics in water and field tests for electro-mobility are just some of the areas where we are conducting research to help shape the innovations of the future. As filtration experts the demand for our expertise has been greater than ever.", url: "https://www.mann-hummel.com/en/research-and-development/future-trends/", img: "https://www.mann-hummel.com/fileadmin/_processed_/4/8/csm_shaker_teaser_34d75fd1df.jpg" }] }), t("#faq-page", { data: [{ title: "FAward-winning air quality", text: "On the podium: Filter Cubes from MANN+HUMMEL win silver at International Paul Pietsch Award of AUTO MOTOR UND SPORT", url: "https://mann-hummel.com/en/the-company/current-topics/press-releases/2021/award-winning-air-quality/", img: "https://www.mann-hummel.com/fileadmin/_processed_/f/7/csm_MANN_HUMMEL-Filter-Cube-am-Stuttgarter-Neckartor_11931b1af1.jpg" }, { title: "MANN+HUMMEL donates antiviral air purifiers to the Stuttgart Children's and Youth Hospice", text: "", url: "https://www.mann-hummel.com/en/the-company/current-topics/press-releases/2021/mannhummel-donates-antiviral-air-purifiers-to-the-stuttgart-childrens-and-youth-hospice/", img: "https://www.mann-hummel.com/fileadmin/_processed_/3/c/csm_Spenden%C3%BCbergabe_von_antiviralen_Luftreinigern_der_MANN_HUMMEL_Group_an_das_Kinder-_und_Jugendhospiz_Stuttgart_9f94dc2345.jpg" }] }) }, 784: () => { const e = { modal: ".js-modal", exitBtn: ".js-modal-exit-btn", modalBackground: ".js-modal-background" }, t = document.querySelector(e.exitBtn), a = document.querySelector(e.modalBackground); t.addEventListener("click", (e => i(e))), a.addEventListener("click", (e => i(e))); const i = e => { const t = e.target.closest(".modal"), a = new RegExp("\\bmodal--active--\\w*\\b", "gi"); t.className = t.className.replace(a, "") } }, 849: () => { const e = { sidebar: ".js-sidebar", show: ".js-sidebar-show", hide: ".js-sidebar-hide" }, t = document.querySelector(e.sidebar), a = document.querySelector(e.hide), i = document.querySelector(e.show); a.addEventListener("click", (() => r())), i.addEventListener("click", (() => s())); const r = () => { t.classList.remove("sidebar--active"), i.classList.remove("display-none") }, s = () => { t.classList.add("sidebar--active"), i.classList.add("display-none") } }, 159: () => { const e = "js-slider", t = "js-slide", a = "js-slider-inner", i = "js-slide-arrow", r = "js-arrow-left", s = "js-arrow-right", n = "js-current-slide", o = "slider__slide--current"; document.querySelectorAll(`.${e}`).forEach(((e, c) => { const l = e, d = l.querySelector(`.${a}`), m = l.querySelectorAll(`.${t}`), u = l.querySelector(`.${t}`), p = l.querySelector(`.${r}`), h = l.querySelector(`.${s}`); window.PointerEvent ? (l.addEventListener("pointerdown", (e => j(e))), l.addEventListener("pointermove", (e => M(e))), l.addEventListener("pointerleave", (() => N())), l.addEventListener("pointerup", (() => N()))) : (l.addEventListener("mousedown", (e => j(e))), l.addEventListener("mousemove", (e => M(e))), l.addEventListener("mouseleave", (() => N())), l.addEventListener("mouseup", (() => N())), l.addEventListener("touchdown", (e => j(e))), l.addEventListener("touchmove", (e => M(e))), l.addEventListener("touchleave", (() => N())), l.addEventListener("touchup", (() => N()))), p.addEventListener("click", (() => $())), h.addEventListener("click", (() => A())), d.addEventListener("transitionend", (e => H(e))), d.addEventListener("transitionend", (e => k(e))), m.forEach((e => e.addEventListener("click", (e => Q(e))))); let f, v = u.offsetWidth; const g = m.length / 3, w = g + g - 1; let y = g, L = !1, b = !1, _ = 0, x = 0; window.addEventListener("resize", (() => { v = u.offsetWidth, E(), S() })); const E = () => { f = window.innerWidth <= 767 ? 8 : 2 }; E(); const S = () => { d.style.transform = `translateX(${-v * y + v / f}px)`, m[y].classList.add(n, o) }; S(); const q = () => { d.style.transition = ".4s all", d.style.transform = `translateX(${-v * y + v / f}px)`, m.forEach((e => e.classList.remove(n, o))) }, j = e => { e.target.className.includes(i) || 0 !== e.button || (b = !0, _ = e.pageX) }, M = e => { b && (x = e.pageX - _, d.style.transition = "none", d.style.transform = `translateX(${-v * y + v / f + x}px)`) }, N = () => { b = !1, x >= v / 2 && $(), x <= -v / 2 && A(), x > -v / 2 && x < v / 2 && 0 !== x && q(), 0 !== x || l.querySelector(`.${n}`) || (console.log(document.querySelector(`.${n}`)), m[y].classList.add(n, o)), x = 0 }, k = e => { "transform" === e.propertyName && e.srcElement.className.includes(a) && (y < g ? (d.style.transition = "none", y = w, d.style.transform = `translateX(${-v * y + v / f}px)`) : y > w && (d.style.transition = "none", y = g, d.style.transform = `translateX(${-v * y + v / f}px)`), L = !1) }, H = e => { "transform" === e.propertyName && e.srcElement.className.includes(a) && (y < g ? m[w].classList.add(n, o) : y > w ? m[g].classList.add(n, o) : m[y].classList.add(n, o)) }, A = () => { L || (L = !0, y++, q()) }, $ = () => { L || (L = !0, y--, q()) }, Q = e => { const t = e.currentTarget, a = e.target; if (t.className.includes(n)) return !0; e.preventDefault(), "IMG" === a.tagName && (t.previousElementSibling.className.includes(n) ? A() : t.nextElementSibling.className.includes(n) ? $() : q()) } })) } }, t = {}; function a(i) { if (t[i]) return t[i].exports; var r = t[i] = { exports: {} }; return e[i](r, r.exports, a), r.exports } a.n = e => { var t = e && e.__esModule ? () => e.default : () => e; return a.d(t, { a: t }), t }, a.d = (e, t) => { for (var i in t) a.o(t, i) && !a.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] }) }, a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => { "use strict"; a(355), a(23), a(849), a(784), a(159) })() })();