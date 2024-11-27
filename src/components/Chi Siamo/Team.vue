<script>
import admin from '../../../admin.js';

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
    <section id="team">
        <!-- Intestazione -->
        <div class="header text-center">
            <h3 class="section-title">Il Nostro Team</h3>
            <p class="lead">Incontra i membri chiave del nostro team.</p>
        </div>
        <!-- Membri -->
        <div class="content">
            <div v-if="admin.length === 0">
                <p>Non ci sono membri nel team.</p>
            </div>
            <div 
                v-for="(adminItem, index) in admin" 
                :key="adminItem.key" 
                class="member-section"
                :class="{'bg-white': index % 2 === 0, 'bg-light text-dark': index % 2 !== 0}">
                <!-- Ordine alternato: se l'indice è pari, la foto è a sinistra, altrimenti a destra -->
                <div :class="{'order-1': index % 2 === 0, 'order-2': index % 2 !== 0}" class="team-photo">
                    <img 
                        :src="adminItem.foto" 
                        alt="Foto di {{ adminItem.nome }} {{ adminItem.cognome }}">
                </div>
                <div :class="{'order-2': index % 2 === 0, 'order-1': index % 2 !== 0}" class="team-text">
                    <h4>{{ adminItem.nome }} {{ adminItem.cognome }}</h4>
                    <p>{{ adminItem.descrizione }}</p>
                    
                    <!-- Social icons -->
                    <div class="social-icons">
                        <a  
                           :href="adminItem.instagram" 
                           target="_blank" 
                           class="text-primary">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a  
                           :href="adminItem.linkedin" 
                           target="_blank" 
                           class="text-primary">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </template>
    
    
    
    <style scoped lang="scss">
    /* Variabili */
    $primary-color: #4CAF50;
    $light-color: #F0F0F0;
    $white-color: #FFFFFF;
    $dark-text: #333;
    
    /* Sezione Team */
    #team {
        height: 100%; 
        display: flex;
        flex-direction: column;
        justify-content: flex-start; 
        overflow: hidden; 
    
        .header {
            text-align: center;
            margin-bottom: 1rem;
    
            .section-title {
                font-size: 2rem;
                font-weight: bold;
                color: $primary-color;
                text-transform: uppercase;
            }
    
            .lead {
                font-size: 1.2rem;
                color: $dark-text;
            }
        }
    
        .content {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            flex-grow: 1;
    
            .member-section {
                display: flex;
                align-items: center;
                padding: 1.5rem;  
                min-height: calc((100vh - 10vh) / 5); 
                box-sizing: border-box;
    
                &.bg-white {
                    background-color: $white-color;
                    color: $dark-text;
                }
    
                &.bg-light {
                    background-color: $light-color;
                    color: $dark-text;
                }
    
                .team-photo {
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    margin-right: 1rem;
    
                    img {
                        max-width: 150px;
                        height: 150px;
                        object-fit: cover;
                        border-radius: 50%;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    }
                }
    
                .team-text {
                    flex: 2;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
    
                    h4 {
                        margin-bottom: 0.5rem;
                        font-weight: bold;
                        color: $primary-color;
                    }
    
                    p {
                        margin-bottom: 0;
                        font-size: 1rem;
                        color: $dark-text;
                    }
    
                    .social-icons {
                        a {
                            margin-right: 0.5rem;
    
                            i {
                                font-size: 1.5rem;
                                transition: color 0.3s ease;
                            }
    
                            &:hover i {
                                color: darken($primary-color, 10%);
                            }
                        }
                    }
                }
            }
        }
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
        #team {
            .content {
                .member-section {
                    flex-direction: column;
                    text-align: center;
                    height: auto;
                    padding: 1rem 0;
    
                    .team-photo {
                        margin-bottom: 1rem;
    
                        img {
                            max-width: 120px;
                            height: 120px;
                        }
                    }
    
                    .team-text {
                        h4 {
                            font-size: 1.5rem;
                        }
    
                        p {
                            font-size: 0.9rem;
                        }
                    }
                }
            }
        }
    }
    </style>
    