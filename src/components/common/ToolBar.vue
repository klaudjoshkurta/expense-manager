<script setup lang="ts">
import { ref } from "vue";
import { useColorMode } from "@vueuse/core";

import { Button } from '@/components/ui/button';
import { Sun, Moon, SunMoon } from 'lucide-vue-next';
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const theme = ref('auto');
const mode = useColorMode();
</script>

<template>
    <header class="fixed top-0 inset-x-0 z-10 flex items-center p-2">
        <div class="flex-1" /> <!-- Spacer -->
        <DropdownMenu>
            <DropdownMenuTrigger as-child>
                <Button variant="ghost" size="icon">
                    <Sun v-if="theme === 'light'" />
                    <Moon v-else-if="theme === 'dark'" />
                    <SunMoon v-else />
                    <span class="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent :align="'end'">
                <DropdownMenuRadioGroup v-model="theme" @update:model-value="mode = theme">
                    <DropdownMenuRadioItem value="auto">Auto</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    </header>
</template>
