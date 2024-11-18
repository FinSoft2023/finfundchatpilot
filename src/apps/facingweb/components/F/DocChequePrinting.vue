<template>
  <DocChequePrinting>
    <div class="grid grid-cols-[62mm_188mm]">
      <div class="bg-white">
        <p class="mt-[2mm] ml-[14mm]">25 สิงหาคม </p>
        <p class="ml-[14mm]">{{ data?.name }}</p>
        <p class="ml-[14mm]"><FMoneyAmount :amount="data?.amountnum" />
        </p>
        <p class="mt-[29mm] ml-[25mm]">
          <FMoneyAmount :amount="data?.amountnum" />
          <!-- {{ data?.amountnum }} -->

        </p>
      </div>
      <div class="bg-white">
        <div class="grid grid-cols-2">
          <div class="text-start">
            <p class="mt-[33mm] ml-[45mm]">{{ data?.name }}</p>
          </div>
          <div>
            <div class="flex justify-end mt-[6mm]">
              <!-- <p class="px-4 text-end">วันที่</p> -->
              <div class="w-2in mr-[6mm]">
                <div class="flex ">
                  <p> 24 กรกฏาคม 2567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p class="mt-[7mm] ml-[45mm] mr-[6mm]">
            <!-- <FMoneyText :amount="data?.amount" /> -->
             {{ data?.amountth }}
          </p>
        </div>
        <div class="flex justify-end mr-[6mm]">
          <div class="border-2 border-white w-[77mm] h-[9mm] flex items-center justify-center">
            <p class="text-center mt-2">
              <FMoneyAmount :amount="data?.amountnum" />
               <!-- {{ data?.amountnum }} -->
            </p>
          </div>
        </div>
      </div>
    </div>

  </DocChequePrinting>
</template>
<script setup lang="ts">
const data = ref({
  name: 'นายสมชาย ใจดี',
  amountnum: 1000.00,
  amountth: 'หนึ่งพันบาทถ้วน',
  date: '24 กรกฏาคม 2567'
})

</script>