function ViewModel()  {
    this.name = ko.observable('Tabby')
    this.clicks = ko.observable(0)
    this.imgSrc = 'img/cat.jpg'

    this.incrementerCount = function() {
        this.clicks(this.clicks() + 1)
    }
    this.returnLevel = ko.computed(function() {
        return this.clicks() < 10 ? ko.observable('Newborn'):
                this.clicks() < 100 ? ko.observable('Infant'):
                ko.observable('Teen')
    }, this)
}

ko.applyBindings(new ViewModel())