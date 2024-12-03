import React from "react";
import { CheckIcon, DeliveryCheckIcon, QualityIcon } from "../../../../assets/icons";

function About() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="mt-2 md:mt-5">
          <div className="mb-4">
            <h3 className="text-xl md:text-3xl font-semibold text-center">
              Afzalliklarimiz
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <div className="w-full p-4 bg-white rounded-md flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-[50%]">
                <img src="/offer.png" alt="" />
              </div>
              <h3 className="text-base md:text-lg text-center">
                Qulay narxlar va barcha mahsulotlarga yaxshi chegirmalar.
              </h3>
            </div>
            <div className="w-full p-4 bg-white rounded-md flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-[50%]">
                <img src="/deliverables.png" alt="" />
              </div>
              <h3 className="text-base md:text-lg text-center">
                Sifat nazorati Yetkazib berishdan oldin har bir mahsulotni
                tekshiramiz.
              </h3>
            </div>
            <div className="p-4 bg-white rounded-md flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-[50%]">
                <p className="text-3xl">+500</p>
              </div>
              <h3 className="text-base md:text-lg text-center">Katta tanlov 500+ dan ortiq mahsulot</h3>
            </div>
            <div className="p-4 bg-white rounded-md flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-[50%]">
                <img src="/factory.png" alt="" />
              </div>
              <h3 className="text-base md:text-lg text-center">Tajribali montajchilar</h3>
            </div>
            <div className="p-4 bg-white rounded-md flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-[50%]">
                <img src="/insurance.png" alt="" />
              </div>
              <h3 className="text-base md:text-lg text-center">Umr bo'yi kafolat</h3>
            </div>
            <div className="p-4 bg-white rounded-md flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-[50%]">
                <img src="/worker.png" alt="" />
              </div>
              <h3 className="text-base md:text-lg text-center">Tajribali montajchilar</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
