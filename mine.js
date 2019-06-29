
//function validate()
//{
//    var username = document.getElementById("userName");
//    var regex =/^[A-Z][a-z]{2,8}$/
//    
//    if(regex.test(username.value)==true)
//        {
//            username.className ="form-control is-valid"
//        }
//    else
//        {
//             username.className ="form-control is-invalid"
//
//        }
//}

/*
function myInfo(){
		var	age=20;

	var name="osama";
	
	return name;
	}
	document.getElementById("test").innerHTML=myInfo();
	*/



//function clacBmi()
//{
//mass/height*2

//var markMass =210,
//	markHeight = 5,
//	
//	johnMass = 130,
//	johnHeight = 30;
//
//var markBmi= markMass/(markHeight*2) //10/2*5
//var johnBmi= johnMass/(johnHeight*2) //10/2*5
//
// console.log(markBmi);
// console.log(johnBmi);
//
//var markHeighrBmi = markBmi > johnBmi;
//console.log(" Mark Is Heighr BMI " + markHeighrBmi);
//




//code challenge 2
//
//var mikeScore=(190+120+103)/3,
//johnScore=(116+94+200)/3;
//,marryScore=()/3;

// mikeScore > johnScore ? console.log(mikeScore + "is heighest score " )
//? console.log("score is draw");

 // code challenge 3
 
//
//
//function tipCalc(bill) {
//  var tip;
// if (bill < 50){
// 	tipPestentage=.2;
//}
// else if(bill >= 50 && bill <= 200){
// 	tipPestentage=.15;
//}
// else{
//	 tipPestentage=.1;
//}
//	return tipPestentage*bill;
//}
//
//
//var billes= [50,48,285]
//var tips = [tipCalc(billes[0]),
//			tipCalc(billes[1]),
//			tipCalc(billes[2])
//			];
//var finalValue= [ billes[0]+tips[0],
//				 billes[1]+tips[1],
//				 billes[2]+tips[2]];
//
//console.log( finalValue);

//code challenge 4

//var mark = { 
//	fullName:'mark smith',
//	mass:300,
//	heights:140,
//	clacBMI:function(){
//	this.BMIs = this.mass / (this.heights*2);
//	return this.BMIs;
//	}
//	}
//
//var john = { 
//	fullName:'John smith',
//	mass:180,
//	heights:100,
//	clacBMI:function(){
//	this.BMIs = this.mass / (this.heights*2);
//	return this.BMIs;
//		}
//		}
//console.log(mark.clacBMI(),john.clacBMI());
//
//if (mark.BMIs > john.BMIs){
//console.log(mark.fullName +"  is mark heigher score");
//}
//else if (mark.BMIs < john.BMIs){
//console.log(john.fullName +"  is john heigher score");
//}
//	else {
//		console.log("   they are equal");
//}


//challenge code 5

/*
john ={
	fullName:"john smith",
	billes:[124,48,286,140,42],
	tipCalc: function(){
	this.tips = [];
	this.finalValue = [];
//	this.tips=this.finalValue = []   difrrent way of solu;
		
		for(var i=0; i<this.billes.length; i++){ // 1) i=0 , i<1 ,then i=0 >> 2) i=1 , i<2 ,then i=1 and so on  
			var percentage;
			var bill= this.billes[i];
			
			if (bill<50)
			{
			percentage=.2;
			}
			else if (bill>=50 && bill<=200)
			{
			percentage=.15;
			}
			else
			{
			percentage=.1;
			}
			this.tips[i]= percentage * bill
//			this.tips[i]= percentage * this.billes[i]
//			this.finalValue[i] = bill*percentage+bill;
			this.finalValue[i] = this.tips[i]+bill; //same of ^^^
}
}
}


			function tipAvrage(tips){
			var sum=0;
			for(var i=0; i<tips.length; i++)
			{

			sum= sum +tips[i];// tips =[2,4,5,7,9] >> sum=0+2=2 >>2+4=6>>6+5=11 ...
			}
			return sum / tips.length;
			}
		john.tipCalc();
		console.log(john);
		john.average=tipAvrage(john.tips);
		
		*/
//
//
//john ={
//	fullName:"john smith",
//	billes:[124,48,286,140,42],
//	birthYear:1998,
//	tipCalc: function(birthYear){
//				console.log(this)
//
//	console.log(2019-this.birthYear);
//		console.log(john)
//	}
//}
//
//john.tipCalc();







