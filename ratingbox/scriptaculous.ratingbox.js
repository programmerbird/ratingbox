
function RatingBox(id, options){
	this.input = $(id);
	if(options){
		this.options = options;
	}else{
		this.options = {};
	}
	this.container = null;
	this.init();
};

(function () {


var onHoverPoint = function (point, ev){
	this.setValue(point, true);
	this.resetHover();
};

var onClickPoint = function (point){
	this.setValue(point);
	if(this.options && this.options.onRate){
		this.options.onRate(this, point);
	}
	return false;
};

var btn = function (point, ratingBox){
	var a = Element('a', {'class': 'btn btn-'+point, 'href':'#'});
	a.onclick = onClickPoint.bind(ratingBox, point);
	a.observe('mouseover', onHoverPoint.bind(ratingBox, point));
	
	a.title = parseInt(point / 2, 10);
	if (point % 2==1) a.title += '½';
	a.title += ' star';
	if (point > 1); a.title += 's';
	return a;
};


RatingBox.prototype.resetHover = function (){
	var p = $(this.container.parentNode);
	if(p.select(':hover').length==0){
		this.setValue(this.input.value);
	}
	setTimeout(this.resetHover.bind(this),100);
};

RatingBox.prototype.init = function(){
	var $i = this.input;
	$i.addClassName('processed').hide();	
	var $c = Element('span');
	this.container = $c;
	for(var x=1; x<=10; x++){
		$c.insert({bottom: btn(x, this)});
	}
	$i.insert({'after': $c});
	this.setValue(this.input.value);
};

RatingBox.prototype.setValue = function (value, tmp) {
	try{
	if(!tmp) {
		if(this.input.value != value){
			this.input.value = value;
		}
	}
	if(this.options && this.options.onChange){
		this.options.onChange(this, value);
	}
	this.container.className = 'stars pts-'+value;
	}catch(e){}
};


})();

