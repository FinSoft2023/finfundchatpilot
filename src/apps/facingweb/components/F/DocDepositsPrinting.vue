<template>
  <FPaperSize>
    <div class="col-span-2 font-bold text-gray-900 dark:text-gray-900">
      <p class="mt-[0mm] ml-[10cm] ">โรงพยาบาลศรีสะเกษ</p>
    </div>
    <div class="col-start-3 col-span-3">
      <p class="mt-[8mm] ml-[3cm]">สหกรณ์ออมทรัพย์ </p>
    </div>
    <div class="flex datas-center">
      <p class="mt-[2mm] ml-[3cm] text-gray-900 font-bold dark:text-gray-90">09/08/2567</p>
      <div class="flex datas-center">
        <div class="ml-[9cm]  text-gray-900 font-bold dark:text-gray-90">
          <!-- <DFiLLCheck /> -->
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3 mt-2">
      <div class="col-span-2 mt-2">
        <p class="ml-[60mm] text-gray-900 dark:text-gray-90">{{ data?.name }}</p>
      </div>
      <div class="mt-2">
        <p class="ml-[35mm] text-gray-900 dark:text-gray-90">{{ data?.accNo }}</p>
      </div>
      <div class="col-span-2 mt-6">
        <p class="ml-[2cm] text-gray-900 dark:text-gray-90">
          <!-- <FMoneyAmount :amount="data?.amount" /> -->
          {{ data?.amount }}
        </p>
      </div>
      <div>
        <p class="mt-6 ml-0mm text-gray-900 dark:text-gray-90">
          <!-- <FMoneyAmount :amount="data?.amount" /> -->
          {{ data?.amount }}

        </p>
      </div>
      <div class="mt-5 ml-[2cm]">111</div>
      <div class="mt-5 ml-[1cm]">111</div>
      <div class="mt-5">111</div>
      <div class="ml-[2cm]">222</div>
      <div class="... ml-[1cm]">222</div>
      <div class="...">222</div>
      <div class="ml-[2cm]">333</div>
      <div class="... ml-[1cm]">333</div>
      <div class="...">333</div>
      <div class="col-span-2 mt-6">
        <p class="ml-[2cm] text-gray-900 dark:text-gray-90">
          <!-- <FMoneyText :amount="data?.amount" /> -->
          {{ data?.amountth }}

        </p>
      </div>
      <div class="mt-6">
        <p class="ml-0mm text-gray-900 dark:text-gray-90">
          <!-- <FMoneyAmount :amount="data?.amount" /> -->
          {{ data?.amount }}

        </p>
      </div>
    </div>
  </FPaperSize>
</template>

<script setup
  lang="ts">
const data = ref({
  name: 'นายสมชาย ใจดี',
  accNo: '1234567890',
  amount: 1000.00,
  amountth: 'หนึ่งพันบาทถ้วน',
  date: '24 กรกฏาคม 2567'
})
</script>
