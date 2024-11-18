<template>
  <FPaperSize>
    <div class="">
      <div class="">
        <!-- <pre>{{ data }}</pre> -->
        <div class=" col-span-3 font-bold text-gray-900 dark:text-gray-900">
          <p class="mt-[2cm] ml-[8cm]">โรงพยาบาลศรีสะเกษ</p>
        </div>
        <p class="mt-[1mm] ml-[3cm] ">สหกรณ์ออมทรัพย์ </p>
        <p class="mt-[1mm] ml-[3cm] text-gray-900 font-bold dark:text-gray-90">08/08/2567</p>
        <div>
          <div class="flex-1 items-center">
            <p class="mt-[1mm] ml-[6cm] text-gray-900 dark:text-gray-90">{{ data?.name }} </p>
            <p class="mt-[1mm] ml-[9cm] text-gray-900 dark:text-gray-90">{{ data?.accNo }}</p>
          </div>
          <div class="flex items-center">
            <p class="mt-[1mm] ml-[2cm] text-gray-900 dark:text-gray-90">
              <FMoneyAmount :amount="data?.amount" />
            </p>
            <p class="mt-[1mm] ml-[12cm] text-gray-900 dark:text-gray-90">
              <FMoneyAmount :amount="data?.amount" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </FPaperSize>
</template>

<script setup lang="ts">
const data = ref({
  name: 'นายสมชาย ใจดี',
  accNo: '1234567890',
  amount: 1000,
  date: '24 กรกฏาคม 2567'
})
</script>
