// import $ from 'jquery';


var sum =0;
var newprice=0;
var disc1=0;
var x2=0;

function ShowModal(name,myprice){
    document.getElementById('myModal2').style.display='block';
    // document.getElementsByClassName('block2')[0].style.display='block';
    document.getElementsByClassName('Modal')[0].style.display='block';
    

    // var k =document.getElementsByClassName('Positions1')[0].innerHTML;
    if(x2==0){
     disc1=0;
    }
   else{
     disc1="15";
     }
     x2++;

    var a= "<div class='List'>"+name +"</div>";
    
    var a2=myprice-((myprice*Number(disc1))/100);
    sum=Number(sum)+Number(a2);
    var il= "<div class='List_price'>" +(myprice-((myprice*Number(disc1))/100)) +"</div>";
    // var il1= "<div class='List_totalprice'>" +myprice +"</div>";
    var c1=1;
    var c = "<div class='List_numer'>" +c1  +  "</div>";
    var discount= "<div class= 'disc'>"+ disc1+"%"+"</div>";
    var min="<button class='Mines' onclick='Mines(this,"+myprice+")'>" +'-'+"</button>";
    var pl="<button class='Plus' onclick='Plus(this,"+myprice+")'>" +'+'+"</button>";
    var del = "<button class='Delete' title="+myprice+" onclick='Delete(this,"+myprice+")'>" +'X'+"</button>";
    
    var x = "<div class='Modal_position'>"+a+ discount+min+c+pl +il+del+"</div>";
    // var a= document.getElementsByClassName('Positions1')[0].innerHTML+x;



    document.getElementsByClassName('Positions1')[0].innerHTML=document.getElementsByClassName('Positions1')[0].innerHTML+x;

    document.getElementsByClassName('Suma')[0].innerHTML='Total:  '+sum+'zl';  
    

}





function Delete(mythis, myprice){

    var a= mythis.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    newprice=a*myprice;


    if(mythis.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML=="15%")
    {
        myprice=myprice-(myprice*0.15);
        newprice=a*myprice;
        sum=sum-newprice;
        document.getElementsByClassName('Suma')[0].innerHTML='Total:  '+sum+'zl';
    }
    else{
        if(mythis.parentNode.nextElementSibling)
        {
        
            mythis.parentNode.nextElementSibling.firstChild.nextElementSibling.innerHTML="0%";
            var count=mythis.parentNode.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
            var newpricenew= mythis.parentNode.nextElementSibling.lastChild.title;
            var oldprice=mythis.parentNode.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
            mythis.parentNode.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML=newpricenew*count;
            sum=sum-newprice;
            sum=sum-oldprice;
            sum=sum+(count*newpricenew);
            
        }
        else{
            var count=mythis.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
            var newpricenew= mythis.title;
            sum=sum-(count*newpricenew);
            document.getElementsByClassName('Modal')[0].style.display='none';
        }
        document.getElementsByClassName('Suma')[0].innerHTML='Total:  '+sum+'zl';
    }
    mythis.parentNode.remove();
    x2--;


}


function Plus(mythis,myprice){
    if(Number(mythis.previousElementSibling.innerHTML)<5){
        if(mythis.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML=="15%")
        {

            var ab=myprice-(myprice*0.15);
            var a=mythis.nextElementSibling.innerHTML;
            newprice=Number(a)+ab; 
            mythis.nextElementSibling.innerHTML=newprice;
            sum=Number(sum)+ab;
            document.getElementsByClassName('Suma')[0].innerHTML='Total:  '+sum+'zl'; 
        }

        else{
            var a=mythis.nextElementSibling.innerHTML;
            newprice=Number(a)+Number(myprice); 
            mythis.nextElementSibling.innerHTML=newprice;   
            sum=Number(sum)+myprice;
            document.getElementsByClassName('Suma')[0].innerHTML='Total:  '+sum+'zl'; 
        }
    mythis.previousElementSibling.innerHTML++;
    
    
  }
}


function Mines(mythis,myprice){
  if(Number(mythis.nextElementSibling.innerHTML)!=1){
    if(mythis.previousElementSibling.innerHTML=="15%")
    {
        var ab=myprice-(myprice*0.15);
        mythis.nextElementSibling.innerHTML--;
        var a=mythis.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
        newprice=Number(a)-ab; 
        mythis.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML=newprice;
        sum=Number(sum)-ab;
        document.getElementsByClassName('Suma')[0].innerHTML='Total:  '+sum+'zl'; 
    }

    else{
        alert(myprice);
        mythis.nextElementSibling.innerHTML--;
        var a=mythis.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
        newprice=Number(a)-Number(myprice); 
        mythis.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML=newprice;   
        sum=Number(sum)-myprice;
        document.getElementsByClassName('Suma')[0].innerHTML='Total:  '+sum+'zl'; 
    }
   }
    
}
function Catalog_cakes(){
    document.getElementById('block3').style.display='block';
    document.getElementsByClassName('Block1_background')[0].style.display='none';
    document.getElementsByClassName('block1_logo')[0].style.display='none';
    document.getElementById('block4').style.display='none';
    document.getElementById('block5').style.display='none';
    document.getElementById('block6').style.display='none';
    document.getElementById('block7').style.display='none';
    document.getElementById('block9').style.display='none';
    document.getElementById('block10').style.display='none';
    document.getElementById('block11').style.display='none';
    document.getElementsByClassName('Modal')[0].style.display='none';
    
   }

