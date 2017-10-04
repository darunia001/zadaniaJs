document.getElementById("tak").innerHTML="hello world";

var p = document.getElementById("tak");

function myFunction() {
document.body.style.backgroundColor = "grey";
};


function jsFunction(a, b) {
	this.marka = a;
	this.model = b;
};

var car = new jsFunction("Bmw", "E65");

console.log(car.marka + " " + car.model);

(function() {
	console.log("Hello world");
}) ();


function info (obj) {
	return obj.marka + " " + obj.model + " " + obj.kolor;
};
var car2 = {
	model: "100",
	marka: "Audi",
	kolor: "Czarny",
	mod: function(obj) {
		this.model = obj.model;
		this.marka = obj.marka;
		this.kolor = obj.kolor;
		return this.marka + " " +this.model + " " +this.kolor;
	}
};


var car3 = {
	marka: "BMW",
	model: "E60",
	kolor: "bialy"
};

var arr = ["orange", "BLUE", "yellow"];

var x = new String("Mike");
var y = 109;
var bol = new Boolean(true);

console.log(typeof bol);
console.log(bol);
console.log(Object.prototype.toString.call(bol));

console.log(car3["marka"]);


var z, temp = " ";

for (z in car3) {
	temp +=car3[z] + " ";
	}
	
console.log(temp);

var stobj = new String("Hello Wiesiek");
var stobj2 = new String("Hello Wiesiek");

var t, temp2 =" ";

for(t in stobj) {
	temp2 +=stobj[t];
}

console.log(temp2);
console.log("siemanko");
console.log(stobj == stobj2);


var strimi = "Hello how are you today? How you'r feeling?\n";

console.log(strimi.slice(0,-2));
console.log(strimi.substr(strimi.indexOf("t"),3));
console.log(strimi.replace("Hello", "Hi"));


var n = (0.1*10 + 0.2*10)/10;

console.log(n);

var nu = 1.2346;
var nut = nu.toPrecision(2);
var te = "10";

console.log(typeof nut);
console.log(nut.slice(0,1));
console.log(nu.toExponential(2));
console.log(nu.toFixed(7));
console.log(nu.toPrecision(4));
console.log(nut+10);

console.log(Number(te)+100);

console.log(parseInt(te));

console.log(arr[arr.length-1]);
arr[arr.length] = "green";
console.log(Object.prototype.toString.call(arr.sort()));
console.log(arr.toString());
console.log(arr.length);
delete arr[0];

console.log(arr);
console.log(arr[0]);
console.log(arr.length);
arr.pop();
arr.push("blue");

console.log(arr);
console.log(arr.length);

console.log(arr.shift());
console.log(arr.shift());

console.log(arr);
console.log(arr.length);

arr.splice(0,1, "purple", "black");

var arr2 = ["white", "red", "cyan", "brown"];
var arr3 = arr2.concat(arr);

var arr4 = [2,1,10];

console.log(arr);
console.log(arr.reverse());

(function sortowanie() {
	arr4.sort(function(a,b) {return a-b})
	console.log(arr4);
})();

console.log(arr3);
var arr5 = arr3.slice(1,2);

console.log(arr5);
console.log(Math.pow(2,3));
console.log(new Date("1993-01-28"));

var born = Date.parse("1993-01-28");


console.log(new Date(born));
console.log(Boolean(1));

var con = 10;
var con2 = 10;
while(con>0) {
	con -= 1;
	console.log("x wynosi: " + con);
};

do { //At least executes once before checking the condition
	con2 -=1;
	console.log("Executed once " + con2);
} while(con2<9);


var text = "";
var i;

for (i=0; i<10; i++) {
	text = "The value of i: " + i + "\n";
	console.log(text);
};

console.log(text);
console.log(i);

console.log("siema"); 


var arr6 = "";

for(var i =0; i<arr2.length; i++) {
	if(arr2[i] == "cyan") {
		break;
	}
	arr6 +=arr2[i] + " ";
};

console.log(arr6);

arr6 = "";


for(var i =0; i<arr2.length; i++) {
	if(arr2[i] == "red") {
		continue;
	}
	arr6 +=arr2[i] + " ";
};

console.log(arr6);



function HelloFunction() {
	var u;
	u = document.getElementById("content").value;
	try {

		if(u>100) {
			teesdaf();
		}
	}
	catch(e) {
		console.log(e);
	}
	finally {
		console.log("Finally hello");
	}
};

var h = document.getElementById("par");

console.log("This is h1 element : " + h.innerHTML );

function hoveFunction() {
	h.style.textAlign = "center";
}

function leaveFunction() {
	h.style.textAlign = "left";
}

function dziala() {
	console.log("Clicking is working!");
} 


document.getElementById("span").addEventListener("click", function() {
	hoveFunction();
});


var timeDisplay = setInterval(function() {
	testowa();
}, 1000);

function testowa() {
	var dat = new Date();
	document.getElementById("taka").innerHTML = dat.toTimeString();
};

function testowa2() {
	console.log("I'm showing myself after 3 sec :)");
};


var timeOut = setTimeout(function() {
	testowa2();
},3000);

function testowa3() {
	var pr = prompt("What is your name: ", "Type your name here.");
	return pr;
};

function wyswietl(a) {
	console.log("Podales takie imie: " + a);
};

//Cookis set.

function setCookies(cookieName, value, days) {
	var d = new Date();
	d.setDate(d.getDate() + days);
	var expire = "expires=" + d.toUTCString();
	document.cookie = cookieName + "=" + value + "; " + expire;
	alert("Cookie valid till: " + d.toUTCString());
};



