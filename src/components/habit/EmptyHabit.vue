<script setup lang="ts">
import { Plus } from 'lucide-vue-next';

</script>

<template>
    <div class="border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center h-56">
        <div class="text-gray-600 flex items-center">
            Click the <Plus :size="18" class="text-black mx-1.5" /> button to create a new habit.
        </div>
    </div>
</template>