function O_nas(){
    document.getElementById('block8').style.display='block';
    document.getElementsByClassName('Block1_background')[0].style.display='none';
    document.getElementsByClassName('block1_logo')[0].style.display='none';
    document.getElementById('block4').style.display='none';
    document.getElementById('block5').style.display='none';
    document.getElementById('block6').style.display='none';
    document.getElementById('block7').style.display='none';
    document.getElementById('block3').style.display='none';
    document.getElementById('block11').style.display='none';
    document.getElementById('block9').style.display='none';
    document.getElementsByClassName('Modal')[0].style.display='none';

   }

function Home(){
    document.getElementById('block3').style.display='none';
    document.getElementsByClassName('Block1_background')[0].style.display='block';
    document.getElementsByClassName('block1_logo')[0].style.display='block';
    document.getElementById('block4').style.display='block';
    document.getElementById('block5').style.display='block';
    document.getElementById('block6').style.display='block';
    document.getElementById('block7').style.display='block';
    document.getElementById('block8').style.display='none';
    document.getElementById('block9').style.display='none';
    document.getElementById('block10').style.display='none';
    document.getElementById('block11').style.display='none';
    document.getElementsByClassName('Modal')[0].style.display='none';


}

export function Products(){
    document.getElementById('block9').style.display='block';
    document.getElementsByClassName('Block1_background')[0].style.display='none';
    document.getElementsByClassName('block1_logo')[0].style.display='none';
    document.getElementById('block3').style.display='none';
    document.getElementById('block4').style.display='none';
    document.getElementById('block5').style.display='none';
    document.getElementById('block6').style.display='none';
    document.getElementById('block7').style.display='none';
    document.getElementById('block8').style.display='none';
    document.getElementById('block10').style.display='none';
    document.getElementById('block11').style.display='none';
    document.getElementsByClassName('Modal')[0].style.display='none';

}

function Menu(){
    document.getElementById('block10').style.display='block';
    document.getElementsByClassName('Block1_background')[0].style.display='none';
    document.getElementsByClassName('block1_logo')[0].style.display='none';
    document.getElementById('block3').style.display='none';
    document.getElementById('block4').style.display='none';
    document.getElementById('block5').style.display='none';
    document.getElementById('block6').style.display='none';
    document.getElementById('block7').style.display='none';
    document.getElementById('block8').style.display='none';
    document.getElementById('block9').style.display='none';
    document.getElementById('block11').style.display='none';
    document.getElementsByClassName('Modal')[0].style.display='none';

}
function Contacts(){
    document.getElementById('block11').style.display='block';
    document.getElementById('block10').style.display='none';
    document.getElementsByClassName('Block1_background')[0].style.display='none';
    document.getElementsByClassName('block1_logo')[0].style.display='none';
    document.getElementById('block3').style.display='none';
    document.getElementById('block4').style.display='none';
    document.getElementById('block5').style.display='none';
    document.getElementById('block6').style.display='none';
    document.getElementById('block7').style.display='none';
    document.getElementById('block8').style.display='none';
    document.getElementById('block9').style.display='none';
    document.getElementsByClassName('Modal')[0].style.display='none';

}
function backtotowars(){
    document.getElementById('myModal2').style.display='none';
}

function Kosz(){
    document.getElementById('myModal2').style.display='block';
    document.getElementsByClassName('Modal')[0].style.display='block';
}
   

function myshowmodal (){
                            
    document.getElementById('myModal2').style.display='block';

    }
                    // var modal = document.getElementById('myModal2');

                    // window.onclick = function(event) {
                    // if (event.target == modal) {
                    //     modal.style.display = "none";
                    //     $('.Input').css('border','1px solid grey').val('');
                    // }

                    // }

                    // function myclosemodal() {
                    //     document.getElementById('myModal2').style.display='none';
                    //     $('.Input').css('border','1px solid grey').val('');
                    // }


// console.log(document.getElementsByClassName('MyOrder')[0].nextElementSibling.nextElementSibling);
// console.log(document.getElementsByClassName('MyOrder')[0].parentNode);
// console.log(document.getElementsByClassName('MyOrder')[0].childNodes[3].childNodes[1]);




function Close(){
    document.getElementsByClassName('Modal')[0].style.display='none';
}



   let x=10;
   const r1 =x++ + ++x;
   console.log(r1);

//    ----------------


   function getGreetings(){
       return arr=["Hello world", "Hi world", "Hallo Welt", "Privet mir"];
   }

   console.log(getGreetings);

//    --------------------


   var o ={
       subject:"I",
       verb:"Love",
       object:"JavaScript",
   };

   function hello ({subject, verb, object}) {
       
       return `${subject} ${verb} ${object}`;
   }

   console.log(hello(o));


//    ---------------