function getCookie(cookieName) {
	var name = cookieName + "=";
	var cookieArray = document.cookie.split('; | ;');
	var len = cookieArray.length;
	for(var i=0;  i<len; i++) {
		var c = cookieArray[i];
		if(c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
};

function checkCookie() {
	var userName = getCookie("username");
	if(userName != "") {
		document.getElementById("span").innerHTML = "Welcome again " +userName+ " !!";
	} else {
		userName = prompt("Please enter your name: ", "Type here.");
		if(userName != "" && userName != null) {
			setCookies("username", userName, 10);
			document.getElementById("span").innerHTML = "Welcome " +userName+ " !!";
		}
	}
};

function changeCookie() {
	var userName = prompt("Please enter your name: ", "Type here.");
	if(userName != "" && userName != null) {
		setCookies("username", userName, 10);
		document.getElementById("span").innerHTML = "Welcome " +userName+ " !!";
	}

};

function deleteCookie() {
	var d = new Date(); 
	d.setDate(d.getDate() -1);
	var userName = getCookie("username");
	document.cookie = "username=" + userName + "; expires=" + d.toUTCString();
	console.log("Cookie deleted.");
	console.log(userName);
};	

function showCookie(cookieName) {
	var name = cookieName + "=";
	var cookieArray = document.cookie.split(';');
	var len = cookieArray.length;
	for(var i=0;  i<len; i++) {
		var c = cookieArray[i];
	}
	console.log(c);
};
showCookie("username");




// odwrocenie kolejnosci w arrayu.

var stri = ["Hello", "World", "1", "2", "3", "4"];

function reverse(str) {
	var n = [];
	for(var i=str.length-1; i>=0; i--) {
		n.push(str[i]);
	}
	return n;
};

console.log(reverse(stri));

// reverse string
var sentence = "Hello World Mother Fucker";

function reversSent(s) {
	var sen = "";
	for(var i=s.length; i>=0; i--) {
		sen += s.charAt(i);
	}
	return sen;
};

console.log(reversSent(sentence));

function changeSide(s) {
	var arr = s.split(" ");
	var n = [];
	for(var i = arr.length-1; i>=0; i--) {
		n.push(arr[i]);
	}
	return n.join(" ");
};

console.log(changeSide(sentence));

//other solution:

function changeSide2(s) {
	return s.split(" ").reverse().join(" ");
};

console.log(changeSide2(sentence));


//If the number has an integer square root, take this, otherwise square the number.

var arr8 = [4,3,9,7,2,1];

function squareFunction(arr) {
	var arr2 = [], n, l;
	for(var i = 0; i<arr.length; i++) {
		n = Math.sqrt(arr[i]).toString();
		if(n.indexOf(".") == -1) {
			arr2[i] = Number(n);
		} else {
			l = arr[i] * arr[i];
			arr2[i] = l;
		}
	} 
	return arr2;
};

console.log(squareFunction(arr8));

//other solution
function squareOrSquareRoot(array) {
 	return array.map(x => {
 		const r = Math.sqrt(x);
 		return (r % 1 == 0) ? r : (x*x);
 	}); 
}

console.log(squareOrSquareRoot(arr8));



// Zadanie 1. Find max.

function findMax2(tab) {
	return Math.max.apply(null, tab);
}

var tab3 = [4,1,38,2,1,423,534];

function findMax(tab) {
	var max = tab[0];
	for(var i = 1; i<tab.length; i++) {
		max = (tab[i] > max) ? tab[i] : max;
	}
	return max;
}

console.log(findMax2(tab3));

function findMin(tab) {
	var min = tab[0];
	for(var i = 1; i<tab.length; i++) {
		min = (tab[i] < min) ? tab[i] : min;
	}
	return min;
}

console.log(findMin(tab3));

//Zadanie 2. Unikalne wartosci.
var tab5 = [1,67,3,2,1,45,3,9,9,0,19,9];

function theUniq(tab) {
	var seek = [];
	var count=0;
	for(var i = 0; i<tab.length; i++) {
		for(var j = 0; j<tab.length; j++) {
			if(tab[i] != tab[j]) {
				count++;
			}
		}
		if(count == tab.length-1) {
			seek.push(tab[i]);
		}
		count = 0;
	}
	return seek;

};

console.log("Najrzadziej wystepujaca liczba to: " +theUniq(tab5));


//Zadanie 3.

function theMost(tab) {
	var count = 0;
	var above = 0;
	var seek=[];

	for(var i = 0; i<tab.length; i++) {
		for(var j = i+1; j<tab.length; j++) {
			if(tab[i] == tab[j]) {
				count++;
			}
			if (count>above) {
				above = count;
				seek = tab[i];
			}
		}

		count = 0;
	}
	return seek;
}




console.log("Najczesciej wystepujaca liczba to: " +theMost(tab5));


//Zadanie 4. Reverse.

var tab4 = [3,7,9,14];

function sortt(tab) {
	return tab.reverse();
}

console.log(sortt(tab4));


//Zadanie 5. Wspólne.

var t1 = [3,7,9,14,54];
var t2 = [9,5,4,7,1,2,3,4,5,14];

function itemm(a,b) {
	var len = a.length;
	var len2 = b.length;
	var seek = [];

	for(var i = 0; i<len; i++) {
		for(var j = 0; j<len2; j++) {
			if(a[i] == b[j]) {
				seek.push(a[i]);
				j= len2;
			}
		}
	}
	return seek;
}


console.log(itemm(t1,t2));

// Opposite for fun 

function itemOpp(tab1, tab2) {
	var len = tab1.length;
	var len2 = tab2.length;
	var count = 0;
	var seek = [];

	for(var i = 0; i<len; i++) {
		for(var j = 0; j<len2; j++) {
			if(tab1[i] != tab2[j]){
				count++;
			}
			if(count == len2) {
				seek.push(tab1[i]);
			}
		}
		count =0
	}
	
	for(i = 0; i<len2; i++) {
		for(j = 0; j<len; j++) {
			if(tab2[i] != tab1[j]){
				count++;
			}
			if(count == len) {
				seek.push(tab2[i]);
			}
		}
		count =0
	}

	for(i = 0; i<seek.length; i++) {
		for(j = i+1; j<seek.length; j++) {
			if(seek[i] == seek[j]) {
				seek.splice(i,1);
				i--;
			}
		}
	}
	return seek;
}

console.log("Unikalne wartosci z obu tablic bez powtorzen to: " + itemOpp(t1,t2));


//Zadanie 6. 

var tab1 = [1,3,5,7,9];
var tab2 = [2,4,6,8,10];

function ran(a,b) {
	var len1 = a.length;
	var len2 = b.length;
	var k = 0;
	var tab = a.slice();
		for(var j = 1; j<len1+len2; j+=2) {
			tab.splice(j,0,b[k++]);
		}		
	return tab;
};

console.log(ran(tab1,tab2));

//Zadanie 7.
console.time("fibon");
function fibon(n) {
	//var n = prompt("Podaj wyraz ciagu:", "Tu wpisz liczbe ciagu.");
	var tab = [];
	tab[0] = 1;
	tab[1] = 1;

	for(var i =2; i<n; i++) {
		tab[i] = tab[i-1] + tab[i-2];
	}
	return tab[n-1];
}

console.log("Fibon iteral: " +fibon(30));
console.timeEnd("fibon");
//


// Average from array.
var arr9 = [2,4,6];

function avrg(arr) {

	if(arr.length == 0) {
		return 0;
	}
	else if (typeof arr === "string") {
		return "incorect array";
	}
	var l = arr.length;
	var sum = 0;
	for(var i = 0; i<l; i++) {
		sum += arr[i];
	}
	return sum/l;
}

console.log(avrg(arr9));

//Other solution:

function avrg2(arr) {
	var sum = arr.reduce((a,b) => a+b, 0);
	return sum/arr.length;
}

console.log(avrg2(arr9));


//Seats in theather 

function seats(nCols, nRows, col, row) {
	if( ((1 <= nCols  && nCols <= 1000) && (1<= nRows && nRows <= 1000))
		&& ((1<= col && col<= nCols) && (1<= row && row <= nRows)) ) {
		return ((nCols - col +1) * (nRows - row));
	}
	else {
		alert("Invalid input, try again");
		return false;
	}
}


console.log(seats(16,11,5,3));

//Basic Mathematical Operations

function basic(o,v1,v2) {
	switch(o) {
		case '+':
			return v1+v2;
			break;
		case '-':
			return v1-v2;
			break;
		case '*':
			return v1*v2;
			break;
		case '/':
			return v1/v2;
			break;
		default:
		console.log("Invalid input");
		return 0;
	}
}

console.log(basic('.', 2, 3));
//Other solution 

function basicOp(o,a,b) {
	return eval(a+o+b);
}
console.log(basicOp('+',3,5));

//Simple Fun #88: Sort By Height

var arr10 = [-1, 150, 190, 170, -1, -1, 160, -1, 180];

function sortByHeight(arr) {
	var tree = [];
	for(var i = 0; i<arr.length; i++) {
		if(arr[i] == -1) {
			tree.push(i);
		}
	}
	for(var i = 0; i<arr.length; i++) {
		if(arr[i] == -1) {
			arr.splice(i,1);
			i--;
		}
	}
	arr.sort(function(a,b) {
		return a-b;
	});

	for(i = 0; i<tree.length; i++) {
		arr.splice(tree[i],0,-1);
	}
	return arr;
}

console.log(sortByHeight(arr10));
//other solution 

function sortByHeight2(a) {
   var na=a.slice().sort((a,b)=>a-b).filter(a=>a!=-1), p=0;
   return a.map(a=>a==-1?-1:na[p++])
}

console.log(sortByHeight2(arr10));

// annulusArea

var c = 1;
function annulusArea(a) {
	if(a < 1) {
		return 0;
	}
	else {
		var p = ((a/2)*(a/2)) * Math.PI;
		return Number(p.toFixed(2));
	}
}

console.log(annulusArea(c));


//VAlid Pin

var pin = "345990";
function validatePIN(s) {
	var l = s.length;
	var valid = /[\D]/;
	if(l == 4 || l == 6) {
		if(s.search(valid) == -1) {
			return true;
		}
	}
	return false;
}

console.log(validatePIN(pin));

//other solution 

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}
//console.log(validatePIN(pin));

var ss = "dumas.mama";
function isTrue(s) {
	var valid = /\.mama$/;
	console.log(s.match(valid));
}

isTrue(ss);

//REpeat n of string
var str2 = "Siema";

function repeatStr (n, s) {
  return s.repeat(n);
}

console.log(repeatStr(2,str2));

// The same x and o in string 

var test1 = "mdel";

function XO(str) {
	var str = str.toLowerCase();
	var xc = 0;
	var xo = 0;
	for(var i =0; i<str.length; i++) {
		if(str.charAt(i) == "x") {
			xc++;
		}
		if(str.charAt(i) == "o") {
			xo++;
		}
	}
	if(xo == xc) {
		return true;
	}
	else {
		return false;
	}
}

console.log(XO(test1));

// other solution 

function XO2(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

console.log(XO2(test1));

//The museum of incredible dull things

var dull = [];

function museum(a) {
	var min = a[0];
	for(var i = 0; i<a.length; i++) {
		min = (a[i] < min) ? a[i] : min;
	}
	a.splice(a.indexOf(min),1);
	return a;
}

console.log(museum(dull));

// other solution 

function removeSmallest(numbers) {
  if(!numbers)return [];
  var min=Math.min.apply(null,numbers);
  numbers.splice(numbers.indexOf(min),1);
  return numbers;
}

console.log(removeSmallest(dull));

//Reverse or rotate?

var revst = "7330499108728157645517604432769058026589";
console.time("revrot");
function revrot(s,sz) {
	if((sz <= 0 || s == "") || sz > s.length) {
		return "";
	}
	var p = [];
	var p2 = [];
	var temp = [];
	var l = sz;
	var count = 0;
	var sum = 0;
	var n = 0;
	var nnn = 0;
	var el = "";
	var len = parseInt(s.length/sz);
	for(var i = 0; i<s.length; i+=sz) {
		p.push(s.slice(i,l));
		l+=sz;
		count ++;
		if(count == len) {
			break;
		}
	}
	for(i = 0; i<p.length; i++) {
		el = p[i];
		for (var j = 0; j<sz; j++) {	
			n = Number(el.charAt(j));
			nnn = n*n*n;
			sum +=nnn;
		}
		p2.push(sum/2);
		sum = 0;
	}
	for(i = 0; i<p2.length; i++) {
			if(p2[i]%1 == 0) {
				temp = p[i].split("").reverse().join("");
				p[i] = temp;
			}
			else {
				temp = p[i].split("");
				temp.push(temp[0]);
				temp.splice(0,1);
				p[i] = temp.join("");
			}
	}
	return p.join("");
}

console.log(revrot(revst,8));
console.timeEnd("revrot");

// other solution 

/*
function revrot2(str, sz) {
  if (sz < 1 || sz > str.length) 
    return '';

  let reverse = s => s.split('').reverse().join('');
  let rotate  = s => s.slice(1) + s.slice(0, 1);
  let sum_cubes = c => c.split('').reduce((a, b) => a + +b ** 3, 0); 

  return str
    .match(new RegExp('.{' + sz + '}', 'g'))
    .map(c => sum_cubes(c) % 2 ? rotate(c) : reverse(c))
    .join('');
}

console.log(revrot2(revst,8));

*/
console.time("revrot3");
function revrot3(str, sz) {
   if(!sz||sz<0||sz>str.length)return '';
   var arr=str.match(new RegExp('\\d{'+sz+'}','g'));
   return arr.map(function(v) {
     if(v.split('').reduce((s,v)=>s+v*1,0)%2===0){
       return v.split('').reverse().join('');
     }
     else return v.slice(1)+v[0];
   }).join('');
}

console.log(revrot3(revst,8));
console.timeEnd("revrot3");



//map 

var bers = ["4","1","2","5","9"];

function toCubes(arr) {
	var map1 = arr.map(x => {
		return Math.pow(x,3);
	})
	return map1;
}

console.log(toCubes(bers));

// reduce 

function redd(arr) {
	return arr.reduce((s, x) => s+x*1/arr.length,0); //0 is initial value for s;
}

console.log("Reduce: " +redd(bers));

var str5 = "Hopper, Grace\nMcCarthy, John\nRitchie, Dennis";
console.log(str5.replace(/([\w]+,) ([\w ]+)/g, "$2 $1"));


// napisz program ktory z wczytanych 5 liczb z przecinkiem nastepnie wypisze liczbe najblizsza sredniej tych liczb ROZJEBANE :)

var flo = [6.5,3.5,0,15,0];
var flo2 = [1.5,3.14,7.5,1.25,3.42];

function srednia(arr) {
	var srednia = arr.reduce((s,x) => s+x/arr.length,0);
	arr.push(srednia);
	arr.sort((a,b) => a-b);
	var index = arr.indexOf(srednia);
	var min = Math.abs(arr[index] - arr[index - 1]);
	var max = Math.abs(arr[index] - arr[index + 1]);
	console.log("Srednia to: " +srednia);
	if(min == max) {
		return arr[index -1] + " and " +arr[index +1];
	}
	else if(min<max) {
		return arr[index -1];
	}
	return arr[index +1];
}

console.log(srednia(flo2));


//The highest profit wins!

var testarr = [1,-2,3,4,5,0];

function minMax(arr) {
	var min = Math.min.apply(null, arr);
	var max = Math.max.apply(null, arr);
	var arr1 = [];
	arr1.push(min);
	arr1.push(max); 
	return arr1;
}

console.log(minMax(testarr));

// other solution the best 

function minMax2(arr){
  return [Math.min.apply(null, arr), Math.max.apply(null, arr)];
}

//console.log(minMax2(testarr));
//ciekawe rozwiazanie
function minMax3(arr){
  return arr.reduce(function(p, e){
    return [p[0] < e ? p[0] : e, p[1] > e ? p[1] : e];
  },[arr[0], arr[0]]);
}

console.log(minMax3(testarr));

//Playing with digits

function digPow(n,p) {
	var k = n.toString().split('').reduce((s,v) => s + Math.pow(v,p++),0)/n;
		return (k % 1 == 0) ? k :-1;
}

console.log(digPow(695,2));

//replace regex example

var stock = "1 lemon, 2 cabbages, and 101 eggs";
function minusOne(match, amount, unit) { //(match is global argument; The matched substring from RegEx)
  amount = Number(amount) - 1;
  if (amount == 1) // only one left, remove the 's'
    unit = unit.slice(0, unit.length - 1);
  else if (amount == 0)
    amount = "no";
  return amount + " " + unit;
}
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));
// → no lemon, 1 cabbage, and 100 eggs

 //#4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

 var testsen = "Hi Marek!% How are you?!!!!!!!";

