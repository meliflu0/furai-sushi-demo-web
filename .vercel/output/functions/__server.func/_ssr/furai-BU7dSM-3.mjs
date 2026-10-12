//#region node_modules/.nitro/vite/services/ssr/assets/furai-BU7dSM-3.js
var hero = "/omakase-hero.jpg";
var hands = "/chef-hands.jpg";
var nigiri = "/nigiri-detail.jpg";
var counter = "/counter-reference.jpg";
var logo = "/furai-logo.png";
var galeria1 = "/galeria1.webp";
var galeria2 = "/galeria2.webp";
var galeria3 = "/galeria3.webp";
var menu = "/menu.webp";
var filosofia = "/filosofia.webp";
var furai = {
	name: "Furai Omakase",
	claim: "El primer omakase de Villavicencio.",
	phone: "+57 316 320 9439",
	whatsapp: "573163209439",
	address: "Cra. 44 #26a-06 Sur, Local 101, Villavicencio Sur, Villavicencio, Meta, Colombia.",
	hours: "Lunes a domingo: 4:00 p. m. – 11:00 p. m.",
	menu: "https://menu.fu.do/furaisushi",
	instagram: "https://www.instagram.com/sushi.furai/",
	tiktok: "https://www.tiktok.com/@furai.omakase",
	coordinates: {
		latitude: 4.101763,
		longitude: -73.656005
	},
	maps: "https://www.google.com/maps/dir/?api=1&destination=4.101763%2C-73.656005",
	logo,
	reservationMessage: "Hola, Furai Omakase. Me gustaría consultar una reserva. ¿Podrían indicarme la disponibilidad y las condiciones?",
	eventsMessage: "Hola, Furai Omakase. Me gustaría recibir información sobre celebraciones, encuentros o eventos empresariales. ¿Podrían contarme las opciones y condiciones?",
	text: {
		hero: "Una experiencia japonesa íntima frente al chef. Sushi de autor, ingredientes seleccionados y una barra en vivo en Villavicencio.",
		philosophy: "El primer omakase de Villavicencio: una propuesta japonesa contemporánea que reúne sushi de autor y una forma íntima de sentarse a la mesa.",
		experience: "Omakase significa dejar la elección en manos del chef. En la barra en vivo, el recorrido se sirve frente a ti: puedes observar la preparación y descubrir cada pieza a medida que llega.",
		chef: "La barra en vivo acerca al comensal a la preparación y al servicio. Una forma de disfrutar la cocina japonesa con atención al detalle y una conexión más directa con cada pieza.",
		menu: "Encuentra los platos y los precios actualizados en nuestro menú oficial. Descubre la propuesta y elige qué te gustaría probar.",
		reservations: "Cuéntanos cuándo te gustaría visitarnos y para cuántas personas. Prepararemos tu mensaje para que puedas consultar tu reserva directamente por WhatsApp.",
		events: "Una experiencia japonesa para compartir en pareja, celebrar una ocasión especial, reunirse con amigos o consultar opciones para encuentros empresariales."
	}
};
var photos = {
	hero,
	hands,
	nigiri,
	counter,
	menu,
	filosofia
};
var gallery = [
	{
		src: galeria1,
		alt: "Imagen ilustrativa de manos preparando un nigiri en una barra japonesa",
		label: "El cuidado",
		width: 1024,
		height: 1280
	},
	{
		src: galeria2,
		alt: "Imagen ilustrativa de la textura de un nigiri sobre cerámica artesanal",
		label: "La textura",
		width: 1024,
		height: 1280
	},
	{
		src: galeria3,
		alt: "Referencia ilustrativa de una barra japonesa cálida; no corresponde al interior real de Furai",
		label: "La atmósfera",
		width: 1536,
		height: 1024
	}
];
var navigation = [
	{
		href: "#inicio",
		label: "Inicio"
	},
	{
		href: "#menu",
		label: "Menú"
	},
	{
		href: "#experiencia",
		label: "Experiencia"
	},
	{
		href: "#galeria",
		label: "Galería"
	},
	{
		href: "#eventos",
		label: "Eventos"
	},
	{
		href: "#ubicacion",
		label: "Ubicación"
	}
];
var whatsappUrl = (message) => `https://wa.me/${furai.whatsapp}?text=${encodeURIComponent(message)}`;
//#endregion
export { whatsappUrl as a, photos as i, gallery as n, navigation as r, furai as t };
