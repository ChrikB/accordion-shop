
let models  = [  

  { 
    id: 1,
    brand: 'BrandAlpha', 
    model: 'TTT GT', 
	dir: 'car_1',
	color: { name: 'briliant blue', code: 'rgb(14, 27, 83)', img: 'car_1.briliant_blue.svg' }, 
    colors: [ 
	  { name: 'briliant blue', code: 'rgb(14, 27, 83)', img: 'car_1.briliant_blue.svg' }, 
	  { name: 'silver', code: 'rgb(219, 219, 219)', img: 'car_1.silver.svg' }, 
	  { name: 'mars red', code: 'rgb(168, 39, 12)', img: 'car_1.mars_red.svg' }, 
	  { name: 'yellow', code: 'rgb(233, 213, 0)', img: 'car_1.yellow.svg' } 	  
	], 
    props: { 
      released: '2016',	  
      FuelType: 'Gas',
	  engine: 'V8, Twin Turbo, 4.0L',
	  FuelTank: '19.8  gal',
	  airCondition: true,
	  doors: 2,
      SeatingCapacity: 2
    },
    price: 60000   
  },
  {
    id: 2,	  
    brand: 'Brand_2', 
    model: 'Coupe 002', 
	dir: 'car_2',
	color: { name: 'rosso corsa', code:'rgb(179, 51, 83)', img: 'car_2.rosso_corsa.svg' } ,	
    colors: [ 
	  { name: 'azzurro california', code:'rgb(156, 156, 186)', img: 'car_2.azzurro_california.svg' }, 
	  { name: 'giallo modena', code:'rgb(247, 251, 108)', img: 'car_2.giallo_modena.svg' }, 
	  { name: 'rosso corsa', code:'rgb(179, 51, 83)', img: 'car_2.rosso_corsa.svg' } 
	], 
    props: {
      released: '2016',	  
      FuelType: 'Petrol (Gasoline)',
	  engine: '3.9 V8 (670 Hp) DCT  8-Cylinder Turbo',
	  FuelTank: '78 lt',
	  airCondition: true,
	  doors: 2,
      SeatingCapacity: 2
    },
    price: 80000  
  },  
  { 
    id: 3,	  
    brand: 'Brand_3', 
    model: '3316', 
	dir: 'car_3',
	color: { name: 'blue', code: 'rgb(50, 67, 143)', img: 'car_3.blue.svg' } ,	
    colors: [
	  { name: 'blue', code: 'rgb(50, 67, 143)', img: 'car_3.blue.svg' },
	  { name: 'gray', code: 'rgb(106, 107, 106)', img: 'car_3.gray.svg' },
	  { name: 'white', code: 'rgb(224, 20, 84)', img: 'car_3.white.svg' },
	  { name: 'red', code: 'rgb(236, 240, 233)', img: 'car_3.red.svg' }
	], 
    props: {
      released:'2016',
	  engine: 'In-line six-cyl, 2993cc, bi-turbo',
	  FuelTank: '12.5 imp. gal',
	  airCondition: true,
	  doors: 5,
      SeatingCapacity: 5
    },
    price: 30000 
  },
  { 
    id: 4,	 
    brand: 'Forth', 
    model: 'Festah', 
    dir: 'car_4',
	color: { name: 'guard', code:'rgb(61, 108, 11)', img: 'car_4.guard.svg' } ,
    colors: [ 
	  { name: 'competition Orange', code: 'rgb(221, 106, 8)', img: 'car_4.competition_orange.svg' }, 
	  { name: 'Deep Impact Blue', code: 'rgb(24, 25, 138)', img: 'car_4.deep_impact_blue.svg' }, 
	  { name: 'guard', code:'rgb(61, 108, 11)', img: 'car_4.guard.svg' } ,
	  { name: 'triple yellow', code: 'rgb(255, 234, 0)', img: 'car_4.triple_yellow.svg' } ,
	  { name: 'race red', code: 'rgb(210, 50, 50)', img: 'car_4.race_red.svg' } ,
	  { name: 'ruby red', code: 'rgb(150, 16, 0)', img: 'car_4.ruby_red.svg' } ,	  
	  { name: 'magnetic', code: 'rgb(253, 255, 252)', img: 'car_4.magnetic.svg' } ,		  
	], 
    props: {
      released:'2016',
	  engine: '3.7L V-6 300 HP 280.0 ft.lbs. @ 4,000 rpm',
	  FuelTank: '16.0 gal.',
	  airCondition: true,
	  doors: 4,
      SeatingCapacity: 4,
    },
    price: 20000	
  } 














  ,
  { 
    id: 5,
    brand: 'BrandAlpha', 
    model: 'BMG 01', 
	dir: 'car_5',
	color: 	  { name: 'green', code: 'rgb(0, 128, 0)', img: 'car_5.green.svg' },
    colors: [ 
	  { name: 'green', code: 'rgb(0, 128, 0)', img: 'car_5.green.svg' },	
	  { name: 'red', code: 'rgb(255, 0, 0)', img: 'car_5.red.svg' }, 
	  { name: 'black', code: 'rgb(0, 0, 0)', img: 'car_5.black.svg' } 	  
	], 
    props: { 
      released: '2016',	  
      FuelType: 'Gas',
	  engine: 'V8, Twin Turbo, 4.0L',
	  FuelTank: '19.8  gal',
	  airCondition: true,
	  doors: 2,
      SeatingCapacity: 2
    },
    price: 60000   
  },
  {
    id: 6,	  
    brand: 'BrandAlpha', 
    model: 'EE 4E88', 
	dir: 'car_6',
	color: { name: 'cyan', code:'rgb(0, 255, 255)', img: 'car_6.cyan.svg' } ,	
    colors: [ 
	  { name: 'yellow', code:'rgb(255, 255, 0)', img: 'car_6.yellow.svg' }, 
	  { name: 'cyan', code:'rgb(0, 255, 255)', img: 'car_6.cyan.svg' }, 
	  { name: 'red', code:'rgb(179, 51, 83)', img: 'car_6.red.svg' } 
	], 
    props: {
      released: '2016',	  
      FuelType: 'Petrol (Gasoline)',
	  engine: '3.9 V8 (670 Hp) DCT  8-Cylinder Turbo',
	  FuelTank: '78 lt',
	  airCondition: true,
	  doors: 2,
      SeatingCapacity: 2
    },
    price: 80000  
  },  
  { 
    id: 7,	  
    brand: 'Brand_2', 
    model: '335ED', 
    img: '', 
	dir: 'car_7',
	color: { name: 'black', code: 'rgb(0, 0, 0)', img: 'car_7.black.svg' } ,	
    colors: [
	  { name: 'black', code: 'rgb(0, 0, 0)', img: 'car_7.black.svg' },
	  { name: 'gray', code: 'rgb(128, 128, 128)', img: 'car_7.gray.svg' },
	  { name: 'red', code:'rgb(179, 51, 83)', img: 'car_7.red.svg' } 
	], 
    props: {
      released:'2016',
	  engine: 'In-line six-cyl, 2993cc, bi-turbo',
	  FuelTank: '12.5 imp. gal',
	  airCondition: true,
	  doors: 5,
      SeatingCapacity: 5
    },
    price: 30000 
  },
  { 
    id: 8,	 
    brand: 'Forth', 
    model: 'Cabrio',    
    dir: 'car_8',
	color: { name: 'blue', code: 'rgb(0, 0, 255)', img: 'car_8.blue.svg' } ,
    colors: [ 
	  { name: 'red', code:'rgb(255, 0, 0)', img: 'car_8.red.svg' }, 
	  { name: 'blue', code: 'rgb(0, 0, 255)', img: 'car_8.blue.svg' }, 	  
	], 
    props: {
      released:'2016',
	  engine: '3.7L V-6 300 HP 280.0 ft.lbs. @ 4,000 rpm',
	  FuelTank: '16.0 gal.',
	  airCondition: true,
	  doors: 4,
      SeatingCapacity: 4,
    },
    price: 20000	
  },
  { 
    id: 9,	 
    brand: 'Fifth', 
    model: 'FAST XGT', 
    dir: 'car_9',
	color: { name: 'green', code: 'rgb(0, 128, 0)', img: 'car_9.green.svg' } ,
    colors: [ 
	  { name: 'yellow', code:'rgb(255, 255, 0)', img: 'car_9.yellow.svg' }, 
	  { name: 'green', code: 'rgb(0, 128, 0)', img: 'car_9.green.svg' }		  
	], 
    props: {
      released:'2016',
	  engine: '3.7L V-6 300 HP 280.0 ft.lbs. @ 4,000 rpm',
	  FuelTank: '16.0 gal.',
	  airCondition: true,
	  doors: 4,
      SeatingCapacity: 4,
    },
    price: 20000	
  } ,
  { 
    id: 10,	 
    brand: 'Forth', 
    model: 'AAAA GT', 
    dir: 'car_10',
	color: { name: 'pink', code: 'rgb(255, 192, 203)', img: 'car_10.pink.svg' } ,
    colors: [ 
	  { name: 'black', code: 'rgb(0, 0, 0)', img: 'car_10.black.svg' }, 
	  { name: 'pink', code: 'rgb(255, 192, 203)', img: 'car_10.pink.svg' }, 	  
	], 
    props: {
      released:'2016',
	  engine: '3.7L V-6 300 HP 280.0 ft.lbs. @ 4,000 rpm',
	  FuelTank: '16.0 gal.',
	  airCondition: true,
	  doors: 4,
      SeatingCapacity: 4,
    },
    price: 20000	
  } 
 ,
  { 
    id: 11,	 
    brand: 'Brand_2', 
    model: 'Musta', 
    dir: 'car_11',
	color: { name: 'green', code: 'rgb(0, 128, 0)', img: 'car_11.green.svg' } ,
    colors: [ 
	  { name: 'red', code: 'rgb(255, 0, 0)', img: 'car_11.red.svg' }, 
	  { name: 'green', code: 'rgb(0, 128, 0)', img: 'car_11.green.svg' }, 	  
	], 
    props: {
      released:'2016',
	  engine: '3.7L V-6 300 HP 280.0 ft.lbs. @ 4,000 rpm',
	  FuelTank: '16.0 gal.',
	  airCondition: true,
	  doors: 4,
      SeatingCapacity: 4,
    },
    price: 20000	
  } 
 ,
  { 
    id: 12,	 
    brand: 'Brand_3', 
    model: '123123', 
    dir: 'car_12',
	color: { name: 'green', code: 'rgb(0, 128, 0)', img: 'car_12.green.svg' } ,
    colors: [ 
	  { name: 'black', code: 'rgb(0, 0, 0)', img: 'car_12.black.svg' }, 	
	  { name: 'red', code: 'rgb(255, 0, 0)', img: 'car_12.red.svg' }, 
	  { name: 'green', code: 'rgb(0, 128, 0)', img: 'car_12.green.svg' }, 	  
	], 
    props: {
      released:'2016',
	  engine: '3.7L V-6 300 HP 280.0 ft.lbs. @ 4,000 rpm',
	  FuelTank: '16.0 gal.',
	  airCondition: true,
	  doors: 4,
      SeatingCapacity: 4,
    },
    price: 20000	
  } 



  
];


