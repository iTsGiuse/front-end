<script>
export default {
    name: 'Header'
}
</script>

<template>
    <header>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-6 col-md-4 d-flex align-items-center">
                    <router-link to="/home">
                        <img src="../assets/images/Logo/Logo.jpg" alt="Logo" class="img-fluid">
                    </router-link>
                </div>
                <div class="col-12 col-md-5 mt-3 mt-md-0">
                    <nav class="navbar navbar-expand-md navbar-light justify-content-md-center">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <router-link class="nav-link" active-class="active-link" to="/home">Home</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" active-class="active-link" to="/eventi">Eventi</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" active-class="active-link" to="/classifica">Classifica</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" active-class="active-link" to="/chi-siamo">Chi Siamo</router-link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div class="col-6 col-md-3 text-end">
                    <router-link to="/login">
                        <i class="fa-regular fa-user text-white fs-4"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background: #941110;
    padding: 10px 0;

    img {
        width: 100%;
        height: auto;
        max-width: 100px;
    }

    ul {
        list-style: none;
        display: flex;
        justify-content: center;
        padding: 0;
        margin: 0;

        li {
            margin: 0 10px;
            transition: background-color 0.3s;
            font-size: 20px;

            a {
                text-decoration: none;
                color: white;
                display: block;
                padding: 10px 15px;
                border-radius: 5px;
            }

            &:hover {
                background-color: darkred;
                color: white;
                cursor: pointer;
            }
        }
    }
}

.nav-link.active {
    background-color: darkred;
    color: white;
    border-radius: 5px;
}
</style>