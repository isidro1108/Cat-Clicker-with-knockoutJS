var initialCats = [
    {name: 'Tabby',
    imgSrc: 'img/cat.jpg',
    clicks: 0,
    nickNames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha']},
    {name: 'Mr. Happy',
    imgSrc: 'img/cat2.jpg',
    clicks: 0,
    nickNames: ['Happyness']},
    {name: 'Sweetness',
    imgSrc: 'img/cat3.jpg',
    clicks: 0,
    nickNames: ['Candy']},
    {name: 'Browny',
    imgSrc: 'img/cat4.jpg',
    clicks: 0,
    nickNames: ['Cute choco']},
    {name: 'Dunny',
    imgSrc: 'img/cat5.jpg',
    clicks: 0,
    nickNames: ['Blue eyes', 'Sky', 'Ocean eyes']}
]

var Cat = function(data) {
    this.name = ko.observable(data.name)
    this.clicks = ko.observable(data.clicks)
    this.imgSrc = ko.observable(data.imgSrc)
    this.nickNames = ko.observableArray(data.nickNames)

    this.returnLevel = ko.computed(function() {
        return this.clicks() < 10 ? 'Newborn':
                this.clicks() < 50 ? 'Infant':
                this.clicks() < 100 ? 'Child':
                this.clicks() < 200 ? 'Teen':
                this.clicks() < 500 ? 'Adult':'Ninja'
    }, this)
}

function ViewModel()  {
    var self = this

    self.catList = ko.observableArray([])
    for (let data of initialCats) {
        self.catList.push(new Cat(data))
    }

    self.currentCat = ko.observable(self.catList()[0])

    self.changeCurrentCat = function(clickedCat) {
        self.currentCat(clickedCat)
    }
    self.incrementerCount = function() {
        self.currentCat().clicks(self.currentCat().clicks() + 1)
    }
}

ko.applyBindings(new ViewModel())