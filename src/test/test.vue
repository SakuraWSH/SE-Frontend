<template>
    <h1>Test</h1>
    <input type="file" accept="image/jpeg/*" @change="uploadImage()" />
</template>

<script>
export default {
    methods: {
        uploadImage() {
            const file = document.querySelector('input[type=file]').files[0]
            const reader = new FileReader()

            let rawImg;
            reader.onloadend = () => {
                rawImg = reader.result;
                console.log(rawImg);
            }
            reader.readAsDataURL(file);
            console.log(file)
        }
    }
}
</script>