//solution

const remove = s => s.replace(/!+/g, "")+"!";

//console.log(testsen.match(/!(?!$)/g, ""));
function removeex(s,e) {
	var reg = new RegExp(''+e+'(?!$)','g');
	if(x[x.length-1] != e) {
		s += e;
	}
	return s.replace(reg, "");
}


console.log(removeex(testsen,"!"));


//Invert values

function invertValue(arr) {
	arr.push(-7);
	return arr.map(x => (x>0)? -Math.abs(x): Math.abs(x));
}

console.log(invertValue(testarr));

//other solution
function invert(array) {
   return array.map( x => x === 0 ? x : -x);
}

//Count of positives / sum of negatives
console.log(invert(testarr));

var arrobj = [1,2,6,-5,-15,-54];


function countPN(arr) {
	if(arr.length == 0 || arr == null) {
		return [];
	}

	var result1 = 0;
	var result2 = 0;
	
	for(var i = 0; i<arr.length; i++) {
		if(arr[i] > 0) {
			result1 ++;
		}
		else {
			result2 += arr[i];
		}
	}
	return [result1,result2];
}

console.log(countPN(arrobj));

//Pre-FizzBuzz Workout #1

function preFizz(n) {
	if(n<0 || n == undefined) { //(null == undefined) == true;
		return [];
	}
	var tab = [];
	for(var i = 0; i<n; i++) {
		tab[i] = i+1;
	}
	return tab;
}

