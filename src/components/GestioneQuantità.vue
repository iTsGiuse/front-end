<script>
import jsPDF from 'jspdf';

export default {
  name: 'GestioneQuantità',
  data(){
    return {
      bevande : {
        acquisto: {
          acqua: {
            frizzante: {
              quantita: { litri: 0.25, centilitri: 25, millilitri: 250 },
              bottiglia: { litri: 1, centilitri: 100, millilitri: 1000 }
            },
            naturale: {
              quantita: { litri: 0.25, centilitri: 25, millilitri: 250 },
              bottiglia: { litri: 1, centilitri: 100, millilitri: 1000 }
            }
          },
          alcool: {
            vodka: {
              quantita: { litri: 0.03, centilitri: 3, millilitri: 30 },
              bottiglia: { litri: 0.7, centilitri: 70, millilitri: 700 }
            },
            rum: {
              quantita: { litri: 0.02, centilitri: 2, millilitri: 20 },
              bottiglia: { litri: 0.7, centilitri: 70, millilitri: 700 }
            }
          },
          birra: {
            paulaner: {
              quantita: { litri: 0.25, centilitri: 25, millilitri: 250 },
              bottiglia: { litri: 0.25, centilitri: 25, millilitri: 250 }
            },
            heineken: {
              quantita: { litri: 0.25, centilitri: 25, millilitri: 250 },
              bottiglia: { litri: 0.25, centilitri: 25, millilitri: 250 }
            }
          },
          analcolici: {
            coca: {
              quantita: { litri: 0.3, centilitri: 30, millilitri: 300 },
              bottiglia: { litri: 1, centilitri: 100, millilitri: 1000 }
            },
            fanta: {
              quantita: { litri: 0.11, centilitri: 11, millilitri: 110 },
              bottiglia: { litri: 1, centilitri: 100, millilitri: 1000 }
            },
            thePesca: {
              quantita: { litri: 0.07, centilitri: 7, millilitri: 70 },
              bottiglia: { litri: 1, centilitri: 100, millilitri: 1000 }
            },
            theLimone: {
              quantita: { litri: 0.07, centilitri: 7, millilitri: 70 },
              bottiglia: { litri: 1, centilitri: 100, millilitri: 1000 }
            },
            redbull: {
              quantita: { litri: 0.05, centilitri: 5, millilitri: 50 },
              bottiglia: { litri: 0.25, centilitri: 25, millilitri: 250 }
            }
          },
          shots: {
            montenegro: {
              quantita: { litri: 0.0375, centilitri: 3.75, millilitri: 37.5 },
              bottiglia: { litri: 0.7, centilitri: 70, millilitri: 700 }
            },
            jeger: {
              quantita: { litri: 0.0375, centilitri: 3.75, millilitri: 37.5 },
              bottiglia: { litri: 0.7, centilitri: 70, millilitri: 700 }
            },
            limoncino: {
              quantita: { litri: 0.0375, centilitri: 3.75, millilitri: 37.5 },
              bottiglia: { litri: 0.7, centilitri: 70, millilitri: 700 }
            },
            vodkaZucc: {
              quantita: { litri: 0.0375, centilitri: 3.75, millilitri: 37.5 },
              bottiglia: { litri: 0.7, centilitri: 70, millilitri: 700 }
            }
          },
          drink: {
            rum: {
              quantita: { litri: 0.02, centilitri: 2, millilitri: 20 },
              bottiglia: { litri: 0.7, centilitri: 70, millilitri: 700 }
            },
            gin: {
              quantita: { litri: 0.05, centilitri: 5, millilitri: 50 },
              bottiglia: { litri: 0.7, centilitri: 70, millilitri: 700 }
            },
            vodka: {
              quantita: { litri: 0.03, centilitri: 3, millilitri: 30 },
              bottiglia: { litri: 0.7, centilitri: 70, millilitri: 700 }
            },
            tonica: {
              quantita: { litri: 0.06, centilitri: 6, millilitri: 60 },
              bottiglia: { litri: 1, centilitri: 100, millilitri: 1000 }
            },
            lemonSoda: {
              quantita: { litri: 0.15, centilitri: 15, millilitri: 150 },
              bottiglia: { litri: 1, centilitri: 100, millilitri: 1000 }
            },
            succoPera: {
              quantita: { litri: 0.09, centilitri: 9, millilitri: 90 },
              bottiglia: { litri: 1, centilitri: 100, millilitri: 1000 }
            }
          },
          spritz: {
            aperol: {
              quantita: { litri: 0.03, centilitri: 3, millilitri: 30 },
              bottiglia: { litri: 0.7, centilitri: 70, millilitri: 700 }
            },
            prosecco: {
              quantita: { litri: 0.04, centilitri: 4, millilitri: 40 },
              bottiglia: { litri: 0.75, centilitri: 75, millilitri: 750 }
            },
            soda: {
              quantita: { litri: 0.02, centilitri: 2, millilitri: 20 },
              bottiglia: { litri: 1, centilitri: 100, millilitri: 1000 }
            }
          }
        },
        rimanenze: {
          acqua: {
            frizzante: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 1, centilitri: 100, millilitri: 1000 }
            },
            naturale: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 1, centilitri: 100, millilitri: 1000 }
            }
          },
          alcool: {
            vodka: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 0.7, centilitri: 70, millilitri: 700 }
            },
            rum: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 0.7, centilitri: 70, millilitri: 700 }
            }
          },
          birra: {
            paulaner: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 0.25, centilitri: 25, millilitri: 250 }
            },
            heineken: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 0.25, centilitri: 25, millilitri: 250 }
            }
          },
          analcolici: {
            coca: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 1, centilitri: 100, millilitri: 1000 }
            },
            fanta: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 1, centilitri: 100, millilitri: 1000 }
            },
            thePesca: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 1, centilitri: 100, millilitri: 1000 }
            },
            theLimone: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 1, centilitri: 100, millilitri: 1000 }
            },
            redbull: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 0.25, centilitri: 25, millilitri: 250 }
            }
          },
          shots: {
            montenegro: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 0.7, centilitri: 70, millilitri: 700 }
            },
            jeger: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 0.7, centilitri: 70, millilitri: 700 }
            },
            limoncino: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 0.7, centilitri: 70, millilitri: 700 }
            },
            vodkaZucc: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 0.7, centilitri: 70, millilitri: 700 }
            }
          },
          drink: {
            rum: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 0.7, centilitri: 70, millilitri: 700 }
            },
            gin: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 0.7, centilitri: 70, millilitri: 700 }
            },
            vodka: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 0.7, centilitri: 70, millilitri: 700 }
            },
            tonica: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 1, centilitri: 100, millilitri: 1000 }
            },
            lemonSoda: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 1, centilitri: 100, millilitri: 1000 }
            },
            succoPera: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 1, centilitri: 100, millilitri: 1000 }
            }
          },
          spritz: {
            aperol: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 0.7, centilitri: 70, millilitri: 700 }
            },
            prosecco: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 0.75, centilitri: 75, millilitri: 750 }
            },
            soda: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 1, centilitri: 100, millilitri: 1000 }
            }
          },
        }
      },
      numeroPersone: 1,
      fase:1,
    }
  },
  methods: {
    proseguiFase2() {
      if (this.numeroPersone > 0) {
        for (let categoria in this.bevande.rimanenze) {
          for (let nomeBevanda in this.bevande.rimanenze[categoria]) {
            let drink = this.bevande.rimanenze[categoria][nomeBevanda];
            this.AggiungiQuantita(drink, 'litri');
            this.AggiungiQuantita(drink, 'centilitri');
            this.AggiungiQuantita(drink, 'millilitri');
          }
        } 
        this.fase = 2;
      }
    },
    vaiAFase3() {
      this.calcoloBottiglieNecessarie();
      this.fase = 3;
    },
    vaiAFase4() {
      this.acquistoDefinitivo();
      this.fase = 4;
    },
    AggiungiQuantita(drink, unit) {
      let totalLitri = 0;

      if (unit === 'litri') {
        totalLitri = drink.quantita.litri;
      } else if (unit === 'centilitri') {
        totalLitri = drink.quantita.centilitri / 100;
      } else if (unit === 'millilitri') {
        totalLitri = drink.quantita.millilitri / 1000;
      }

      if (totalLitri >= 0) {
        drink.quantita.litri = totalLitri;
        drink.quantita.centilitri = totalLitri * 100;
        drink.quantita.millilitri = totalLitri * 1000;

        let capacitaBottiglia = drink.bottiglia.litri;
        let numBottiglie = totalLitri / capacitaBottiglia;

        drink.bottiglie = parseFloat(numBottiglie.toFixed(2));
      }
    },
    calcoloBottiglieNecessarie() {
      for (let categoria in this.bevande.acquisto) {
        for (let nomeBevanda in this.bevande.acquisto[categoria]) {
          let bevanda = this.bevande.acquisto[categoria][nomeBevanda];

          let nuoviLitri = bevanda.quantita.litri * this.numeroPersone;
          let nuoviCentilitri = nuoviLitri * 100;
          let nuoviMillilitri = nuoviLitri * 1000;

          bevanda.quantita.litri = +nuoviLitri.toFixed(2);
          bevanda.quantita.centilitri = +nuoviCentilitri.toFixed(2);
          bevanda.quantita.millilitri = +nuoviMillilitri.toFixed(2);

          let capacitaBottiglia = bevanda.bottiglia.litri;
          let bottiglieNecessarie = nuoviLitri / capacitaBottiglia;

          bevanda.bottiglie = parseFloat(bottiglieNecessarie.toFixed(2));
        }
      }
    },
    acquistoDefinitivo() {
      for (let categoria in this.bevande.acquisto) {
        for (let nomeBevanda in this.bevande.acquisto[categoria]) {
          let drink = this.bevande.acquisto[categoria][nomeBevanda];
          let rimanenza = this.bevande.rimanenze[categoria][nomeBevanda].quantita.litri;

          let necessaria = drink.quantita.litri * this.numeroPersone;
          let differenza = necessaria - rimanenza;

          let bottiglieNecessarie = 0;
          if (differenza > 0) {
            bottiglieNecessarie = differenza / drink.bottiglia.litri;
          }

          let millilitri = necessaria * 1000;
          let centilitri = necessaria * 100;

          drink.quantitaNecessaria = necessaria;
          drink.rimanenzaDisponibile = rimanenza;
          drink.bottiglieNecessarie = bottiglieNecessarie > 0 ? bottiglieNecessarie : 0;
          drink.millilitriNecessari = millilitri;
          drink.centilitriNecessari = centilitri;
          drink.differenza = differenza;

          let rimanenzaMillilitri = rimanenza * 1000;
          let rimanenzaCentilitri = rimanenza * 100;
          let rimanenzaBottiglie = rimanenza / drink.bottiglia.litri;

          drink.rimanenzaMillilitri = rimanenzaMillilitri;
          drink.rimanenzaCentilitri = rimanenzaCentilitri;
          drink.rimanenzaBottiglie = rimanenzaBottiglie;
        }
      }
    },
    downloadPDF() {
  const doc = new jsPDF();
  const phaseData = [];

  // Raccogliamo i dati dalla fase 4
  for (let categoryName in this.bevande.acquisto) {
    let category = this.bevande.acquisto[categoryName];
    let drinks = [];

    for (let drinkName in category) {
      let drink = category[drinkName];

      drinks.push({
        name: drinkName,
        quantitaNecessaria: drink.quantitaNecessaria,
        rimanenzaDisponibile: drink.rimanenzaDisponibile,
        millilitriNecessari: drink.millilitriNecessari,
        centilitriNecessari: drink.centilitriNecessari,
        bottiglieNecessarie: drink.bottiglieNecessarie,
        rimanenzaMillilitri: drink.rimanenzaMillilitri,
        rimanenzaCentilitri: drink.rimanenzaCentilitri,
        rimanenzaBottiglie: drink.rimanenzaBottiglie
      });
    }

    phaseData.push({ category: categoryName, drinks });
  }

  // Aggiungi la data del giorno corrente
  const today = new Date();
  const dateStr = `${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`;

  // Aggiungi il titolo e i dettagli iniziali
  doc.setFontSize(16);
  doc.text('BERE PER FESTA', 20, 20);
  doc.setFontSize(12);
  doc.text(`NUMERO PERSONE: ${this.numeroPersone}`, 20, 30);
  doc.text(`DATA: ${dateStr}`, 160, 30);

  let yOffset = 40; // Posizione iniziale per i dati

  // Itera sulle categorie e bevande per aggiungere i dettagli al PDF
  phaseData.forEach(item => {
    // Categoria
    doc.text(item.category, 20, yOffset);
    yOffset += 5; // Aggiungi un po' di spazio tra le categorie

    // Intestazione della tabella sotto ogni categoria
    doc.text('NOME', 20, yOffset);
    doc.text('ACQ.', 50, yOffset);
    doc.text('NS. QUANT.', 90, yOffset);
    doc.text('DA COMPRARE / RIAMANENZA', 140, yOffset);
    yOffset += 10;

    // Dettagli per ciascuna bevanda
    item.drinks.forEach(drink => {
      // Dettagli della bevanda
      doc.text(drink.name, 20, yOffset);

      // Quantità necessarie (con le varie unità di misura)
      doc.text(`${drink.quantitaNecessaria.toFixed(2)} l`, 50, yOffset + 10);
      doc.text(`${drink.millilitriNecessari} ml`, 90, yOffset + 10);
      doc.text(`${drink.centilitriNecessari} cl`, 130, yOffset + 10);
      doc.text(`${drink.bottiglieNecessarie.toFixed(2)} bott`, 170, yOffset + 10);

      // Quantità rimanenti (con le varie unità di misura)
      doc.text(`${drink.rimanenzaDisponibile.toFixed(2)} l`, 220, yOffset + 10);
      doc.text(`${drink.rimanenzaMillilitri} ml`, 260, yOffset + 10);
      doc.text(`${drink.rimanenzaCentilitri} cl`, 300, yOffset + 10);
      doc.text(`${drink.rimanenzaBottiglie.toFixed(2)} bott`, 340, yOffset + 10);

      // Quantità da comprare / in eccesso
      if (drink.quantitaNecessaria > drink.rimanenzaDisponibile) {
        doc.text(`${(drink.quantitaNecessaria - drink.rimanenzaDisponibile).toFixed(2)} l`, 380, yOffset + 10);
        doc.text(`${(drink.millilitriNecessari - drink.rimanenzaMillilitri).toFixed(0)} ml`, 420, yOffset + 10);
        doc.text(`${(drink.centilitriNecessari - drink.rimanenzaCentilitri).toFixed(0)} cl`, 460, yOffset + 10);
        doc.text(`${(drink.bottiglieNecessarie - drink.rimanenzaBottiglie).toFixed(2)} bott`, 500, yOffset + 10);
      } else {
        doc.text(`${(drink.rimanenzaDisponibile - drink.quantitaNecessaria).toFixed(2)} l`, 380, yOffset + 10);
        doc.text(`${(drink.rimanenzaMillilitri - drink.millilitriNecessari).toFixed(0)} ml`, 420, yOffset + 10);
        doc.text(`${(drink.rimanenzaCentilitri - drink.centilitriNecessari).toFixed(0)} cl`, 460, yOffset + 10);
        doc.text(`${(drink.rimanenzaBottiglie - drink.bottiglieNecessarie).toFixed(2)} bott`, 500, yOffset + 10);
      }

      yOffset += 20; // Aggiungi spazio tra le righe di dati

      // Aggiungi una nuova pagina se necessario
      if (yOffset > 270) {
        doc.addPage();
        yOffset = 20; // Reset della posizione verticale per una nuova pagina

        // Ripetere l'intestazione della tabella
        doc.text('NOME', 20, yOffset);
        doc.text('ACQ.', 50, yOffset);
        doc.text('NS. QUANT.', 90, yOffset);
        doc.text('DA COMPRARE / RIAMANENZA', 140, yOffset);
        yOffset += 10; // Spostarsi alla riga successiva
      }
    });
  });

  // Salva il PDF
  doc.save('bere_per_festa.pdf');
}
}
}

