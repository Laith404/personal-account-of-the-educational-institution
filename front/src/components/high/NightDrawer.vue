<script setup>
import { useRouter } from 'vue-router';

defineProps({
    items: {
        type: Array,
        default: () => ([]),
    },
})

const router = useRouter();


const routerPage = (url) => {
    router.push(url)
}
</script>

<template>
<q-drawer
    show-if-above
    :width="200"
    :breakpoint="500"
    bordered
    class="bg-grey-3"
>
    <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
        <q-list padding>
            <q-item
                v-for="(item, index) in items"
                :key="`item-menu-${index}`"
                clickable
                v-ripple
                @click="routerPage(item.url)"
            >
                <q-item-section avatar>
                    <q-icon :name="item.icon" size="sm" />
                </q-item-section>
                <q-item-section>{{ item.name }}</q-item-section>
            </q-item>
        </q-list>
    </q-scroll-area>
</q-drawer>
</template>