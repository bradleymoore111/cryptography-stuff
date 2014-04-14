var idk = function (curkey,bitRate){
	curkey=curkey.toString();
	var key=curkey.split("");
	var sis=[];
	var jay=0;
	for(i=0;i<bitRate;i++){
		sis[i]=i;
	}
	for(i=0;i<bitRate;i++){
		var tempSwap=sis[i];
		jay 	=(jay+sis[i]+key[i%key.length])%bitRate;
		sis[i]  =sis[jay];
		sis[jay]=tempSwap;
	}
	return sis;
}