/*
Milestone 1
● Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
dall’interlocutore (bianco) assegnando due classi CSS diverse
● Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare
nome e immagine di ogni contatto

Milestone 2
● Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all’interno del pannello della conversazione
● Click sul contatto mostra la conversazione del contatto cliccato

Milestone 3
● Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
● Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà
un “ok” come risposta, che apparirà dopo 1 secondo.

Milestone 4
● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina)
*/

const {createApp} = Vue;

createApp({
    data (){
        return{
            currentlyActiveIndex: 0,
            newMessage: '',
            sayOk: 'Ok',
            searchName: '',
            contactsColors: {
                'Mamma': 'text-warning',
                'Papà': 'text-info',
                'Valerio':'text-danger',
                'Io':'text-success',
                'Ramona':'text-primary',
                'Isabella':'text-danger-emphasis'
            },
            contacts: [
                    {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    isActive: true,
                    silent: false,
                    messages: [
                            {
                            date: '10/01/2023 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2023 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2023 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Andrea',
                        avatar: './img/avatar_2.jpg',
                        visible: true,
                        isActive: false,
                        silent: false,
                        messages: [
                            {
                            date: '20/03/2023 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                            },
                            {
                            date: '20/03/2023 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                            },
                            {
                            date: '20/03/2023 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                            }
                        ],
                    },
                    {
                        name: 'Samuele',
                        avatar: './img/avatar_3.jpg',
                        visible: true,
                        isActive: false,
                        silent: false,
                        messages: [
                            {
                            date: '28/03/2023 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                            },
                            {
                            date: '28/03/2023 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                            },
                            {
                            date: '28/03/2023 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Alessandro B.',
                        avatar: './img/avatar_4.jpg',
                        visible: true,
                        isActive: false,
                        silent: false,
                        messages: [
                            {
                            date: '10/01/2023 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2023 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Valerio',
                        avatar: './img/avatar_5.jpg',
                        visible: true,
                        isActive: false,
                        silent: false,
                        messages: [
                            {
                            date: '10/01/2023 15:30:55',
                            message: 'Ricordati di chiamare nonno',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2023 15:50:00',
                            message: 'Va bene, stasera lo sento',
                            status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Carla',
                        avatar: './img/avatar_6.jpg',
                        visible: true,
                        isActive: false,
                        silent: false,
                        messages: [
                            {
                            date: '10/01/2023 15:30:55',
                            message: 'Ciao Carla, hai novità?',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2023 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                            },
                            {
                            date: '10/01/2023 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                            }
                        ],
                    },
                    {
                        name: 'Federico',
                        avatar: './img/avatar_7.jpg',
                        visible: true,
                        isActive: false,
                        silent: false,
                        messages: [
                            {
                            date: '10/01/2023 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2023 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Tozzetto\'s Family',
                        avatar: 'https://cdn-icons-png.flaticon.com/512/7051/7051035.png',
                        visible: true,
                        isActive: false,
                        silent: true,
                        messages: [
                            {
                            nameFamily: 'Mamma',
                            date: '10/01/2023 15:30:55',
                            message: 'Ciao ragazzi, non mi funziona internet come posso fare?',
                            status: 'received'
                            },
                            {
                            nameFamily: 'Papà',
                            date: '10/01/2023 15:50:00',
                            message: 'Michela stasera mi guardi il telefono? C\'è un messaggio strano',
                            status: 'received'
                            },
                            {
                            nameFamily: 'Valerio',
                            date: '10/01/2023 15:51:00',
                            message: 'Mamma stacca la spina e riavvia il modem!',
                            status: 'received'
                            },
                            {
                            nameFamily: 'Io',
                            date: '10/01/2023 15:51:00',
                            message: 'Ok stasera lo vediamo.. che pazienza!',
                            status: 'sent'
                            }
                        ],
                    },
                    {
                        name: 'Davide',
                        avatar: './img/avatar_8.jpg',
                        visible: true,
                        isActive: false,
                        silent: false,
                        messages: [
                            {
                            date: '10/01/2023 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                            },
                            {
                            date: '10/01/2023 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                            },
                            {
                            date: '10/01/2023 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                            }
                        ],
                    },
                    {
                        name: 'Girls\' Power',
                        avatar: 'https://us.123rf.com/450wm/yupiramos/yupiramos1902/yupiramos190204518/125388778-group-of-women-avatars-characters-vector-illustration-design.jpg?ver=6',
                        visible: true,
                        isActive: false,
                        silent: false,
                        messages: [
                            {
                            nameFamily: 'Ramona',
                            date: '10/01/2023 15:30:55',
                            message: 'Stasera che facciamo? Andiamo in palestra?',
                            status: 'received'
                            },
                            {
                            nameFamily: 'Isabella',
                            date: '10/01/2023 15:50:00',
                            message: 'Io ho il turno domani mattina, però ci sono!',
                            status: 'received'
                            },
                            {
                            nameFamily: 'Io',
                            date: '10/01/2023 15:51:00',
                            message: 'Ovvio, io vado a Pilates alle 19, ci vediamo lì?',
                            status: 'sent'
                            },
                            {
                            nameFamily: 'Ramona',
                            date: '10/01/2023 15:51:00',
                            message: 'Uffa, a me Pilates non piaceee',
                            status: 'received'
                            }
                        ],
                    },
                ],
            mioAvatar: 'https://static.vecteezy.com/ti/vettori-gratis/p1/24183541-femmina-avatar-bionda-donna-ritratto-vettore-illustrazione-di-un-femmina-personaggio-nel-un-moderno-colore-stile-vettoriale.jpg' 
            }
        },
        methods: {
            switchChat(currentlyActiveIndex){
            
                this.contacts[this.currentlyActiveIndex].isActive = false
                silent: false;
                
                this.currentlyActiveIndex = currentlyActiveIndex;

                this.contacts[this.currentlyActiveIndex].isActive = true;
            },
            newMessageSent(){
                console.log('ho cliccato enter')
                console.log(this.newMessage)
                if(this.newMessage != ''){
                    
                    this.contacts[this.currentlyActiveIndex].messages.push({
                        date: this.getNewDate(),
                        message: this.newMessage,
                        status: 'sent'});

                        this.newMessage = '';
                        
                    setTimeout(() => {
                        this.contacts[this.currentlyActiveIndex].messages.push({
                            date: this.getNewDate(),
                            message: this.sayOk,
                            status: 'received'})
                        }, 1000);
                    }
                    
            },
            searchContacts(){
                console.log(this.searchName)
            
                for(let i = 0; i < this.contacts.length; i++){
                    this.contacts[i].visible = false
                    if(this.contacts[i].name.toLowerCase().includes(this.searchName.toLowerCase())){
                        this.contacts[i].visible = true
                    }
                }
            },
            removeMessage(index){
                this.contacts[this.currentlyActiveIndex].messages.splice(index,1)
            },
            getNewDate(){
                let currentdate = new Date();

                let day = currentdate.getDate();
                let month = currentdate.getMonth();
                let year = currentdate.getFullYear();
                let hours = currentdate.getHours();
                let minutes = currentdate.getMinutes();
                let second = currentdate.getSeconds();

                const totalDate = `${day}/${month}/${year}
                ${hours}:${minutes}:${second}`

                console.log(totalDate)
                return totalDate;
            }
        }
    }).mount('#app');
    
