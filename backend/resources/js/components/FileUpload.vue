<template>
    <div class="row">
            <div class="col-md-12">
                <img :src="image" class="img-responsive">
            </div>
        <hr>
            <div class="col-md-8">
                <input type="file" :name="name" v-on:change="onFileChange" class="form-control">
            </div>
            <div class="col-md-4">
                <button class="btn btn-success btn-block" @click="upload">Upload</button>
            </div>
    </div>
</template>
<style scoped>
    img{
        max-height: 30vh;
    }
</style>
<script>
    export default{
        props: {
            path: "",
            resource: "",
            image: "",
            name:""
        },
        data(){
            return {

            }
        },
        methods: {
            onFileChange(e) {

                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },
            createImage(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = (e) => {
                    console.log('load');
                    vm.image = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            upload(){
                console.log(this.path);
                axios.post(this.path,{image: this.image}).then(response => {

                });
            }
        }
    }
</script>