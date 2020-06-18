import React from 'react';
import {PacmanLoader} from "react-spinners";
import {FadeLoader} from "react-spinners";
import {SquareLoader} from "react-spinners";
import * as MyFunc from "../../../assets/js/script.js";

// import {Image} from 'reacte-native';
{/* <FadeLoader color="red"/> */}

function SiteContent(props){
    console.log(props);
    return(
        <main>
        <CakeList></CakeList>
        </main>
    )
}



class CakeList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            allCakes:null,
            ModalVisible:true,
            
        }
    }

    componentDidMount(){
        fetch("http://127.0.0.1:8000/api/cakes/")
        .then(response=>response.json())
        .then(resource=>this.setState({allCakes:resource}))
    }




     
    


    render(){
       
        

        if(this.state.allCakes===null){
            return(
                <FadeLoader color="red"/>
            );
        }
       
        


    
        const students=this.state.allCakes.map(item=>
        <MyCake fName={item.cake_name} lName={item.cake_price} cPhoto={item.cake_avatar} PropsCake={this.state.ModalVisible} /> 
        );

        const Modal=(
            <MyModal status={this.state.ModalVisible}/>
            );

    return(
        <div>
         
        
         






          <div id="block1">
            <div class="Block1_background">
            </div>
            <div class="Block1_context container-fluid">
                <div class="col-lg-11 MainMenu ">
                       <ul class="MainMenu_ul">
                            <li class="nav-item"><a class="link nav-link  active" onClick="Home()" href="#block1">Home</a></li>
                            <li class="nav-item"><a class="link nav-link " onClick="O_nas()" href="#block8">O nas</a></li>
                            <li class="nav-item"><a class="link nav-link " onClick="Products()" href="#block9">Produkty</a></li>
                            <li class="nav-item"><a class="link nav-link " onClick="Menu()" href="#block10">Menu</a></li>
                            <li class="nav-item"><a class="link nav-link " onClick="Catalog_cakes()" href="#block3">Katalog ciast</a></li>
                            <li class="nav-item"><a class="link nav-link " onClick="Contacts()" href="#block7">Kontakt</a></li>
                            <li class="nav-item"><a class="link nav-link " onClick="Kosz()" href="#">Twój kosz</a></li>
                        </ul>
                </div>  
            <div class="block1_logo">
                <img src="http://127.0.0.1:8000/static/admin/img/LOGO-FULL-strona.png" alt="" />
            </div>    
          </div>
        </div>



        <div id="block3">
              <div className="Box col-lg-11">
               <div className="Container">
                    <div className="block8_logo">
                    <img src="http://127.0.0.1:8000/static/admin/img/LOGO-FULL-strona.png" />
                    </div>
                    <div className="block3_text">
                    Złóż zamówienie ciasta na każdą okazję!
                    </div>
                    <div className="block3_underline">
                        <img src="http://127.0.0.1:8000/static/admin/img/mysnake.png" alt="" width="70%" height="70px"></img>
                    </div>
                    <div className="Parent_Grid">
                    {students}
                    </div>
            </div>
           </div>
        </div> 


    <div id="block4">
        <div className="container-fluid block4_container">
            <div className="block4_text">
            Nasze produkty wyrobu własnego
            </div>

         <div className="Our_products">
            <div className="row Our_products_row">
                <div className="col-lg-1">
                </div>
                <img className="col-lg-3 Our_products_photo"  src="http://127.0.0.1:8000/static/admin/img/New Project (1).jpg" alt="" height="230px" width="200px" />
                <div className="col-lg-6 Products_text">
                <span className="Products_name">LODY</span> <p class="Products_description">Lody składają się tylko z najwyższej jakości składników. Ich bazą jest pełnotłuste mleko oraz kremista, pełnotłusta śmietanka. Głównym składnikiem sorbetów są owoce, dlatego ich smak i konsystencja jest niepowtarzalna! Starannie wyselekcjonowane składniki sprawiają, że każde kolejne liźnięcie to rozkosz dla Twojego podniebienia!</p> 
                </div>
            </div>
            <div className="row Our_products_row">
                <div className="col-lg-2">
                </div>
                <div className="col-lg-6 Products_text">
                    <span className="Products_name">PĄCZKI</span><p class="Products_description">Puszyste, naturalnie ciasto składające się jedynie z mąki, wody, drożdży, masła, cukru oraz odrobiny soli, wypełnione po brzegi pysznymi nadzieniami. Nasze pączki są wyjątkowe nie tylko z powodu ich składu, ale przede wszystkim dlatego, że smażymy je codziennie, siedem dni w tygodniu i sprzedajemy wyłącznie na świeżo!</p> 
                </div>
                <img className="col-lg-3"  src="http://127.0.0.1:8000/static/admin/img/New Project (4).jpg" alt="" height="220px" width="200px" />
            </div>
            <div className="row Our_products_row">
                <div className="col-lg-1">
                </div>
                <img className="col-lg-3"  src="http://127.0.0.1:8000/static/admin/img/New Project (5).jpg" alt="" height="230px" width="200px" />
                <div className="col-lg-6 Products_text">
                    <span className="Products_name">DROŻDŻÓWKI</span><p class="Products_description">Ciasto drożdżowe, które także wygniatamy ręcznie jest również w 100% naturalne. W sezonie letnim znajdziecie u nas przepyszne jagodzianki, ale nie tylko. W naszej ofercie są także niespotykane drożdżówki z nutellą lub rafaello, a także z czereśnią lub innymi owocami. Sprawdź!</p> 
                </div>
            </div>
            <div className="row Our_products_row">
                <div className="col-lg-2">
                </div>
                <div className="col-lg-6 Products_text">
                    <span className="Products_name">CIASTA</span><p class="Products_description">Nasze ciasta robimy nie tylko ze smakiem, ale przede wszystkim z pasją. Wybieramy składniki tylko najwyższej jakości dbając o każdy szczegół, za równo związany ze smakiem, jak i z wyglądem. Nasze ciasta cieszą nie tylko podniebienie, ale także oko, dlatego są wspaniałym wyborem na każdą okoliczność. Sprawdź nasz katalog i zamów swoje ulubione na wyjątkową okazję!</p> 
                </div>
                <img className="col-lg-3  "  src="http://127.0.0.1:8000/static/admin/img/New Project (6).png" alt="" height="150px" width="200px" />
            </div>
        </div>
    </div>
</div>

<div id="block5">
    <div id=" carouselExampleIndicators" className="Block5_carousel carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#cl1" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="http://127.0.0.1:8000/static/admin/img/CZEKOLADA-FB-k1y10tgi.jpg" class="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="http://127.0.0.1:8000/static/admin/img/72131973_770979866670283_2732286566822051840_n.jpg" id="cl1" class="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="http://127.0.0.1:8000/static/admin/img/73100327_790787614689508_6047129690081067008_n.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <a className="carousel-control-prev" href="#cl1" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
</div>

    <div id="block6">
        <div className="container-fluid">
        <div className="row">
            <div className="block6_pictures col-lg-7">
                <div className="row">
                    <div className="block6_pictures_pict block6_pictures_pict1">
                        <img src="http://127.0.0.1:8000/static/admin/img/69349745_755751804859756_3181436353803976704_n.jpg" alt="" />
                    </div>
                    <div className="block6_pictures_pict block6_pictures_pict2 ">
                        <img  src="http://127.0.0.1:8000/static/admin/img/60252874_688728838228720_3586416465185603584_n.jpg" alt="" />
                    </div>
                    <div className="block6_pictures_pict block6_pictures_pict3">
                        <img src="http://127.0.0.1:8000/static/admin/img/65207311_714238752344395_3809661439233228800_n.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="block6_text col-lg-4">
            <p className="block6_h1">MASZ OCHOTĘ NAPIĆ SIĘ  DOBREJ KAWKI?</p>
            <p className="block6_h2">...albo orzeźwiającej lemoniady</p>
            <p className="block6_h3">...albo słodkiego milkshaka</p>
            <p className="block6_h4">...albo jeszcze sporo innych dobych napojów, upiększających życie?</p>
            </div>
        </div>
        <p className="block6_h5">To koniecznie wpadnij do nas w gronie rodziny albo z przyjacielami a my zrobimy wszystko, żeby usłodzić chwilę momentu!</p>
        </div>
    </div>

        <div id="block8">
            <div className="Container">
                <div className="block8_logo">
                    <img src="http://127.0.0.1:8000/static/admin/img/LOGO-FULL-strona.png" alt="" />
                </div>
                <div className="block3_text">
                    Nasza historia
                </div>
                <div className="block3_underline block8_underline">
                    <img src="http://127.0.0.1:8000/static/admin/img/mysnake.png" alt="" width="70%" height="70px" />
                </div>
                <div className="row block8_row">
                <div className="col-lg-4  O_nas_history">
                    Nasza historia zaczyna się w marcu 2017 roku na warszawskiem Bemowie. To tu powstaje pierwszy lokal o nazwie Stolica Lodów Tradycyjnych, gdzie zaczynamy kręcić nasze lody.
                </div>
                <div className="col-lg-2">

                </div>
                <div className="col-lg-6 O_nas_photo">
                    <img src="http://127.0.0.1:8000/static/admin/img/IMG_2129-k3zsetgw.jpg" alt="" />
                </div>
                </div>
                <div className="row block8_row">
                    <div className="col-lg-6 O_nas_photo">
                        <img src="http://127.0.0.1:8000/static/admin/img/KOLEJKA-k3zstr1p.jpg" alt="" />
                    </div>
                    <div className="col-lg-1">
                    </div>
                    <div className="col-lg-5  O_nas_history_1">
                        Nieco później, bo równo za 6 miesięcy, nieopodal, również na Bemowie ruszamy z projektem najlepszych pączków w Stolicy, czyli powstaje Stolica Pączków, gdzie smażymy nasze pyszne, tradycyjne i naturalne pączki. Następnie od rana do wieczora kręcimy lody, a po nocach smażymy dla was świeże pączki.
                    </div>
                </div>

                <div className="row block8_row">
                    <div class="col-lg-5  O_nas_history">
                        Docenieni przez naszych kochanych gości rozwijamy się i już na początku 2019 roku powstają cztery kolejne lokale łączące oba te koncepty powiększone o takie wspaniałe dodatki jak świeżo mielona kawa, soki wyciskane, desery, milkshakes oraz bułki drożdżowe własnego wyrobu tworząc Stolicę lodów i pączków.
                    </div>
                    <div className="col-lg-1">
        
                    </div>
                    <div className="col-lg-6">
                    <div className="row block8_small_photos">
                        <img src="http://127.0.0.1:8000/static/admin/img/2B7CE1DB-10A5-42AF-9EF4-93B4769074BB-k3zt3s2e.jpg" alt="" />
                        <img src="http://127.0.0.1:8000/static/admin/img/2-k3ztqgxq.jpg" alt="" />
                    </div>
                    <div class="row block8_small_photos">
                        <img src="http://127.0.0.1:8000/static/admin/img/7-k3ztnccq.jpg" alt="" />
                        <img src="http://127.0.0.1:8000/static/admin/img/78331950_131589464939897_4700343253042462720_n.jpg" alt="" />
                    </div>
                </div>
                </div>
            </div>
    </div>

    <div id="block9">
    <div className="Container">
        <div className="block8_logo">
            <img src="http://127.0.0.1:8000/static/admin/img/LOGO-FULL-strona.png" alt="" />
          </div>
          <div className="block3_text">
            Nasze produkty
          </div>
          <div className="block3_underline block9_underline">
              <img src="http://127.0.0.1:8000/static/admin/img/mysnake.png" alt="" width="70%" height="70px" />
          </div>
          <div>
              
              <div className="row block9_row">
                <img className="col-lg-2" src="http://127.0.0.1:8000/static/admin/img/paczusie1.png" alt="" width="200px" height="150px" />
                
                <div className="block9_description col-lg-4">
                    The description of the product , for example smth like that: these are our favourite donuts of our own production. Today we have more then 50 flavours of the best natural ingredients and blablabla
                </div>
              </div>
              <div class="row block9_row">
                  <div className="col-lg-5">

                  </div>
                <div className="block9_description col-lg-4">
                    The description of the product , for example smth like that: these are our favourite donuts of our own production. Today we have more then 50 flavours of the best natural ingredients and blablabla
                </div>
                <img src="http://127.0.0.1:8000/static/admin/img/czekolada.png" alt="" width="200px" height="200px"  />
              </div>

              <div className="row block9_row">
                <img className="col-lg-3" src="http://127.0.0.1:8000/static/admin/img/coffee.png" alt="" width="200px" height="200px" />
                
                <div className="block9_description col-lg-4">
                    The description of the product , for example smth like that: these are our favourite donuts of our own production. Today we have more then 50 flavours of the best natural ingredients and blablabla
                </div>
              </div>

              <div className="row block9_row">
                <div className="col-lg-4">

                </div>
              <div className="block9_description col-lg-4">
                  The description of the product , for example smth like that: these are our favourite donuts of our own production. Today we have more then 50 flavours of the best natural ingredients and blablabla
              </div>
              <img src="http://127.0.0.1:8000/static/admin/img/paczkolod.png" alt="" width="150px" height="150px" />
            </div>

            <div className="row block9_row">
                <img className="col-lg-2" src="http://127.0.0.1:8000/static/admin/img/cake.png" alt="" width="200px" height="150px" />
                
                <div className="block9_description col-lg-4">
                    The description of the product , for example smth like that: these are our favourite donuts of our own production. Today we have more then 50 flavours of the best natural ingredients and blablabla
                </div>
              </div>

              <div className="row block9_row">
                <div className="col-lg-5">

                </div>
              <div className="block9_description col-lg-4">
                  The description of the product , for example smth like that: these are our favourite donuts of our own production. Today we have more then 50 flavours of the best natural ingredients and blablabla
              </div>
              <img src="http://127.0.0.1:8000/static/admin/img/shake.png" alt="" width="150px" height="180px" />
            </div>

            <div className="row block9_row">
                <img className="col-lg-4" src="http://127.0.0.1:8000/static/admin/img/rogal.png" alt="" width="350px" height="270px" />
                
                <div className="block9_description col-lg-4">
                    The description of the product , for example smth like that: these are our favourite donuts of our own production. Today we have more then 50 flavours of the best natural ingredients and blablabla
                </div>
              </div>

              <div className="row block9_row">
                <div className="col-lg-6">
                </div>
              <div className="block9_description col-lg-4">
                  The description of the product , for example smth like that: these are our favourite donuts of our own production. Today we have more then 50 flavours of the best natural ingredients and blablabla
              </div>
              <img src="http://127.0.0.1:8000/static/admin/img/bun.png" alt="" width="150px" height="180px" />
            </div>

            <div class="row block9_row">
                <img className="col-lg-3" src="http://127.0.0.1:8000/static/admin/img/lemoniada.png" alt="" width="350px" height="270px" />
                
                <div className="block9_description col-lg-4">
                    The description of the product , for example smth like that: these are our favourite donuts of our own production. Today we have more then 50 flavours of the best natural ingredients and blablabla
                </div>
              </div>

              <div className="row block9_row">
                <div className="col-lg-5">

                </div>
              <div className="block9_description col-lg-4">
                  The description of the product , for example smth like that: these are our favourite donuts of our own production. Today we have more then 50 flavours of the best natural ingredients and blablabla
              </div>
              <img className="col-lg-3" src="http://127.0.0.1:8000/static/admin/img/cake2.png" alt="" width="150px" height="180px"/>
            </div>
              
          </div>

    </div>

</div>




<div id="block10">
 <div className="Container">
    <div className="block8_logo">
        <img src="http://127.0.0.1:8000/static/admin/img/LOGO-FULL-strona.png" alt="" />
      </div>
      <div className="block3_text">
        Nasze Menu
      </div>
      <div className="block3_underline block9_underline">
          <img src="mysnake.png" alt="" width="70%" height="70px" />
      </div>
      <div className="row">
            <div className="col-lg-4"><img className="block10_img_row1" src="http://127.0.0.1:8000/static/admin/img/lody_menu.png" alt="" /></div>
            <div className="col-lg-4"><img className="block10_img_row1" src="http://127.0.0.1:8000/static/admin/img/napoje.png" alt="" /></div>
            <div className="col-lg-4"><img className="block10_img_row1" src="http://127.0.0.1:8000/static/admin/img/kawa_menu.png" alt="" /></div>
       </div>
     <div class="row">
            <div className="col-lg-4"><img className="block10_img_row2" src="http://127.0.0.1:8000/static/admin/img/herbata_menu.png" alt="" /></div>
            <div className="col-lg-4"><img className="block10_img_row2" src="http://127.0.0.1:8000/static/admin/img/czeko_menu.png" alt="" /></div>
            <div className="col-lg-4"><img className="block10_img_row2" src="http://127.0.0.1:8000/static/admin/img/tortlodowy.png" alt="" /></div>
    </div>
 </div>
</div>




<div id="block7">
    <div className="container">
    <div className="row">
        <div className="block7_element block7_photo col-lg-3">
            <img src="http://127.0.0.1:8000/static/admin/img/LOGO-FULL-strona.png" alt="" />
            <div className="block7_photo_text">
                Jeżeli jesteś zainteresowany naszą ofertą-znajdź nas!
            </div>
        </div>
        <div className="block7_element block7_links col-lg-2">
           Przydatne linki
           <div><a href="#">Instagram</a></div>
           <div><a href="#">Facebook</a></div>
           <div><a href="#">Poczta Gmail</a></div>
           
        </div>
        <div className="block7_element block7_contact col-lg-2">
            Contact Us
            <div><p>+4890383930</p></div>
            <div><p>+4890383930</p></div>
            <div><p>biuro@stolicalodow.pl</p></div>
            <div><p>projekty@stolicalodow.pl</p></div>
        </div>
        <div className="block7_element block7_instagram col-lg-3">
            Instagram
            <div className="row">
            <div className="block7_insta">
                <img src="http://127.0.0.1:8000/static/admin/img/69349745_755751804859756_3181436353803976704_n.jpg" alt="" />
            </div>
            <div className="block7_insta">
                <img src="http://127.0.0.1:8000/static/admin/img/69349745_755751804859756_3181436353803976704_n.jpg" alt="" />
            </div>
            <div class="block7_insta">
                <img src="http://127.0.0.1:8000/static/admin/img/69349745_755751804859756_3181436353803976704_n.jpg" alt="" />
            </div>
            <div className="block7_insta">
                <img src="http://127.0.0.1:8000/static/admin/img/69349745_755751804859756_3181436353803976704_n.jpg" alt="" />
            </div>
        </div>
        <div className="row block7_insta2">
            <div class="block7_insta">
                <img src="http://127.0.0.1:8000/static/admin/img/69349745_755751804859756_3181436353803976704_n.jpg" alt="" />
            </div>
            <div className="block7_insta">
                <img src="http://127.0.0.1:8000/static/admin/img/69349745_755751804859756_3181436353803976704_n.jpg" alt="" />
            </div>
            <div className="block7_insta">
                <img src="http://127.0.0.1:8000/static/admin/img/69349745_755751804859756_3181436353803976704_n.jpg" alt="" />
            </div>
            <div className="block7_insta">
                <img src="http://127.0.0.1:8000/static/admin/img/69349745_755751804859756_3181436353803976704_n.jpg" alt="" />
            </div>
        </div>
        </div>
    </div>
  </div> 
</div>













             <div id="footer">
                <div className="Container">
                Foooooooter
                </div>
             </div>
       </div>
         )
     }
}



