<template>
  <div class="menu-container">
    <div class="wine-showcase">
      <WineGallery class="wine-gallery" />
      <div class="wine-one wine-img"></div>
      <div class="wine-two wine-img"></div>
      <div class="wine-three wine-img"></div>
    </div>

    <div class="introduction">
      <div class="title">We have a selection of over 500 labels.</div>
      <div class="menu-text">
        <p>
          Maintaining a list of so many old and new vintages, variatals and
          favorite wines takes time. Please check in often for new updates of
          selections. If you don’t see a wine you are interested in, please
          contact us. We have connections with the best wine importers. We will
          do our best to find that perfect bottle of wine for you.
        </p>
        <p>
          A Corkage fee of 30.000 per bottle will be charged, limit one outside
          bottle per table.
        </p>
      </div>
    </div>

    <!-- Filter Nav -->
    <nav class="filter">
      <button
        @click="filter = 'French'"
        :class="{ active: filter === 'French' }"
      >
        French
      </button>
      <button
        @click="filter = 'Italian'"
        :class="{ active: filter === 'Italian' }"
      >
        Italian
      </button>
      <button
        @click="filter = 'Spanish'"
        :class="{ active: filter === 'Spanish' }"
      >
        Spanish
      </button>
      <button @click="filter = 'Other'" :class="{ active: filter === 'Other' }">
        Other
      </button>
    </nav>

    <!-- Menus -->
    <div v-if="filter === 'French'" class="menu">
      <div class="menu-wrap">
        <div class="menu-title">RED</div>
        <div class="dish">
          <div class="dish-name">Château Margaux 2015</div>
        </div>
        <div class="dish">
          <div class="dish-name">Château Latour 2014</div>
        </div>
        <div class="dish">
          <div class="dish-name">Château Mouton Rothschild 2016</div>
        </div>
        <div class="dish">
          <div class="dish-name">Château Lafite Rothschild 2013</div>
        </div>
        <div class="dish">
          <div class="dish-name">Château Haut-Brion 2012</div>
        </div>
        <div class="dish">
          <div class="dish-name">Château Cheval Blanc 2011</div>
        </div>
        <div class="dish">
          <div class="dish-name">Château Pétrus 2010</div>
        </div>
        <div class="dish">
          <div class="dish-name">Château d'Yquem 2009</div>
        </div>
        <div class="dish">
          <div class="dish-name">Château Palmer 2008</div>
        </div>
        <div class="dish">
          <div class="dish-name">Château Cos d'Estournel 2007</div>
        </div>
      </div>
      <div class="menu-wrap">
        <div class="menu-title">WHITE</div>
        <div class="dish">
          <div class="dish-name">
            Domaine de la Romanée-Conti Montrachet 2015
          </div>
        </div>
        <div class="dish">
          <div class="dish-name">Château d'Yquem 2014</div>
        </div>
        <div class="dish">
          <div class="dish-name">
            Domaine Leflaive Chevalier-Montrachet 2016
          </div>
        </div>
        <div class="dish">
          <div class="dish-name">Domaine des Comtes Lafon Meursault 2013</div>
        </div>
        <div class="dish">
          <div class="dish-name">Domaine Roulot Meursault 2012</div>
        </div>
        <div class="dish">
          <div class="dish-name">
            Domaine Coche-Dury Corton-Charlemagne 2011
          </div>
        </div>
        <div class="dish">
          <div class="dish-name">
            Domaine Jean-Louis Chave Hermitage Blanc 2010
          </div>
        </div>
        <div class="dish">
          <div class="dish-name">Domaine de Chevalier Blanc 2009</div>
        </div>
        <div class="dish">
          <div class="dish-name">Château Smith Haut Lafitte Blanc 2008</div>
        </div>
        <div class="dish">
          <div class="dish-name">
            Domaine Zind-Humbrecht Riesling Clos Windsbuhl 2007
          </div>
        </div>
      </div>
    </div>
    <div v-if="filter === 'Italian'" class="menu">
      <div class="menu-wrap">
        <div class="menu-title">RED</div>
        <div class="dish">
          <div class="dish-name">Barolo 2015</div>
        </div>
        <div class="dish">
          <div class="dish-name">Brunello di Montalcino 2016</div>
        </div>
        <div class="dish">
          <div class="dish-name">Amarone della Valpolicella 2014</div>
        </div>
        <div class="dish">
          <div class="dish-name">Chianti Classico 2017</div>
        </div>
        <div class="dish">
          <div class="dish-name">Barbaresco 2013</div>
        </div>
        <div class="dish">
          <div class="dish-name">Super Tuscan 2015</div>
        </div>
        <div class="dish">
          <div class="dish-name">Montepulciano d'Abruzzo 2016</div>
        </div>
        <div class="dish">
          <div class="dish-name">Nero d'Avola 2018</div>
        </div>
        <div class="dish">
          <div class="dish-name">Dolcetto d'Alba 2017</div>
        </div>
        <div class="dish">
          <div class="dish-name">Aglianico del Vulture 2015</div>
        </div>
      </div>
      <div class="menu-wrap">
        <div class="menu-title">WHITE</div>
        <div class="dish">
          <div class="dish-name">Soave 2018</div>
        </div>
        <div class="dish">
          <div class="dish-name">Verdicchio dei Castelli di Jesi 2017</div>
        </div>
        <div class="dish">
          <div class="dish-name">Gavi di Gavi 2019</div>
        </div>
        <div class="dish">
          <div class="dish-name">Fiano di Avellino 2016</div>
        </div>
        <div class="dish">
          <div class="dish-name">Greco di Tufo 2018</div>
        </div>
        <div class="dish">
          <div class="dish-name">Vermentino di Gallura 2017</div>
        </div>
        <div class="dish">
          <div class="dish-name">Trebbiano d'Abruzzo 2019</div>
        </div>
        <div class="dish">
          <div class="dish-name">Lugana 2018</div>
        </div>
        <div class="dish">
          <div class="dish-name">Etna Bianco 2017</div>
        </div>
        <div class="dish">
          <div class="dish-name">Pinot Grigio 2019</div>
        </div>
      </div>
    </div>
    <div v-if="filter === 'Spanish'" class="menu">
      <div class="menu-wrap">
        <div class="menu-title">RED</div>
        <div class="dish">
          <div class="dish-name">Vega Sicilia Único 2010</div>
        </div>
        <div class="dish">
          <div class="dish-name">Pingus 2011</div>
        </div>
        <div class="dish">
          <div class="dish-name">La Rioja Alta Gran Reserva 904 2012</div>
        </div>
        <div class="dish">
          <div class="dish-name">Bodegas Muga Prado Enea 2013</div>
        </div>
        <div class="dish">
          <div class="dish-name">Marqués de Murrieta Castillo Ygay 2014</div>
        </div>
        <div class="dish">
          <div class="dish-name">Alvaro Palacios L'Ermita 2015</div>
        </div>
        <div class="dish">
          <div class="dish-name">Dominio de Pingus Flor de Pingus 2016</div>
        </div>
        <div class="dish">
          <div class="dish-name">Bodegas Roda Cirsion 2017</div>
        </div>
        <div class="dish">
          <div class="dish-name">Artadi Viña El Pisón 2018</div>
        </div>
        <div class="dish">
          <div class="dish-name">Telmo Rodríguez Las Beatas 2019</div>
        </div>
      </div>
      <div class="menu-wrap">
        <div class="menu-title">WHITE</div>
        <div class="dish">
          <div class="dish-name">Albariño 2019</div>
        </div>
        <div class="dish">
          <div class="dish-name">Verdejo 2018</div>
        </div>
        <div class="dish">
          <div class="dish-name">Godello 2017</div>
        </div>
        <div class="dish">
          <div class="dish-name">Txakoli 2016</div>
        </div>
        <div class="dish">
          <div class="dish-name">Viura 2015</div>
        </div>
        <div class="dish">
          <div class="dish-name">Macabeo 2014</div>
        </div>
        <div class="dish">
          <div class="dish-name">Xarel-lo 2013</div>
        </div>
        <div class="dish">
          <div class="dish-name">Parellada 2012</div>
        </div>
        <div class="dish">
          <div class="dish-name">Malvasia 2011</div>
        </div>
        <div class="dish">
          <div class="dish-name">Pedro Ximénez 2010</div>
        </div>
      </div>
    </div>
    <div v-if="filter === 'Other'" class="menu">
      <div class="menu-wrap">
        <div class="menu-title">RED</div>
        <div class="dish">
          <div class="dish-name">Penfolds Grange 2015</div>
        </div>
        <div class="dish">
          <div class="dish-name">Henschke Hill of Grace 2014</div>
        </div>
        <div class="dish">
          <div class="dish-name">Opus One 2016</div>
        </div>
        <div class="dish">
          <div class="dish-name">Screaming Eagle Cabernet Sauvignon 2017</div>
        </div>
        <div class="dish">
          <div class="dish-name">
            Catena Zapata Adrianna Vineyard Malbec 2018
          </div>
        </div>
        <div class="dish">
          <div class="dish-name">Concha y Toro Don Melchor 2015</div>
        </div>
        <div class="dish">
          <div class="dish-name">Almaviva 2016</div>
        </div>
        <div class="dish">
          <div class="dish-name">Château Musar 2014</div>
        </div>
        <div class="dish">
          <div class="dish-name">Clos Apalta 2017</div>
        </div>
        <div class="dish">
          <div class="dish-name">Seña 2018</div>
        </div>
      </div>
      <div class="menu-wrap">
        <div class="menu-title">WHITE</div>
        <div class="dish">
          <div class="dish-name">Cloudy Bay Sauvignon Blanc 2019</div>
        </div>
        <div class="dish">
          <div class="dish-name">Kim Crawford Sauvignon Blanc 2020</div>
        </div>
        <div class="dish">
          <div class="dish-name">Chardonnay Reserve 2018</div>
        </div>
        <div class="dish">
          <div class="dish-name">Riesling Kabinett 2017</div>
        </div>
        <div class="dish">
          <div class="dish-name">Grüner Veltliner 2019</div>
        </div>
        <div class="dish">
          <div class="dish-name">Sauvignon Blanc 2020</div>
        </div>
        <div class="dish">
          <div class="dish-name">Chenin Blanc 2018</div>
        </div>
        <div class="dish">
          <div class="dish-name">Gewürztraminer 2017</div>
        </div>
        <div class="dish">
          <div class="dish-name">Pinot Gris 2019</div>
        </div>
        <div class="dish">
          <div class="dish-name">Viognier 2020</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WineGallery from '@/components/WineGallery.vue';
