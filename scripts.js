let data = [
    {
        photo: 'images/kep1.jpg',
        title: 'Én és a ló',
        description: 'Túrázás közben egy pacival'
    },

        {
        photo: './images/kep2.jpg',
        title: 'Az új tévém',
        description: 'Végül eladtam, mert túl sötét volt a képe.'
    },
    
        {
        photo: './images/kep3.jpg',
        title: 'Fő a biztonság',
        description: 'Ne felejtsük otthon a maszkot a közlekedés közben!'
    },

        {
        photo: './images/kep4.jpg',
        title: '',
        description: 'Ne felejtsük otthon a maszkot a közlekedés közben!'
    },

        {
        photo: './images/kep5.jpg',
        title: 'Ez egy kereszt',
        description: 'Üdvözlünk a Nagy Szénás hegyen!'
    },
    
        {
        photo: './images/kep6.jpg',
        title: 'Nagy Szénás',
        description: 'Szuper a kilátás, megéri feljönni a csúcsra!'
    },

        {
        photo: './images/kep7.jpg',
        title: 'Autópálya',
        description: 'Ez direkt ilyen, nem a kép csúszott szét.'
    },
        {
        photo: './images/kep8.jpg',
        title: 'Fagy Bokodon',
        description: 'A Bokodi tó népszerű tó az Instagram felhasználóinak népszerű helyszíne.'
    },

];

let currentPhoto = 0;
$('#photo').attr('src', data[currentPhoto].photo);



/*
Ez Csaba kódja elemzéshez:
let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', data[photoNumber].photo);
}

$('#balranyil').click (() => {
    if(currentPhoto > 0) {
        currentPhoto --;
        loadPhoto(currentPhoto);
    } else {
        currentPhoto = 9;
        loadPhoto(currentPhoto);
    }   
})

$('#jobbranyil').click (() => {
    if(currentPhoto > 9) {
        currentPhoto = 0;
        loadPhoto(currentPhoto);
    } else {
        currentPhoto ++;
        loadPhoto(currentPhoto);
    }   
})

*/