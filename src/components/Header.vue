<script>
    export default {
        name: 'Header'
    }
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="../assets/images/Logo/Logo.jpg" alt="Logo" class="img-fluid">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="mx-auto">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link class="nav-link" active-class="active" to="/home">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" active-class="active" to="/eventi">Eventi</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" active-class="active" to="/classifica">Classifica</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" active-class="active" to="/chi-siamo">Chi Siamo</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" active-class="active" to="/contattaci">Contattaci</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" active-class="active" to="/faq">FAQ</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="ms-auto">
                        <router-link class="nav-link" active-class="active" to="/login">
                            <i class="fa-regular fa-user"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">
    header {
        font-size: 20px !important;
        color: white !important;
        background: #941110 !important;

        .navbar-brand {
            width: 100px;

            img {
                width: 100%;
                height: auto;
            }
        }

        ul {
            list-style: none;
            display: flex;
            justify-content: center;
            padding: 0;
            margin: 0;

            li {
                margin: 0 15px;
                transition: color 0.3s;

                .nav-link {
                    text-decoration: none;
                    color: white;
                    display: block;
                    padding: 10px 15px;
                    border-radius: 5px;
                    position: relative; 

                    &::after {
                        content: '';
                        display: block;
                        width: 0;
                        height: 5px;
                        background: black; 
                        transition: width 0.3s;
                        position: absolute;
                        bottom: -75%; 
                        left: 0;
                    }

                    &.active::after {
                        width: 100%; 
                    }

                    &:hover {
                        color: #ccc; 
                        cursor: pointer;
                    }
                }
            }
        }

        .nav-link.active {
            color: #ccc; 
        }
    }
</style>