<template>
  <FPaperSize>
    <div class="">
      <div class="">
        <!-- <pre>{{ data }}</pre> -->
        <div class=" col-span-3 font-bold text-gray-900 dark:text-gray-900">
          <p class="mt-[14mm] ml-[8cm]">โรงพยาบาลศรีสะเกษ</p>
        </div>
        <p class="mt-[8mm] ml-[3cm] ">สหกรณ์ออมทรัพย์ </p>
        <p class="mt-[2mm] ml-[3cm] text-gray-900 font-bold dark:text-gray-90">09/08/2567</p>
        <div class="grid grid-cols-3 gap-4">          
          <div class="col-span-2">
            <p class="mt-[3mm] ml-[5cm] text-gray-900 dark:text-gray-90">{{ data?.name }} </p>
          </div>
          <div class="...">
            <p class="mt-[3mm] ml-[23mm] text-gray-900 dark:text-gray-90">{{ data?.accNo }}</p>
          </div>
          <div class="col-span-2 ...">
            <p class="mt-[1mm] ml-[15mm] text-gray-900 dark:text-gray-90">
              <!-- <FMoneyText :amount="data?.amount" /> -->
              {{ data?.amountth }}
            </p>
          </div>
          <div class="...">
            <p class="mt-[1mm] ml-[13mm] text-gray-900 dark:text-gray-90">
              <!-- <FMoneyAmount :amount="data?.amount" /> -->
              {{ data?.amountnum }}

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
  amountnum: 1000.00,
  amountth: 'หนึ่งพันบาทถ้วน',
  date: '24 กรกฏาคม 2567'
})
</script>
