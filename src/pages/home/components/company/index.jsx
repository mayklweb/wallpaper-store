import React from "react";

function Company() {
  return (
    <section className="bg-white mt-10 py-6">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-3xl md:text-4xl font-medium text-center">
          Kampaniya haqida
        </h2>
        <div className="w-full mt-4 flex flex-col lg:flex-row">
          <div className="w-[40%] flex items-center justify-center">
            <img className="w-[80%]" src="/AQEM-final-2.png" alt="" />
          </div>
          <div className="w-[60%] p-2 md:p-4 text-center md:text-start">
            <h3 className="text-lg font-medium text-black text-center">
               AQEM GROUP kompaniyasi 2023-yil 11-noyabrda
              tashkil etilgan bo‘lib, o‘zining tortma shift (natyajnoy patalok)
              ishlab chiqarish bo‘yicha yetakchi o‘rinlardan birini egallab
              kelmoqda. Bizning asosiy maqsadimiz – yuqori sifatli tortma
              shiftlarni ishlab chiqarish va mijozlarimizga zamonaviy dizaynlar
              hamda materiallarni taqdim etishdir. Kompaniya dastlab kichik sex
              sifatida o‘z faoliyatini boshlagan, biroq qisqa vaqt ichida yuqori
              sifat va innovatsiyalar tufayli taniqli brendga aylangan. Bizning
              seximizda zamonaviy texnologiyalar va yuqori sifatli xomashyo
              ishlatiladi. Har bir ishlab chiqarish jarayoni qat’iy sifat
              nazorati ostida amalga oshiriladi. Mahsulotlarning har bir
              partiyasi yakuniy sifat tekshiruvidan o‘tkaziladi, bu esa
              mijozlarimizga bardoshli va sifatli mahsulotlar taqdim etishimizni
              ta’minlaydi. Shuningdek, biz osma shiftlarni ishlab chiqarishda
              ekologik jihatdan xavfsiz materiallardan foydalanamiz va xayriya
              loyihalariga o‘z hissamizni qo‘shib kelmoqdamiz.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Company;
