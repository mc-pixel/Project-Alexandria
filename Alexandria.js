const slider = tns({
  container: ".js-carousel",
  items: 1,
  slideBy: "page",
  autoplay: false,
  mouseDrag: true,
  controlsText: [
    '<i class="fas fa-chevron-left"></i>',
    '<i class="fas fa-chevron-right"></i>'
  ]
});
firebase.initializeApp({
  apiKey: 'AIzaSyCqJJvdwD5QLuY0NtSJtlw8AgcJDGkj_eU',
  authDomain: 'project-alexandria-613cb.firebaseapp.com',
  projectId: 'project-alexandria-613cb'
});

var db = firebase.firestore();
var booksRef = db.collection("Books");

var query = booksRef.where("Author", "==", "Isaac Asimov");

it("should get all books", () => {
  var output = db.collection("Books").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} => ${doc.data()}`);
                });
            });
            console.log(output);
               return output;
                             });

