import nikeDunkLowRetro from '../assets/NIKE+DUNK+LOW+RETRO.png';
import wmnsAirForce107 from '../assets/WMNS+AIR+FORCE+1+07.png';
import nikeDunkLowPremiumNextNature from '../assets/W+NIKE+DUNK+LOW+PRM+NN.png';
import nikeCortez from '../assets/NIKE+CORTEZ.png';
import nikeV2KrunPremium from '../assets/W+NIKE+V2K+RUN+PRM.png';
import nikeAirVaprMax2023 from '../assets/AIR+VAPORMAX+2023+FK.jpeg';
import nikeAirMax270 from '../assets/W+AIR+MAX+270.png';
import nikeAirForce107 from '../assets/W+AIR+FORCE+1+07.png';
import nikePegasus41 from '../assets/AIR+ZOOM+PEGASUS+41.png';
import nikeFlexControl4 from '../assets/NIKE+FLEX+CONTROL+TR4.jpeg';
import nikeVaporflt3 from '../assets/ZOOMX+VAPORFLY+NEXT3+PRM.png';
import nikeBlazerMid77 from '../assets/W+BLAZER+MID+77.png';
import { Product } from '../types/product';

export const products: Product[] = [
	{
		id: 1,
		name: 'Nike Dunk Low Retro',
		gender: 'men',
		price: 115,
		salePrice: null,
		discount: null,
		image: nikeDunkLowRetro,
		detail:
			"Created for the hardwood but taken to the streets, the Nike Dunk Low Retro returns with crisp overlays and original team colors. This basketball icon channels '80s vibes with premium leather in the upper that looks good and breaks in even better. Modern footwear technology helps bring the comfort into the 21st century.",
		specification: [
			{ label: 'shown', detail: 'White/Grey Fog' },
			{ label: 'style', detail: 'DD1391-103' },
		],
	},
	{
		id: 2,
		name: "Nike Air Force 1 '07",
		gender: 'women',
		price: 115,
		salePrice: null,
		discount: null,
		image: wmnsAirForce107,
		detail:
			'The radiance lives on in the Nike Air Force 1 ’07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine. A subtle platform gives you just the right amount of height.',
		specification: [
			{ label: 'shown', detail: 'White/White/White/White' },
			{ label: 'style', detail: 'DD8959-100' },
		],
	},
	{
		id: 3,
		name: 'Nike Dunk Low Premium',
		gender: 'women',
		price: 120,
		salePrice: 102.97,
		discount: 14,
		image: nikeDunkLowPremiumNextNature,
		detail:
			"The '80s basketball icon returns with throwback hoops flair and premium materials. A mix of smooth and cracked leather gives your Dunk a fresh feel. Plus, its padded collar lets you take your game anywhere—in comfort.",
		specification: [
			{ label: 'shown', detail: 'White/Gum Light Brown/Football' },
			{ label: 'style', detail: 'FN6345-100' },
		],
	},
	{
		id: 4,
		name: 'Nike Cortez',
		gender: 'men',
		price: 90,
		salePrice: null,
		discount: null,
		image: nikeCortez,
		detail:
			"Was 1972. Now 2023. Sometimes more is better. Recrafting the revered look, we've refreshed the design with a wider toe area and firmer side panels so you can comfortably wear them day in, day out. Reengineered materials help prevent warping and add durability while maintaining the classic '72 shape you fell in love with. Lace up, because tradition keeps getting better.",
		specification: [
			{ label: 'shown', detail: 'White/Black' },
			{ label: 'style', detail: 'DM4044-105' },
		],
	},
	{
		id: 5,
		name: 'Nike V2K Run Premium',
		gender: 'women',
		price: 120,
		salePrice: 102.97,
		discount: 14,
		image: nikeV2KrunPremium,
		detail:
			"Fast forward. Rewind. Doesn’t matter—this shoe takes retro into the future. The V2K remasters everything you love about the Vomero in a look pulled straight from an early aughts running catalog. Layer up in a mixture of flashy metallics, referential plastic details and a midsole with a perfectly vintage aesthetic. And the chunky heel makes sure wherever you go, it's in comfort.",
		specification: [
			{
				label: 'shown',
				detail: 'Light Bone/Sanddrift/Viotech/Metallic Silver',
			},
			{ label: 'style', detail: 'HF4305-072' },
		],
	},
	{
		id: 6,
		name: 'Nike Air VaporMax 2023',
		gender: 'women',
		price: 210,
		salePrice: 170.97,
		discount: 18,
		image: nikeAirVaprMax2023,
		detail:
			"Have you ever walked on Air? Step into this shoe to truly see how it's done. Look through or remove the perforated insole to see the transparent Nike Air unit. The stretchy upper helps keep it light and cool for warmer weather.",
		specification: [
			{
				label: 'shown',
				detail: 'Vast Grey/Volt/Hot Punch/Emerald Rise',
			},
			{ label: 'style', detail: 'FZ4016-001' },
		],
	},
	{
		id: 7,
		name: 'Nike Air Max 270',
		gender: 'women',
		price: 160,
		salePrice: 136.97,
		discount: 14,
		image: nikeAirMax270,
		detail:
			"Legendary Air gets lifted. Our first lifestyle Air Max brings you comfort, bold style and 270 degrees of Max Air technology to showcase one of our greatest innovations yet. Add a lightweight, airy upper and low-cut collar, and you've got the perfect go-to kicks for everyday fun.",
		specification: [
			{
				label: 'shown',
				detail: 'Sail/Glacier Blue/Flax/Coconut Milk',
			},
			{ label: 'style', detail: 'HM6130-133' },
		],
	},
	{
		id: 8,
		name: 'Nike Air Force 1 07',
		gender: 'women',
		price: 115,
		salePrice: 97.97,
		discount: 14,
		image: nikeAirForce107,
		detail:
			"You'll score major points in this legendary classic. Crossing hardwood comfort with off-court flair, this hoops original pairs crisp leather with playful paisley-print accents for nothing-but-net style. Plus, hidden Nike Air units and durable ‘80s construction add the comfort you’ve come to expect from the AF1.",
		specification: [
			{
				label: 'shown',
				detail: 'Pearl Pink/White/Pearl Pink/Coral Chalk',
			},
			{ label: 'style', detail: 'FD1448-664' },
		],
	},
	{
		id: 9,
		name: 'Nike Pegasus 41',
		gender: 'men',
		price: 140,
		salePrice: null,
		discount: null,
		image: nikePegasus41,
		detail:
			'Responsive cushioning in the Pegasus provides an energized ride for everyday road running. Experience lighter-weight energy return with dual Air Zoom units and a ReactX foam midsole. Plus, improved engineered mesh on the upper decreases weight and increases breathability.',
		specification: [
			{
				label: 'shown',
				detail: 'Summit White/Bright Crimson/Glacier Blue/Chrome',
			},
			{ label: 'style', detail: 'FD2722-100' },
		],
	},
	{
		id: 10,
		name: 'Nike Flex Control 4',
		gender: 'men',
		price: 70,
		salePrice: null,
		discount: null,
		image: nikeFlexControl4,
		detail:
			'Emphasizing lightweight comfort and stability, the Nike Flex Control 4 is tailored to explosive workouts. Its lightweight, flexible upper has a midfoot strap for stability, while the sole has deep flex grooves to let your foot move naturally.',
		specification: [
			{
				label: 'shown',
				detail: 'Black/Dark Smoke Grey/Smoke Grey/White',
			},
			{ label: 'style', detail: 'CD0197-002' },
		],
	},
	{
		id: 11,
		name: 'Nike Vaporfly 3 Premium',
		gender: 'men',
		price: 270,
		salePrice: null,
		discount: null,
		image: nikeVaporflt3,
		detail:
			'Decked out in retro plaid prints and upholstered with a homey, shaggy curtain flair, this premium version pays homage to where it all started, selling sneakers through the sliding door of a beat-up blue-and-white delivery van with nothing more than a dream. Premium laces and old-school graphics from the back of our archives highlight a design rooted in Nike nostalgia. We reworked the leader of the super shoe pack and tuned the engine underneath to help you chase personal bests from a 10K to marathon.',
		specification: [
			{
				label: 'shown',
				detail: 'Sail/Safety Orange/Burnt Sunrise/Hyper Royal',
			},
			{ label: 'style', detail: 'FQ7676-100' },
		],
	},
	{
		id: 12,
		name: `Nike Blazer Mid '77`,
		gender: 'women',
		price: 105,
		salePrice: null,
		discount: null,
		image: nikeBlazerMid77,
		detail:
			'Styled for the ‘70s. Loved in the ‘80s. Classic in the ‘90s. Ready for the future. The Nike Blazer Mid ’77 delivers a timeless design that’s easy to wear. Its unbelievably crisp leather upper breaks in beautifully and pairs with bold retro branding and luscious suede accents for a premium feel. Exposed foam on the tongue and a special midsole finish make it look like you’ve just pulled them from the history books. Go ahead, perfect your outfit.',
		specification: [
			{
				label: 'shown',
				detail: 'White/Sail/Diffused Blue',
			},
			{ label: 'style', detail: 'CZ1055-125' },
		],
	},
];
