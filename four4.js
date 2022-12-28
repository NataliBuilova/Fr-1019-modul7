function ElectricalAppliance(name, power) {
   this.view = 'Electrical'
   this.name = name,
   this.power = power
  
 }
 
 ElectricalAppliance.prototype.include = function(name, status) {
   if(status === 'on'){
   console.log(`Электрический прибор ${name} включен`)
 }else {
       console.log(`Электрический прибор ${name} выключен`)
    };
   }
 
 function SvetElectricalAppliance(name, color, power) {
   this.name = name,
   this.power = power,
   this.color = color 
 }
 
 SvetElectricalAppliance.prototype = new ElectricalAppliance()
 
 function RabotaElectricalAppliance(name, figura, power) {
   this.name = name,
   this.power = power,
   this.figura = figura 
 }
 
 RabotaElectricalAppliance.prototype = new ElectricalAppliance()
 
 ElectricalAppliance.prototype.getSumPower = function () {
   return this.power;
 }
 
 const lamp = new SvetElectricalAppliance ('Lamp', 'grey', 50);
 const computer = new RabotaElectricalAppliance ('Computer', 'romb', 80);
 
 lamp.include('Lamp', 'on')
 console.log (lamp)
 
 computer.include('Computer', 'off')
 console.log (computer)
 console.log ("сумарная мощность всех включенных приборов " + (lamp.getSumPower() + computer.getSumPower()))