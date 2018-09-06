/*
 *		Init redux store
 */

let a = { item: JSON.parse(JSON.stringify(models[0])) , service: JSON.parse(JSON.stringify(services[0])) };
a.item.selectedColor = '#192145';
a.hasShop = true;
a.shopOpen = true;
let b = { item: JSON.parse(JSON.stringify(models[1])) , service: JSON.parse(JSON.stringify(services[1])) };
b.item.selectedColor = '#192345';
b.hasShop = true;
b.shopOpen = false;

  
function shopData(state = { cars: [], services: [], itemBrandList: [] ,serviceBrandList: [], filters: { itemBrand: null, serviceBrand: null } } , action) { 
  let update;
  let temp;
  let a; 
  let arr;  
  let paths = [];

  switch (action.type) {
    case 'SET_DATA' : 
		state.cars = state.cars.concat(action.models); 
	    state.services = state.services.concat(action.services);
		return { ...state }; 	   
	case 'CREATE_UNIQUE_BRANDS' : 
        arr = [];
        state.cars.map((b,k) => {
          arr.push(b.brand);
        });			
        state.itemBrandList = arr.filter((v, i, a) => a.indexOf(v) === i);
		arr = [];
        state.services.map((b,k) => {
          arr.push(b.type);
        });

        state.serviceBrandList = arr.filter((v, i, a) => a.indexOf(v) === i);			  
		return { ...state };
	case 'FILTER_ITEMS': 
        state.cars = models;
		update = false;
		temp = [];
		for (a = 0; a < state.cars.length; a++) {
		  if (state.cars[a].brand === action.brand) {
			temp.push(state.cars[a]);
			update = true;
		  }
		} 
		if (update) { 
		  state.cars = temp; 
		} 
		state.filters.itemBrand = action.brand;		
		return { ...state };
	case 'FILTER_SERVICES':
        state.services = services; 
		update = false;
		temp = [];
		for (a = 0; a < state.services.length; a++) {
		  if (state.services[a].type === action.serviceType) {
			temp.push(state.services[a]);
			update = true;
		  }
		} 
		if (update) { 
		  state.services = temp;
		}  
		state.filters.serviceBrand = action.serviceType;		
		return { ...state };			
	default:
        return state		
  }
}


function userBasket(state = [a,b] , action) { 
  let newSelection;
  switch (action.type) {
	case 'ADD_BASKET_ROW': 	
		newSelection = {
		  item: { 
		    colors: [], 
			color: {} 
		  },
		  service: {},
		  shopOpen: true,	  
		}; 
		state.push(newSelection);		
		return [ ...state ];							
	case 'REMOVE_BASKET_ROW': 		
		state.splice(action.rowId, 1);
		return [ ...state ];
	case 'OPEN_ACCORDION_ROW': 	
        state.map((b,k) => {
          b.isOpen = false;
        });	
		state[action.rowId].isOpen = true;
		return [ ...state ];
	case 'CLOSE_ACCORDION_ROW': 		
		state[action.rowId].isOpen = false; 
		return [ ...state ];
	case 'UPDATE_SELECTION':
	    if (action.item) { 
		  state[action.index].item = { ...action.item };
		}
	    if (action.service) {
		  state[action.index].service = { ...action.service};
		}
	    if (action.selectedColor) { 
		  state[action.index].item.color = { ...action.color};
	      state[action.index].item.selectedColor = action.selectedColor;	 
		}			
		return [ ...state ];
	case 'OPEN_SHOP': 	
		state[action.rowId].hasShop = true;
		state[action.rowId].shopOpen = true;
		return [ ...state ];			
	case 'EXIT_SHOP': 
		if (!state[action.index].item.model || !state[action.index].service.name) { 
		  return state; 
		}
		state[action.index].shopOpen = false; 
		return [ ...state ];		
	default:
      return state		
  }
}



let leasingEngine = Redux.combineReducers({ 
  selected: userBasket,
  shopData: shopData
});


const store = Redux.createStore(leasingEngine);

const ConnBasket = ReactRedux.connect(state => state)
      (Basket);
	  
const ConnBasketRow = ReactRedux.connect(state => state)
      (BasketRow);	  



function loadImages(data) {
  let img;    
  let paths = [];
  let addImageProcess;
  data.models.map((b,k) => {
	b.colors.map((z) => {					   
	  paths.push(' img/CARS/' + b.dir + '/' + z.img)
	})
  });
		
  addImageProcess = (src) => { 
    return  new Promise((resolve, reject) => { 
      img = new Image();
      img.onload  = function() { resolve(src); }
      img.onerror = function() { reject(new Error(src));}
      img.src = src;	
    })		  
  };
	
  Promise.all(paths.map(addImageProcess)).then((values) => {		   
    data.callback(); 		   
  }).catch((err) => console.log('Catch', err));
}

loadImages({ 
  models: models, 
  services: services, 
  callback: (stateData) => {
	  
    document.getElementById('spin-to-load').style.display = 'none';
	store.dispatch({ 
      type: 'SET_DATA', 
	  models: models , 
	  services: services
	});  
    ReactDOM.render(
      (
        <ReactRedux.Provider store={store}>
          <ConnBasket />
        </ReactRedux.Provider>
      ),
      document.getElementById('root')
    );	
  }
  
});