console.log(preFizz(null));

//other solution 

function preFizz2(n) {
	return Array(n).fill().map((currentValue, index) => index +1);
}


//console.log(preFizz2(10));

//Conditional (ternary) Operator example

function fizzBuzzTernary() {  
  for (var i = 1; i <= 100; i++) {
    var f = i % 3 == 0, b = i % 5 == 0;
    console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
  }
}

//fizzbuzzrecursive example

//function fizzBuzzRecursive(start, end) {
//
//  // base check
//  if (start > end || typeof start != ‘number’ || typeof end !=  ‘number’) return
//  // do fizzbuzz
//  if ( start % 3 == 0 && start % 5 == 0 ) console.log(‘FizzBuzz’)
//  else if ( start % 3 == 0 ) console.log(‘Fizz’)
//  else if ( start % 5 == 0 ) console.log(‘Buzz’)
//  else console.log(start)
//  // call recursively
//  fizzBuzzRecursive(start + 1, end) // cannot use ++
//}

//fizzBuzzTernary();

//Fake binary 
var fake  = "45385593107843568";

function fakeBin(x){
	return x.split('').map(x => {
		return (x >= 5) ? 1 :0;
	}).join('');
}

//console.log(fakeBin(fake));

//other solution
function fakeBin2(x) {
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}
//interesting one 
function fakeBin3(x) {
  return x.replace(/\d/g, n => "0000011111"[n])
}

// fake bin to dec for fun


function fakeBin2Dec(x){
	var res = x.split('').map(x => {
		return (x >= 5) ? 1 :0;
	});
	var l = 1;
	console.log("Pseudo liczba binarna: " + res.join(''));
	var wag = res.reverse().map((x, ind) => Math.pow(2,ind));
	var dec = res.map((x,ind) => (x==1) ? x = wag[ind] : 0);
	var sum = dec.reduce((s,x) => s+x, 0);
	return "Jest rowna liczbie: " +sum;
}
console.log(fakeBin2Dec(fake));

//Holiday VIII - Duty Free

function dutyFree(normPrice, discount, hol){
	return Math.floor(hol/normPrice/discount*100);
}

console.log(dutyFree(12,50,1000));

//Sum without highest and lowest number

var sumarr = [1,2,5,6,23];

function sumArray(arr) {
	if(arr == undefined || arr.length == 0 || arr.length == 1) {
		return 0;
	}
	return arr.reduce((s,x) => s+x, 0) - Math.min.apply(null, arr) - Math.max.apply(null, arr);
}

console.log(sumArray(sumarr));

//other solution 

sumArray2 = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0;

//console.log(sumArray2(sumarr));

//Convert number to reversed array of digits

var digits = 234325;

function digitize(n) {
  return n.toString().split('').map(x => x * 1).reverse();
}

console.log(digitize(digits));

//other solution 

function digitize2(n){
  return (n + '').split('').map(Number).reverse();
}

