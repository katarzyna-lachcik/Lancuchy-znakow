var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

var dinosaurUpperCased = dinosaur.toUpperCase();
console.log(dinosaurUpperCased);

var nameAfter = text.replace('Velociraptor', dinosaurUpperCased);
console.log(nameAfter);

var halfSentence = nameAfter.substr(0, nameAfter.length / 2); 
console.log(halfSentence);