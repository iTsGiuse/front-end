<script>
    import faqs from "../../faqs.js";

    export default{
        name: 'Faq',
        data() {
            return {
                faqs
            };
        }
    }
</script>

<template>
    <section id="faq" class="container my-5">
      <h2 class="text-center mb-4">Domande Frequenti</h2>
      <div class="accordion" id="faqAccordion">
        <div v-for="(faq, index) in faqs" :key="index" class="accordion-item">
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


    }
</style>