console.log(digitize2(digits));

//Position aflabeth



function posA(a) {
	var alphabet = "0abcdefghijklmnopqrstuvwxyz";
	return alphabet.indexOf(a);
}

console.log(posA('f'));

//other solution 

function position2(a) { 
	return "Position of alphabet: "+(a.charCodeAt(0)-96)
}

function _if(bool, func1, func2) {
  return bool ? func1() : func2();
}

_if(true, function(){console.log("True")}, function(){console.log("false")})

//other solution 

var _if = function IF(condition, isTruthy, isFalsey) {
  (condition ? isTruthy : isFalsey)();
};

//Moves in squared strings (I)
var s = "abcd\nefgh\nijkl\nmnop"

function vertMirror(strng) {
	var reg = /[^\n]+/g;
	var arr =strng.match(reg);
	return arr.map(x => x.split('').reverse().join('') + "\n").join('').slice(0,-1);
}

//console.log(vertMirror(s));

function horMirror(strng) {
    return strng.split('\n').reverse().join('\n');
}

//console.log(horMirror(s));

function oper(fct, s) {
    return fct(s);
}

//console.log(oper(vertMirror, s));

//other solution 

function vertMirror2(str) {
    return str.split('\n')
      .map(x => x.split('').reverse().join(''))
      .join('\n')
}
function horMirror2(str) {
    return str.split('\n')
      .reverse()
      .join('\n')
}
function oper2(fct, s) {
    return fct(s)
}
//test
console.log(s.split('\n').join('1'));


// fib test rekurencja 
console.time("fibb");
function fibb(n) {
	if(n == 1 || n == 2) return 1;
	else return fibb(n-1) + fibb(n-2);
}

console.log("Fibon: " +fibb(30));
console.timeEnd("fibb");

//silnia rekurencja for fun

function silnia(s) {
	if(s == 0) return 1;
	else return s * silnia(s-1);
}
console.log("Silnia: " +silnia(5));
//console.log(window.performance.memory);

//Mumbling 

var abcde = "siemanko co u ciebie";
function accum(s) {
	return s.split('').map((x,ind) => x.toUpperCase() + Array(ind + 1).join(x.toLowerCase())).join('-');
}

console.log(accum(abcde));

// Get the Middle Character


function getMiddle(s) {
	if(s.length < 0 || s.length > 10)  {
		return 0;
	}
	if(s.length % 2 == 0) {
		return s.slice(s.length/2 -1, s.length/2 +1);
	}
	else {
		return s.slice(Math.floor(s.length/2), Math.ceil(s.length/2));
	}
}


console.log(getMiddle(abcde));

//Jaden Casing Strings


String.prototype.toJadenCase = function () {
  return this.split(' ').map(x => x.replace(x.charAt(0), x.charAt(0).toUpperCase())).join(' ');
};	

console.log(abcde.toJadenCase());

//other solution 

/*
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}
*/

//Vovel count

function getCount(str) {
  var vowelsCount = 0;
  for(var i = 0; i<str.length; i++) {
  	if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
  		vowelsCount++;
  	}
  }
  return vowelsCount;
}

console.log(getCount(abcde));

//other solution

function getCount2(str) {
  return (str.match(/[aeiou]/ig)||[]).length; // if regexp doesn't match anything it evaluate to null so snull ||(or) [] (empty arr) ==> [].length = 0;
}

//Descending Order

digits = 234325;

function descendingOrder(n){
  return +n.toString().split('').sort().reverse().join('');
}

console.log(descendingOrder(digits));

//other solution

