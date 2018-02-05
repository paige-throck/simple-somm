
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('wines').del()
    .then(function () {
      // Inserts seed entries

      return knex('wines').insert([

        //FRENCH WINES

        {name: 'Roger Sabon Chateauneuf-du-Pape Reserve', varietal: 'GSM', origin: 'France', description: 'The Chateauneuf-du-Pape Reserve displays aromas of Red and black fruits with spices. With age, the wine will develop flavors of mushrooms, forest-floor and leather.', price_retail: 42.00, vintage: 2015, color: "Red", still_sparkling: "Still"},

        {name: 'Roger Sabon Lirac', varietal: '80% Grenache, 15% Syrah, 5% Cinsault', origin: 'France', description:"The terroir of the Lirac brings spiciness to the wine which is composed by a large portion of Grenache, combined with Syrah, Mourvedre and Carignan. In its youth, the Roger Sabon Lirac is characterized by Red and black fruits flavors, and will develop aromas of spices with time, such as tobacco, underwood and pepper. To be enjoyed with cow cheese, cold cuts and Red meats.", price_retail: 19.99, vintage: 2015, color: "Red", still_sparkling: "Still"},

        {name: 'Domaine Rossignol-Fevrier Bourgogne', varietal: 'Pinot Noir', origin: 'France', description: 'his wine is seamless in texture with bright primary pure fruit tones suggesting Red berries, plums and violets with a trace of minerality and a big dose of savory terroir.', price_retail: 29.99, vintage: 2015, color: "Red", still_sparkling: "Still"},

        {name: 'Jean-Luc Colombo Cornas Les Terres Brulees', varietal: 'Syrah', origin: 'France', description: 'A deep ruby-black with violet hints. Spicy aromas with scents of roasted coffee beans, blackcurrant, Red fruits, and licorice. A full-bodied and rich wine with lovely notes of spice, minerals, focused black raspberry and cassis. Excellent with game, beef, lamb, barbecue foods, roasted pork and a variety of other hearty dishes.', price_retail: 39.98, vintage: 2011, color: "Red", still_sparkling: "Still"},

        {name: 'Guigal Crozes Hermitage', varietal: 'Syrah', origin: 'France', description: 'This dark and deep Syrah offers aromas of Red fruits (cherry and strawberry) and delicate oak. On the palate, it is a structuRed and tannic wine, showing flavors of blackcurrant buds and vanilla.', price_retail: 30.00, vintage: 2014, color: "Red", still_sparkling: "Still"},

        {name: 'Louis Jadot Pouilly-Fuisse', varietal: 'Chardonnay', origin: 'France', description: 'Emerald-gold tones visually suggest a wine of finesse and distinction. With aromas of hazelnuts, toasted almonds, grapefruit and lemon, the wine has palate flavors that are harmonious, fresh and full. Recommended to try pairing this wine with shellfish, fish and poultry.', price_retail: 28.00, vintage: 2015, color: "White", still_sparkling: "Still"},

        {name: 'La Poussie Sancerre Blanc', varietal: 'Sauvignon Blanc', origin: 'France', description: 'La Poussie produces a light, fruity, dry and vigorous Sauvignon Blanc, infused with the clay and limestone soil. Made with 100% Sauvignon Blanc.', price_retail: 33.99, vintage: 2015, color: "White", still_sparkling: "Still"},

        {name: 'Trimbach Gewurztraminer', varietal: 'Gewurztraminer', origin: 'France', description: 'Trimbach Gewurztraminer is a bright pale gold color. Aromas of cinnamon, nutmeg, lychee and rose petals. The taste is rich, intense, luscious and well balanced with a dry, spicy finish.', price_retail: 27.00, vintage: 2014, color: "White", still_sparkling: "Still"},

        {name: 'Paul Autard Chateauneuf-du-Pape Blanc', varietal: 'Blend: 34% Grenache blanc, 33% Clairette, 33% Roussanne', origin: 'France', description: "Very rare, elegant, atypical, vinified in new oak barrels, this confidential cuvee is one of the jewels of Paul Autard's production", price_retail: 45.00, vintage: 2015, color: "White", still_sparkling: "Still"},

        {name: 'Hugel', varietal: 'Riesling', origin: 'France', description:" Young, pale green color, with dominant green nuances, slightly yellow like lime tree leaves in the spring, with a few silvery hints, nicely bright and lively, with delicate tears that run finely down theglass. The bouquet is fresh and lively, crisp and clean, pleasantly aromatic and fruity, green apple, lemongrass, ginger, White peach, fresh moss and blackcurrant, with an agreeable touch ofmuscatel." , price_retail: 25.00, vintage: 2014, color: "White", still_sparkling: "Still"},

        //CALIFONIA
        {name: "Treana Red Blend", varietal: "75% Cabernet Sauvignon, 25% Syrah", origin: "Central Coast, California", description: "Bold fruit aromas of dried blackcurrant, blackberry pie filling and pomegranate combine with lavender, menthol and leather with undertones of dark chocolate, roasted coffee, sweet cinnamon and a hint of smoke. Firm tannins and mouthwatering acidity bring the wine to life while toasted oak rounds out the lengthy finish.", price_retail: 34.99, vintage:
          2014, color: "Red", still_sparkling: "Still"},

{name: "Duckhorn", varietal: "Sauvignon Blanc", origin: "Napa Valley, California", description: "Alluring aromas of lychee, pineapple cake, and nectarine leap from the glass, along with zesty notes of grapefruit and lime. On the palate, this beautifully structuRed wine strikes a seamless balance between its rich, silky texture and the crisp acidity that adds poise and freshness to the abundant layers of bright citrus fruit.", price_retail: 26.99, vintage: 2016, color: "Red", still_sparkling: "Still"},

{name: "Matanzas Creek Winemaker's Reserve (Sonoma Barrel Auction)", varietal: "Merlot", origin: "Sonoma County, California", description: "The winemaking team chose grapes from the estate's Legacy (72%) and Jackson Park Vineyards (28%) for a Merlot that celebrates their ability to craft memorable wines from an AVA known for extreme conditions, slow ripening and deep flavor extraction. It's destined to be a Merlot with enticing aromas of raspberry and plum and a round, lush mouthfeel.", price_retail: 39.99, vintage: 2013, color: "Red", still_sparkling: "Still"},

{name: "Daniel Cohn Bellacosa", varietal: "Cabernet Sauvignon", origin: "North Coast, California", description: "Rich, velvety and complex, it is a beautiful expression of Sonoma Cabernet; a wine to savor, share and create lasting moments together.", price_retail: 22.99, vintage: 2014, color: "Red", still_sparkling: "Still"},

{name: "Louis Martini Napa Valley", varietal: "Cabernet Sauvignon ", origin: "Napa Valley, California", description: "Louis Martini's 2014 Napa Valley Cabernet Sauvignon is a dark burgundy color and has deep layers of aromas and flavors that include blackberry, blueberry and black current. Rich and full-bodied, this superbly balanced wine has an expansive mid-palate and a long finish.", price_retail: 29.99, vintage: 2014, color: "Red", still_sparkling: "Still"},

{name: "Ravenswood Teldeschi Vineyard", varietal: "Zinfandel", origin: "Sonoma County, California", description: "The 2014 Teldeschi Zinfandel has powerful aromas of black cherries, coffee, caramel, and vanilla as well as other sweet dark fruit scents, combine to create the classic character of a great Dry Creek Benchland Zinfandel. Rich flavors of sweet cherry liqueur, vanilla, and smoke lead to a ripe, dense, long, and bright fruit finish.", price_retail: 27.99, vintage: 2014, color: "White", still_sparkling: "Still"},

{name: "Hermann J. Wiemer Magdalena Vineyard", varietal: "Riesling", origin: "Finger Lakes, New York", description: "Magdalena wines are striking and powerful, and develop very well over time– whether in the glass or in the cellar.", price_retail: 37.99, vintage: 2014, color: "White", still_sparkling: "Still"},

{name: "Gruet Grand Rose Cuvee Danielle", varietal: "90% Chardonnay, 10% Pinot Noir", origin: "New Mexico", description: "The Grand Rosé offers the best of both worlds: it has delicate aromas of cassis and hazelnut, and flavors of cherry, and a hint of rose petals on the back palate. The texture is pure, creamy Chardonnay with an ultra-fine mousse and very rich. This wine perfectly balances freshness and desirable qualities found in expertly aged sparkling wines. Great complexity and a long, very crisp finish. Lifetime expectancy of 10 years.", price_retail: 39.99, vintage: 2012, color: "White", still_sparkling: "Still"},

{name: "Rombauer", varietal: "Chardonnay", origin: "Carneros, California", description: "Enticing aromas of vanilla, melon, papaya, and mango are layeRed with baked apples, creme brulee, butter and a slight minerality. Those scents are echoed as flavors on the creamy, rich palate, along with peach, pie crust and baking spices. The long, smooth finish is marked by mouthwatering acidity.", price_retail: 35.99, vintage: 2016, color: "White", still_sparkling: "Still"},

{name: "Mer Soleil Santa Lucia Highlands Reserve", varietal: "Chardonnay", origin: "Santa Lucia Highlands, Monterey, Central Coast, California", description: "With fresh, bright aromas and the taste of White peach, this wine has a vibrant acidity balanced by the lush flavors of fully ripe fruit.", price_retail: 27.99, vintage: 2015, color: "White", still_sparkling: "Still"},

//SPANISH
{name: "La Rioja Alta Vina Ardanza Reserva", varietal: "Rioja", origin: "Rioja, Spain", description: "Outstanding dark-cherry Red; intense, bright and clean. The first impression on the nose is of great freshness provided by notes of cherries and blackcurrants mixed with notes of black pepper, tobacco, nutmeg, coffee, caramel and vanilla from barrel aging. Pleasant entry. Tasty, with a soft freshness, nice structure, balanced acidity and fine, elegant tannins.", price_retail: 29.99, vintage: 2008, color: "Red", still_sparkling: "Still"},


{name: "Vina Sastre Ribera del Duero", varietal: "Tempranillo", origin: "Ribera del Duero, Spain", description: "Lots of flowers on the nose, particularly violets and lavender, and also some roasted coffee notes. Smooth with mellow tannins, this wine is savory and lightly smoky. The finish is long and mineral with an iron quality. A perfect pair for grilled lamb chops, sausages, and chickpea stew.", price_retail: 20.99, vintage: 2015, color: "Red", still_sparkling: "Still"},


{name: "Do Ferreiro", varietal: "Albarino", origin: "Rias Baixas, Spain", description: "Complex aromas of salinity exotic fruits with wet earth/herbal tones. The palate is textuRed with excellent acidity.", price_retail: 26.99, vintage: 2015, color: "Red", still_sparkling: "Still"},


{name: "Bodegas Fillaboa Albarino Seleccion Finca Monte Alto", varietal: "Albarino", origin: "Rias Baixas, Spain", description: "Conceived from the finest selection of grapes to underline its balance and strength. Elegant with intense aromas. The style of a seductive wine.", price_retail: 24.99, vintage: 2015, color: "Red", still_sparkling: "Still"},

//ITALIAN
{name: "Santa Margherita Pinot Grigio", varietal: "Pinot Grigio", origin: "Italy", description: "This dry White wine has a straw yellow color. Its clean, intense aroma and bone-dry taste (with an appealing flavor of Golden Delicious apples) make Santa Margherita’s Pinot Grigio a wine of great personality and versatility.", price_retail:21.99 , vintage:2016 , color: "White", still_sparkling: "Still"},

{name: "Garofoli Verdicchio dei Castelli di Jesi Podium", varietal: "Verdicchio", origin: "Italy", description: "An elegant, creamy White, backed by sleek, citrusy acidity, this shows a subtle mix of poached pear, grated ginger and stony mineral flavors, accented by hints of crushed almond.", price_retail:29.99 , vintage:2014 , color: "White", still_sparkling: "Still"},

{name: "Principe Pallavicini Poggio Verde Frascati Superiore ", varietal: "Frscati", origin: "Lazio, Italy", description: "Bright, brilliant straw yellow. Broad and intense nose with notes of blossoms and tropical fruit. Full, soft palate with lingering aftertaste.", price_retail:12.99 , vintage:2015 , color: "White", still_sparkling: "Still"},

      ]);
    });
};
