export default function BookList() {
   let pageTitle = "shrug";
   let book1 = "https://images-na.ssl-images-amazon.com/images/I/81vY9hRyKgL._AC_UL600_SR600,600_.jpg";
   let book2 = "https://mpd-biblio-covers.imgix.net/9781250781086.jpg?w=300";
   let book3 = "https://m.media-amazon.com/images/I/81GBfL5qaNL._AC_UF1000,1000_QL80_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="None of this is true" />
         <img src={book2} alt="An evil heart" />
         <img src={book3} alt="Last rites" />
      </div>      
   );
}