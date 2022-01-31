const event = {
    name: 'Birthday Party',
    guestList: ['Maha', 'Ahmed', 'Sagid'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()
