(this.webpackJsonpdish=this.webpackJsonpdish||[]).push([[0],{33:function(e,t,a){e.exports=a(46)},38:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(23),o=a.n(n),s=(a(38),a(8)),h=a(9);function l(){var e=Object(s.a)(["\n  margin: auto;\n  width: 50%;\n  padding: 10px;\n"]);return l=function(){return e},e}var d=h.a.div(l()),m=a(67),c=function(){return r.a.createElement(d,null,r.a.createElement(m.a,{gutterBottom:!0,variant:"h4",component:"h2"},"Heyo Dishcord!"),r.a.createElement(m.a,{gutterBottom:!0,variant:"body",component:"p"},"Every week (ish), we try to coordinate movie nights where we all gather together virtually to watch a movie in the Discord. Below are all the movies on the list."))},u=a(17);function p(){var e=Object(s.a)(["\n  margin-bottom: 60px;\n  p {\n    padding: 0.5em;\n  }\n"]);return p=function(){return e},e}function g(){var e=Object(s.a)(["\n  background-color: #ffffff;\n  border-radius: 4px;\n  border: 1px;\n  font-size: 20px;\n  font-style: italic;\n  margin: 0.5em 0.25em;\n  padding: 0.25em 1em;\n  &:active,\n  &:visited {\n    border: 0;\n    background-color: #fdd0f1;\n  }\n"]);return g=function(){return e},e}function w(){var e=Object(s.a)(["\n  margin: auto;\n  width: 80%;\n  padding: 10px;\n\n  h2 span {\n    background-color: #fdd0f1;\n    border-radius: 4px;\n    padding: 0.1em 0.2em;\n    color: #72bbb4;\n  }\n  h1 span {\n    background-color: #fdd0f1;\n    border-radius: 8px;\n    padding: 0.1em 0.2em;\n    color: #72bbb4;\n  }\n"]);return w=function(){return e},e}var b=h.a.div(w()),v=h.a.button(g()),f=h.a.div(p()),y=a(63),_=a(6),k=a(64),E=a(65),S=a(66),j=function(e){var t=e.poster,a=e.title,i=e.overview;e.submitter;return r.a.createElement(y.a,{container:!0,item:!0,xs:12,sm:4},r.a.createElement(k.a,null,r.a.createElement(E.a,{component:"img",alt:a,width:200,image:t,title:a}),r.a.createElement(S.a,null,r.a.createElement(m.a,{gutterButtom:!0,variant:"h5",component:"h2"},a),r.a.createElement(m.a,{variant:"body2",color:"textSecondary",component:"p"},i))))},T=a(16),x=a.n(T),B=a(47),D=function(e){var t=e.poster,a=e.title,i=e.overview,n=e.contributor,o=x.a.utc("September 12 2020, 2:00:00 pm","MMMM Do YYYY, h:mm a"),s=o.local(),h=x.a.duration(o).subtract(x()());return r.a.createElement(f,null,r.a.createElement(B.a,{elevation:3},r.a.createElement("h1",null,r.a.createElement("span",null,"Up Next")),r.a.createElement(y.a,{container:!0,spacing:1},r.a.createElement(y.a,{item:!0,xs:12,sm:3},r.a.createElement(E.a,{component:"img",image:t})),r.a.createElement(y.a,{item:!0,xs:12,sm:9},r.a.createElement("p",null,r.a.createElement(m.a,{gutterBottom:!0,variant:"body",component:"h1"},a),r.a.createElement(m.a,{gutterBottom:!0,variant:"body",component:"h3"},"Showtime: ",s.format("MMMM Do YYYY, h:mm a")," (that's in"," ",h.humanize(),"!)"),r.a.createElement(m.a,{gutterBottom:!0,variant:"body",component:"h4"},"Submitted By: ",n),r.a.createElement(m.a,{gutterBottom:!0,variant:"body",component:"p"},i))))))},M=function(){var e=Object(i.useState)(_),t=Object(u.a)(e,2),a=t[0],n=t[1],o=Object(i.useState)(null),s=Object(u.a)(o,2),h=s[0],l=s[1],d=Object(i.useState)(null),m=Object(u.a)(d,2),c=m[0],p=m[1],g=_.map((function(e){return e.submitter})).filter((function(e,t){return _.map((function(e){return e.submitter})).indexOf(e)===t})),w=_.filter((function(e){return e.queue}));Object(i.useEffect)((function(){null!=c&&null!=h?n(_.filter((function(e){return(c?e.watched:!e.watched)&&e.submitter===h}))):null!=c?n(_.filter((function(e){return c?e.watched:!e.watched}))):null!=h&&n(_.filter((function(e){return e.submitter===h})))}),[h,c]);var f=function(e){l(e.target.value)};return r.a.createElement(b,null,r.a.createElement(y.a,{container:!0,spacing:3,alignItems:"center"},r.a.createElement(y.a,{item:!0,xs:12,sm:6},r.a.createElement("center",null,r.a.createElement("h2",null,r.a.createElement("span",null,"Seen")),r.a.createElement("h1",null,_.filter((function(e){return e.watched})).length))),r.a.createElement(y.a,{item:!0,xs:12,sm:6},r.a.createElement("center",null,r.a.createElement("h2",null,r.a.createElement("span",null,"Unseen")),r.a.createElement("h1",null,_.filter((function(e){return!e.watched})).length)))),w&&r.a.createElement(D,{title:w[0].title,contributor:w[0].submitter,overview:w[0].overview,poster:w[0].poster}),r.a.createElement("div",null,r.a.createElement("h2",null,r.a.createElement("span",null,"Filter by Seen")),r.a.createElement(v,{onClick:function(){p(null),l(null),n(_)}},"All"),r.a.createElement(v,{onClick:function(){p(!0)}},"Seen"),r.a.createElement(v,{onClick:function(){p(!1)}},"Unseen")),r.a.createElement("div",null,r.a.createElement("h2",null,r.a.createElement("span",null,"Filter By Contributor")),g.map((function(e){return r.a.createElement(v,{onClick:f,value:e},e)}))),c!==h&&r.a.createElement("h4",null,null!==c&&r.a.createElement("span",null,"Seen: ",c.toString())," ",null!==h&&r.a.createElement("span",null,"Submitter: ",h)),0===a.length&&r.a.createElement("p",null,"No movies found with the chosen filters."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y.a,{container:!0,justify:"center",direction:"row",alignItems:"flex-start",spacing:2},a.map((function(e){return r.a.createElement(j,{title:e.title,poster:e.poster,overview:e.overview,contributor:e.submitter})}))))};function A(){var e=Object(s.a)(["\n  padding: 1em;\n  text-align: center;\n"]);return A=function(){return e},e}var O=h.a.div(A()),W=function(){return r.a.createElement(O,null," ",r.a.createElement(y.a,{container:!0,alignItems:"center"},r.a.createElement(y.a,{item:!0,xs:12},"Made with"," ",r.a.createElement("span",{role:"img","aria-label":"heart"},"\u2764\ufe0f")," ","using React. By ",r.a.createElement("a",{href:"https://codejulen.github.io"},"Julian")," for"," ",r.a.createElement("a",{href:"https://twitch.tv/imdishrag"},"Dish")," and her wonderful community."),r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement("a",{href:"https://github.com/codejulen/dish/blob/master/CHANGELOG.md"},"Changelog"))))};var I=function(){return r.a.createElement("div",null,r.a.createElement(c,null),r.a.createElement(M,null),r.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e){e.exports=JSON.parse('[{"title":"Fandango","queue":true,"submitter":"Dish","overview":"Five college buddies from the University of Texas circa 1971 embark on a final road trip odyssey across the Mexican border before facing up to uncertain futures, in Vietnam and otherwise.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/tSyh7XLyVOxUP3AwYCcgcyQxew0.jpg"},{"title":"Kimi No Na Wa","submitter":"Rhys","overview":"High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki\u2019s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/q719jXXEzOoYaps6babgKnONONX.jpg"},{"title":"3 Idiots","submitter":"Gabi","overview":"In the tradition of \u201cFerris Bueller\u2019s Day Off\u201d comes this refreshing comedy about a rebellious prankster with a crafty mind and a heart of gold. Rascal. Joker. Dreamer. Genius... You\'ve never met a college student quite like \\"Rancho.\\" From the moment he arrives at India\'s most prestigious university, Rancho\'s outlandish schemes turn the campus upside down\u2014along with the lives of his two newfound best friends. Together, they make life miserable for \\"Virus,\\" the school\u2019s uptight and heartless dean. But when Rancho catches the eye of the dean\'s sexy daughter, Virus sets his sights on flunking out the \\"3 idiots\\" once and for all.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/k1iWMypGjk1b59oCHLtyfd4hw99.jpg"},{"title":"Knives Out","submitter":"Gabi","overview":"When renowned crime novelist Harlan Thrombey is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc is mysteriously enlisted to investigate. From Harlan\'s dysfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan\'s untimely death.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/pThyQovXQrw2m0s9x82twj48Jq4.jpg"},{"title":"Moonrise Kingdom","submitter":"Bin","overview":"Set on an island off the coast of New England in the summer of 1965, Moonrise Kingdom tells the story of two twelve-year-olds who fall in love, make a secret pact, and run away together into the wilderness. As various authorities try to hunt them down, a violent storm is brewing off-shore \u2013 and the peaceful island community is turned upside down in more ways than anyone can handle.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/wOgmhrSUwOuZJsQXf2GsI923N0f.jpg"},{"title":"Perfect Blue","submitter":"Bin","overview":"A retired pop singer turned actress\' sense of reality is shaken when she is stalked by an obsessed fan and seemingly a ghost of her past.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/79vujbsWEbX4dzffBV541QXN6sf.jpg"},{"title":"When Marnie Was There","submitter":"JJ","overview":"Upon being sent to live with relatives in the countryside due to an illness, an emotionally distant adolescent girl becomes obsessed with an abandoned mansion and infatuated with a girl who lives there - a girl who may or may not be real.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/vug1dvDI1tSa60Z8qjCuUE7ntkO.jpg"},{"title":"Fantastic Mr. Fox","submitter":"Rhys","overview":"The Fantastic Mr. Fox bored with his current life, plans a heist against the three local farmers. The farmers, tired of sharing their chickens with the sly fox, seek revenge against him and his family.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/njbTizADSZg4PqeyJdDzZGooikv.jpg"},{"title":"The Goonies","submitter":"Owen","overview":"A young teenager named Mikey Walsh finds an old treasure map in his father\'s attic. Hoping to save their homes from demolition, Mikey and his friends Data Wang, Chunk Cohen, and Mouth Devereaux run off on a big quest to find the secret stash of Pirate One-Eyed Willie.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/oxz1HIdUjQN23IZQk4Gy7ozJBM0.jpg"},{"title":"The Truman Show","submitter":"Owen","overview":"Truman Burbank is the star of The Truman Show, a 24-hour-a-day reality TV show that broadcasts every aspect of his life without his knowledge. His entire life has been an unending soap opera for consumption by the rest of the world. And everyone he knows, including his wife and his best friend is really an actor, paid to be part of his life.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/jW8w2QZnCSRblYWPc5FKAkS1cal.jpg"},{"title":"Interstellar","submitter":"Manan","overview":"The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"},{"title":"Scott Pilgrim VS The World","submitter":"Shannon","overview":"Scott Pilgrim is a 22 year old radical Canadian wannabe rockstar who falls in love with an American delivery girl, Ramona Flowers, and must defeat her seven evil exes to be able to date her.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/g5IoYeudx9XBEfwNL0fHvSckLBz.jpg"},{"title":"Spiderman: Into The Spider-Verse","submitter":"Shannon","overview":"Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson \\"Kingpin\\" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg"},{"title":"Arrival","submitter":"Shannon","overview":"Taking place after alien crafts land around the world, an expert linguist is recruited by the military to determine whether they come in peace or are a threat.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg"},{"title":"Ex-Machina","submitter":"Shannon","overview":"Caleb, a 26 year old coder at the world\'s largest internet company, wins a competition to spend a week at a private mountain retreat belonging to Nathan, the reclusive CEO of the company. But when Caleb arrives at the remote location he finds that he will have to participate in a strange and fascinating experiment in which he must interact with the world\'s first true artificial intelligence, housed in the body of a beautiful robot girl.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/9goPE2IoMIXxTLWzl7aizwuIiLh.jpg"},{"title":"Good Will Hunting","submitter":"Adam","overview":"Will Hunting has a genius-level IQ but chooses to work as a janitor at MIT. When he solves a difficult graduate-level math problem, his talents are discovered by Professor Gerald Lambeau, who decides to help the misguided youth reach his potential. When Will is arrested for attacking a police officer, Professor Lambeau makes a deal to get leniency for him if he will get treatment from therapist Sean Maguire.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/bABCBKYBK7A5G1x0FzoeoNfuj2.jpg"},{"title":"500 Days Of Summer","submitter":"Adam","overview":"Tom, greeting-card writer and hopeless romantic, is caught completely off-guard when his girlfriend, Summer, suddenly dumps him. He reflects on their 500 days together to try to figure out where their love affair went sour, and in doing so, Tom rediscovers his true passions in life.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/f9mbM0YMLpYemcWx6o2WeiYQLDP.jpg"},{"title":"Parasite","submitter":"Shannon","overview":"All unemployed, Ki-taek\'s family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"},{"title":"Hush","submitter":"Shannon","overview":"A mysterious new villain known only as Hush uses a gallery of villains to destroy Batman\'s crime-fighting career as well as Bruce Wayne\'s personal life, which has been further complicated by a  relationship with Selina Kyle/Catwoman.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/eiVQORVyVuNNZHPAELuWtlXoQsD.jpg"},{"title":"The One I Love","submitter":"Shannon","overview":"On the brink of separation, Ethan and Sophie escape to a beautiful vacation house for a weekend getaway in an attempt to save their marriage. What begins as a romantic and fun retreat soon becomes surreal, when an unexpected discovery forces the two to examine themselves, their relationship, and their future.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/fOvd8tpltq8LzkjyDwSzG0Phah4.jpg"},{"title":"Porco Rosso","submitter":"JJ","watched":true,"overview":"In Italy in the 1930s, sky pirates in biplanes terrorize wealthy cruise ships as they sail the Adriatic Sea. The only pilot brave enough to stop the scourge is the mysterious Porco Rosso, a former World War I flying ace who was somehow turned into a pig during the war. As he prepares to battle the pirate crew\'s American ace, Porco Rosso enlists the help of spunky girl mechanic Fio Piccolo and his longtime friend Madame Gina.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/byKAndF6KQSDpGxp1mTr23jPbYp.jpg"},{"title":"Howl\u2019s Moving Castle","submitter":"JJ","overview":"When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/TkTPELv4kC3u1lkloush8skOjE.jpg"},{"title":"Spirited Away","submitter":"JJ","watched":true,"overview":"The people that brought the film Sen to Chihiro no kamikakushi (2001) (a.k.a. \\"Spirited Away\\") to the US explain how it was converted into English, with some minor confusion between languages, and how well it did in both Japan and America.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/x1iaVnI4mTaETwAKTLyIAKFwQSJ.jpg"},{"title":"Punch-Drunk Love","submitter":"Eli","overview":"A socially awkward and volatile small business owner meets the love of his life after being threatened by a gang of scammers.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/vT2CXIsVKoGl0DZ8USwLWzEFznI.jpg"},{"title":"The Meyerowitz Stories","submitter":"Eli","overview":"An estranged family gathers together in New York for an event celebrating the artistic work of their father.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/c9teDTgwxgnb7wnZjZo4oNcF80R.jpg"},{"title":"The Shining","submitter":"Owen","overview":"Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren\'t prepared for the madness that lurks within.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/b6ko0IKC8MdYBBPkkA1aBPLe2yz.jpg"},{"title":"Train To Busan","submitter":"Owen","overview":"Martial law is declared when a mysterious viral outbreak pushes Korea into a state of emergency. Those on an express train to Busan, a city that has successfully fended off the viral outbreak, must fight for their own survival\u2026","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/2oRRTPNtozgPhOa9CYZiVl4GRQ5.jpg"},{"title":"Uncut Gems","submitter":"Eli","overview":"A charismatic New York City jeweler always on the lookout for the next big score makes a series of high-stakes bets that could lead to the windfall of a lifetime. Howard must perform a precarious high-wire act, balancing business, family, and encroaching adversaries on all sides in his relentless pursuit of the ultimate win.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/6XN1vxHc7kUSqNWtaQKN45J5x2v.jpg"},{"title":"Eternal Sunshine Of The Spotless Mind","submitter":"Eli","overview":"Joel Barish, heartbroken that his girlfriend underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realises that he still loves her, and may be too late to correct his mistake.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg"},{"title":"Immortal Warrior","submitter":"Owen","overview":"Immortal Warriors is a Taiwanese Martial Arts movie.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/zSZM4d5DSBDGJWZH3WmxxcwjYK2.jpg"},{"title":"King Of Comedy","submitter":"Owen","overview":"Aspiring comic Rupert Pupkin attempts to achieve success in show business by stalking his idol, a late night talk-show host who craves his own privacy.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/m24EbHxT9NGYEkOlu29YcLOgjgK.jpg"},{"title":"Inglorious Basterds","submitter":"Eli","overview":"In Nazi-occupied France during World War II, a group of Jewish-American soldiers known as \\"The Basterds\\" are chosen specifically to spread fear throughout the Third Reich by scalping and brutally killing Nazis. The Basterds, lead by Lt. Aldo Raine soon cross paths with a French-Jewish teenage girl who runs a movie theater in Paris which is targeted by the soldiers.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg"},{"title":"The Cabinet of Dr. Caligari","submitter":"Owen","overview":"Remake of Das Cabinet des Dr. Caligari (1920). Shot entirely on green screen. Some exact shots from the 1920 film were superimposed to properly replicate the original. Francis relates the story of traveling magician Dr. Caligari and Cesare. Their arrival in a town coincides with savage killings.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/qWkMs5A4N1X4iRCdHDhnq6b5f1y.jpg"},{"title":"Bridge To Terabithia","submitter":"Gal","overview":"Jesse Aarons trained all summer to become the fastest runner in school, so he\'s very upset when newcomer Leslie Burke outruns him and everyone else. Despite this and other differences, including that she\'s rich, he\'s poor, and she\'s a city girl, he\'s a country boy, the two become fast friends. Together, they create Terabithia, a land of monsters, trolls, ogres, and giants and rule as king and queen.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/3xFxGodKPMFLheS8rujFSmLfcq4.jpg"},{"title":"Metropolis","submitter":"Owen","overview":"In a futuristic city sharply divided between the working class and the city planners, the son of the city\'s mastermind falls in love with a working class prophet who predicts the coming of a savior to mediate their differences.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/hUK9rewffKGqtXynH5SW3v9hzcu.jpg"},{"title":"Star Wars Episode I: The Phantom Menace","submitter":"Darc\'e","watched":true,"overview":"Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/6wkfovpn7Eq8dYNKaG5PY3q2oq6.jpg"},{"title":"Star Wars Episode II: Attack Of The Clones","submitter":"Darc\'e","overview":"Following an assassination attempt on Senator Padm\xe9 Amidala, Jedi Knights Anakin Skywalker and Obi-Wan Kenobi investigate a mysterious plot that could change the galaxy forever.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/oZNPzxqM2s5DyVWab09NTQScDQt.jpg"},{"title":"Star Wars Episode III: Revenge Of The Sith","submitter":"Darc\'e","overview":"The evil Darth Sidious enacts his final plan for unlimited power -- and the heroic Jedi Anakin Skywalker must choose a side.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg"},{"title":"Star Wars Episode IV: A New Hope","submitter":"Darc\'e","overview":"Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"},{"title":"Star Wars Episode V: The Empire Strikes Back","submitter":"Darc\'e","overview":"The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/7BuH8itoSrLExs2YZSsM01Qk2no.jpg"},{"title":"Star Wars Episode VI: Return Of The Jedi","submitter":"Darc\'e","overview":"Luke Skywalker leads a mission to rescue his friend Han Solo from the clutches of Jabba the Hutt, while the Emperor seeks to destroy the Rebellion once and for all with a second dreaded Death Star.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/mDCBQNhR6R0PVFucJl0O4Hp5klZ.jpg"},{"title":"Star Wars Episode VII: The Force Awakens","submitter":"Darc\'e","overview":"Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg"},{"title":"Star Wars Episode VIII: The Last Jedi","submitter":"Darc\'e","overview":"Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg"},{"title":"Star Wars: The Rise Of Skywalker","submitter":"Darc\'e","overview":"The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/db32LaOibwEliAmSL2jjDF6oDdj.jpg"},{"title":"Hesher","submitter":"Gal","overview":"A young boy has lost his mother and is losing touch with his father and the world around him. Then he meets Hesher who manages to make his life even more chaotic.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/dD03azf3h1hUHVzVkkqJs96Kkay.jpg"},{"title":"Psycho","submitter":"Eli","overview":"When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/nR4LD4ZJg2n6LZQpcOrLFdMq0cD.jpg"},{"title":"Leon The Professional","submitter":"Julian","overview":"L\xe9on, the top hit man in New York, has earned a rep as an effective \\"cleaner\\". But when his next-door neighbors are wiped out by a loose-cannon DEA agent, he becomes the unwilling custodian of 12-year-old Mathilda. Before long, Mathilda\'s thoughts turn to revenge, and she considers following in L\xe9on\'s footsteps.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/hxZKx5v4A2QiQ8sfLaph73baYpJ.jpg"},{"title":"The Diving Bell And The Butterfly","submitter":"Julian","overview":"The true story of Elle France editor Jean-Dominique Bauby, who, in 1995 at the age of 43, suffered a stroke that paralyzed his entire body, except his left eye. Using that eye to blink out his memoir, Bauby eloquently described the aspects of his interior world, from the psychological torment of being trapped inside his body to his imagined stories from lands he\'d only visited in his mind.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/3MJUo4bCPai5r9zrw7nTS8sVzQ7.jpg"},{"title":"Paris Je T\u2019aime","submitter":"Julian","overview":"Olivier Assayas, Gus Van Sant, Wes Craven and Alfonso Cuaron are among the 20 distinguished directors who contribute to this collection of 18 stories, each exploring a different aspect of Parisian life. The colourful characters in this drama include a pair of mimes, a husband trying to chose between his wife and his lover, and a married man who turns to a prostitute for advice.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/w2ymaGlJqgNHjexYQ6h0ByoGzw8.jpg"},{"title":"Moonlight","submitter":"Julian","overview":"The tender, heartbreaking story of a young man\u2019s struggle to find himself, told across three defining chapters in his life as he experiences the ecstasy, pain, and beauty of falling in love, while grappling with his own sexuality.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/93NN95a71MsQ4tR2zSLv8BNK2qh.jpg"},{"title":"Finding Forrester","submitter":"Julian","overview":"Gus Van Sant tells the story of a young African American man named Jamal who confronts his talents while living on the streets of the Bronx. He accidentally runs into an old writer named Forrester who discovers his passion for writing. With help from his new mentor Jamal receives a scholarship to a private school.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/heHi6n68fDiQoUc7SMletM9Adjz.jpg"},{"title":"Star Wars: Rogue One","submitter":"Darc\'e","overview":"A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/5jX3p0apUG5bkMHtnKZch0xpkBS.jpg"},{"title":"Solo: A Star Wars Story","submitter":"Manny","overview":"Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.","poster":"https://image.tmdb.org/t/p/w600_and_h900_bestv2/4oD6VEccFkorEBTEDXtpLAaz0Rl.jpg"}]')}},[[33,1,2]]]);
//# sourceMappingURL=main.d75b129b.chunk.js.map