function descendingOrder2(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

//Find the next perfect square!


function findNextSquare(sq) {
	return (Math.sqrt(sq)%1 == 0) ? Math.pow(Math.sqrt(sq) +1, 2)  : -1
}

console.log(findNextSquare(121))

//other solution 

function findNextSquare2(sq) {
  return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
}

var filterli = [1,2,'a','b','32'];
//List Filtering

function filter_list(l) {
	for(var i = 0; i<l.length; i++) {
		if(typeof l[i] != 'number') {
			l.splice(i,1);
			i--;
		}
	}
	return l;
}

console.log(filter_list(filterli));

//other solution

function filter_list2(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}

// Morse code
var mcod = '.... . -.--   .--- ..- -.. .';

function decodeMorse(m) {
	var alphabet1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ";
	var morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--..",".----","..---","...--","....-",".....","-....","--...","---..","----.","-----","  "];

var me = m.match(/[^\w ]+|  /g);
var result = [];
console.log(me);
for(var i = 0; i<me.length; i++) {
	for(var j = 0; j<morse.length; j++) {
		if(me[i] === morse[j]) {
			result.push(alphabet1[j]);
		}
	}
}
return result.join('');


}

console.log(decodeMorse(mcod));

//Find the odd int occured only one
var findo = [1,1,2,2,3,3,4,4,4,4,5,5,5,6,6,6,6];

function findOdd(a) {
	var d = 0;
	var c = 0;
	var seek = 0;

	for(var i = 0; i<a.length; i++) {
		for(var j = 0; j<a.length; j++) {
			if(a[i] != a[j]) {
				c++;
			}
		}
		if(c%2 == 0 && c >= d) {
			d = c;
			seek = a[i];
		}
		c = 0;
	}
	return seek;
}


console.log(findOdd(findo));

//other solution - clever

const findOdd2 = (xs) => xs.reduce((a, b) => a ^ b); // operator ^ - means XOR;

console.log(findOdd2(findo));

//other solution2 - I think this is the best solution

function findOdd3(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}

console.log(findOdd3(findo));

var cars = {
	1: true
};

console.log(cars["1"] + " a teraz +1 " + cars["1"]++);
console.log(cars["1"]);

//Adding values of arrays in a shifted way

var multiarr = [[1,2,3,4,5,6], [7,7,7,7,7,7]];
var shif = 3;

function addingShifted (a, s) {
	var r = [];
	var start = 0;
		for(var x of a) {
			for (var i = 0; i<x.length; i++) {
				r[start + i] = (r[start + i] || 0) + x[i];
			}
			start +=s;
		}
	
	return r;
}

console.log(addingShifted(multiarr,shif));

//solution

function addingShifted2 (arrays, shift) {
  let result = [];
  let start = 0;
  for (let array of arrays) {
    for (let i = 0; i < array.length; i += 1) {
      result[start + i] = (result[start + i] || 0) + array[i];
    } 
    start += shift;
  }
  return result;
}


//Two to One

var s3 = "xyaabbbccccdefwwx";
var s4 = "xxxxyyyyabklmopq";


function longest(s1,s2) {
	var p = s1+s2;
	return p.split('').sort().join('').match(/([a-z])(?!\1)/g).join('');
}	

console.log(longest(s3,s4));

//other solution

function longest2(s1, s2) {
  // your code
  s3 = s1 + s2;
  s4 = s3.split("");
  s4 = s4.sort().filter(function(element, index, array){
    return element !== array[index - 1];
  });
  return s4.join("");
}

//interesting solution
function longest3(s1, s2) {
  return (s1+s2).split('').sort().join('').replace(/(.)\1+/g, '$1');
}

//one more

function longest4(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}


//test
//console.log(new Set("11122244455557"));



//Isogram
var iso = "siemankoo";

function isogram(s) {
	return /^(?:([A-Za-z])(?!.*\1))*$/gi.test(s);
}

/*
Assert position at the beginning of a line (at beginning of the string or after a line break character) «^»
Match the regular expression below «(?:([A-Z])(?!.*\1))*»
   Between zero and unlimited times, as many times as possible, giving back as needed (greedy) «*»
   Match the regular expression below and capture its match into backreference number 1 «([A-Z])»
      Match a single character in the range between “A” and “Z” «[A-Z]»
   Assert that it is impossible to match the regex below starting at this position (negative lookahead) «(?!.*\1)»
      Match any single character that is not a line break character «.*»
         Between zero and unlimited times, as many times as possible, giving back as needed (greedy) «*»
      Match the same text as most recently matched by capturing group number 1 «\1»
Assert position at the end of a line (at the end of the string or before a line break character) «$»
*/




//console.log(isogram(iso));

//other solution

function isIsogram2(str){ 
  return !/(\w).*\1/i.test(str)
}

//test
//console.log(iso.match(/(foo) (bar) \1 \2/));

//Maskify

var mas = "123456";

function maskify(s) {
	var c = s.length -4;
	var rep = s.substr(0,c);
	console.log(s.slice(0,2));
	if(rep == -1 || rep == 0) {
		return s;
	}
	else {
		return s.replace(rep, Array(c+1).join("#"));
	}
}

console.log(maskify3(mas));
// other solution

function maskify2(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

//interesting one

function maskify3(cc) {
	console.log(cc.match(/(?=.{5})../g));
	console.log(cc.match(/.(?=....)/g));
  return cc.replace(/.(?=....)/g, '#'); // x(?=y) - Matches 'x' only if 'x' is followed by 'y'. This is called a lookahead.
}


//Growth of a Population


function nbYear(p0, percent, aug, p) {
	var count = 0;

	while(p0<p) {
		p0 += p0*percent/100 + aug;
		count ++;
	}
	return count;
}


console.log(nbYear(1500000, 0.25, 1000, 2000000))


//other solution on for loop

function nbYear2(p0, percent, aug, p) {
	for(var i = 0; p0<p; i++) {
		p0 += p0*percent/100 + aug;
	}
	return i;
}


//Multiples of 3 and 5

function multipleof(n) {
	var arr = [];
	var n1 = 3;
	var n2 = 5;
	var l = 0;
	var l2 = 0;
	var t = Math.floor((n-1)/n1);
	var f = Math.floor((n-1)/n2);

	for(var i = 0; i<t; i++) {
		arr.push(l+n1);
		l += n1;
	}
	for(i = 0; i<f; i++) {
		arr.push(l2+n2);
		l2 += n2;
	}
	for(i=0; i<arr.length; i++) {
		for(var j = i+1; j<arr.length; j++) {
			if(arr[i] == arr[j]) {
				arr.splice(i,1);
				i--;
			}	
		}
	}
	console.log(arr);
	return arr.reduce((s,x) => s+x,0);
}

console.log(multipleof(16));

//other solution

function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++) {
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}

//Street Fighter 2 - Character Selection

fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

moves = ["up","left","down","right","up","left","down","right"];

//console.log(fighters[1].slice(0,1));

function streetFighterSelection(fighters, position, moves){
	var p1 = position[0];
	var p2 = position[1];
	var len = fighters[0].length;
	var len2 = fighters[1].length;
	var res = [];

	for(var i=0; i<moves.length; i++) {
		switch(moves[i]) {
			case 'up':
				if(p1 == 1) p1 = 0;
				break;

			case 'down':
				if(p1 == 0) p1 = 1;
				break;
				
			case 'right':
				if(p2 == len2-1) p2 = 0;
				else p2 +=1;
				break;

			case 'left':
				if(p2 == 0) p2 = len2-1;
				else p2 -=1;
				break;
				
		}
		res.push(fighters[p1][p2]);
	}
	return res;
}
console.log(streetFighterSelection(fighters,[0,0],moves));

//other solution

function streetFighterSelection2(fighters, position, moves){
  var res = [], i = position[0], j = position[1];
  for (var k = 0; k < moves.length; k++) {
      if (moves[k] === 'up')
         i = i === 1 ? 0 : i;
      else if (moves[k] === 'down')
         i = i === 0 ? 1 : i;
      else if (moves[k] === 'left')
         j = j === 0 ? fighters[0].length - 1 : j - 1;
      else if (moves[k] === 'right')
         j = j === fighters[0].length - 1 ? 0 : j + 1;
      res.push(fighters[i][j]);
  }
  return res;
} 

//Harshad or Niven numbers


var Harshad = ( function() {
  'use strict';

  return {

    isValid: function( number ) {
    	return (number/(number.toString().split('').reduce((s,x) => s+x*1,0))%1) ? false :true;
    },

    getNext: function( number ) {
    	var l = 0;
    	while(n1%1 !=0) {
    		l++;
    		var n1 = (number+l)/(number+l).toString().split('').reduce((s,x) => s+x*1,0);	
    	}
    	
    	return number +l;
    },

    getSerie: function( count, start ) {
    	var l = 1;
    	var tab = [];
    	if(arguments.length == 2) {
    		l = start +1;
    	}
    	for(var i = 0; i<count; i++) {
    		if(l/(l.toString().split('').reduce((s,x) => s+x*1,0))%1 ==0 ) {
    			tab.push(l);
    		} 
    		else i--;

    		l++;	
    	}
    	return tab;
    }
};

} () );

console.log(Harshad.isValid(11));
console.log(Harshad.getNext(13));
console.log(Harshad.getSerie(3,1000));

//other solution

var Harshad2 = { 
  isValid(n) { return n % (''+n).split('').reduce((s, d) => s + +d, 0) == 0; },
  getNext(n) { while (!this.isValid(++n)); return n; },
  getSerie(count, start = 0) { 
    for (var list = []; list.length < count; list.push(start))
      start = this.getNext(start);
    return list;
  }
}

//training
var Harshad4 = {
	isValid(n) {return n % (''+n).split('').reduce((s,x) => s+x*1,0) == 0; },
	getNext(n) {while(!this.isValid(++n)); return n},
	getSerie(count, start = 0) { // default parameter value, when no parameter pass to the function start become 0, otherwise become parameter passed.
		for(var arr = []; arr.length<count; arr.push(start)) 
			start = this.getNext(start);
		return arr;
	}
}

console.log(Harshad4.getSerie(3,1000));

//other solution 

var Harshad3 = ( function() {
  'use strict';

  return {
    isValid: function( number ) {
      var total = 0;
      number.toString().split('').forEach((num) => {
         total += Number(num); 
      });
      return (number/total) % 1 === 0;
    },
    getNext: function( number ) {
      number++;
      return this.isValid(number) ? number: this.getNext(number);
    },
    
    getSerie: function( count, start = 0, arr = [] ) {
      if (count > 0) {
        arr.push(this.getNext(start));
        return this.getSerie(--count, this.getNext(start), arr);
      }
      return arr;
    }
  };

} () );


//Vasya - Clerk

var sline = [25, 25, 25, 50, 100, 100];

function tickets(line) {
	var bill = 25;
	var obj = {};
	var sub = 0;

	for(var i = 0; i<line.length; i++) {
		if(line[i] == bill) {
			obj[bill] ? obj[bill]++ : obj[bill] = 1;
		}
		else {
			sub = line[i] - bill;
			switch(sub) {
				case 25:
				if(obj[25] > 0) {
					obj[25] --;
					obj[line[i]] ? obj[line[i]]++ :obj[line[i]] =1;
				}
				else return "NO";
				break;

				case 75:
				if(obj[50] > 0 && obj[25] > 0) {
					obj[50] --;
					obj[25] --;
					obj[line[i]] ? obj[line[i]]++ :obj[line[i]] =1;
				}
				else {
					if(obj[25] >2) {
						obj[25] -=3;
					}
					else return "NO";
				}
				break;
		}
	}
}
return "YES";
}

console.log(tickets3(sline));


//other solution

function tickets2(peopleInLine) {
  var bills = [0, 0, 0]
  for (var i = 0; i < peopleInLine.length; i++) {
    switch (peopleInLine[i]) {
      case 25:
        bills[0]++
        break
        
      case 50:
        bills[0]--
        bills[1]++
        break
        
      case 100:
        bills[1] ? bills[1]-- : bills[0] -= 2
        bills[0]--
        break
    }
    
    if (bills[0] < 0) {
      return 'NO'
    }
  }
  
  return 'YES'
}

// other solution on OOB

function Clerk(name) {
  this.name = name;
  
  this.money = {
    25 : 0,
    50 : 0,
    100: 0 
  };
  
  this.sell = function(element, index, array) {
    this.money[element]++;

    switch (element) {
      case 25:
        return true;
      case 50:
        this.money[25]--;
        break;
      case 100:
        this.money[50] ? this.money[50]-- : this.money[25] -= 2;
        this.money[25]--;
        break;
    }
    return this.money[25] >= 0;
  };
}

function tickets3(peopleInLine){
  var vasya = new Clerk("Vasya");
  return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO"; //The every() method checks if all elements in an array pass a test (provided as a function).The every() method executes the function once for each element present in the array.
}

// Combination of sets

var trdist = [50, 55, 57, 58, 60];



function k_combinations(set, k) {
	var i, j, combs, head, tailcombs;
	console.log("Wywolanie funkcji");
	// There is no way to take e.g. sets of 5 elements from
	// a set of 4.
	if (k > set.length || k <= 0) {
		return [];
	}
	
	// K-sized set has only one K-sized subset.
	if (k == set.length) {
		return [set];
	}
	
	// There is N 1-sized subsets in a N-sized set.
	if (k == 1) {
		combs = [];
		for (i = 0; i < set.length; i++) {
			combs.push([set[i]]);
		}
		return combs;
	}
	
	// Assert {1 < k < set.length}
	
	// Algorithm description:
	// To get k-combinations of a set, we want to join each element
	// with all (k-1)-combinations of the other elements. The set of
	// these k-sized sets would be the desired result. However, as we
	// represent sets with lists, we need to take duplicates into                                           
	// account. To avoid producing duplicates and also unnecessary
	// computing, we use the following approach: each element i
	// divides the list into three: the preceding elements, the
	// current element i, and the subsequent elements. For the first
	// element, the list of preceding elements is empty. For element i,
	// we compute the (k-1)-computations of the subsequent elements,
	// join each with the element i, and store the joined to the set of
	// computed k-combinations. We do not need to take the preceding
	// elements into account, because they have already been the i:th
	// element so they are already computed and stored. When the length
	// of the subsequent list drops below (k-1), we cannot find any
	// (k-1)-combs, hence the upper limit for the iteration:
	combs = [];
	for (i = 0; i < set.length - k + 1; i++) {
		// head is a list that includes only our current element.
		head = set.slice(i, i + 1);
		// We take smaller combinations from the subsequent elements


		tailcombs = k_combinations(set.slice(i + 1), k - 1);
		console.log("tail wywolanie  " +i + " " +tailcombs);

		// For each (k-1)-combination we join it with the current
		// and store it to the set of k-combinations.
		for (j = 0; j < tailcombs.length; j++) {
			combs.push(head.concat(tailcombs[j]));
		}
	}
	return combs;
}

//console.log(k_combinations(trdist,3));


function k_combinations(set, k) {
	var i, j, combs, head, tailcombs;

	if (k > set.length || k <= 0) {
		return [];
	}

	if (k == set.length) {
		return [set];
	}

	if (k == 1) {
		combs = [];
		for (i = 0; i < set.length; i++) {
			combs.push([set[i]]);
		}
		return combs;
	}

	combs = [];
	for (i = 0; i < set.length - k + 1; i++) {
	
		head = set.slice(i, i + 1);
	
		tailcombs = k_combinations(set.slice(i + 1), k - 1);
		//console.log("tail wywolanie  " +i + " " +tailcombs);

		for (j = 0; j < tailcombs.length; j++) {
			combs.push(head.concat(tailcombs[j]));
		}
	}
	return combs;
}

console.log(k_combinations(trdist,3));

//Best travel 
// other solution

function chooseBestSum(t, k, ls) {
  if(k == 0) {
    return 0;
  }
  if(t <= 0 || k < 0 || ls.length < k) {
    return null;
  }
  var best = 0;
  for(var i = 0; i < ls.length; i++) {
    var l = ls.slice();
    l.splice(i, 1);
    var v = ls[i], c = chooseBestSum(t-v, k-1, l);
    if(c != null && c+v > best && c+v <= t) {
      best = c+v;
    }
  }
  return best > 0 ? best : null;
}

console.log(chooseBestSum(174,3,trdist));


// Encrypt code

var stext = "Tak bylo, nie zmyślam. Jeśli to czytasz, to odkodowales wiadomość.";
var atext = "Sieman";

function encrypt(text, n) {
	var arr2 = [];
	var aro = [];
	if(n <= 0) {
		return text;
	}
	if(text == null || text.length == 0) {
		return text;
	}
	var textar = text.split('');

	for(var j = 0; j<textar.length; j++) {
		if(j%2 != 0) {
			arr2.push(textar[j]);
		}
		else {
			aro.push(textar[j]);
		}
	}
	var res = arr2.concat(aro).join('');
	if(n > 1)
		return encrypt(res, n-1);

	return res;
}

function decrypt(enText, n) {
	if(n <= 0) {
		return enText;
	}
	if(enText == null || enText.length == 0) {
		return enText;
	}

	var len1 = Math.floor(enText.length/2);
	var t1 = enText.slice(0,len1).split('');
	var t2 = enText.slice(len1).split('');
	var res = [];
	var j = 0;
	
	for(var i = 1; i<enText.length; i+=2) {
		t2.splice(i,0,t1[j])
		j++;
	}
	var en = t2.join('');
	if(n>1) 
		return decrypt(en, n-1)
	return en;
}

console.log(encrypt(stext,5));

console.log(decrypt(encrypt(stext,2),2));


//other solution 

function encrypt2(text, n) {
	//console.log(text.match(/.(.|$)/g)); // 2 znalezione znaki (drugi znak w pamieci(.) replace ---- > te dwa znaki zamien na znak z pamieci, znak z pamieci jest w symbolu $1);
	//console.log(text.match(/(.)./g)); // analogicznie do przykladu z góry, tylko na odwrót.
	//console.log(text.replace(/.(.|$)/g, '$1')  + text.replace(/(.)./g, '$1'));

  for (let i = 0; i < n; i++) {
    text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1') // always in case string && string2 return string2

  }
  return text
}

function decrypt2(text, n) {


  let l = text && text.length / 2 | 0
  //console.log(text);
  //console.log(text.slice(l));
  //console.log( text.slice(l).replace(/./g, (_, i) => console.log("To jest podloga " +_ +" |  to jest i: " +i)));
  for (let i = 0; i < n; i++) {
    text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
  }
  return text
}


// sum of between

function GetSum( a,b ) { 
	var sum = 0;
  if(a == b) return a;
 	if(a > b) {
 		for(var i = b ; i<=a; i++) {
 			sum += i;
 		}
 		return sum;
 	}
 	if(b > a) {
 		for(i = a; i<=b; i++) {
 			sum += i;
 		}
 		return sum;
 	}
}


console.log(GetSum(5, 1));

// other solution 

const GetSum2 = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

// other solution: recursion

function GetSum3( a,b)
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b );
}


