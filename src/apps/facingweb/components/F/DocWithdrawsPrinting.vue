<template>
  <FPaperSize>
    <div class="">
      <div class="">
        <!-- <pre>{{ data }}</pre> -->
        <div class=" col-span-3 font-bold text-gray-900 dark:text-gray-900">
          <p class="mt-[2mm] ml-[8cm]">
            <!-- โรงพยาบาลศรีสะเกษ -->
            <FFiLL :data="data?.receivedLocation"
                   class="min-w-80" />
          </p>
        </div>
        <p class="mt-[8mm] ml-[2cm] ">
          <!-- สหกรณ์ออมทรัพย์ -->
          <FFiLL :data="data?.office"
                 class="min-w-80" />
        </p>
        <p class="mt-[2mm] ml-[2cm] text-gray-900 font-bold dark:text-gray-90">
          <FFiLL class="min-w-52"
                :data="data?.dateReceived"
                date-format="short" />
          <!-- 09/08/2567 -->
        </p>
        <div class="grid grid-cols-3 gap-4">
          <div class="col-span-2">
            <p class="mt-[3mm] ml-[5cm] text-gray-900 dark:text-gray-90">
              <!-- {{ data?.name }}  -->
              <FFiLL class="min-w-56"
                     :data="`${data?.fname}  ${data?.lname}`" />
            </p>
          </div>
          <div class="...">
            <p class="mt-[3mm] ml-[24mm] text-gray-900 dark:text-gray-90">
              <!-- {{ data?.accNo }} -->
              <FFiLL :data="data?.accNo"
                     class="min-w-80" />
            </p>
          </div>
          <div class="col-span-2 ...">
            <p class="mt-[1mm] ml-[15mm] text-gray-900 dark:text-gray-90">
              <!-- <FMoneyText :amount="data?.amount" /> -->
              <!-- {{ data?.amountth }} -->
              <FMoneyText :amount="data?.amount" />
            </p>
          </div>
          <div class="...">
            <p class="mt-[1mm] ml-[13mm] text-gray-900 dark:text-gray-90">
              <!-- <FMoneyAmount :amount="data?.amount" /> -->
              <!-- {{ data?.amountnum }} -->
              <FFiLL :data="data?.amount"
                     class="min-w-80" />

            </p>
          </div>
        </div>
      </div>
    </div>
  </FPaperSize>
</template>


<script setup lang="ts">const { data } = await useFetch<any>('/api/sampleWithData');

</script>
