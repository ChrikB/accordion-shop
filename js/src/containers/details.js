class Details extends React.Component {
  constructor(props) {
  	super();
	this.index = props.index;
  }
  
  openShop = (ev) =>  {
    store.dispatch({ type: 'OPEN_SHOP', rowId:  this.index });  
  }
 
  render() {	
    if (!this.props.item.props) { 
	  this.props.item.props = {}; 
	}
    if (!this.props.service.props) { 
	  this.props.service.props = {}; 
	}
	
	let itemIMG;
	if (!this.props.item.color.img) {
	  itemIMG = null;
	} else { 
	  itemIMG = ' img/CARS/' + this.props.item.dir + '/' + this.props.item.color.img;    
	}	
	
	let isHiddenClass = this.props.hidden  ? ' d-none ' : '';
	this.itemProperties = this.props.item.props;
	this.serviceProperties = this.props.service.props;

    return (
		   <div class={ 'row details-container' + isHiddenClass } >
		     <div class="col-12  col-sm-12  col-md-12 col-lg-6 limited-col-right ">
			   <h2 class='title'>Car</h2>
			   <div class="row item-details">
			      <div class="col-12  col-sm-12  col-md-12 col-lg-6">
				    <img class="item-img" src={itemIMG}/>
				  </div>
				  <div class="col-12  col-sm-12  col-md-12 col-lg-6">
                    <ul class="list-group">
					  <li class="list-group-item">
					    <h4>{this.props.item.model}</h4>
					  </li>
                      <li class="list-group-item property-list-no-un">
					    <span class="property">Year : </span>
						<span class="value">{this.itemProperties.released}</span>
					  </li>
                      <li class="list-group-item property-list-no-un">
					    <span class="property">Engine : </span>
						<span class="value">{this.itemProperties.engine}</span>
					  </li>
                      <li class="list-group-item property-list-no-un">
					    <span class="property">Fuel-Type : </span>
						<span class="value">{this.itemProperties.FuelType}</span>
					  </li>
                      <li class="list-group-item property-list-no-un">
					    <span class="property">Fuel-Tank : </span>
						<span class="value">{this.itemProperties.FuelTank}</span>
					  </li>
                      <li class="list-group-item property-list-no-un">
					    <span class="property">Air-Condition : </span>
						<span class="value">{this.itemProperties.airCondition}</span>
					  </li>
                      <li class="list-group-item property-list-no-un">
					    <span class="property">Doors : </span>
						<span class="value">{this.itemProperties.doors}</span>
					  </li>
                      <li class="list-group-item property-list-no-un">
					    <span class="property">Seats : </span>
						<span class="value">{this.itemProperties.SeatingCapacity}</span>
					  </li>  
                    </ul>				    
				  </div>
			   </div>
             </div>
			 <div class="col-sm-12 col-md-12 col-lg-6 limited-col-left ">
			   <h2 class='title'>Package</h2>
				<div class="row service-details">
				  <div class="col-12  col-sm-12  col-md-12 col-lg-6"><img class="service-img" src={this.props.service.img}/></div>
				  <div class="col-12  col-sm-12  col-md-12 col-lg-6">
                    <ul class="list-group">
					  <li class="list-group-item"><h4>{this.props.service.name}</h4></li>
                      <li class="list-group-item property-list">
					    <span class="property">Duration : </span>
						<span class="value">{this.props.service.duration + ' ' + this.props.service.pricePer + 's'}</span>
					  </li>
					  <li class="list-group-item">
					    <h5 class="sub-title">Protections</h5>
					  </li>
                      <li class="list-group-item property-list">
					    <span class="property">Fire : </span>
						<span class="value">{this.serviceProperties.fireInsurance}</span>
					  </li>
                      <li class="list-group-item property-list">
					    <span class="property">Theft : </span>
						<span class="value">{this.serviceProperties.theftInsurance}</span>
					  </li>
                      <li class="list-group-item property-list">
					    <span class="property">Damage : </span>
						<span class="value">{this.serviceProperties.damageInsurance}</span>
					  </li>
                      <li class="list-group-item property-list">
					    <span class="property">Accident : </span>
					    <span class="value">{this.serviceProperties.accidentProtection}</span>
					  </li>
                      <li class="list-group-item property-list">
					    <span class="property">Breakable : </span>
					    <span class="value">{this.serviceProperties.contactBreakable}</span>
					  </li>
                      <li class="list-group-item property-list">
					    <span class="property">Fuel's price reduction : </span>
					    <span class="value">{this.serviceProperties.fuelOffers}</span>
					  </li>  					
                    </ul>					  
				  </div>
				</div>
			 </div>
			 <div class="col-12  col-sm-12  col-md-12 col-lg-12 detail-button-col" >
			   <button class="btn btn-info" onClick={this.openShop} >GoShop</button>
			 </div>
		   </div>
  	);	
  }
}