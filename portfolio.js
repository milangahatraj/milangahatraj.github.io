var container = document.querySelector('.container')
var content = document.createElement('div')
content.classList.add('content')

var image = document.createElement('img')
image.classList.add('img')
image.src = "./image/milan.jpg"



content.appendChild(image)
container.appendChild(content)

var content1 = document.createElement('div')
content1.classList.add('content1')
var Name = document.createElement('h1')
Name.classList.add('name')
Name.textContent = "Milan Gahatraj"

var description = document.createElement('p')
description.classList.add('des')
description.textContent = "Web Dveveloper"


content1.appendChild(Name)
content1.appendChild(description)
container.appendChild(content1)

var social = document.createElement('div')
social.classList.add('social-media')
var facebookLink = document.createElement('a')
facebookLink.href = "https://www.facebook.com"

var facebook = document.createElement('img')
facebook.classList.add('facebook')
facebook.src = "./image/facebook.png"
facebookLink.appendChild(facebook)

social.appendChild(facebookLink)
container.appendChild(social)

var twitterLink = document.createElement('a')
twitterLink.href = "https://www.twitter.com"
var twitter = document.createElement('img')
twitter.classList.add('twitter')
twitter.src = "./image/twitter.png"

twitterLink.appendChild(twitter)
social.appendChild(twitterLink)

var instagramLink = document.createElement('a')
instagramLink.href = "https://www.instagram.com"
var instagram = document.createElement('img')
instagram.classList.add('instagram')
instagram.src = "./image/instagram.png"

instagramLink.appendChild(instagram)
social.appendChild(instagramLink)

var googleLink = document.createElement('a')
googleLink.href = "https://www.gmail.com"
var google = document.createElement('img')
google.classList.add('google')
google.src = "./image/google.png"

googleLink.appendChild(google)
social.appendChild(googleLink)

var Incwell = document.createElement('img')
Incwell.classList.add('incwell')
Incwell.src = "./image/incwell.png"
social.appendChild(Incwell)

var CV = document.createElement('button')
CV.classList.add('cv')
CV.textContent = "Download CV"
container.appendChild(CV)


var para1 = document.createElement('h2')
para1.classList.add('area')
para1.textContent = 'Working Area'
container.appendChild(para1)
var workplace = document.createElement('p')
workplace.textContent = "Trainee at Incwell venture pvt.ltd."
container.appendChild(workplace)


var Ftitle = document.createElement('h3')
Ftitle.classList.add('title')
Ftitle.textContent = "Titile Goes Here"

container.appendChild(Ftitle)

var para3 = document.createElement('h3')
para3.classList.add('title2')
para3.textContent = "Titile Goes Here"
container.appendChild(para3)

var para4 = document.createElement('h3')
para4.classList.add('title3')
para4.textContent = "Titile Goes Here"
container.appendChild(para4)