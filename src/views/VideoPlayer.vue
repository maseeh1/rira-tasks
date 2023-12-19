<template>
  <div class="w-full h-full flex justify-center pt-10">
    <video ref="videoPlayer" :src="videoSrc" @timeupdate="saveTime" controls class="w-2/3"></video>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const videoSrc = 'https://mshb.ir/files/sample-video-480.mp4';
const videoPlayer = ref(null);

onMounted(() => {
  videoPlayer.value.currentTime = parseFloat(localStorage.getItem('videoTime')) || 0;
});

const saveTime = () => {
  localStorage.setItem('videoTime', videoPlayer.value.currentTime);
};

</script>