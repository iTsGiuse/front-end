<script>
    export default{
        name: 'Contattaci',
    }
</script>

<template>
    <section id="Contattaci">
        <div class="container mt-5">
            <h2 class="my-3">Contattaci</h2>
            <form action="send_email.php" method="POST">
                <div class="form-group row my-3 mt-5">
                    <label for="name" class="col-sm-2 col-form-label">Nome</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="name" name="name" required>
                    </div>
                </div>
                <div class="form-group row my-3">
                    <label for="surname" class="col-sm-2 col-form-label">Cognome</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="surname" name="surname" required>
                    </div>
                </div>
                <div class="form-group row my-3">
                    <label for="email" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="email" name="email" required>
                    </div>
                </div>
                <div class="form-group row my-3">
                    <label for="message" class="col-sm-2 col-form-label">Messaggio</label>
                    <div class="col-sm-10">
                        <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
                    </div>
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-danger my-3">Invia</button>
                </div>
            </form>
        </div>
    </section>
</template>

<style lang="scss" scoped>

</style>