import { ref } from 'vue';

export default {
  components: {
    WineGallery,
  },
  setup() {
    const filter = ref('French');
    return {
      WineGallery,
      filter,
    };
  },
};
</script>

<style scoped>
/* Fade in Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Fade in Animation */
.menu-container,
.introduction,
.title,
.menu-text,
.filter,
.menu,
.menu-wrap,
.menu-title,
.dish,
.dish-name,
.dish.price {
  animation: fadeIn 1s ease-in-out;
}

.menu-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Unna', serif;
  width: 100%;
}

.wine-gallery {
  display: none;
}
/* Top */
.wine-showcase {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  min-height: 50%; /* Make the showcase smaller */
  gap: 16px;
}
.wine-img {
  width: 30%; /* Adjust width to fit three images with gaps */
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 4px;
}
.wine-one {
  background-image: url('@/assets/wineMenu/1.jpg');
}
.wine-two {
  background-image: url('@/assets/wineMenu/2.jpg');
}
.wine-three {
  background-image: url('@/assets/wineMenu/3.jpg');
}

.introduction {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  max-width: 1010px;
  text-align: left;
  margin-top: 40px;
}
.title {
  font-family: 'Unna', serif;
  font-size: 2rem;
  font-weight: 100;
  font-style: italic;
}
.menu-text {
  font-size: 1.2rem;
  font-weight: 300;
}
/* Filter */
.filter {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding: 1rem;
  max-width: 1010px;
  text-align: left;
}
button {
  height: 50px;
  width: 190px;
  padding: 1rem 1rem 0.8rem;
  background-color: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);
  font-weight: 800;
  font-size: 0.8rem;
  text-align: center;
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 1em;
  cursor: pointer;
}
button.active {
  border: 1px solid grey;
  color: black;
}
/* Menu Styling */
.menu {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping of items */
  gap: 20px;
  justify-content: flex-start;
  margin-top: 2rem;
  padding: 1rem;
  min-width: 1010px;
  max-width: 1010px;
  text-align: left;
}

.menu-wrap {
  width: calc(50% - 20px); /* Each menu-wrap takes up 50% minus the gap */
  height: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
}
.menu-title {
  width: 100%;
  font-size: 2.4rem;
  font-weight: 100;
  font-style: italic;
  text-align: left;
}
.dish {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
}
.dish-name {
  font-size: 1.3rem;
  font-weight: 400;
  text-align: left;
  padding-bottom: 15px;
}

/* Mobile Section */
@media (max-width: 991px) {
  .wine-showcase .wine-img {
    display: none;
  }
  .wine-gallery {
    display: block;
    width: 100%;
    height: 100%;
  }

  .filter {
    margin-top: 10px;
  }

  .menu {
    flex-direction: column !important;
    flex: 1;
    box-sizing: content-box;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    min-width: 0;
    width: 100%;
  }

  .menu-wrap {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    margin-top: 40px;
  }
}
</style>