// 1 more solution

function GetSum4(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}

var sstr = "To jest zdanie."

function findShort(s) {
	var m = s.match(/\w+/g);
	var s = m[0];
	return m.reduce((s, x) => x.length <s.length ? s = x : s).length;
}

console.log(findShort(sstr));

//other solution 

function findShort2(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

// money, money, money

var princi = 1000;
var interes = 0.05;
var taxx = 0.18;
var desiredd = 1100;


function calculateYears(pri, inte, tax, desir) {
    var i=0,s=0;
    if(pri == desir) return 0;
    for(var x = pri; x<desir; x+=s) {
    	s = (x * inte);
    	s = s - (s*tax);
    	i++;
    }
    	return i;
}

console.log(calculateYears(princi, interes, taxx, desiredd));

//other solution

function calculateYears2(principal, interest, tax, desired) {
    // your code
    var years = 0;
    while(principal < desired){
      principal += (principal * interest) * (1 - tax);
      years++;
    }
    return years;
}

//dashatize

function dashatize(x) {
	if(typeof x != "number" || isNaN(x) == true) {
		return 'NaN';
	}
	if(x < 0) x = Math.abs(x);
	var arr = x.toString().split('');

	for(var i = 0; i<arr.length; i++) {
		k = 0;
		if(arr[i]%2 == 0 ) {
			continue;
		}
		else {
			arr[i] = "-"+arr[i]+"-";
		}
	}

	function strO(match) {
		if(match == "-") return "";
		else if(match == "--") return "-";
	}

	return arr.join('').replace(/^(-)|(--)|(-)$/g, strO);
}


console.log(dashatize(-1));

//other solution very clever

function dashatize2(num) {
  return String(num)
    .replace(/([13579])/g, "-$1-")
    .replace(/--+/g, "-")
    .replace(/(^-|-$)/g, "")
}

//Regex exercise

var regs = "bad cats";

console.log(regs.match(/car|cat/gi));

regs = "plop";

console.log(regs.match(/pop|prop/g));

//Any word ending in ious
regs = "how conscious";

console.log(regs.match(/(\w+ious$)/g));

//A whitespace character followed by a dot, comma, colon, or semicolon
regs = "bad ;punc tuation , ";

console.log(regs.match(/(\s)(?=\.|\W)/g));

//word longer than 6 letters
regs = "bad ;punc tuation siemanko, ";

console.log(regs.match(/(\w){6,}/g));

//A word without the letter e

regs = "bad ;punc tuation siemanko, ten nie ma litery ";

console.log(regs.match(/(?=\w)\b[^e]+?\b/g)); // allowed by word, that is any character exclude one or more accurrences of 'e' surrounded by word boundary.


//Format a string of names like 'Bart, Lisa & Maggie'.

function list(names) {
	var res = [];
	if(names.length == 0) {
		return '';
	}
	if(names.length == 1) {
		return names[0].name;
	}
	if(names.length == 2) {
		return names[0].name + " & " + names[1].name;
	}
	if(names.length > 2) {
		for(var i = 0; i<names.length - 2; i++) {
			res.push(names[i].name+", ");
		}
		var s = res.join('');
		return s + names[names.length -2].name + " & " + names[names.length -1].name;
	}
}

console.log(list([ {name: 'Bart'}, {name: 'Homer'}, {name: 'Lisa'}, {name: 'Maggie'} ]));

//other solution

function list2(names) {
  var xs = names.map(p => p.name)
  var x = xs.pop()
  return xs.length ? xs.join(", ") + " & " + x : x || ""
}

//other solution regex

var list3 = (names) =>  names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")

//var sep = "Bart, Homer, Lisa, Maggie";
//console.log(sep.match(/(.*),(.*)$/));

//var sep = "Bart, Homer, Lisa, Maggie";
//console.log(sep.match(/,(?=[^,]*$)/)); // złap ',' ktory jest dozwolony po przez sprawdzenie wczesniej czy przed ',' sprawdzajac od konca wystepuje 
//kazdy znak oprocz ',' zero lub wiecej razy, jeśli wystepuje złap ten ','(czyli zlapie ostatni przecinek).

