var Cat = function() {
    this.name = ko.observable('Tabby')
    this.clicks = ko.observable(0)
    this.imgSrc = 'img/cat.jpg'
    this.nickNames = ko.observableArray(['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha'])

    this.returnLevel = ko.computed(function() {
        return this.clicks() < 10 ? 'Newborn':
                this.clicks() < 50 ? 'Infant':
                this.clicks() < 100 ? 'Child':
                this.clicks() < 200 ? 'Teen':
                this.clicks() < 500 ? 'Adult':'Ninja'
    }, this)
}

function ViewModel()  {
    this.currentCat = ko.observable(new Cat())

    this.incrementerCount = function() {
        this.clicks(this.clicks() + 1)
    }
}

ko.applyBindings(new ViewModel())