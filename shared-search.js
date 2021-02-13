const client = algoliasearch('HHFLECY3IG', '8b645fef08c9d84a679733cf0b0e126c');
const index = client.initIndex('ciites');
let cities ;

$('#submit').on('click', (e)=>{
    const val = $('#search').val();
    if (cities.indexOf(val) !== -1) {
        window.location.replace(`weather-page.html?city=${val}`);
    }
});
$('#search').on('input',(e)=>{
    const city= e.target.value;
    getCities(city);
})

function getCities(city, isLocation){
    index.search(city, {
        headers: { 'X-Algolia-UserToken': 'user123' }
      }).then(({ hits }) => {
        cities = hits.map((item)=>{            
            return item.name;
        });
        setList(cities, city);
        if (isLocation) {
            $('#list').empty();
        }
        // autocomplete(document.getElementById("search"), cities);
      });
}
function setList(cities, searchVal){
      $('#list').empty();
      for (let i = 0; i < cities.length; i++) {
          const city = cities[i];
          $('#list').append('<div onClick="selectItem(\''+city+'\')">'+city + '</div>');
      }
  }

function selectItem(city){
    $('#search').val(city); 
    $('#list').empty();
}