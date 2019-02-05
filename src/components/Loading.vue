<template>
    
</template>

<script>
export default {
    name: 'Loading',
    data () {
        return {
            bottom: false,
        }
    },
    methods: {
        bottomVisible () {
            return (window.innerHeight + window.scrollY) >= document.body.offsetHeight
        }
    },
    watch: {
        bottom (value) {
            if(value) {
                this.$emit('loading')
            }
        }
    },
    created () {
        let vm = this
        window.addEventListener('scroll', () => {
            vm.bottom = vm.bottomVisible()
        })
    }
}
</script>

<style>

</style>