class MyCake extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        // console.log(this.props.name)
    }

 ShowTovar(event){
    alert("I have a Modal Window, but don't know yet how to show it in React:))");

 }
        

    render() {
        const name="http://127.0.0.1:8000/static/admin/img/"+this.props.cPhoto;
        

        return (

         
            
                <div className="MyOrder">
                    <a href=""> <img  className="Cake" src ={name}/></a>
                    <div>
                        <button className="n" onClick={this.ShowTovar.bind(this)} >
                            Zamów
                        </button>
                        <p className="MyOrder_name">{this.props.fName}    {this.props.lName}zł</p>
                    </div>
                </div>
            
          

                
           
    

        );
    }

}


class MyModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        
    }
    render(){
        return(


     <div id="myModal2" className="myModal2">
        <div className="modal-body"> 
                <button  className="close" type="button">X</button>
                <div className="block2">
                    <div className="Modal">
                        <div className="row">
                            <p className="col-lg-9">Twoje zamówienia</p>
                            <button  className="Wróć col-lg-3">Wróć do zakupów</button>
                        </div>
                       
                       <div className="Modal_menu">
                          
                            <div className="Modal_menu_text1">
                                Pozycja
                            </div>
                            <div className="Modal_menu_text2">
                                Discount
                            </div>
                            <div className="Modal_menu_text3">
                                Ilość
                            </div>
                            <div className="Modal_menu_text4">
                                Cena
                            </div>
                          
                         </div>
                      <div className="Modal_line">
                  
                      </div>
                      <div className="MyFlex">
                        <div className="Positions">
                            <div className="Positions1">
                  
                            </div>
                            
                                <div className="Suma" >
                          
                                </div>
                          
                       </div>

                      </div>
                      <button  className="Wróć Zamawiam">Zamawiam i płacę</button>

                        
                      
                    </div> 
                </div>
        </div>
                  
               
    </div>
        )
    }
}












export default SiteContent;