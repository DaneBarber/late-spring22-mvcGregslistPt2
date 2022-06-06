import { ProxyState } from "../AppState.js";


function _drawHouses(){
  // get all the houses and build a template
  

  document.getElementById('listings').innerHTML = ' The Houses go here'
}


export class HousesController{
 constructor(){
   console.log('Houses controller loaded', ProxyState.houses);
 }

 viewHouses(){
  //  Get Car Form and inject into modal body
  _drawHouses()
 }
}