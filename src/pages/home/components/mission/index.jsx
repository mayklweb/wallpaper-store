import React from "react";

function Mission() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="mt-6">
          <div>
            <h2 className="text-3xl text-center font-semibold">
              Bizning Missiyamiz
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-4">
            <div className="bg-white p-4 rounded-lg flex flex-col items-center justify-center">
              <div className="w-2/4 p-4">
                <img src="/premium-quality.png" alt="" />
              </div>
              <p className="text-lg text-center font-medium p-4">
                Bizning missiyamiz – sifatli, ekologik toza va uzoq muddat
                ishlaydigan natyajnoy pataloklar ishlab chiqarishdir.
              </p>
            </div>
            <div className="bg-white pt-6 px-4 pb-6 rounded-lg flex flex-col items-center justify-center">
            <div className="w-2/4 p-4">
                <img src="/smartphone.png" alt="" />
              </div>
              <p className="text-lg text-center font-medium p-4">
                Biz zamonaviy texnologiyalarni qo‘llagan holda, mijozlarimizni
                yuqori sifatli va noyob dizayndagi matolar bilan ta'minlashni
                o‘z oldimizga maqsad qilib qo‘yganmiz.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg flex flex-col items-center justify-center">
            <div className="w-2/4 p-4">
                <img src="/expansion.png" alt="" />
              </div>
              <p className="text-lg text-center font-medium p-4">
                Kelajakda AQEM kompaniyasi global bozorga chiqqan holda,
                o‘zining sifatli va innovatsion mahsulotlari bilan tanilgan
                yetakchi ishlab chiqaruvchiga aylanishni niyat qilgan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
