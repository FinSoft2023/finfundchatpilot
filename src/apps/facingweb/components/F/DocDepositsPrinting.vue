<template>
  <FPaperSize>
    <div class="col-span-2 font-bold text-gray-900 dark:text-gray-900">
      <p class="mt-[0mm] ml-[10cm] ">
        <!-- โรงพยาบาลศรีสะเกษ -->
        <FFiLL :data="data?.receivedLocation"
               class="min-w-80" />
      </p>
    </div>
    <div class="flex">
      <div class="ml-[2cm]">
        <p class="mt-[8mm]">
          <!-- สหกรณ์ออมทรัพย์  -->
          <FFiLL :data="data?.office"
                 class="min-w-80" />
        </p>
        <p class="mt-[2mm] text-gray-900 font-bold dark:text-gray-90">
          <FFiLL class="min-w-52"
                 :data="data?.dateReceived"
                 date-format="short" />
        </p>
      </div>
      <div class="flex flex-col gap-1 mt-4 ml-[6.3cm] text-gray-900 font-bold dark:text-gray-90">
        <UIcon name="i-ic-baseline-check" />
        <UIcon name="i-ic-baseline-check" class="text-white"  />
        <UIcon name="i-ic-baseline-check" class="text-white" />
        <UIcon name="i-ic-baseline-check" class="text-white" />
      </div>
    </div>
    <!-- <div class="flex datas-center">
      <div class="flex datas-center">
        <div class="ml-[9cm]  text-gray-900 font-bold dark:text-gray-90">
          <FFiLLCheck />
          <FFiLLCheck />
        </div>
      </div>
    </div> -->
    <div class="grid grid-cols-3 ">
      <div class="col-span-2 mt-2">
        <p class="ml-[60mm] text-gray-900 dark:text-gray-90">
          <!-- {{ data?.name }} -->
          <FFiLL class="min-w-56"
                 :data="`${data?.fname}  ${data?.lname}`" />
        </p>
      </div>
      <div class="mt-2">
        <p class="ml-[36mm] text-gray-900 dark:text-gray-90">
          <!-- {{ data?.accNo }} -->
          <FFiLL :data="data?.accNo"
                 class="min-w-80" />
        </p>
      </div>
      <div class="col-span-2 mt-6">
        <p class="ml-[2cm] text-gray-900 dark:text-gray-90">
          <!-- <FMoneyAmount :amount="data?.amount" /> -->
          <FFiLL :data="data?.amount"
                 class="min-w-80" />
        </p>
      </div>
      <div>
        <p class="mt-6 ml-0mm text-gray-900 dark:text-gray-90">
          <!-- <FMoneyAmount :amount="data?.amount" /> -->
          <FFiLL :data="data?.amount"
                 class="min-w-80" />
        </p>
      </div>
      <div class="mt-5 ml-[2cm]">
        <FFiLL class="min-w-28"
               :data="data?.bank1" />
      </div>
      <div class="mt-5 ml-[1cm]">
        <FFiLL class="min-w-28"
               :data="data?.acccheck1" />
      </div>
      <div class="mt-5">
        <FFiLL :data="data?.amount"
               class="min-w-80" />
      </div>
      <div class="ml-[2cm]">
        <FFiLL class="min-w-28"
               :data="data?.bank2" />
      </div>
      <div class="... ml-[1cm]">
        <FFiLL class="min-w-28"
               :data="data?.acccheck2" />
      </div>
      <div class="...">
        <FFiLL :data="data?.amount"
               class="min-w-80" />
      </div>
      <div class="ml-[2cm]">
        <FFiLL class="min-w-28"
               :data="data?.bank3" />
      </div>
      <div class="... ml-[1cm]">
        <FFiLL class="min-w-28"
               :data="data?.acccheck3" />
      </div>
      <div class="...">
        <FFiLL :data="data?.amount"
               class="min-w-80" />
      </div>
      <div class="col-span-2 mt-6">
        <p class="ml-[2cm] text-gray-900 dark:text-gray-90">
          <FMoneyText :amount="data?.amount" />
          <!-- {{ data?.amountth }} -->

        </p>
      </div>
      <div class="mt-6">
        <p class="ml-0mm text-gray-900 dark:text-gray-90">
          <!-- <FMoneyAmount :amount="data?.amount" /> -->
          <FFiLL :data="data?.amount"
                 class="min-w-80" />
        </p>
      </div>
    </div>
  </FPaperSize>
</template>
<script setup lang="ts">
const { data } = await useFetch<any>('/api/sampleWithData');
</script>