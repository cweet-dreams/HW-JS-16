// Init UI
const ui = new UI();
// Api key
const apiKey = "7a8ffd330f4a4f29b53c032a7e21f4af";
// Init Auth
const auth = new Auth();
// Init Favorite news
const news = new FavoriteNews();
// Init news store
const newsStore = NewsStore.getInstance();

// по загрузке страницы получить все новости избранные
window.addEventListener("load", onLoad);

function onLoad(e) {
    // получить избранные новости
    news.getFavoriteNews()
        .then(favoriteNews => {            
            favoriteNews.forEach((doc) => {
                console.log(`${doc.id}`);
                console.dir(doc.data());
                // выводим в разметку
                ui.addFavoriteNews(doc.data(), doc.id);
            });
        })
        .catch(err => {
            console.log(error);
        })
}