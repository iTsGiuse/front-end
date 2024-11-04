<script>
    export default{
        name: 'Footer'
    }
</script>

<template>

    <footer>
        <div class="container py-3">
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <div class="logo">
                        <img src="../assets/images/Logo/Logo.jpg" alt="Logo">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h4>Dracarys™</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <div class="me-3">
                        <a href="https://www.tiktok.com/@dracarys545">
                            <i class="fa-brands fa-tiktok fa-2x"></i>
                        </a>
                    </div>
                    <div class="me-3">
                        <a href="https://www.instagram.com/dracarys_staff?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                            <i class="fa-brands fa-instagram fa-2x"></i>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.threads.net/@dracarys_staff">
                            <i class="fa-brands fa-threads fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    footer{
        background-color: #941110;
        color: white;
        text-align: center !important;
        
        .logo{
            width: 100px;

            img{
                width: 100%;
                height: 100%;
            }
        }

        a{
            color: white;

            i{
                font-size: 30px;
            }
        }
    }

</style>
