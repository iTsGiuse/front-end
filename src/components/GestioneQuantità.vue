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
            },
            gin: {
              quantita: { litri: 0.05, centilitri: 5, millilitri: 50 },
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
          },
          /* accessori :{
            cubetti: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 1, centilitri: 100, millilitri: 1000 },
            },
            bicchieri:{
              quantita: { litri: 0, centilitri: 0, millilitri:0},
              bottiglia: {litri: 0, centilitri: 0, millilitri:0}
            },
          } */
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
            },
            gin: {
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
          /* accessori :{
            cubetti: {
              quantita: { litri: 0, centilitri: 0, millilitri: 0 },
              bottiglia: { litri: 0, centilitri: 0, millilitri: 0 },
            },
            bicchieri:{
              quantita: { litri: 0, centilitri: 0, millilitri:0},
              bottiglia: {litri: 0, centilitri: 0, millilitri:0}
            },
          } */
        }
      },
      numeroPersone: 1,
      fase:1,
      fasi: ['Numero Persone', 'Quantità Disponibili', 'Quantità Necessarie', 'Acquisto Definitivo'],
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
  const pageHeight = doc.internal.pageSize.height;

  const imgWidth = 50;
  const imgHeight = 50;
  const imgX = (pageWidth - imgWidth) / 2;

  try {
    doc.addImage(Logo, "png", imgX, 10, imgWidth, imgHeight);
  } catch (error) {
    console.error("Errore nel caricare l'immagine del logo:", error);
  }

  let startY = 90;
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString();
  doc.setFontSize(12);
  doc.text(`NUMERO DI PERSONE: ${this.numeroPersone}`, 14, startY);
  doc.text(`GENERATO IL: ${formattedDate}`, pageWidth - 14, startY, { align: "right" });

  let categoryStartY = startY + 30;

  Object.keys(this.bevande.acquisto).forEach((categoryName) => {
    const categoryData = this.bevande.acquisto[categoryName];

    if (!categoryData || Object.keys(categoryData).length === 0) {
      doc.setFontSize(12);
      doc.text("NESSUN DATO DISPONIBILE", 10, categoryStartY + 10);
      return;
    }

    // Calcolo della dimensione della tabella per verificare lo spazio disponibile
    const tableData = Object.entries(categoryData).map(([drinkName, drink]) => [
      drinkName.toUpperCase(),
      {
        content:
          `${drink.quantitaNecessaria.toFixed(2)} L\n` +
          `${drink.millilitriNecessari ? `${drink.millilitriNecessari.toFixed(0)} ML\n` : ""}` +
          `${drink.centilitriNecessari ? `${drink.centilitriNecessari.toFixed(0)} CL\n` : ""}` +
          `${drink.bottiglieNecessarie ? `${drink.bottiglieNecessarie.toFixed(2)} BOTTIGLIE` : ""}`,
        styles: { halign: "center" },
      },
      {
        content:
          `${drink.rimanenzaDisponibile.toFixed(2)} L\n` +
          `${drink.rimanenzaMillilitri.toFixed(0)} ML\n` +
          `${drink.rimanenzaCentilitri.toFixed(0)} CL\n` +
          `${drink.rimanenzaBottiglie.toFixed(2)} BOTTIGLIE`,
        styles: { halign: "center" },
      },
      {
        content: drink.quantitaNecessaria > drink.rimanenzaDisponibile
          ? `${(drink.quantitaNecessaria - drink.rimanenzaDisponibile).toFixed(2)} L DA COMPRARE\n` +
            `${(drink.millilitriNecessari - drink.rimanenzaMillilitri).toFixed(0)} ML DA COMPRARE\n` +
            `${(drink.centilitriNecessari - drink.rimanenzaCentilitri).toFixed(0)} CL DA COMPRARE\n` +
            `${(drink.bottiglieNecessarie - drink.rimanenzaBottiglie).toFixed(2)} BOTT DA COMPRARE`
          : `${(drink.rimanenzaDisponibile - drink.quantitaNecessaria).toFixed(2)} L IN ECCESSO\n` +
            `${(drink.rimanenzaMillilitri - drink.millilitriNecessari).toFixed(0)} ML IN ECCESSO\n` +
            `${(drink.rimanenzaCentilitri - drink.centilitriNecessari).toFixed(0)} CL IN ECCESSO\n` +
            `${(drink.rimanenzaBottiglie - drink.bottiglieNecessarie).toFixed(2)} BOTT IN ECCESSO`,
        styles: {
          textColor: drink.quantitaNecessaria > drink.rimanenzaDisponibile ? [255, 0, 0] : [0, 128, 0],
          halign: "center",
        },
      },
    ]);

    // Calcola l'altezza della tabella per capire se c'è abbastanza spazio
    const tableHeight = tableData.length * 10 + 40; // Circa 10 per riga e un margine
    if (categoryStartY + tableHeight > pageHeight) {
      doc.addPage();
      categoryStartY = 20; // Reset Y per nuova pagina
    }

    // Titolo categoria
    doc.setFontSize(14);
    doc.text(categoryName.toUpperCase(), 14, categoryStartY);

    // Aggiungi la tabella
    doc.autoTable({
      startY: categoryStartY + 10,
      head: [["DETTAGLIO", "QUANTITÀ DA ACQUISTARE", "NOSTRA QUANTITÀ", "QUANTITÀ DA COMPRARE / RIMANENZE"]],
      body: tableData,
      styles: { fontSize: 10, cellPadding: 2, valign: "middle", font: "helvetica", fontStyle: "normal" },
      headStyles: { fillColor: "#941110", textColor: [255, 255, 255], halign: "center" },
      bodyStyles: { textColor: 0, halign: "center" },
      didDrawPage: (data) => {
        if (data.pageCount > 1 && categoryStartY > pageHeight - 30) {
          doc.addPage();
          categoryStartY = 20; // Reset posizione per la nuova pagina
        }
      },
    });

    categoryStartY = doc.previousAutoTable.finalY + 10;
  });

  // Footer sulla pagina finale
  doc.setFontSize(20);
  doc.setFont("helvetica", "italic", "bold");
  doc.setTextColor(148, 17, 16);
  doc.text("Dracarys Staff", pageWidth / 2, categoryStartY + 30, { align: "center" });

  const fileDate = currentDate.toISOString().split("T")[0];
  doc.save(`Acquisto_Definitivo_${fileDate}.pdf`);
}
  }
}
</script>

