<template>
  <FPaperSize>
    <div class="col-span-2 font-bold text-gray-900 dark:text-gray-900">
      <p class="mt-[2mm] ml-[8cm] ">โรงพยาบาลศรีสะเกษ</p>
    </div>
    <div class="col-start-3 col-span-3">
      <p class="mt-[1mm] ml-[3cm]">สหกรณ์ออมทรัพย์ </p>
    </div>
    <div class="flex datas-center">
      <p class="mt-[1mm] ml-[3cm] text-gray-900 font-bold dark:text-gray-90">24/08/2567</p>
      <div class="flex datas-center">
        <div class="ml-[9cm]  text-gray-900 font-bold dark:text-gray-90">
          <DFiLLCheck />
        </div>
      </div>
    </div>
    <div>
      <div class="flex datas-center">
        <p class="mt-[1mm] ml-[6cm] text-gray-900 dark:text-gray-90">{{ data?.name }}</p>
        <p class="mt-[1mm] ml-[9cm] text-gray-900 dark:text-gray-90">{{ data?.accNo }}</p>
      </div>
      <div class="flex datas-center">
        <p class="mt-[1mm] ml-[2cm] text-gray-900 dark:text-gray-90">
          <FMoneyAmount :amount="data?.amount" />
        </p>
        <p class="mt-[1mm] ml-[13cm] text-gray-900 dark:text-gray-90">
          <FMoneyAmount :amount="data?.amount" />
        </p>
      </div>
      <div class="flex datas-center">
        <p class="mt-[4cm] ml-[2cm] text-gray-900 dark:text-gray-90">
          <FMoneyAmount :amount="data?.amount" />
        </p>
        <p class="mt-[4cm] ml-[13cm] text-gray-900 dark:text-gray-90">
          <FMoneyAmount :amount="data?.amount" />
        </p>
      </div>
    </div>
  </FPaperSize>
</template>

<script setup
  lang="ts">
  const data = ref({
    name: 'นาย สมชาย ใจดี',
    accNo: '1234567890',
    amount: 1000,
    date: '24 กรกฏาคม 2567'
  })
</script>
