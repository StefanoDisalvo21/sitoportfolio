const firebaseConfig = {
    apiKey: "AIzaSyBQ3ViGrD8JnE1ZyOIcmp-Hs3WdIPIKZ9I",
    authDomain: "sito-25ada.firebaseapp.com",
    databaseURL: "https://sito-25ada-default-rtdb.firebaseio.com",
    projectId: "sito-25ada",
    storageBucket: "sito-25ada.appspot.com",
    messagingSenderId: "238076036875",
    appId: "1:238076036875:web:d8b23eedf0cad17000440e"
};

// inizzializzazione firebase
firebase.initializeApp(firebaseConfig);

//collegamento al database
var contactFormDB = firebase.database().ref('Sito');

document.getElementById("formato").addEventListener("submit",submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal('nome');
    var email = getElementVal('posta');
    var messaggio = getElementVal('messaggio');

    saveMessages(name, email, messaggio);
    
    //Reset
	document.getElementById("formato").reset();
}

const saveMessages = (nome,posta,messaggio) => {
    var newContactForm = contactFormDB.push();
    
    newContactForm.set({
        name: nome,
        email: posta,
        messaggio: messaggio,
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}
