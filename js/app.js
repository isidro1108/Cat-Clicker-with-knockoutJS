var Cat = function() {
    this.name = ko.observable('Tabby')
    this.clicks = ko.observable(0)
    this.imgSrc = 'img/cat.jpg'
    this.nickNames = ko.observableArray(['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha'])

    this.returnLevel = ko.computed(function() {
        return this.clicks() < 10 ? ko.observable('Newborn'):
                this.clicks() < 50 ? ko.observable('Infant'):
                this.clicks() < 100 ? ko.observable('Child'):
                this.clicks() < 200 ? ko.observable('Teen'):
                this.clicks() < 500 ? ko.observable('Adult'):
                ko.observable('Ninja')
    }, this)
}

function ViewModel()  {
    this.currentCat = ko.observable(new Cat())

    this.incrementerCount = function() {
        this.currentCat().clicks(this.currentCat().clicks() + 1)
    }
}

ko.applyBindings(new ViewModel())