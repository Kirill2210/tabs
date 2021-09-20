
let tabsBox = document.querySelectorAll('.tabs')
	
class Tabs {
	constructor(tabsBox) {
		this.tabsBox = tabsBox
	}

	tabsClick() {
		this.tabsBox.forEach(function(ev) {
			ev.addEventListener('click', function(element) {
				let atrBtn = element.target.getAttribute('data-tabs')
				let tabsItem = ev.querySelector('.tabs-item[data-tabs="'+atrBtn+'"]')
				let activeBtn = ev.querySelector('.tabs-btn.active')
				let activeTabs = ev.querySelector('.tabs-item.active')
				if(element.target.classList == "tabs-btn"){
					element.preventDefault()
					activeBtn.classList.remove('active')
					activeTabs.classList.remove('active')
					element.target.classList.add('active')
					tabsItem.classList.add('active')
				}
			})
		})
	}

}

let tabs = new Tabs(tabsBox)
tabs.tabsClick()