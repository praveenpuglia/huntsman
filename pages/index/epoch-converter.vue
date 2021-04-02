<template>
  <div class="epoch-converter">
    <c-heading letter-spacing="wide" mb="2" size="2xl">
      Epoch Converter
    </c-heading>
    <c-input
      v-model.number="epoch"
      font-family="monospace"
      autofocus
      text-align="center"
      h="4rem"
      font-size="3rem"
      w="auto"
    ></c-input>
    <c-alert v-if="!dateTime.isValid" status="error">
      <c-alert-icon />
      <c-alert-title :mr="2">Invalid Date</c-alert-title>
      <c-alert-description
        >The epoch value you have provided seems to be
        invalid</c-alert-description
      >
    </c-alert>
    <c-grid mt="4" gap="8" template-columns="repeat(2, minmax(0, 1fr))">
      <c-box v-for="(zone, zoneId) in zones" :key="zoneId">
        <c-heading as="h2" size="lg" mb="2"
          >{{ zone.icon }} {{ zone.title }}</c-heading
        >
        <c-code px="4" py="1" w="100%">
          {{ zone.humanized }}
        </c-code>
        <c-heading as="h3" size="md" mt="4" mb="2">Breakdown</c-heading>
        <c-list style-type="disc" spacing="2">
          <c-list-item
            v-for="(item, key) in zone.breakdown"
            :key="key"
            display="flex"
            alig-items="center"
          >
            <c-text text-transform="capitalize" as="strong">{{ key }}</c-text>
            <c-text as="span" ml="auto">
              {{ item }}
            </c-text>
          </c-list-item>
        </c-list>
      </c-box>
    </c-grid>
  </div>
</template>

<script lang="ts">
import {
  CGrid,
  CBox,
  CHeading,
  CInput,
  CList,
  CListItem,
  CText,
  CAlert,
  CAlertIcon,
  CAlertTitle,
  CAlertDescription,
  CCode,
} from '@chakra-ui/vue'
import { DateTime } from 'luxon'

export default {
  name: 'EpochConverter',
  components: {
    CHeading,
    CInput,
    CGrid,
    CBox,
    CList,
    CListItem,
    CText,
    CAlert,
    CAlertIcon,
    CAlertTitle,
    CAlertDescription,
    CCode,
  },
  data() {
    return {
      epoch: Number(this.$route.query.t || new Date().getTime()),
    }
  },
  computed: {
    detectedMode() {
      const epochStringLen = this.epoch.toString().length
      switch (true) {
        case epochStringLen <= 12:
          return 'SECONDS'
        case epochStringLen >= 13:
          return 'MILLISECONDS'
        default:
          return 'SECONDS'
      }
    },
    dateTime() {
      return DateTime.fromMillis(
        this.detectedMode === 'MILLISECONDS' ? this.epoch : this.epoch * 1000
      )
    },
    zones() {
      const localDate = this.dateTime
      const utcDate = this.dateTime.toUTC()
      return {
        your: {
          title: 'Your Timezone',
          icon: '📍',
          humanized: this.dateTime.toLocaleString(
            DateTime.DATETIME_HUGE_WITH_SECONDS
          ),
          breakdown: {
            year: localDate.get('year'),
            month: localDate.get('monthLong'),
            date: localDate.get('day'),
            day: localDate.get('weekdayLong'),
            hour: localDate.get('hour'),
            minute: localDate.get('minute'),
            second: localDate.get('second'),
            millisecond: localDate.get('millisecond'),
            timezone: localDate.zoneName,
          },
        },
        utc: {
          title: 'UTC',
          icon: '🌐',
          humanized: this.dateTime
            .toUTC()
            .toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS),
          breakdown: {
            year: utcDate.get('year'),
            month: utcDate.get('monthLong'),
            date: utcDate.get('day'),
            day: utcDate.get('weekdayLong'),
            hour: utcDate.get('hour'),
            minute: utcDate.get('minute'),
            second: utcDate.get('second'),
            millisecond: utcDate.get('millisecond'),
            timezone: utcDate.zoneName,
          },
        },
      }
    },
  },
}
</script>
