import React from "react";

function Company() {
  return (
    <section className="bg-white mt-10 py-6">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-3xl md:text-4xl font-medium text-center">Kampaniya haqida</h2>
        <div className="w-full mt-4 flex flex-col md:flex-row">
          <div className="w-full flex items-center justify-center">
            <img className="w-[60%]" src="/AQEM-final-2.png" alt="" />
          </div>
          <div className="w-full p-2 md:p-4 text-center md:text-start">
            <h3 className="text-base font-normal text-black">
              AQEM GROUP kompaniyasi 2023 yi 11-noyabrlda tashkil etilgan va
              o‘zining natyajnoy patalok ishlab chiqarish bo‘yicha yetakchi
              o‘rin tutmoqda. Bizning asosiy maqsadimiz yuqori sifatli tortma
              shift ishlab chiqarish va mijozlarimizga zamonaviy dizaynlar va
              materiallar taqdim etishdir. Kompaniya o‘z faoliyatini kichik sex
              sifatida boshlagan, ammo tez orada yuqori sifat va innovatsiyalar
              bilan tanilgan brendga aylandi. Bizning seximizda ilg‘or
              texnologiyalar va yuqori sifatli xom ashyo ishlatiladi. Har bir
              ishlab chiqarish bosqichi sifat nazorati ostida amalga oshiriladi.
              Har bir partiya yakuniy sifat tekshiruvidan o‘tadi, shunda
              mijozlarga sifatli va bardoshli mahsulotlar taqdim etiladi. . Biz
              osma shiftlarni ishlab chiqarishda ekologik jihatdan xavfsiz
              materiallarni tanlaymiz, shuningdek, xayriya loyihalariga ham o‘z
              hissamizni qo‘shamiz.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Company;
