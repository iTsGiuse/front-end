import locandinaHalloween from './src/assets/images/Locandine/Locandina-Halloween.jpg';
import locandinaCapodanno from './src/assets/images/Locandine/Locandina-Capodanno.jpg';
import locandinaCarnevale from './src/assets/images/Locandine/Locandina-Carnevale.jpg';

const events = [
    {
        title: "Capodanno 2024",
        src: locandinaCapodanno, 
        host: "Dracarys",
        description: "Goditi il miglior capodanno con DJ set, brindisi, pandoro e panettone, fotografo e molto altro ancora! È richiesto un dress code elegante.",
        link: "capodanno-2024",
        key: 1,
        date: '2023-12-31',
        dateStart: '21.00',
        dateEnd: '3.00',
        età:'+18',
        dressCode:'elegante',
        services: ['guardaroba', 'dj', 'karaoke', 'fotografo', 'panettone e pandoro', 'brindisi'],
        location: 'Club DRACARYS',
        tags: ["capodanno", "party", "feste 2024", "club", "evento speciale"],
        stato: ''
    },
    {
        title: "Festa di Carnevale",
        src: locandinaCarnevale,
        description: "Vieni in maschera e goditi una notte piena di musica, balli e sorprese! Premiazioni per i costumi migliori e divertimento assicurato!",
        link: "carnevale-party",
        key: 2,
        date: '2024-02-17',
        dateStart: '21.00',
        dateEnd: '3.00',
        età:'+18',
        dressCode:'maschera',
        services: ['dj', 'giochi', 'guardaroba', 'premiazioni costumi'],
        location: 'Casa Claudia Zito',
        tags: ["carnevale", "party", "maschere", "feste febbraio", "club"]
    },
    {
        title: "Halloween Party",
        src: locandinaHalloween,
        link: "halloween-party",
        description: "Una serata spettrale piena di divertimento con DJ set, drink a tema e premi per i migliori costumi! Non perdere il party più terrificante dell'anno!",
        key: 3,
        date: '2024-10-31',
        dateStart: '22.00',
        dateEnd: '3.00',
        età:'+18',
        dressCode:'costume',
        services: ['giochi', 'drink a tema', 'premi costumi'],
        location: 'Club Spooky',
        tags: ["halloween", "party", "feste ottobre", "costumi", "club"]
    },
    {
        title: "Christmas Party",
        src: locandinaHalloween,
        link: "christmas-party",
        description: "",
        key: 4,
        date: '2024-12-21',
        dateStart: '22.00',
        dateEnd: '3.00',
        età:'+18',
        dressCode:'tema natalizio',
        services: ['giochi', 'dj', 'guardaroba', 'karaoke', 'fotografo'],
        gamesName: ['Beer Pong', 'Twister', 'Sei un drago' ],
        dj: 'Naga',
        fotografo: '',
        pulizia: 'noi',
        location: '',
        tags: ["Christmas", "party", "feste dicembre", "costumi", "dj"]
    },

];

export default events;

/* 
ordine:

1 - POSTO 
2 - LOCANDINA 
3 - TROVARE FOTOGRAFO
4 - Addobbi
5 - LISTA MUSICA
6 - LISTA GIOCHI
7 - FARE LA SPESA
8 - Allestire 
9 - SPACCARE
 */