<template> <section id="calcoloBottiglie" class="container my-5"> <!-- Fase 1 - Numero persone --> <div v-if="fase === 1" class="fase-sezione"> <h2 class="text-center m-5">Numero di persone</h2> <div class="d-flex flex-column align-items-center"> <div class="form-group"> <label for="numeroPersone">Quante persone parteciperanno alla festa?</label> <input type="number" id="numeroPersone" v-model="numeroPersone" class="form-control" placeholder="Inserisci il numero di persone" min="1"/> </div> <button class="btn btn-danger mt-3" @click="proseguiFase2" :disabled="numeroPersone <= 0">Conferma</button> </div> </div> <!-- Fase 2 - Mie Quantità --> <div v-if="fase === 2" class="fase-sezione"> <h2 class="text-center">Quantità Disponibili</h2> <template v-for="(category, categoryName) in bevande.rimanenze" :key="categoryName"> <h3 class="mt-3">{{ categoryName }}</h3> <div class="table-responsive"> <table class="table table-bordered table-hover"> <thead> <tr> <th>Dettaglio</th> <th>Bottiglie</th> <th>Litri</th> <th>Centilitri</th> <th>Millilitri</th> </tr> </thead> <tbody> <template v-for="(drink, drinkName) in category" :key="drinkName"> <tr> <td>{{ drinkName }}</td> <td>{{ drink.bottiglie }}</td> <td> <input type="number" v-model="drink.quantita.litri" class="form-control" min="0" @input="AggiungiQuantita(drink, 'litri')" placeholder="Litri" /> </td> <td> <input type="number" v-model="drink.quantita.centilitri" class="form-control" min="0" @input="AggiungiQuantita(drink, 'centilitri')" placeholder="Centilitri" /> </td> <td> <input type="number" v-model="drink.quantita.millilitri" class="form-control" min="0" @input="AggiungiQuantita(drink, 'millilitri')" placeholder="Millilitri" /> </td> </tr> </template> </tbody> </table> </div> </template> <div class="d-flex justify-content-between mt-3"> <button class="btn btn-secondary" @click="fase--">Indietro</button> <button class="btn btn-danger" @click="vaiAFase3">Avanti</button> </div> </div> <!-- Fase 3 - Quantità necessarie --> <div v-if="fase === 3" class="fase-sezione"> <h2 class="text-center">Quantità Necessarie</h2> <template v-for="(category, categoryName) in bevande.acquisto" :key="categoryName"> <h3 class="mt-3">{{ categoryName }}</h3> <div class="table-responsive"> <table class="table table-bordered table-hover"> <thead> <tr> <th>Dettaglio</th> <th>Bottiglie necessarie</th> <th>Litri</th> <th>Centilitri</th> <th>Millilitri</th> </tr> </thead> <tbody> <template v-for="(drink, drinkName) in category" :key="drinkName"> <tr> <td>{{ drinkName }}</td> <td>{{ drink.bottiglie }}</td> <td>{{ drink.quantita.litri }}</td> <td>{{ drink.quantita.centilitri }}</td> <td>{{ drink.quantita.millilitri }}</td> </tr> </template> </tbody> </table> </div> </template> <div class="d-flex justify-content-between mt-3"> <button class="btn btn-secondary" @click="fase--">Indietro</button> <button class="btn btn-danger" @click="vaiAFase4">Avanti</button> </div> </div> <!-- Fase 4 - Acquisto definitivo --> <div v-if="fase === 4" class="fase-sezione"> <div class="d-flex justify-content-between"> <h2>Acquisto Definitivo</h2> <h2>Persone: {{ numeroPersone }}</h2> </div> <template v-for="(category, categoryName) in bevande.acquisto" :key="categoryName"> <h3 class="mt-3">{{ categoryName }}</h3> <div class="table-responsive"> <table class="table table-bordered table-hover"> <thead> <tr> <th>Dettaglio</th> <th>Quantità da acquistare</th> <th>Nostra Quantità</th> <th>Quantità da comprare / Rimanenze</th> </tr> </thead> <tbody> <template v-for="(drink, drinkName) in category" :key="drinkName"> <tr> <td>{{ drinkName }}</td> <td> <p> <span>{{ drink.quantitaNecessaria.toFixed(2) }} l</span> <br /> <span v-if="drink.millilitriNecessari !== 0">{{ drink.millilitriNecessari.toFixed(0) }} ml</span> <br /> <span v-if="drink.centilitriNecessari !== 0">{{ drink.centilitriNecessari.toFixed(0) }} cl</span> <br /> <span v-if="drink.bottiglieNecessarie !== 0">{{ drink.bottiglieNecessarie.toFixed(2) }} bottiglie</span> </p> </td> <td> <p> <span>{{ drink.rimanenzaDisponibile.toFixed(2) }} l</span> <br /> <span>{{ drink.rimanenzaMillilitri.toFixed(0) }} ml</span> <br /> <span>{{ drink.rimanenzaCentilitri.toFixed(0) }} cl</span> <br /> <span>{{ drink.rimanenzaBottiglie.toFixed(2) }} bottiglie</span> </p> </td> <td> <p v-if="drink.quantitaNecessaria > drink.rimanenzaDisponibile"> <span>{{ (drink.quantitaNecessaria - drink.rimanenzaDisponibile).toFixed(2) }} litri da comprare</span> <br /> <span>{{ (drink.millilitriNecessari - drink.rimanenzaMillilitri).toFixed(0) }} ml da comprare</span> <br /> <span>{{ (drink.centilitriNecessari - drink.rimanenzaCentilitri).toFixed(0) }} cl da comprare</span> <br /> <span>{{ (drink.bottiglieNecessarie - drink.rimanenzaBottiglie).toFixed(2) }} bottiglie da comprare</span> </p> <p v-else> <span class="text-success">{{ drink.rimanenzaDisponibile.toFixed(2) }} litri in eccesso</span> </p> </td> </tr> </template> </tbody> </table> </div> </template> <div class="d-flex justify-content-between mt-3"> <button class="btn btn-secondary" @click="fase--">Indietro</button> <button class="btn btn-success" @click="downloadPDF">Download PDF</button> </div> </div> <!-- Indicatori di Fase con Pallini --> <div class="row justify-content-center my-5"> <div class="col-12"> <div class="progress-indicator d-flex justify-content-center"> <div v-for="index in 4" :key="index" :class="['indicator', { active: fase >= index }]"> <span>{{ index }}</span> </div> </div> </div> </div> </section> </template>

