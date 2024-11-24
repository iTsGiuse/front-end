<template>
  <div>
    <h2>Calcolo Bottiglie Necessarie</h2>

    <label>
      Numero di persone:
      <input type="number" v-model="numberOfPeople" min="1" />
    </label>

    <button @click="calculateAll" class="btn btn-primary mt-3">Calcola</button>

    <div v-if="showTable" class="container mt-4">
      <div v-for="(category, categoryName) in categories" :key="categoryName" class="row">
        <div class="col-md-6">
          <h3>{{ categoryName.charAt(0).toUpperCase() + categoryName.slice(1) }}</h3>
          <table class="table">
            <thead>
              <tr>
                <th>Dettaglio</th>
                <th>Totale Bottiglie</th>
                <th>Litri</th>
                <th>Centilitri</th>
                <th>Millilitri</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, itemName) in category" :key="itemName">
                <td>{{ itemName.charAt(0).toUpperCase() + itemName.slice(1) }}</td>
                <td>{{ calculateTotal(categoryName, itemName).bottles || '-' }}</td>
                <td>{{ calculateTotal(categoryName, itemName).liters || '-' }}</td>
                <td>{{ calculateTotal(categoryName, itemName).centiliters || '-' }}</td>
                <td>{{ calculateTotal(categoryName, itemName).milliliters || '-' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalcoloBottiglie',
  data() {
    return {
      numberOfPeople: 1,
      showTable: false,
      categories: {
        acqua: {
          frizzante: { amountPerPerson: 0.25, amountPerBottle: 1 },
          naturale: { amountPerPerson: 0.25, amountPerBottle: 1 },
          totale: { amountPerPerson: 0.5, amountPerBottle: 1 }
        },
        birra: {
          paulaner: { amountPerPerson: 0.25, amountPerBottle: 0.25 },
          heineken: { amountPerPerson: 0.25, amountPerBottle: 0.25 },
          totale: { amountPerPerson: 0.5, amountPerBottle: 1 },
        },
        analcolici: {
          coca: { amountPerPerson: 0.3,},
          fanta: { amountPerPerson: 0.11,},
          thePesca: { amountPerPerson: 0.07,},
          theLimone: { amountPerPerson: 0.07,},
          redbull: { amountPerPerson: 0.05, amountPerBottle: 0.25 },
          totale: { amountPerPerson: 0.60, amountPerBottle: 1 }
        },
        shots: {
          montenegro: { amountPerPerson: 0.0375, amountPerBottle: 0.7 },
          jeger: { amountPerPerson: 0.0375, amountPerBottle: 0.7 },
          limoncino: { amountPerPerson: 0.0375, amountPerBottle: 0.7 },
          vodkaZucc: { amountPerPerson: 0.0375, amountPerBottle: 0.7 },
          totale: { amountPerPerson: 0.15, amountPerBottle: 0.7 }
        },
        drink: {
          rum: { amountPerPerson: 0.02, amountPerBottle: 0.7 },
          gin: { amountPerPerson: 0.05, amountPerBottle: 0.7 },
          vodka: { amountPerPerson: 0.03, amountPerBottle: 0.7 },
          tonica: { amountPerPerson: 0.06, amountPerBottle: 1 },
          lemonSoda: { amountPerPerson: 0.15, amountPerBottle: 1 },
          succoPera: { amountPerPerson: 0.09, amountPerBottle: 1 },
          totale: { amountPerPerson: '', amountPerBottle: '' },
        },
        spritz: {
          aperol: { amountPerPerson: 0.03, amountPerBottle: 0.7 },
          prosecco: { amountPerPerson: 0.04, amountPerBottle: 0.75 },
          soda: { amountPerPerson: 0.02, amountPerBottle: 1 },
          totale: { amountPerPerson: '', amountPerBottle: '' }
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