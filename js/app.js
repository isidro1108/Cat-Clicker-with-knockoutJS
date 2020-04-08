function ViewModel()  {
    this.name = ko.observable('Tabby')
    this.clicks = ko.observable(0)
    this.src = 'img/cat.jpg'
    this.incrementerCount = function() {
        this.clicks(this.clicks() + 1)
    }
}

ko.applyBindings(new ViewModel())