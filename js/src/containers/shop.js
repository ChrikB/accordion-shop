class Shop extends React.Component {
	
  exitShop = (ev) =>  {
    store.dispatch({ type: 'EXIT_SHOP' , index: this.props.index});	  
  }
 
  render() { 

	let isHiddenClass = this.props.hidden  ? ' d-none ' : '';
    let hiddenButton  = (this.props.highlight.item.model && this.props.highlight.item.color && this.props.highlight.service.name) ? '' : ' d-none ';
	
    return (
	  <div  class={isHiddenClass + 'shop-main-row'} >
		   <div class="row">
		     <div class="col-12  col-sm-12  col-md-12 col-lg-6 limited-col-right item-section">
			   <div class="row brands" >
					<ItemBrandList 
					  itemBrandList={this.props.itemBrandList} 
					  filters={this.props.filters}
					  index={this.props.index}
					/>
			   </div>
			   <div class="row items" >
					<ItemList 
					  items={this.props.cars}
					  highlightItem={this.props.highlight.item}
					  index={this.props.index}
					/>
			   </div>
			   <div class="row colors" >
					<ItemColorList 
					  colors={this.props.highlight.item.colors} 
					  selectedColor={this.props.highlight.item.selectedColor} 
					  itemColor={this.props.highlight.item.color}
					  hightlightItem={this.props.highlight.item}
					  index={this.props.index}
					/>
			   </div>
             </div>
			 <div class="col-sm-12 col-md-12 col-lg-6 limited-col-left service-section">
			   <div class="row brands">
					<ServiceBrandList 
					  serviceBrandList={this.props.serviceBrandList} 
					  filters={this.props.filters}
					  index={this.props.index}
					/>
			   </div>
			   <div class="row services" >
					<ServiceList 
					  services={this.props.services}
					  highlightService={this.props.highlight.service}
					  index={this.props.index}
					/>
			   </div>
			 </div>
			 <div class="col-12  col-sm-12  col-md-12 col-lg-12 shop-button-col">
			   <button 
			     class={hiddenButton + 'btn btn-info'} 
				 onClick={this.exitShop}
			   >Exit Shop</button>
			 </div>
		   </div>
	  </div>   
  	);	
  }
}

