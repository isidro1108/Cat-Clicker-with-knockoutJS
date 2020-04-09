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
    this.currentCat = ko.observable(new Cat({
        name: 'Tabby',
        clicks: 0,
        imgSrc: 'img/cat.jpg',
        nickNames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha']
    }))

    this.incrementerCount = function() {
        this.clicks(this.clicks() + 1)
    }
}

ko.applyBindings(new ViewModel())