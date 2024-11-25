export default defineEventHandler(async (event) => {
  return {
    fname: "มานะ",               //ชื่อข้าพเจ้า หรือผู้กู้
    lname: "เพียงใจ",                //นามสกุล 
    name: 'นายสมชาย ใจดี',
    accNo: '1234567890',
    depositamount:3000,
    amount: 1000,
    amountsum: 3000,
    amountth: 'หนึ่งพันบาทถ้วน',
    date: '24 กรกฏาคม 2567',
    receivedLocation: "โรงพยาบาลศรีสะเกษ",
    office: "สหกรณ์ออมทรัพย์",
    bank1:"ธนาคารกรุงเทพ",
    bank2:"ธนาคารกสิกรไทย",
    bank3:"ธนาคารกรุงไทย",
    acccheck1: "144234567890",
    acccheck2: "244234567890",
    acccheck3: "344234567890",
    dateReceived: new Date(),
    monthlyIncome: 10000,
    loanAccountNumber: "345/67",
    repaymentPlan: [
      { m: "มค", amount: 1000 },
      { m: "กพ", amount: 1000 },
      { m: "มน", amount: 1000 },
      { m: "มษ", amount: 1000 },
    ],
  }
});

