<template>
  <div class="container">
    <CGrid template-columns="16rem 1fr" h="100vh">
      <CBox w="100%" p="4" border-right="1px solid" border-color="gray.200">
        <CHeading display="flex" align-items="center" size="xl" mb="2" as="h1">
          <CIcon mr="2" name="huntsman"></CIcon> Huntsman
        </CHeading>
        <CBox v-for="link in links" :key="link.path">
          <CPseudoBox
            as="nuxt-link"
            :to="link.path"
            p="0.2rem"
            outline="none"
            :_focus="{
              shadow: 'outline',
            }"
            :_hover="{
              textDecoration: 'none',
              transform: 'translateX(3px)',
            }"
            transition="background-color,transform 0.15s ease-in"
            d="block"
            rounded="md"
            :bg="$route.path === link.path ? 'vue.50' : 'transparent'"
            :color="$route.path === link.path ? 'vue.700' : 'inherit'"
            font-weight="bold"
            font-size="sm"
            text-decoration="none"
          >
            {{ link.title }}
          </CPseudoBox>
        </CBox>
      </CBox>
      <CBox p="4" overflow-y="auto">
        <NuxtChild />
      </CBox>
    </CGrid>
  </div>
</template>

<script lang="ts">
import { CGrid, CBox, CPseudoBox, CHeading, CIcon } from '@chakra-ui/vue'
export default {
  name: 'App',
  components: {
    CGrid,
    CBox,
    CPseudoBox,
    CHeading,
    CIcon,
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data() {
    return {
      links: [
        {
          path: '/epoch-converter',
          title: 'Epoch Converter',
        },
      ],
    }
  },
}
</script>
