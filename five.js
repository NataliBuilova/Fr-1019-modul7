class ElectricalAppliance {
   constructor(name, power, color) {
     this.view = 'Electrical',
     this.name = name,
     this.power = power
     this.color = color  || 'black';
   }
      include (name, status){
   if(status === 'on'){
   console.log(`Электрический прибор ${name} включен`)
 }else {
       console.log(`Электрический прибор ${name} выключен`)
    };
     } 
    getSumPower (){
    return this.power;
  }
 }
  
class SvetElectricalAppliance extends ElectricalAppliance {
  constructor(name, power, color){
      super (color)
      this.power = power,  
      this.name = name;      
  }
}

class RabotaElectricalAppliance extends ElectricalAppliance {
   constructor(figura, name, power, color){
     super (color),  
     this.name =name,
     this.power = power,
     this.figura = figura;
   }
}
 
const lamp = new SvetElectricalAppliance ('Lamp', 50);
const computer = new RabotaElectricalAppliance ('romb', 'computer', 80);
 
lamp.include('Lamp', 'on')
console.log (lamp)
 
computer.include('Computer', 'off')
console.log (computer)
console.log ("сумарная мощность всех включенных приборов " + (lamp.getSumPower() + computer.getSumPower())) 