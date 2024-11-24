<script>
import faqs from "../../faqs.js";

export default {
  name: 'Faq',
  data() {
    return {
      faqs,
      selectedCategories: [], // Initially no category is selected
    };
  },
  computed: {
    // Group FAQs by category dynamically
    groupedFaqs() {
      return this.faqs.reduce((groups, faq) => {
        if (!groups[faq.category]) {
          groups[faq.category] = [];
        }
        groups[faq.category].push(faq);
        return groups;
      }, {});
    },
    // Extract all unique categories dynamically from the faqs
    categories() {
      return Object.keys(this.groupedFaqs);
    },
    // Method to get the count of FAQs per category
    faqsCount() {
      return this.categories.reduce((counts, category) => {
        counts[category] = this.groupedFaqs[category].length;
        return counts;
      }, {});
    }
  },
  methods: {
    // Close the modal and reset selected categories if needed
    closeModal() {
      // Optionally reset selected categories or leave them as they are
    }
  },
  mounted() {
    // By default, select all categories
    this.selectedCategories = this.categories;
  }
};
</script>
<template>
  <section id="faq" class="container my-5">
    <h2 class="text-center mb-4">Domande Frequenti</h2>

    <!-- Trigger Button for Modal -->
    <button type="button" class="btn btn-danger mb-5" data-bs-toggle="modal" data-bs-target="#categoryModal">
      <i class="fa-solid fa-filter"></i>
    </button>

    <!-- Modal for Selecting Categories -->
    <div class="modal fade" id="categoryModal" tabindex="-1" aria-labelledby="categoryModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="categoryModalLabel">Seleziona Categorie</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <ul class="list-unstyled">
              <li v-for="(category, index) in categories" :key="index">
                <input type="checkbox" v-model="selectedCategories" :value="category" /> 
                {{ category }} ({{ faqsCount[category] }})
              </li>
            </ul>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">
              Annulla
            </button>
            <button type="button" class="btn btn-danger" @click="closeModal" data-bs-dismiss="modal">
              Conferma
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Displaying FAQs by Category -->
    <div v-for="(faqsByCategory, category) in groupedFaqs" :key="category" v-show="selectedCategories.includes(category)" class="mb-5">
      <h3>{{ category }}</h3>
      <div class="accordion" id="faqAccordion">
        <div v-for="(faq, index) in faqsByCategory" :key="index" class="accordion-item">
          <h2 class="accordion-header" :id="'heading' + index">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + index" :aria-expanded="index === 0 ? 'true' : 'false'" :aria-controls="'collapse' + index">
              {{ faq.question }}
            </button>
          </h2>
          <div :id="'collapse' + index" class="accordion-collapse collapse fst-italic" :class="{ show: index === 0 }" :aria-labelledby="'heading' + index" data-bs-parent="#faqAccordion">
            <div class="accordion-body fst-italic">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
    #faq {
        .accordion {
            border-radius: 8px !important; 
        }

        .accordion-button {
            background-color: white !important; 
            color: #333; 
        }

        .accordion-button::after {
            border-color: red;
        }

        .category-link a {
            color: red;
            display: block;
            margin-bottom: 8px;
        }

        /* Modal Styling */
        .modal-body {
            max-height: 300px;
            overflow-y: auto;
        }
    }
</style>