<template>
  <div>
    <h2>Calcolo Bottiglie Necessarie</h2>

    <label>
      Numero di persone:
      <input type="number" v-model="numberOfPeople" min="1" />
    </label>

    <button @click="calculateAll" class="btn btn-primary mt-3">Calcola</button>

    <div v-if="showTable">
      <table class="table mt-4">
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Bevanda</th>
            <th>Totale (bottiglie)</th>
            <th>Totale (litri)</th>
            <th>Totale (centilitri)</th>
            <th>Totale (millilitri)</th>
          </tr>
        </thead>
        <tbody>
          <!-- Sezione Acqua -->
          <tr>
            <td class="align-middle" rowspan="3">Acqua</td>
            <td>Frizzante</td>
            <td>{{ calculateTotal('acqua', 'frizzante').bottles }}</td>
            <td>{{ calculateTotal('acqua', 'frizzante').liters }}</td>
            <td>{{ calculateTotal('acqua', 'frizzante').centiliters }}</td>
            <td>{{ calculateTotal('acqua', 'frizzante').milliliters }}</td>
          </tr>
          <tr>
            <td>Naturale</td>
            <td>{{ calculateTotal('acqua', 'naturale').bottles }}</td>
            <td>{{ calculateTotal('acqua', 'naturale').liters }}</td>
            <td>{{ calculateTotal('acqua', 'naturale').centiliters }}</td>
            <td>{{ calculateTotal('acqua', 'naturale').milliliters }}</td>
          </tr>
          <tr class="fw-bold">
          <td>Totale</td>
            <td>{{ calculateTotal('acqua', 'totale').totale }}</td>
            <td>{{ calculateTotal('acqua', 'totale').liters }}</td>
            <td>{{ calculateTotal('acqua', 'totale').centiliters }}</td>
            <td>{{ calculateTotal('acqua', 'totale').milliliters }}</td>
          </tr>

          <!-- Sezione Analcolici -->
          <tr>
            <td class="align-middle" rowspan="6">Analcolici</td>
            <td>Coca</td>
            <td>-</td>
            <td>{{ calculateTotal('analcolici', 'coca').liters }}</td>
            <td>{{ calculateTotal('analcolici', 'coca').centiliters }}</td>
            <td>{{ calculateTotal('analcolici', 'coca').milliliters }}</td>
          </tr>
          <tr>
            <td>Fanta</td>
            <td>-</td>
            <td>{{ calculateTotal('analcolici', 'fanta').liters }}</td>
            <td>{{ calculateTotal('analcolici', 'fanta').centiliters }}</td>
            <td>{{ calculateTotal('analcolici', 'fanta').milliliters }}</td>
          </tr>
          <tr>
            <td>The Pesca</td>
            <td>-</td>
            <td>{{ calculateTotal('analcolici', 'thePesca').liters }}</td>
            <td>{{ calculateTotal('analcolici', 'thePesca').centiliters }}</td>
            <td>{{ calculateTotal('analcolici', 'thePesca').milliliters }}</td>
          </tr>
          <tr>
            <td>The Limone</td>
            <td>-</td>
            <td>{{ calculateTotal('analcolici', 'theLimone').liters }}</td>
            <td>{{ calculateTotal('analcolici', 'theLimone').centiliters }}</td>
            <td>{{ calculateTotal('analcolici', 'theLimone').milliliters }}</td>
          </tr>
          <tr>
            <td>Redbull</td>
            <td>{{ calculateTotal('analcolici', 'redbull').bottles }}</td>
            <td>{{ calculateTotal('analcolici', 'redbull').liters }}</td>
            <td>{{ calculateTotal('analcolici', 'redbull').centiliters }}</td>
            <td>{{ calculateTotal('analcolici', 'redbull').milliliters }}</td>
          </tr>
          <tr class="fw-bold">
          <td>Totale</td>
            <td>{{ calculateTotal('analcolici', 'totale').totale }}</td>
            <td>{{ calculateTotal('analcolici', 'totale').liters }}</td>
            <td>{{ calculateTotal('analcolici', 'totale').centiliters }}</td>
            <td>{{ calculateTotal('analcolici', 'totale').milliliters }}</td>
          </tr>

          <!-- Sezione Birra -->
            <tr>
            <td class="align-middle" rowspan="3">Birra</td>
            <td>Paulaner</td>
            <td>{{ calculateTotal('birra', 'paulaner').bottles }}</td>
            <td>{{ calculateTotal('birra', 'paulaner').liters }}</td>
            <td>{{ calculateTotal('birra', 'paulaner').centiliters }}</td>
            <td>{{ calculateTotal('birra', 'paulaner').milliliters }}</td>
          </tr>
          <tr>
            <td>Heineken</td>
            <td>{{ calculateTotal('birra', 'heineken').bottles }}</td>
            <td>{{ calculateTotal('birra', 'heineken').liters }}</td>
            <td>{{ calculateTotal('birra', 'heineken').centiliters }}</td>
            <td>{{ calculateTotal('birra', 'heineken').milliliters }}</td>
          </tr>
          <tr class="fw-bold">
          <td>Totale</td>
            <td>{{ calculateTotal('birra', 'totale').totale }}</td>
            <td>{{ calculateTotal('birra', 'totale').liters }}</td>
            <td>{{ calculateTotal('birra', 'totale').centiliters }}</td>
            <td>{{ calculateTotal('birra', 'totale').milliliters }}</td>
          </tr>

          <!-- Sezione Shots -->
          <tr>
            <td class="align-middle" rowspan="5">Shots</td>
            <td>Montenegro</td>
            <td>{{ calculateTotal('shots', 'montenegro').bottles }}</td>
            <td>{{ calculateTotal('shots', 'montenegro').liters }}</td>
            <td>{{ calculateTotal('shots', 'montenegro').centiliters }}</td>
            <td>{{ calculateTotal('shots', 'montenegro').milliliters }}</td>
          </tr>
          <tr>
            <td>Jeger</td>
            <td>{{ calculateTotal('shots', 'jeger').bottles }}</td>
            <td>{{ calculateTotal('shots', 'jeger').liters }}</td>
            <td>{{ calculateTotal('shots', 'jeger').centiliters }}</td>
            <td>{{ calculateTotal('shots', 'jeger').milliliters }}</td>
          </tr>
          <tr>
            <td>Limoncino</td>
            <td>{{ calculateTotal('shots', 'limoncino').bottles }}</td>
            <td>{{ calculateTotal('shots', 'limoncino').liters }}</td>
            <td>{{ calculateTotal('shots', 'limoncino').centiliters }}</td>
            <td>{{ calculateTotal('shots', 'limoncino').milliliters }}</td>
          </tr>
          <tr>
            <td>Vodka Zucchero</td>
            <td>{{ calculateTotal('shots', 'vodkaZucc').bottles }}</td>
            <td>{{ calculateTotal('shots', 'vodkaZucc').liters }}</td>
            <td>{{ calculateTotal('shots', 'vodkaZucc').centiliters }}</td>
            <td>{{ calculateTotal('shots', 'vodkaZucc').milliliters }}</td>
          </tr>
          <tr class="fw-bold">
          <td>Totale</td>
            <td>{{ calculateTotal('shots', 'totale').totale }}</td>
            <td>{{ calculateTotal('shots', 'totale').liters }}</td>
            <td>{{ calculateTotal('shots', 'totale').centiliters }}</td>
            <td>{{ calculateTotal('shots', 'totale').milliliters }}</td>
          </tr>

          <!-- Sezione Drink -->
          <tr>
            <td class="align-middle" rowspan="7">Drink</td>
            <td>Rum</td>
            <td>{{ calculateTotal('drink', 'rum').bottles }}</td>
            <td>{{ calculateTotal('drink', 'rum').liters }}</td>
            <td>{{ calculateTotal('drink', 'rum').centiliters }}</td>
            <td>{{ calculateTotal('drink', 'rum').milliliters }}</td>
          </tr>
          <tr>
            <td>Gin</td>
            <td>{{ calculateTotal('drink', 'gin').bottles }}</td>
            <td>{{ calculateTotal('drink', 'gin').liters }}</td>
            <td>{{ calculateTotal('drink', 'gin').centiliters }}</td>
            <td>{{ calculateTotal('drink', 'gin').milliliters }}</td>
          </tr>
          <tr>
            <td>Vodka</td>
            <td>{{ calculateTotal('drink', 'vodka').bottles }}</td>
            <td>{{ calculateTotal('drink', 'vodka').liters }}</td>
            <td>{{ calculateTotal('drink', 'vodka').centiliters }}</td>
            <td>{{ calculateTotal('drink', 'vodka').milliliters }}</td>
          </tr>
          <tr>
            <td>Tonica</td>
            <td>{{ calculateTotal('drink', 'tonica').bottles }}</td>
            <td>{{ calculateTotal('drink', 'tonica').liters }}</td>
            <td>{{ calculateTotal('drink', 'tonica').centiliters }}</td>
            <td>{{ calculateTotal('drink', 'tonica').milliliters }}</td>
          </tr>
          <tr>
            <td>Lemon Soda</td>
            <td>{{ calculateTotal('drink', 'lemonSoda').bottles }}</td>
            <td>{{ calculateTotal('drink', 'lemonSoda').liters }}</td>
            <td>{{ calculateTotal('drink', 'lemonSoda').centiliters }}</td>
            <td>{{ calculateTotal('drink', 'lemonSoda').milliliters }}</td>
          </tr>
          <tr class="fw-bold">
          <td>Totale</td>
            <td>{{ calculateTotal('drink', 'totale').totale }}</td>
            <td>{{ calculateTotal('drink', 'totale').liters }}</td>
            <td>{{ calculateTotal('drink', 'totale').centiliters }}</td>
            <td>{{ calculateTotal('drink', 'totale').milliliters }}</td>
          </tr>

          <!-- Sezione Spritz -->
          <tr>
            <td class="align-middle" rowspan="3">Spritz</td>
            <td>Aperol</td>
            <td>{{ calculateTotal('spritz', 'aperol').bottles }}</td>
            <td>{{ calculateTotal('spritz', 'aperol').liters }}</td>
            <td>{{ calculateTotal('spritz', 'aperol').centiliters }}</td>
            <td>{{ calculateTotal('spritz', 'aperol').milliliters }}</td>
          </tr>
          <tr>
            <td>Prosecco</td>
            <td>{{ calculateTotal('spritz', 'prosecco').bottles }}</td>
            <td>{{ calculateTotal('spritz', 'prosecco').liters }}</td>
            <td>{{ calculateTotal('spritz', 'prosecco').centiliters }}</td>
            <td>{{ calculateTotal('spritz', 'prosecco').milliliters }}</td>
          </tr>
          <tr>
            <td>Soda</td>
            <td>{{ calculateTotal('spritz', 'soda').bottles }}</td>
            <td>{{ calculateTotal('spritz', 'soda').liters }}</td>
            <td>{{ calculateTotal('spritz', 'soda').centiliters }}</td>
            <td>{{ calculateTotal('spritz', 'soda').milliliters }}</td>
          </tr>
          <tr class="fw-bold">
            <td>Totale</td>
            <td>{{ calculateTotal('spritz', 'totale').totale }}</td>
            <td>{{ calculateTotal('spritz', 'totale').liters }}</td>
            <td>{{ calculateTotal('spritz', 'totale').centiliters }}</td>
            <td>{{ calculateTotal('spritz', 'totale').milliliters }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberOfPeople: 1,
      showTable: false,
      categories: {
        acqua: {
          totale: { amountPerPerson: 0.5, amountPerBottle: 1 },
          frizzante: { amountPerPerson: 0.25, amountPerBottle: 1 },
          naturale: { amountPerPerson: 0.25, amountPerBottle: 1 }
        },
        birra: {
          totale: { amountPerPerson: 0.5, amountPerBottle: 1 },
          paulaner: { amountPerPerson: 0.25, amountPerBottle: 0.25 },
          heineken: { amountPerPerson: 0.25, amountPerBottle: 0.25 }
        },
        analcolici: {
          totale: { amountPerPerson: 0.60, amountPerBottle: 1 },
          coca: { amountPerPerson: 0.3,},
          fanta: { amountPerPerson: 0.11,},
          thePesca: { amountPerPerson: 0.07,},
          theLimone: { amountPerPerson: 0.07,},
          redbull: { amountPerPerson: 0.05, amountPerBottle: 0.25 }
        },
        shots: {
          totale: { amountPerPerson: 0.15, amountPerBottle: 0.7 },
          montenegro: { amountPerPerson: 0.0375, amountPerBottle: 0.7 },
          jeger: { amountPerPerson: 0.0375, amountPerBottle: 0.7 },
          limoncino: { amountPerPerson: 0.0375, amountPerBottle: 0.7 },
          vodkaZucc: { amountPerPerson: 0.0375, amountPerBottle: 0.7 }
        },
        drink: {
          totale: { amountPerPerson: '', amountPerBottle: '' },
          rum: { amountPerPerson: 0.02, amountPerBottle: 0.7 },
          gin: { amountPerPerson: 0.05, amountPerBottle: 0.7 },
          vodka: { amountPerPerson: 0.03, amountPerBottle: 0.7 },
          tonica: { amountPerPerson: 0.06, amountPerBottle: 1 },
          lemonSoda: { amountPerPerson: 0.15, amountPerBottle: 1 },
          succoPera: { amountPerPerson: 0.09, amountPerBottle: 1 }
        },
        spritz: {
          totale: { amountPerPerson: '', amountPerBottle: '' },
          aperol: { amountPerPerson: 0.03, amountPerBottle: 0.7 },
          prosecco: { amountPerPerson: 0.04, amountPerBottle: 0.75 },
          soda: { amountPerPerson: 0.02, amountPerBottle: 1 }
        }
      }
    };
  },
  methods: {
    calculateTotal(category, item) {
    const data = this.categories[category][item];
    const totalAmount = data.amountPerPerson * this.numberOfPeople;
    const totalBottles = Math.ceil(totalAmount / data.amountPerBottle);
    const totalLiters = totalAmount;
    const totalCentiliters = totalAmount * 100;
    const totalMilliliters = totalAmount * 1000;

    return {
      totale: totalAmount.toFixed(2),
      bottles: totalBottles,
      liters: totalLiters.toFixed(2),
      centiliters: totalCentiliters.toFixed(2),
      milliliters: totalMilliliters.toFixed(2)
    };
  },
  calculateAll() {
    this.showTable = true;
  }
  }
};
</script>

<style scoped lang="scss">
table {
  width: 100%;
  border-collapse: collapse;
}

table th, table td {
  padding: 8px;
  text-align: center;
  border: 1px solid #ddd;
}

table th {
  background-color: #f8f9fa;
  align-content:middle;
}
</style>