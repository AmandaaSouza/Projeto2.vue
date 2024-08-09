<template>
ola
<ImagemPrincipal/>
<br>
<VideoUnico/>
<br>
<TabelaDiversos/>
<br>

</template>

<script>
import ImagemPrincipal from '@/components/ImagensDiversas.vue'
import VideoUnico from '@/components/VideoUnico.vue'
import TabelaDiversos from '@/components/TabelaDiversos.vue';
export default {
    name: 'PaginaPrincipal',
    components: {
        ImagemPrincipal, VideoUnico, TabelaDiversos
    },
}
</script>