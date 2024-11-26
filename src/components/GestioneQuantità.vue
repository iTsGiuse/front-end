<script>
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Logo from "../assets/images/Logo/Logo-512x512.png";

export default {
  name: 'GestioneQuantità',
  data(){
    return {
      logoPDF: Logo,
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
      const pageWidth = doc.internal.pageSize.width;
      const logoPath = "../assets/images/Logo/Logo-512x512.png";
      
      // Aggiungere il logo
      const imgWidth = 50;
      const imgHeight = 50;
      const imgX = (pageWidth - imgWidth) / 2; // Centrare il logo
      try {
        doc.addImage(logoPath, "png", imgX, 10, imgWidth, imgHeight);
      } catch (error) {
        console.error("Errore nel caricare l'immagine del logo:", error);
      }


      // Titolo principale
      doc.setFontSize(18);
      doc.text("Acquisto Definitivo", pageWidth / 2, 70, { align: "center" });

      // Numero di persone
      doc.setFontSize(12);
      doc.text(`Numero di persone: ${this.numeroPersone}`, pageWidth / 2, 80, { align: "center" });

      // Aggiungi data e ora
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleString(); // Formattazione della data
      doc.setFontSize(10);
      doc.text(`Generato il: ${formattedDate}`, 10, 95);

      // Loop per le categorie di bevande
      Object.keys(this.bevande.acquisto).forEach((categoryName) => {
        const startY = doc.previousAutoTable ? doc.previousAutoTable.finalY + 10 : 110;

        // Titolo categoria
        doc.setFontSize(14);
        doc.text(categoryName, 10, startY);

        const categoryData = this.bevande.acquisto[categoryName];

        // Verifica se la categoria è vuota
        if (!categoryData || Object.keys(categoryData).length === 0) {
          doc.setFontSize(12);
          doc.text("Nessun dato disponibile", 10, startY + 10);
          return;
        }

        // Tabella dei dettagli
        const tableData = Object.entries(categoryData).map(([drinkName, drink]) => [
          drinkName,
          `${drink.quantitaNecessaria.toFixed(2)} l\n` +
          `${drink.millilitriNecessari ? `${drink.millilitriNecessari.toFixed(0)} ml\n` : ""}` +
          `${drink.centilitriNecessari ? `${drink.centilitriNecessari.toFixed(0)} cl\n` : ""}` +
          `${drink.bottiglieNecessarie ? `${drink.bottiglieNecessarie.toFixed(2)} bottiglie` : ""}`,
          `${drink.rimanenzaDisponibile.toFixed(2)} l\n` +
          `${drink.rimanenzaMillilitri.toFixed(0)} ml\n` +
          `${drink.rimanenzaCentilitri.toFixed(0)} cl\n` +
          `${drink.rimanenzaBottiglie.toFixed(2)} bottiglie`,
          drink.quantitaNecessaria > drink.rimanenzaDisponibile
          ? `${(drink.quantitaNecessaria - drink.rimanenzaDisponibile).toFixed(2)} litri da comprare\n` +
            `${(drink.millilitriNecessari - drink.rimanenzaMillilitri).toFixed(0)} ml da comprare\n` +
            `${(drink.centilitriNecessari - drink.rimanenzaCentilitri).toFixed(0)} cl da comprare\n` +
            `${(drink.bottiglieNecessarie - drink.rimanenzaBottiglie).toFixed(2)} bottiglie da comprare`
          : `${(drink.rimanenzaDisponibile - drink.quantitaNecessaria).toFixed(2)} litri in eccesso\n` +
            `${(drink.rimanenzaMillilitri - drink.millilitriNecessari).toFixed(0)} ml in eccesso\n` +
            `${(drink.rimanenzaCentilitri - drink.centilitriNecessari).toFixed(0)} cl in eccesso\n` +
            `${(drink.rimanenzaBottiglie - drink.bottiglieNecessarie).toFixed(2)} bottiglie in eccesso`
        ]);

        doc.autoTable({
          startY: startY + 6,
          head: [["Dettaglio", "Quantità da acquistare", "Nostra Quantità", "Quantità da comprare / Rimanenze"]],
          body: tableData,
          styles: { fontSize: 10, cellPadding: 2 },
          headStyles: { fillColor: '#941110', textColor: [255, 255, 255] },
        });
      });

      // Salva il PDF
      doc.save("Acquisto_Definitivo.pdf");
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