var arr1 =["I", "Love", "JS"]

function hello1([first, second, third]) {
    return `${first} ${second} ${third}`
}

console.log(hello1(arr1));

// ----------------

// function temp(prefix, ...words){
// prefixedWords=[];
// for(i=0; i<words.length; i++){
//     prefixedWords[i]= prefix+words[i];
// }

// return prefixedWords;
// }

// console.log(temp('con' ,'verse', 'vex','tra'));


// -------------------

 var oop={
    name:'Kate',
    text: function (){
        return 'My name is '+ this.name;
    },
}
// console.log(oop.text());


// --------------------

const o1={
    name :'Дшшшшшшшшяф',
    greetBackwards: function(){
        const self = this;
        function getReverseName(){
            let nameBackwards='';
            for (let i=self.name.length-1; i>0;i--){
                nameBackwards= nameBackwards+self.name[i];
            }
            return nameBackwards;
        }
        return  this.name +' ==>  '+ getReverseName()+ '   reversed name';
    }
}


// console.log(o1.greetBackwards());


function Counting(){
    let x=0, y=10,z;
    z=y++;
    console.log(z);
}
console.log(Counting());

var arr =[1,2,3,4,5,3];
var a =arr.slice(1,4);//вырезает подмассив (от 1элемента до 4 не включая)
var b= arr.splice(1,2);// изменяет массив добавляя/удаляя элементы. 1эл-от куда 2эл-сколько удалить 3,4,5,... что вставить
//arr.fill("a",3);     заполняет массив с 3 элемента стрингом из а
//arr.reverse();       задом наоборот
//arr.sort();          сортировка
//arr.lastIndexOf(3);  индекс простого значения! так же как и IndexOf
//arr.some(x=>x%2===0); есть ли хотя бы один элемент соответствующий запросу( returns boolean)
//arr.some(x=>x%2===0); все ли элементы соответствуют запосу( returns boolean)


var sorting =[{name:"Kate", id:5}, {name:"Maksym", id:2}, {name:"Julia", id:3}, {name:"Dan", id:4}];
var sorting1=sorting.sort();         //?????
//((a,b)=>a.id>b.id);

               

var e =sorting.findIndex(o=>o.name==="Dan");            //находит индекс сложного значения(объекта)
var g =sorting.find(o=>o.name==="Dan");                 //находит весь объект по параметру
var h= sorting.map(x=>x.name);             //map просто достает данные по параметру и выводит в CПИСОК , 
    //а с filter можно получить те же данные, соответствующие критеию
var h1= sorting.map(x=>x.id);
var discount=h1.map(y=>y*0.5);

//------------

//var firstnames=["Kira", "Tom", "Julia", "Penelopa"];
//var lastnames=["Nightley", "Hanks", "Roberts", "Cruz"];
//var fullname=firstnames.map((x,i)=>({firstname:x, lastname:lastnames[i]}));

//------------

// var mainlist=[];
// for(list1 of ['H', 'C', 'D', 'S'])
//   for(var value=1; value<=13; value++)
//   mainlist.push({list1,value});

// var k =mainlist.filter(c=>c.value>10 && c.list1==='H');


//-------------------------------------(REDUCE!!!)

var words =['Beachball', 'Rodeo', 'Angel', 'Aadwark', 'Xylophone', 'November', 'Chocolate', 'Papaya', 'Uniform', 'Joker', 'Clover', 'Bali'];
var alphabetical=words.reduce((a,x)=>{
if(!a[x[0]]) a[x[0]] =[];
a[x[0]].push(x);
return a}, {})
//---------------------------------------
// var j='<ul><li>'+words.join('</li><li>')+'</li></ul>'; из списка arr в список html



// console.log(j);

//------------------------------------
 var SYM=Symbol();

 var ob ={a:1, b:2, c:3, [SYM]:4};
//  Object.keys(ob).forEach( prop=>console.log('${prop}: ${o{prop}}'));
// for(let prop in ob){
//     if(!hasOwnProperty(prop)) continue;
//     console.log('${prop}: ${o{prop}}');
// }



//-----------------------------------------------------------------
// OOP
class MyClass{
    constructor(y){
      this.y=y;
      console.log("Hello, "+this.y);
      return this.y;
    }

    test(){
        console.log("Hello, this is my first method"+this.y);
    }
    
}
var Hello = new MyClass("Mary");
console.log(Hello.test());


class MySecondClass extends MyClass{

    construktor(name,x){
    // super(name);
    this.name=name;
    this.x=x;
    
    
   }

    test1(name,x){
        console.log("Hello, "+name+" Your age is: "+x);
    }
}

var Hello1 = new MySecondClass();
console.log(Hello1.test1('Vasaa', '20'));




//---------------------(doesnt work with global variables; doesnt see them)
class MySecondClass2 extends MyClass{

    construktor(name,x){
    // super(name);
    this.name=name;
    this.x=x;
    
    
   }

    test1(){
        console.log("Hello, "+this.name+" Your age is: "+this.x);
    }
}
var Hello1 = new MySecondClass2('Masha', '20');
console.log(Hello1.test1());


//---------------------------------------