<style scoped lang="scss">


  .progress-indicator {
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: 0 auto;
  }

  .indicator {
    width: 30px;
    height: 30px;
    background-color: #ccc;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

  .indicator.active {
    background-color: #017BFE;
  }

  .indicator span {
    font-weight: bold;
  }

  /* Stili per la sezione della tabella */
  .table {
    font-size: 0.9rem;
    margin-top: 20px;
  }

  .table thead th {
    background-color: #f8f9fa;
    color: #343a40;
    text-align: center;
  }

  .table-bordered {
    border: 1px solid #dee2e6;
  }

  .table-hover tbody tr:hover {
    background-color: rgba(0, 0, 0, 0.075);
  }

  /* Stili per i pulsanti */
  .btn {
    font-size: 1rem;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s, border-color 0.3s;
  }

  .btn-danger {
    background-color: #dc3545;
    border-color: #dc3545;
  }

  .btn-danger:hover {
    background-color: #c82333;
    border-color: #bd2130;
  }

  .btn-secondary {
    background-color: #6c757d;
    border-color: #6c757d;
  }

  .btn-secondary:hover {
    background-color: #5a6268;
    border-color: #545b62;
  }

  .btn-success {
    background-color: #28a745;
    border-color: #28a745;
  }

  .btn-success:hover {
    background-color: #218838;
    border-color: #1e7e34;
  }

  /* Stili per input */
  .form-control {
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 5px;
  }

  /* Stili per la sezione principale */
  #calcoloBottiglie {
    h2 {
      color: #dc3545;
      font-weight: bold;
    }

    .container {
      max-width: 1000px;
      padding: 20px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .d-flex.justify-content-between {
      margin-top: 20px;
    }

    .d-flex.flex-column.align-items-center {
      max-width: 600px;
      margin: 0 auto;
    }

    .table-responsive {
      overflow-x: auto;
    }

    .table-bordered th,
    .table-bordered td {
      vertical-align: middle;
    }

    .text-center {
      text-align: center;
    }
  }
</style>


