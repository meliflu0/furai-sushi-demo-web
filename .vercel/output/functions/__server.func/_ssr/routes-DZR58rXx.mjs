import { r as __toESM } from "../_runtime.mjs";
import { a as whatsappUrl, i as photos, n as gallery, r as navigation, t as furai } from "./furai-CAYHJePC.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as MapPin, c as ArrowUp, d as ArrowLeft, f as ArrowDown, i as Menu, l as ArrowUpRight, n as Wifi, o as Dog, r as MessageCircle, s as Car, t as X, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, i as DialogDescription, l as Slot, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DZR58rXx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			editorial: "furai-button furai-button-primary",
			editorialOutline: "furai-button furai-button-outline",
			editorialLink: "furai-button furai-button-link",
			editorialIcon: "furai-icon-button",
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 25);
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		const onResize = () => {
			if (window.innerWidth > 900) setOpen(false);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("keydown", onKey);
		window.addEventListener("resize", onResize);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("keydown", onKey);
			window.removeEventListener("resize", onResize);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `site-nav ${scrolled ? "scrolled" : ""} ${open ? "menu-open" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "nav-inner wrap",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#inicio",
				className: "brand",
				"aria-label": "Furai Omakase, inicio",
				onClick: () => setOpen(false),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: furai.logo,
					alt: "Logo oficial Furai",
					width: 58,
					height: 58
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "brand-name",
					children: ["FURAI", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "OMAKASE" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "nav-right",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "desktop-nav",
						"aria-label": "Navegación principal",
						children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: item.href,
							children: item.label
						}, item.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "editorialOutline",
						className: "nav-reserve",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappUrl(furai.reservationMessage),
							target: "_blank",
							rel: "noopener noreferrer",
							children: ["Reservar mesa ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "editorialIcon",
						className: "mobile-toggle",
						onClick: () => setOpen((prev) => !prev),
						"aria-expanded": open,
						"aria-controls": "mobile-navigation",
						"aria-label": open ? "Cerrar menú" : "Abrir menú",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
					})
				]
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			id: "mobile-navigation",
			className: "mobile-nav",
			"aria-label": "Navegación móvil",
			children: [...navigation, {
				href: "#reservas",
				label: "Reservas"
			}].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: item.href,
				onClick: () => setOpen(false),
				children: item.label
			}, item.href))
		})]
	});
}
function Gallery() {
	const [selected, setSelected] = (0, import_react.useState)(null);
	const photo = selected === null ? void 0 : gallery[selected];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "galeria",
		className: "section gallery-section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gallery-header reveal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Galería gastronómica"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "section-title",
						children: [
							"Texturas, gestos",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"y ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "atmósfera." })
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "gallery-note",
						children: [
							"Una mirada al universo omakase.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Imágenes ilustrativas; no son fotografías oficiales del local ni de su menú."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "gallery-grid reveal",
					children: gallery.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "editorialIcon",
						className: "gallery-item !w-full !h-full",
						onClick: () => setSelected(index),
						"aria-label": `Ampliar imagen: ${item.label}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.src,
							alt: item.alt,
							width: item.width,
							height: item.height,
							loading: "lazy"
						})
					}, item.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
					open: selected !== null,
					onOpenChange: (open) => {
						if (!open) setSelected(null);
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "lightbox-overlay" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
						className: "lightbox",
						onKeyDown: (event) => {
							if (selected === null) return;
							if (event.key === "ArrowRight") setSelected((selected + 1) % gallery.length);
							if (event.key === "ArrowLeft") setSelected((selected + gallery.length - 1) % gallery.length);
						},
						children: [photo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: photo.src,
							alt: photo.alt,
							width: photo.width,
							height: photo.height
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lightbox-controls",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: photo?.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Fotografía ilustrativa del universo omakase." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "editorialIcon",
										"aria-label": "Imagen anterior",
										onClick: () => {
											if (selected !== null) setSelected((selected + gallery.length - 1) % gallery.length);
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: "editorialIcon",
										"aria-label": "Imagen siguiente",
										onClick: () => {
											if (selected !== null) setSelected((selected + 1) % gallery.length);
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											variant: "editorialIcon",
											"aria-label": "Cerrar imagen ampliada",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
										})
									})
								]
							})]
						})]
					})] })
				})
			]
		})
	});
}
function ReserveLink({ text = "Reservar por WhatsApp", message = furai.reservationMessage, outline = false, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		variant: outline ? "editorialOutline" : "editorial",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: href || whatsappUrl(message),
			target: "_blank",
			rel: "noopener noreferrer",
			children: [text, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
		})
	});
}
function MenuLink({ text = "Explorar menú completo", subtle = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		asChild: true,
		variant: subtle ? "editorialLink" : "editorial",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: furai.menu,
			target: "_blank",
			rel: "noopener noreferrer",
			children: [text, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
		})
	});
}
function Index() {
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: .08 });
		document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
		document.documentElement.classList.add("motion-ready");
		return () => {
			observer.disconnect();
			document.documentElement.classList.remove("motion-ready");
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			className: "skip-link",
			href: "#contenido",
			children: "Saltar al contenido"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "contenido",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "hero",
					id: "inicio",
					"aria-label": "Furai Omakase, Villavicencio",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							className: "hero-photo",
							src: photos.hero,
							alt: "Fotografía ilustrativa de nigiris sobre cerámica oscura",
							width: 1920,
							height: 1024,
							fetchPriority: "high"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hero-inner wrap",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-content",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: "Furai Omakase · Villavicencio"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "hero-title",
										"aria-label": "Omakase y sushi premium en Villavicencio, Meta.",
										children: [
											"El arte del",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "omakase." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "sr-only",
												children: " Omakase y sushi premium en Villavicencio, Meta."
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "hero-subtitle",
										children: furai.text.hero
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "hero-actions",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												asChild: true,
												variant: "editorial",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: furai.menu,
													target: "_blank",
													rel: "noopener noreferrer",
													children: ["Ver menú ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReserveLink, {
												text: "RESERVAR OMAKASE",
												outline: true,
												href: "https://reservation.carbonaraapp.com/Colombia/Villavicencio/Furai-Omakase/"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												asChild: true,
												variant: "editorialLink",
												className: "hero-discover",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
													href: "#experiencia",
													children: ["Descubrir la experiencia ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {})]
												})
											})
										]
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero-bottom",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: furai.claim }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#filosofia",
								children: ["Una experiencia por descubrir ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {})]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section philosophy light-section",
					id: "filosofia",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap philosophy-grid",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "La filosofía"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "section-title philosophy-title",
									children: [
										"La filosofía",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"de ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Furai." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "prose",
									children: furai.text.philosophy
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "editorialLink",
									className: "mt-7",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#menu",
										children: ["Descubre nuestra propuesta ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
									})
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "reveal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: photos.filosofia,
								alt: "Referencia gastronómica de un nigiri sobre una pieza de cerámica artesanal",
								width: 1024,
								height: 1280,
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "image-caption",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "El detalle como punto de partida." })
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "menu-section",
					id: "menu",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "wrap",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "menu-grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "reveal",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: "El menú de Furai"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "section-title",
										children: [
											"Tu próxima",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "elección." })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "prose",
										children: furai.text.menu
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuLink, { text: "Ver platos y precios" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										className: "menu-source",
										href: furai.menu,
										target: "_blank",
										rel: "noopener noreferrer",
										children: ["menu.fu.do/furaisushi ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 13 })]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
								className: "menu-photo reveal",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: photos.menu,
									alt: "Composición ilustrativa de nigiris sobre cerámica; no representa platos del menú oficial de Furai",
									width: 1920,
									height: 1024,
									loading: "lazy"
								})
							})]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "section experience",
					id: "experiencia",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow reveal",
								children: "La experiencia frente al chef"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "experience-heading reveal",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "section-title",
									children: [
										"En la barra.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Frente a ti." })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "prose",
									children: furai.text.experience
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "experience-preparation reveal",
								id: "barra",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: photos.hands,
									alt: "Imagen ilustrativa de manos preparando un nigiri; no es una fotografía del chef de Furai",
									width: 1024,
									height: 1280,
									loading: "lazy"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", { children: "Preparación de sushi ilustrativa. No es una fotografía del chef ni de la barra de Furai." })]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "eventos",
					className: "section events",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "wrap",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "events-inner reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Ocasiones especiales"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: ["Hay momentos que merecen ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "algo diferente." })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "prose",
									children: furai.text.events
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "event-contexts",
									children: [
										{
											name: "CELEBRACIONES",
											text: "Para ocasiones especiales."
										},
										{
											name: "ENCUENTROS",
											text: "Para compartir una experiencia gastronómica."
										},
										{
											name: "EVENTOS EMPRESARIALES",
											text: "Para consultar posibilidades con el restaurante."
										}
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: item.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.text })] }, item.name))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReserveLink, {
									text: "RESERVAR OMAKASE",
									href: "https://reservation.carbonaraapp.com/Colombia/Villavicencio/Furai-Omakase/"
								})
							]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "ubicacion",
					className: "section location light-section",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap location-grid",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reveal",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Encuéntranos"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "section-title",
									children: [
										"Villavicencio,",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Meta." })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "address",
									children: furai.address
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "hours",
									children: furai.hours
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									variant: "editorial",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: furai.maps,
										target: "_blank",
										rel: "noopener noreferrer",
										children: ["Cómo llegar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "services",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Car, {}), "Estacionamiento en el lugar"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wifi, {}), "Wi-Fi"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dog, {}), "Perros en el interior"] })
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reveal",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								className: "location-map",
								title: "Mapa de la ubicación indicada por Furai Omakase",
								src: "https://maps.google.com/maps?q=4.101763,-73.656005&z=16&output=embed",
								loading: "lazy",
								referrerPolicy: "no-referrer-when-downgrade"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "map-caption",
								children: "Ubicación indicada por el negocio. Coordenadas aproximadas."
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "final-cta",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photos.hero,
						alt: "Detalle gastronómico ilustrativo de nigiris y vajilla artesanal",
						width: 1920,
						height: 1024,
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wrap final-content reveal",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mb-7",
								children: "Furai Omakase"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"La próxima pieza",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"puede ser ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "tuya." })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Descubre Furai Omakase y consulta tu próxima visita en Villavicencio." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "final-buttons",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReserveLink, {
									text: "RESERVAR OMAKASE",
									href: "https://reservation.carbonaraapp.com/Colombia/Villavicencio/Furai-Omakase/"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuLink, {
									text: "Explorar menú",
									subtle: true
								})]
							})
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
			className: "site-footer",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-grid",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "footer-brand",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#inicio",
									"aria-label": "Furai Omakase, volver al inicio",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: furai.logo,
										alt: "Logo oficial de Furai",
										width: 100,
										height: 100,
										loading: "lazy"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Furai Omakase." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: furai.claim })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "footer-heading",
							children: "EXPLORA"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "footer-links",
							"aria-label": "Navegación del pie",
							children: [...navigation, {
								href: "#reservas",
								label: "Reservas"
							}].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: item.href,
								children: item.label
							}, item.href))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "footer-contact",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "footer-heading",
									children: "VISÍTANOS"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: furai.address }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Todos los días, de 4:00 p. m. a 11:00 p. m." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: whatsappUrl(furai.reservationMessage),
									target: "_blank",
									rel: "noopener noreferrer",
									children: ["WhatsApp · ", furai.phone]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "footer-heading",
							children: "SÍGUENOS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "footer-links",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: furai.instagram,
									target: "_blank",
									rel: "noopener noreferrer",
									children: "Instagram ↗"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: furai.tiktok,
									target: "_blank",
									rel: "noopener noreferrer",
									children: "TikTok ↗"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: furai.menu,
									target: "_blank",
									rel: "noopener noreferrer",
									children: "Menú digital ↗"
								})
							]
						})] })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "footer-bottom",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 Furai Omakase. Todos los derechos reservados." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#inicio",
						children: ["Volver al inicio ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, {})]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			className: "whatsapp-float",
			href: whatsappUrl(furai.reservationMessage),
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": "Consultar una reserva por WhatsApp",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Hablemos por WhatsApp" })]
		})
	] });
}
//#endregion
export { Index as component };
