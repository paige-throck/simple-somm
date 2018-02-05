
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('wines').del()
    .then(function () {
      // Inserts seed entries

      return knex('wines').insert([

        //FRENCH WINES

        {name: 'Roger Sabon Chateauneuf-du-Pape Reserve', varietal: 'GSM', origin: 'France', description: 'The Chateauneuf-du-Pape Reserve displays aromas of red and black fruits with spices. With age, the wine will develop flavors of mushrooms, forest-floor and leather.', price_retail: 42.00, vintage: 2015, color: "red", still_sparkling: "still"},

        {name: 'Roger Sabon Lirac', varietal: '80% Grenache, 15% Syrah, 5% Cinsault', origin: 'France', description: 'Situated on hillsides, the Roger Sabon vines take their roots in a soil composed of small round pebbles and clay. The terroir of the Lirac brings spiciness to the wine which is composed by a large portion of Grenache, combined with Syrah, Mourvedre and Carignan. In its youth, the Roger Sabon Lirac is characterized by red and black fruits flavors, and will develop aromas of spices with time, such as tobacco, underwood and pepper. To be enjoyed with cow cheese, cold cuts and red meats.', price_retail: 19.99, vintage: 2015, color: "red", still_sparkling: "still"},

        {name: 'Domaine Rossignol-Fevrier Bourgogne', varietal: 'Pinot Noir', origin: 'France', description: 'his wine is seamless in texture with bright primary pure fruit tones suggesting red berries, plums and violets with a trace of minerality and a big dose of savory terroir.', price_retail: 29.99, vintage: 2015, color: "red", still_sparkling: "still"},

        {name: 'Jean-Luc Colombo Cornas Les Terres Brulees', varietal: 'Syrah', origin: 'France', description: 'A deep ruby-black with violet hints. Spicy aromas with scents of roasted coffee beans, blackcurrant, red fruits, and licorice. A full-bodied and rich wine with lovely notes of spice, minerals, focused black raspberry and cassis. Excellent with game, beef, lamb, barbecue foods, roasted pork and a variety of other hearty dishes.', price_retail: 39.98, vintage: 2011, color: "red", still_sparkling: "still"},

        {name: 'Guigal Crozes Hermitage', varietal: 'Syrah', origin: 'France', description: 'This dark and deep Syrah offers aromas of red fruits (cherry and strawberry) and delicate oak. On the palate, it is a structured and tannic wine, showing flavors of blackcurrant buds and vanilla.', price_retail: 30.00, vintage: 2014, color: "red", still_sparkling: "still"},

        {name: 'Louis Jadot Pouilly-Fuisse', varietal: 'Chardonnay', origin: 'France', description: 'Emerald-gold tones visually suggest a wine of finesse and distinction. With aromas of hazelnuts, toasted almonds, grapefruit and lemon, the wine has palate flavors that are harmonious, fresh and full. Recommended to try pairing this wine with shellfish, fish and poultry.', price_retail: 28.00, vintage: 2015, color: "white", still_sparkling: "still"},

        {name: 'La Poussie Sancerre Blanc', varietal: 'Sauvignon Blanc', origin: 'France', description: 'La Poussie produces a light, fruity, dry and vigorous Sauvignon Blanc, infused with the clay and limestone soil. Made with 100% Sauvignon Blanc.', price_retail: 33.99, vintage: 2015, color: "white", still_sparkling: "still"},

        {name: 'Trimbach Gewurztraminer', varietal: 'Gewurztraminer', origin: 'France', description: 'Trimbach Gewurztraminer is a bright pale gold color. Aromas of cinnamon, nutmeg, lychee and rose petals. The taste is rich, intense, luscious and well balanced with a dry, spicy finish.', price_retail: 27.00, vintage: 2014, color: "white", still_sparkling: "still"},

        {name: 'Paul Autard Chateauneuf-du-Pape Blanc', varietal: 'Blend: 34% Grenache blanc, 33% Clairette, 33% Roussanne', origin: 'France', description: "Very rare, elegant, atypical, vinified in new oak barrels, this confidential cuvee is one of the jewels of Paul Autard's production", price_retail: 45.00, vintage: 2015, color: "white", still_sparkling: "still"},

        {name: 'Hugel', varietal: 'Riesling', origin: 'France', description:" Young, pale green color, with dominant green nuances, slightly yellow like lime tree leaves in the spring, with a few silvery hints, nicely bright and lively, with delicate tears that run finely down theglass. The bouquet is fresh and lively, crisp and clean, pleasantly aromatic and fruity, green apple, lemongrass, ginger, white peach, fresh moss and blackcurrant, with an agreeable touch ofmuscatel. This is an authentic, expressive young Riesling.The wine is dry and fresh on the palate, vivacious, nicely taut and elegantly structured, giving depth and persistence and a finish that positively encourages another sip. Despite its youth, this wine's principal merit is its sincerity." , price_retail: 25.00, vintage: 2014, color: "white", still_sparkling: "still"},

        //CALIFONIA
        {name: "Treana Red Blend", varietal: "75% Cabernet Sauvignon, 25% Syrah", origin: "Central Coast, California", description: "The 2014 Treana Red has an opaque, inky-black color with a ruby-black rim. Bold fruit aromas of dried blackcurrant, blackberry pie filling and pomegranate combine with lavender, menthol and leather with undertones of dark chocolate, roasted coffee, sweet cinnamon and a hint of smoke. On entry, the wine is big and intense, boasting flavors of ripe currants and blackberry pie filling, anise and dark chocolate. Firm tannins and mouthwatering acidity bring the wine to life while toasted oak rounds out the lengthy finish.", price_retail: 34.99, vintage:
          2014, color: "red", still_sparkling: "still"},

{name: "Duckhorn", varietal: "Sauvignon Blanc", origin: "Napa Valley, California", description: "Alluring aromas of lychee, pineapple cake, and nectarine leap from the glass, along with zesty notes of grapefruit and lime. On the palate, this beautifully structured wine strikes a seamless balance between its rich, silky texture and the crisp acidity that adds poise and freshness to the abundant layers of bright citrus fruit.", price_retail: 26.99, vintage: 2016, color: "red", still_sparkling: "still"},

{name: "Matanzas Creek Winemaker's Reserve (Sonoma Barrel Auction)", varietal: "Merlot", origin: "Sonoma County, California", description: "Matanzas Creek Winery has the distinction of being the largest of only three bonded wineries in Sonoma County's Bennett Valley AVA. This unique estate is a working farm through and through, boasting a thriving lavender garden that draws visitors from around the world. The Merlot created for the Barrel Auction is the first of its kind, blending two estate vineyards that have never been combined before. The winemaking team chose grapes from the estate's Legacy (72%) and Jackson Park Vineyards (28%) for a Merlot that celebrates their ability to craft memorable wines from an AVA known for extreme conditions, slow ripening and deep flavor extraction. It's destined to be a Merlot with enticing aromas of raspberry and plum and a round, lush mouthfeel.", price_retail: 39.99, vintage: 2013, color: "red", still_sparkling: "still"},

{name: "Daniel Cohn Bellacosa", varietal: "Cabernet Sauvignon", origin: "North Coast, California", description: "Bellacosa Cabernet Sauvignon harkens back to a time when wine was expertly crafted in small batches by artisans whose passion was to make the most memorable wine; an era in California when vineyards were family farmed and wines were made by hand in pursuit of purity, flavor and finesse. Bellacosa embodies the connection of soul and experience; a subtle force that brings people together. Rich, velvety and complex, it is a beautiful expression of Sonoma Cabernet; a wine to savor, share and create lasting moments together.", price_retail: 22.99, vintage: 2014, color: "red", still_sparkling: "still"},

{name: "Louis Martini Napa Valley", varietal: "Cabernet Sauvignon ", origin: "Napa Valley, California", description: "Louis Martini's 2014 Napa Valley Cabernet Sauvignon is a dark burgundy color and has deep layers of aromas and flavors that include blackberry, blueberry and black current. Rich and full-bodied, this superbly balanced wine has an expansive mid-palate and a long finish.", price_retail: 29.99, vintage: 2014, color: "red", still_sparkling: "still"},

{name: "Ravenswood Teldeschi Vineyard", varietal: "Zinfandel", origin: "Sonoma County, California", description: "The 2014 Teldeschi Zinfandel has powerful aromas of black cherries, coffee, caramel, and vanilla as well as other sweet dark fruit scents, combine to create the classic character of a great Dry Creek Benchland Zinfandel. Rich flavors of sweet cherry liqueur, vanilla, and smoke lead to a ripe, dense, long, and bright fruit finish.", price_retail: 27.99, vintage: 2014, color: "white", still_sparkling: "still"},

{name: "Hermann J. Wiemer Magdalena Vineyard", varietal: "Riesling", origin: "Finger Lakes, New York", description: "The unique traits of the Magdalena Vineyard are featured in this lush Riesling. A beneficial air exchange with Seneca Lake moderates the temperatures, creating a warmer and more protective site in the colder months and a cooling effect throughout the summer. The airflow keeps the vineyard dry, and deep soil provides room for spreading root growth. The lime silt loam soil that the site is celebrated for is crucial to the development of flavor intensity in the grapes. The resulting ripeness greets you in the nose with an intense, floral bouquet. This gives way to a fruit-driven, mouth-coating freshness that lingers for minutes after the first sip. Magdalena wines are striking and powerful, and develop very well over time– whether in the glass or in the cellar.", price_retail: 37.99, vintage: 2014, color: "white", still_sparkling: "still"},

{name: "Gruet Grand Rose Cuvee Danielle", varietal: "90% Chardonnay, 10% Pinot Noir", origin: "New Mexico", description: "The Grand Rosé offers the best of both worlds: it has delicate aromas of cassis and hazelnut, and flavors of cherry, and a hint of rose petals on the back palate. The texture is pure, creamy Chardonnay with an ultra-fine mousse and very rich. This wine perfectly balances freshness and desirable qualities found in expertly aged sparkling wines. Great complexity and a long, very crisp finish. Lifetime expectancy of 10 years.", price_retail: 39.99, vintage: 2012, color: "white", still_sparkling: "still"},

{name: "Rombauer", varietal: "Chardonnay", origin: "Carneros, California", description: "Enticing aromas of vanilla, melon, papaya, and mango are layered with baked apples, creme brulee, butter and a slight minerality. Those scents are echoed as flavors on the creamy, rich palate, along with peach, pie crust and baking spices. The long, smooth finish is marked by mouthwatering acidity.", price_retail: 35.99, vintage: 2016, color: "white", still_sparkling: "still"},

{name: "Mer Soleil Santa Lucia Highlands Reserve", varietal: "Chardonnay", origin: "Santa Lucia Highlands, Monterey, Central Coast, California", description: "The dramatic climate of the Highlands – located within Monterey County – allows Mer Soleil to create dramatic wines. Morning fog, bright sunshine, and gusting winds enable longer “hang time” for the grapes, resulting in wines of intense, complex character. With fresh, bright aromas and the taste of white peach, this wine has a vibrant acidity balanced by the lush flavors of fully ripe fruit.", price_retail: 27.99, vintage: 2015, color: "white", still_sparkling: "still"},

//SPANISH
{name: "La Rioja Alta Vina Ardanza Reserva", varietal: "Rioja", origin: "Rioja, Spain", description: "Outstanding dark-cherry red; intense, bright and clean. The first impression on the nose is of great freshness provided by notes of cherries and blackcurrants mixed with notes of black pepper, tobacco, nutmeg, coffee, caramel and vanilla from barrel aging. Pleasant entry. Tasty, with a soft freshness, nice structure, balanced acidity and fine, elegant tannins.", price_retail: 29.99, vintage: 2008, color: "red", still_sparkling: "still"},


{name: "Vina Sastre Ribera del Duero", varietal: "Tempranillo", origin: "Ribera del Duero, Spain", description: "Lots of flowers on the nose, particularly violets and lavender, and also some roasted coffee notes. Smooth with mellow tannins, this wine is savory and lightly smoky. The finish is long and mineral with an iron quality. A perfect pair for grilled lamb chops, sausages, and chickpea stew.", price_retail: 20.99, vintage: 2015, color: "red", still_sparkling: "still"},


{name: "Do Ferreiro", varietal: "Albarino", origin: "Rias Baixas, Spain", description: "Complex aromas of salinity exotic fruits with wet earth/herbal tones. The palate is textured with excellent acidity.", price_retail: 26.99, vintage: 2015, color: "red", still_sparkling: "still"},


{name: "Bodegas Fillaboa Albarino Seleccion Finca Monte Alto", varietal: "Albarino", origin: "Rias Baixas, Spain", description: "Conceived from the finest selection of grapes to underline its balance and strength. Elegant with intense aromas. The style of a seductive wine.", price_retail: 24.99, vintage: 2015, color: "red", still_sparkling: "still"},

//ITALIAN
{name: "Santa Margherita Pinot Grigio", varietal: "Pinot Grigio", origin: "Italy", description: "This dry white wine has a straw yellow color. Its clean, intense aroma and bone-dry taste (with an appealing flavor of Golden Delicious apples) make Santa Margherita’s Pinot Grigio a wine of great personality and versatility.", price_retail:21.99 , vintage:2016 , color: "White", still_sparkling: "Still"},

{name: "Garofoli Verdicchio dei Castelli di Jesi Podium", varietal: "Verdicchio", origin: "Italy", description: "An elegant, creamy white, backed by sleek, citrusy acidity, this shows a subtle mix of poached pear, grated ginger and stony mineral flavors, accented by hints of crushed almond.", price_retail:29.99 , vintage:2014 , color: "White", still_sparkling: "Still"},

{name: "Principe Pallavicini Poggio Verde Frascati Superiore ", varietal: "Frscati", origin: "Lazio, Italy", description: "Bright, brilliant straw yellow. Broad and intense nose with notes of blossoms and tropical fruit. Full, soft palate with lingering aftertaste.", price_retail:12.99 , vintage:2015 , color: "White", still_sparkling: "Still"},

      ]);
    });
};
