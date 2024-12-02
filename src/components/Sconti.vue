<template>
    <div class="container mt-5">
      <h1 class="text-center">Calcolatore Gruppi</h1>
      <form @submit.prevent="calculateTotal">
        <div class="mb-3">
          <label for="groupsDrago" class="form-label">Gruppi DRAGO (100%) - Min. 8 Persone per Gruppo</label>
          <input
            type="number"
            id="groupsDrago"
            class="form-control"
            v-model.number="groupsDrago"
            min="0"
            placeholder="Numero gruppi"
          />
        </div>
        <div class="mb-3">
          <label for="groupsDraghetto" class="form-label">Gruppi DRAGHETTO (50%) - Min. 6 Persone per Gruppo</label>
          <input
            type="number"
            id="groupsDraghetto"
            class="form-control"
            v-model.number="groupsDraghetto"
            min="0"
            placeholder="Numero gruppi"
          />
        </div>
        <div class="mb-3">
          <label for="groupsPesce" class="form-label">Gruppi PESCE (15%) - Min. 4 Persone per Gruppo</label>
          <input
            type="number"
            id="groupsPesce"
            class="form-control"
            v-model.number="groupsPesce"
            min="0"
            placeholder="Numero gruppi"
          />
        </div>
        <div class="mb-3">
          <label for="groupsNone" class="form-label">Gruppi Senza Sconto</label>
          <input
            type="number"
            id="groupsNone"
            class="form-control"
            v-model.number="groupsNone"
            min="0"
            placeholder="Numero gruppi"
          />
        </div>
        <button type="submit" class="btn btn-primary">Calcola</button>
      </form>
  
      <div v-if="total !== null" class="mt-4">
        <h3>Risultati:</h3>
        <p>Totale Persone: {{ totalPeople }}</p>
        <p>Totale Senza Sconto: €{{ totalWithoutDiscount.toFixed(2) }}</p>
        <p>Totale Con Sconto: €{{ total.toFixed(2) }}</p>
<!--         <p>Guadagno Totale: €{{ totalGain.toFixed(2) }}</p> -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CalcolatoreGruppi",
    data() {
      return {
        groupsDrago: 0,
        groupsDraghetto: 0,
        groupsPesce: 0,
        groupsNone: 0,
        peoplePerGroupDrago: 8,
        peoplePerGroupDraghetto: 6,
        peoplePerGroupPesce: 4,
        ticketPrice: 11.5,
        discountDrago: 0.125, // 100%
        discountDraghetto: 0.083333, // 50%
        discountPesce: 0.0375, 
        total: null,
        totalGain: null,
      };
    },
    computed: {
      // Totale persone per ciascun tipo di gruppo
      totalPeople() {
        return (
          this.groupsDrago * this.peoplePerGroupDrago +
          this.groupsDraghetto * this.peoplePerGroupDraghetto +
          this.groupsPesce * this.peoplePerGroupPesce +
          this.groupsNone * 1 // Gruppi senza sconto non hanno restrizioni sul numero di persone
        );
      },
      // Totale senza applicare sconti
      totalWithoutDiscount() {
        return this.totalPeople * this.ticketPrice;
      },
    },
    methods: {
      calculateTotal() {
        // Calcolo per ciascun gruppo
        const totalDrago =
          this.groupsDrago *
          this.peoplePerGroupDrago *
          this.ticketPrice *
          (1 - this.discountDrago);
  
        const totalDraghetto =
          this.groupsDraghetto *
          this.peoplePerGroupDraghetto *
          this.ticketPrice *
          (1 - this.discountDraghetto);
  
        const totalPesce =
          this.groupsPesce *
          this.peoplePerGroupPesce *
          this.ticketPrice *
          (1 - this.discountPesce);
  
        const totalNone =
          this.groupsNone * this.ticketPrice; // Senza sconto, prezzo pieno
  
        // Guadagno totale
        this.totalGain =
          this.groupsDrago * this.peoplePerGroupDrago * this.ticketPrice +
          this.groupsDraghetto * this.peoplePerGroupDraghetto * this.ticketPrice +
          this.groupsPesce * this.peoplePerGroupPesce * this.ticketPrice +
          this.groupsNone * this.ticketPrice;
  
        // Totale con sconti applicati
        this.total = totalDrago + totalDraghetto + totalPesce + totalNone;
      },
    },
  };
  </script>
  
  <style>
  h1 {
    color: #ff5722;
  }
  </style>