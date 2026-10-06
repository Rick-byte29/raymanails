export const groups=['Gel Extensions','Acrylic Extensions','Nail Art Add-ons','Care & Overlays'];
export const services=[
 {name:'Signature Gel Extensions',group:0,price:1800,time:'75 min',description:'Lightweight length, beautifully shaped. Finished with your choice of gel colour.',includes:['Personalised shape & length','Cuticle care & prep','Single-colour gel finish'],popular:false},
 {name:'Gel Extensions + Art',group:0,price:2400,time:'90 min',description:'Our signature set, with a little more personality. Minimal art on four accent nails.',includes:['Full gel extension set','Four minimal accent nails','Gloss or velvet-matte finish'],popular:true},
 {name:'Bridal Gel Set',group:0,price:3200,time:'120 min',description:'Thoughtfully designed for your day. Soft pearls, elegant French or delicate shimmer.',includes:['Design consultation','Full extension set','Bespoke bridal details'],popular:false},
 {name:'Classic Acrylic',group:1,price:2000,time:'90 min',description:'A beautifully balanced, durable set with a crisp gel colour finish.',includes:['Custom shape & length','Full acrylic application','Single-colour gel finish'],popular:false},
 {name:'Sculpted Acrylic',group:1,price:2600,time:'105 min',description:'Precision-sculpted length and structure, made to complement your hands.',includes:['Sculpted acrylic structure','Refined shaping','Gloss gel finish'],popular:true},
 {name:'Acrylic + Art',group:1,price:3000,time:'120 min',description:'A statement set with intricate detail and considered colour.',includes:['Full acrylic set','Medium art on four nails','Custom colour palette'],popular:false},
 {name:'Minimal Art',group:2,price:300,time:'+15 min',description:'Fine lines, tiny hearts and delicate details. An addition to your base set.',includes:['Up to four accent nails','Hand-painted details','Add to any base service'],popular:false},
 {name:'Chrome / French',group:2,price:600,time:'+25 min',description:'Mirror-like chrome or a perfectly considered French tip.',includes:['Chrome or French finish','All ten nails','Add to any base service'],popular:true},
 {name:'3D Art',group:2,price:1000,time:'+40 min',description:'Sculptural flowers, pearls and dimensional embellishments.',includes:['Up to four accent nails','Handcrafted embellishments','Add to any base service'],popular:false},
 {name:'Builder Gel / BIAB',group:3,price:1500,time:'60 min',description:'Support for your natural nails, with a clean, polished finish.',includes:['Natural nail preparation','Builder gel overlay','Single-colour finish'],popular:true},
 {name:'Rubber Base Overlay',group:3,price:1200,time:'50 min',description:'A flexible overlay for a smooth, fresh and naturally refined look.',includes:['Gentle cuticle care','Rubber base application','Gloss gel finish'],popular:false},
 {name:'Spa Manicure',group:3,price:900,time:'45 min',description:'A slow moment of care for your hands. Hydrate, soften and restore.',includes:['Soak, scrub & hand massage','Cuticle care & shaping','Classic polish finish'],popular:false},
 {name:'Dual Form Extensions',group:0,price:2200,time:'90 min',description:'Balanced shape and soft length with a precision-moulded gel structure.',includes:['Dual-form gel application','Custom shaping','Single-colour finish'],popular:false},
];
export const looks=[
 {title:'The barely-there French',category:'French Tip',image:'/images/french.jpg',note:'A delicate tip. An enduring favourite.'},
 {title:'Rosewater chrome',category:'Luxury Chrome',image:'/images/chrome.jpg',note:'Soft pink with a luminous, glazed finish.'},
 {title:'Quiet luxury',category:'Minimalist',image:'/images/minimal.jpg',note:'Sheer nude, shaped to perfection.'},
 {title:'Something floral',category:'Bridal',image:'/images/bridal.jpg',note:'Tiny blooms for your biggest moments.'},
 {title:'Sculpted petals',category:'3D Art',image:'/images/art.jpg',note:'Wearable detail, beautifully dimensional.'},
 {title:'A blush affair',category:'Minimalist',image:'/images/pink.jpg',note:'A soft, feminine shade for every day.'},
 {title:'Pearl & polish',category:'Bridal',image:'/images/pearl.jpg',note:'A touch of romance. A hint of shimmer.'},
 {title:'The golden hour',category:'Luxury Chrome',image:'/images/gold.jpg',note:'Reflective accents with an elevated finish.'},
];
export const money=(n:number)=>'₹'+n.toLocaleString('en-IN');
