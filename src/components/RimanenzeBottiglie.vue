<template>
  <section id="calcoloBottiglie">
    <div class="container py-5">
      <div class="row">

        <!-- Fase 1: Inserisci il numero di persone -->
        <div v-if="currentStep === 1" class="col-12 mb-4">
          <h3 class="step-title">Inserisci il numero di persone</h3>
          <div class="mb-3">
            <input 
              v-model.number="numberOfPeople" 
              type="number" 
              min="1" 
              class="form-control form-control-lg"
              placeholder="Numero di persone"
            />
          </div>
          <button @click="prosegui" class="btn btn-primary btn-lg w-100">Conferma</button>
        </div>

        <!-- Fase 2: Inserimento quantità -->
        <div v-if="currentStep === 2" class="col-12 mb-4">
          <h3 class="step-title">Inserisci le quantità disponibili</h3>
          <div v-for="(category, categoryName) in mieQuantità" :key="categoryName">
            <h4 class="category-title">{{ categoryName }}</h4>
            <table class="table table-bordered custom-table">
              <thead>
                <tr>
                  <th v-for="(header, index) in intestazioniTabelle.inserisciQuantità" :key="index">{{ header }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, itemName) in category" :key="itemName">
                  <td>{{ itemName }}</td>
                  <td><input v-model.number="item.amountPerBottle" type="number" min="0" @input="handleInput($event, categoryName, itemName, 'bottiglie')" class="form-control" placeholder="Bottiglie" /></td>
                  <td><input v-model.number="item.liters" type="number" min="0" @input="handleInput($event, categoryName, itemName, 'litri')" class="form-control" placeholder="Litri" /></td>
                  <td><input v-model.number="item.centiliters" type="number" min="0" @input="handleInput($event, categoryName, itemName, 'centilitri')" class="form-control" placeholder="Centilitri" /></td>
                  <td><input v-model.number="item.milliliters" type="number" min="0" @input="handleInput($event, categoryName, itemName, 'millilitri')" class="form-control" placeholder="Millilitri" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <button @click="goBack" class="btn btn-secondary btn-lg">Indietro</button>
            <button @click="prosegui" class="btn btn-primary btn-lg">Avanti</button>
          </div>
        </div>

        <!-- Fase 3: Calcolo delle quantità da acquistare -->
        <div v-if="currentStep === 3" class="col-12 mb-4">
          <h3 class="step-title">Quantità da acquistare</h3>
          <div v-for="(category, categoryName) in categories" :key="categoryName">
            <h4 class="category-title">{{ categoryName.charAt(0).toUpperCase() + categoryName.slice(1) }}</h4>
            <table class="table table-bordered custom-table">
              <thead>
                <tr>
                  <th v-for="(header, index) in intestazioniTabelle.festaQuantità" :key="index">{{ header }}</th>
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
          <div class="d-flex justify-content-between mt-4">
            <button @click="goBack" class="btn btn-secondary btn-lg">Indietro</button>
            <button @click="prosegui" class="btn btn-primary btn-lg">Avanti</button>
          </div>
        </div>

        <!-- Fase 4: Bilancio -->
        <div v-if="currentStep === 4" class="col-12 mb-4">
          <h3 class="step-title">Bilancio (Quantità da Acquistare - Quantità Avanzate)</h3>
          <div v-for="(category, categoryName) in categories" :key="categoryName">
            <h4 class="category-title">{{ categoryName.charAt(0).toUpperCase() + categoryName.slice(1) }}</h4>
            <table class="table table-bordered custom-table">
              <thead>
                <tr>
                  <th v-for="(header, index) in intestazioniTabelle.Bilancio" :key="index">{{ header }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, itemName) in category" :key="itemName">
                  <td>{{ itemName.charAt(0).toUpperCase() + itemName.slice(1) }}</td>
                  
                  <!-- Quantità da Acquistare -->
                  <td>
                    <div>
                      <p v-if="calculateDifference(categoryName, itemName).acquisto.bottles">
                        {{ calculateDifference(categoryName, itemName).acquisto.bottles || 0 }} 
                      </p>
                      <p v-if="calculateDifference(categoryName, itemName).acquisto.liters">
                        {{ calculateDifference(categoryName, itemName).acquisto.liters }} 
                      </p>
                      <p v-if="calculateDifference(categoryName, itemName).acquisto.milliliters">
                        {{ calculateDifference(categoryName, itemName).acquisto.milliliters }} 
                      </p>
                      <p v-if="calculateDifference(categoryName, itemName).acquisto.centiliters">
                        {{ calculateDifference(categoryName, itemName).acquisto.centiliters }} 
                      </p>

                    </div>
                  </td>

                  <!-- Quantità Avanzate -->
                  <td>
                    <div>
                      <p v-if="calculateDifference(categoryName, itemName).rimanenza.bottles">
                        {{ calculateDifference(categoryName, itemName).rimanenza.bottles || 0 }} 
                      </p>
                      <p v-if="calculateDifference(categoryName, itemName).rimanenza.liters">
                        {{ calculateDifference(categoryName, itemName).rimanenza.liters }}
                      </p>
                      <p v-if="calculateDifference(categoryName, itemName).rimanenza.milliliters">
                        {{ calculateDifference(categoryName, itemName).rimanenza.milliliters }} 
                      </p>
                      <p v-if="calculateDifference(categoryName, itemName).rimanenza.centiliters">
                        {{ calculateDifference(categoryName, itemName).rimanenza.centiliters }} 
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <button @click="goBack" class="btn btn-secondary btn-lg">Indietro</button>
            <button @click="finalize" class="btn btn-success btn-lg">Finalizza</button>
          </div>
        </div>

        <!-- Indicatori di Fase -->
        <div class="col-12 mt-5">
          <div class="progress-indicator d-flex justify-content-center mb-4">
            <div class="step" :class="{ active: currentStep >= 1 }">
              <span class="step-number">1</span>
              <span class="step-label">Persone</span>
            </div>
            <div class="step" :class="{ active: currentStep >= 2 }">
              <span class="step-number">2</span>
              <span class="step-label">Quantità</span>
            </div>
            <div class="step" :class="{ active: currentStep >= 3 }">
              <span class="step-number">3</span>
              <span class="step-label">Totale</span>
            </div>
            <div class="step" :class="{ active: currentStep >= 4 }">
              <span class="step-number">4</span>
              <span class="step-label">Bilancio</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>


