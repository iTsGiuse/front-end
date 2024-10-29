<script>
    export default{
        name: 'Header'
    }
</script>

<template>
    <header>
        <div class="container">
            <div class="row py-3 justify-content-center">
                <div class="col-12 text-center">
                    <a href="#">
                        <img src="https://img.freepik.com/foto-premium/leggende-del-drago-rosso-fuoco_880127-642.jpg" alt="Logo" class="img-fluid" style="max-width: 150px;">
                    </a>
                </div>
            </div>
            <nav class="navbar navbar-expand-md navbar-light">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/home">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/eventi">Eventi</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/classifica">Classifica</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/chi-siamo">Chi Siamo</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    header{
        background: red;
        
        img{
            width: 100%;
            height: auto;
        }
        
        nav{
            padding: 0px;
        }
        ul{
            list-style: none;
            display: flex;
            justify-content: center;
            padding: 0;
            margin: 0; 
  

            li {
                margin: 0px; 
                transition: background-color 0.3s; 

                a {
                    text-decoration: none; 
                    color: white;
                    display: block;
                }

                &:hover {
                    background-color: darkred; 
                    color: white;
                    cursor: pointer; 
                }
            }
        }
    }
</style>