</script>

<template>
  <section id="calcoloBottiglie" class="container my-5">

    <!-- Fase 1 - Numero persone -->
    <div v-if="fase === 1" class="mt-4" >
      <h2 class="text-center m-5">Numero di persone</h2>
      <div class="d-flex justify-content-between align-items-center ">
        <div class="form-group d-flex">
          <label for="numeroPersone">Quante persone parteciperanno alla festa?</label>
          <input type="number" id="numeroPersone" v-model="numeroPersone" class="form-control" placeholder="Inserisci il numero di persone" min="1"/>
        </div>
        <div class="text-center">
          <button class="btn btn-danger mt-3" @click="proseguiFase2" :disabled="numeroPersone <= 0">Conferma</button>
        </div>
      </div>
    </div>

    <!-- Fase 2 - Mie Quantità -->
    <div v-if="fase === 2" class="mt-4">
      <h2 class="text-center">Quantità Disponibili</h2>
      <template v-for="(category, categoryName) in bevande.rimanenze" :key="categoryName">
        <h3 class="mt-3">{{ categoryName }}</h3>
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Dettaglio</th>
              <th>Bottiglie</th>
              <th>Litri</th>
              <th>Centilitri</th>
              <th>Millilitri</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(drink, drinkName) in category" :key="drinkName">
              <tr>
                <td>{{ drinkName }}</td>
                <td>{{ drink.bottiglie }}</td>
                <td>
                  <input type="number" v-model="drink.quantita.litri" class="form-control" min="0" @input="AggiungiQuantita(drink, 'litri')" placeholder="Litri" />
                </td>
                <td>
                  <input type="number" v-model="drink.quantita.centilitri" class="form-control" min="0" @input="AggiungiQuantita(drink, 'centilitri')" placeholder="Centilitri" />
                </td>
                <td>
                  <input type="number" v-model="drink.quantita.millilitri" class="form-control" min="0" @input="AggiungiQuantita(drink, 'millilitri')" placeholder="Millilitri" />
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </template>
      <div class="d-flex justify-content-between">
        <button class="btn btn-secondary" @click="fase--">Indietro</button>
        <button class="btn btn-danger" @click="vaiAFase3">Avanti</button>
      </div>
    </div>

    <!-- Fase 3 - Quantità necessarie -->
    <div v-if="fase === 3" class="mt-4">
      <h2 class="text-center">Quantità Necessarie</h2>
      <template v-for="(category, categoryName) in bevande.acquisto" :key="categoryName">
        <h3 class="mt-3">{{ categoryName }}</h3>
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Dettaglio</th>
              <th>Bottiglie necessarie</th>
              <th>Litri</th>
              <th>Centilitri</th>
              <th>Millilitri</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(drink, drinkName) in category" :key="drinkName">
              <tr>
                <td>{{ drinkName }}</td>
                <td>{{ drink.bottiglie }}</td> 
                <td>{{ drink.quantita.litri }}</td>
                <td>{{ drink.quantita.centilitri }}</td>
                <td>{{ drink.quantita.millilitri }}</td>
              </tr>
            </template>
          </tbody>
        </table>
      </template>
      <div class="d-flex justify-content-between">
        <button class="btn btn-secondary" @click="fase--">Indietro</button>
        <button class="btn btn-danger" @click="vaiAFase4">Avanti</button>
      </div>
    </div>

    <!-- Fase 4 - Acquisto definitivo -->
    <div v-if="fase === 4" class="mt-4">
      <div class="d-flex justify-content-between">
        <h2>Acquisto Definitivo</h2>
        <h2>Persone: {{ numeroPersone }}</h2>
      </div>
      <template v-for="(category, categoryName) in bevande.acquisto" :key="categoryName">
        <h3 class="mt-3">{{ categoryName }}</h3>
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Dettaglio</th>
              <th>Quantità da acquistare</th>
              <th>Nostra Quantità</th>
              <th>Quantità da comprare / Rimanenze</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(drink, drinkName) in category" :key="drinkName">
              <tr>
                <td>{{ drinkName }}</td>
                <td>
                  <p>
                    <span>{{ drink.quantitaNecessaria.toFixed(2) }} l</span>
                    <br />
                    <span v-if="drink.millilitriNecessari !== 0">{{ drink.millilitriNecessari.toFixed(0) }} ml</span>
                    <br />
                    <span v-if="drink.centilitriNecessari !== 0">{{ drink.centilitriNecessari.toFixed(0) }} cl</span>
                    <br />
                    <span v-if="drink.bottiglieNecessarie !== 0">{{ drink.bottiglieNecessarie.toFixed(2) }} bottiglie</span>
                  </p>
                </td> 
                <td>
                  <p>
                    <span>{{ drink.rimanenzaDisponibile.toFixed(2) }} l</span>
                    <br />
                    <span>{{ drink.rimanenzaMillilitri.toFixed(0) }} ml</span>
                    <br />
                    <span>{{ drink.rimanenzaCentilitri.toFixed(0) }} cl</span>
                    <br />
                    <span>{{ drink.rimanenzaBottiglie.toFixed(2) }} bottiglie</span>
                  </p>
                </td>
                <td>
                  <p v-if="drink.quantitaNecessaria > drink.rimanenzaDisponibile">
                    <span>{{ (drink.quantitaNecessaria - drink.rimanenzaDisponibile).toFixed(2) }} litri da comprare</span>
                    <br />
                    <span>{{ (drink.millilitriNecessari - drink.rimanenzaMillilitri).toFixed(0) }} ml da comprare</span>
                    <br />
                    <span>{{ (drink.centilitriNecessari - drink.rimanenzaCentilitri).toFixed(0) }} cl da comprare</span>
                    <br />
                    <span>{{ (drink.bottiglieNecessarie - drink.rimanenzaBottiglie).toFixed(2) }} bottiglie da comprare</span>
                  </p>
                  <p v-else>
                    <span class="text-success">{{ drink.rimanenzaDisponibile.toFixed(2) }} litri in eccesso</span>
                  </p>
                </td> <!-- Quantità da acquistare / rimanenze -->
              </tr>
            </template>
          </tbody>
        </table>
      </template>
      <div class="d-flex justify-content-between">
        <button class="btn btn-secondary" @click="fase--">Indietro</button>
        <button class="btn btn-success" @click="downloadPDF">Download PDF</button>
      </div>
    </div>
    
        <!-- Indicatori di Fase con Pallini -->
        <div class="row justify-content-center my-5">
      <div class="col-12">
        <div class="progress-indicator d-flex justify-content-between align-items-center">
          <div class="step" :class="{ active: fase >= 1 }">
            <div class="step-circle d-flex justify-content-center align-items-center">
              <span class="step-number">1</span>
            </div>
            <span class="step-label">Persone</span>
          </div>
          <div class="step" :class="{ active: fase >= 2 }">
            <div class="step-circle d-flex justify-content-center align-items-center">
              <span class="step-number">2</span>
            </div>
            <span class="step-label">Quantità</span>
          </div>
          <div class="step" :class="{ active: fase >= 3 }">
            <div class="step-circle d-flex justify-content-center align-items-center">
              <span class="step-number">3</span>
            </div>
            <span class="step-label">Totale</span>
          </div>
          <div class="step" :class="{ active: fase >= 4 }">
            <div class="step-circle d-flex justify-content-center align-items-center">
              <span class="step-number">4</span>
            </div>
            <span class="step-label">Bilancio</span>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.progress-indicator .step {
  text-align: center;
  position: relative;
}

.step-circle {
  width: 40px;
  height: 40px;
  background-color: #e0e0e0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.step.active .step-circle {
  background-color: #007bff;
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
}

.step-number {
  color: white;
  font-weight: bold;
}

.step-label {
  font-size: 12px;
  margin-top: 5px;
}

@media (max-width: 768px) {
  .progress-indicator {
    flex-direction: column;
    align-items: center;
  }

  .step {
    margin-bottom: 20px;
  }

  .step-circle {
    width: 50px;
    height: 50px;
  }
}
</style>

