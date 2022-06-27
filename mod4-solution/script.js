var names=new Array();
names[0]="Silvia";
names[1]="Karol";
names[2]="Julia";
names[3]="Shadia";
names[4]="james";
names[5]="jonathan";
names[6]="ana";
names[7]="Luisa";
names[8]="Juliana";
names[9]="Tatiana";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}