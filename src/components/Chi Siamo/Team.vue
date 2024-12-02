<script>
import admin from '../../assets/Js/admin.js';

export default {
  name: 'Team',
  data() {
    return {
      admin
    };
  }
};
</script>

<template>
    <section id="team" class="py-5">
      <div class="container">
        <div class="row text-center mb-5">
          <div class="col mb-4">
            <h2 class="section-title text-danger">Team</h2>
            <h4 class="lead text-muted">Ogni membro del nostro team è una risorsa inestimabile</h4>
          </div>
        </div>
  
        <div v-for="(member, index) in admin" :key="index" class="row mb-5 member-section">
          <div :class="['col-12 col-md-6 d-flex align-items-center', index % 2 !== 0 ? 'order-md-2' : '']">
            <div class="team-photo d-flex" :class="index % 2 !== 0 ? 'ms-auto' : 'justify-content-start'">
              <img :src="member.foto" :alt="`${member.nome} ${member.cognome}`" class="img-fluid rounded-circle shadow-lg" />
            </div>
          </div>
          <div :class="['col-12 col-md-6 d-flex flex-column', index % 2 !== 0 ? 'text-md-end' : 'text-md-start']">
            <div class="team-text text-center text-md-start flex-grow-1">
              <h4 class="text-danger">{{ member.nome }} {{ member.cognome }}</h4>
              <p class="text-muted">{{ member.descrizione }}</p>
            </div>
            <div :class="['social-icons mt-2 d-flex ', index % 2 !== 0 ? 'justify-content-start' : 'ms-auto']">
              <a :href="member.instagram" class="text-dark me-3" target="_blank">
                <i class="fab fa-instagram"></i> 
              </a>
              <a :href="member.linkedin" class="text-dark me-3" target="_blank">
                <i class="fab fa-linkedin"></i> 
              </a>
            </div>
          </div>
        </div>
  
      </div>
    </section>
  </template>

<style scoped>
  
  #team {
  background-color: #f9f9f9;
  padding-top: 50px;
  padding-bottom: 50px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.lead {
  font-size: 1.1rem;
  color: #6c757d;
  font-weight: 600;
}

.member-section {
  background-color: #fff;
  padding: 5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.team-photo img {
  border-radius: 50%;
  max-width: 250px;
  height: 250px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.team-photo img:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.team-text {
  margin-top: 1rem;
}

h4 {
  color: #941110;
  font-size: 1.75rem;
  font-weight: 600;
  transition: color 0.3s ease;
}

h4:hover {
  color: #d9534f;
}

p {
  color: #6c757d;
  font-size: 1.2rem;
  font-weight: 300;
}

.social-icons {
  margin-top: 1rem;
  display: flex;
}

.social-icons a {
  color: #941110;
  font-size: 1.5rem;
  margin-right: 1rem;
  transition: color 0.3s ease, transform 0.3s ease;
}

.social-icons a:hover {
  color: #28a745;
  transform: scale(1.2);
}

i {
  font-size: 2rem;
}

@media (max-width: 768px) {
  .member-section {
    flex-direction: column; 
    padding: 2rem;
    text-align: center !important; 
  }

  .member-section:last-child{
    margin-bottom: 40px !important;
  }

  .member-section .team-photo, .social-icons{
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .team-photo {
    margin-bottom: 1.5rem;
  }

  .team-photo img {
    max-width: 150px; 
    height: 150px;
    display: flex;
    justify-content: center !important; 
  }

  .team-text h4 {
    font-size: 1.4rem;
  }

  .team-text p {
    font-size: 1rem; 
    margin-bottom: 1rem; 
  }
    
  #mission .highlight{
    font-size: 1rem;
  }

  #mission .lead-highlight{
    margin-top: 500rem;
  }

  .social-icons {
    justify-content: center !important; 
    gap: 1rem; 
  }

  .social-icons a {
    font-size: 1.5rem; 
  }

}
</style>