<script>
import jsPDF from 'jspdf';

export default {
  name: 'GestioneQuantità',
  data() {
    return {
      numberOfPeople: 1,
      currentStep: 1,
      mieQuantità: {
        acqua: {
          frizzante: { unit: 'litri', value: 0, amountPerBottle: 0, liters: 0, centiliters: 0, milliliters: 0},
          naturale: { unit: 'litri', value: 0, amountPerBottle: 0, liters: 0, centiliters: 0, milliliters: 0 },
        },
        alcool: {
          vodka: { unit: 'litri', value: 0, amountPerBottle: 0, liters: 0, centiliters: 0, milliliters: 0 },
          rum: { unit: 'litri', value: 0, amountPerBottle: 0, liters: 0, centiliters: 0, milliliters: 0 },
        },
        analcolici: {
          coca: { unit: 'litri', value: 0, amountPerBottle: 0, liters: 0, centiliters: 0, milliliters: 0 },
          fanta: { unit: 'litri', value: 0, amountPerBottle: 0, liters: 0, centiliters: 0, milliliters: 0 },
          thePesca: { unit: 'litri', value: 0, amountPerBottle: 0, liters: 0, centiliters: 0, milliliters: 0 },
          theLimone: { unit: 'litri', value: 0, amountPerBottle: 0, liters: 0, centiliters: 0, milliliters: 0 },
          redbull: { unit: 'litri', value: 0, amountPerBottle: 0, liters: 0, centiliters: 0, milliliters: 0 },
        },
        shots: {
          montenegro: { unit: 'litri', value: 0, amountPerBottle: 0, liters: 0, centiliters: 0, milliliters: 0 },
          jeger: { unit: 'litri', value: 0, amountPerBottle: 0, liters: 0, centiliters: 0, milliliters: 0 },
          limoncino: { unit: 'litri', value: 0, amountPerBottle: 0, liters: 0, centiliters: 0, milliliters: 0 },
          vodkaZucc: { unit: 'litri', value: 0, amountPerBottle: 0, liters: 0, centiliters: 0, milliliters: 0 },
        },
        drink: {
          rum: { unit: 'litri', value: 0, amountPerBottle: 0, liters: 0, centiliters: 0, milliliters: 0 },
          gin: { unit: 'litri', value: 0, amountPerBottle: 0, liters: 0, centiliters: 0, milliliters: 0 },
          vodka: { unit: 'litri', value: 0, amountPerBottle: 0, liters: 0, centiliters: 0, milliliters: 0 },
          tonica: { unit: 'litri', value: 0, amountPerBottle: 0, liters: 0, centiliters: 0, milliliters: 0 },
          lemonSoda: { unit: 'litri', value: 0, amountPerBottle: 0, liters: 0, centiliters: 0, milliliters: 0 },
          succoPera: { unit: 'litri', value: 0, amountPerBottle: 0, liters: 0, centiliters: 0, milliliters: 0 },
        },
        spritz: {
          aperol: { unit: 'litri', value: 0, amountPerBottle: 0, liters: 0, centiliters: 0, milliliters: 0 },
          prosecco: { unit: 'litri', value: 0, amountPerBottle: 0, liters: 0, centiliters: 0, milliliters: 0 },
          soda: { unit: 'litri', value: 0, amountPerBottle: 0, liters: 0, centiliters: 0, milliliters: 0 },
        },
      },
      categories: {
        acqua: {
          frizzante: { amountPerPerson: 0.25, amountPerBottle: 1, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0 },
          naturale: { amountPerPerson: 0.25, amountPerBottle: 1, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0 },
          totale: { amountPerPerson: 0.5, amountPerBottle: 1, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0}
        },
        birra: {
          paulaner: { amountPerPerson: 0.25, amountPerBottle: 0.25, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0 },
          heineken: { amountPerPerson: 0.25, amountPerBottle: 0.25, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0 },
          totale: { amountPerPerson: 0.5, amountPerBottle: 1, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0 },
        },
        analcolici: {
          coca: { amountPerPerson: 0.3, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0},
          fanta: { amountPerPerson: 0.11, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0},
          thePesca: { amountPerPerson: 0.07, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0},
          theLimone: { amountPerPerson: 0.07, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0},
          redbull: { amountPerPerson: 0.05, amountPerBottle: 0.25, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0 },
          totale: { amountPerPerson: 0.60, amountPerBottle: 1, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0 }
        },
        shots: {
          montenegro: { amountPerPerson: 0.0375, amountPerBottle: 0.7, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0 },
          jeger: { amountPerPerson: 0.0375, amountPerBottle: 0.7, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0 },
          limoncino: { amountPerPerson: 0.0375, amountPerBottle: 0.7, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0 },
          vodkaZucc: { amountPerPerson: 0.0375, amountPerBottle: 0.7, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0 },
          totale: { amountPerPerson: 0.15, amountPerBottle: 0.7, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0 }
        },
        drink: {
          rum: { amountPerPerson: 0.02, amountPerBottle: 0.7, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0 },
          gin: { amountPerPerson: 0.05, amountPerBottle: 0.7, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0 },
          vodka: { amountPerPerson: 0.03, amountPerBottle: 0.7, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0 },
          tonica: { amountPerPerson: 0.06, amountPerBottle: 1, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0},
          lemonSoda: { amountPerPerson: 0.15, amountPerBottle: 1, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0 },
          succoPera: { amountPerPerson: 0.09, amountPerBottle: 1, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0 },
          totale: { amountPerPerson: '', amountPerBottle: '', liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0 },
        },
        spritz: {
          aperol: { amountPerPerson: 0.03, amountPerBottle: 0.7, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0 },
          prosecco: { amountPerPerson: 0.04, amountPerBottle: 0.75, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0},
          soda: { amountPerPerson: 0.02, amountPerBottle: 1, liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0},
          totale: { amountPerPerson: '', amountPerBottle: '', liters: 0, centiliters: 0, milliliters: 0, unit: 'litri', value: 0  }
        }
      },
      intestazioniTabelle: {
        inserisciQuantità: ["Dettaglio", "Bottiglie", "Litri", "Centilitri", "Millilitri"],
        festaQuantità: ["Dettaglio", "Totale Bottiglie", "Litri", "Centilitri", "Millilitri"],
        Bilancio: ["Dettaglio", "Quantità da Acquistare", "Quantità Avanzata"],
      }
    };
  },
  methods: { 
    prosegui() {
    if (this.numberOfPeople > 0) {
      if (this.currentStep === 1) {
        this.currentStep = 2;
      } else if (this.currentStep === 2) {
        this.currentStep = 3;
      } else if (this.currentStep === 3) {
        this.currentStep = 4; 
      }
    } else {
      alert("Per favore, inserisci un numero di persone valido.");
    }
  },
    goBack() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    handleInput(event, categoryName, itemName, unit) {
      const value = parseFloat(event.target.value) || 0;
      this.updateQuantities(value, categoryName, itemName, unit);
    },
    updateQuantities(value, categoryName, itemName, unit) {
      let liters, centiliters, milliliters;
      const conversion = { 'bottiglie': 1, 'litri': 1, 'centilitri': 100, 'millilitri': 1000 };
      
      liters = centiliters = milliliters = value;

      if (unit === 'bottiglie') {
        liters = value;
        centiliters = liters * 100;
        milliliters = liters * 1000;
      } else if (unit === 'litri') {
        centiliters = value * 100;
        milliliters = value * 1000;
      } else if (unit === 'centilitri') {
        liters = value / 100;
        milliliters = value * 10;
      } else if (unit === 'millilitri') {
        liters = value / 1000;
        centiliters = value / 10;
      }

      if (this.mieQuantità[categoryName] && this.mieQuantità[categoryName][itemName]) {
        this.mieQuantità[categoryName][itemName].liters = liters;
        this.mieQuantità[categoryName][itemName].centiliters = centiliters;
        this.mieQuantità[categoryName][itemName].milliliters = milliliters;
      }
    },
    calculateBottles(liters) {
      return Math.ceil(liters); 
    },

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
        liters: totalLiters.toFixed(3),
        centiliters: totalCentiliters.toFixed(0),
        milliliters: totalMilliliters.toFixed(0)
      };
    },
    convertUnit(value, unit) {
      const conversion = { 'bottiglie': 1, 'litri': 1, 'centilitri': 100, 'millilitri': 1000 };
      let liters, centiliters, milliliters;
      if (unit === 'bottiglie') {
        liters = value;
        centiliters = liters * 100;
        milliliters = liters * 1000;
      } else if (unit === 'litri') {
        liters = value;
        centiliters = value * 100;
        milliliters = value * 1000;
      } else if (unit === 'centilitri') {
        liters = value / 100;
        centiliters = value;
        milliliters = value * 10;
      } else if (unit === 'millilitri') {
        liters = value / 1000;
        centiliters = value / 10;
        milliliters = value;
      }
      return { liters, centiliters, milliliters };
    },

    calculateDifference(categoryName, itemName) {
      const category = this.categories[categoryName];
      const item = category[itemName];

      const totalToBuy = this.calculateTotal(categoryName, itemName).liters || 0;
      const totalLeft = this.mieQuantità[categoryName] && this.mieQuantità[categoryName][itemName]
        ? this.mieQuantità[categoryName][itemName].liters || 0
        : 0;

      let acquisto = totalToBuy - totalLeft;
      let rimanenza = totalLeft;

      if (rimanenza > acquisto) {
        acquisto = 0;
        rimanenza = rimanenza - totalToBuy; // la differenza diventa la rimanenza
      }

      // Se l'acquisto è maggiore della rimanenza, scalare l'acquisto e impostare la rimanenza a 0
      if (acquisto > rimanenza) {
        acquisto = rimanenza;  // Acquisto è ridotto al livello della rimanenza
        rimanenza = 0;  // La rimanenza diventa 0
      } else {
        // Se l'acquisto è minore della rimanenza, l'acquisto può essere utilizzato per compensare la rimanenza
        rimanenza = rimanenza - acquisto;
      }

      const convertToUnits = (amountInLiters) => {
        // Se amountInLiters è NaN o inferiore a 0, restituisci valori a 0
        if (isNaN(amountInLiters) || amountInLiters < 0) {
          return {
            liters: '0 L',
            milliliters: '0 mL',
            centiliters: '0 cL',
            bottles: '0 Bottiglie',
          };
        }

        const liters = amountInLiters;
        const milliliters = liters * 1000;
        const centiliters = liters * 100;
        const bottles = liters / item.bottleCapacity;

        // Limita il numero di decimali a 3 per litri e bottiglie, senza decimali per millilitri e centilitri
        return {
          liters: `${liters.toFixed(3)} L`,
          milliliters: `${milliliters.toFixed(0)} mL`,
          centiliters: `${centiliters.toFixed(0)} cL`,
          bottles: `${bottles.toFixed(3)} Bottiglie`,
        };
      };

      return {
        acquisto: convertToUnits(acquisto),
        rimanenza: convertToUnits(rimanenza),
      };
    },

    finalize() {
      const doc = new jsPDF();
      doc.text("Quantità da acquistare", 10, 10);
      doc.save("quantità.pdf");
    }
  }
};
</script>

<style scoped>
.progress-indicator {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.step {
  position: relative;
  text-align: center;
  flex: 1;
  transition: all 0.3s ease;
}

.step-number {
  display: block;
  width: 40px;
  height: 40px;
  margin: 0 auto;
  background-color: #ccc;
  border-radius: 50%;
  line-height: 40px;
  font-size: 16px;
  color: white;
}

.step-label {
  margin-top: 5px;
  font-size: 14px;
}

.step.active .step-number {
  background-color: #007bff;
}

.step.active .step-label {
  color: #007bff;
}

/* Stile per le tabelle */
.custom-table th, .custom-table td {
  text-align: center;
  vertical-align: middle;
}

.custom-table th {
  background-color: #f8f9fa;
  font-weight: bold;
}

.custom-table input {
  width: 100%;
}

/* Stile del titolo */
.step-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
}

.category-title {
  font-size: 18px;
  margin-bottom: 15px;
  color: #333;
}

button {
  width: 48%;
}

@media (max-width: 767px) {
  .step-number {
    font-size: 14px;
    width: 30px;
    height: 30px;
    line-height: 30px;
  }

  .step-label {
    font-size: 12px;
  }
}
</style>