let services = [
  { 
    id: 1,	  
    name: 'package A', 
	duration: '10', 
	price: 0.003, // car price(10.000)   *   0.005  per day  || (10 days x 0.005) - 10*0.001
	pricePer: 'day', 
	type: 'summer', 
	props: {
	  fireInsurance: 'no',
	  theftInsurance: 'no',
	  damageInsurance: 'no',
	  accidentProtection: 'yes',
	  contactBreakable : 'no',
	  fuelOffers: 'no'
    } 
  },
  { 
    id: 2,	  
    name: 'package B', 
	duration: '3', 
	price: 0.006, 
	pricePer: 'day',
	type: 'summer', 
	props: {
	  fireInsurance: 'no',
	  theftInsurance: 'no',
	  damageInsurance: 'yes',
	  accidentProtection: 'yes',
	  contactBreakable : 'no',
	  fuelOffers: 'no'	  
    } 
  },
  { 
    id: 3,	  
    name: 'package C', 
	duration: '50', 
	price: 0.007, 
	pricePer: 'day',
	type: 'summer', 
	props: {
	  fireInsurance: 'yes',
	  theftInsurance: 'no',
	  damageInsurance: 'yes',
	  accidentProtection: 'yes',
	  contactBreakable : 'no',
	  fuelOffers: 'no' 
    } 
  },
  { 
    id: 4,	  
    name: 'package D', 
	duration: '90', 
	price: 0.008, 
	pricePer: 'day',
	type: 'summer', 
	props: {
	  fireInsurance: 'yes',
	  theftInsurance: 'yes',
	  damageInsurance: 'yes',
	  accidentProtection: 'yes',
	  contactBreakable : 'no',
	  fuelOffers: 'no'   
    } 
  },
  { 
    id: 5,	  
    name: 'package E', 
	duration: '90', 
	price: 0.009, 
	pricePer: 'day',
	type: 'winter',
    startDate: '',
    endDate: '',	
	props: {
	  fireInsurance: 'yes',
	  theftInsurance: 'yes',
	  damageInsurance: 'yes',
	  accidentProtection: 'yes',
	  contactBreakable : 'no',
	  fuelOffers: 'yes'   
    } 
  },
  { 
    id: 6,	  
    name: 'package F', 
	duration: '120', 
	price: 0.007, 
	pricePer: 'day',
	type: 'winter', 
    startDate: '01/01',
    endDate: '01/05',		
	props: {
	  fireInsurance: 'yes',
	  theftInsurance: 'yes',
	  damageInsurance: 'yes',
	  accidentProtection: 'yes',
	  contactBreakable : 'no',
	  fuelOffers: 'yes'   
    } 
  },
  { 
    id: 7,	  
    name: 'package G', 
	duration: 7, 
	price: 0.006, 
	pricePer: 'month',
	type: 'winter',  
	props: {
	  fireInsurance: 'yes',
	  theftInsurance: 'no',
	  damageInsurance: 'yes',
	  accidentProtection: 'yes',
	  contactBreakable : 'no',
	  fuelOffers: 'yes'  
    } 
  },
  { 
    id: 8,	  
    name: 'package H', 
	duration: 5, 
	price: 0.005, 
	pricePer: 'month',
	type: 'winter',  
	props: {
	  fireInsurance: 'no',
	  theftInsurance: 'no',
	  damageInsurance: 'yes',
	  accidentProtection: 'yes',
	  contactBreakable : 'no',
	  fuelOffers: 'yes'    
    } 
  },
  { 
    id: 9,	  
    name: 'package II', 
	duration: 1, 
	price: 0.009, 
	pricePer: 'year',
	type: 'full', 
	props: {
	  fireInsurance: 'yes',
	  theftInsurance: 'yes',
	  damageInsurance: 'yes',
	  accidentProtection: 'yes',
	  contactBreakable : 'yes',
	  fuelOffers: 'yes'  
    } 
  },
  { 
    id: 10,	  
    name: 'package J', 
	duration: 2, 
	price: 0.008, 
	pricePer: 'year',
	type: 'full', 
	props: {
	  fireInsurance: 'yes',
	  theftInsurance: 'yes',
	  damageInsurance: 'yes',
	  accidentProtection: 'yes',
	  contactBreakable : 'yes',
	  fuelOffers: 'yes'  
    } 
  }   
];