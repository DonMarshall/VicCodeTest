window.onload = () => {
		userGenerator()
	}
	const userGenerator = () => {
		fetch('https://randomuser.me/api/?results=3')
		.then((response) => {
			return response.json()	
		}).then((data) => {
			console.log(data)
			showRandomuserData(data)
		})
	}

	

	showRandomuserData = (randomUser) => {		
		for(var i = 0; i < randomUser.results.length; ++i){

			var element = document.createElement("li");
			var img = document.createElement('img');
			var info = document.createElement('div');
			var imgcon = document.createElement('div');
			var name = document.createElement("p");
			var phone = document.createElement("p");
			var email = document.createElement("p");
			var address = document.createElement("address");
			var street = document.createElement("span");
			var city = document.createElement("span");
			var state = document.createElement("span");
			var country = document.createElement("span");


			img.src = `${randomUser.results[i].picture.large}`;
			
			name.appendChild(document.createTextNode(
				`${randomUser.results[i].name.title} ${randomUser.results[i].name.first} ${randomUser.results[i].name.last}`

				));
	
			phone.appendChild(document.createTextNode(
				`${randomUser.results[i].phone}`

				));
			
			email.appendChild(document.createTextNode(
				`${randomUser.results[i].email}`

				));
		
			street.appendChild(document.createTextNode(
				`${randomUser.results[i].location.street.number} ${randomUser.results[i].location.street.name}`
				));
			city.appendChild(document.createTextNode(
				`${randomUser.results[i].location.city}`
				));
			state.appendChild(document.createTextNode(
				`${randomUser.results[i].location.state}`
				));
			country.appendChild(document.createTextNode(
				`${randomUser.results[i].location.country}`
				));

			imgcon.appendChild(img);
			element.appendChild(imgcon);
			info.appendChild(name);
			info.appendChild(phone);
			info.appendChild(email);
			address.appendChild(street);
			address.appendChild(city);
			address.appendChild(state);
			address.appendChild(country);
			info.appendChild(address);
			element.appendChild(info);

			document.getElementById('container').appendChild(element);
    		
    		console.log();
        	
		}
	}