<template>
    <h1>Test</h1>
    <input type="file" accept="image/jpeg/*" @change="uploadImage()" />
    <img v-if="flag == '1'" :src="rawImg" alt="Error">

</template>

<script>
export default {
    data() {
        return {
            rawImg: "",
            flag: '0',
        }
    },
    methods: {
        uploadImage() {
            const file = document.querySelector('input[type=file]').files[0]
            const reader = new FileReader()

            reader.onloadend = () => {
                this.rawImg = reader.result;
            }
            reader.readAsDataURL(file);
            this.flag = '1'
        }
    }
}
</script>